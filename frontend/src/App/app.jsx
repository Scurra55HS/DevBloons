import React from 'react'
import Footer from '../Components/Footer/Footer';
import Header from "../Components/Header/Header";
import Main from '../Components/Main/Main';
import { PageWrapper } from '../Styles/App';

const App = () => {
  return (
    <PageWrapper>
      <Header />
      <Main />
      <Footer />
    </PageWrapper>
  )
}

export default App;