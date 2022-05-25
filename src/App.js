import "./App.css";

import LibraryLocation from "./components/LibraryLocation";
import Book from "./components/Book";
import { v4 as uuidv4 } from 'uuid';

function App() {
  // Code that does a fetch And this is what we get back:

  const books = [
    { name: "Eloquent JavaScript", author: "Marijn Haverbeke" },
    { name: "Design Patterns In Ruby", author: "Russ Olsen" },
    { name: "Ghost Rider", author: "Neil Peart" },
    { name: "Can't Hurt Me", author: "David Goggins" },
  ];

  return (
    <div className="App">
      <div>You are at this library: </div>
      <LibraryLocation austin="Austin" waco="Waco" />
      
      {books.map((book) => {
        return <Book name={book.name} author={book.author} key={uuidv4()}/>
      })}

      {/* ^^^^ and VVVV are the same-ish thing */}

      {[
        <Book title="Eloquent JS" author="Marijn Haverbeke" key={uuidv4()}/>,
        <Book title="Eloquent JS" author="Marijn Haverbeke" key={uuidv4()}/>,
        <Book title="Eloquent JS" author="Marijn Haverbeke" key={uuidv4()}/>
      ]}

    </div>
  );
}

export default App;
