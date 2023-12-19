let tds = document.querySelectorAll('td')
tds.forEach(v => {
    v.onclick = function () {
        this.style.backgroundColor = '#222'
    }
})
