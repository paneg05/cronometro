/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import './estilo.css'
class App extends Component{
  constructor(props){
    super(props)

      this.state={
        numero:0,
        botao:'vai'
      }
      this.timer=null
      this.vai=this.vai.bind(this)
      this.limpar=this.limpar.bind(this)
  }


  vai(){
    let state = this.state


    if(this.timer!==null){
      clearInterval(this.timer)
      this.timer=null

      state.botao='vai'
      this.setState(state)
    }else{
      this.timer=setInterval(()=>{
        let state = this.state
        state.botao='pausar'
        state.numero+= 0.1
        this.setState(state)
      },100)
    }


  }

  limpar(){
    let state=this.state
    state.numero=0
    this.setState(state)
  }

  render(){
    return(
      <div className="container"> 

        <div className="cronometro">
          <a className="timer">{this.state.numero.toFixed(1)}</a>

          <div className="areabtn">
            <a className="btn" onClick={this.vai}>{this.state.botao.toUpperCase()}</a>
            <a className="btn" onClick={this.limpar}>Limpar</a>
          </div>

        </div>
        

      </div>
    )
  }
}

export default App;
