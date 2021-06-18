import React from 'react'

export const TodoItem = ({Todo, onDelete}) => {
    return (
        <>
        <div>
        <h4>{Todo.title}</h4>
        <p>
            {Todo.decp}
        </p>
        <button className="btn btn-sm btn-danger" onClick={()=>onDelete(Todo)}>Delete</button>
        </div>
        <hr></hr>
        </>
    )
}
