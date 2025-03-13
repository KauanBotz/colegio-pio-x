let verificar = document.getElementById('verificar');
let status = document.getElementById('status');

verificar.addEventListener('click', function() {
    let nome = document.getElementById('nome').value.trim();
    
    if (/^[\p{L}\s]+$/u.test(nome) && nome.length >= 3) {
        let opcoes = [
            { texto: 'Aprovado', cor: '#28a745' },
            { texto: 'Recuperação', cor: '#ffd700' },
            { texto: 'Reprovado', cor: '#dc3545' }
        ];

        let resultado = opcoes[Math.floor(Math.random() * opcoes.length)];

        status.textContent = `${resultado.texto}`;
        status.style.color = resultado.cor;
    } else {
        status.textContent = 'Por favor, insira um nome válido.';
        status.style.color = '#ff0000';
    }

    document.getElementById('nome').value = '';
});