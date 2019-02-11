import React, { Component } from 'react'
import App from './App'
import './Table.css'


class Table extends Component {

state = {
      roomates: '',
      }

  handleClick  = () => {

  function shuffle(array){
  let counter = array.length

  while (counter > 0) {
    let index = Math.floor(Math.random() * counter)

    counter--

    let temp = array[counter]
    array[counter] = array[index]
    array[index] = temp
  }

  return array
}


	
	var password
	var pass1 = "cool"
	password = prompt('Enter your password for shuffle !')
	if (password === pass1){

		let arrayRoom = ['Samy', 'Flore', 'Vivyane', 'Pierre']

  //Shuffle the array
  let roomate = shuffle(arrayRoom)

  //Update the array
  this.setState({ roomates: roomate })
	}else {
		prompt('Wrong password !!')
	}
  

  }
	

// document.querySelector(".button").onclick = function () {
//     var password;

// 		var pass1="cool";

// password=prompt('Please enter your password to view this page!',' ');

// if (password === pass1)
//  { 
//   document.querySelector(".button").addEventListener("click", shuffle)
// }

// }
		render() {
		return (
			<React.Fragment>
			<button className="button" onClick={this.handleClick}>            
              Shuffle !
              </button>
      
      <table className="container">
      <thead>
        <tr>
          <th><h1>Week of</h1></th>
          <th><h1>11/02 </h1></th>
          <th><h1>18/02</h1></th>
          <th><h1>25/02</h1></th>
        </tr>
      </thead>
      <tbody className="blabla">
        <tr>
          <td  className="week1">Salon</td>
          <td  className="case1">{this.state.roomates[0]}</td>
          <td  className="case2">{this.state.roomates[4]}</td>
          <td  className="case3">{this.state.roomates[1]}</td>
        </tr>
        <tr>
          <td  className="week2">Cuisine</td>
          <td  className="case1">{this.state.roomates[1]}</td>
          <td  className="case2">{this.state.roomates[3]}</td>
          <td  className="case3">{this.state.roomates[2]}</td>
        </tr>
        <tr>
          <td className="week3">Palier</td>
          <td  className="case1">{this.state.roomates[2]}</td>
          <td  className="case2">{this.state.roomates[0]}</td>
          <td  className="case3">{this.state.roomates[3]}</td>
        </tr>
        <tr>
          <td className="week4">Toilette</td>
          <td  className="case1">{this.state.roomates[3]}</td>
          <td  className="case2">{this.state.roomates[2]}</td>
          <td  className="case3">{this.state.roomates[4]}</td>
        </tr>
        <tr>
          <td className="week5">Salle de bain</td>
          <td  className="case1">{this.state.roomates[4]}</td>
          <td  className="case2">{this.state.roomates[1]}</td>
          <td  className="case3">{this.state.roomates[2]}</td>
        </tr>
      </tbody>
    </table>

		</React.Fragment>
			)
	}
}

export default Table
