window.addEventListener("load", function () {

    function sendData() {
        const XHR = new XMLHttpRequest();

        var inputs = document.getElementById("promptForm").elements;

        var prompt = inputs["prompt"].value

        var data = {
            "body": `{\"prompt\": \"${prompt}\", \"length\": 50}`
        };

        document.getElementById("display").innerHTML = "prompt gotten"

        XHR.addEventListener("load", function (event) {
            console.log(JSON.parse(event.target.responseText)["body"])
            document.getElementById("display").innerHTML = JSON.parse(event.target.responseText)["body"]
        });

        XHR.addEventListener("error", function (event) {
            document.getElementById("display").innerHTML = "error";
        });


        url = "https://tayrkn1vpc.execute-api.us-east-2.amazonaws.com/beta"

        XHR.open("POST", url);

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