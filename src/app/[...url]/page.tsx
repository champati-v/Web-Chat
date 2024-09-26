import { ragChat } from '@/lib/rag-chats'
import React from 'react'
import { redis } from '@/lib/redis'
import { ChatWrapper } from '@/components/ChatWrapper'
import { cookies } from 'next/headers'

interface PageProps {
    params: {
        url: string | string[] | undefined
    }
}

function reconstructurl({url}: {url:string[]}){
    const decodedComponents = url.map((component) => decodeURIComponent(component));
    return decodedComponents.join("/");
}

const page = async ({params}: PageProps) => {
const sessionCookie = cookies().get("SessionId")?.value
const reconstructedUrl = reconstructurl({url: params.url as string[]});

const sessionId = (reconstructedUrl + "--" + sessionCookie).replace(/\//g,"")

const isAlreadyIndexed = await redis.sismember("indexed-urls", reconstructedUrl)

const initialMessages = await ragChat.history.getMessages({amount: 10, sessionId})

if(!isAlreadyIndexed){
await ragChat.context.add({
    type: "html",
    source: reconstructedUrl,
    config: {chunkOverlap: 50, chunkSize: 200},
})

await redis.sadd("indexed-urls", reconstructedUrl)
}

  return (
    <ChatWrapper sessionId={sessionId} initialMessages={initialMessages} />
  )

}

export default page