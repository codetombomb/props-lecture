import React from "react";

function Book ({name, author}) {
    console.log(name, author);
    return (
        <>
          <p>Title: {name}</p>
          <p>Author: {author}</p>
        </>
    )
}

export default Book