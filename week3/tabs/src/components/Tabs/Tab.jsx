import React, {useState} from 'react';
import '../Tabs/Tab.css';

const Tab = (props) => {
  const [toggleState, setToggleState] = useState(1);

  const handleToggle = (idx) => {
    setToggleState(idx)
  }
    
  return (
    <div className="container">
       
        <div className="bloc-tabs">
            <button className={toggleState === 1 ? 'tabs active': 'tabs'} onClick={() => handleToggle(1)}>Tab 1</button>
            <button className={toggleState === 2 ? 'tabs active': 'tabs'} onClick={() => handleToggle(2)}>Tab 2</button>
        </div>
        
        <div className="content-tabs">
        <div id="tab" className={toggleState === 1 ? 'content active-content' : 'content'}>
            <h3>Content One</h3>
            <hr/>
            <p> 
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, nihil.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repellendus corrupti corporis dolor culpa commodi!
            </p>
        </div>

        <div id="tab" className={toggleState === 2 ? 'content active-content' : 'content'}>
            <h3>Content Two</h3>
            <hr/>
            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, content 2.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repellendus corrupti corporis dolor culpa commodi!
            </p>
        </div>
        </div>
        
    </div>
  )
}

export default Tab