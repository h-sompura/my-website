import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { TabWrapper } from '../Styled/TabWrapper';
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
        <p>This is home</p>
      </Tab>
      <Tab eventKey="about" title="About">
      <p>This is about</p>
      </Tab>
      <Tab eventKey="work" title="Work">
      <p>This is contact</p>
      </Tab>
      </Tabs>
    </TabWrapper>
        )
}
export default CardTabs;