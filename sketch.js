/***********************************************************************************
	Rooms of a House Sample
	by Max Amido

  Shows navigation structure using buttons and key presses

	- a more advanced state machine with use array-indexing for each of
		images the draw functions, but this is just for illustrative purposes


***********************************************************************************/



// variable that is a function 
var drawFunction;

// offset from bottom of screen
var gTextOffset = 20;

//array of images
var images = [];
var midX;
var startY;
var lineHeight = 24;

//load images in array
function preload(){
  images[0] = loadImage('assets/house.png');
  images[1] = loadImage('assets/hallway.png');
  images[2] = loadImage('assets/livingroom.png');
  images[3] = loadImage('assets/diningroom.png');
  images[4] = loadImage('assets/kitchen.png');
  images[5] = loadImage('assets/bathroom.png');
  images[6] = loadImage('assets/bedroom.png');
}

// Center drawing, drawFunction will be one for default
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Center our drawing objects
  imageMode(CENTER);
  textAlign(CENTER);
  textSize(24);

  // set to one for startup
  drawFunction = drawHouse;
}

// Very simple, sets the background color and calls your state machine function
function draw() {
  background(0);

  fill(255);
  rectMode(CENTER)
  rect(windowWidth/2,windowHeight/2,500,400)

  fill(0);

  // will call your state machine function
  drawFunction();
  fill(255);
  text("X: " + mouseX + "   Y: " + mouseY, 80, height - 20);
}

//========= TEMPLATE: modify these functions, INSIDE the function blocks only =========

//Draws Splash
drawHouse = function() {
   image(images[0],windowWidth/2, windowHeight/2);

  fill(75,0,130);
  text("Dream Home", width/2, height - gTextOffset);

  //Button for Hallway Room
  // Kitchen [space] 
    if( keyCode === 32 ) {
        drawFunction = drawHallway;
    }
}

//Draws Hallway
drawHallway = function() {
   image(images[1],windowWidth/2, windowHeight/2);

   fill(75,0,130);
   text("Hallway", width/2, height - gTextOffset);

//Button for Living Room
    if( mouseIsPressed){
       if(mouseX >= 326 && mouseX <= 445){
          if(mouseY >= 221 && mouseY <= 589){
            drawFunction = drawLivingRoom;
          }
        }
    }

//Button for Dining Room
    if( mouseIsPressed){
       if(mouseX >= 475 && mouseX <= 501){
          if(mouseY >= 249 && mouseY <= 439){
            drawFunction = drawDiningRoom;
          }
        }
    }

//Button for Kitchen
    if( mouseIsPressed){
       if(mouseX >= 517 && mouseX <= 575){
          if(mouseY >= 270 && mouseY <= 372){
            drawFunction = drawKitchen;
          }
        }
    }

//Button for Bathroom
    if( mouseIsPressed){
       if(mouseX >= 588 && mouseX <= 624){
          if(mouseY >= 260 && mouseY <= 394){
            drawFunction = drawBathroom;
          }
        }
    }

//Button for Bathroom
    if( mouseIsPressed){
       if(mouseX >= 644 && mouseX <= 714){
          if(mouseY >= 214 && mouseY <= 587){
            drawFunction = drawBedroom;
          }
        }
    }
}

//Draws Living Room
drawLivingRoom = function() {
   image(images[2],windowWidth/2, windowHeight/2);

   fill(240,120,0);
   text("Living Room", width/2, height - gTextOffset);

  //Button for Dining Room
    if( mouseIsPressed){
       if(mouseX >= 417 && mouseX <= 624){
          if(mouseY >= 188 && mouseY <= 424){
            drawFunction = drawDiningRoom;
          }
        }
    }

  //Button for Hallway
    if( mouseIsPressed){
       if(mouseX >= 711 && mouseX <= 796){
          if(mouseY >= 335 && mouseY <= 419){
            drawFunction = drawHallway;
          }
        }
    }
}

//Draws Dining Room
drawDiningRoom = function() {
   image(images[3],windowWidth/2, windowHeight/2);

   fill(255,20,147);
   text("Dining Room", width/2, height - gTextOffset);

  //Button for Living Room
    if( mouseIsPressed){
       if(mouseX >= 439 && mouseX <= 618){
          if(mouseY >= 524 && mouseY <= 589){
            drawFunction = drawLivingRoom;
          }
        }
    }

  //Button for Hallway
    if( mouseIsPressed){
       if(mouseX >= 665 && mouseX <= 795){
          if(mouseY >= 492 && mouseY <= 550){
            drawFunction = drawHallway;
          }
        }
    }
}

//Draws Kitchen
drawKitchen = function() {
   image(images[4],windowWidth/2, windowHeight/2);

   fill(255,20,147);
   text("Kitchen", width/2, height - gTextOffset);

  //Button for Hallway
    if( mouseIsPressed){
       if(mouseX >= 470 && mouseX <= 627){
          if(mouseY >= 471 && mouseY <= 590){
            drawFunction = drawHallway;
          }
        }
    }
}

//Draws Bathroom
drawBathroom = function() {
   image(images[5],windowWidth/2, windowHeight/2);

   fill(255,20,147);
   text("Bathroom", width/2, height - gTextOffset);

  //Button for Hallway
    if( mouseIsPressed){
       if(mouseX >= 297 && mouseX <= 327){
          if(mouseY >= 517 && mouseY <= 600){
            drawFunction = drawHallway;
          }
        }
    }
}

//Draws Bedroom
drawBedroom = function() {
   image(images[6],windowWidth/2, windowHeight/2);

   fill(255,20,147);
   text("Bedroom", width/2, height - gTextOffset);

  //Button for Hallway
    if( mouseIsPressed){
       if(mouseX >= 297 && mouseX <= 327){
          if(mouseY >= 517 && mouseY <= 600){
            drawFunction = drawHallway;
          }
        }
    }

  //Button for Bathroom
    if( mouseIsPressed){
       if(mouseX >= 504 && mouseX <= 624){
          if(mouseY >= 529 && mouseY <= 589){
            drawFunction = drawBathroom;
          }
        }
    }
}




