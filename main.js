const progress = document.getElementById("progress");
const song = document.getElementById("song");
const controlIcon = document.getElementById("controlIcon");
const playPauseButton = document.querySelector(".play-pause-btn");
const forwardButton = document.querySelector(".controls button.forward");
const backwardButton = document.querySelector(".controls button.backward");
const songName = document.querySelector(".music-player h1");
const artistName = document.querySelector(".music-player p");

const songs = [
      {
    title: "Falling",
    name: "Trevor Daniel",
    source:
      "../assets/audio/Trevor Daniel – Falling.m4a",
  },
    {
    title: "Sweater Weater",
    name: "The Neighbourhood",
    source:
      "../assets/audio/The Neighbourhood – Sweater Weather.m4a",
  },
      {
    title: "На грани",
    name: "Sevak & JANAGA ",
    source:
      "../assets/audio/Sevak – Sevak & JANAGA — На грани.m4a",
  },
  {
    title: "What was i made for",
    name: "Billie Eilish ",
    source:
      "../assets/audio/billie eilish what was i made for.m4a",
  },
  {
    title: "Let her go",
    name: "Passenger",
    source:
      "../assets/audio/Passenger – let her go.m4a",
  },
  {
    title: "Dusk Till Dawn",
    name: "ZAYN & Sia ",
    source:
      "../assets/audio/ZAYN & Sia – Dusk Till Dawn.m4a",
  },
  {
    title: "Eyes don't lie",
    name: "Isabel LaRosa",
    source:
      "../assets/audio/Isabel LaRosa – eyes don't lie.m4a",
  },
  {
    title: "Out Of My Head",
    name: "Glimmer of Blooms",
    source:
      "../assets/audio/Glimmer of Blooms – I Cant Get You Out Of My Head.m4a",
  },

  {
    title: "где ты была (Sped Up)",
    name: "Aunker",
    source:
      "../assets/audio/Aunker – где ты была Sped Up.m4a",
  },
  {
    title: "Без тебя я не я",
    name: "Jony, HammAli & Navai",
    source:
      "../assets/audio/JONY, HammAli & Navai – Без тебя я не я.m4a",
  },
    {
    title: "Skyfall",
    name: "Adele",
    source:
      "../assets/audio/Adele – Skyfall.m4a",
  },
      {
    title: "Saddness and sorrow",
    name: "Anime kei",
    source:
      "../assets/audio/naruto sadness and sorrow.m4a",
  },
    {
    title: "Another love",
    name: "Tom Odell",
    source:
      "../assets/audio/Tom Odell – Another Love.m4a",
  },
    {
    title: "Bellyache",
    name: "Billie eilish",
    source:
      "../assets/audio/Billie Eilish – Bellyache.m4a",
  },
    {
    title: "Chandelier",
    name: "Sia",
    source:
      "../assets/audio/Sia - Chandelier.m4a",
  },
    {
    title: "Unstoppable",
    name: "Sia",
    source:
      "../assets/audio/Sia - Unstoppable.m4a",
  },
    {
    title: "Пиала",
    name: "Aigel",
    source:
      "../assets/audio/AIGEL – Piyala.m4a",
  },
    {
    title: "Set fire to the rain",
    name: "Adele",
    source:
      "../assets/audio/Set Fire To The Rain – Adele 🎵.m4a",
  },
      {
    title: "I'm yours",
    name: "Isabel LaRosa",
    source:
      "../assets/audio/Isabel LaRosa – I'm Yours.m4a",
  },
      {
    title: "Untitled",
    name: "Aesthetic",
    source:
      "../assets/audio/Aesthetic - Topic – Untitled (feat. Bad Boy.m4a",
  },
      {
    title: "Chilparchin",
    name: "Shoxrux",
    source:
      "../assets/audio/SHOXRUX – CHILPARCHIN.m4a",
  },
{
    title: "Summertime saddness",
    name: "Lana Del Rey",
    source:
      "../assets/audio/Lana Del Rey – Summertime Sadness.m4a",
  },
    { title: "Poor (phonk)",
    name: "Nobody",
    source:
      "../assets/audio/gqtis – POOR (Phonk).m4a",
  },
    { title: "Loki season 2 soundtrack",
    name: "Jamie Evans",
    source:
      "../assets/audio/Jamie Evans Music - Topic – Loki season 2 soundtrack.m4a",
  },
    { title: "Robot Rock",
    name: "Daft Punk",
    source:
      "../assets/audio/Daft Punk – Robot Rock (Brazilian Funk Remix).m4a",
  },
   { 
    title: "9MM",
    name: "Hidden",
    source:
      "../assets/audio/9MM.m4a",
  },
];
let currentSongIndex = 3;

function updateSongInfo() {
  songName.textContent = songs[currentSongIndex].title;
  artistName.textContent = songs[currentSongIndex].name;
  song.src = songs[currentSongIndex].source;

  song.addEventListener("loadeddata", function () {});
}

song.addEventListener("timeupdate", function () {
  if (!song.paused) {
    progress.value = song.currentTime;
  }
});

song.addEventListener("loadedmetadata", function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
});

function pauseSong() {
  song.pause();
  controlIcon.classList.remove("fa-pause");
  controlIcon.classList.add("fa-play");
}

function playSong() {
  song.play();
  controlIcon.classList.add("fa-pause");
  controlIcon.classList.remove("fa-play");
}

function playPause() {
  if (song.paused) {
    playSong();
  } else {
    pauseSong();
  }
}

playPauseButton.addEventListener("click", playPause);

progress.addEventListener("input", function () {
  song.currentTime = progress.value;
});

progress.addEventListener("change", function () {
  playSong();
});

forwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateSongInfo();
  playPause();
});

backwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updateSongInfo();
  playPause();
});

updateSongInfo();

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  centeredSlides: true,
  initialSlide: 3,
  slidesPerView: "auto",
  allowTouchMove: false,
  spaceBetween: 40,
  coverflowEffect: {
    rotate: 25,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".forward",
    prevEl: ".backward",
  },
});
//  window.addEventListener("load", () => {
//   document.querySelector(".loading").classList.add("loading-hidden");
// });
window.addEventListener('DOMContentLoaded', (event) => {
  // Show loading screen
  document.querySelector('.loading').style.display = 'block';
  setTimeout(function() {
    document.querySelector('.loading').style.display = 'none';
  }, 5000);
});
 const body = document.querySelector("body"),
        nav = document.querySelector("nav"),
        modeToggle = document.querySelector(".dark-light"),
        searchToggle = document.querySelector(".searchToggle"),
        sidebarOpen = document.querySelector(".sidebarOpen"),
        siderbarClose = document.querySelector(".siderbarClose");
      let getMode = localStorage.getItem("mode");
      if (getMode && getMode === "dark-mode") {
        body.classList.add("dark");
      }
      // js code to toggle dark and light mode
      modeToggle.addEventListener("click", () => {
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");
        // js code to keep user selected mode even page refresh or file reopen
        if (!body.classList.contains("dark")) {
          localStorage.setItem("mode", "light-mode");
        } else {
          localStorage.setItem("mode", "dark-mode");
        }
      });
      // js code to toggle search box
      searchToggle.addEventListener("click", () => {
        searchToggle.classList.toggle("active");
      });
      sidebarOpen.addEventListener("click", () => {
        nav.classList.add("active");
      });
      body.addEventListener("click", (e) => {
        let clickedElm = e.target;
        if (
          !clickedElm.classList.contains("sidebarOpen") &&
          !clickedElm.classList.contains("menu")
        ) {
          nav.classList.remove("active");
        }
      });
function toggleDropdown() {
  var dropdown = document.getElementById("myDropdown");
  let arrowBtn = document.querySelector(".fa-chevron-down")
  if (dropdown.style.display === "none") {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
    // arrowBtn.addEventListener("click", () => {
    // arrowBtn.style.transform = "rotate(180deg) translate(50%)";

    //   });
}
