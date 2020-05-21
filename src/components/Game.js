import React, { Component } from "react";
import one from "../assets/images/one.png"
import two from "../assets/images/two.png"
import three from "../assets/images/three.png"
import four from "../assets/images/four.png"
import five from "../assets/images/five.png"
import six from "../assets/images/six.png"
import seven from "../assets/images/seven.png"
import eight from "../assets/images/eight.png"
import nine from "../assets/images/nine.jpg"
import ten from "../assets/images/ten.jpg"
import eleven from "../assets/images/eleven.jpg"
import tweleve from "../assets/images/tweleve.jpg"

class Game extends Component {
  state = {
    cards: [one, two, three, four, five, six, seven, eight, nine, ten, eleven, tweleve],
    clicked: []
  };


  handleClick = (e)  => {
      let clickd = e.target.src;
      let clicked =  this.state.clicked; 
      // filter the array. compare what user clicked to values inside the array
      let checked = clicked.filter(cl => {
          return cl === clickd;
      })
      // checking if filtered is empty
      if(checked.length === 0) {
          console.log("Nice job")
          clicked.push(clickd);
          let cards = this.state.cards; 
          cards= cards.sort((a,b) => Math.random() - .5)
          let score = this.props.score + 1;
          let topScore = this.props.topScore;
          if(score >= topScore) {
            topScore = score;
          }
          this.props.updateScore(score);
          this.props.updateTopScore(topScore);

          this.setState({
              clicked: clicked,
              cards: cards
          })
          
      } else {
          this.props.resetScore();
          this.setState({
              clicked: []
          })
          console.log("Nope you already did that")
      }

  }
  render() {
    return (
      <div className="container">
        <div className="row">{this.state.cards.map((card, index) => {
            return (<div className="col-3" key={index}>
    
                <img style={{margin: '6px'}} src={card}  style={{width: '100%', height: '100%'}} onClick={this.handleClick} />

                
    
            </div>)
        })}
        </div>
      </div>
    );
  }
}
export default Game;
