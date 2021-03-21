import React, { useState, useEffect } from 'react';

function Winner(props) {
    const [winner, setWinner] = useState(null)

    useEffect(() => {
        if (props.number < 4) {
             setWinner('small') 
            }
             else { 
                 setWinner('big')
                 }
        console.log('anounce winner')
    }, [props.number])

    return (
        <div>{winner} wins</div>
    )
}

export default Winner;