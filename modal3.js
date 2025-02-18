document.getElementById("open-modal3-btn3").addEventListener("click",function()
{
    document.getElementById("my-modal3").classList.add("open")
})

document.getElementById("close3-my-modal3-btn3").addEventListener("click",function()
{
    document.getElementById("my-modal3").classList.remove("open")
})


window.addEventListener('keydown',(e) => {
     if (e.key ==="Escape") {
         document.getElementById("my-modal3").classList.remove("open")
    }
});

document.querySelector("#my-modal3 .modal3__box").addEventListener('click', Event => {
    Event._isClickWithInModal=true
});


document.getElementById("my-modal3").addEventListener('click', Event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});




