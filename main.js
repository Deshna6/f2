lipX=0;
lipY=0;

//filter = "https://i.postimg.cc/PxFvYgkv/l1.png";
function preload(){
  lipstick = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}


function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);

    video.size(300,300);
    video.hide();
  
  
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized!');
  }
  
  function gotPoses(results){

    if(results.length>0)
    {
        console.log(results);
        lipX = results[0].pose.nose.x - 17;
        lipY = results[0].pose.nose.y + 15;
        console.log("lipX = " + results[0].pose.nose.x);
        console.log("lipY = " + results[0].pose.nose.y);
      
       
    }
  }


  function draw(){
    image(video,0,0,300,300);
    image(lipstick,lipX,lipY,35,25);
}

function take_snapshot(){
save('myFilterImage.png');
}
