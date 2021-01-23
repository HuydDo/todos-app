import React from 'react'
import ToDoCard from '../components/ToDoCard'
import CreateCard from '../components/CreateCard'
import ToDoCardConntainer from './ToDoCardContainer'

class MainContainer extends React.Component {
 
  state = {
    cards: []
  }

  createNewCard = (input) => {
    fetch("http://localhost:3000/cards",{
      method: "POST",
      headers: {
        'Content-Type' : 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        title:input
      })
    })
    .then(resp => resp.json())
    .then(newCard => {
      this.setState({
        card: [...this.state.cards, newCard]
      })
    })
  }

}

export default MainContainer;