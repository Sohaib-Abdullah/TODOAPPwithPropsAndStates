import React, { useEffect, useState } from "react";

export default function Input(props) {
  console.log(props);
  const [todo, setTodo] = useState('');
  const [error, setError] = useState(false);

  const changeInput = (event) => {
    setTodo(event.target.value);
    if(event.target.value.length > 0){
      setError(false);
    } else {
      setError(true);
    }
  }

  const submit = (e) => {
    e.preventDefault();
    if(todo.length > 0){
      if(props.editData.index !== ''){
        props.updateTodo(props.editData.index, todo)//yahan per hum updateTodo function ko call ker rhy hain
      } else {
        props.addTodo(todo);//yahan per us prop function ko call ker rhy or state ki value bhi pass ker rhy hain
      }
    }else {
      setError(true);
    }
    setTodo('');
  }

  useEffect(()=>{
    setTodo(props.editData.data)
  },[props.editData.data])// is useEffect ka is ny yei bataya k setTodos ko directly use ni ker skty is k lye useEffect() ka use kia
  //or useEffect() bhi with dependency

  return (
    <div>
      <form className="row g-3" onSubmit={submit}>
        <div className="col-10">
          <input
            type="text"
            className="form-control"
            placeholder="Enter TODO"
            value={todo}
            onChange={changeInput}
          />
          { error && <p className="text-danger">Please Enter Todo</p>}
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-primary mb-3">
            {
              props.editData.index === '' ? "Add" : "Update"
            }
          </button>
        </div>
      </form>
    </div>
  );
}
