import { GlobalStyle } from "./Styled/GlobalStyle";
import Type from "./components/Type";
import Card from "./components/Card";
import {GradientWrapper} from "./Styled/GradientWrapper";
import {Footer} from "./Styled/Footer"
function App() {
  return (   
    <>
      <GlobalStyle/>
      <GradientWrapper />
      <Card>
        <Type/>
      </Card>
      <Footer>c 2021 Harshitha Sompura. All Rights Reserved. </Footer>   
  </>
  );
}

export default App;
