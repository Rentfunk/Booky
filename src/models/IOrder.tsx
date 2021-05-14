import ITag from "./ITag";
import IBook from "./IBook";
import ISchoolYear from "./ISchoolYear";

export default interface IOrder {
    id: number;
    tags: ITag[];
    book: IBook;
    isbn: string;
    registry_number: string;
    code: string;
    billing_number: string;
    book_quantity: number;
    price_per_book: number;
    school_year: ISchoolYear;
    ordered_at: string;
    discarded_quantity?: number;
    publication_year: number;
    [key: string]: any;
}