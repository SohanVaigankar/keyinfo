const keyNumber = document.querySelector(".key-number");
const keyInfo = document.querySelector(".key-info");

// function to check if ASCII value is present
function checkAscii(key) {
  if (String(key).length === 1) return key.charCodeAt(0);
  else return `---`;
}

window.onkeydown = (event) => {
  event.preventDefault();

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
