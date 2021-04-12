// function checkLog(){

//     var username=document.login.username.value;
//     username=username.toLowerCase();
//     //document.write(username);
//     var password=document.login.password.value;
//     password=password.toLowerCase();
//     //document.write(password);
//     if (username== "admin" && password=="admin"){
//         document.write("Log In Succeed");
//     }
// }
    


function farePrint(fare){
    document.write("<center>");
    document.write("<h1>Calculated Fare:"+fare+"</h1>");
    document.write("</center>");
}

function calculateFare(){

    var fareConst;
    var fare;
    var distance=document.calc.distance.value;
    var round=document.calc.round.value;
    var day=document.calc.day.value;
    distance=distance*2;
    function fare(fareConst_test){
        if(round=='yes'){
            
            fare=distance*fareConst_test;
            fare=fare+1000;
            console.log("Round Trip Fare:"+fare)
            farePrint(fare);
            document.write("<center>");
            document.write("<h2>Total Distance:"+distance+"</h2>");
            document.write("<h2>Factor Value:"+fareConst_test+"</h2>");
            document.write("</center>");
        }
        else{
            
            fare=distance*fareConst_test;
            console.log("Fare One Way:"+fare);
            farePrint(fare);
            document.write("<center>");
            document.write("<h2>Total Distance:"+distance+"</h2>");
            document.write("<h2>Factor Value:"+fareConst_test+"</h2>");
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