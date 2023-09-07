https://teachablemachine.withgoogle.com/models/NFHrqz3Zl/

Webcam.set({
    height: 300,
width: 350,
image_format: 'png',
png_quality: 90,
});

camera=document.getElementById("camera");
Webcam.attach("#camera");


function take_snapshot(){
    Webcam.snap(function(data_uri){  
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">';
});
}

console.log("ml5 Version: ", ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/NFHrqz3Zl/model.json', Load);

function Load(){
    console.log("model is loaded!");
}



function check(){
    img=document.getElementById("captured_image");
    classifier.classify(img,gotResults);
    speak();
}

function gotResults(error,results){
    if (error){
        console.error(error);
    }
else{
    console.log(results);
    document.getElementById("result_gesture_name").innerHTML=results[0].label;
    
    if (results[0].label=="one"){
        document.getElementById("update_emoji").innerHTML="&#9995"
    }
    if (results[0].label=="one"){
        document.getElementById("update_emoji").innerHTML="&#9995"
    }
    if (results[0].label=="one"){
        document.getElementById("update_emoji").innerHTML="&#9995"
    }
    if (results[0].label=="one"){
        document.getElementById("update_emoji").innerHTML="&#9995"
    }
    if (results[0].label=="one"){
        document.getElementById("update_emoji").innerHTML="&#9995"
    }
}
}

