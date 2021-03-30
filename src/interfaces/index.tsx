import {ListingStatus, EstateTypes, ListingStatusTypes} from '../enums'

export interface IUser {
    _id?: String;
    name: String;
    surname: String;
    modification_notes: ModificationNote[]
}

export interface ModificationNote {
    modified_on: Date;
    modified_by: String;
    modification_note: String;
}

export interface IListing {
    _id?: String;
    description: String;
    country: String;
    city: String;
    street: String;
    zipCode: String;
    images: string[];
    status: ListingStatus;
    listingStatusType: ListingStatusTypes;
    estateType: EstateTypes;
    author: IUser;
    modification_notes: ModificationNote[]
}
