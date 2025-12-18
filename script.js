// Terminal typing effect
const text = "root@mr-crazy-hacker:~# Access Granted...\nLoading Ethical Hacking Modules...";
let i = 0;
const terminal = document.getElementById("terminalText");

setInterval(() => {
    if (i < text.length) {
        terminal.innerHTML += text.charAt(i);
        i++;
    }
}, 50);

// Theme toggle
const toggle = document.getElementById("themeToggle");
toggle.onclick = () => {
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");
};
