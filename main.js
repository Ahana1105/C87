var canvas = new fabric.Canvas('myCanvas');
var player_x = 10;
var player_y = 10;
var block_width = 30;
var block_height = 30;
var player_object = "";
var block_object = "";

function player_update() {
fabric.Image.fromURL("player.png", function(Img){
 player_object = Img;
 player_object.scaleToWidth(150);
 player_object.scaleToHeight(140);
 player_object.set({top:player_y , left:player_x});
 canvas.add(player_object);
});
}

function new_Image(get_Image) {
    fabric.Image.fromURL(get_Image, function(Img){
     block_object = Img;
     block_object.scaleToWidth(block_width);
     block_object.scaleToHeight(block_height);
     block_object.set({top:player_y , left:player_x});
     canvas.add(block_object);
    });
    }

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
keypressed = e.keyCode;
console.log(e);

if (keypressed == '84') {
    new_Image('trunk.jpg');
    console.log("t");
}

if (keypressed == '68') {
    new_Image('dark_green.png');
    console.log("d");
}

if (keypressed == '76') {
    new_Image('light_green.png');
    console.log("l");
}

if (keypressed == '71') {
    new_Image('ground.png');
    console.log("g");
}

if (keypressed == '87') {
    new_Image('wall.jpg');
    console.log("w");
}

if (keypressed == '89') {
    new_Image('yello_Wall.png');
    console.log("y");
}

if (keypressed == '82') {
    new_Image('roof.jpg');
    console.log("r");
}

if (keypressed == '67') {
    new_Image('unique.png');
    console.log("c");
}

if (e.shiftKey == true && keypressed == '77') {
    console.log('Shiftkey + m');

    block_height= block_height - 10;
    block_width= block_width - 10;

    document.getElementById("current_width").innerHTML = block_width;
    document.getElementById("current_height").innerHTML = block_height;
} 

if (e.shiftKey == true && keypressed == '80') {
    console.log('Shiftkey + p');

    block_width = block_width + 10;
    block_height = block_height + 10;

    document.getElementById("current_width").innerHTML = block_width;
    document.getElementById("current_height").innerHTML = block_height;
}


if (keypressed == '38') {
    console.log('up');
    up();
}

if (keypressed == '40') {
    console.log('down');
    down();
}

if (keypressed == '37') {
    console.log('left');
    left();
}

if (keypressed == '39') {
    console.log('right');
    right();
}
}