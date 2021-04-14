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
    price : Number;
    livingSpace : Number;
    bedrooms : String;
    description: String;
    country: string;
    city: string;
    street: String;
    zipCode: String;
    images: string[];
    status: ListingStatus;
    listingStatusType: ListingStatusTypes;
    estateType: EstateTypes;
    author: IUser;
    modification_notes: ModificationNote[]
}

export interface IListing2 {
    price : number;
    livingSpace : number;
    bedrooms : string;
    description: string;
    country: string;
    city: string;
    street: string;
    zipCode: string;
    images: string[];
    listingStatusType: ListingStatusTypes;
    estateType: EstateTypes;
    edit?: boolean;
}