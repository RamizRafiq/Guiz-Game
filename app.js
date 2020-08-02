
var user=document.getElementById("userName")
var main=document.getElementById("Main");
var getName=document.getElementById("input")
var scoreCard=document.getElementById("scoreCard")
var secondsFunc;

var sec=30;

var totalScore=0;

window.onload=function (){  
scoreCard.classList.add("hide")

    user.classList.add("user")

main.style.display="none"
    // main.classList.add('hide')
    // main.children[0].classList.add("hide")
// main.children[0].children[0].classList.add("hide")
// main.children[0].children[1].classList.add("hide")
// main.children[1].classList.add("hide")
// console.log(main.children)
}


function start(){
    if((getName.value)!==''){

    user.children[0].classList.add("hide")
    user.children[1].classList.add("hide")
    user.classList.remove("user")
    // main.classList.remove("hide")
    console.log(user)
    main.style.display=""
    showQuestion(0);
    
   
       }   
}



var Question=document.getElementById('Question');
var option1=document.getElementById("option1")
var option2=document.getElementById("option2")
var option3=document.getElementById("option3")
var option4=document.getElementById("option4")

let options=document.querySelectorAll("#options p");


var questions=[
    { question:"The term 'Computer' is derived from? ",
    answer:{
         a:"Latin",
         b:"German",
         c:"French",
         d:"Arabic"
        },
        correct:"Latin"
    },

    { question:"Who is the father of Computer? ",
    answer:{
         a:"Allen Turing",
         b:"Charles Babbage",
         c:"Simur Cray",
         d:"Augusta Adaming"
        },
        correct:"Charles Babbage"
    },
    { question:"The basic operations performed by a computer are? ",
    answer:{
         a:"Arithematic operation",
         b:"Logical operation",
         c:"Storage and relative",
         d:"All of the above"
        },
        correct:"All of the above"
    },
    { question:"Who is the father of Internet? ",
    answer:{
         a:"Charles Babbage",
         b:"Vint Cerf",
         c:"Dennis Riche",
         d:"Martin Cooper"
        },
        correct:"Vint Cerf"
    },
    { question:"If a computer has more than one processor then it is known as____? ",
    answer:{
         a:"Uni-process",
         b:"Multiprocessor",
         c:"Multi-threaded",
         d:"Multi-programming"
        },
        correct:"Multiprocessor"
    },
    { question:"A light sensitive device that converts drawing, printed text or other images into digital form is___________?",
    answer:{
         a:"keyboard",
         b:"Scanner",
         c:"OMR",
         d:"None of these"
        },
        correct:"Scanner"
    },
    { question:"WWW stands for___________?",
    answer:{
         a:"World Whole Web",
         b:"Wide World Web",
         c:"Web World Wide",
         d:"World Wide Web"
        },
        correct:"World Wide Web"
    },
    { question:"A collection of system programs that controls and co-ordinates the overall operations of a computer system is called____________?",
    answer:{
         a:"System software",
         b:"Operating system",
         c:" Utility program",
         d:"Device driver"
        },
        correct:"Operating system"
    },
    { question:"What type of operating system MS-DOS is?",
    answer:{
         a:"Menu Driven Interface",
         b:"Command Line Interface",
         c:"Graphical User Interface",
         d:"Multitasking"
        },
        correct:"Command Line Interface"
    }
    ,{ question:"Which technology is used in compact disks?",
    answer:{
         a:"Mechanical",
         b:"Electrical",
         c:"Electro Magnetic",
         d:"Laser"
        },
        correct:"Laser"
    }




]
var questionCount=0;
var nextMove=0;

function next(){



if(nextMove>9){
    validate();
    main.style.display="none"
    score(totalScore);
} else{
    validate();
    questionCount++;
console.log(questionCount)
     showQuestion(questionCount);
    removeActiveclass()
   
    nextMove++;

if(nextMove==9){
    nextMove++
}

    } 
    



}


// console.log(questions[0].question)

function showQuestion(e){
    
    Question.innerHTML="Q"+(e+1)+": "+questions[e].question
    option1.innerHTML="A: "+questions[e].answer.a
    option2.innerHTML="B: "+questions[e].answer.b
    option3.innerHTML="C: "+questions[e].answer.c
    option4.innerHTML="D: "+questions[e].answer.d
    startSecs()
    


}



function putActiveclass(e){
    removeActiveclass()
e.classList.add("active")
}


function removeActiveclass(){
for(let i=0;i<options.length;i++){
    options[i].classList.remove("active")
}

}

function validate(){
    var active=document.getElementsByClassName("active");

    if(active[0].innerHTML.slice(3)===questions[questionCount].correct){
        totalScore+=1;
console.log(totalScore)
    }


}


function score(a){

    scoreCard.classList.remove("hide")
 scoreCard=document.getElementById('scoreCard')
var img=document.getElementById("scoreImg")

if(a==10){
    img.src="bunglow.png"
    scoreCard.children[1].children[0].classList.add('green')
    scoreCard.children[1].children[0].innerHTML="Congratulations! You win"
    scoreCard.children[2].children[0].innerHTML=a+" out of "+(questionCount+1);

} else if(a==9){

    img.src="car.png"
    scoreCard.children[1].children[0].classList.add('green')
    scoreCard.children[1].children[0].innerHTML="Congratulations! You win"
    scoreCard.children[2].children[0].innerHTML=a+" out of "+(questionCount+1);

}else if(a==8){
    img.src="trophy1.png"
    scoreCard.children[1].children[0].classList.add('green')
    scoreCard.children[1].children[0].innerHTML="Congratulations! You win"
    scoreCard.children[2].children[0].innerHTML=a+" out of "+(questionCount+1);

} else{
    img.src="Try.png"
    scoreCard.children[1].children[0].classList.add('red')
    scoreCard.children[1].children[0].innerHTML="You lost!"
    scoreCard.children[2].children[0].innerHTML=a+" out of "+(questionCount+1);

}




}









// Time Interval


var seconds=document.getElementById("seconds")




function decreaseSec(){
    sec--
    if(sec>=10&&sec<30){
    seconds.innerHTML=sec

   
}
      if(sec>0&&sec<10){

        seconds.innerHTML="0"+sec
        }
if(sec<1){
    var next=document.getElementById("next")
    next.disabled=true


    seconds.classList.remove("red")
    sec=0

    seconds.innerHTML=sec+"0"
}

}

secondsFunc=setInterval(decreaseSec, 1000);

seconds.innerHTML=30;

function startSecs(){
    sec=0
    restartSecs()
}

function restartSecs(){
    sec=30
secondsFunc
seconds.innerHTML=sec;
}
