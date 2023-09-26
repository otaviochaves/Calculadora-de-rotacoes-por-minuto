const resultado = document.getElementById('resultado');
const button = document.getElementById('btn');
const inputVelocidadeDeCorte = document.getElementById('velocidadeDeCorte');
const inputDiametroDaFresa = document.getElementById('diametroDaFresa');


document.addEventListener('click', (event) =>
{
    if (event.target !== inputVelocidadeDeCorte && event.target !== inputDiametroDaFresa)
    {
        inputVelocidadeDeCorte.blur();
        inputDiametroDaFresa.blur();
    }
});

button.addEventListener('click', () =>
{
    const velocidadeDeCorte = parseFloat(inputVelocidadeDeCorte.value);
    const milDaFormula = 1000;
    const diametroDaFresa = parseFloat(inputDiametroDaFresa.value);

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
        resultado.innerHTML = '';
    }, 2000);

    setTimeout(() =>
    {
        location.reload();
    }, 3000);
}
