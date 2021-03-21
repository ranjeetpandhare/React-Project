import { rgbToHex } from '@material-ui/core';
import React, { useState } from 'react'

function RandomQuote() {
    const quotes=[{
    
    value:"The greatest glory in living lies not in never falling, but in rising every time we fall.", by:"Nelson Mandella"},
    
    {value:"The way to get started is to quit talking and begin doing." ,by:"Walt Disney"}, 
    
    {value:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking." ,by:"Steve Jobs"},
    
    {value:"Stay hungry, stay foolish", by:"Steve Jobs"},
   
    {value:"Don’t count the days, make the days count.", by:"Muhammad Ali"},
    
    {value:"I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times.", by:"Bruce Lee"},
   
    {value:"Genius is one percent inspiration, ninety-nine percent perspiration.", by:"Thomas Edition"}
];


    const imgList=[
        require('./Random image/images/1.jpg'),
       
        require('./Random image/images/2.jpg'),
       
        require('./Random image/images/3.jpg'),
       
        require('./Random image/images/4.jpg'),
       
        require('./Random image/images/5.jpg'),
       
        require('./Random image/images/6.jpg'),
        
        require('./Random image/images/7.jpg'),
       
        require('./Random image/images/8.jpg'),
       
        require('./Random image/images/9.jpg'),
       
        require('./Random image/images/10.jpg'),
      
        require('./Random image/images/11.jpg')]

    const [famousQuote, setQuote] = useState({value:"If you think you can do a thing or think you can’t do a thing, you’re right.",by:"Henry Ford"});
    
    const [image, setImage] = useState(require('./Random image/images/1.jpg'));
    
    const [colour,setColour] = useState(`rgb(20,25,30)`)
    
    const findQuote=()=>{

        setColour(`rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`)

        var x=Math.floor(Math.random() * quotes.length);
        setQuote(quotes[x]);
        setImage(imgList[Math.floor(Math.random() * imgList.length)])
    }


    return (
        
        <div style={{backgroundColor:colour , width:'100%',height:'500px'}}>
           <div>
            <img src={image} style={{width:'100%', height:'400px'}}/>
            <h1 style={{color:'white'}}>{famousQuote.value}</h1>
            <p style={{color:'white'}}>by-{famousQuote.by}</p>
            <button onClick={findQuote}>New Quote</button>
           </div> 
        </div>
    )
}

export default RandomQuote
