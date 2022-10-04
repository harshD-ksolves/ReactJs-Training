
import React, { Component,Suspense,lazy } from 'react';

import Navbar from './Navbar';
import {BOOKS} from '../data';
import {Routes,Route,useParams} from "react-router-dom";

const Books=lazy(()=>import('./Books'));
const Bookdeatil = lazy(()=> import('./Bookdeatil'));


export class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books:[],
      selected:""
    };
  }

  componentDidMount() {
    console.log("Component mounted");
    this.setState({books:BOOKS});
    console.log(this.state.books)
  }

  
  render() {
    const Book=()=>{
      let {id}=useParams();
      return <Bookdeatil book={this.state.books.filter((book)=> book.id==id)[0]}/>;
    }


    return (
      <div>
        <Navbar />
        <Suspense fallback={<div>Loading.....</div>}>
          <Routes>
              <Route path="/" element={<Books books={this.state.books}/>} />
              <Route path="/:id" element={<Book/>} />
          </Routes>
        </Suspense>
        
        
        
      </div>

    )
  }
}

export default Main;

//
