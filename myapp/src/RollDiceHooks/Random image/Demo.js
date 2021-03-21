import React from "react";
import QuoteAndImage from "./QuoteAndImage";
import quotes from './QuotesDatabase'
import "./My.css";
import image from "./ImagesDatabase";

class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: quotes[0].quote,
      image:image[0].image
    };
  }

  randomQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
    
  }
  randomImage() {
    const randomimage = Math.floor(Math.random() * image.length);
    return image[randomimage];
    
  }

  shuffleQuotes(array){
    return array.sort(()=>Math.random()-0.5)
  }

  handleClick = () => {
    const generateRandomQuote = this.randomQuote();
    const generateRandomImage = this.randomImage();
    this.setState({
      quote: generateRandomQuote.quote,
      image: generateRandomImage.image
    });
    this.shuffleQuotes(quotes,image)
   
  };
 
  randomColor() {
    const color = `rgb(
      ${Math.floor(Math.random() * 255)},
      ${Math.floor(Math.random() * 255)},
      ${Math.floor(Math.random() * 255)})`;
    return color;
  }
  
  render() {
    return (
      <div>
        <QuoteAndImage
          displayColor={this.randomColor}
          handleClick={this.handleClick}
          {...this.state}
        />
      </div>
    );
  }
}

export default Demo;