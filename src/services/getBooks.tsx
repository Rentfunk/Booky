import IBook from "../models/IBook";

export default async function getBooks() {
  let result: IBook[] = [];

  await fetch("http://localhost:8000/api/v1/books/", {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((data) => data.json())
    .then((books: IBook[]) => {
      result = books;
    });

  return result;
}
