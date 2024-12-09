"use client"
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Roboto_Mono } from "next/font/google";

const roboto_mono = Roboto_Mono({ subsets: ["latin"] });

const serverAddress = "play.axionspire.net"

export default function JoinGame() {
  return (
    <div className="flex space-x-2 bg-slate-800 border-slate-600 text-slate-200 border-2 rounded-lg p-1 px-2 place-items-center" aria-label="Join Game" role="button">
      <FontAwesomeIcon icon={faGamepad} />
      <h1 className={`text-sm md:text-md`}>Minecraft 1.21+</h1>
      <p className="text-slate-600">|</p>
      <button onClick={() => {
        navigator.clipboard.writeText(serverAddress)
        alert("Copied server address to clipboard!")
      }} className={`${roboto_mono.className} text-sm md:text-md`}>{serverAddress}</button>
    </div>
  );
}