function setting_to_home() {
    window.location = "index.html";
}

function setting_to_q() {
    window.location = "question.html";
    music.play();
}

function volume_on() {
    music = document.getElementById("myAudio");
    music.play();
    loop = true;
}

function no_volume() {
    music = document.getElementById("myAudio");
    music.pause();
}

function alert_s() {
    window.alert("Choose the Subject , Grade , Language and click ok to continue").style.color = "color: #172971;";
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