var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var resultField = document.getElementById('resultField');
var form = document.getElementById('xIsWhatPercentOfY');


form.addEventListener('submit', function(event) {

    if(!numField1.value || !numField2.value){
        alert("Please Enter Values In The Fields");
    }
    else{
        var x = parseFloat(numField1.value);
        var y = parseFloat(numField2.value);

        var result = x / y;
        var percent = result * 100;

        resultField.innerHTML = "Answer: " + percent + "%";  
        event.preventDefault(); // Dont refresh the page otherwise by clicking submit button the page will be refreshed      
    }
    
});
