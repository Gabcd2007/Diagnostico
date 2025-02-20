function starClasification ()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://storage.googleapis.com/tm-model/sv7kJ_MHx/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.log(error);
    }else{
        console.log(results);

        random_number_r= Math.floor(Math.random()*255)+1;
        random_number_g= Math.floor(Math.random()*255)+1;
        random_number_b= Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML="Escucho -" + results[0].label;
        document.getElementById("result_confidence").innerHTML="Presición -" + (results[0].confidence*100).toFixed(2) + " %";
        document.getElementById("result_label").style.color="rgb(" + random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color="rgb(" + random_number_r+","+random_number_g+","+random_number_b+")";

        img= document.getElementById('PulmonSano')
        img2=document.getElementById('PulmonIncha')
        img3=document.getElementById('PulmonNeg')
        img4=document.getElementById('PulmonHongo')
        img3=document.getElementById('PulmonVenoso')
        img4=document.getElementById('PulmonBact')

        if(results[0].label=="Murmullo vesicular"){
            img.src='Pulmon1.gif';
            img2.src= 'Pulmon2.png';
            img3.src= 'Pulmon3.png';
            img4.src= 'Pulmon4.png';
            img5.src= 'Pulmon5.png';
            img6.src= 'Pulmon6.png';
        }else if(results[0].label=="Frote pleural"){
            img.src='Pulmon1.png';
            img2.src= 'Pulmon2.gif';
            img3.src= 'Pulmon3.png';
            img4.src= 'Pulmon4.png';
            img5.src= 'Pulmon5.png';
            img6.src= 'Pulmon6.png';
        }else if(results[0].label=="Crepitaciones"){
            img.src='Pulmon1.png';
            img2.src= 'Pulmon2.png';
            img3.src= 'Pulmon3.gif';
            img4.src= 'Pulmon4.png';
            img5.src= 'Pulmon5.png';
            img6.src= 'Pulmon6.png';
        }else if(results[0].label=="Roncus"){
            img.src='Pulmon1.png';
            img2.src= 'Pulmon2.png';
            img3.src= 'Pulmon3.png';
            img4.src= 'Pulmon4.gif';
            img5.src= 'Pulmon5.png';
            img6.src= 'Pulmon6.png';
        }else if(results[0].label=="Estridor"){
            img.src='Pulmon1.png';
            img2.src= 'Pulmon2.png';
            img3.src= 'Pulmon3.png';
            img4.src= 'Pulmon4.png';
            img5.src= 'Pulmon5.gif';
            img6.src= 'Pulmon6.png';
        }else if(results[0].label=="Sibilancias"){
            img.src='Pulmon1.png';
            img2.src= 'Pulmon2.png';
            img3.src= 'Pulmon3.png';
            img4.src= 'Pulmon4.png';
            img5.src= 'Pulmon5.png';
            img6.src= 'Pulmon6.gif';
        }else{
            img.src='Pulmon1.png';
            img2.src= 'Pulmon2.png';
            img3.src= 'Pulmon3.png';
            img4.src= 'Pulmon4.png';
            img5.src= 'Pulmon5.png';
            img6.src= 'Pulmon6.png';
        }


    }
    

}