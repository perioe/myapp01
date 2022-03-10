import React, {useState} from 'react'
import Header from './Header'
import Footer from './Footer'

export default function ClickCounter () {
    const [clickCount, setClickCount] = useState(0)

    const handleClick = (input) => {
        setClickCount(clickCount + input)
    }

    const handleReset = () => {
        setClickCount(0)
    }

    return (
        <div>
            <div>클릭한 횟수 : {clickCount}</div>
            <button onClick={() => handleClick(1)}>클릭(1)</button>
            <button onClick={() => handleClick(5)}>클릭(5)</button>
            <button onClick={handleReset}>초기화!!</button>
        </div>
    )
}


/*
export default class ClickCounter extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            clickCount: props.initCount || 0
        }
    }

    handleClick = (input) => {
        this.setState({
            clickCount: this.state.clickCount + input
        })
    }
    
    handleReset = () => {
        this.setState({
            clickCount: 0
        })
    }

    render() {
        return (
            <div>
                <div>클릭한 횟수 : {this.state.clickCount}</div>
                <button onClick={() => this.handleClick(1)}>클릭(1)</button>
                <button onClick={() => this.handleClick(5)}>클릭(5)</button>
                <button onClick={this.handleReset}>초기화!!</button>
            </div>
        )
    }
}
*/