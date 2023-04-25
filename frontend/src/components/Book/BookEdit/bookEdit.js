import React, {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import LibraryService from "../../../repository/libraryRepository";

const BookEdit = (props) => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [formData, updateFormData] = React.useState({
        name: "",
        category: "",
        authorId: 0,
        availableCopies: 0
    })

    useEffect(() => {
        LibraryService.getBook(id)
            .then((data) => {
                const obj = {
                    name: data.data.name,
                    category: data.data.category,
                    authorId: data.data.author.id,
                    availableCopies: data.data.availableCopies
                }
                updateFormData(obj)
            })
    },[])
    const handleChange = (e) => {
        console.log(e.target.value);
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name;
        const category = formData.category;
        const authorId = formData.authorId;
        const availableCopies = formData.availableCopies;
        props.onEditBook(id, name, category, authorId, availableCopies);
        navigate("/books");
    }
    return (
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Book name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               value={formData.name}
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <select type="text"
                                className="form-control"
                                id="category"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}>
                            {props.categories.map((term, i) =>
                                <option key={i} value={term}>{term}</option>
                            )}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="authorId">Author</label>
                        <select type="text"
                                className="form-control"
                                id="authorId"
                                name="authorId"
                                value={formData.authorId}
                                onChange={handleChange}>
                            {props.authors.map((term, i) =>
                                <option key={i} value={term.id}>{term.name} {term.surname}</option>
                            )}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="availableCopies">Available copies</label>
                        <input type="text"
                               className="form-control"
                               id="availableCopies"
                               name="availableCopies"
                               value={formData.availableCopies}
                               onChange={handleChange}
                        />
                    </div>

                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default BookEdit;
