const resultado = document.getElementById('resultado');
const button = document.getElementById('btn');

button.addEventListener('click', () =>
{
    const velocidadeDeCorte = parseFloat(document.getElementById('velocidadeDeCorte').value);
    const milDaFormula = 1000;
    const diametroDaPeca = parseFloat(document.getElementById('diametroDaPeca').value);

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
        document.getElementById('resultado').innerHTML = '';
    }, 2000);

    setTimeout(() =>
    {
        location.reload();
    }, 3000);
}
