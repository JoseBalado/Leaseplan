import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Leaseplan</h1>
        <p>Welcome to your new single-page application, built with:</p>
        <ul>
          <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
          <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
          <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
        </ul>
        <p>Tested with:</p>
        <ul>
          <li>Linux Mint 20</li>
          <li>.NET 5.0.101</li>
          <li>Google Chrome Version 87.0.4280.141 (Official Build) (64-bit)</li>
        </ul>
        <p>To run the Leaseplan application:</p>
        <p>cd into the folder "Leaseplan/" and execute the command <code>dotnet run</code></p>
        <ul>
          <li><code>$ cd Leaseplan/</code></li>
          <li><code>$ dotnet run</code></li>
          <li>Open this url in the browser: <code>https://localhost:5001/</code></li>
        </ul>
      </div>
    );
  }
}
