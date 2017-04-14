var games = [{name: "Sword and Sorcery", description: "Save the world from dragons!", price: 20, img: ""},
{name: "Uncharted", description: "Drake looks for treasure!", price: 18, img: ""},
{name: "MarioKart", description: "Ruin friendships with this intense game!", price: 50, img: ""},
{name: "Tomb Raider", description: "Lara Croft achieves and kicks ass!", price: 42, img: ""},
{name: "Monaco", description: "Race your face off!", price: 30, img: ""},
{name: "Grand Theft Auto", description: "Moral conundrum!", price: 32, img: ""},
{name: "Witness", description: "Puzzles and stuff!", price: 34, img: ""},
{name: "Braid", description: "Brain teasers and increase your IQ!", price: 10, img: ""},
{name: "Resident Evil", description: "Get excited for a scary game!", price: 50, img: ""}];


var name = "";

for (prop in games) {
	console.log(prop, games[prop]);
};
for (var i = 0; i < games.length; i++) {
	games.forEach(function(){
		name += games[i].name;
		console.log("name", games[0].name);
	});
};
		document.getElementById("games").innerHTML = name;

