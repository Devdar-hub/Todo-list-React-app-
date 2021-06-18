import React, { useState} from 'react';

export const AddTodo = (props) => {
    const [title, settitle] = useState("")
    const [decp, setdecp] = useState("")

    const submit = (e)=>{
        e.preventDefault();
        if(!title || !decp)
        {
            alert("Title or Description can not be blank");
        }else{
        props.addTodo(title,decp);
        settitle("");
        setdecp("");
        }
    }
    return (
        <div className="container my-3">
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>{settitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
                       
                 </div>
                    <div className="mb-3">
                        <label htmlFor="decp" className="form-label">Todo description</label>
                        <input type="text" value={decp} onChange={(e)=>{setdecp(e.target.value)}} className="form-control" id="decp"/>
                    </div>
                        <button type="submit" className="btn btn-success btn-sm">Submit</button>
            </form>
        </div>
    )
}
