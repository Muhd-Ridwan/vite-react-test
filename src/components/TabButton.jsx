// Set the isSelected == true if it is selected & false if its not selected
export default function TabButton({ children, isSelected, ...props }) {
  // DEFAULT PROPS THAT BUILT-IN IS children
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {/*onClick={onSelect}>*/}
        {children}
      </button>
    </li>
  );
}
