import React, { Component } from 'react'
import { PropTypes } from 'prop-types';
// import FontIcon from 'material-ui/FontIcon';
import TitleBar from '../components/TitleBar';
import styles from '../styles/payinfo.scss';
// let styles = require('../styles/titlebar.css');

console.log(styles)


export default class Comment extends Component {
  static propTypes = {
    // title: PropTypes.string.isRequired,
    // backApp: PropTypes.bool.isRequired
  }
  constructor () {
    super()
    this.state = { timeString: '' }
  }
  componentWillMount () {
    
  }
  render () {
    const title = this.props.title
    return (
      <div className='payinfo'>
        <TitleBar history={this.props.history} title='信息填写' backApp={false}/>
        <div className='top-bar'></div>
      	<div className='container'>
          <p className='title'>收款方式</p>
        </div>
        <div className='test'>aaaaa</div>
      </div>
    )
  }
}

