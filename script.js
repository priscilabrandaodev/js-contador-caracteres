
function contarCaracteres() {
    document.getElementById('texto').addEventListener('input', function () {
        var texto = this.value;
        var contadorCaracteres = document.getElementById('resultado');
        contadorCaracteres.textContent = `${texto.length} caracteres`;
    });
}