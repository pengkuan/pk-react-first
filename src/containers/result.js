import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import api from '../api/index'
// import { Link } from 'react-router-dom';

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
    console.log(api.postFetch)
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
        <h2>估价结果页</h2>
        { this.state.data.map( (item,i) => <p key={i}>{item}</p>)}
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