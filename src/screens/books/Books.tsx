import React, {useEffect, useState} from "react";

import getBooks from "../../services/getBooks";
import IBook from "../../models/IBook";
import IAuthor from "../../models/IAuthor";
import IGrade from "../../models/IGrade";

function Books() {
  const [books, setBooks] = useState<IBook[]>([]);

  useEffect(() => {
    getBooks().then((books:IBook[]) => setBooks(books));
  }, []);


  return (
    <div>
      <h2>Knihy</h2>
      <table>
        <thead>
          <tr>
            <th>Názov</th>
            <th>Autori</th>
            <th>Ročníky</th>
            <th>Priradené žiakom</th>
            <th>Vrátené žiakmi</th>
            <th>Priradené učiteľom</th>
            <th>Vrátené učiteľmi</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book:IBook) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.authors.map((author: IAuthor) => author.name).join(", ")}</td>
              <td>{book.grades.map((grade:IGrade) => grade.name).join(", ")}</td>
              <td>{book.given_to_students}</td>
              <td>{book.returned_from_students}</td>
              <td>{book.given_to_teachers}</td>
              <td>{book.returned_from_teachers}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Books;
