//DOM MANIPULATION


//TRAVERSE THE DOM


//PARENT NODE TRAVERSAL

// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);


//  const html = document.documentElement;
//  console.log(html.parentNode);
//  console.log(html.parentElement);



//CHILD NODE TRAVERSAL
// let ul = document.querySelector('ul');
// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// ul.childNodes[1].style.backgroundColor = "blue";

// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);



//SIBLING NODE TRAVERSAL

// let ul = document.querySelector('ul');
// let div = document.querySelector('div');

// // console.log(div.childNodes);

// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);


// EVENT LISTENERS


//element.addeventlisterner("click", funcion);

// const buttonTwo = document.querySelector('.btn-2');
// function alertBtn(){
//     alert('l also love javascript');
// };

// buttonTwo.addEventListener("click",alertBtn);


// //MOUSEOVER
// const newBackgroundColor = document.querySelector('.box-3');

// function changeBgColor(){
//     newBackgroundColor.style.backgroundColor = 'blue';
// };

// newBackgroundColor.addEventListener("mouseover",changeBgColor);


//Reveal Event

// const revealBtn = document.querySelector('.reveal-btn');

// const hiddenContent = document.querySelector('.hidden-content');


// function revealContent(){
//     if (hiddenContent.classList.contains('reveal-btn')) {
        
//         hiddenContent.classList.remove('reveal-btn')

//     } else {
//         hiddenContent.classList.add('reveal-btn')
//     }
// }

// // include event listener
// revealBtn.addEventListener('click', revealContent);


// EVENT PROBAGATION
// window.addEventListener("click", function(){
//     console.log('window');
// }, false);

// document.addEventListener("click", 
// function(){

//         console.log('Document');

// },false);

// document.querySelector(".div2").addEventListener("click", 
//     function(e){
//         // e.stopPropagation()
//             console.log('DIV 2');
    
//     },{once:true});

//     document.querySelector(".div1").addEventListener("click", 
//         function(){
        
//                 console.log('DIV 1');
        
//         },false);

//         document.querySelector(".button").addEventListener("click", 
//             function(e){
            
//                 e.preventDefault()
//                     console.log(e.target.innerText = 'clicked');
            
//             },false);




// EVEN DELEGATION
// it allows users to append a single event listener 
// to a parent element that adds it to all of its present
//and futer descendants that match a selector.

//  document.querySelector('#football').addEventListener ('click', function(e){
//     console.log('football is clicked');
//     const target = e.target;

//     if (target.matches('li')) 
//        {
//         target.style.backgroundColor = 'blue';
        
//     }
    
//  })

//  document.querySelector('#basketball').addEventListener('click',
    
//     function(e){
    
//             console.log('basketball is clicked');
//             const target = e.target;


//             if (target.matches('li')) {
//                 target.style.backgroundColor = 'green';
//             }
    
//     }
//  )

// document.querySelector('#boxing').addEventListener('click', 
   
//    function(e){
   
//          console.log('boxing is clicked');
//          const target = e.target;

//          if (target.matches('li')) {
//             target.style.backgroundColor = ' red';
            
//          }
   
//    }
// )

// document.querySelector('#tennis').addEventListener('click',
//    function(e) {
//       console.log('tennis is clicked');
//       const target = e.target;

//       if (target.matches('li')) {
//          target.style.backgroundColor = 'lightgrey';
//       }
//    }
// )

// document.querySelector('#golf').addEventListener('click',
   
//    function(e){
   
//          console.log('golf is clicked');
//          const target = e.target;

//          if (target.matches('li')) {
//             target.style.backgroundColor = 'orange';
            
//          }
         
   
//    }
// )

 //used the getAttribute to simplfy the codes above through the parent (ul tag) id
// document.querySelector('#sports').addEventListener('click',
   
   // create the event function via getAttribute by the child node id
   // function(e){
   //  console.log(e.target.getAttribute('id')+ ' is clicked');
      
   //  //assigned a constance variable target to evenTarget
   //  const target = e.target;
      
    
    // check if target matches the list items then change the backgoundcolor
//     if (target.matches('li')) {
//       target.style.backgroundColor = 'lightgrey';
//     }

//    }
// )


   // create a new element to list
   // const sports = document.querySelector('#sports');
   // const newSports = document.createElement('li');

   // newSports.innerText = 'rugby';
   // newSports.setAttribute('id','rugby');

   // sports.appendChild(newSports);