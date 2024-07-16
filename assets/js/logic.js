// * Brought to you by Zesty-Z!

/*
    NEXT INPUT FUNCTION
*/

document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
      const inputs = document.querySelectorAll("input");
      const currentInput = document.activeElement;
      const currentIndex = Array.from(inputs).indexOf(currentInput);
      const nextIndex = (currentIndex + 1) % inputs.length;
      const nextInput = inputs[nextIndex];
      nextInput.focus();
  }
});