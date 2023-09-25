function calcularRPM ()
{
    const velocidadeDeCorte = document.getElementById('velocidadeDeCorte').value
    const milDaFormula = 1000;
    const diametroDaPeca = document.getElementById('diametroDaPeca').value

    const rpm = velocidadeDeCorte * milDaFormula / (Math.PI * diametroDaPeca);

    document.getElementById('resultado').innerHTML = `As RPM necessárias são: ${rpm.toFixed(0)} RPM`;
    setTimeout(() =>
    {
        document.getElementById('resultado').innerHTML = ''
    }, 2000);

    setTimeout(function ()
    {
        location.reload();
    }, 3000);
}