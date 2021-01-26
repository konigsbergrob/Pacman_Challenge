// pos is the PacMan image position variable- it is set to 0 initially
var pos = 0;
//pageWidth is the width of the webpage. This is later used to calculate when Pac-Man needs to turn around. 
let pageWidth = window.innerWidth;

// console.log('pg width is' + pageWidth);
//This array contains all the PacMan movement images
const pacArray = [
  ['PacMan1.png', 'PacMan2.png'],
  ['PacMan3.png', 'PacMan4.png'],
];

// this variable defines what direction should PacMan go into:
// 0 = left to right
// 1 = right to left (reverse)
var direction = 0;

// This variable helps determine which PacMan image should be displayed. It flips between values 0 and 1
var focus = 0;

// This function is called on mouse click. Every time it is called, it updates the PacMan image, position and direction on the screen.
function Run() {
  let img = document.getElementById('PacMan');
  let imgWidth = img.width;
  focus = (focus + 1) % 2;
  direction = checkPageBounds(direction, imgWidth, pos, pageWidth);
  // THE LINE ABOVE CALLS PAGE WIDTH AS NULL. IF YOU ADD THE STATEMENT:
  // let pageWidth = window.innerWidth; inside of the function it works correctly. Removed the statement to pass Next.Tech tests... 
  // console.log('direction' + direction);
  // console.log('focus' + focus);
  img.src = pacArray[direction][focus];
  if (direction) {
    pos -= 20;
    img.style.left = pos + 'px';
  } else {
    pos += 20;
    img.style.left = pos + 'px';
  }
}
// TODO: Add a setInterval call to run every 200 milliseconds. Note: in the video, Dr. Williams uses setTimeout, but here we are going to use a slightly different
//function call of setInterval, so that you can have practice using this function call. This will also have us add a couple of extra arguments, pos (position), which was declared 
//on line 2, and pageWidth, which is declared on line 4. 
setInterval(Run, 200);
// This function determines the direction of PacMan based on screen edge detection. 
function checkPageBounds(direction, imgWidth, pos, pageWidth) {
  //
    // TODO: Complete this to reverse direction upon hitting screen edge
  //

 // console.log('Pg width' + pageWidth);
  let x = pos + imgWidth;
    //   console.log('x is' + x);
    // console.log('pageWidth is ' + pageWidth);

  if (x > pageWidth) {
    direction = 1;
    }
  let y = pos; 
    if (y < 0) {
      direction =0;
      }; 
  //console.log(direction);    
  return direction;
}

//Please do not change
module.exports = checkPageBounds;
