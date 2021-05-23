const keyNumber = document.querySelector(".key-number");
const keyInfo = document.querySelector(".key-info");

window.onkeydown = (event) => {
  event.preventDefault();
  console.log(event);
  var x = event.key;
  keyNumber.textContent = x.charCodeAt(0);

  keyInfo.innerHTML = `
  <div class="key cards">
  <p>event.key</p>
  <div>${event.key}</div>`;

  keyInfo.innerHTML += `
  <div class="key-code cards">
  <p>event.code</p>
  <div>${event.code}</div>
</div>`;

  keyInfo.innerHTML += `
<div class="key-code cards">
<p>event.keyCode</p>
<div>${event.keyCode}</div>
</div>`;

  keyInfo.innerHTML += `
<div class="key-code cards">
<p>event.which</p>
<div>${event.which}</div>
</div>`;
};
