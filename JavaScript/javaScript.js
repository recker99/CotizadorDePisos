document.getElementById("cotizarBtn").addEventListener("click", function(event) {
    event.preventDefault();
    operaciones('multiplicar');
});

function operaciones(op) {
    var nombre = document.getElementById("inputName").value;
    var apellido = document.getElementById("inputLastName").value;
    var direccion = document.getElementById("inputAddress").value;
    var email = document.getElementById("inputEmail").value;
    var numOne = document.getElementById("num1").value;
    var numTwo = document.getElementById("num2").value;

    if (nombre == "" || apellido == "" || direccion == "" || email == "" || numOne == "" || numTwo == "") {
        alert("Existe un campo vacío, favor llenarlo antes de cotizar");
    } else {
        var ops = {
            multiplicar: function(n1, n2) {
                return (parseInt(n1) * parseInt(n2));
            },
        };
        
        var num1 = document.getElementById("num1").value;
        var num2 = document.getElementById("num2").value;
        
        if (isNaN(parseFloat(num1))) {
            document.getElementById('resultado').innerHTML = "<span style='color: red;'>Por favor, escriba un número en el campo Ancho</span>";
            document.getElementById("num1").focus();
        } else if (isNaN(parseFloat(num2))) {
            document.getElementById('resultado').innerHTML = "<span style='color: red;'>Por favor, escriba un número en el campo Largo</span>";
            document.getElementById("num2").focus();
        } else {
            switch (op) {
                case 'multiplicar':
                    var resultado = ops.multiplicar(num1, num2);
                    var precio = ops.multiplicar(900, resultado);
                    
                    var resultadoConFormato = resultado.toLocaleString('es-ES');
                    var precioConFormato = precio.toLocaleString('es-ES');
                    
                    document.getElementById("totalmet").value = resultadoConFormato;
                    document.getElementById("totalres").value = precioConFormato;
                    
                    // Limpiar los campos del formulario después de mostrar los resultados
                    limpiarFormulario();
                    break;
            }
        }
    }
}

function limpiarFormulario() {
    document.getElementById("inputName").value = "";
    document.getElementById("inputLastName").value = "";
    document.getElementById("inputAddress").value = "";
    document.getElementById("inputEmail").value = "";
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}
