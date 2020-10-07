document.addEventListener("DOMContentLoaded", () => {
    let counter = document.querySelector("#counter")
    let counterNum = parseInt(counter.textContent)
    const likesList = document.querySelector(".likes")
    let pausedStatus = false
    let clock
    function increaseTime() {
        counterNum++
        counter.textContent = counterNum
    }

    function timer() {
            clock = setInterval(increaseTime, 1000)
    }
    function clickHandler() {
        document.addEventListener("click", function(e){
            if(e.target.matches("#plus") && pausedStatus === false){
                counterNum++
                counter.textContent = counterNum
            } else if (e.target.matches("#minus") && pausedStatus === false) {
                counterNum--
                counter.textContent = counterNum
            } else if (e.target.matches("#heart") && pausedStatus === false) {
                const likedNum = parseInt(counter.textContent)
                if (likesList.querySelector(`[data-number="${likedNum}"]`)){
                    likesList.querySelector(`[data-number="${likedNum}"]`).dataset.likes++
                    likedLi.innerText = `${likedNum}: ${likesList.querySelector(`[data-number="${likedNum}"]`).dataset.likes} likes`

                } else {
                    likedLi = document.createElement("li")
                    likedLi.dataset.number = likedNum
                    likedLi.dataset.likes = 1
                    likedLi.innerText = `${likedNum}: ${likedLi.getAttribute("data-likes")} like`
                    likesList.append(likedLi)
                }
            } else if (e.target.matches("#pause")) {
                if (pausedStatus === true) {
                    pausedStatus = false
                    let button = e.target
                    button.textContent = "pause"
                    clock = setInterval(increaseTime, 1000)
                } else if (pausedStatus === false) {
                    pausedStatus = true
                    let button = e.target
                    button.textContent = "resume"
                    clearInterval(clock)
                }
            }

                
                // const likes = document.querySelector(".likes")
                // const likeButton = e.target
                // const likedNum = counter.textContent
                // const liked = document.createElement("li")
                // liked.setAttribute("data-number", `${likedNum}`, "data-likes", 0)
                // liked.textContent = `${newLikes} likes`
                // likes.append(like)
            
        })
    }
   
        

    clickHandler()
    timer()
})