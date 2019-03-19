import { Component, OnInit } from '@angular/core';
import { SubFacade } from '@tow-screen-one-store-id-sync/store/sub';

@Component({
  selector: 'tow-screen-one-store-id-sync-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  constructor(public readonly sub: SubFacade) {}

  ngOnInit() {}
}
