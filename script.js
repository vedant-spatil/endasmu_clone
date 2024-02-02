// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

// 4 pillars of DOM
//1. Selection of Element - document.getElementById() / document.getElementsByClassName() / document.querySelector() /  document.querySelectorAll()
//2. Changing HTML        - a.innerHTML / a.innerText / a.textContent
//3. Changing CSS         - a.style.fontSize
//4. Event Listner        - a.addEventListener("mouseout",function(){})

var a = document.querySelector("#learn-more h4 a")  
    a.addEventListener("mouseover",function (){       
    a.textContent="༼ つ ◕_◕ ༽つ"                  
    a.style.color="lightblue"                     
    a.style.fontSize="25px"
})

a.addEventListener("mouseout",function(){
    a.textContent="Learn More"
    a.style.color="aliceblue"
    a.style.fontSize="18px"
})

// Arrays ---> let array=[1,2,3]
// array.push(5) / array.unshift(5)
// array.pop() / array.shift()

// Template String ---> use ` and use ${element} for each element
// Eg : list+=`<li>${leads[i]}</li>`

// Objects in Js :-
// const person = {
//     firstName: "John",
//     lastName: "Doe"
//   };