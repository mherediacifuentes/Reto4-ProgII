function confirmarpago(){
    if(confirm("¿Desea confirmar su compra?")){
        location.replace("compra exitosa.html")
    } else {
        location.replace("index.html")
    }
}