const keyNumber = document.querySelector(".key-number");
const keyInfo = document.querySelector(".key-info");

window.onkeypress = (event) => {
  keyNumber.textContent = event.keyCode;
  keyInfo.innerHTML = `
  <div class="key cards">
  <p>event.key</p>
  <div>${event.key}</div>`;

  keyInfo.innerHTML += `
  <div class="key-code cards">
  <p>event.code</p>
  <div>${event.code}</div>
</div>`;
};
