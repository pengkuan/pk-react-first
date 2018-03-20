import React, { Component } from 'react'
import { PropTypes } from 'prop-types';
import TitleBar from '../components/TitleBar';
import styles from '../styles/payinfo.scss';
import HjxInput from '../components/HjxInput';

export default class Comment extends Component {
  static propTypes = {
    // title: PropTypes.string.isRequired,
    // backApp: PropTypes.bool.isRequired
  }
  constructor () {
    super()
    this.state = { 
      zfb:{
        account:''
      },
      bank:{
        name:'',
        bankId:'',
        bankNo:''
      },
      payType: 'zfb',
      
    }
    this.changeType = this.changeType.bind(this);
  }
  componentWillMount () {
    
  }
  changeType(type){
    this.setState({
      payType: type
    })
  }
  handleChange(key,val){
    let obj = key.split('.')[0],
        oKey = key.split('.')[1],
        updataObj = {};
    updataObj[oKey] = val
    this.setState(Object.assign(this.state[obj],updataObj))
    console.log(this.state.bank , this.state.zfb)
  }
  render () {
    const title = this.props.title
    // return (
    //   <div className='payinfo'>
    //     <TitleBar history={this.props.history} title='信息填写' backApp={false}/>
    //     <div className='top-bar'></div>
    //     <div className='container'>
    //       <p className='title'>收款方式</p>
    //       <div className='pay-type'>
    //         <div className={this.state.payType==='zfb'?'active':''} onClick={()=>this.changeType('zfb') }>
    //           <img src={require(`../images/info_zfb${ this.state.payType==='zfb'?'_active':'' }.png`)} />
    //           <span>支付宝</span>
    //         </div>
    //         <div className={this.state.payType==='bank'?'active':''} onClick={()=>this.changeType('bank')}>
    //           <img src={require(`../images/info_bank${ this.state.payType==='bank'?'_active':'' }.png`)} />
    //           <span>银行卡</span>
    //         </div>
    //       </div>
    //       <TextField fullWidth hintText="输入顾客姓名" inputStyle={this.state.inputStyle} hintStyle={this.state.hintStyle}/><br />
    //       <TextField fullWidth hintText="输入顾客手机号码" inputStyle={this.state.inputStyle} hintStyle={this.state.hintStyle}/><br />
    //       {this.state.payType ==='zfb'?
    //         <div >
    //           <p className='title'>支付宝账号</p>
    //           <TextField fullWidth hintText="输入支付宝账号" value={this.state.zfb.account} inputStyle={this.state.inputStyle} hintStyle={this.state.hintStyle} /><br />
    //         </div> :
    //         <div >
    //           <p className='title'>银行卡号</p>
    //           <TextField fullWidth hintText="输入持卡人姓名" value={this.state.bank.name} inputStyle={this.state.inputStyle} hintStyle={this.state.hintStyle} /><br />
    //           <TextField fullWidth hintText="输入银行卡号" value={this.state.bank.bankNo} inputStyle={this.state.inputStyle} hintStyle={this.state.hintStyle} /><br />
    //         </div>
    //       }
    //       <div className='submit'>提交订单</div>
    //     </div>
    //   </div>
    // )
    return (
      <div className='payinfo'>
        <TitleBar history={this.props.history} title='信息填写' backApp={false}/>
        <div className='top-bar'></div>
        <div className='container'>
          <p className='title'>收款方式</p>
          <div className='pay-type'>
            <div className={this.state.payType==='zfb'?'active':''} onClick={()=>this.changeType('zfb') }>
              <img src={require(`../images/info_zfb${ this.state.payType==='zfb'?'_active':'' }.png`)} />
              <span>支付宝</span>
            </div>
            <div className={this.state.payType==='bank'?'active':''} onClick={()=>this.changeType('bank')}>
              <img src={require(`../images/info_bank${ this.state.payType==='bank'?'_active':'' }.png`)} />
              <span>银行卡</span>
            </div>
          </div>
          <HjxInput hintText="输入顾客姓名" /><br />
          <HjxInput hintText="输入顾客手机号码" /><br />
          {this.state.payType ==='zfb'?
            <div >
              <p className='title'>支付宝账号</p>
              <HjxInput  hintText="输入支付宝账号" value='zfb.account'  onChange={this.handleChange.bind(this)}   /><br />
            </div> 
          :
            <div >
              <p className='title'>银行卡号</p>
              <HjxInput  hintText="输入持卡人姓名" value='bank.name' onChange={this.handleChange.bind(this)} /><br />
              <HjxInput  hintText="输入银行卡号" value='bank.bankNo'  onChange={this.handleChange.bind(this)}/><br />
            </div>
          }
          <div className='submit'>提交订单</div>
        </div>
      </div>
    )
  }
}

