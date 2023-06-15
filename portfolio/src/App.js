//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Footer from './components/Footer';
import ContactForm from './components/pages/ContactForm';
import PortfolioContainer from './components/PortfolioContainer';
function App() {
  return (
    <div className="main-page">
      <PortfolioContainer />
     {/* <Header />
     <Navigation />
     <Project />
     <Footer />
     <ContactForm /> */}
    </div>
  );
}

export default App;
