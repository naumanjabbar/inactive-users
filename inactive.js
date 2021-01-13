const user = {
    name: "Qasim Asad",
    age: "25",
    city: "san francisco",
    lastActivity: new Date().getTime()
}

const inactiveFirstStage = () => {
    console.log("User has been inactive for the past 1-2 minutes");
}

const inactiveSecondStage = () => {
    console.log("User has been inactive for the past 3-4 minutes");
}

const inactiveThirdStage = () => {
    console.log("User has been inactive for the past 5-6 minutes");
}


// this is the main method that acts like a worker and runs every 1 minute
let counter = 0
setInterval(function(){
    counter++
    if(counter <= 2){
        inactiveFirstStage ()
    } else if(counter<= 4){
        inactiveSecondStage()
    } else if(counter <= 6){
        inactiveThirdStage()
    }
    else {
        counter = 0;
    }
}, 10000);

