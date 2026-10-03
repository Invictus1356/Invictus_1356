const audio = document.getElementById("music");
const backgroundVideo = document.getElementById("backgroundVideo");
const playButton = document.getElementById("playButton");
const playSymbol = document.getElementById("playSymbol");
const playText = document.getElementById("playText");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");
const currentTimeLabel = document.getElementById("currentTime");
const durationLabel = document.getElementById("duration");
const discordButton = document.getElementById("discordButton");
const discordText = document.getElementById("discordText");

const formatTime = (seconds) => {
  if (!Number.isFinite(seconds)) {
    return "0:00";
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");

  return `${minutes}:${remainingSeconds}`;
};

const syncPlayState = () => {
  const isPlaying = !audio.paused;

  playSymbol.textContent = isPlaying ? "■" : "▶";
  playText.textContent = isPlaying ? "Stop Music" : "Play Music";
  playButton.setAttribute("aria-label", isPlaying ? "Stop music" : "Play music");
};

const syncProgress = () => {
  if (!audio.duration) {
    progress.value = 0;
    return;
  }

  progress.value = (audio.currentTime / audio.duration) * 100;
  currentTimeLabel.textContent = formatTime(audio.currentTime);
};

audio.volume = Number(volume.value);

const tryAutoplay = async () => {
  backgroundVideo.play().catch(() => {});

  try {
    await audio.play();
  } catch (error) {
    playText.textContent = "Play Music";
  }

  syncPlayState();
};

playButton.addEventListener("click", async () => {
  if (audio.paused) {
    try {
      await backgroundVideo.play();
      await audio.play();
    } catch (error) {
      playText.textContent = "Tap Again To Play";
      return;
    }
  } else {
    audio.pause();
    audio.currentTime = 0;
    syncProgress();
  }

  syncPlayState();
});

audio.addEventListener("loadedmetadata", () => {
  durationLabel.textContent = formatTime(audio.duration);
  syncProgress();
});

audio.addEventListener("timeupdate", syncProgress);
audio.addEventListener("play", syncPlayState);
audio.addEventListener("pause", syncPlayState);

progress.addEventListener("input", () => {
  if (!audio.duration) {
    return;
  }

  audio.currentTime = (Number(progress.value) / 100) * audio.duration;
});

volume.addEventListener("input", () => {
  audio.volume = Number(volume.value);
});

discordButton.addEventListener("click", async () => {
  const username = discordButton.dataset.username;

  try {
    await navigator.clipboard.writeText(username);
    discordText.textContent = "Copied: Invictus_1356";
  } catch (error) {
    discordText.textContent = "Invictus_1356";
  }

  window.setTimeout(() => {
    discordText.textContent = "Invictus_1356";
  }, 1600);
});

document.addEventListener("DOMContentLoaded", () => {
  tryAutoplay();
});

document.querySelectorAll(".account-link").forEach((link) => {
  link.addEventListener("click", () => {
    link.animate(
      [
        { transform: "translateX(0)" },
        { transform: "translateX(5px)" },
        { transform: "translateX(0)" },
      ],
      {
        duration: 240,
        easing: "ease-out",
      },
    );
  });
});
