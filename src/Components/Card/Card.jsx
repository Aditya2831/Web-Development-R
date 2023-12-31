import React from "react";
import { Icon } from "../Icon/Icon";
import "./Card.css";

export const Card = ({ onPlay, player, index }) => {

    let icon=<Icon/>
    if(player==="X")
    {
        icon=<Icon name={"cross"}/>
    }
    else if(player==="0")
    {
        icon=<Icon name="circle"/>
    }

  return (

    <div className="card" onClick={()=>{onPlay(index)}}>
     {icon}
    </div>
  );

};
