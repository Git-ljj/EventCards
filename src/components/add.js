import React from 'react'

class Add extends React.Component{
    add = () => {
        if(!this.input.value){
            return
        }
        this.props.allAdd(this.input.value);
        this.input.value = ''
    }
    clear = () => {
        this.props.allClear()
    }
    componentDidMount(){
        this.input.focus()
    }
    keyup = (e) => {
        // console.log(e.keyCode)
        if(e.keyCode === 13){
            this.add();
        }
    }
    render(){
        return(
            <div className="a-content">
                <input type="text" onKeyDown={this.keyup} ref={(input)=>{this.input = input}}/>
                <button onClick={this.add} >添加事项</button>
                <button onClick={this.clear}>清空</button>
            </div>
        )
    }
}

export default Add