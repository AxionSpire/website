import JoinGame from "./joingame.component";

export const metadata = {
  title: 'Home ✦ AxionSpire', // full title, layout template doesn't apply to /
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-6">
      <h1 className="text-2xl lg:text-3xl font-semibold">Welcome to AxionSpire</h1>
      <p className="text-lg lg:text-xl mb-4 text-center">An innovative, story-based Minecraft server. LGBTQ+ owned! 🏳️‍🌈</p>
      <JoinGame />
    </div>
  );
}
