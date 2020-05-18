window.addEventListener("load", function () {

    function sendData() {
        const XHR = new XMLHttpRequest();

        var inputs = document.getElementById("promptForm").elements;

        // var prompt = inputs["prompt"];

        var data = {
            "body": "{\"prompt\": \"hello\", \"length\": \"50\"}"
        };

        document.getElementById("display").innerHTML = "prompt gotten"

        // const FD = new FormData(data);

        XHR.addEventListener("load", function (event) {
            document.getElementById("display").innerHTML = JSON.parse(event.target.responseText)
        });

        XHR.addEventListener("error", function (event) {
            document.getElementById("display").innerHTML = "error";
        });

        XHR.open("POST", "https://tayrkn1vpc.execute-api.us-east-2.amazonaws.com/beta/");

        XHR.setRequestHeader("Content-Type", "application/json");

        XHR.send(JSON.stringify(data));
    }

    const form = document.getElementById("promptForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        document.getElementById("display").innerHTML = "loading..."

        sendData();

        document.getElementById("display").innerHTML = "sending data done"
    })
})