// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

// 4 pillars of DOM
//1. Selection of Element 
//2. Changing HTML
//3. Changing CSS
//4. Event Listner

var a = document.querySelector("#learn-more h4 a")  
    a.addEventListener("mouseover",function (){       
    a.textContent="༼ つ ◕_◕ ༽つ"                  
    a.style.color="lightblue"                     
    a.style.fontSize="1.2vw"
})

a.addEventListener("mouseout",function(){
    a.textContent="Learn More"
    a.style.color="aliceblue"
    a.style.fontSize="1vw"
})