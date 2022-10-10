import "../styles/globals.css"
import { WagmiConfig, configureChains, createClient, chain } from "wagmi"
import { alchemyProvider, infuraProvider } from "wagmi/providers/infura"
import {
    getDefaultWallets,
    RainbowKitProvider,
    darkTheme,
    lightTheme,
} from "@rainbow-me/rainbowkit"
import "@rainbow-me/rainbowkit/styles.css"
import { connectorsForWallets } from "@rainbow-me/rainbowkit"
import { publicProvider } from "wagmi/providers/public"
import {
    injectedWallet,
    argentWallet,
    braveWallet,
    coinbaseWallet,
    ledgerWallet,
    trustWallet,
    imTokenWallet,
    omniWallet,
    metaMaskWallet,
    rainbowWallet,
    walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets"
import Head from "next/head"

const NEXT_PUBLIC_Application_ID = process.env.NEXT_PUBLIC_APP_ID
const NEXT_PUBLIC_Dapp_URL = process.env.NEXT_PUBLIC_SERVER_URL
const { chains, provider } = configureChains(
    [chain.mainnet, chain.polygon, chain.polygonMumbai],
    [infuraProvider("2154a2e0bb8941d1ab13f80fd7b7b05b"), publicProvider()]
)
// const { connectors } = getDefaultWallets({
//     appName: "My app",
//     chains,
// })
const connectors = connectorsForWallets([
    {
        groupName: "Recommended",
        wallets: [
            metaMaskWallet({ chains }),
            walletConnectWallet({ chains }),
            coinbaseWallet({ chains }),
            trustWallet({ chains }),
            braveWallet({ chains }),
        ],
    },
    {
        groupName: "Others",
        wallets: [
            ledgerWallet({ chains }),
            argentWallet({ chains }),
            omniWallet({ chains }),
            imTokenWallet({ chains }),
        ],
    },
])

const WagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
})
function MyApp({ Component, pageProps }) {
    return (
        <div>
            <WagmiConfig client={WagmiClient}>
                <RainbowKitProvider
                    chains={chains}
                    theme={darkTheme({
                        accentColor: "#e49d3f",
                        accentColorForeground: "white",
                        borderRadius: "large",
                        fontStack: "system",
                    })}
                >
                    <Component {...pageProps} name="Access-Control-Allow-Origin" value="*" />
                </RainbowKitProvider>
            </WagmiConfig>
        </div>
    )
}

export default MyApp
