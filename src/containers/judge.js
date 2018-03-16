import React,{Component} from 'react';
import {Link} from 'react-router-dom';


export default class Judge extends Component{
  constructor(){
    super()
    this.state =  {productId:'0'}
  }
  componentWillMount(){
    console.log(this.props.match.params.productId)
    this.setState(
      {productId : this.props.match.params.productId}
    )
  }
  render(){
    return (
      <div>
        <h2>选择估价选项页面</h2>
        <h4>当前ID:{this.state.productId}</h4>
        <Link to={ `/judge/${this.state.productId}/result` }> <button >提交估价信息</button> </Link>
      </div>
    )
    
  }
}
  

