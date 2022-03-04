import React from "react";

const CardDetail = (props) => {
  return (
    <div className="col" key={props.uid}>
      <div className="card">
        <img src={props.avatar} alt={props.uid} />
        <div className="card-header">{props.username}</div>
        <div className="card-body">
          <h5 className="card-title">
            {props.first_name} {props.last_name}
          </h5>
          <p className="card-text">{props.email}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">id: {props.id}</li>
          <li className="list-group-item">pwd: {props.password}</li>{" "}
        </ul>
        <ul className="list-group list-group-flush">
          {Object.keys(props.subscription).forEach(function (key) {
            <li className="list-group-item">
              {key}: {props.subscription[key]}
            </li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default CardDetail;
