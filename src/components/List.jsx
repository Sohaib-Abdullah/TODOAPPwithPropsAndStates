import React from "react";

export default function List(props) {
 
  // const handleDelete = (idx) => {
  //     // e.preventDefault();
  //     props.deleteTodo(idx)

  // }
  return (
    <div>
      <ul className="list-group">
        { props.todos.length > 0 ? props.todos.map((value, index)=>{ //here we are using conditional rendering
            return <li className="list-group-item d-flex justify-content-between" key={index}>
              <div>
                {value}
                </div>
                <div>
                  <button className="btn btn-warning" onClick={()=>props.editTodo(index, value)}>Edit</button>
                  {/* <button className="btn btn-danger" onClick={()=>handleDelete(index)}>Delete</button> */}
                  <button className="btn btn-danger" onClick={()=>props.deleteTodo(value)}>Delete</button>
                </div>
              </li>//and use of map() function
        }): <li className="list-group-item">No TODO</li>
        }
      </ul>
    </div>
  );
}

