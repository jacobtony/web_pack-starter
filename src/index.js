import './style.scss';
import facebook from './facebook.svg';
import Worker from '../workers/app.worker';
import generateJoke from './generateJoke';

const worker = new Worker();
document.getElementById("myImage").src = facebook;
generateJoke();
let counter = 0;
setInterval(()=>{
    document.getElementById("counter").innerText = counter++;
    if(counter === 9){
        console.log(counter);
        worker.postMessage('start');
    }
}, 500);


fetch('statsAsset.json').then((res) => res.json()).then(result => {document.getElementById('chunkSize').innerHTML = result.chunks[0].size})


