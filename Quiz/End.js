User_Score=localStorage.getItem("User_Score")
Total_Score=localStorage.getItem("Total_Score")

var output=document.getElementById("score")

output.innerText=` ${User_Score} out of ${Total_Score}`

