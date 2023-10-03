self.addEventListener('message', (msg) => {
    console.log(msg)

    if(msg.data === 'start'){
        console.log("Worker Starts");
        for(let i = 0; i<9999999999; i++){

        }
        console.log("Worker Ends");
    }
})