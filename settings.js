function setting_to_home() {
    window.location = "index.html";
}

function setting_to_q() {
    window.location = "question.html";
}

grade = "Four";
localStorage.setItem("grade_key", grade);

function grade_456() {
    grade = document.getElementById("grade_dd").value;
    localStorage.setItem("grade_key", grade);
}

language = "English";
localStorage.setItem("language_key", language);

function language_ehk() {
    language = document.getElementById("language_dd").value;
    localStorage.setItem("language_key", language);
}

subject = "Science";
localStorage.setItem("subject_key", subject);

function subject_sem() {
    subject = document.getElementById("subject_dd").value;
    localStorage.setItem("subject_key", subject);
}