export default function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

// BELOW ARE OBJECT DESTRUCTURING, WILL ALSO PRODUCE SAME RESULT AS ABOVE. TRY UNCOMMENTING IT
// function CoreConcept({image, title, description}){
//   return (
//     <li>
//       <img src={image} />
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </li>
//   )
// }
