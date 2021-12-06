import React, { useEffect, useState } from "react";

import Header from '../../components/Header';
import Login from "../../components/Login";
import Dashboard from '../../components/Dashboard';

const Home = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem('@app:loggedUser'));
    if (auth) {
      setAuth(auth.logged);
    }
  }, []);

  return (
    <>
      <Header auth={auth} />
      {auth ? (<Dashboard />) : (<Login />)}
    </>
  );
}

export default Home;