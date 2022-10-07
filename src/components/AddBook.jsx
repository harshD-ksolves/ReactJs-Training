import React, { useEffect, useState } from 'react'
import './AddBook.css';
import { langs } from '../data';
import { useDispatch, useSelector } from 'react-redux';
import { addNewBook } from '../redux/Calls';
const AddBook = ({add}) => {
    const initialState = {
        title: '',
        authors: '',
        avg_rating: '',
        language:'',
        published:'',
        publisher:'',
        img:'',
        price:'',
        
    }

    const books=useSelector((state)=>state.books);
    const id=books.length;



    const dispatch=useDispatch()

    const [inputs, setInputs] = useState(initialState);
    const [lang,setlangs]=useState([]);
    const [success,setSuccess]=useState(false);
    const [error,setError]=useState(false);

    useEffect(()=>{
        setlangs(langs);
        setError(books.error);
        setSuccess(books.success);
    },[setlangs,setError,books]);

    const handleChange = (e) => {
        setInputs((prev) => {
          return { ...prev, [e.target.name]: e.target.value };
        });
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        let book=inputs;
        book.id=id;
        addNewBook(book,dispatch);
        setInputs(initialState);
        setSuccess(true);
    }
    return (
        <div className='FormContainer'>
            <div className='Wrapper'>
                {
                    success && <div className="alert alert-success" role="alert">
                                    New Book added Successfully!.
                                </div>
                }
                {
                    error && <div className="alert alert-danger" role="alert">
                                Something Went Wrong!.
                            </div>
                }
                
                <h1 className='title'>Add New Book</h1>
                <form className="form" onSubmit={(e)=>handleSubmit(e)}>
                    <div className="mb-3 position-relative input">
                        <label className="form-label" htmlFor="inputTitle">Title</label>
                        <input type="text" className="form-control " name="title" id="inputTitle" onChange={(e)=>handleChange(e)} placeholder="Title" value={inputs.title}  />
                    </div>
                    <div className="mb-3 position-relative input">
                        <label className="form-label" htmlFor="inputAuthors">Authors</label>
                        <input type="text" className="form-control " name="authors" id="inputAuthors" onChange={(e)=>handleChange(e)}  placeholder="Authors" value={inputs.authors}  />
                    </div>
                    <div className="mb-3 position-relative input">
                        <label className="form-label" htmlFor="inputRating">Rating</label>
                        <input type="text" className="form-control " name="avg_rating" id="inputRating" onChange={(e)=>handleChange(e)}  placeholder="Rating" value={inputs.avg_rating}   />
                    </div>
                    <div className="mb-3 position-relative input">
                    <label className="form-label" htmlFor="language">Language</label>
                        <select className="form-select" id='language' name="language" onChange={(e)=>handleChange(e)}  aria-label="Default select example">
                            <option >Open this select language</option>
                            {
                                lang.map((lang)=><option value={lang} key={lang}>{lang}</option>)
                            }   
                        </select>
                    </div>
                    <div className="mb-3 position-relative input">
                        <label className="form-label" htmlFor="inputPublished">Published Date</label>
                        <input type="text" className="form-control " name="published" onChange={(e)=>handleChange(e)}  id="inputPublished" placeholder="Published"  value={inputs.published} />
                    </div>
                    <div className="mb-3 position-relative input">
                        <label className="form-label" htmlFor="inputPublisher">Publisher</label>
                        <input type="text" className="form-control " name="publisher" id="inputPublisher" onChange={(e)=>handleChange(e)}  placeholder="Publisher" value={inputs.publisher}  />
                    </div>
                    <div className="mb-3 position-relative input">
                        <label className="form-label" htmlFor="inputImage">Image Link</label>
                        <input type="text" className="form-control " name="img" id="inputImage" onChange={(e)=>handleChange(e)}  placeholder="Image" value={inputs.img}  />
                    </div>
                    <div className="mb-3 position-relative input">
                        <label className="form-label" htmlFor="inputPrice">Price</label>
                        <input type="text" className="form-control " name="price" id="inputPrice"onChange={(e)=>handleChange(e)}  placeholder="Price"  value={inputs.price} />
                    </div>
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </form>
            </div>

        </div>
    )
}

export default AddBook;