import { Component } from '@angular/core';
import { Book } from 'src/app/books';
import { HomeService } from 'src/app/services/home.service';
import { FormControl, FormGroup } from '@angular/forms';    

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent {
  successMessage = false
  books:any[]=[]
  imageData?:String
  constructor(private homeService:  HomeService){}
  bookForm: FormGroup = new FormGroup({
    bookName: new FormControl(''),
    sellingPrice:new FormControl(''),
    author :new FormControl(''),
    description:new FormControl(''),
    image:new FormControl('')
  })
  selectedFile?: any

  getSelectedFile(event:any): void {
    this.selectedFile = event.target.files[0];
    
  }

  selectedBook?:Book
  
  createBook(){
   

    let formData = new FormData()  
    formData.append("bookName", this.bookForm.value.bookName) 
    formData.append("sellingPrice", this.bookForm.value.sellingPrice) 
    formData.append("author", this.bookForm.value.author) 
    formData.append("description", this.bookForm.value.description) 
    formData.append("image", this.selectedFile) 
  
   
        this.homeService.createBook(formData).subscribe({
          next: (res)=>{
            console.log(res)
          }, 
          error: console.log
        })
  }
}
