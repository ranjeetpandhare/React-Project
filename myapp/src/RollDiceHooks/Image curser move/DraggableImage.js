import React, { useRef, useState, useEffect } from 'react'
import Backgroundimage from './1.jpg'

const Style1 = {
  width: "50px",
  height: "50px",
  color: "#FFFFFF",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}

const DraggableImage = () => {
  const [pressed, setPressed] = useState(false)
  const [position, setPosition] = useState({x: 0, y: 0})
  const ref = useRef()

  useEffect(() => {
    if (ref.current) {
      ref.current.style.transform = `translate(${position.x}px, ${position.y}px)`
    }
  }, [position])
  const onMouseMove = (event) => {
    if (pressed) {
      setPosition({
        x: position.x + event.movementX,
        y: position.y + event.movementY
      })
    }
  }

  return (
    <div 
      ref={ ref }
      style={ Style1 }
      onMouseMove={ onMouseMove }
      onMouseDown={ () => setPressed(true) }
      onMouseUp={ () => setPressed(false) }>
         <img src={Backgroundimage} alt="" />
    </div>
  )
}

export default DraggableImage