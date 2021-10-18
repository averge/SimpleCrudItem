import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { DataServiceService } from '../data.service';
import { Item } from '../model/item';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {
  newItemForm: FormGroup;
  item:Item
  constructor(private route: ActivatedRoute , private router:Router,  private service:DataServiceService) { 
    var idx=route.snapshot.paramMap.get("idx");
    if (idx){
      this.item=this.service.getItemList()[idx];

    }else{
      this.item= new Item("")
    }

    this.newItemForm = new FormGroup({
      itemName: new FormControl(this.item.name)
    }); 
  }
  
  ngOnInit() {
    
  }
  
  onSubmit(){
    var item=new Item(this.newItemForm.get("itemName").value)
    console.log(item)
    this.service.addItem(item).subscribe(()=>{
      this.router.navigateByUrl("/")
    })
    
  }
}
