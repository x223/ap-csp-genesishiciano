 var strokeColor = 'blue'
   //var MtColor = 
 function setup() {
   createCanvas(windowWidth, windowHeight);
 }

 function draw() {
   if (mouseIsPressed) {
     stroke(strokeColor)
     line(pmouseX, pmouseY, mouseX, mouseY);
   }

 }

 function keyTyped() {
   if (key === 'b') {
     strokeColor = 'black';
   } else if (key === 'r') {
     strokeColor = '#E32173';
     weight = 10
   } else if (key === 'y') {
     strokeColor = 'yellow';
     weight = 10
   }
   else if (key ==='e'){
  background(255);     
   }


 }