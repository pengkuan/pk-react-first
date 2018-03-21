import React, { Component } from 'react'
import { PropTypes } from 'prop-types';
import TitleBar from '../components/TitleBar';
import styles from '../styles/orderresult.scss';
import FlatButton from 'material-ui/FlatButton';

export default class Comment extends Component {
  constructor () {
    super()
  }
  componentWillMount () {
    
  }
  
  render () {
    return (
      <div className='roder-result'>
        <TitleBar history={this.props.history} title='提交成功' backApp={false}/>
        <img className='success-img' src={require(`../images/order_success.png`)} />
        <p className='success'>提交订单成功！</p>
        <p className='tip1'>请将回收的手机恢复出厂设置以保护用户隐私</p>
        <p className='tip2'>请将订单号写在纸条上贴于手机背面，谢谢合作</p>
        <div className='q-send'>快速发货</div>
        <FlatButton label="返回首页" primary={true} />
      </div>
    )
  }
}

