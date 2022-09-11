const page1 = document.querySelector(".container")
const page2 = document.querySelector(".center")
const buynowbutton = document.getElementById("buynow")


buynowbutton.addEventListener("click", () =>{

    page2.classList.remove("center")
    page1.style.display = "none"
})