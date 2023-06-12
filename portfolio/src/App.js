//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Footer from './components/Footer';
import ContactForm from './components/pages/ContactForm';
function App() {
  return (
    <div className="Portfolio">
     <Header />
     <Navigation />
     <Project />
     <Footer />
     <ContactForm />
    </div>
  );
}

export default App;
