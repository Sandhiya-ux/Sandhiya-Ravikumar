let timer;
let totalSeconds = 0;
let isPaused = false;

function startTimer() {
    let hours = parseInt(document.getElementById("hours").value) || 0;
    let minutes = parseInt(document.getElementById("minutes").value) || 0;
    let seconds = parseInt(document.getElementById("seconds").value) || 0;

    totalSeconds = hours * 3600 + minutes * 60 + seconds;

    if (totalSeconds <= 0) {
        alert("Please enter valid time");
        return;
    }

    clearInterval(timer);
    isPaused = false;
    runTimer();
}
function runTimer() {
    timer = setInterval(() => {

        if (!isPaused) {

            if (totalSeconds <= 0) {
                clearInterval(timer);
                document.getElementById("message").innerText = "⏰ Time's up! All the best!";
                alert("Time's up!");
                return;
            }

            totalSeconds--;

            let h = Math.floor(totalSeconds / 3600);
            let m = Math.floor((totalSeconds % 3600) / 60);
            let s = totalSeconds % 60;

            document.getElementById("display").innerText =
                formatTime(h) + " : " + formatTime(m) + " : " + formatTime(s);
        }

    }, 1000);
}

function pauseResumeTimer() {
    isPaused = !isPaused;
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}
