import React, {useState} from 'react';

const Tab = (props) => {
  return (
    <div className="container">
        {/* buttons */}
        <div className="bloc-tabs">
            <button className="tablinks">Tab 1</button>
        </div>
        {/* tab content */}
        <div id="tab" className="tabs">
            <h3>Tab One</h3>
            <hr/>
            <p>Tab One Content</p>
        </div>
    </div>
  )
}

export default Tab