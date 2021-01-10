import React, { Component } from 'react';

export class Counter extends Component {
  static displayName = Counter.name;

  constructor(props) {
    super(props);
    this.state = { currency1: "GBP", currency2: "EUR", value: 0 };
    this.handleChangeCurrency1 = this.handleChangeCurrency1.bind(this);
    this.handleChangeCurrency2 = this.handleChangeCurrency2.bind(this);
    this.handleChangeValue = this.handleChangeValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeCurrency1(event) {
    console.log(event.target.value)
    this.setState({currency1: event.target.value});
  }

  handleChangeCurrency2(event) {
    console.log(event.target.value)
    this.setState({currency2: event.target.value});
  }

  handleChangeValue(event) {
    console.log(event.target.value)
    this.setState({value: event.target.value});
  }

  async handleSubmit(event) {
    event.preventDefault();
    const exchangeRate = await this.populateWeatherData(this.state.currency1, this.state.currency2);
    console.log("Exchange Rate: ", exchangeRate);
    this.setState({result: this.state.value * exchangeRate.value, exchangeRate});
    console.log("State: ", this.state);
  }

  async populateWeatherData(currencyCode1, currencyCode2) {
    console.log("Currency Code:", currencyCode1, currencyCode2);
    const response = await fetch(`weatherforecast/${currencyCode1}/${currencyCode2}`);
    return await response.json();
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
          <select value={this.state.currency2} onChange={this.handleChangeCurrency2}>
            <option value="USD">United States Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound Sterling</option>
            <option value="CHF">Swiss Franc</option>
          </select>
        </label>
        <hr />
        <label>
          Amount:
          <input type="text" value={this.state.value} onChange={this.handleChangeValue} />
        </label>
        <hr />
        <label>
          Result:
          <input type="text" value={this.state.result} />
        </label>

        <div>
          <input className="btn btn-primary" type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}
