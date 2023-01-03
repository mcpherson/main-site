const header = document.getElementById('header')

window.addEventListener('scroll', () => {
    if (window.scrollY !== 0) {
        header.style.height = `6vh`
    } else {
        header.style.height = `9vh`
    }
})