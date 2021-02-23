import React from "react";

function Card (props) {
  return <div> 
      <div className="card">
        <div className="top">
          <h2 className = "name" >{props.name}</h2>
          <img
            src={props.url}
            alt="avatar_img" className = "circle-img"
          />
        </div>
        <div className="bottom">
          <p className="info">{props.no}</p>
          <p className="info">{props.mail}</p>
        </div>
      </div>
</div>

}

export default Card;