import { useState } from "react";
import Input from "./components/Input";
import List from "./components/List";


function App() {
  const [todos, setTodos] = useState(['breakfast', 'lunch', 'dinner']);
 const [editData, setEditData] = useState({
  index:'',
  data:''
 })
  const addTodo = (value) => {
    //todos.push(value)

    //setTodos([...todos]) yei chez bari bar parhi lakin dimagh sy skip ho jati ha k states are immutable
    //states ki value direct change ni ker skty is k lye new array banay gy yei tapas script ny bhi
    //object reference value video ma samjhai thi object reference , object copy , object clone etc
    setTodos([...todos, value]);//or yei JS ma parha tha k push ki bjaye yei tariqa bhi es6 ma aya ha
  }

  const deleteTodo = (value) => {
    // todos.splice(idx, 1);

    // setTodos([...todos])
    // console.log(idx);
    const filteredTodo = todos.filter((todo)=> todo !== value)
    setTodos(filteredTodo);
  }

  const editTodo = (index, data) => {
    setEditData({
      index,
      data
    })
  }

  const updateTodo = (index, data) => {
    todos.splice(index, 1, data);

    setTodos([...todos]);
    
    setEditData({
      index:'',
      data:''
     })
  }

  return (
    <div className="container mt-4">
      <Input addTodo={addTodo} editData={editData} updateTodo={updateTodo} />
      {/* 1st case  yei conders never quit ny bataya tha k hamesha child to parent props pass kerny ka tariq yahi ha k parent
      ma function bana ker child ma as a props pass ker do
      2nd case ma hum parent sy child jo states yahan banai thi const [editData, setEditData] = useState({
  index:'',
  data:''
 }) us ko update  const editTodo = (index, data) => {
    setEditData({
      index,
      data
    })
  }  kerny k bad simple parent sy child states pass ker rhy as a props

  or 3rd case ma phr child to parent props pass ker rhy or us ka tariqa yahi ha by using function updateTodo kerny k bad
      */}
      <List todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
       {/* This was the 1st case where we are passing props to the List component only for the rendering of list component
       2nd case child to parent props pass kerna wo coders never quit ny bataya that us k tariqa yahi hota ha function bana ker child ko bajhna
       or phir wahan sy call kerna
       3rd case yei ha k hum edit kerna chahty thy todo task ko us ka tariq yahi tha pahly props List component sy App Component ma ay or phr
       App component sy Input ma jay yei ma register ma bhi explain ker dn ga to usi k lye
       hum ny yei child to parent props k lye editTodo props pass kia

       */}
    </div>
  );
}

export default App;
