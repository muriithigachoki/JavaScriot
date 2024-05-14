let totalMark = 40;
let examType = "final";

function checkGrad(totalMark, examType) {
  //  check if the examType is final and greater than 90 but less than 100
  if (examType === "final" && totalMark >= 90 && totalMark <= 100) {
    console.log("Excellent job, you got an A+.");
  } else if (examType === "final" && totalMark >= 80 && totalMark < 90) {
    console.log("Good job, you got an A.");
  } else if (totalMark >= 89 && totalMark <= 100) {
    if (examType === "Midterm") {
      console.log("Excellent job, you got an A+");
    }
  } else if (totalMark >= 80 && totalMark <= 88) {
    if (examType === "Midterm") {
      console.log("Good job, you got an A.");
    }
  } else if (examType === "Midterm" || examType === "final") {
    if (totalMark > 100) {
      console.log("invalid total Marks");
    } else if (totalMark >= 75 && totalMark <= 79) {
      console.log("Well done, you got a B+.");
    } else if (totalMark >= 70 && totalMark <= 74) {
      console.log("Nice work, you got a B.");
    } else if (totalMark >= 60 && totalMark <= 69) {
      console.log("You got a C");
    } else if (totalMark < 60) {
      console.log("You need to improve.");
    }
  }
}

checkGrad(totalMark, examType);
