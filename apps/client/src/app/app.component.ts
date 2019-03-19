import { Component } from '@angular/core';
import { CoreFacade } from '@tow-screen-one-store-id-sync/store/core';
import { SubFacade } from '@tow-screen-one-store-id-sync/store/sub';

@Component({
  selector: 'tow-screen-one-store-id-sync-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  constructor(
    public readonly core: CoreFacade,
    public readonly sub: SubFacade
  ) {
    this.core.loadAll();
    this.sub.loadAll();
  }
}
