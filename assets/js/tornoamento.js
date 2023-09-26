const resultado = document.getElementById('resultado');
const button = document.getElementById('btn');
const inputVelocidadeDeCorte = document.getElementById('velocidadeDeCorte');
const inputDiametroDaPeca = document.getElementById('diametroDaPeca');

document.addEventListener('click', (event) =>
{
    if (event.target !== inputVelocidadeDeCorte && event.target !== inputDiametroDaPeca)
    {
        inputVelocidadeDeCorte.blur();
        inputDiametroDaPeca.blur();
    }
});

button.addEventListener('click', () =>
{
    const velocidadeDeCorte = parseFloat(inputVelocidadeDeCorte.value);
    const milDaFormula = 1000;
    const diametroDaPeca = parseFloat(inputDiametroDaPeca.value);

    if (isNaN(velocidadeDeCorte) || isNaN(diametroDaPeca))
    {
        alert('Por favor, insira valores em todos os campos');
    } else
    {
        calcularRPM(velocidadeDeCorte, milDaFormula, diametroDaPeca);
    }
});

function calcularRPM (velocidadeDeCorte, milDaFormula, diametroDaPeca)
{
    const rpm = (velocidadeDeCorte * milDaFormula) / (Math.PI * diametroDaPeca);
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
