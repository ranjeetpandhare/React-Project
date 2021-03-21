import React from 'react'

function ToDoApp() {
    return (
        <div id="app">

            <header>
                <h1>Daily ToDo</h1>
                <input type="text" name="text" placeholder="What is your mission?" id="text">
                    <button id="new">+</button>
                </header>

                <div id="wrapper">
                    {/* <!--List of uncompleted tasks --> */}
                    <ul id="todo">

                        <li> Tick to complete
                            <div class="buttons">
                                <button class="remove"></button>
                                <button class="complete"></button>
                            </div>
                        </li>
                        <li> Delete me
                           <div class="buttons">
                                <button class="remove"></button>
                                <button class="complete"></button>
                            </div>
                        </li>

                    </ul>

                    {/* <!-- List of Completed tasks --> */}
                    {/* <!-- List of Completed tasks --> */}
                </div>

                {/* <!-- just to decorate --> */}
                <div id="fini"></div>

         

            </div>
    )
}

export default ToDoApp
