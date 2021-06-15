import React, { Component } from 'react'
import Box from './Box'
import './BoxContainer.css'

class BoxContainer extends Component{
    static defaultProps = {
        maxBoxes: 18,
        allColors: ["#001f3f", "#01FF70", "#F012BE", "#ffbbee", "#fe8a71", "#e7d3d3", "#ff8b94", "#ffd3b6",
    "#B10DC9","#6497b1" , "#8874a3",  "#f4b6c2","#f6abb6", "#fe4a49", "#2ab7ca" , "#84c1ff"] 
    }
    render() {
        const boxes = Array.from({ length: this.props.maxBoxes })
            .map(() => <Box color={this.props.allColors}/>)
        
            return <div className="BoxContainer">{boxes}</div>
    }
}

export default BoxContainer