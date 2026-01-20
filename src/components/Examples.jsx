/*
useState = react hook
 any function that start with use are react hook
 React hook is actually regular function but must only be called inside a react component function
 or inside other react hook

 This useState was separated by component that only needed the useState.
 Before it was in App.jsx, but it will causes all the things inside the App.jsx will be rendered again which is not the good practice
 Hence created new files Examples.jsx and separate the code component.
 Thus it wont render everything again.
*/

import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {
  // Must called the react hook on TOP LEVEL of component function & can't be nested inside other function
  const [selectedTopic, setSelectedTopic] = useState();
  /* 
    1st Element in array (GETTERS) = Curernt data snapshot of component execution cycle.
    2nd Element in array (SETTERS) = Will always be a function provide 
                                    by react that can be executed to update the state (Stored Value)
    */

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  // *** 3rd Alternative to show tabcontent ***

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section title="Example" id="examples">
      <Tabs
        buttonsContainer="menu"
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            {/* Alternative Below */}
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={function () {
                handleSelect("jsx");
              }}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
      {/* 
        Tabs are being wrap with their own components so the tab can be used many times with different value
        
        Because of it will be repeated for list and button, then can use new
            components
            <li>
              <button></button>
            </li> */}
      {/* !selectedTopic == If it is not truthy */}
      {/* selectedTopic == It is truthy */}

      {/* *** 1st way to do and show the tab content *** */}
      {/* Rendering Content Conditionally */}
      {/* {!selectedTopic ? (
            <p>Please select a topic.</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )} */}

      {/* *** 2nd Alternative steps to do *** */}
      {/* {!selectedTopic && <p>Please select a topic</p>}
          {selectedTopic && <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>} */}
    </Section>
  );
}
