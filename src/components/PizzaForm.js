import React from "react"

class PizzaForm extends React.Component {
  state = {
    formPizza: this.props.selectedPizza
  }

  handleChange = (e) => {
    console.log(e.target.name, e.target.value)
    this.setState( {
      formPizza: {
        ...this.state.formPizza,
        [e.target.name]: e.target.value 
      }
    })
  }

  render() {
    return(
        <div className="form-row">
          <div className="col-5">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Pizza Topping" 
                value={this.state.formPizza.topping}
                onChange={this.handleChange}
                  //Pizza Topping Should Go Here
                />
          </div>
          <div className="col">
            <select value={this.state.formPizza.size} 
                onChange={this.handleChange}
                className="form-control"
                >
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <div className="col">
            <div className="form-check">
              <input 
                className="form-check-input" 
                type="radio" 
                value="Vegetarian" 
                checked={null}
                onChange={this.handleRadio}/>
              <label className="form-check-label">
                Vegetarian
              </label>
            </div>
            <div className="form-check">
              <input 
                className="form-check-input" 
                type="radio" 
                value="Not Vegetarian" 
                checked={null}
                onChange={this.handleRadio}/>
              <label className="form-check-label">
                Not Vegetarian
              </label>
            </div>
          </div>
          <div className="col">
            <button type="submit" className="btn btn-success" onClick={console.log}>Submit</button>
          </div>
        </div>
    )
  }
}

export default PizzaForm