import React from 'react';
import './App.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Question from './components/question/Question';
import About from './components/about/About';
import QandA from './components/q-and-a/QandA';
import ErrorPage from './components/error/ErrorPage'

class App extends React.Component {
  state = { answerStatus: 
    {1 : null, 2 : null, 3 : null, 4 : null, 5 : null, 
    6 : null, 7 : null, 8 : null, 9 : null, 10 : null, 
    11 : null, 12 : null, 13 : null, 14 : null, 15 : null,
    16 : null, 17 : null, 18 : null, 19 : null, 20 : null, 
    21 : null, 22 : null, 23 : null, 24 : null, 25 : null,}
  }

  /**
   * @param {int} id - integer for accessing the correct day of answerStatus state
   * @param {boolean} value - boolean output from 
   * @function updatedAnswerStatus - takes the id and boolean value and updates state
   */

  updatedAnswerStatus = async (id, value) => {
    await this.setState(prevState => {
      let answerStatus = Object.assign({}, prevState.answerStatus);
      answerStatus[id] = value;
      console.log(this.state.answerStatus)
      return { answerStatus }
    })
    this.handleAnswerSubmit();
  }

  /**
   * @function handleAnswerSubmit - takes updated state from answer input and stores this state in localStorage 
   */

  handleAnswerSubmit = () => {
    localStorage.setItem('answerStatus', JSON.stringify(this.state.answerStatus))
  }
  
  componentDidMount (){
    const answerStatus = JSON.parse(localStorage.getItem('answerStatus'));
    if(answerStatus) {
      this.setState({
        answerStatus: answerStatus
      })
    }
  }
  
  render(){
    return(
      <div>
        <Router>
          <Navbar />
            <Switch>
              <Route path="/" exact render={() => <Home answerStatus={this.state.answerStatus} />} />
              <Route path="/question/:id" render={() => 
                <Question 
                  answerStatus={this.state.answerStatus} 
                  updatedAnswerStatus={this.updatedAnswerStatus}
                  handleAnswerSubmit={this.handleAnswerSubmit} 
                />} />
              <Route path="/about" component={About} />
              <Route path="/qanda" component={QandA} />
              <Route path="*" component={ErrorPage} />
            </Switch>
          <Footer />
        </Router>
      </div>
    )
  };
};

export default App;
