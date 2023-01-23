let btnTheme = document.querySelector('.body');
let checkbox = document.querySelector('.header-btn-theme');

checkbox.onclick(()=>{
    btnTheme.classList.toggle('dark');
    btnTheme.classList.toggle('light');
})