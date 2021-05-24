const keyNumber = document.querySelector(".key-number");
const keyInfo = document.querySelector(".key-info");

// Array consisting of keys which doesn't have any ASCII Code associated with them
const noAsciiValues = [
  "F1",
  "F2",
  "F3",
  "F4",
  "F5",
  "F6",
  "F7",
  "F8",
  "F9",
  "F10",
  "F11",
  "F12",
  "Enter",
  "Control",
  "Alt",
  "Home",
  "PageUp",
  "PageDown",
  "End",
  "NumLock",
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "Backspace",
  "Tab",
  "CapsLock",
  "Shift",
  "ContextMenu",
  "Delete",
  "Clear",
  "Escape",
  "Insert",
  "ScrollLock",
];

// function to check if ASCII value is present
function checkAscii(key) {
  var flag = false;
  noAsciiValues.forEach(function (element) {
    // console.log(key);
    if (element === key) flag = true;
  });
  if (flag == false) return key.charCodeAt(0);
  else return `---`;
}

window.onkeydown = (event) => {
  event.preventDefault();
  // console.log(event);

  // Displays ASCII Code of the key pressed
  keyNumber.classList.add("cards-1");
  keyNumber.innerHTML = `
  <p>ASCII Code (Dec)</p>
  <div>${(keyNumber.textContent = checkAscii(event.key))}</div>`;

  // Displays 'event.key'
  keyInfo.innerHTML = `
  <div class="key cards">
  <p>event.key</p>
  <div>${event.key}</div>`;

  // Displays 'event.code'
  keyInfo.innerHTML += `
  <div class="key-code cards">
  <p>event.code</p>
  <div>${event.code}</div>
</div>`;

  // Displays 'event.keyCode'
  keyInfo.innerHTML += `
<div class="key-keycode cards">
<p>event.keyCode</p>
<div>${event.keyCode}</div>
</div>`;

  // Displays 'event.which'
  keyInfo.innerHTML += `
<div class="key-which cards">
<p>event.which</p>
<div>${event.which}</div>
</div>`;
};
