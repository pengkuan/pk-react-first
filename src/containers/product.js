import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import TitleBar from '../components/TitleBar';


export default class Home extends Component{
  constructor(){
    super()
    this.state = {
      list:[
        {id:'1',name:'机型1'},
        {id:'2',name:'机型2'},
        {id:'3',name:'机型3'},
        {id:'4',name:'机型4'},
        {id:'5',name:'机型5'},
        {id:'6',name:'机型6'}
      ]
    }
  }

  render(){
    return (
      <div>
        <TitleBar history={this.props.history} title='选择机型' backApp={true}/>
        <h2>机型选择页面</h2>
        <ul>
          { this.state.list.map( item =><Link key={item.id} to={`/judge/${item.id}`}> <li >{item.name}</li> </Link> )}
        </ul>
      </div>
    )
    
  }
}