var numSquares = 6;
var colors = generateRandomColors(numSquares);



var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");


easyBtn.addEventListener("click", function() 
{
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) 
	{
		if (colors[i]) 
		{
			squares[i].style.backgroundColor = colors[i];
		}
		else 
		{
			squares[i].style.display = "none"; 
		}
	}
});

hardBtn.addEventListener("click", function() 
{
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) 
	{
		
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block"; 
	}
});


resetButton.addEventListener("click", function () 
{
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for (var i = 0; i < squares.length; i++) 
	{
		squares[i].style.backgroundColor = colors[i];
	}
	
	h1.style.backgroundColor = "steelblue";
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++)
{
	//add initial colors to sqaures
	squares[i].style.backgroundColor = colors[i];
	
	//add click listeners to squares
	squares[i].addEventListener("click", function()
	{
		//grab color of clicked sqaure 
		var clickedColor = this.style.backgroundColor;
		
		//compare color to pickedColor variable
		if (clickedColor === pickedColor)
		{
			messageDisplay.textContent = "Correct";
			resetButton.textContent = "Play Again";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			
		}
		else 
		{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
	
	
}

function changeColors(color) 
{
	//loop through all the sqaures
	for (var i = 0; i < squares.length; i++)
	{
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor() 
{
	//Part 3 of Color Game Project
	var random = Math.floor(Math.random() * colors.length);
	//Math.floor removes decimal ending and outputs whole numbers
	//this goes up to 5.999999. If want to go to six, add one. 
	//Ex) Math.random() * colors.length + 1 
	
	return colors[random];
}


function generateRandomColors(num) 
{
	//make an array
	var arr = []
	//add num random colors to array
	for (var i = 0; i < num; i++) 
	{
		//get random color and push into arr
		arr.push(randomColor());
		//get random color and push into arr
	}
	//return that array
	return arr;
}

function randomColor() 
{
	//pick a "red" from 0 - 255
	var red = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var green = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var blue = Math.floor(Math.random() * 256);
	
	return "rgb(" + red + ", " + green + ", " + blue +")";
}