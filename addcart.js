let envios = parseInt(prompt('Elija la siguiente distancia: 1: 1 a 10km, 2: 11km a 22km, 3: 23km a 50km, 4: +50km'))

if (envios===1){
        alert('Su envio cuesta: $ 200')
}
else if(envios===2){
        alert('Su envio cuesta: $ 300')
}
else if(envios===3){
        alert('Su envio cuesta: $ 500')
    }
else if (envios===4){
        alert('Su envio cuesta: $ 600')
    }
else{
        alert('Error: seleccione del 1 al 4')
}