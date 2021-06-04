var number_que = document.getElementById("number_of_questions");
var category = document.getElementById("trivia_category");
var difficulty = document.getElementById("trivia_difficulty");
var url;
var num,categ,diff;


const url_init="https://opentdb.com/api.php?amount=10&type=multiple"     
        
// https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple



next.onclick=()=>{

num=`amount=${number_que.value}`
if (category.value=="any"){
    categ=""
}
else{
    categ=`&category=${category.value}`
}
if (difficulty.value=="any"){
    diff=""
}
else{
    diff=`&difficulty=${difficulty.value}`
}

url=`https://opentdb.com/api.php?${num}&type=multiple${categ}${diff}`

localStorage.setItem("API_Endpoint", url);  
localStorage.setItem("Num_of_ques", number_que.value);  


window.open('game.html',"_self")
console.log(url)}