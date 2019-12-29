//part_one : receive CANVAS by ID
var canvas = document.getElementById('canvas_one');
var gl = canvas.getContext('experimental-webgl');


//part_two : vertices , make a buffer , bin an ARRAY_BUFFER........

var vertices = [ 1.0,-0.5,0.0,
                 1.0,0.0,-0.5,
                 0.0,0.0,0.0,


                ];

var vertex_buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
gl.bufferData(gl['ARRAY_BUFFER'], new Float32Array(vertices), gl.STATIC_DRAW);


//part_three : make shader , compil ......

var vertCode =
    'attribute vec2 coordinates;' +
    'void main(void) {' + ' gl_Position = vec4(coordinates,0.0 , 1.0);' + '}';

var vertShader = gl.createShader(gl.VERTEX_SHADER);

gl.shaderSource(vertShader, vertCode);

//compile shader
gl.compileShader(vertShader);

var fragCode = 'void main(void) {' + 'gl_FragColor = vec4(0, 0 , 0 , 0.0);' + '}';

var fragShader = gl.createShader(gl.FRAGMENT_SHADER);

gl.shaderSource(fragShader, fragCode);

gl.compileShader(fragShader);

var shaderProgram = gl.createProgram();

gl.attachShader(shaderProgram, vertShader);

gl.attachShader(shaderProgram, fragShader);

// Linking programs
gl.linkProgram(shaderProgram);

gl.useProgram(shaderProgram);

//part_four : bind shader to buffer....


gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);

var coord = gl.getAttribLocation(shaderProgram, "coordinates");

gl.vertexAttribPointer(coord, 2, gl.FLOAT, false, 0.5, 0);

gl.enableVertexAttribArray(coord);



//part_five : background color
gl.clearColor(0, 0, 255, 1);
gl.clear(gl.COLOR_BUFFER_BIT);



//location
gl.viewport(-77,-55 ,canvas.width,canvas.height);




// Draw the triangle
gl.drawArrays(gl.TRIANGLES, 0, 3);












