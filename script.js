function calcularPrecioConDescuento(cantidad, categoria) {
    var totalAPagar = 0;

    if (categoria == "1"){
        totalAPagar = (200*cantidad)*0.2;
        console.log("Total a pagar: $"+totalAPagar);
    }
    else if (categoria == "2"){
        totalAPagar = (200*cantidad)*0.5;
        console.log("Total a pagar: $"+totalAPagar);
    }
    else if (categoria == "3"){
        totalAPagar = (200*cantidad)*0.8;
        console.log("Total a pagar: $"+totalAPagar);
    }

        return totalAPagar;
}

var formulario = document.getElementById("formulariodescuentos")
var divResultado = document.getElementById("resultado")
var cantidad = document.getElementById("cantidad")
var categoria = document.getElementById("categoria")

formulario.addEventListener("submit",(evento) => {
    evento.preventDefault()

    divResultado.textContent = "Total a pagar: $" + calcularPrecioConDescuento(cantidad.value , categoria.value)
    console.log(categoria.value);
})

formulario.addEventListener("reset", ()=> {
    divResultado.textContent = "Total a pagar: $"
})


 