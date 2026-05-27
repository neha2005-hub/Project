function sendMessage() {

    let number = document.getElementById("number").value;
    let message = document.getElementById("message").value;

    if(number === "" || message === ""){
        alert("Please fill all fields");
        return;
    }

    let url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
}