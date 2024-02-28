const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffffff', '#000000', '#cccccc', '#ff9900'];

const textElement = document.getElementById('text');
const colorGrid = document.getElementById('color-grid');

colors.forEach(color => {
  const colorBox = document.createElement('div');
  colorBox.classList.add('color-box');
  colorBox.style.backgroundColor = color;
  colorBox.addEventListener('click', () => {
    textElement.style.color = color;
  });
  colorGrid.appendChild(colorBox);
});