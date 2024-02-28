document.addEventListener('DOMContentLoaded', function() {
    var colorGrid = document.getElementById('colorGrid');
    var selectedColor = document.getElementById('selectedColor');

    // Generar la cuadrícula de colores RGB
    for (var r = 0; r <= 255; r += 16) {
        for (var g = 0; g <= 255; g += 16) {
            for (var b = 0; b <= 255; b += 16) {
                var colorDiv = document.createElement('div');
                colorDiv.className = 'color';
                colorDiv.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
                
                // Agregar evento de clic para mostrar el color seleccionado
                colorDiv.addEventListener('click', function() {
                    var color = this.style.backgroundColor;
                    selectedColor.textContent = 'Color seleccionado: ' + color;
                });

                colorGrid.appendChild(colorDiv);
            }
        }
    }
});