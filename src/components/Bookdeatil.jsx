import React from 'react'
import './Bookdetail.css';




const Bookdeatil = ({ book }) => {
    
    return (
        <div className="container BookConatiner m-4">
            <div className="row">
                <div className="col bookImg">
                    <div className="card" >
                        <img src={book.img} loading="lazy" className="card-img-top img-fluid" alt="new" />
                    </div>
                </div>
                <div className="col">
                    <div className="bookInfo">
                        <div className="card" >
                            <div className="card-body">
                                <h5 className="card-title text-center">{book.title}</h5>
                                <p className="card-text">
                                    <strong>Author</strong>: {book.authors}
                                </p>
                                <p className="card-text">
                                    <strong> Publisher</strong>: {book.publisher}
                                </p>
                                <p className="card-text">
                                    <strong>Published</strong>: {book.published}
                                </p>
                                <p className="card-text">
                                    <strong>Average Rating</strong>: {book.avg_rating}
                                </p>
                                <p className="card-text">
                                    <strong>Language</strong>: {book.language}
                                </p>
                                <p className="card-text ">
                                    <strong>Price</strong>: <span className="fs-3">${book.price}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bookdeatil;