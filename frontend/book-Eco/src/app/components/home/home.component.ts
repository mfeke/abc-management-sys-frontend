import { Component } from '@angular/core';
import { Book } from 'src/app/books';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  books: any[] = [];

  constructor(private homeService: HomeService){}
  select?:any
  ngOnInit(): void {
    this.getBook()
  }

  getBook():void{
    this.homeService.getBooks()
    .subscribe(books =>{this.books = books
      console.log(this.books[5])
    })
    
  }
  onSelect(book:string){
     this.select = book

  }

}
