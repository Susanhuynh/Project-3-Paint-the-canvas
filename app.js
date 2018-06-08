var paint = document.querySelectorAll(".box");

Array.from(paint).forEach(function(element){
    element.addEventListener("click", function(){
        var BgColor = element.style.backgroundColor;
        var smallBox = document.querySelectorAll(".small-box");
        Array.from(smallBox).forEach(function(e){
            e.addEventListener("click", function(){
                if (BgColor === "blue"){
                    e.style.backgroundColor = "blue";
                } else if(BgColor === "orangered"){
                    e.style.backgroundColor = "orangered";
                } else if (BgColor === "yellow") {
                    e.style.backgroundColor = "yellow";
                } else {
                    e.style.backgroundColor = "green";
                }
            })
        })
    })
})

var button = document.querySelector("button");
var smallBox = document.querySelectorAll(".small-box");

button.addEventListener("click", function(){
    Array.from(smallBox).forEach(function(el){
        el.style.backgroundColor = "white";
    })
})

