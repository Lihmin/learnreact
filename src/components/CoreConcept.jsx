export default function CoreConcept({title,image,description}){
    return (
      <li>
        <img src={image} alt={title}></img>
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
}
  
  //memo 
  //in function App//////////////////////
  // <CoreConcept {...CORE_CONCEPTS[0]}/> //from data.jsx

  //attribute in html in app.jsx
  //data type
  //eg
  //<User
  //  name='max'//string  
  //  age={10}   //integer
  //  obj={{ name: alex }}  //object quote in quote ,not double quote
  //  arr={[ 'a', 'b' ,'c' ]}   //array [] in quote
  //  variabel var ={}
  // />
  
  //to set default value/////////////
  //eg. export default function Button({ caption, type = "submit" }) { 
  // caption has no default value, type has a default value of "submit"
  
  //long code////////////////////
  //export default function CoreConcept( props ) {
    //    <h3>{props.title}</h3>  ...
  //OR
  //export default function CoreConcept({ ...concept }) { 
  //  <h3>{props.title}</h3>
  // Or destructure the concept object: const { title, description, image } = concept;
  //
  
  //all attribute pass as props in an object 
  // <CoreConcept
  //   title={CORE_CONCEPTS[0].title}
  //   description={CORE_CONCEPTS[0].description}  
  //   image={CORE_CONCEPTS[0].image} />
  
  //short code 2 ///////////////props named as concept in {} group attributes as concept
  // export default function CoreConcept({ concept }) {
  //    <h3>{concept.title}</h3>  ...
  // }
  //OR
  //export default function CoreConcept({ concept }) {
  //const { title, description, image } = concept;
  //    <h3>{title}</h3>
  //}
  //<CoreConcept
  //concept={CORE_CONCEPTS[0]} />
  
  //OR//double quote
  //<CoreConcept
  //concept={{
  //   title: 'first',
  //   description : 'In-depth'
  //}} />
  