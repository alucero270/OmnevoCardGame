import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        {/*<p>Welcome to your new single-page application, built with:</p>*/}
        {/*<ul>*/}
        {/*  <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>*/}
        {/*  <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>*/}
        {/*  <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>*/}
        {/*</ul>*/}
        {/*<p>To help you get started, we have also set up:</p>*/}
        {/*<ul>*/}
        {/*  <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>*/}
        {/*  <li><strong>Development server integration</strong>. In development mode, the development server from <code>create-react-app</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>*/}
        {/*  <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.</li>*/}
        {/*</ul>*/}
        {/*<p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>*/}
        <div class="flex-shrink-0">
          <h1>Omnevo</h1>
          {/*main body*/}
          <div class="container-fluid h-100 minHeight gy-1">
            <div class="row h-100 gy-2 row-cols-1 row-cols-md-2">
              <div class="col col-md-7">
                <div class="bg-secondary text-light h-100">
                  <h3>Details</h3>
                  <h6>realName</h6>
                  <h6>playerName</h6>
                  <h6>asset</h6>
                </div>
              </div>
              <div class="col col-md-5">
                <div class="bg-secondary text-light h-100">
                  <h3>Controls</h3>
                  <btn>Sort Asc</btn>
                  <btn>Sort Dsc</btn>
                  <btn>Submit</btn>
                </div>
              </div>

            </div>
            <div class="row h-100 gy-2 row-cols-1 row-cols-md-2">
              <div class="col col-md-4">
                <div class="bg-dark text-light h-100">
                  <h4>PlayerCard</h4>
                  <h6>realName</h6>
                  <h6>playerName</h6>
                  <h6>asset</h6>
                </div>
              </div>
              <div class="col col-md-4">
                <div class="bg-secondary text-light h-100">Col Three</div>
              </div>
              <div class="col col-md-4 order-last">
                <div class="bg-dark text-light h-100">Col Four</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
