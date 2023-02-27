
const envios = (km) => {
        if (km === 1) {
                return alert('Su envio cuesta: $ 200')
        }
        else if (km === 2) {
                return alert('Su envio cuesta: $ 300')
        }
        else if (km === 3) {
                return alert('Su envio cuesta: $ 500')
        }
        else if (km === 4) {
                return alert('Su envio cuesta: $ 600')
        }
        else {
                return alert('Error: seleccione del 1 al 4')
        }
}
let km = envios (parseInt(prompt('Elija la siguiente distancia: 1: 1 a 10km, 2: 11km a 22km, 3: 23km a 50km, 4: +50km')))