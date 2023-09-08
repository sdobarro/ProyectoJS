document.getElementById('convert').addEventListener('click', function() {
    const monto = parseFloat(document.getElementById('monto').value);

if (isNaN(monto)) {
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Ingresar un monto para que sea convertido',
        showConfirmButton: false,
        timer: 1100
})
        document.getElementById('result').textContent = '';
        return;
    }

fetch ('https://raw.githubusercontent.com/sdobarro/ProyectoJS/main/exchangeRates.json')
    .then(response => response.json())
    .then(data => {
        const usd = monto / data.USD;
        const eur = monto / data.EUR;
        const brl = monto / data.BRL;
        
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Convirtiendo valor',
            showConfirmButton: false,
            timer: 1100
        })
        document.getElementById('result').innerHTML = `
        <p>${monto} Pesos Argentinos equivale a:</p>
        <p>${usd.toFixed(2)} Dólares</p>
        <p>${eur.toFixed(2)} Euros</p>
        <p>${brl.toFixed(2)} Real Brasileño </p>
        `;   
    }
)})