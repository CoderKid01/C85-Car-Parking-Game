//Create a reference for canvas 
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
//Give specific height and width to the car image

background_image = "parkingLot.jpg";
greencar_image = "car2.png";
greencar_width = 75;
greencar_height = 100;

//Set initial position for a car image.
greencar_x = 5;
greencar_y = 225;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadgreencar;
    rover_imgTag.src = greencar_image;   
}

function upploadBackground(){
    ctx.drawIamge(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function upploadgreencar(){
    ctx.drawIamge(greencar_imgTag, greencar_x, greencar_y, greencar.width, greencar.height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y>=0)
	{
		greencar_y = greencar_y - 10;
		console.log("when up arrow is pressed, x = " + greencar_x + " | y = " + greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}
function down()
{
	if(greencar_y<=500)
	{
		greencar_y = greencar_y + 10;
		console.log("when up arrow is pressed, x = " + greencar_x + " | y = " + greencar_y);
		uploadBackground();
		uploadRgreencar();
	}
}
function left()
{
	if(greencar_y>=0)
	{
		greencar_y = greencar_y - 10;
		console.log("when up arrow is pressed, x = " + greencar_x + " | y = " + greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}
function right()
{
	if(greencar_y<=700)
	{
		greencar_y = greencar_y + 10;
		console.log("when up arrow is pressed, x = " + greencar_x + " | y = " + greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}