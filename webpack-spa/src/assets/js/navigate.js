(function(){
    function setLinkAsSelected(hash) {
        const links = document.querySelectorAll('[wm-link]')
        links.forEach(link => link.classList.remove('selected'))

        const link = document.querySelector(`[wm-link=${hash}]`)
        link.classList.add('selected')
    }

    function navigateTo(link) {
        const url = link.substring(1)
        const target = document.querySelector('[wm-destino]')

        fetch(url)
            .then(response => response.text())
            .then(html => {
                target.innerHTML = html
                setLinkAsSelected(link)
            })
    }

    function setTargetLinks() {
        document.querySelectorAll('[wm-link]')
            .forEach(link => {
                link.href = link.attributes['wm-link'].value
            })
    }

    setTargetLinks()
    
    window.onhashchange = e => navigateTo(location.hash)

    if (location.hash) {
        navigateTo(location.hash)
    } else {
        const firstLink = document.querySelector('[wm-link]')
        navigateTo(firstLink)
    }
})()