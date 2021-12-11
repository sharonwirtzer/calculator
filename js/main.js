
function calc() {

    let num = document.getElementById('display').value;
    try {
        let res = eval(num);
        document.getElementById('display').value = res;

    } catch (err) {
        if (err) {
            alert("you entered a non-numeric value");
            document.getElementById('display').value = '';
        }
    }
}

function play() {
    var audio = document.getElementById("audio");
    audio.play();
}
