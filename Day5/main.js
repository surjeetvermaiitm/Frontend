//diff btw load and DOMContentLoaded

document.addEventListener("DOMContentLoaded",function(){//load
    function handleMouseover(event){
        console.log(event);
    }
    
    document.getElementById("start").addEventListener("click",function (){
        document.addEventListener("mouseover",handleMouseover);
    });
    document.getElementById("stop").addEventListener("click",function (){
        document.removeEventListener("mouseover",handleMouseover);
    });
    
    document.addEventListener("keypress",function(e){
        console.log("keypress");
        console.log(e.key);
        if(e.key==2){
            e.preventDefault();
        }
    })
    document.addEventListener("keydown",function(e){
        console.log("keydown");
        console.log(e.key);
        if(e.key==2){
            e.preventDefault();
        }
    })
    document.addEventListener("keyup",function(e){
        console.log("keyup");
        console.log(e.key);
        if(e.key==2){
            e.preventDefault();
        }
    })
    document.getElementById("username").addEventListener("focus",function(event){
        console.log("focus event happened");
    })
    document.getElementById("username").addEventListener("blur",function(event){
        console.log("blur event happened");
    })
    
    //events are captured
    //event bubbling from child to parent
    document.querySelector(".parent").addEventListener("click",function(){
        console.log("parent clicked")
    },true)
    document.querySelector(".child").addEventListener("click",function(){
        console.log("child clicked")
    },true)
    document.getElementById("subchild").addEventListener(("click"),function(event){
        console.log("subchild2 clicked")
        //event.stopPropagation();//stop the event propagation
    },true)
})

function handClick(){
    const name=prompt("Enter your name");
    alert("You have clicked the button "+name);
}

//document.getElementById("clickme").onclick=handClick;

//recommended way

//document.getElementById("clickme").addEventListener("click",handClick);

// document.getElementById("clickme").addEventListener("click",function (){
//     const name=prompt("Enter your name");
//     alert("You have clicked the button "+name);
// });

// function handleMouseover(event){
//     console.log(event);
// }

// document.getElementById("start").addEventListener("click",function (){
//     document.addEventListener("mouseover",handleMouseover);
// });
// document.getElementById("stop").addEventListener("click",function (){
//     document.removeEventListener("mouseover",handleMouseover);
// });

// document.addEventListener("keypress",function(e){
//     console.log("keypress");
//     console.log(e.key);
//     if(e.key==2){
//         e.preventDefault();
//     }
// })
// document.addEventListener("keydown",function(e){
//     console.log("keydown");
//     console.log(e.key);
//     if(e.key==2){
//         e.preventDefault();
//     }
// })
// document.addEventListener("keyup",function(e){
//     console.log("keyup");
//     console.log(e.key);
//     if(e.key==2){
//         e.preventDefault();
//     }
// })
// document.getElementById("username").addEventListener("focus",function(event){
//     console.log("focus event happened");
// })
// document.getElementById("username").addEventListener("blur",function(event){
//     console.log("blur event happened");
// })

// //events are captured
// //event bubbling from child to parent
// document.querySelector(".parent").addEventListener("click",function(){
//     console.log("parent clicked")
// },true)
// document.querySelector(".child").addEventListener("click",function(){
//     console.log("child clicked")
// },true)
// document.getElementById("subchild").addEventListener(("click"),function(event){
//     console.log("subchild2 clicked")
//     //event.stopPropagation();//stop the event propagation
// },true)