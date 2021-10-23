function onTimeForExam(input) {
    let hoursExam = Number(input[0]);
    let minExam = Number(input[1]);
    let hoursArive = Number(input[2]);
    let minArve = Number(input[3]);
  
    let timeExam = hoursExam * 60 + minExam;
    let timeArive = hoursArive * 60 + minArve;
  
    if (timeExam < timeArive) {
      console.log("Late");
      let diff = timeArive - timeExam;
      let h = Math.floor(diff / 60);
      let m = diff % 60;
      if (diff >= 60) {
        if (m < 10) {
          console.log(`${h}:0${m} hours after the start`);
        } else {
          console.log(`${h}:${m} hours after the start`);
        }
      } else {
        console.log(`${m} minutes after the start`);
      }
    } else if (timeExam >= timeArive && timeExam - timeArive <= 30) {
      console.log("On time");
      let diff = timeExam - timeArive;
      if (diff !== 0) {
        let m = diff % 60;
        console.log(`${m} minutes before the start`);
      }
    } else {
      console.log("Early");
      let diff = timeExam - timeArive;
      let h = Math.floor(diff / 60);
      let m = diff % 60;
      if (diff >= 60) {
        if (m < 10) {
          console.log(`${h}:0${m} hours before the start`);
        } else {
        }
        console.log(`${h}:${m} hours before the start`);
      } else {
        console.log(`${m} minutes before the start`);
      }
    }
  }
  onTimeForExam(["12", "30", "10", "55"]);