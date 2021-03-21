import React from 'react'
import { useState } from 'react'
// import './App1.css'

const ToDoNew = () => {

    const [inputList, setInputList] = useState("");
    const [items, setItems] = useState([])
    const [items1, setItems1] = useState([])

    const addNewTask = (e) => {
        setInputList(e.target.value);
    }
    const removeItem = (i) => {
        const removeitem = [...items]
        removeitem.splice(i, 1);
        setItems(removeitem)
    }
    const removeItem1 = (i) => {
        const removeitem = [...items1]
        removeitem.splice(i, 1);
        setItems1(removeitem)
    }
    const listOfItem = () => {
        if (inputList != "") {
            setItems((olditem) => {
                return [...olditem, inputList];
            })
            setInputList("");
        }
    }
    const changeIt = (index) => {

        setItems1((olditems1) => {
            return [...olditems1, items[index]]
        })

        const removeitem = [...items]
        removeitem.splice(index, 1);
        setItems(removeitem)
    }

    const changeIt1 = (index) => {
        setItems((olditems) => {
            return [...olditems, items1[index]]
        })

        const removeitem1 = [...items1]
        removeitem1.splice(index, 1);
        setItems1(removeitem1)
    }

    return (
        <div>
            <div className="app">
                <header>
                    <h1>Daily ToDo</h1>
                    <input type="text" name="text" id="text" placeholder="What is your mission?" value={inputList} onChange={addNewTask} />
                    <button id="new" onClick={listOfItem}>+</button>
                </header>

                <div id="wrapper">
                    <ul id="todo">
                        {items.map((item, index) => {
                            return (
                                <div>
                                    <li key={index} id={index} >
                                        <span id="todo">{item}</span>
                                        <div className="buttons">
                                            <button className="remove" onClick={() => removeItem(index)}></button>
                                            <button className="complete" onClick={() => changeIt(index)}></button>
                                        </div>
                                    </li>
                                </div>
                            );
                        })}
                    </ul>
                    <ul id="ready">
                        {items1.map((item, index) => {
                            return (
                                <div>
                                    <li key={index} id={index}>
                                        {item}
                                        <div className="buttons">
                                            <button className="remove" onClick={() => removeItem1(index)}></button>
                                            <button className="complete" onClick={() => changeIt1(index)}></button>
                                        </div>
                                    </li>
                                </div>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <div id="fini"></div>
        </div>
    )
}

export default ToDoNew
