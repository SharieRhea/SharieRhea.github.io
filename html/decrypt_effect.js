const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

function decrypt() {
    let iterations = 0;
    clearInterval(interval);

    target = document.querySelector("h1");
    interval = setInterval(() => {
        target.innerText = target.innerText.split("")
        .map((letter, index) => {
            if(index < iterations || letter === " ") {
                return target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)];
        })
        .join("");
  
        if(iterations >= target.dataset.value.length) {
            clearInterval(interval);
        }
      
        iterations += 1/4;
    }, 40);
  }



