import React from "react";
import {Link} from "react-router-dom";

const bookDelete = (props) => {
    return (
        <tr>
            <td>{props.term.name}</td>
            <td>{props.term.category}</td>
            <td>{props.term.author.name}</td>
            <td>{props.term.availableCopies}</td>
            <td className={"text-right"}>
                <button title={"Delete"} className={"btn btn-danger"}
                        onClick={() => props.onDelete(props.term.id)}>
                    Delete
                </button>
                <Link title={"Edit"} className={"btn btn-info"}
                      onClick={() => props.onEdit(props.term.id)}
                      to={`/books/edit/${props.term.id}`}>
                    Edit
                </Link>
                <button title={"Mark As Taken"} className={"btn btn-success"}
                        disabled={props.term.availableCopies <= 0}
                        onClick={() => props.onMarkAsTaken(props.term.id)}>
                    Mark As Taken
                </button>
            </td>
        </tr>
    )


}


export default bookDelete;


