import React, { Component } from 'react'
import Box from './Box'

class BoxContainer extends Component{
    static defaultProps = {
        maxBoxes: 18
    }
    render() {
        const boxes = Array.from({ length: this.props.maxBoxes })
            .map(() => <Box />)
        
            return <div className="BoxContainer">{boxes}</div>
    }
}

export default BoxContainer