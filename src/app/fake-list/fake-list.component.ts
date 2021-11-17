import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  NgxMasonryComponent,
  NgxMasonryOptions,
} from '../ngx-masonry/ngx-masonry';
import { FakeListService } from '../fake-list.service';

@Component({
  selector: 'fake-list',
  templateUrl: './fake-list.component.html',
  styleUrls: ['./fake-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class FakeListComponent implements OnInit {
  private fakeList: Array<FakeListModel> = [];

  public masonryOptions: NgxMasonryOptions = {
    gutter: 20,
    animations: {},
  };
  masonryLists = [];

  constructor(private fakeListSerivce: FakeListService) {}

  @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent;
  ngOnInit() {
    this.fakeListSerivce.getLists().subscribe(async (res: any) => {
      for (let list of res) {
        this.fakeList.push(list);
        if (this.fakeList.length > 10) {
          break;
        }
      }
      await this.show(this.fakeList);
    });
  }
  private async show(listsObj) {
    for (const index in listsObj) {
      if (listsObj.hasOwnProperty(index)) {
        this.masonryLists.push(this.fakeList[index]);
        // if (this.isBrowser) {
        this.masonry.reloadItems();
        this.masonry.layout();
        // }
      }
    }
    console.log(this.masonryLists);
  }
}

interface FakeListModel {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

// export class ListComponent implements OnInit {
//   lists: any = [];
//   public masonryOptions: NgxMasonryOptions = {
//     gutter: 20,
//     animations: {},
//   };
//   masonryLists = [];

//   @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent;
//   async ngOnInit(): Promise<void> {
//         this.listService.getLists().subscribe(async (data) => {
//           this.lists = data;
//           await this.show(this.lists);
//         });
//       }
//   private async show(listsObj: any) {

//         for (const index in listsObj) {
//           if (listsObj.hasOwnProperty(index)) {
//             this.masonryLists.push(this.lists[index]);
//               this.masonry.reloadItems();
//               this.masonry.layout();
//           }
//         }
//       }
// }
