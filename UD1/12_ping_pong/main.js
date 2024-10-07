function pingPong() {
    for (let i = 1; i <= 100; i++) {
        if (i % 10 === 0) {
            console.log(`${i} PING`);
        }
        else if (i % 5 === 0) {
            console.log(`${i} PONG`);
        }
        else{
            console.log(i);

        }
    }


    
}


pingPong()
