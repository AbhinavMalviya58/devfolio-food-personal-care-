import ChatSidebar from "./chat-sidebar";

export default async function Chatlayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-screen bg-primary">
      <ChatSidebar />
      <main className="flex-1 overflow-y-auto ">
        {children}
      </main>
    </div>
  )
}