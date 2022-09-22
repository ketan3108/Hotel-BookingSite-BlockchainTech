import {ConnectionProvider,WalletProvider} from "@solana/wallet-adapter-react";
import {WalletModalProvider} from "@solana/wallet-adapter-react-ui";
import {PhantomWalletAdapter} from "@solana/wallet-adapter-wallets";
import { Children, useMemo } from "react";
const connection = "https://still-still-meadow.solana-devnet.discover.quiknode.pro/bf8d2dbfd74d323ed59be263b446c4269c4a7a9c/"

const WalletConnectionProvider = ({children}) =>{
    const endpoint = useMemo(()=> connection,[])

    const wallets = useMemo(()=> [new PhantomWalletAdapter()],[])

    return(
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    )
}

export default WalletConnectionProvider