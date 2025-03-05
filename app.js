const btnNotuser = document.querySelector("#isnot")
const btnuser = document.querySelector("#is")
let auth = document.querySelector(".auth")
let cont = document.querySelector(".container")
var count =0;

 btnNotuser.addEventListener("click",function(){
    auth.innerHTML=`            <h3 class="Title">Authentication Failed</h3><hr>
            <p>Only user can enter</p>
            <input type="button" class="authBtn" value="Try again" id="Try">`
    let trybtn=auth.querySelector("#Try")
    trybtn.addEventListener("click",function(){
        window.location.reload();
    })

 })
 btnuser.addEventListener("click",function(){
    cont.innerHTML=`<div class="cards-div">
        <audio id="birthdayAudio" style="display: none">
        <source src="videoplayback.mp3" type="audio/mp3">
        Your browser does not support the audio element.
    </audio>
         <div class="cards">
          <h1>HAPPY BIRTHDAY!!</h1><hr>
            <p>A little surprise awaits ahead...<br>(Make sure your device volume is up..)<br>Click the following button...</p>
            <input type="button" value="start" class="forward">

    </div>
    <div class="cards sub" style="z-index:999;">
           <h2>💖 Happy Birthday, My Life! 💖</h2>
    <hr>
        <p>You are the best thing that ever happened to me. I’m so grateful for you every day! ❤️</p>
            <input type="button" value="next" class="forward">
            <input type="button" value="back" class="backward">

        </div>
         <div class="cards sub" style="z-index:998;">
          <h2>🌟 Wishing You the Best! 🌟</h2>
    <hr>
    <p>May your dreams shine as bright as you do, and may happiness follow you everywhere. ✨</p>
            <input type="button" value="next" class="forward">
            <input type="button" value="back" class="backward">
        </div>
         <div class="cards sub style="z-index:997;" >
              <h2> To Many More Beautiful Moments! </h2>
    <hr>
            <p>Every moment with you is special, and I can't wait to make many more memories together. 💕</p>
            <input type="button" value="back" class="backward">
    
        </div>
    
    
    </div>`

    let cards = cont.querySelectorAll(".cards")
    let aud = cont.querySelector("#birthdayAudio")
    cards.forEach((card,index)=>{
        aud.volume = 0.3
        aud.play()
        aud.loop = true
        // aud.addEventListener("ended",function(){
        //     this.currntTime=0
        //     aud.play()
        // })
        let backward = card?.querySelector(".backward")
        let forwardBtn = card?.querySelector(".forward")
        // console.log(cards[index])
        if(index == 0){
            card.style.zIndex=1000;
            // backward.classList.add("hide")
        }

        // const prevCard = card?.previousElementSibling
        forwardBtn?.addEventListener("click",function(){

            card.classList.add("translate")
            if(card.classList.contains("antitrans")){
                card.classList.remove("antitrans")
            }

        })
        count++
        backward?.addEventListener('click',function(){
            if(cards[index-1]) {
                cards[index-1].classList.add("antitrans")
           if(cards[index-1].classList.contains("translate")){
            cards[index-1].classList.remove("translate")
        }


            }
        })
    })

 })
 function conf(){
    confetti({
        particleCount: 500,  // Number of confetti pieces
        spread: 100,         // How far they scatter
        origin: { y: 0.6 }  // Adjusts where confetti starts (lower is better)
    });
 }

