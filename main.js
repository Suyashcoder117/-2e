noseX = 0;
noseY = 0;

function preload(){
clownKaNose = loadImage('https://th.bing.com/th/id/R.c304648ebb43b9ea9caa72a4f32bf3d0?rik=F087qn3Lea61vQ&riu=http%3a%2f%2fclipartmag.com%2fimages%2fmustache-png-32.png&ehk=ZN1vfxfKgYYdpawbcucXa68LSWfuktTrMDAQ1sz0ZSA%3d&risl=&pid=ImgRaw&r=0');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is Initialize");
}

function gotPoses(results){
    if(results.length > 0){
     console.log(results);
     noseX = results[0].pose.nose.x;
     noseY = results[0].pose.nose.y;
     console.log("nose x = " + noseX);
     console.log("nose y = " + noseY);
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
  
    
    image(clownKaNose, noseX -15, noseY +10, 40, 40);
}

function capture(){
    save('ClownNose.png');
}