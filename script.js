const text =
"root@mr-crazy-hacker:~# Access Granted...\n" +
"Loading Vikram's Cyber Security Modules...\n" +
"Welcome to Mr Crazy Hacker Website 🚀";

let i = 0;
const terminal = document.getElementById("terminalText");

setInterval(() => {
  if (i < text.length) {
    terminal.innerHTML += text.charAt(i);
    i++;
  }
}, 40);

document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");
};
