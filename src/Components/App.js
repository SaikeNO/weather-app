import './App.css';
import Form from './Form';
import Result from './Result'
import React,{Component} from 'react';

// Klucz do API

const APIKey = "8b1da83af7msh1d72ec000824f5bp198214jsn90cd8f334a8f"

class App extends Component {

  state = { 
    value: '',
    date: '',
    city: '',
    sunrise: '',
    sunset: '',
    temp: '',
    pressure: '',
    wind: '',
    err: false,
  }

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  // handleCitySubmit = e => {
  //   e.preventDefault()
  //   const API = `https://community-open-weather-map.p.rapidapi.com/weather?q=${this.state.value}&rapidapi-key=${APIKey}&units=metric`;

  //   fetch(API)
  //     .then(response=>{
  //       if(response.ok){
  //         return response
  //       }else{
  //         throw Error(response.status)
  //       }
  //     })
  //     .then(response => response.json())
  //     .then(data => {
  //       const date = new Date().toLocaleString();
  //       this.setState(prevState=>({
  //         err: false,
  //         date,
  //         city: prevState.value,
  //         sunrise: data.sys.sunrise,
  //         sunset: data.sys.sunset,
  //         temp: data.main.temp,
  //         pressure: data.main.pressure,
  //         wind: data.wind.speed,
  //       }))
  //     })
  //     .catch(err=>{
  //       this.setState({
  //         err: true,
  //         city: this.state.value
  //       })
  //       console.log(err)
  //     })
  // }


  componentDidUpdate(prevProps, prevState){
    if(prevState.value !== this.state.value){
      const API = `https://community-open-weather-map.p.rapidapi.com/weather?q=${this.state.value}&rapidapi-key=${APIKey}&units=metric`;

      fetch(API)
        .then(response=>{
          if(response.ok){
            return response
          }else{
            throw Error(response.status)
          }
        })
        .then(response => response.json())
        .then(data => {
          const date = new Date().toLocaleString();
          this.setState(prevState=>({
            err: false,
            date,
            city: prevState.value,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            temp: data.main.temp,
            pressure: data.main.pressure,
            wind: data.wind.speed,
          }))
        })
        .catch(err=>{
          this.setState({
            err: true,
            city: this.state.value
          })
          console.log(err)
        })
      }

  }

  render() { 
    return ( 
      <div className="app">
        <Form 
          value={this.state.value} 
          inputChange={this.handleInputChange}
          
        />
        <Result weather={this.state} error={this.state.err}/>
      </div>
     );
  }
}
 
export default App;