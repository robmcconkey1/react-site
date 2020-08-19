import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';

function Example() {
  return (
    <Alert dismissible variant="danger">
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>
        Change this and that and try again.
      </p>
    </Alert>
  )
}


  console.log(Street)
  class App extends Component {

  render () {
    return (
      <React.Fragment>
      <HashRouter basename={process.env.PUBLIC_URL}>
      <NavigationBar/>
      <Jumbotron/>
<Example/>
<Slider/>
        <Router>
          <Switch>
            <Route path="/home.js" component ={Home} />
            <Route path="/street"> <Street/> </Route>
            <Route path="/travel" component ={Travel} />
            </Switch>

        </Router>
        </HashRouter>
      </React.Fragment>
    )
  }
}
