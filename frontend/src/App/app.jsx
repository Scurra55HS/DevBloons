import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Header from "../Components/Header/Header";
import Main from '../Components/Main/Main';
import TopicDetail from '../Components/TopicDetail/TopicDetail';
import { PageWrapper } from '../Styles/App';

const App = () => {
  return (
    <Router>
      <PageWrapper>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/topico/:id" element={<TopicDetail />} />
        </Routes>
        <Footer />
      </PageWrapper>
    </Router>
  );
};

export default App;
