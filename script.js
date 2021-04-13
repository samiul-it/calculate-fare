function farePrint(fare){
    document.write("<center>");
    document.write("<h1>Calculated Fare</h1>");
    document.write("</center>");
}

function calculateFare(){

    var fareConst;
    var fare;
    var distance=document.calc.distance.value;
    var round=document.calc.round.value;
    var day=document.calc.day.value;
    var toll=document.calc.toll.value;
    toll=parseInt(toll)
    if(isNaN(toll)){
        toll=0;
    }
    else {
        toll=toll;
    }
    
    distance=distance*2;
    function fare(fareConst_test){
        if(round=='yes'){
            
            fare=distance*fareConst_test;
            fare=fare+1000;
            fare=(fare+toll);
            console.log("TOLL:"+toll);
            console.log("Round Trip Fare:"+fare)
            farePrint(fare);
            document.write("<center>");
            document.write("AI BoT Factor:XAla692ck/"+fareConst_test+"-xpou5xc");
            document.write("<table border='3'>")
            document.write("<tr> <td> <h2>Total Distance <td><h2>"+distance+"K/M</td></h2></h2></td><tr> <td> <h2> Fare:<td><h2>"+(fare-1000-toll)+" Tk/-</td></h2></> </td></tr>");
            document.write("<tr><td><h2>Toll:<td><h2>"+toll+"Tk/-</td></h2></></td></tr>");
            document.write("<tr><td><h2>Round Trip Charge:<td><h2>1000Tk/-</td></h2></></td></tr>");
            document.write("<tr><td><h2>Fare Total:<td><h2>"+fare+"Tk/-</td></h2></></td></tr>");
            
            
            document.write(" </table>");
            
            
            document.write("</center>");
        }
        else{
            
            fare=distance*fareConst_test;
            fare=fare+toll;
            console.log("TOLL:"+toll);
            console.log("Fare One Way:"+fare);
            farePrint(fare);
            document.write("<center>");
            document.write("AI BoT Factor:fseRAc2ck-"+fareConst_test+"K55FsacW");
            document.write("<table border='3'>")
            document.write("<tr> <td> <h2>Total Distance <td><h2>"+distance+"K/M</td></h2></h2></td><tr> <td> <h2> Fare<td><h2>"+(fare-toll)+" Tk/-</td></h2></> </td></tr>");
            document.write("<tr><td><h2>Toll<td><h2>"+toll+"Tk/-</td></h2></></td></tr>");
            document.write("<tr><td><h2>Fare Total<td><h2>"+fare+"Tk/-</td></h2></></td></tr>");
            document.write(" </table>");
            document.write("</center>");
        }
    }   
    
    if(day=='yes'){
        fare(25);
    }
    else{
        fare(22);
        
    }
    
    console.log(distance);
    //farePrint(fare);
    //document.write(distance);
    //alert(fare);
    console.log(round);
    // document.write(round);
    

    
}