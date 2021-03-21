import React from 'react'

function ListRendering() {
    const users = [ {name1:'chris', pets: [{ name1: 'bella', type: 'dog' },{ name1: 'cocoa', type: 'dog' }]}, {name1:'nick', pets: [{ name1: 'hilo', type: 'cat' },{ name1: 'polly', type: 'cat' }]} ];
    return (
        <div>
            {users.map(temp=> <h1>{temp.name1} and {temp.pets}</h1>)}
        </div>
    );
}

export default ListRendering
