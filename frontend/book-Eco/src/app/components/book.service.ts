// import { Injectable } from "@angular/core";

// @Injectable({
//   providedIn: "root"
// })
// export class BookService {
//   items: any;
//   constructor() {}

// books = [];

//   addToBooks(addedItem: any) {
//     this.books.push(this.getItems);
//     // console.log(addedItem);

//     //-----check if there are items already added in cart
//     /* let existingItems = [];
//     if ( localStorage.getItem('cart_items')){//----- update by adding new items
//       existingItems = JSON.parse(localStorage.getItem('cart_items'));
//       existingItems = [addedItem, ...existingItems];
//       console.log( 'Items exists');
//     } */
//     //-----if no items, add new items
//     /* else{
//       console.log( 'NO items exists');
//       existingItems = [addedItem]
//     } */

//     this.savebooks();
//   }
//   savebooks() {
//     throw new Error("Method not implemented.");
//   }

//   getItems() {
//     return this.items;
//   }

//   loadBooks(): void {
//     this.items = JSON.parse(localStorage.getItem("book_items")) ?? [];
//   }

//   saveBook(): void {
//     localStorage.setItem('cart_items', JSON.stringify(this.items));
//   }

//   clearBook(_items: any) {
//     this.items = [];

//     localStorage.removeItem("cart_items")
//   }

//   removeItem(item: { id: any; }) {
//     const index = this.items.findIndex((o: { id: any; }) => o.id === item.id);

//     if (index > -1) {
//       this.items.splice(index, 1);
//       this.saveBook();
//     }
//   }
//   saveBooks() {
//     throw new Error("Method not implemented.");
//   }

//   itemInBook(item: { id: any; }): boolean {
//     return this.items.findIndex((o: { id: any; }) => o.id === item.id) > -1;
//   }
// }
