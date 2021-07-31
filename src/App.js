import { GlobalStyle } from "./Styled/GlobalStyle";
import Type from "./components/Type";
import Card from "./components/Card";
import {GradientWrapper} from "./Styled/GradientWrapper";
function App() {
  return (   
    <>
      <GlobalStyle/>
      <GradientWrapper />
      <Card>
        <Type/>
      </Card>   
  </>
  );
}

export default App;
