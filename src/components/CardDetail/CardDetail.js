import React from "react";

const CardDetail = ({
  id,
  uid,
  password,
  first_name,
  last_name,
  username,
  email,
  avatar,
  subscription,
}) => {
  return (
    <div className="col">
      <div className="card" key={id}>
        <img src={avatar} alt={uid} />
        <div className="card-header">{username}</div>
        <div className="card-body">
          <h5 className="card-title">
            {first_name} {last_name}
          </h5>
          <p className="card-text">{email}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">id: {id}</li>
          <li className="list-group-item">pwd: {password}</li>{" "}
        </ul>
        <ul className="list-group list-group-flush">
          {Object.keys(subscription).forEach(function (key) {
            <li className="list-group-item">
              {key}: {subscription[key]}
            </li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default CardDetail;
