import { AfterContentInit, Component, ContentChildren, Input, OnChanges, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tab-view',
  templateUrl: './tab-view.component.html',
  styleUrls: ['./tab-view.component.scss']
})
export class TabViewComponent implements AfterContentInit, OnChanges {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;
  @Input() selectedIndex: number;

  constructor(){
    this.selectedIndex = 0;
  }

  ngOnChanges() {
    if(this.selectedIndex < 0) this.selectedIndex = 0;
  }

  ngAfterContentInit() {
    if(this.selectedIndex < this.tabs.length){
      this.selectTab(this.tabs.get(this.selectedIndex)!);
    }
    else{
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent) {
    this.tabs.toArray().forEach(tab => (tab.active = false));
    tab.active = true;
  }
}