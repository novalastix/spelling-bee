console.log("Game Begin");

function loadGame()
{
  players = getPlayersArray();
  console.log(players)

  
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

function placeTiles()
{
  for(var i=0;i<13;i++)
  {
    const cell = document.createElement("div");
    cell.classList.push("cell");
    cell.id = "c"+i;
  }
}

loadGame();

