import React from 'react'
import './Books.css';
import { useNavigate } from 'react-router-dom';


const Book=({book})=>{
      let navigate=useNavigate();  
    return (<div className="col m-3" key={book.id}>
             <div className="card cardCss" onClick={()=>navigate(`/${book.id}`)}>
                 <img src={book.img} loading="lazy" className="img-thumbnail rounded card-img-top" alt="..." />
                 <div className="card-body">
                     <h5 className="card-title text-center">{book.title}</h5>
                     <p className="card-text">Author : {book.authors}
                     </p>
                     <p className="card-text">Publisher : {book.publisher}</p>
                 </div>
             </div>
     </div>);
};


const Books = (props) => {

    return (
        <div className="container m-3 p-3">
            <div className="row">
                {
                    props.books.map(book=><Book book={book} key={book.id}/>)
                }
            </div>
        </div>
    )
}

export default Books;