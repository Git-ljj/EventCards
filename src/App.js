import React from 'react';
import './App.css';

import Title from './components/title'
import Add from './components/add'
import List from './components/list'

class App extends React.Component{
  state = {
    // list:["读书","写字","玩电脑"],
    list:[]
  }
  add = (value) => {
      const list = this.state.list;
      list.unshift(value);
      this.setState(list)
  }
  del = (index) => {   //创建删除函数  箭头函数传参index(下标)
    const list = this.state.list;    //定义常量：list ——从state中获取
    list.splice(index,1);    // 执行数组操作，删除当前下标的值
    this.setState(list);    //更新状态
  }
  clear = () => {
    const list = this.state.list;
    list.length=0;
    this.setState(list);
  }
  render(){
    const {list} = this.state;
    return(
      <div className="content">
        <Title />
        <Add allAdd={this.add} allClear={this.clear}/>   {/* 添加和清空列表方法 */}
        <List list={list} allDel={this.del} />
      </div>
    )
  }
}

export default App;
