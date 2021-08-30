function setting_to_home() {
    window.location = "index.html";
}

function setting_to_q() {
    window.location = "question.html";
    music.play();
}

save();
subject = "science";
localStorage.setItem("subject_key", subject);

function save() {
    localStorage.setItem("subject_key", subject);
}

function volume_on() {
    music = document.getElementById("myAudio");
    music.play();
    music.loop = true;
}

function no_volume() {
    music = document.getElementById("myAudio");
    music.pause();
}