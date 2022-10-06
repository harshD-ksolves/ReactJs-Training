
import React, {  Suspense,useState, lazy, useEffect } from 'react';

import Navbar from './Navbar';
import { langs } from '../data';
import { Routes, Route, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {  getAllBooks } from '../redux/Calls';


const Books = lazy(() => import('./Books'));
const Bookdeatil = lazy(() => import('./Bookdeatil'));
const AddBook =lazy(()=>import('./AddBook'));

export const Main = () => {

  const [langFilter, setLangFilter ] = useState([]);
  const books=useSelector((state)=>state.books.books);
  const dispatch=useDispatch();


  const handleChange = (lang) => {
    if (!langFilter.includes(lang)) {
      setLangFilter((langs)=>langs.concat(lang));
      
    }
    else {
      const langs = langFilter.filter((l) => l !== lang);
      setLangFilter(langs);
    }
  }
  useEffect(()=>{
    getAllBooks(dispatch);
  },[dispatch]);


  const Book = () => {
    let { id } = useParams();
    return <Bookdeatil book={books.filter((book) => book.id == id)[0]} />;
  }

  const BookList = () => {
    if (langFilter.length > 0) {
      return <Books books={books.filter((book) => langFilter.includes(book.language))} />;
    }
    else {
      return <Books books={books} />;
    }
  }

  return (
    <>
      <Navbar langs={langs} handleChange={handleChange} langFilter={langFilter}/>

      <Suspense fallback={<div>Loading.....</div>}>
        <Routes>
          <Route path="/" element={<BookList/>} />
          <Route exact path="/:id" element={<Book />} />
          <Route exact path="/add" element={<AddBook/>}/>
        </Routes>
      </Suspense>
    </>
  )
}


export default Main;

//
