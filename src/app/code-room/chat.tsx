import { CopilotChat } from "@copilotkit/react-ui";

export default function Chat() {
  return (
    <div className="relative h-full w-full">
      {/* Background blur effect */}
      <div className="absolute inset-0 opacity-20 blur-[100px]"></div>

      {/* Chatbox enclosed in a transparent white bordered box */}
      <div className="relative flex justify-end items-end h-full w-full p-8">
        <div className="relative bg-[#ffffff1a] backdrop-blur-lg border border-white/30 rounded-lg p-4 shadow-xl max-w-md w-full right-0 bottom-16">
          <CopilotChat
            labels={{
              title: "connectify",
              initial: "Hello there! Sup?",
            }}
            instructions="When a user asks a question, analyze it to understand the subject and provide a clear, accurate answer. Avoid giving personal advice or unrelated information."
            className="p-4"
          />
        </div>
      </div>
    </div>
  );
}
