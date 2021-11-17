import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FakeListService } from '../fake-list.service';

@Component({
  selector: 'fake-list',
  templateUrl: './fake-list.component.html',
  styleUrls: ['./fake-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class FakeListComponent implements OnInit {
  fakeList: Array<FakeListModel> = [];
  constructor(private fakeListSerivce: FakeListService) {}

  ngOnInit() {
    this.fakeListSerivce.getLists().subscribe((res: any) => {
      for (let list of res) {
        this.fakeList.push(list);
        if (this.fakeList.length > 10) {
          break;
        }
      }
    });
  }
}

interface FakeListModel {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}
