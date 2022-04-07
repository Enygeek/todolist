import React from 'react'
import ToDoList from "./ToDoList";
import NavBar from "./NavBar";


class App extends React.Component{
    render(){
        return(
            <section id="todo">
                <ToDoList/>
                <NavBar/>
            </section>
        )
    }
}
// Rend App importable dans d'autre fichier
export default App