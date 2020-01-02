import React from 'react'
import '../App.css'

class Title extends React.Component{
    constructor(){
        super();
        this.state = {
            date:new Date()
        }
    }

    componentDidMount(){
        this.timer = setInterval(() => {
            this.setState({
                date:new Date()
            })
        }, 1000);
    }

    render(){
        return(
            <div className="t-content">
                <h2>待办事项列表</h2>
                {/* <span>——2019/11/25</span> */}
        <span>--- {this.state.date.toLocaleDateString()} - {this.state.date.toLocaleTimeString()}</span>
            </div>
        )
    }
}

export default Title