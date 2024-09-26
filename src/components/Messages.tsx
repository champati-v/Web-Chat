import { type Message as TMessage } from "ai/react";
import { Message } from "./Message";
import { BotMessageSquareIcon, MessageSquare } from "lucide-react";

interface MessagesProps {
  messages: TMessage[];
}

export const Messages = ({ messages }: MessagesProps) => {
  return (
    <div className="flex max-h-[calc(100vh-3.5rem-7rem)] flex-1 flex-col overflow-y-auto">
      {messages.length ? (
        messages.map((message, i) => (
          <Message key={i} content={message.content} isUserMessage={message.role === "user"} />
        ))
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center gap-2">
          <BotMessageSquareIcon className="size-20 text-blue-500" />
          <h3 className="font-semibold text-xl text-white">Welcome to web Chat!</h3>
          <p className="text-zinc-500 text-sm">Append the website link to the current url and you're good to go!</p>
          <p className="text-zinc-500 text-sm">Ask your first question to get started.</p>
        </div>
      )}
    </div>
  );
};