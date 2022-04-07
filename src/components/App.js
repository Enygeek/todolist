import React from 'react'
import {FaListAlt, FaCheckSquare, FaPlusSquare, FaTrash} from 'react-icons/fa'
import ToDoList from "./ToDoList";


class App extends React.Component{
    render(){
        return(
            <section id="todo">
                <h1 className="m-3">Liste de tâches</h1>
                <ToDoList/>
                <footer className="d-flex justify-content-between bg-secondary p-3" id="mainFooter">
                    <div className="btn-group">
                        <a href="#" className="btn btn-outline-dark bg-light"><FaListAlt /></a>
                        <a href="#" className="btn btn-outline-dark bg-light">< FaCheckSquare /></a>
                        <a href="#" className="btn btn-outline-dark bg-light"><FaPlusSquare /></a>
                    </div>
                    <button className="btn btn-outline-dark bg-light"><FaTrash /></button>
                </footer>
            </section>
        )
    }
}
// Rend App importable dans d'autre fichier
export default App