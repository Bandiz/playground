(function() {
    var timesClicked = 0;

    function clickMe() {
        var myDiv = document.getElementById("my-div");

        timesClicked++;
        myDiv.innerHTML = timesClicked;
    }

    this.clickMe = clickMe;
})();