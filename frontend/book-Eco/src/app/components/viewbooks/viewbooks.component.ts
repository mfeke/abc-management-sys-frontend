import { Component } from '@angular/core';
import { Book } from 'src/app/books';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-viewbooks',
  templateUrl: './viewbooks.component.html',
  styleUrls: ['./viewbooks.component.css']
})
export class ViewbooksComponent {

  items:any
  books:any[]=[]

  selectBook?: any;
  ngOnInit(): void {
    this.getBook()
  }

  constructor(private homeService: HomeService){}
  getBook():void{
    this.homeService.getBooks()
    .subscribe(book =>{
      this.books =book
      const items = this.books.length
      this.items = items


    })
  }
  
  deleteBook(book: any): void {
    this.books = this.books.filter(b => b !== book)
    this.homeService.deleteBook(book._id).subscribe()

  }
  onSelected(book:Book):void{
   this.selectBook = book

  }
  save():void{

    const id = this.selectBook._id
    console.log(id)

   if(this.selectBook){
    this.homeService.updateHero(this.selectBook,id).subscribe(() => window.location.reload())
   }
    // console.log(this.selectBook)
  }
}
