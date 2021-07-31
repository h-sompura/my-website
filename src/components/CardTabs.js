import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { TabWrapper } from '../Styled/TabWrapper';
import Links from "./Links";
import About from "./About";
import Work from "./Work";
const CardTabs = () => {
      const [key, setKey] = useState('links');
        return (    
            <TabWrapper>
                <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="links" title="Links">
        <Links />
      </Tab>
      <Tab eventKey="about" title="About">
          <About />
      </Tab>
      <Tab eventKey="work" title="Work">
          <Work />
      </Tab>
      </Tabs>
    </TabWrapper>
        )
}
export default CardTabs;