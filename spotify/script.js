console.log("Welcome to Spotify")

//Initialize the Variables
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName: "Tokyo Drift", filePath: "songs/1.mp3", coverPath:"cover/tokyo.jpg"},
    {songName: "Nashe si chad gayi", filePath: "songs/2.mp3", coverPath:"cover/arijit singh.jpg"},
    {songName: "Bone", filePath: "songs/3.mp3", coverPath:"cover/bone.jpeg"},
    {songName: "Birds", filePath: "songs/4.mp3", coverPath:"cover/imagin dragen.jpg"},
    {songName: "Ik Lamha", filePath: "songs/5.mp3", coverPath:"cover/Ik-Lamha.jpg"},
    {songName: "Ramta Jogi", filePath: "songs/6.mp3", coverPath:"cover/ramta jogi.jpeg"},
    {songName: "Bad Habits", filePath: "songs/7.mp3", coverPath:"cover/bad habbits.png"},
    {songName: "Chidiya", filePath: "songs/8.mp3", coverPath:"cover/Chidiya.jpg"},
    {songName: "Khairiyat", filePath: "songs/9.mp3", coverPath:"cover/arijit singh.jpg"},
    {songName: "Khel khilone", filePath: "songs/10.mp3", coverPath:"cover/Bachpan.jpg"},
    {songName: "Hawayein", filePath: "songs/11.mp3", coverPath:"cover/hawayien.jpg"},
 
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})

//audioElement.play();

//Handal play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
      audioElement.play();
      masterPlay.classList.remove('fa-circle-play');
      masterPlay.classList.add('fa-circle-pause');
      gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    //Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
          makeAllPlays();
          songIndex = parseInt(e.target.id);
          e.target.classList.remove('fa-circle-play');
          e.target.classList.add('fa-circle-pause');
          audioElement.src=`songs/${songIndex+1}.mp3`;
          masterSongName.innerHTML = songs[songIndex].songName;
          audioElement.currentTime = 0;
          audioElement.play();
          gif.style.opacity = 1;
          masterPlay.classList.remove('fa-circle-play');
          masterPlay.classList.add('fa-circle-pause');

    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex >= 9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerHTML = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex <= 0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerHTML = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})