/*
use buttonContainer so allows dev to use any element to be use as a wrapper for the buttons
Can be use in a case where this components being called multiple time at different places and use different elements
*/

export default function Tabs({ children, buttons, buttonsContainer }) {
  /*
    adding a variable here to store the tagging that want to be used that is passed through buttonsContainer.
    Because it can't be called directly inside the tagging that wraps the buttons.
    But must start with Upper Case Character
    */
  const ButtonsContainer = buttonsContainer;

  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}

/*
export default function Tabs({ children, buttons, ButtonsContainer = "menu" }) {


  // const ButtonsContainer = buttonsContainer;

  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
*/

/*
Can also set a default value of the props components
Means ButtonsContainer = "menu" will be the default for component identifier <> </>
So can use the Tabs container as usual without setting it, because it will use the default value
*/
