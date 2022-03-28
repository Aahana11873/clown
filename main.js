noseX=0;
noseY=0;
function preload(){
    mustache=loadImage('mustache.png');
    

}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function gotPoses(results){
if(results.length > 0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
}
}
function modelLoaded(){
    console.log("poseNet is initialised");
}
function draw(){
    image(video,0,0,300,300);
   // fill(0,0,255);
   // stroke(255,0,0);
   // circle(noseX+10,noseY+20,25);
   image(mustache,noseX-20,noseY,80,35)
}
function take_snapshot(){
    save('Clownnose.png');
}