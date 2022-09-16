import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Game from './components/Game';
import NotLoggedInBanner from './components/NotLoggedInBanner';
import { getUserInfo } from './api/ego-block';
import { User } from './models/User';

function App() {
  const token = getTokenFromQueryParam();
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    if (token) {
      getUserInfo(token).then((user) => {
        setUser(user);
      })
    }
  }, [token])

  const renderContent = () => {
    if (user) {
      return <Game user={user} />
    }

    if (token) {
      return <p>Loading ...</p>
    }

    return <NotLoggedInBanner />
  }

  return (
    <div>
      <Header />
      <div className='container'>
        {renderContent()}
      </div>
    </div>
  );
}


const getTokenFromQueryParam = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('access_token');
}

export default App;
