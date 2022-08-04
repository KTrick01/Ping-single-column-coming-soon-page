const WARNING = document.querySelector(".warning")
const EMAIL_AREA = document.querySelector(".page__email-area")
const BTN = document.querySelector(".page__email-area-btn")

BTN.addEventListener('click', function (e){
    e.preventDefault()
    const EMAIL_TXT = document.querySelector(".page__email-area-email").value
    const EMAIL = document.querySelector(".page__email-area-email")
    let Tst = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (Tst.test(EMAIL_TXT)) {
        
        EMAIL_AREA.style.gap = ".4rem"
        WARNING.classList.add("none")
        EMAIL.focus()
        EMAIL.style.outlineColor ="rgb(26, 207, 26)"
        EMAIL.style.borderColor ="rgb(26, 207, 26)"
        
    } else {
        EMAIL_AREA.style.gap = "2rem"
        WARNING.classList.remove("none")
        EMAIL.focus()
        EMAIL.style.outlineColor ="hsl(0, 100%, 50%)"
        EMAIL.style.borderColor ="hsl(0, 100%, 50%)"
    }
})