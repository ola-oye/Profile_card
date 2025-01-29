const utcTime = document.getElementById("time");
const moreBtn = document.getElementById("more-btn");
const bio = document.getElementById("bio");

const now = new Date();
const hours = now.getUTCHours();
const minutes = now.getUTCMinutes();
const seconds = now.getUTCSeconds();
time.innerText = `UTC Time:  ${hours}:${minutes}:${seconds}`;

function renameBtn() {
  if (bio.classList.contains("bio-preview")) {
    moreBtn.innerText = "Continue reading";
  } else {
    moreBtn.innerText = "collapse";
  }
}

moreBtn.addEventListener("click", () => {
  bio.classList.toggle("bio-preview");
  renameBtn();
});
