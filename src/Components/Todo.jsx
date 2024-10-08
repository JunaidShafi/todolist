import Form from "./Form.jsx";
import TodoList from "./TodoList.jsx";
import {useState} from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
export default function Todo() {
    const [toDos, setToDos] = useState([]);
  return (
    <div>
        <Header/>
        <Form key = {toDos} toDos={toDos} setToDos={setToDos}/>
        <TodoList key={toDos+1} toDos={toDos} setToDos={setToDos}/>
        <Footer key = {toDos+2} toDos={toDos}/>
    </div>
  );
}
