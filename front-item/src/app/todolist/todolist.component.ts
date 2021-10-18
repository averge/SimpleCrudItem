import { Component, OnInit } from '@angular/core';
import { Item } from '../model/item';
import { DataServiceService } from '../data.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor(private itemService:DataServiceService) { }
  items:Item[]
  
  ngOnInit() {
    this.itemService.getItemList().subscribe((it)=> this.items=it);
  }

  onRemove(item:Item){
    this.itemService.deleteItem(item).subscribe(()=>{
      this.itemService.getItemList().subscribe((it)=> this.items=it);
    })
   // this.itemService.deleteItem(item)
   // this.items=this.itemService.getItemList();

  }
 

}
