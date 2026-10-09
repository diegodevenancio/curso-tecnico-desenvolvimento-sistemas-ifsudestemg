// VARIÁVEIS E FUNÇÕES JAVASCRIPT

// Selecionando os elementos do DOM (HTML)
const botaoCalcular = document.getElementById('btn-calcular');
const inputNome = document.getElementById('nome');
const inputHoras = document.getElementById('horas');
const divResultado = document.getElementById('resultado-calculo');

// Função que realiza o cálculo e a validação
function calcularProgressoEstudos(event) {
    // Variáveis locais
    const nomeUsuario = inputNome.value.trim();
    const horasSemanais = Number(inputHoras.value);

    // Validação: Verificar se o nome está vazio
    if (nomeUsuario === "") {
        alert("Por favor, preencha o seu nome antes de calcular!");
        inputNome.focus();
        return;
    }

    // Validação: Verificar se as horas são válidas (maior que zero)
    if (isNaN(horasSemanais) || horasSemanais <= 0) {
        alert("Por favor, insira um número válido de horas de estudo semanais.");
        inputHoras.focus();
        return;
    }

    // Cálculo simples: Estimativa de horas mensais (4 semanas)
    const horasMensais = horasSemanais * 4;

    // Alteração no Conteúdo da Página (Manipulação do DOM)
    divResultado.innerHTML = `Parabéns, ${nomeUsuario}! 👏👏👏 <br><br> 🚀 Dedicando ${horasSemanais} horas por semana, você acumulará aproximadamente <strong>${horasMensais} horas</strong> de estudo por mês na sua evolução tecnológica! 🚀`;
    
    // Mudando a cor de fundo da caixinha de resultado dinamicamente (estilo via JS)
    divResultado.style.backgroundColor = "#e6f4ea";
    divResultado.style.padding = "15px";
    divResultado.style.borderLeft = "4px solid #34a853";

    // Limpar os Campos do Formulário Após o Cálculo
    inputNome.value = "";
    inputHoras.value = "";
}

// Evento de Clique no Botão
botaoCalcular.addEventListener('click', calcularProgressoEstudos);