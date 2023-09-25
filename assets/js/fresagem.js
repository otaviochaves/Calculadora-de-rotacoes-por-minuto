function calcularRPM ()
{
    const velocidadeDeCorte = document.getElementById('velocidadeDeCorte').value
    const milDaFormula = 1000;
    const diametroDaFreasa = document.getElementById('diametroDaFresa').value

    const rpm = velocidadeDeCorte * milDaFormula / (Math.PI * diametroDaFreasa);

    document.getElementById('resultado').innerHTML = `As RPM necessárias são: ${rpm.toFixed(0)} RPM`;
    setTimeout(() =>
    {
        document.getElementById('resultado').innerHTML = ''
    }, 3000);

    setTimeout(function ()
    {
        location.reload();
    }, 3000);
}