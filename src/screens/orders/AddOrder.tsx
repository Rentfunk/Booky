import React, {ChangeEvent, /*FormEvent, */useEffect, useRef, useState} from "react";
import IGrade from "../../models/IGrade";
import IBook from "../../models/IBook";

function AddOrder() {
    const [newBook, setNewBook] = useState<boolean>(true);

    const [grades, setGrades] = useState<IGrade[]>([]);
    const [books, setBooks] = useState<IBook[]>([]);

    const [bookAutocomplete, setBookAutocomplete] = useState<string>("");
    const [inFocus, setInFocus] = useState<boolean>(false);

    const ACFocus = useRef<HTMLInputElement>(null);

    useEffect(() => {
        fetch("http://localhost:8000/api/v1/grades", {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(res => res.json())
            .then((apiGrades: IGrade[]) => {
                setGrades(apiGrades);
            });

        fetch("http://localhost:8000/api/v1/books", {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(res => res.json())
            .then((apiBooks: IBook[]) => {
                setBooks(apiBooks);
            });
    }, []);

    const handleOnChange = () => {
        setNewBook(prevState => !prevState);
    }

    const handleAutocomplChange = (event: any) => {
        setBookAutocomplete(event.target.value);
    }

    const handleOnClick = () => {
        if(ACFocus.current) {
            ACFocus.current.focus();
        }
    }

    const handleACClick = (event: any) => {
        setBookAutocomplete(event.target.innerHTML);
    }

    const handleAC = () => {
        setInFocus(prevState => !prevState);
    }

    /*const handleSubmit = (event: any) => {
        event.preventDefault();
        if (newBook) {
            let bookFormData: any = {};
            bookFormData["title"] = event.target.elements.title.value;
            bookFormData["grades"] = Object.values(event.target.elements.grades)
                .filter((grade: any) => grade.checked === true)
                .map((grade: any) => +grade.value);
            bookFormData["authors"] = Object.values(event.target.elements.authors)
                .filter((author: any) => author.selected === true)
                .map((author: any) => +author.value);

            console.log(bookFormData);

            let bookId: number = 0;

            fetch("http://localhost:8000/api/v1/books/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(bookFormData),
            })
                .then(res => res.json())
                .then(async (book: IBook) => {
                    console.log(books);
                    bookId= book.id;
                })
                .catch(err => console.log(err));

            let orderFormData: any = {};

            orderFormData["tags_ids"] = [];
            orderFormData["book_id"] = bookId;
            orderFormData["code"] = event.target.elements.code.value;
            orderFormData["isbn"] = event.target.elements.isbn.value;
            orderFormData["registry_number"] = event.target.elements.registryNumber.value;
            orderFormData["billing_number"] = event.target.elements.billingNumber.value;
            orderFormData["book_quantity"] = event.target.elements.bookQuantity.value;
            orderFormData["price_per_book"] = event.target.elements.pricePerBook.value;
            orderFormData["publication_year"] = event.target.elements.publicationYear.value;
            orderFormData["ordered_at"] = Date.now();
            orderFormData["discarded_quantity"] = 0;
            orderFormData["school_year_id"] = 1;

            fetch("http://localhost:8000/api/v1/orders/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(orderFormData),
            })
                .catch(err => console.log(err));
        }
    }*/

    return (
        <div>
            <h2>Pridať objednávku</h2>
            <form /*onSubmit={(event: FormEvent) => handleSubmit(event)}*/  method="POST">
                <div>
                    <label>Nová kniha</label>
                    <input onChange={() => handleOnChange()} type="radio" name="newBook" checked={newBook}/>
                    <label>Existujúca kniha</label>
                    <input onChange={() => handleOnChange()} type="radio" name="newBook"/>
                </div>
                {newBook ?
                    <div>
                        <div>
                            {grades.map((grade:IGrade) =>
                                <label key={grade.id}>
                                    {grade.name}
                                    <input type="checkbox" name="grades" value={grade.id}/>
                                </label>
                            )}
                        </div>
                        <div>
                            <label>
                                Názov knihy
                                <input type="text" name="title"/>
                            </label>
                        </div>
                        <div>
                            <label>
                                Autori
                                <input type="text" name="authors"/>
                            </label>
                        </div>
                    </div>
                :
                    <div onClick={handleOnClick}>
                        <label htmlFor="book">
                            Kniha:
                        </label>
                        <div>
                            <div>
                                <input ref={ACFocus}
                                       onBlur={handleAC}
                                       onFocus={handleAC}
                                       onChange={(event:ChangeEvent) => handleAutocomplChange(event)}
                                       type="text"
                                       name="book"
                                       value={bookAutocomplete} />
                            </div>
                            <ul style={{display: inFocus ? "block" : "none"}}>
                                {books.filter((book:IBook) => book.title
                                    .toLowerCase().includes(bookAutocomplete.toLowerCase()))
                                    .map((book: IBook) =>
                                        <li onClick={(event:any) => handleACClick(event)}
                                            key={book.id}>
                                            {book.title}
                                        </li>
                                )}
                            </ul>
                        </div>
                    </div>
                }
                <div>
                    <label htmlFor="code">Kód: </label>
                    <input type="text" name="code" />
                </div>
                <div>
                    <label htmlFor="isbn">ISBN: </label>
                    <input type="text" name="isbn" />
                </div>
                <div>
                    <label htmlFor="registryNumber">Evidenčné číslo</label>
                    <input type="text" name="registryNumber" />
                </div>
                <div>
                    <label htmlFor="billingNumber">Fakturačné číslo</label>
                    <input type="text" name="billingNumber" />
                </div>
                <div>
                    <label htmlFor="bookQuantity">Počet kníh</label>
                    <input type="number" name="bookQuantity" />
                </div>
                <div>
                    <label htmlFor="pricePerBook">Cena za knihu</label>
                    <input type="number" name="pricePerBook" />
                </div>
                <div>
                    <label htmlFor="publicationYear">Rok vydania</label>
                    <input type="number" name="publicationYear" />
                </div>
                <div><input type="submit" name="submit" /></div>
            </form>
        </div>
    )
}

export default AddOrder;