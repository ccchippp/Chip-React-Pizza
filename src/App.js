import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  state = {
    pizzas: [],
    selectedPizza: {}
  }

  componentDidMount()  {
    fetch('https://localhost3000/pizzas')
    .then((res) => res.json())
    .then((pizzas) => this.setState({ pizzas }))
  }

  selectPizza = (singlePizza) => {
    this.setState(
      {
        selectedPizza: singlePizza
      },
      () => console.log(this.state)
    )
  }

  handleSubmit = () => {
    console.log("working");
    this.setState({
      pizzas: this.state.pizzas.map(pizza => 
        pizza.id === this.state.selectedPizza.id ? this.state.selectedPizza : pizza)
    })

  handleChange = (e) => {
    console.log(e.target.name, e.target.value)
    this.setState({
      selectedPizza: {
        ...this.state.selectedPizza,
        [e.target.name]: e.target.value
      }
    })
  }

  toggleVeg = () => {
    this.setState({
      selectedPizza: {
        ...this.state.selectedPizza,
        vegetarian: !this.state.selectedPizza.vegetarian
      }
    })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          toggleVeg={this.toggleVeg}
        />
        <PizzaList
          allPizzas={this.state.pizzas}
          selectPizza={this.state.selectPizza}
        />
      </Fragment>
    );
  }
}

export default App;
