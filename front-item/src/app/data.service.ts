import { Injectable } from '@angular/core';
import { Item } from './model/item';
import { HttpClient } from '@angular/common/http';


@Injectable({  providedIn: 'root' })
export class DataServiceService {
  url: string
  constructor(private http: HttpClient) {  
    this.url="http://localhost:3000/items"
  //  this.items=[new Item("item de lista")]
   }
  //items:Item[]
  
  getItemList(){
    return this.http.get<Item[]>(this.url)
 //   return this.items
  }
  
  addItem(item:Item){
    return this.http.post(this.url,item)
    //this.items.push(item)
  }
  
  deleteItem(item:Item){
    console.log(item)
    return this.http.delete(this.url+"/"+item.id)
  //  this.items=this.items.filter(i=>item!==i)

  }}

