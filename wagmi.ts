import { createConfig, http } from 'wagmi'
import { sepolia } from 'wagmi/chains'
import { injected, walletConnect, coinbaseWallet } from 'wagmi/connectors'

export const config = createConfig({
  chains: [sepolia],
  connectors: [
    injected(), // <-- Force le nom à être MetaMask
    coinbaseWallet({
      appName: 'Ktemas',
    }),
    walletConnect({
      projectId: '2c21616227dd93bfbb2cdf272d73dacf', // <-- REMPLACE PAR TON ID
      metadata: {
        name: 'Ktemas',
        description: 'Le coffre-fort numérique',
        url: 'https://ktemas.com',
        icons: ['https://ktemas.com/logo.png'],
      },
    }),
  ],
  transports: {
    [sepolia.id]: http(),
  },
})