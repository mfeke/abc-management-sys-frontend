import { Component } from '@angular/core';
import { HomeService } from '../services/home.service';
import { Book } from '../books';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  select?:any
books: any
searchBox = ''
constructor(private homeService: HomeService) {}

isSearching: boolean = false
 
 searchTitle() {
  this.isSearching = !this.isSearching;
  
  console.log(this.searchBox);
  this.homeService.searchBook(this.searchBox).subscribe(data=>{
     this.books = data;
    //  console.log(data);
  })
 }
 onSearch(book: string):void{
  this.select = book
  console.log(book)
 }
}

