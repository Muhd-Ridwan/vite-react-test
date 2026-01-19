/*
useState = react hook
 any function that start with use are react hook
 React hook is actually regular function but must only be called inside a react component function
 or inside other react hook
*/

import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
// NAME IMPORT FROM data.js
import { CORE_CONCEPTS } from "./data";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from "./data.js";

function App() {
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

  console.log("APP COMPONENT RENDERING");

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
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            {/* Output dynamically an array of data Transform arrays in JS with help
            of map method It will dynamically generating the list.
            By using map, it will automatically loop every item in the array, so no need to declare 
            one by one the index. Hence, if 1 item is missing, so it won't show any broken UI.
            conceptExplain = is the variable that can be called to iterate through all the item,
            So that's why ...conceptExplain instead of CORE_CONCEPTS[0], means accessing manually the 
            index item.
            Need to add the "key" because it will tell react which one is being rendered.
            If not having a key, react only see a bunch of <CoreConcept />
            why choose .title ? Because in the data, title is unique (Different from each other item)
            */}
            {CORE_CONCEPTS.map((conceptExplain) => (
              <CoreConcept key={conceptExplain.title} {...conceptExplain} />
            ))}
            {/* Below way have cons. If data change, then it will show the UI is broken
                because we declare the index item manually, so if we commented or deleted 
                one of the item, then it will show broken UI (image not showing)
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
             BELOW ARE THE ALTERNATIVE WAY TO IMPORT PROPS IF THE NAMES ARE ALL THE SAME 
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* Because of it will be repeated for list and button, then can use new
            components
            <li>
              <button></button>
            </li> */}
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            {/* Alternative Below */}
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={function () {
                handleSelect("jsx");
              }}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>
          {tabContent}
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
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
