import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgxMasonryComponent } from 'ngx-masonry/lib/ngx-masonry.component';
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

  @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent;
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
