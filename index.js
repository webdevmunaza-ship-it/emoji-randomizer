
function ChangeColor(){
let imagebg=[
    " glass-removebg-preview.png",
    "happy-removebg-preview.png", 
    "hug-removebg-preview.png" ,
    "think-removebg-preview.png" 
]
 
let randombg=imagebg[(Math.floor(Math.random()*imagebg.length))]
document.body.style.backgroundImage=`url(${randombg})`
 
let emojis=document.querySelectorAll('.emoji img');
let Colors=["rgba(255, 0, 0)",    
    "rgba(0, 128, 0)",    
    "rgba(128, 0, 128)", 
    "rgba(255, 165, 0)",  
    "rgba(255, 192, 203)",
    "rgba(0, 191, 255)",  
    "rgba(173, 255, 47)"  
  ];

//Random Conatiner color
let randomBoxColor = Colors[Math.floor(Math.random() * Colors.length)];
  document.querySelector(".container").style.backgroundColor = randomBoxColor;

  // Random button color
  let randomBtnColor = Colors[Math.floor(Math.random() * Colors.length)];
  document.querySelector("button").style.backgroundColor = randomBtnColor;

emojis.forEach((emoji,i)=>{
let randomIndex=Math.floor(Math.random() *Colors.length)
let randomcolors=Colors[randomIndex]
emoji.style.backgroundColor=randomcolors;
console.log(`emoji ${i}= ${randomcolors}`)


})
}