import { Component, OnInit } from '@angular/core';
import { CoreFacade } from '@tow-screen-one-store-id-sync/store/core';

@Component({
  selector: 'tow-screen-one-store-id-sync-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  constructor(public readonly core: CoreFacade) {}

  ngOnInit() {}
}
