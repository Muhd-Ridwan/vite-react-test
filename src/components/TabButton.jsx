// Set the isSelected == true if it is selected & false if its not selected
export default function TabButton({ children, onSelect, isSelected }) {
  // DEFAULT PROPS THAT BUILT-IN IS children
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
