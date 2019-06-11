import { Component, OnInit } from '@angular/core';
import { IAddressBook } from '../../models/address-book.model';
import { AddressBookService } from '../../services/address-book.service';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.scss'],
  providers: [AddressBookService]
})
export class AddressBookComponent implements OnInit {

  addressBooks: IAddressBook[];

  isAllChecked: boolean;

  constructor(private addressBookService: AddressBookService) { }

  ngOnInit() {
    this.addressBookService.getAddressBooks().subscribe(addressBooks => {
      this.addressBooks = addressBooks;
    });
  }

  // handle the checkbox toggle logic
  onCheckChange(event, item: IAddressBook) {
    item.checked = event.target && event.target.checked;

    this.checkAllValidate();
  }

  // handle check all logic
  onCheckAll(checked: boolean) {
    this.addressBooks.forEach(item => item.checked = checked);

    this.checkAllValidate();
  }

  checkAllValidate() {
    // determine isAllCheck value
    this.isAllChecked = this.addressBooks.every(ad => !!ad.checked);
  }

  addAddressBooks() {
    const newAddressBook: IAddressBook = {
      name: '',
      location: '',
      office: '',
      phone: {
        office: '',
        cell: ''
      }
    };

    this.addressBookService.addAddressBook(newAddressBook).subscribe((item) => {
      // fake for now.
      this.addressBooks.push(item);

      this.checkAllValidate();
    });
  }

  // update address book callback
  updateAddressBook(item: IAddressBook, key1: string, key2?: string) {
    return (text: string) => {
      !key2 ? item[key1] = text : item[key1][key2] = text;

      // fake call for server update
      this.addressBookService.updateAddressBook(item);
    };
  }

  deleteAddressBooks() {
    const deletedIds: string[] = this.addressBooks.filter(item => item.checked).map(item => item.id);
    this.addressBookService.deleteAddressBooksByIds(deletedIds).subscribe(() => {
      // fake for now.
      this.addressBooks = this.addressBooks.filter(item => !item.checked);
    });
  }

  orderBy(key1: string, key2?: string) {
    this.addressBooks.sort((ab1, ab2) => {
      if (key2) {
        return ab1[key1][key2] >= ab2[key1][key2] ? 1 : -1;
      } else {
        return ab1[key1] >= ab2[key1] ? 1 : -1;
      }
    });
  }

}
