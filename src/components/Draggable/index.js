import React from 'react'
import Draggable from 'react-draggable'
import styled from 'styled-components'
// const DraggableContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   position: relative;
//
//   div {
//     padding: 1em;
//   }
//
//   img {
//     user-select: none;
//   }
// `

const Item = styled.div`
a:hover ,
&:hover {
  cursor: crosshair;
}

`


export default class DraggableComp extends React.Component {
  constructor () {
    super()
  }
  componentWillMount = () => {
      this.number = Math.floor((Math.random() * 666) + 1)
      this.number2 = Math.floor((Math.random() * 999) + 1)
  }
  // Random () {
  //   var number = Math.floor((Math.random() * 666) + 1)
  //   console.log('number>>', number)
  //   return number
  // }
  render () {
    return (
      <Draggable bounds='parent'>
        <Item style={{position: 'absolute', zIndex: this.props.zIndex, bottom: this.number, right: this.number2}}>
          <img src={this.props.src} draggable='false' />
        </Item>
      </Draggable>
    )
  }
}
