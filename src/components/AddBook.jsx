import React, { useEffect, useState } from 'react'
import './AddBook.css';
import { langs } from '../data';
const AddBook = ({add}) => {

    const [inputs, setInputs] = useState({});
    const [lang,setlangs]=useState([]);

    useEffect(()=>{
        setlangs(langs);
    },[langs]);

    const handleChange = (e) => {
        setInputs((prev) => {
          return { ...prev, [e.target.name]: e.target.value };
        });
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        add(inputs);
        setInputs({});
    }
    return (
        <div className='FormContainer'>
            <div className='Wrapper'>
                <h1 className='title'>Add New Book</h1>
                <form className="form" onSubmit={(e)=>handleSubmit(e)}>
                    <div className="mb-3 position-relative input">
                        <label className="form-label" htmlFor="inputTitle">Title</label>
                        <input type="text" className="form-control " name="title" id="inputTitle" onChange={(e)=>handleChange(e)} placeholder="Title"   />
                    </div>
                    <div className="mb-3 position-relative input">
                        <label className="form-label" htmlFor="inputAuthors">Authors</label>
                        <input type="text" className="form-control " name="authors" id="inputAuthors" onChange={(e)=>handleChange(e)}  placeholder="Authors"    />
                    </div>
                    <div className="mb-3 position-relative input">
                        <label className="form-label" htmlFor="inputRating">Rating</label>
                        <input type="text" className="form-control " name="avg_rating" id="inputRating" onChange={(e)=>handleChange(e)}  placeholder="Rating"   />
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
                        <input type="text" className="form-control " name="published" onChange={(e)=>handleChange(e)}  id="inputPublished" placeholder="Published"   />
                    </div>
                    <div className="mb-3 position-relative input">
                        <label className="form-label" htmlFor="inputPublisher">Publisher</label>
                        <input type="text" className="form-control " name="publisher" id="inputPublisher" onChange={(e)=>handleChange(e)}  placeholder="Publisher"   />
                    </div>
                    <div className="mb-3 position-relative input">
                        <label className="form-label" htmlFor="inputImage">Image Link</label>
                        <input type="text" className="form-control " name="img" id="inputImage" onChange={(e)=>handleChange(e)}  placeholder="Image"   />
                    </div>
                    <div className="mb-3 position-relative input">
                        <label className="form-label" htmlFor="inputPrice">Price</label>
                        <input type="text" className="form-control " name="price" id="inputPrice"onChange={(e)=>handleChange(e)}  placeholder="Price"   />
                    </div>
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </form>
            </div>

        </div>
    )
}

export default AddBook;