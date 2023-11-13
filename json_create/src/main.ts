import { AllQuotes } from "./quote";

async function betoltes(){
  let eredmeny = await fetch('quotes.json');
  let tartalom = await eredmeny.json() as AllQuotes;
  console.log(tartalom.quotes[0].quote);
   //quotes.json betöltése
   /*let promise = fetch('quotes.json');
   promise.then(eredmeny =>{
     if (!eredmeny.ok) {
       throw new Error('Hiba történt a letöltés közben');
     }
     return eredmeny.json();
   }).then(tartalom => {
     console.log(tartalom.quotes[0].quote);
   });
   */
}
async function kamera() {
  let videoElem = document.getElementById('video') as HTMLVideoElement;
  videoElem.srcObject = await navigator.mediaDevices.getUserMedia({video:true});
  videoElem.addEventListener('loadedmetadata',()=>{
videoElem.play();
  });
}
document.addEventListener('DOMContentLoaded',()=>{
 betoltes();
 kamera();
});