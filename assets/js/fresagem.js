const resultado = document.getElementById('resultado');
const button = document.getElementById('btn');

button.addEventListener('click', () =>
{
    const velocidadeDeCorte = parseFloat(document.getElementById('velocidadeDeCorte').value);
    const milDaFormula = 1000;
    const diametroDaFresa = parseFloat(document.getElementById('diametroDaFresa').value);

    if (isNaN(velocidadeDeCorte) || isNaN(diametroDaFresa))
    {
        alert('Por favor, insira valores em todos os campos');
    } else
    {
        calcularRPM(velocidadeDeCorte, milDaFormula, diametroDaFresa);
    }
});

function calcularRPM (velocidadeDeCorte, milDaFormula, diametroDaFresa)
{
    const rpm = (velocidadeDeCorte * milDaFormula) / (Math.PI * diametroDaFresa);
    resultado.innerHTML = `As RPM necessárias são: ${rpm.toFixed(0)} RPM`;

    setTimeout(() =>
    {
        document.getElementById('resultado').innerHTML = '';
    }, 2000);

    setTimeout(() =>
    {
        location.reload();
    }, 3000);
}
