prediction_1="";
prediction_2="";
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality: 90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="img_1">';
    });
}
function speak(){
    var synth=window.speechSynthesis;
    speak1="The first prediction is: "+ prediction_1;
    speak2="And the second prediction is: "+prediction_2;
    var utterThis=new SpeechSynthesisUtterance(speak1+speak2);
    synth.speak(utterThis);
}
console.log('ml5version: ', ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/klvjXY2q1/model.json', modelLoaded)
function modelLoaded(){
    console.log("Model Loaded!");
}
function check(){
    img=document.getElementById("img_1");
    classifier.classify(img, gotResults)
}
function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
       console.log(results);
       document.getElementById("result_emotion_name").innerHTML=results[0].label;
       document.getElementById("result_emotion_name2").innerHTML=results[1].label;
       prediction_1=results[0].label;
       prediction_2=results[1].label;
       speak();
       if(results[0].label=="Happiness"){
           document.getElementById("update_emoji").innerHTML="&#128512;";
       }
       if(results[0].label=="Sadness"){
        document.getElementById("update_emoji").innerHTML="&#128532;";
    }
    if(results[0].label=="Anger"){
        document.getElementById("update_emoji").innerHTML="&#128544;";
    }
    if(results[0].label=="Surprise"){
        document.getElementById("update_emoji").innerHTML="&#128559;";
    }
    if(results[0].label=="Fear"){
        document.getElementById("update_emoji").innerHTML="&#128561;";
    }
    if(results[0].label=="Disgust"){
        document.getElementById("update_emoji").innerHTML="&#128529;";
    }
    if(results[1].label=="Happiness"){
        document.getElementById("update_emoji2").innerHTML="&#128512;";
    }
    if(results[1].label=="Sadness"){
     document.getElementById("update_emoji2").innerHTML="&#128532;";
 }
 if(results[1].label=="Anger"){
     document.getElementById("update_emoji2").innerHTML="&#128544;";
 }
 if(results[1].label=="Surprise"){
     document.getElementById("update_emoji2").innerHTML="&#128559;";
 }
 if(results[1].label=="Fear"){
     document.getElementById("update_emoji2").innerHTML="&#128561;";
 }
 if(results[1].label=="Disgust"){
     document.getElementById("update_emoji2").innerHTML="&#128529;";
 }
    }
}