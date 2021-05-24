import { GlobalStyle } from "./Styled/GlobalStyle";
import { Container } from "./Styled/Container";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Work from "./pages/Work";
import About from "./pages/About";

function App() {
  return (   
      <Router>
      <GlobalStyle/>
      <Navbar/>
      <Container>
      <Route className="Link" path="/" exact component={Work} />
        <Route path="/about" component={About} />
      </Container>
      <Footer/>
      </Router>
  );
}

export default App;
