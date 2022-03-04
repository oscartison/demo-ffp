import React, { useContext, useEffect, useState, useReducer } from "react";

import CardDetail from "../CardDetail";
import { UserContext } from "../UserContext";

function Home() {
  const { user } = useContext(UserContext);

  const counterReducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {
          ...state,
          count: state.count + 1,
        };
      case "RESET":
        return {
          ...state,
          count: 0,
        };
      default:
        return state;
    }
  };

  const [CardList, setCardList] = useState([]);

  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  const [isLoading, setIsLoading] = useState(true);

  const [shouldReload, setShouldReload] = useState(false);

  useEffect(() => {
    fetch("https://random-data-api.com/api/users/random_user?size=100")
      .then((response) => response.json())
      .then((data) => {
        setCardList(data);
        setIsLoading(false);
      });
  }, [shouldReload]);

  const reloadDeck = () => {
    setIsLoading(true);
    setShouldReload(!shouldReload);
  };

  return (
    <>
      <div className="container">
        <h1 className="justify-content-center">
          {user === "" ? "Please Log In" : "Hello " + user}
        </h1>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          <button
            onClick={reloadDeck}
            className="btn btn-primary btn-lg btn-block"
          >
            Reload
          </button>
          <button
            onClick={() => dispatch({ type: "INCREMENT", state })}
            className="btn btn-secondary btn-lg btn-block"
          >
            {state.count}
          </button>
          <button
            onClick={() => dispatch({ type: "RESET", state })}
            className="btn btn-danger btn-lg btn-block"
          >
            Reset
          </button>
          {isLoading ? (
            <div> is loading....</div>
          ) : (
            CardList.map(
              ({
                id,
                uid,
                password,
                favorite,
                first_name,
                last_name,
                username,
                email,
                avatar,
                subscription,
              }) => {
                return (
                  <CardDetail
                    id={id}
                    uid={uid}
                    password={password}
                    favorite={favorite}
                    first_name={first_name}
                    last_name={last_name}
                    username={username}
                    email={email}
                    avatar={avatar}
                    subscription={subscription}
                    key={uid}
                  />
                );
              }
            )
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
