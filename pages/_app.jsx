import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import Head from "next/head";
import ThirdwebGuideFooter from "../components/ThirdwebGuideFooter";
import { domainName } from "../const/yourDetails";
import "../styles/globals.css";
import { MantleTestnet } from "@thirdweb-dev/chains";

// This is the chainId your dApp will work on.
//const activeChainId = ChainId.MantleTestnet;

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      //activeChain={MantleTestnet}

      activeChain={{
        // === Required information for connecting to the network === \\
        chainId: 5001, // Chain ID of the network
        // Array of RPC URLs to use
        rpc: ["https://rpc.testnet.mantle.xyz"],

        // === Information for adding the network to your wallet (how it will appear for first time users) === \\
        // Information about the chains native currency (i.e. the currency that is used to pay for gas)
        nativeCurrency: {
          decimals: 18,
          name: "Testnet BitDAO",
          symbol: "BIT",
        },
        shortName: "mantle-testnet", // Display value shown in the wallet UI
        slug: "Mantle-Testnet", // Display value shown in the wallet UI
        testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
        chain: "ETH", // Name of the network
        name: "Mantle Testnet", // Name of the network
      }}
  
      authConfig={{
        domain: domainName,
        authUrl: "/api/auth",
      }}
    >
      <Head>
        <title>Mantle Ecosystem Grants</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="This website is being shared exclusively for ethDenver and events during ethDenver. If you're reading this, you're getting access to some really exciting new/info!"
        />
      </Head>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
