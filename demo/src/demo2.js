import React from "react";
class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            num: 0
        }
    }

    add() {
        this.setState(state => ({num: state.num + 1}))
    }

    render() {
        return <div onClick={() => this.add()}>{this.state.num}</div>
    }
}

export default Counter