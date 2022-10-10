import Head from "next/head"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import styles from "../styles/Home.module.css"
import { StyleRegistry } from "styled-jsx"

export default function Home() {
    return (
        <div>
            <Head>
                <title>NFT MarketPlace</title>
                <meta name="description" content="2" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <nav className={styles.navBar}>
                    <img src="https://i.pinimg.com/550x/99/f7/0f/99f70fe7d427e6c6cf994260ff04f24b.jpg" />
                    <ConnectButton />
                </nav>
            </div>
        </div>
    )
}
