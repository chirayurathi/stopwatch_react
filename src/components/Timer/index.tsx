import React from 'react'
import Style from './Timer.module.css';
class Timer extends React.Component<
  {},
  { timer:number; isActive:boolean; isPaused:boolean }
> {
  state = {
    timer: 0,
    isActive: false,
    isPaused: false,
  };

    counter:any = null
  
    handleStart = () => {
      this.setState({
          isActive:true,
          isPaused:true
        })
        this.counter = setInterval(() => {
        this.setState({timer:this.state.timer + 1})
      }, 1000)
    }
  
    handlePause = () => {
      clearInterval(this.counter)
      this.setState({isPaused:false})
    }
  
    handleResume = () => {
        this.setState({isPaused:true})
        this.counter = setInterval(() => {
            this.setState({timer:this.state.timer + 1})
      }, 1000)
    }
  
    handleReset = () => {
        clearInterval(this.counter)
        this.setState({isActive:false,
      isPaused:false,
      timer:0})
    }

    formatTime = (timer:number) => {
        const getSeconds = `0${(timer % 60)}`.slice(-2)
        const minutes = `${Math.floor(timer / 60)}`
        const getMinutes = `0${parseInt(minutes) % 60}`.slice(-2)
        const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)
      
        return `${getHours} : ${getMinutes} : ${getSeconds}`
      }

    render(){
    return (
      <div className={Style.Timer}>
        <h3>React Stopwatch</h3>
        <div className={Style.WatchContainer}>
          <p>{this.formatTime(this.state.timer)}</p>
          <div className={Style.ButtonContainer}>
            {
              !this.state.isActive && !this.state.isPaused ?
                <button onClick={this.handleStart}>Start</button>
                : (
                  this.state.isPaused ? <button onClick={this.handlePause}>Pause</button> :
                    <button onClick={this.handleResume}>Resume</button>
                )
            }
            <button onClick={this.handleReset} disabled={!this.state.isActive}>Reset</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Timer; 