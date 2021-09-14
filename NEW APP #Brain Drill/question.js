subject = localStorage.getItem("subject_key");
console.log(subject);
document.getElementById("sub-lab").innerHTML = subject;

grade = localStorage.getItem("grade_key");
console.log(grade);
document.getElementById("grade-lab").innerHTML = grade;

language = localStorage.getItem("language_key");
console.log(language);
document.getElementById("language-lab").innerHTML = language;