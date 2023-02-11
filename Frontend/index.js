// Theme 
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
var root = document.querySelector(':root')
const colorPalette = document.querySelectorAll('.choose-color span')

// Theme display Customization
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

theme.addEventListener('click', openThemeModal);

// Changing primary color 

