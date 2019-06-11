import { Injectable } from '@angular/core';
import { IAddressBook } from '../models/address-book.model';
import { ADDRESS_BOOKS } from '../mock-data/address-book.mock';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressBookService {

  // fake id, which should create with backend, this is only for demo purpose
  fakeId = 4;

  // get all address books
  getAddressBooks(): Observable<IAddressBook[]> {
    // mock fetching the data from backend
    return of(ADDRESS_BOOKS);
  }

  // add address books
  addAddressBook(item: IAddressBook): Observable<IAddressBook> {
    // placeholder for interact with backend
    item.id = (this.fakeId++).toString();
    return of(item);
  }

  // update address books
  updateAddressBook(item: IAddressBook): Observable<IAddressBook> {
    // placeholder for interact with backend
    return of(item);
  }

  // delete address books by ids
  deleteAddressBooksByIds(ids: string[]): Observable<string[]> {
    // we can do batch delete here, for now this is just a placeholder where interact with backend
    return of(ids);
  }
}
