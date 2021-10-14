function swimmingRecord(input) {

    let recordInSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeInSecondsForOneMeter = Number(input[2]);

    let secondsNeeded = distanceInMeters * timeInSecondsForOneMeter
    let resistanceTime = Math.floor(distanceInMeters / 15) * 12.5;
    let totalTime = secondsNeeded + resistanceTime;

    if (totalTime < recordInSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
    } 

    if (totalTime>= recordInSeconds) {
        console.log(`No, he failed! He was ${(totalTime - recordInSeconds).toFixed(2)} seconds slower.`)
    }

}
swimmingRecord(["10464","1500","20"])




 