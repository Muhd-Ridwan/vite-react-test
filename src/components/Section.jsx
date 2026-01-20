/*
can use destructuring id but it is not convenient because if later want to add more style which is class
then need to set manually, where it is not a best practice.
Hence we using forwarded props or poxy props.

"..." is built-in in js called (Rest Property) telling to collect all other props.
can also be named other than props. Examples :- ...anything / ...style or etc.

In parameter that have "..." is to group it
but when called in the component is called spread some data onto some other elements
*/

export default function Section({ title, children, ...props }) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
