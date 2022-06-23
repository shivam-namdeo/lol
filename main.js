noseX=0;
noseY=0;

function preload()
{

clone=loadImage('https://i.postimg.cc/3x3QzSGq/m.png')

}

function setup()



{

    canvas=createCanvas(300,300);

    canvas.center();

    video=createCapture(VIDEO);

    video.size(300,300);

    video.hide();

    posenet=ml5.poseNet(video,modleloded);


    posenet.on('pose',gotpose);
}

function snap()

{

save('snap.png');

}


function modleloded()

{

console.log('posenetisstart')

}


function draw()

{


image (video,0,0,300,300);

image (clone,noseX,noseY,30,30);

}

function gotpose(results)


{

if(results.length>0)
{

    console.log(results);


noseX=results[0].pose.nose.x-15;

noseY=results[0].pose.nose.y-10;

    console.log("nosex="+noseX);

    console.log("nosey="+noseY);

}


}