 document.querySelector('#btn-1').addEventListener('click', One);

 function One() {
     document.querySelector('#btn-1').removeEventListener('click', One);

     var input = prompt('Please what is your year birth');
     let answer = (2020 - input) * 365;
     //let result = document.getElementById('flex-1-result');
     //result.innerHTML = answer;
     let ageDay = document.createElement('h3');
     let txt1 = document.createTextNode('Dude you are ' + answer + ' Days old.');
     ageDay.setAttribute('id', 'any');
     ageDay.appendChild(txt1);
     document.querySelector('#flex-1-result').appendChild(ageDay);
 }
 document.querySelector('#btn-2').addEventListener('click', Two);

 function Two() {
     document.querySelector('#btn-2').removeEventListener('click', Two);

     document.getElementById('flex-1-result').remove();
 }

 let Alert = new Three();
 document.querySelector('#btn-3').addEventListener('click', Alert.func);

 function Three() {
     this.func = function() {
         let w = window.innerWidth;
         let h = window.innerHeight;

         let cover = document.getElementById('lay');
         let shwer = document.getElementById('box');

         cover.style.display = "block";
         cover.style.height = h + "px";

         shwer.style.display = "block";
         shwer.style.top = "80px";
         shwer.style.left = (w / 2) - (550 * .5) + "px";

         document.getElementById('head').innerHTML = "NYU ALERT!<img src='images/im.png' alert='logo' onclick='Alert.fun();'>";
         document.getElementById('txt').innerHTML = "Mamamdou Boussouriou diallo Insha Allah you will be fine Promise";

     }
     this.fun = function() {
         document.getElementById('lay').style.display = "none";
         document.getElementById('box').style.display = "none";
     }
 }

 document.querySelector('#btn-4').addEventListener('click', Four);

 function Four() {
     let image = document.createElement('img');
     let popIt = document.getElementById('flex-2-result');
     image.src = "images/t.jpeg";
     popIt.appendChild(image);
 }

 document.querySelector('#btn-5').addEventListener('click', Five);

 function Five() {
     let vid = document.createElement('video');
     let vidRsult = document.getElementById('flex-5-rsult');
     vid.controls = true;
     vid.autoplay = true;
     vid.src = "videos/mamadou.mp4";
     vidRsult.appendChild(vid);
 }
 document.querySelector('#btn-6').addEventListener('click', Six);

 function Six() {
     let aud = document.createElement('audio');
     let audRsult = document.getElementById('flex-6-rsult');
     aud.controls = true;
     aud.autoplay = true;
     aud.src = "sounds/mas.mp3";
     audRsult.appendChild(aud);
 }

 let all_typ = document.getElementsByTagName('button');
 let cpy_all = [];
 for (let i = 0; i < all_typ.length; i++) {
     cpy_all.push(all_typ[i].classList[1]);
 }

 function ChngClr(thKing) {
     if (thKing.value === 'red') {
         goRed();
     } else if (thKing.value === 'green') {
         goGreen();
     } else if (thKing.value === 'reset') {
         goReset();
     } else if (thKing.value === 'random') {
         goRandom();
     }
 }

 function goRed() {
     for (let i = 0; i < all_typ.length; i++) {
         all_typ[i].classList.remove(all_typ[i].classList[1]);
         all_typ[i].classList.add('btn-danger');
     }
 }

 function goGreen() {
     for (let i = 0; i < all_typ.length; i++) {
         all_typ[i].classList.remove(all_typ[i].classList[1]);
         all_typ[i].classList.add('btn-success');
     }
 }

 function goReset() {
     for (let i = 0; i < all_typ.length; i++) {
         all_typ[i].classList.remove(all_typ[i].classList[1]);
         all_typ[i].classList.add(cpy_all[i]);
     }
 }

 function goRandom() {
     let free = ['btn-danger', 'btn-primary', 'btn-warning', 'btn-success', 'btn-dark', 'btn-light', 'btn-secondary'];
     let numbr = Math.floor(Math.random() * 7);
     for (let i = 0; i < all_typ.length; i++) {
         all_typ[i].classList.remove(all_typ[i].classList[1]);
         all_typ[i].classList.add(free[numbr]);
     }
 }

 // Blackjack game
 let gameItems = {
     'you': { 'spanScore': '#y', 'div': '#box-1', 'score': 0 },
     'bot': { 'spanScore': '#b', 'div': '#box-2', 'score': 0 },
     'crd': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],
     'crdMtch': { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'K': 10, 'J': 10, 'Q': 10, 'A': [1, 11] },
     'wins': 0,
     'loss': 0,
     'ties': 0,
     'isStand': false,
     'turOver': false,

 };

 const YOU = gameItems['you'];
 const BOT = gameItems['bot'];

 const hitSound = new Audio('sounds/swish.m4a');
 const winSound = new Audio('sounds/cash.mp3');
 const losSound = new Audio('sounds/aww.mp3');

 document.querySelector('#btn-h').addEventListener('click', funcOne);
 document.querySelector('#btn-s').addEventListener('click', funcTwo);
 document.querySelector('#btn-d').addEventListener('click', delAll);

 function funcOne() {
     if (gameItems['isStand'] === false) {
         let cart = rdCrd();
         shwCrt(cart, YOU);
         updtScr(cart, YOU);
         swScr(YOU);
     }

 }

 function rdCrd() {
     let rdItms = Math.floor(Math.random() * 13);
     return gameItems['crd'][rdItms];
 }

 function shwCrt(cart, activePlayer) {
     if (activePlayer['score'] <= 21) {
         let images = document.createElement('img');
         images.src = `images/${cart}.png`;
         document.querySelector(activePlayer['div']).appendChild(images);
         hitSound.play();
     }

 }

 function delAll() {
     //swRsult(pickWinnr());
     if (gameItems['turOver'] === true) {
         gameItems['isStand'] = false;
         let yurImgs = document.querySelector('#box-1').querySelectorAll('img');
         let btImgs = document.querySelector('#box-2').querySelectorAll('img');
         for (let i = 0; i < yurImgs.length; i++) {
             yurImgs[i].remove();
         }
         for (let i = 0; i < btImgs.length; i++) {
             btImgs[i].remove();
         }
         YOU['score'] = 0;
         BOT['score'] = 0;
         document.querySelector('#y').textContent = 0;
         document.querySelector('#b').textContent = 0;

         document.querySelector('#y').style.color = '#ffffff';
         document.querySelector('#b').style.color = '#ffffff';

         document.querySelector('#mssg').textContent = "Let's play";
         document.querySelector('#mssg').style.color = 'black';

         gameItems['turOver'] = true;
     }

 }

 function updtScr(cart, activePlayer) {
     if (cart === 'A') {
         if (activePlayer['score'] + gameItems['crdMtch'][cart][1] <= 21) {
             activePlayer['score'] += gameItems['crdMtch'][cart][1];
         } else {
             activePlayer['score'] += gameItems['crdMtch'][cart][0];
         }
     } else {
         activePlayer['score'] += gameItems['crdMtch'][cart];
     }

 }

 function swScr(activePlayer) {
     if (activePlayer['score'] > 21) {
         document.querySelector(activePlayer['spanScore']).textContent = 'BOSt!';
         document.querySelector(activePlayer['spanScore']).style.color = 'red';
     } else {
         document.querySelector(activePlayer['spanScore']).textContent = activePlayer['score'];
     }

 }
 // this function does the automations
 function atmtic(s) {
     return new Promise(resolve => setTimeout(resolve, s));
 }

 async function funcTwo() {
     gameItems['isStand'] = true;
     // this while loop do automatons
     while (BOT['score'] < 18 && gameItems['isStand'] === true) {
         let cart = rdCrd();
         shwCrt(cart, BOT);
         updtScr(cart, BOT);
         swScr(BOT);
         // part of the automation
         await atmtic(1000);
     }

     //if (BOT['score'] > 17) {
     gameItems['turOver'] = true;
     let winner = pickWinnr();
     swRsult(winner);
     //}
 }

 function pickWinnr() {
     let winner;
     if (YOU['score'] <= 21) {

         if (YOU['score'] > BOT['score'] || (BOT['score'] > 21)) {
             gameItems['wins']++;
             winner = YOU;

         } else if (YOU['score'] < BOT['score']) {
             winner = BOT;
             gameItems['loss']++;

         } else if (YOU['score'] === BOT['score']) {
             gameItems['ties']++;
         }
     } else if (YOU['score'] > 21 && BOT['score'] <= 21) {
         gameItems['loss']++;
         winner = BOT;

     } else if (YOU['score'] > 21 && BOT['score'] > 21) {
         gameItems['ties']++;
     }
     return winner;
 }

 function swRsult(winner) {
     let message, mssageColor;

     if (gameItems['turOver'] === true) {
         if (winner === YOU) {
             document.querySelector('#w').textContent = gameItems['wins'];
             message = 'You Win!';
             mssageColor = 'green';
             winSound.play();

         } else if (winner === BOT) {
             document.querySelector('#l').textContent = gameItems['loss'];
             message = 'You Lost!';
             mssageColor = 'red';
             losSound.play();

         } else {
             document.querySelector('#t').textContent = gameItems['ties'];
             message = 'you tie';
             mssageColor = 'black';
         }
         document.querySelector('#mssg').textContent = message;
         document.querySelector('#mssg').style.color = mssageColor;

     }

 }