import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit"
export default function Hero() {

  return (
    <>
      <div className="h-[100vh] grid items-center justify-items-center bg-black border border-black relative">
        <div className="grid items-center justify-items-center text-center opacity-100 z-[1700]">
            <h1 className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold text-slate-300">Much Anticipated Mystery</h1>
            <h1 className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold text-slate-300">NFT Collection is live now!</h1>
            <p className="my-5 text-slate-400 text-sm sm:text-xs w-[50vw] lg:w-11/12">I Design Your Dreams. I believe you have a unique taste, discover
            the possibilities of the NFT World. Mint Your NFTs on the top of
            Ethereum Blockchain. Your dreams is my first priority. So,
            let&apos;s enjoy this incredible NFTs World.</p>
            <ConnectButton/>
        </div>
        <div className="h-[54vh] absolute top-1 right-0 rounded-md overflow-hidden opacity-100 z-[1500]">
        </div>
      </div>
    </>
  );
}