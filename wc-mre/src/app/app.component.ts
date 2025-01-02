import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WalletConnectModalService } from './wallet-connect.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'wc-mre';

  public constructor(
    private service: WalletConnectModalService
  ) {
    service.init();
  }
}
