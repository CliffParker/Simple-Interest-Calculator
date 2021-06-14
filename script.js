function Output_funtion () {

    var P = new Number(document.getElementById("Amount").value);

    var IR = new Number(document.getElementById("Interest_Rate").value);

    var T = new Number(document.getElementById("Years").value);

    var Am = P * (IR*T/100);

    var D = new Date().getFullYear()+T;
    
    document.getElementById("Output").innerHTML = 'If you deposit ' + P + ',' +
     '<br> at an interest rate of ' + IR + '%.' +
       '<br> You will  receive an amount of ' + Am + ',' +
        '<br> in the year ' + D    ;

}


