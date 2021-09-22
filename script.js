//a function that'll show an alert when a city is clicked

document.getElementById("city").addEventListener("click", function() {
    alert("Loading weather report...");
});

document.getElementById("city1").addEventListener("click", function() {
    alert("Loading weather report...");
});

document.getElementById("city2").addEventListener("click", function() {
    alert("Loading weather report...");
});

//this function will remove the cookie policy

document.getElementById("cookie-btn").addEventListener("click", function() {
    var removeButton = document.getElementById("cookie-section");
    removeButton.classList.toggle("hidden");
});


//this function will convert all the degree options when clicked

function changeDegree() {
    var selectBox = document.getElementById("select-box");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    document.getElementById("first").innerHTML = document.getElementById("first").innerHTML * 1.8;
    document.getElementById("second").innerHTML = document.getElementById("second").innerHTML * 1.8;
    document.getElementById("third").innerHTML = document.getElementById("third").innerHTML * 1.8;
    document.getElementById("fourth").innerHTML = document.getElementById("fourth").innerHTML * 1.8;
    
}
    
function changeOther() {
    var selectBox = document.getElementById("select-box");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    document.getElementById("fifth").innerHTML = document.getElementById("fifth").innerHTML * 1.8;
    document.getElementById("sixth").innerHTML = document.getElementById("sixth").innerHTML * 1.8;
    document.getElementById("seventh").innerHTML = document.getElementById("seventh").innerHTML * 1.8;
    document.getElementById("eight").innerHTML = document.getElementById("eight").innerHTML * 1.8;
    
}
    


