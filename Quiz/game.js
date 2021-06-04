let question_text = document.getElementById('question_text');
let index_text = document.getElementById('index')
let score_text = document.getElementById('score')
var question;
var correct_answer;
var incorrect_answers;
var options;
var question_data;
let question_index = 1;
let index = 0;
var score = 0;
var number_of_questions = localStorage.getItem("Num_of_ques"); 

const points_per_question = 10;
const choices = Array.from(document.getElementsByClassName('choice-text'));

localStorage.setItem("Total_Score", number_of_questions*points_per_question);
loaderwrapper.className = "show";

var box=document.getElementById('new')
  
next_question = () => {
    if (index<number_of_questions)
   { box.style.backgroundColor = "#f7fbfc"

    question = question_data[index]["question"]
    correct_answer = [question_data[index]["correct_answer"]]
    incorrect_answers = question_data[index]["incorrect_answers"]
    options = correct_answer.concat(incorrect_answers)
    options = options.sort(() => Math.random() - 0.5)

    let x = 0;

    question_text.innerHTML = `Q${question_index}. ${question}`

    choices.forEach((choice) => {

        choice.innerHTML = options[x]
        x += 1
        choice.onclick = function () {


            selected_option = this.innerText



            if (selected_option == correct_answer) {

                box.style.backgroundColor = "#9ecca4";

                score += points_per_question;

                score_text.innerText = `Score: ${score}`
            }
        }
    })

    index += 1

    index_text.innerText = `${index}/${number_of_questions}`

    question_index += 1

    choices.forEach((choice) => {

        choice.disabled = false;
    });}
    else{
    
        console.log("QUIZ COMPLETED")   
        localStorage.setItem("User_Score", score);  
        window.open('End.html',"_self")

    }


}

choices.forEach((choice) => {   
    choice.addEventListener('click', () => {   
        choices.forEach((choice) => {   
            choice.disabled = true;   
        })   
         
        setTimeout(next_question, 500)
    
   
    })   
})   
   

   
var url=localStorage.getItem("API_Endpoint");    
fetch(url).then((response) => {   
       
    if (response.ok){   
        loaderwrapper.className = loaderwrapper.className.replace("show", "")   
    }   
   
    return response.json();   
       
}).then((data) => {   
    question_data = data["results"]   
   
}).then(next_question);   


