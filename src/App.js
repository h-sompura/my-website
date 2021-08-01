import { GlobalStyle } from "./Styled/GlobalStyle";
import Card from "./components/Card";
import {GradientWrapper} from "./Styled/GradientWrapper";
import {Footer} from "./Styled/Footer"
function App() {
  return (   
    <>
      <GlobalStyle/>
      <GradientWrapper />
      <Card />
      <Footer>© 2021 Harshitha Sompura. All Rights Reserved. </Footer>   
  </>
  );
}

export default App;
