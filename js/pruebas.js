document.addEventListener('DOMContentLoaded', function() {
    var paleta = document.getElementById('colorGrid'); // Selecciona el contenedor de la paleta de colores
    var texto = document.getElementById('texto'); // Selecciona el contenedor de texto

    // Crear cuadrícula de colores RGB con incrementos de 16
    for (var r = 0; r <= 255; r += 16) {
        for (var g = 0; g <= 255; g += 16) {
            for (var b = 0; b <= 255; b += 16) {
                // Crear elemento div para cada color
                var colorDiv = document.createElement('div');
                colorDiv.className = 'color';
                colorDiv.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';

                // Agregar evento click para cambiar el color del texto
                colorDiv.addEventListener('click', function() {
                    var color = this.style.backgroundColor;
                    texto.style.color = color; // Cambia el color del texto al color seleccionado
                });

                // Agregar elemento a la paleta
                paleta.appendChild(colorDiv); // Agrega el color a la paleta de colores
            }
        }
    }
});