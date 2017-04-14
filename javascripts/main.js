var games = [{name: "Sword and Sorcery", description: "Save the world from dragons!", price: 20, img: "img/sword-and-sorcery.png"},
{name: "Uncharted", description: "Drake looks for treasure!", price: 18, img: "img/uncharted.jpg"},
{name: "MarioKart", description: "Ruin friendships with this intense game!", price: 50, img: "img/mario-kart.jpg"},
{name: "Tomb Raider", description: "Lara Croft achieves and kicks ass!", price: 42, img: "img/tomb-raider.png"},
{name: "Monaco", description: "Race your face off!", price: 30, img: "img/monaco.jpeg"},
{name: "Grand Theft Auto", description: "Moral conundrum!", price: 32, img: "img/gta.jpg"},
{name: "Witness", description: "Puzzles and stuff!", price: 34, img: "img/witness.jpg"},
{name: "Braid", description: "Brain teasers and increase your IQ!", price: 10, img: "img/braid.jpg"},
{name: "Resident Evil", description: "Get excited for a scary game!", price: 50, img: "img/resident-evil.jpg"}];


for (var i = 0; i < games.length; i++) { // loop through the array
		/// made a variable assigned to a string that will get looped through
		var gameString = "<div class = 'card game" + (i + 1) + "'><h2>" + games[i].name + "</h2><p>" + games[i].description + "</p>" + "<p>" + "$" + games[i].price + "</p>" + "<p>" + "<img class='' src='" + games[i].img + "'></div>";
		// assign the string, which has been looped through to the div "games" and come back around to being again
		document.getElementById("games").innerHTML += gameString;
};


