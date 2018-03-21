import React, { Component } from 'react'
import { connect } from 'react-redux'
import api from '../api/index'
import { Link } from 'react-router-dom';
import TitleBar from '../components/TitleBar';
import styles from '../styles/result.scss';

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

class Result extends Component{
  // static propTypes = {
  //   comments: PropTypes.array,
  //   initComments: PropTypes.func,
  //   onDeleteComment: PropTypes.func
  // }
  constructor(){
    super()
    this.state={
      data:'',
      testList:[]
    }
  }
  componentWillMount () {
    let arr = []
    for(let i = 0;i<50;i++){
      arr.push ( {name:`name${i}`,index:i} )
    }
    this.setState({
      testList:arr
    })
    console.log(this.state.testList)

  }
  _loadComments () {
    const  planlist  = this.props.planlist
    this.setState({
      data : planlist
    })
  }
  handleDel(index){ 
    console.log( this.state.testList.splice(index,1) )
  }
  render(){
    return (
      <div>
        <TitleBar history={this.props.history} title='估价结果' backApp={false}/>
        <div className='test'>
          {
            this.state.testList.map(item=>
              <div key={item.index}>
                <span>{item.name}</span>
                <span onClick={()=>this.handleDel(item.index)}>删除</span>
              </div>
            )
          }
        </div>
        <Greeting isLoggedIn={false} />
        <Link to='/payInfo'><div className='sure'>确认回收</div></Link>
      </div>
    )
  }
}
const mapStateToProps = function(store) {
  return {
    planlist: store.comments
  };
};
// 连接 store，作为 props
export default connect(mapStateToProps)(Result);