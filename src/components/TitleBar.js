import React, { Component } from 'react'
import { PropTypes } from 'prop-types';
// import FontIcon from 'material-ui/FontIcon';
import '../styles/titlebar.scss';

export default class Comment extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    backApp: PropTypes.bool.isRequired
  }
  constructor () {
    super()
    this.state = { timeString: '' }
  }
  handleGoBack (){

  	if(this.props.backApp){
      console.log('返回原生App')
    }else{
      this.props.history.goBack();
    }
  }
  componentWillMount () {
    
  }
  render () {
    const title = this.props.title
    return (
      <div className='title-container'>
      		<i className="iconfont icon-fanhui" onTouchTap={this.handleGoBack.bind(this)} ></i>
          <span className='comment-username'>
            {title}
          </span>
      </div>
    )
  }
}

