import React, { useEffect, useState } from "react";
import { getTodos } from "../services/postService";


export default function Todos(){

    const [todos, setTodos] = useState([]);
    useEffect(() => {
        getTodos()
        .then(res => setTodos(res.data))
        .catch(error => console.error(error));
    },[]);
    return (
        <div>
            <h2>Posts</h2>
            
            {todos && todos.map(todos => (
                    <div key={todos.id}>
                        <h3>{todos.title}</h3>
                    </div>
            ))
            }
        </div>
    )
}