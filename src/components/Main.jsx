
import React, { Component } from 'react'
import Books from './Books';
import Navbar from './Navbar';
import {BOOKS} from '../data';
import Bookdeatil from './Bookdeatil';
import {Routes,Route,useParams} from "react-router-dom";

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
        <Routes>
            <Route path="/" element={<Books books={this.state.books}/>} />
            <Route path="/:id" element={<Book/>} />
        </Routes>
        
        
      </div>

    )
  }
}

export default Main;

//
