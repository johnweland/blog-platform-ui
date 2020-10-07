const toggle = document.getElementById('toggle');
const target = document.getElementById('drawer');

const toggler = () => {
    if (target === null) return;
    target.classList.toggle('expanded');
}

toggle.onclick = toggler;