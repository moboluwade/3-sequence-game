// const express = require("expres");

// const app = express();

// app.use(express.static("public"));

// app.get("/", function(){
// 	res.sendFile(__dirname+"/index.html");
// });

// app.listen(3000, function(){
// 	console.log("server running at port 3000")
// });


/*THe parts of the game. There will be a sequence of colors. The 3 sequence game.
	The player will try to match the pattern they are given.
	level 1- 3 colors blink. in a sequence of three. The user tries to match the pattern.
	level 2- 4 colors blink. in a sequence of three. Match pattern.
	level 3- 5 colors blink. in a sequence of three. Match pattern.
	-----
	(mod 1) v1.1
	The player will try to match the pattern they are given three times per level. Show progress bar till level completion.
	level 1- 2 colors blink. in a sequence of three. The user tries to match the pattern three times per level.
	level 2- 3 colors blink. in a sequence of three. Match pattern three times per level.
	level 3- 4 colors blink. in a sequence of three. Match pattern three times per level.
	level 4- 5 colors blink. in a sequence of three. Match pattern three times per level.
	-----
	- Create pattern according to the level.
	- show pattern.
	- record users pattern.
	- check users pattern after it's completed.
	- if correct, advance level.
	- if not, go back one level.(prove this by showing the sequence of colors in text to the player.)
	- Show leaderboard.
*/

const gameColors=["blue", "red", "yellow", "green", "purple"]; //expand randomNumber accordingly.
function generateRandomColor(){
	var randomNumber= Math.random()*5; //when no of colors increase, expand randomNumber range accordingly.
	randomNumber= Math.floor(randomNumber);
	randomColor= gameColors[randomNumber]; console.log(randomColor);
}

$(".ball")