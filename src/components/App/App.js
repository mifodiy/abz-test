import React from 'react';
import Header from '../Header/HeaderContainer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Banner from "../Banner/Banner";
import Users from "../Users/UsersContainer";

export default class App extends React.Component {

  componentDidMount() {
    AOS.init({offset: 80});
  }

  render() {
    return (
        <>
          <Header/>
          <main>
            <Banner/>
            <Users/>
          </main>
        </>
    );
  }
}
