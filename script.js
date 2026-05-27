function sendMessage() {

    let number = document.getElementById("number").value;
    let message = document.getElementById("message").value;

    if(number === "" || message === ""){
        alert("Please fill all fields");
        return;
    }

    if(number.length !== 10 || isNaN(number)) {
        alert("Please enter valid 10 digit number");
        return;
    }

    let url = `https://wa.me/+91${number}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
}