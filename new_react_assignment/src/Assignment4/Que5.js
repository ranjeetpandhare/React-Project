// WAP to generate following output using List Rendering and key
// Make list of person and its attribute is id, name,skill
// Example:
// const persons = [{ id: 1, name: 'Ansh', age: 22, skill: 'React' },
// {id: 2, name: 'Jay', age: 25, skill: 'Java' },
// {id: 3, name: 'Sara', age: 23, skill: ’Angular’}]
import React from 'react'

export default function Que5() {
    const persons = [{ id: 1, name: 'Ansh', age: 22, skill: 'React' },{id: 2, name: 'Jay', age: 25, skill: 'Java' },{id: 3, name: 'Sara', age: 23, skill: 'Angular'}]
    return (
        <div>
            {persons.map(persons=><h1>{persons[1
            
            
            ]}</h1>)}
        </div>
    )
}
