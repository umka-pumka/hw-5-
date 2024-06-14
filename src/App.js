import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigation } from 'react-router-dom';
import UserList from './Users';
import UserProfile from './UserProfile';
import Loader from './Loader';
import { LoadingProvider, useLoading } from './Load';

const App = () => {
  return (
    <LoadingProvider>
      <Router>
        <LoadingWrapper>
          <div className="App">
            <header className="App-header">
              <Routes>
                <Route path="/" element={<UserList />} />
                <Route path="/user/:userId" element={<UserProfile />} />
              </Routes>
            </header>
          </div>
        </LoadingWrapper>
      </Router>
    </LoadingProvider>
  );
};

const LoadingWrapper = ({ children }) => {
  const { loading } = useLoading();

  return (
    <>
      <Loader loading={loading} />
      {children}
    </>
  );
};

export default App;
