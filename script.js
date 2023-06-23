function submit()
{
  var g=0;
  var s=0;
  var r=0;
  var h=0;
  var q1 = document.querySelector('input[name="one"]:checked').value;
  var q2 = document.querySelector('input[name="two"]:checked').value;
  var q3 = document.querySelector('input[name="three"]:checked').value;
  var q4 = document.querySelector('input[name="four"]:checked').value;
  var q5 = document.querySelector('input[name="five"]:checked').value;
  var q6 = document.querySelector('input[name="six"]:checked').value;
  var q7 = document.querySelector('input[name="seven"]:checked').value;
  var q8 = document.querySelector('input[name="eight"]:checked').value;
  var q9 = document.querySelector('input[name="nine"]:checked').value;
  var q10 = document.querySelector('input[name="ten"]:checked').value;
    if(q1==10)
    g++;
    if(q1==20)
    h++;
    if(q1==30)
    r++;
    if(q1==40)
    s++;
    if(q2==10)
    g++;
    if(q2==20)
    h++;
    if(q2==30)
    r++;
    if(q2==40)
    s++;
    if(q3==10)
    g++;
    if(q3==20)
    h++;
    if(q3==30)
    r++;
    if(q3==40)
    s++;
    if(q4==10)
    g++;
    if(q4==20)
    h++;
    if(q4==30)
    r++;
    if(q4==40)
    s++;
    if(q5==10)
    g++;
    if(q5==20)
    h++;
    if(q5==30)
    r++;
    if(q5==40)
    s++;
    if(q6==10)
    g++;
    if(q6==20)
    h++;
    if(q6==30)
    r++;
    if(q6==40)
    s++;
    if(q7==10)
    g++;
    if(q7==20)
    h++;
    if(q7==30)
    r++;
    if(q7==40)
    s++;
    if(q8==10)
    g++;
    if(q8==20)
    h++;
    if(q8==30)
    r++;
    if(q8==40)
    s++;
    if(q9==10)
    g++;
    if(q9==20)
    h++;
    if(q9==30)
    r++;
    if(q9==40)
    s++;
    if(q10==10)
    g++;
    if(q10==20)
    h++;
    if(q10==30)
    r++;
    if(q10==40)
    s++;
  alert("gryffindor:"+g+"\n" +
        "hufflepuff:"+h+"\n" + 
        "ravenclaw:"+r+"\n" + 
        "slytherine:"+s);

}