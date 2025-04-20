function CalculatieGrade (){
      const score = document.getElementById('scoreInput').value
      if(score == ""){
            document.getElementById('output').innerHTML = "Please enter a score";
      } const grade = parseInt(score);
      let gradeLetter = '';
      if( grade>= 75 && grade <= 100){
            document.getElementById('output').innerHTML = "A+ - Excellent 😍😍😍";
      } else if( grade >= 70 && grade <= 74){
            document.getElementById('output').innerHTML = "A - Very Good 😍😍😍";
      } else if ( grade >=60 && grade <= 69){
            document.getElementById('output').innerHTML = "B - Good 😍😍😍";
      }else if (grade >=50 && grade <=59){
            document.getElementById('output').innerHTML = "C - Work Adder 😍😍😍";
      }else if(grade >=50 && grade <= 54){
            document.getElementById('output').innerHTML = "C - Work Adder 😍😍😍";
      }else if(grade >=40 && grade <= 49){
            document.getElementById('output').innerHTML = "D - poor";
      }else if (grade <= 39   ){
            document.getElementById('output').innerHTML = "F - Fail 😭😭😭";
      }
}