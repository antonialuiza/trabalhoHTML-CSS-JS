const informacoes= [
    {nome: "Antonia Luiza Quaresma", idade: "22 Anos", estadoCivil: 'Casada', sala: '1001', curso: 'Análise e Desenvolvimento de Sistemas', materia: 'HTML/CSS', naturalidade: 'Triunfo - PB' }
];
  
    informacoes.forEach(function(info) {

        var li = document.getElementById('liArray'); // Capturar elemento do HTML
        li.classList.add('liArr');
        li.innerHTML = `Nome: ${info.nome} <br>
                        Idade: ${info.idade} <br>
                        Naturalidade: ${info.naturalidade} <br>
                        Estado Civil: ${info.estadoCivil} <br>
                        Sala: ${info.sala} <br>
                        Curso: ${info.curso} <br>
                        Matéria: ${info.materia} <br>`;
});


