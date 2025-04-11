console.log("Game Begin");

const boards=
[
  [
    "c6"
  ],
  [
    "c1","c6"
  ],
  [
    "c1","c6","c11"
  ],
  [
    "c1","c3","c4","c6"
  ],
  [
    "c3","c4","c6","c8","c9"
  ],
  [
    "c1","c3","c4","c8","c9","c11"
  ],
  [
    "c1","c3","c4","c6","c8","c9","c11"
  ],
  [
    "c1","c3","c4","c5","c7","c8","c9","c11"
  ],
  [
    "c1","c3","c4","c5","c6","c7","c8","c9","c11"
  ],
  [
    "c0","c1","c2","c3","c4","c5","c7","c6","c8","c9"
  ],
  [
    "c0","c1","c2","c3","c4","c5","c7","c6","c8","c9","c11"
  ],
  [
    "c0","c1","c2","c3","c4","c5","c7","c8","c9","c10","c11","c12"
  ],
  [
    "c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","c10","c11","c12"
  ]
];

let currentPlayers = 0;

function loadGame()
{
  players = getPlayersArray();
  console.log(players)
  currentPlayers = players.length;
  fillTiles(players);
  setupAudio();
}

function getJsonFromUrl(url) {
  if(!url) url = location.search;
  var query = url.substr(1);
  var result = {};
  query.split("&").forEach(function(part) {
    var item = part.split("=");
    result[item[0]] = decodeURIComponent(item[1]);
  });
  return result;
}

function getPlayersArray(){
  pd = getJsonFromUrl()
  players = [];

  for(let key in pd)
  {
    value = pd[key];
    if(value != null && value != "") players.push(value);
  }

  return players;
}

function fillTiles(players)
{
  let board = boards[players.length - 1];
  for(let i = 0;i<players.length;i++)
  {
    let hexId = board[i];
    let hex = document.getElementById(hexId);
    hex.style.display = "block";
    hex.classList.add("alive");
    hex.childNodes[0].textContent = players[i];

    hex.childNodes[0].addEventListener("click",function(){
      if(currentPlayers > 1)
      {
        currentPlayers--;
        hex.classList.remove("alive");
      }

      if(currentPlayers <= 1)
      {
        document.getElementById("endGameBTN").style.display="block";
        document.getElementById("winner").value = document.getElementsByClassName("alive")[0].childNodes[0].textContent;
      }
    });
  }
}

function setupAudio()
{
  document.getElementById("good").addEventListener("click",function()
  { 
    var audio = document.getElementById("audioGood");
    audio.play();
  });
  document.getElementById("bad").addEventListener("click",function()
  { 
    var audio = document.getElementById("audioBad");
    audio.play();
  });
}

loadGame();

