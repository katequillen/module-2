"use strict";

function getDataUserGitHub() {
  const input = document.querySelector("input");
  const inputValue = input.value;

  fetch(`https://api.github.com/users/${inputValue}`)
    .then((response) => response.json())
    .then((data) => {
      const nameUser = document.querySelector(".js-name");
      nameUser.innerHTML = data.name;
      const photo = document.querySelector("img");
      photo.src = data.avatar_url;
      const repo = document.querySelector(".js-repo");
      repo.innerHTML = data.public_repos;
    });
}

const btn = document.querySelector(".js-button");
btn.addEventListener("click", getDataUserGitHub);
