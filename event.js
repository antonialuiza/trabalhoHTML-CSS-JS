var saude = document.getElementById('saude');
var autora = document.getElementById('autora');

saude.addEventListener('mouseover', ()=> { // Mostrar preview saúde
    var textoSaude = document.getElementById('textoSaude');
    textoSaude.style.display = 'block';
}); 

saude.addEventListener('mouseout', ()=> { // Esconder preview saúde
  var textoSaude = document.getElementById('textoSaude');
  textoSaude.style.display = 'none';
}); 

autora.addEventListener('mouseover', ()=> { // Mostrar preview autora
  var textoAutora = document.getElementById('textoAutora');
  textoAutora.style.display = 'block';
}); 

autora.addEventListener('mouseout', ()=> { // Esconder preview autora
var textoAutora = document.getElementById('textoAutora');
textoAutora.style.display = 'none';
}); 
