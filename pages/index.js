import Head from "next/head"
import styles from "../styles/Home.module.css"
import Dashboard from "../components/Dashboard"
import { StyleRegistry } from "styled-jsx"
import Hero from "../components/welcome"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { signIn, useSession } from "next-auth/react"
import { useAccount, useSignMessage, useNetwork } from "wagmi"
import { useEffect } from "react"
import { useRouter } from "next/router"
import { useConnect, useDisconnect } from "wagmi"

export default function Home() {
    const { address, isConnected } = useAccount()
    console.log(address)
    return (
        <div>
            <Head>
                <title>NFT MarketPlace</title>
                <meta name="description" content="2" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <nav className={styles.navBar}>
                    <img src="https://preview.redd.it/t3ipyw3enu771.png?auto=webp&s=6d0ed817989d3328d4765d8563f9ed61dbf32aad" />
                    {!address ? (<div/>) : (<ConnectButton />)}
                </nav>
            </div>
            {!address ? (<Hero />) : (<Dashboard />)}
        </div>
    )
}
