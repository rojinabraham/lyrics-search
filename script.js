const apiURL = "https://api.lyrics.ovh";
const form = document.getElementById("form");
const result = document.getElementById("result");
const search = document.getElementById("search");
const more = document.getElementById("more");

async function searchSongs(term) {
  const res = await fetch(`${apiURL}/suggest/${term}`);
  const data = await res.json();
  showData(data);
}
function showData() {}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value.trim();
  if (!searchTerm) {
    alert("please enter search");
  } else {
    searchSongs(searchTerm);
  }
});
