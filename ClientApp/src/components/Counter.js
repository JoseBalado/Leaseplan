import React, { Component } from 'react';

export class Counter extends Component {
  static displayName = Counter.name;

  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
    this.incrementCounter = this.incrementCounter.bind(this);
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
          Pick currency 1:
          <select value={this.state.currency1} onChange={this.handleChange}>
            <option value="USD">United States Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound Sterling</option>
            <option value="CHF">Swiss Franc</option>
          </select>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Pick currency 2:
          <select value={this.state.currency2} onChange={this.handleChange}>
            <option value="USD">United States Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound Sterling</option>
            <option value="CHF">Swiss Franc</option>
          </select>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>

        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}
