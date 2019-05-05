const electron = require("electron");
const { ipcRenderer } = electron;

let button = document.getElementById("tikla");
let inputValue = document.getElementById("inputValue");
button.addEventListener("click", () => {
    //ipcRenderer.send("key","hakan karabay");
    ipcRenderer.send('inputValue', inputValue.value);
});

let open = document.querySelector("#window");
open.addEventListener("click",() => {
    ipcRenderer.send("new");
});
