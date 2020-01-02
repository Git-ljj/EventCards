import React from 'react'

class List extends React.Component{
    del = (index) => {
        this.props.allDel(index)
    }
    render(){
        const list = this.props.list;
        const flag = this.props.list.length ? "none" : "block";
        return(
            <div className="l-content">
                <p style={{display:flag}}>尚无待办事项</p>
                <ol>
                    {
                        list.map((value,index)=>{
                            return <li key={index}>{value} <button onClick={()=>this.del(index)}>删除</button></li>
                        })
                    }
                </ol>
            </div>
        )
    }
}

export default List