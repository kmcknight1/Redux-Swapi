import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";

import { getChars } from "../actions";
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getChars();
    // call our action
  }

  render() {
    if (this.props.isLoading) {
      // return something here to indicate that you are fetching data
      <h2>Loading Star Wars Characters...</h2>;
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => {
  console.log(state);
  return {
    characters: state.characters,
    error: state.error,
    isLoading: state.isLoading
  };
};

export default connect(
  mapStateToProps,
  { getChars }
)(CharacterListView);
