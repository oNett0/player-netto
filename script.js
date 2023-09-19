//Diferenças - HTML connect

const songName = document.getElementById('song-name'); // Diz ao DOM que o elemento que recebe, seja o elemento pelo ID, que está em aspas simples
const bandName = document.getElementById('band-name')
const song = document.getElementById('audio');
const cover = document.getElementById('cover')
const play = document.getElementById('play');
const next = document.getElementById('next');
const previous = document.getElementById('previous');


// Varial

const LoseControl = {
    songName: 'Lose controle',
    artist: 'MEDUZA, Becky Hill, Goodboys',
    File: 'Losecontrol',

};

const Sunshine = {
    songName: 'Sunshine',
    artist: 'Cat Dealers, LOthief, Santti',
    File: 'Sunshine',

};
const Youbody = {
    songName: 'You body',
    artist: 'Cat Dealers',
    File: 'Youbody',

};
// evento no Javascript: é um fatores de efeito baseado em ação e reação.

let isPlaying = false;
const playlist = [LoseControl, Sunshine, Youbody];
let index = 0;


// Function

function  playSong(){
    play.querySelector('.bi').classList.remove('bi-play-circle-fill') /* Classlist: listacom todas as classe com o elemento indicado */
    play.querySelector('.bi').classList.add('bi-pause-circle-fill');
    song.play();
    isPlaying = true;
}
function pauseSong(){
    play.querySelector('.bi').classList.add('bi-play-circle-fill');
    play.querySelector('.bi').classList.remove('bi-pause-circle-fill');
    song.pause();
    isPlaying = false;
}

function playPauseDecider(){
    if(isPlaying === true){
        pauseSong();
        }
    else{
        playSong();
    }
}

function initializeSong(){
    cover.src = `images/${playlist[index].File}.jpg`;
    song.src = `music/${playlist[index].File}.mp3`;
    songName.innerText = playlist[index].songName;
    bandName.innerText = playlist[index].artist;
};

function previousSong(){
    if(index === 0){
        index = playlist.length - 1; // caso a posição esteja em 0(zero). A função vai receber o tamanho da playlist
    }
    else{
        index -= 1;
    }
    initializeSong()
    playSong()
};

function nextSong(){
    if(index === playlist.length - 1){
        index = 0;
    }
    else{
        index += 1;
    }
    initializeSong()
    playSong()
};

// Function exec

initializeSong();

play.addEventListener('click', playPauseDecider); //Array - coleção de informações
previous.addEventListener('click', previousSong);
next.addEventListener('click', nextSong);
