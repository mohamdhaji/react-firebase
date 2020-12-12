import React, { Component } from "react";
import { firebaseMatches } from "../../../firebase";
import { firebaseLooper, reverseArray } from "../../ui/misc";
import MatchesBlock from "../../ui/matches_block";
import Slide from "react-reveal/Slide";

export default class Blocks extends Component {
  state = {
    matches: [],
  };

  componentDidMount() {
    firebaseMatches
      .limitToLast(6)
      .once("value")
      .then((snapshot) => {
        //snapshot : object of objects
        // we want to turn it into array then reverse the array .
        const matches = firebaseLooper(snapshot);

        this.setState({
          matches: reverseArray(matches),
        });
      });
  }

  showMatches = (matches) =>
    matches
      ? matches.map((match) => (
          <Slide bottom key={match.id}>
            <div className="item">
              <div className="wrapper">
                <MatchesBlock match={match} />
              </div>
            </div>
          </Slide>
        ))
      : null;
  render() {
    return (
      <div className="home_matches">{this.showMatches(this.state.matches)}</div>
    );
  }
}
