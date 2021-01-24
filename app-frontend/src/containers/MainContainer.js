import React from 'react'
import ToDoCard from '../components/ToDoCard'
import CreateCard from '../components/CreateCard'
import ToDoCardContainer from './ToDoCardContainer'

class MainContainer extends React.Component {
 
  state = {
    cards: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/cards")
    .then(resp => resp.json())
    .then(cards => {
      this.setState({
        cards: cards
      })
    })
  }

  createNewCard = (input) => {
    fetch("http://localhost:3000/cards",{
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
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

  render(){
    return (
      <div className="main-container">
        <ToDoCardContainer cards={this.state.cards} addList={this.addList} handleClickList={this.handleClickList}/>
        <CreateCard createNewCard={this.createNewCard} />
      </div>
    )
  }
}

export default MainContainer;