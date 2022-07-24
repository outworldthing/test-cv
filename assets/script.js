const contentDiv = document.getElementById("skill-img-mh")
const mh = document.getElementById('mh-img')
const ambush = document.createElement("img")
ambush.src = "assets/images/ambush.png"
ambush.classList.add("ambush")
ambush.classList.add("shimmer")
let counter = 0
function changeBackgroundColor(color) {
    if (counter >= 6) {
        contentDiv.appendChild(ambush)
        setTimeout(function () {
            contentDiv.removeChild(ambush)
            mh.src = "assets/images/valstrax.png";
            setTimeout(function () {
                mh.src = "assets/images/rathalos.png";
                counter = 0
            }, 4500);
        }, 2500);
    } else {
        counter++;
        mh.classList.toggle("vibrate");
        console.log("testing" + counter)
    }
}