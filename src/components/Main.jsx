
import React, { Component,Suspense,lazy } from 'react';

import Navbar from './Navbar';
import {BOOKS,langs} from '../data';
import {Routes,Route,useParams} from "react-router-dom";

const Books=lazy(()=>import('./Books'));
const Bookdeatil = lazy(()=> import('./Bookdeatil'));


export class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books:[],
      selLang:[],
    };
    this.onChange=this.onChange.bind(this);
  }

  componentDidMount() {
    this.setState({books:BOOKS});
    
  }

  onChange(lang){
    if(!this.state.selLang.includes(lang)){
        this.setState({
          selLang:this.state.selLang.concat(lang)
        });
    }
    else{
      const langs=this.state.selLang.filter((l)=> l != lang );
      this.setState({
        selLang:langs
      });
    }
  }
  
  render() {
console.log(this.state.books.language);

    const Book=()=>{
      let {id}=useParams();
      return <Bookdeatil book={this.state.books.filter((book)=> book.id===id)[0]}/>;
    }

    const BookList=()=>{
      if(this.state.selLang.length>0){
       return <Books books={this.state.books.filter((book)=>this.state.selLang.includes(book.language))}/>;
      }
      else{
        return <Books books={this.state.books}/>;
      }
    }

    return (
      <div>
        <Navbar langs={langs} onChange={this.onChange}/>
        <Suspense fallback={<div>Loading.....</div>}>
          <Routes>
              <Route path="/" element={<BookList/>} />
              <Route path="/:id" element={<Book/>} />
          </Routes>
        </Suspense>
        
        
        
      </div>

    )
  }
}

export default Main;

//
