
import React, { Component, Suspense, lazy, useState, useEffect } from 'react';

import Navbar from './Navbar';
import { BOOKS, langs } from '../data';
import { Routes, Route, useParams } from "react-router-dom";

const Books = lazy(() => import('./Books'));
const Bookdeatil = lazy(() => import('./Bookdeatil'));
const AddBook =lazy(()=>import('./AddBook'));

export const Main = () => {

  const [books, setBooks ] = useState([]);
  const [selLang, setSelLang ] = useState([]);

  const onChange = (lang) => {
    if (!selLang.includes(lang)) {
      setSelLang((langs)=>langs.concat(lang));
      
    }
    else {
      const langs = selLang.filter((l) => l !== lang);
      setSelLang(langs);
    }
  }
  const addBook=(book)=>{
    book.id=books.length;
    setBooks((prev)=>prev.push(book));
  }

  useEffect(()=>{
    setBooks(BOOKS);
  });

  const Book = () => {
    let { id } = useParams();
    return <Bookdeatil book={books.filter((book) => book.id == id)[0]} />;
  }

  const BookList = () => {
    if (selLang.length > 0) {
      return <Books books={books.filter((book) => selLang.includes(book.language))} />;
    }
    else {
      return <Books books={books} />;
    }
  }

  return (
    <>
      <Navbar langs={langs} onChange={onChange} />
      <Suspense fallback={<div>Loading.....</div>}>
        <Routes>
          <Route path="/" element={<BookList/>} />
          <Route exact path="/:id" element={<Book />} />
          <Route exact path="/add" element={<AddBook add={addBook}/>}/>
        </Routes>
      </Suspense>
    </>
  )
}



export default Main;

//
