const screenshotsButton = document.getElementById('#button');
const animatedElement = document.getElementById('#animatedElement');
const midHeader = document.querySelector("midh, h2")
const dNew =  document.getElementById("popup");
let viewportHeight = window.innerHeight;

function sleep(s) {
    return new Promise(resolve => setTimeout(resolve, s * 1000));
}


async function rainbow() {
    animatedElement.classList.toggle('inv');
    animatedElement.classList.toggle('animate');
    midHeader.classList.toggle('inv');
    let scrollAmount = (0.8 * viewportHeight);
    if (animatedElement.classList.contains('animate')) {
        for (let index = 0; index < 41; index++) {
            await sleep(1 / 40);
            window.scrollBy({ top: scrollAmount, behavior: 'smooth' });

        }
    }
}


screenshotsButton.addEventListener("click", rainbow);

function info (element){
    dNew.classList.toggle("inv")
    document.body.classList.toggle("scrollable")
    if (element.dataset.bgimg){
        dNew.querySelector("div").style.backgroundImage = element.dataset.bgimg;
        dNew.querySelector("h1").innerText= "";
        dNew.querySelector("p").innerText= "";
        return
    }
    dNew.querySelector("div").style.backgroundImage = "none"
    dNew.querySelector("h1").innerText = element.dataset.header
    dNew.querySelector("p").innerText = element.dataset.text
}

function closepopup(){
    dNew.classList.toggle("inv")
    document.body.classList.toggle("scrollable")
}