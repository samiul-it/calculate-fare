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
    var driver_fee;
    var driver_sal_constant=4.15;
    var fuel_constant=5.15;
    var fuel_expense;
    var car_total_cost;
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
    driver_fee=distance*driver_sal_constant;
    console.log("Driver Fee:"+driver_fee.toFixed(2));
    fuel_expense=fuel_constant*distance;
    
    document.write("<br><center><table border='2'> ");
    document.write("<h2>Cost Index</h2>");
    document.write("<th> Driver Salary:</th><th>"+driver_fee.toFixed(2)+" Tk/- </th>");
    driver_fee=distance*driver_sal_constant;
    console.log("Driver Fee:"+driver_fee.toFixed(2));
    document.write("<th> Approximate Fuel Cost:</th><th>"+fuel_expense.toFixed(2)+" Tk/- </th>");
    car_total_cost=fuel_expense+driver_fee;
    document.write("<th> Total Car Expense:</th><th>"+car_total_cost.toFixed(2)+" Tk/- </th>");
    document.write("</table></center>");
    //farePrint(fare);
    //document.write(distance);
    //alert(fare);
    console.log(round);
    // document.write(round);
    document.write("<br>");
    document.write("<center>");
    document.write("<div class='text-center p-3' style='background-color: rgba(0, 0, 0, 0.2);'>");
    document.write("Fare Calculator v1.03 © 2021 Copyright:");
    document.write("<a class='text-blue' href=''>Samiul Developments</a> </div>");
    document.write("</center>");
    

    
}