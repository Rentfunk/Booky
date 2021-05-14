import IGrade from "./IGrade";
import IAuthor from "./IAuthor";

export default interface IBook {
  id: number;
  title: string;
  authors: IAuthor[];
  grades: IGrade[];
  given_to_students: number;
  returned_from_students: number;
  given_to_teachers: number;
  returned_from_teachers: number;
}
