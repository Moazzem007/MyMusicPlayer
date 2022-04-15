const songs = [
    "OMIDO x Silent Child - Me & My Demons (Lyric Video).mp3", 
    "Y2Mate.is - INDILA - Ainsi Bas La Vida (REMIX by CHIRONIC) slowed to perfection-McfK9yUYEX8-160k-1647002021748.mp3"

];

const player = document.getElementById('player');

function createSongList() {
    const list = document.createElement("ol");

    for(let i = 0; i<songs.length; i++){
        const item = document.createElement("li");
        item.appendChild(document.createTextNode(songs[i]));
        list.appendChild(item);
    }
    return list;

}

const songList = document.querySelector("#songList");
songList.appendChild(createSongList());

songList.onclick = function(e) {
    const source = document.getElementById('source');
    source.src = "songs/"+e.target.innerText;

    document.querySelector('#currentSong').innerText = `Now Playing: ${e.target.innerText}`;

    
    player.load();
    player.play();

}

function playAudio() {
    if(player.readyState){
        player.play();
    }
}

function pauseAudio() {
    player.pause();
}

const slider = document.getElementById("volumeSlider");
slider.oninput = function(e){
    const volume = e.target.value;
    player.volume = volume;
}

player.ontimeupdate = function() {
    if(player.currentTime > 0) {
        const progressBar = document.getElementById("progress");
    progressBar.value = (player.currentTime / player.duration) * 100;
    }
}






