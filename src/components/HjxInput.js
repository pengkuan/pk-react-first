import React, { Component} from 'react'
import TextField from 'material-ui/TextField';

export default class CommentList extends Component {
  constructor() {
    super()
    this.state = {
      hintStyle:{
      'fontSize': '0.56rem',
      'color':'#ccc',
      'marginBottom': '0.5rem',
      },
      inputStyle:{
        'marginTop': '-0.6rem',
      }
    }
    
  }

  handleDeleteComment (index) {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(index)
    }
  }

  handleChange(e , newValue ){
    if (this.props.onChange) {
      this.props.onChange(this.props.value , newValue)
    }
  }
  render() {
    return (
      <TextField 
        fullWidth 
        hintText={this.props.hintText?this.props.hintText:'请输入'} 
        inputStyle={this.state.inputStyle} 
        hintStyle={this.state.hintStyle} 
        onChange={this.handleChange.bind(this)}
      />
    )
  }
}
