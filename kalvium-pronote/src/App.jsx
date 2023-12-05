/* eslint-disable react/no-direct-mutation-state */
import { Component } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Input from './component/input'

class App extends Component {
 
constructor(){
  super()
  this.state={
  value:"",
  data:[]
  }

}
handleSubmit=()=>{
  this.state.data.push(this.state.value)
  this.setState({value:""})
}
handleDelete=(index)=>{
  this.state.data.splice(index,1)
  this.setState({data:this.state.data})
}
handleUpdate=(index)=>{
  const data= prompt()
  this.state.data[index] = data
  this.setState({data:this.state.data})
}

handleChange=(text)=>{
  this.setState({value:text})
}
  render(){
    return(
    <>
      {/* <div id='input'>
       <input type="text" placeholder='Enter the task' value={this.state.value} onChange={(e)=>{this.setState({value:e.target.value})}}  />
       <button onClick={this.handleSubmit}>Create</button>
      </div> */}
      <Input inputvalue={this.state.value} handleSubmit={this.handleSubmit} handleChange={this.handleChange}  />
<div id='text'>
  <h1>{this.state.value}</h1>
</div>
<div id="list">
  {
    this.state.data.map((el,index)=>{
      // eslint-disable-next-line react/jsx-key
      return (<div key={index}>
        <h1>{el}</h1>
        <button onClick={()=>{this.handleUpdate(index)}}>Update</button>
        <button onClick={()=>{this.handleDelete(index)}}>Delete</button>
      </div>)
    })
  }

</div>
    </>
    )
}}

export default App
