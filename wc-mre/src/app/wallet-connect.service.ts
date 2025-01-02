import { Injectable } from '@angular/core';
import { mainnet, polygon, base, avalanche, solana, AppKitNetwork } from '@reown/appkit/networks';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { AdapterBlueprint } from '@reown/appkit/adapters';
import { AppKit, createAppKit } from '@reown/appkit';


@Injectable({providedIn: 'root'})
export class WalletConnectModalService {
  
  private modal: AppKit | null = null;

  public init() {
    const projectId: string = ''; // TODO: set your projectId here :)
    const networks: [AppKitNetwork, ...AppKitNetwork[]] = [mainnet, polygon, base, avalanche, solana];

    const adapter: AdapterBlueprint = new WagmiAdapter({
      projectId,
      networks,
    })

    const metadata = {
      name: 'testproj',
      description: 'descr',
      url: 'http://localhost:4200',
      icons: ['https://avatars.githubusercontent.com/u/179229932']
    }

    this.modal = createAppKit({
      debug: true,
      adapters: [adapter],
      networks: networks,
      metadata,
      projectId,
      features: {
        analytics: true,
        email: false,
        socials: [],
        emailShowWallets: false,
      },
      
      // Wallets that are going to be shown on the modal's main view (ids: https://docs.reown.com/cloud/wallets/wallet-list)
      featuredWalletIds: [  
        'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96', // MetaMask
        'a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393', // Phantom
      ],

      enableWalletConnect: true,
      allWallets: 'ONLY_MOBILE',
    })
  }
}
