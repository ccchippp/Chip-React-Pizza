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
    console.log('submitted')
  }

  handleChange = (e) => {
    console.log(e.target.name, e.target.value)
    this.setState({
      selectedPizza: {
        ...this.state.selectedPizza,
        [e.target.name]: e.target.value
      }
    })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm/>
        <PizzaList/>
      </Fragment>
    );
  }
}

export default App;
