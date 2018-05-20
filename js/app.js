var botton = document.getElementById('botton');
var contenedor = document.getElementById('contenedor');
var seccion = document.getElementById('seccion');
var textarea = document.getElementById('mensajes');
var paragraph = document.getElementById('paragraph');
var text = textarea.value


/*-----------------PRIMERA VERSION--------------------*/
botton.addEventListener('click', firts);

function firts(){
  botton.className = 'botton';

  botton.type = 'button';

  paragraph.innerText = text;

  textarea.value = '';

  contenedor.appendChild(paragraph);
  seccion.appendChild(contenedor);

  function deactivate(botton){
  		if(textarea === ''){
        botton.preventDefault();
        botton.innerText('botton').disabled=true;
    }
  }
};
