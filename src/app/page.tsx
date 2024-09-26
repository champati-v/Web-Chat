import { BotIcon } from "lucide-react";

export default function Home() {
  return (
      <div className="flex flex-col items-center justify-center w-full h-full" >
        <BotIcon className="size-40 text-blue-500" />
        <div className="text-center items-center mt-5" >
          <h1 className="font-semibold text-[40px] " >Welcome to Web Chat!</h1>
          <h1 className="text-xl font-semibold mt-8" >----- Steps to start chat -----</h1>
          <ul className="text-left list-disc mt-5" >
            <li>Append the url of the website you want to chat, to the current url.</li>
            <li>Hit enter and you're good to go!</li>
          </ul>
        </div>
      </div>
  );
}
