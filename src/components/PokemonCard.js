import React from "react";
import { Card } from "semantic-ui-react";
import {useState} from "react"

function PokemonCard({name, hp, sprites, toggleCard}) {

  return (
    <Card onClick={toggleCard} className="front">
      <div>
        <div className="image">
          <img alt="oh no!" src={sprites.front}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
