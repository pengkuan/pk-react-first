import React, { Component } from 'react'
import { connect } from 'react-redux'
import api from '../api/index'
import { Link } from 'react-router-dom';
import TitleBar from '../components/TitleBar';


class Result extends Component{
  // static propTypes = {
  //   comments: PropTypes.array,
  //   initComments: PropTypes.func,
  //   onDeleteComment: PropTypes.func
  // }
  constructor(){
    super()
    this.state={
      data:''
    }
  }
  componentWillMount () {
    this._loadComments()
  }
  _loadComments () {
    const  planlist  = this.props.planlist
    this.setState({
      data : planlist
    })
  }
  render(){
    return (
      <div>
        <TitleBar history={this.props.history} title='估价结果' backApp={false}/>
        <h2>估价结果页</h2>
        <Link to='/payInfo'>确认回收</Link>
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