function preload(){

}

function setup(){
canvas = createCanvas(640,480);
canvas.center();

video = createCapture(VIDEO);
video.hide(); 


}

function draw(){
image(video, 220, 140, 220,200);
fill("red");

circle(50,50,80);
circle(590,50,80);
circle(50,420,80);
circle(590,420,80);

fill("green");
rect(90, 30, 460, 50)
rect(90, 400, 460, 50)
rect(25, 90, 50, 290)
rect(565, 90, 50, 290)
}

function take_snapshot(){
save("img.png");
}


