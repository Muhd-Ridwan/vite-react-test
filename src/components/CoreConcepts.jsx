import CoreConcept from "./CoreConcept.jsx";
// NAME IMPORT FROM data.js
import { CORE_CONCEPTS } from "../data.js";

export default function CoreConcepts() {
  return (
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
  );
}
