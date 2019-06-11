import { IAddressBook } from '../models/address-book.model';

// mock data for address books
export const ADDRESS_BOOKS: IAddressBook[] = [
  {
    id: '1',
    name: 'Tracy Lv',
    location: 'Shanghai',
    office: 'C-101',
    phone: {
      office: 'x55778',
      cell: '650-353-1239'
    }
  },
  {
    id: '2',
    name: 'Olivia Wang',
    location: 'Shanghai',
    office: 'D-202',
    phone: {
      office: 'x112233',
      cell: '650-353-2222'
    }
  },
  {
    id: '3',
    name: 'Khali Zhang',
    location: 'Beijing',
    office: 'E-303',
    phone: {
      office: 'x334455',
      cell: '650-353-3333'
    }
  }
];
