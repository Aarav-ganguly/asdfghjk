player1name= localStorage.getItem("playr_1_name");
player2name= localStorage.getItem("player_2_name");

player2score = 0;
player1score = 0;

document.getElementById("player_1_name").innerHTML=player1name+"-";
document.getElementById("player_2_name").innerHTML=player2name+"-";

document.getElementById("player_1_score").innerHTML=player1score;
document.getElementById("player_2_score").innerHTML=player2score;

document.getElementById("player_question").innerHTML="question- "+player1name;
document.getElementById("player_answer").innerHTML="answer- "+player2name;

function send() {
 get_word = document.getElementById("word").value;
 word = get_word.toLowerCase();


 charAt1 = word.charAt (1);

 length_divide_2 = Math.floor(word.length/2);
 charAt2 = word.charAt(length_divide_2);

 length_minus_1 = word.length - 1;
 charAt3 = word.charAt(length_minus_1);

  question_word = "<h4 id='word_display'q."+remove_charAt3+"</h4>";
input_box = "<br>Answer : <input type='text' id = 'ICheckB'>";
check_button = "<br><br><button class= 'btn btn-info' onclick='check()'>check</button>";
row = question_word + input_box + check_button ;
document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
}