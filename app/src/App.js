import React, { Component } from "react";
import friends from "./friends.json";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Footer from "./components/Footer"
import "./App.css";

class App extends Component {
  state = {
    friends: friends,
    score: 0,
    clicked: 100,
    score: 0
  };

  /**
   * Randomize array element order in-place.
   * Using Durstenfeld shuffle algorithm.
   */
  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  handleShuffle() {
    console.log(this.state.clicked);
    console.log("score" + this.state.score + "");
    this.setState({
      friend: this.shuffleArray(this.state.friends)
    });
  }

  handleClick = id => {
    if (id === this.state.clicked) {
      this.setState({
        score: 0,
        clicked: 100
      });
    } else {
      this.setState({ clicked: id });

      this.setState({
        score: this.state.score + 1
      });
      this.handleShuffle();
    }
  };

  render() {
    return (
      <div>
        <Header score={this.state.score}>Clicky Game!</Header>
        <Wrapper className="container-fluid">
          <div className="row">
            {this.state.friends.map(friend => (
              <div className="col-md-3 col-sm-4" key={friend.id}>
                <FriendCard
                  id={friend.id}
                  image={friend.image}
                  name={friend.name}
                  handleClick={this.handleClick}
                />
              </div>
            ))}
          </div>
          
        </Wrapper>
        <Footer className="row">Click on an image to earn points, but don't click on any more than once!</Footer>
      </div>
    );
  }
}

export default App;
