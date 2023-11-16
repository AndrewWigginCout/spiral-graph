const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

// Default color is black I make the canvas black, 
// then let the spiral paint in white because it's 
// easier to see.
ctx.fillRect(0,0,canvasWidth,canvasHeight);
ctx.fillStyle = 'white';
//ctx.fillRect(0,0,canvasWidth,canvasHeight);

const x_of = (tuple) => tuple[0];
const y_of = (tuple) => tuple[1];
const make_point = (x,y) => {
  return [x,y];
}
function draw_point(x,y) {
  ctx.fillRect(x,y,1,1);
  // ctx.fillRect(p[0],p[1],1,1)
  // Also works.
  // definition must be draw_point(p)
}
function draw_connected(iterations) {
  return function(curve) {
    for (let i=0;i<iterations;i++) {
      let t = i/iterations;
      // console.log('t=',t)
      // The drawer function feeds the curve function a series of
      // incremental steps between [0,1)

      // The curve function takes that parametric parameter (t) and returns a point

      // I was pulling my hair out trying to figure this bit out.
      // Since curve returns a tuple, 
      // It is necessary to either spread the return value or perhaps rewrite the draw_point function
      draw_point(...curve(t));
    }
  }
}
function spiral(pt, length, scaleFactor) {
  return t=>
    make_point(
      x_of(pt)+t*length*Math.cos(t*length)*scaleFactor,
      y_of(pt)+t*length*Math.sin(t*length)*scaleFactor
    );
}

/*
// This is a more verbose way of drawing the spiral.
// It's the same instructions, just destructured.
// A "callback" function is just a name for a function that gets
// passed in as a parameter. Callback functions get called back
// somewhere in the logic of the outer function.

const callback = spiral(make_point(950,450),8*Math.PI,17);
const iterator_function = draw_connected(8000);
iterator_function(callback);

*/

// draw_connected renders. From the name you can infer that it draws N times
// Give me function, I'll run it N times.
draw_connected(8000)(spiral(make_point(950,450),8*Math.PI,17));