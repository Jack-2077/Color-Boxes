import React, { Component } from 'react'
import './Box.css'
import {choice} from './helpers'

class Box extends Component{
    static defaultProps = {
        allColors: ["#001f3f", "#01FF70", "#F012BE", "#ffbbee", "#fe8a71", "#e7d3d3", "#ff8b94", "#ffd3b6",
    "#B10DC9","#6497b1" , "#8874a3",  "#f4b6c2","#f6abb6", "#fe4a49", "#2ab7ca" , "#84c1ff"] 
    }
    constructor(props) {
        super(props)
        this.state = { color:choice(this.props.allColors) }
        this.handleClick = this.handleClick.bind(this)
    }

    pickColor() {
        let newColor
        do {
            newColor = choice(this.props.allColors)
        } while (newColor === this.state.color)
        
        this.setState({color: newColor})
    }

    handleClick() {
        this.pickColor()
    }
    render() {
        return (
            <div  className="Box" style={{backgroundColor: this.state.color}} onClick={this.handleClick}></div>
        )
    }
}

export default Box