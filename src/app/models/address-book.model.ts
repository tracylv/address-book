// address book phone interface
interface IAddressBookPhone {
  office?: string;
  cell?: string;
}

// address book interface
export interface IAddressBook {
  id?: string;
  name?: string;
  location?: string;
  office?: string;
  phone?: IAddressBookPhone;
  checked?: boolean;
}
