export default function TabButton({ children, onSelect }) {
  // DEFAULT PROPS THAT BUILT-IN IS children
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
