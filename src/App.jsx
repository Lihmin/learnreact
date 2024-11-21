import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import { CORE_CONCEPTS } from './data.js'
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';
import { EXAMPLES } from './data.js'


//hooks must be call inside a react component function and at top level not in a function in function(nested function)
//when click ,execute set function to change the value, useState will execute the App function again 

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton);
  };

//add condition
  let tabContent = <p>Please select a topic</p>;
  if (selectedTopic){
    tabContent = (
      <div id="tab-content">
      <h3>{ EXAMPLES[selectedTopic].title }</h3>
      <p>{ EXAMPLES[selectedTopic].description }</p>
      <pre>
        <code>
        { EXAMPLES[selectedTopic].code }
        </code>
      </pre>
    </div>
    );
  };


  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <ul>
            {/* use map() to loop array , need to add key to identify each item in array*/}
          {CORE_CONCEPTS.map((conceptItem)=>
            (<CoreConcept key={conceptItem.title} {...conceptItem}/>)
          )}
            {/* 
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          {/* <menu><ul>has no different but <ul> primarily contains items for display, while <menu> was intended for interactive items. */}
          {/* isSelected return true or false */}
          <menu>
            <TabButton onSelect={ ()=>handleSelect('components') } isSelected={selectedTopic === 'components'}>Components</TabButton>
            <TabButton onSelect={ ()=>handleSelect('jsx') } isSelected={selectedTopic === 'jsx'}>JSX</TabButton>
            <TabButton onSelect={ ()=>handleSelect('props') } isSelected={selectedTopic === 'props'}>Props</TabButton>
            <TabButton onSelect={ ()=>handleSelect('state') } isSelected={selectedTopic === 'state'}>State</TabButton>
          </menu>
          {/* method 1 put in variable make it clean */}
          
          {tabContent}
          
          {/* method 2 using ? :
          {!selectedTopic ? <p>Please select a topic</p>
          :
          <div id="tab-content">
           <h3>{ EXAMPLES[selectedTopic].title }</h3>
           <p>{ EXAMPLES[selectedTopic].description }</p>
           <pre>
             <code>
            { EXAMPLES[selectedTopic].code }
             </code>
          </pre>
          </div>
          } */}

          {/* method 3 using &&
          {!selectedTopic && <p>Please select a topic</p>}
          {selectedTopic && 
          <div id="tab-content">
           <h3>{ EXAMPLES[selectedTopic].title }</h3>
           <p>{ EXAMPLES[selectedTopic].description }</p>
           <pre>
             <code>
            { EXAMPLES[selectedTopic].code }
             </code>
          </pre>
          </div>
          } */}
        </section>
      </main>
    </div>
  );
}

export default App;
