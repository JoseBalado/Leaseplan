import React, { Component } from 'react';

export class Counter extends Component {
  static displayName = Counter.name;

  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
    this.incrementCounter = this.incrementCounter.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeCurrency1 = this.handleChangeCurrency1.bind(this);
    this.handleChangeValue1 = this.handleChangeValue1.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event)
    console.log(event.target.value)
  }

  handleChangeCurrency1(event) {
    console.log(event.target.value)
  }

  handleChangeValue1(event) {
    console.log(event.target.value)
    this.setState({value1: event.target.value});
  }

  handleSubmit(event) {
    var exchangeRate = 0.5;
    alert('Your favorite flavor is: ' + (this.state.value1 * exchangeRate));
    this.setState({value2: event.target.value});
    event.preventDefault();
  }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          From currency :
          <select value={this.state.currency1} onChange={this.handleChangeCurrency1}>
            <option value="USD">United States Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound Sterling</option>
            <option value="CHF">Swiss Franc</option>
          </select>
        </label>
        <hr />
        <label>
          To currency:
          <select value={this.state.currency2} onChange={this.handleChange}>
            <option value="USD">United States Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound Sterling</option>
            <option value="CHF">Swiss Franc</option>
          </select>
        </label>
        <hr />
        <label>
          Amount:
          <input type="text" value={this.state.value1} onChange={this.handleChangeValue1} />
        </label>
        <hr />
        <label>
          Result:
          <input type="text" value={this.state.value2} />
        </label>

        <div>
          <input className="btn btn-primary" type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}
