var checkbox = document.querySelector('input[name=theme]');

checkbox.addEventListener('change', function() {
    if(this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
        document.getElementById("navigation").classList.remove("bg-dark", "navbar-dark")
        document.getElementById("navigation").classList.add("bg-light", "navbar-light")
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
        document.getElementById("navigation").classList.remove("bg-light", "navbar-light")
        document.getElementById("navigation").classList.add("bg-dark", "navbar-dark")
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}