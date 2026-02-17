/** @format */
/* Handles */
const menuButton = document.querySelector('[aria-controls="menu-list"]');

/* Events */

menuButton.addEventListener("click", handleClick);

/* Event helper functions */

function handleClick({ currentTarget }) {
	const expanded =
		currentTarget.getAttribute("aria-expanded") === "true" || false;

	currentTarget.setAttribute("aria-expanded", !expanded);
	/* 
      Note: i noticed that changing attributes is slower 
      than changing classes. 
      
      IMPORTANT: if a button click function does both 
        (changing classes and attributes) 
        and the button is clicked repeatidly 
        and quickly, this can lead to 
        synchroninzation issues.

      Changing attributes and having the css selectors
      on the attributes instead of separate classes
      is better for accessibility, but will have a negtive
      performance speed when clicking buttons.
    */
}
