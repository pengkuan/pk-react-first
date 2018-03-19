import React, { Component } from 'react'
import { PropTypes } from 'prop-types';
// import FontIcon from 'material-ui/FontIcon';
import TitleBar from '../components/TitleBar';
import '../styles/payinfo.scss';

export default class Comment extends Component {
  static propTypes = {
    // title: PropTypes.string.isRequired,
    // backApp: PropTypes.bool.isRequired
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
      <div>
        <TitleBar history={this.props.history} title='信息填写' backApp={false}/>
        <div className='top-bar'></div>
      	<div className='container'>
          <p className='title'>收款方式</p>
        </div>

      </div>
    )
  }
}

