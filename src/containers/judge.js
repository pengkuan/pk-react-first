import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import TitleBar from '../components/TitleBar';


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
      <AppBar
    title="Title"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
      <TitleBar history={this.props.history} title='估计选项' backApp={false}/>
        <h2>选择估价选项页面</h2>
        <h4>当前ID:{this.state.productId}</h4>
        <Link to={ `/judge/${this.state.productId}/result` }> <button >提交估价信息</button> </Link>
      </div>
    )
    
  }
}
  

