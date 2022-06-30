let musica = document.querySelector('audio');

let duracaoMusica = document.querySelector('.fim');

duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));


//evventos
document.querySelector('.botao-play').addEventListener('click', tocarmusica);

document.querySelector('.botao-pause').addEventListener('click', pausarmusica);

musica.addEventListener('timeupdate',atualizarBarra);

//funcões

function tocarmusica(){
  musica.play(); 
  document.querySelector('.botao-pause').style.display = 'block';
  document.querySelector('.botao-play').style.display = 'none';

}

function pausarmusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor ((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
    
}   

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60); 
    let campoSegundos = segundos % 60;  
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;

    }

    return campoMinutos +':'+ campoSegundos;
}
