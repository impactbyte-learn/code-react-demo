import React from "react";

function Photo({ match }) {
  return (
    <div>
      <img
        src={require(`../images/${match.params.person}.jpg`)}
        alt="Smiley face"
        height="42"
        width="42"
      />
    </div>
  );
}

export default Photo;
