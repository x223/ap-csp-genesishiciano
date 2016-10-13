var bgColor = 'white'

function setup() {
   createCanvas(windowWidth, windowHeight)
}

function draw()

{
   //ellipse(30, 30, mouseX, mouseY);
   fill(bgColor)
   ellipse(mouseX,mouseY, mouseX,mouseX);
   if (mouseX < windowWidth / 5) {
      bgColor = '#192734';
   } else if (mouseX || mouseY < 4 * windowWidth / 5) {
      bgColor = '#091569';
   } else if (mouseX || mouseY < 3 * windowWidth / 5) {
      bgColor = '6ale18';
   } else if (mouseX || mouseY < 2 * windowWidth / 5) {
      bgColor = '6affc0cb';

   }
}