import React, { useContext, useEffect, useState, useReducer } from "react";
import { Navigate } from "react-router-dom";

import CardDetail from "../CardDetail";
import Header from "../Header";
import { UserContext } from "../UserContext";

function Home() {
  const storedUser = localStorage.getItem("user");

  const [user, setUser] = useState(storedUser);

  useEffect(() => {
    localStorage.setItem("user", user);
  }, [user]);

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

  const [CardList, setCardList] = useState([{}]);

  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  const [isLoading, setIsLoading] = useState(true);

  const [shouldReload, setShouldReload] = useState(false);

  useEffect(() => {
    let mounted = true;

    fetch("https://random-data-api.com/api/users/random_user?size=100")
      .then((response) => response.json())
      .then((data) => {
        if (mounted) {
          setCardList(data);
          setIsLoading(false);
        }
      });
    return () => (mounted = false);
  }, [shouldReload]);

  const reloadDeck = () => {
    setIsLoading(true);
    setShouldReload(!shouldReload);
  };

  return user === "" ? (
    <Navigate to="/login" />
  ) : (
    <>
      <Header />

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
            CardList.map((item) => {
              return <CardDetail key={item.uid} {...item} />;
            })
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
