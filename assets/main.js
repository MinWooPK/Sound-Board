// Meter los audios en un buttom  y pushearlo 


// const btn = document.getElementById('buttons');

// btn.onclick = () => {

// let audio =

// }


// document.getElementById('alarm').play();

// function addElement() {

// const btn = document.createElement('button');
// const newContent = document.createTextNode(`${id}`)


// btn.appendChild(newContent)
// document.body.appendChild(btn)
// }


// const btn = document.createElement('button');
// const newContent = document.createTextNode('hello')


// btn.appendChild(newContent)
// document.body.appendChild(btn)



// const names = ['alarm', 'clock',' game ',' geese', 'lion' ,'trailer'];
// let sounds = ['/assets/sounds/alarm.wav',"/assets/sounds/clock.wav","/assets/sounds/game.wav","/assets/sounds/geese.wav"
// ,'/assets/sounds/lion.wav','/assets/sounds/trailer.wav'];
// const buttons = document.querySelectorAll("button");


//     for ( i=0 ; i < names.length; i++){

//         const btn = document.createElement('button');
//         btn.setAttribute('id', names[i]);
//         btn.setAttribute('src', sounds[i]);
//         // btn.setAttribute("onclick",)
//         let text = document.createTextNode(names[i]);
//         btn.appendChild(text);
//         document.body.appendChild(btn)

//     }
//     buttons.forEach( button => {
//         button.addEventListener("click", () => {
//       sounds.play();
//         });
//  })


 const sounds = ['alarm', 'clock','game','geese', 'lion' ,'trailer'];


 sounds.forEach((sound) => {
    const btn = document.createElement("button");
    btn.classList.add("btn");
  
    btn.innerText = sound;
  
    btn.addEventListener("click", () => {
      
  
      document.getElementById(sound).play();
    });
    document.getElementById("buttons").appendChild(btn);
  });
  
// }

// function play() {
//     var audio = document.getElementById(names[i]);
//     audio.play();
//   }
//Botones infinitos printBtn(e).target

