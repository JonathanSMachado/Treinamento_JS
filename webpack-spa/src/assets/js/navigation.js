(function(){
    function setLinkAsSelected(link) {
        const links = document.querySelectorAll(`[wm-link]`)
        links.forEach(link => link.classList.remove('selected'))

        const link = document.querySelector(`[wm-link=${link}]`)
        link.classList.add('selected')
    }

    function navigate(link) {
        if (!link) return

        const url = link.substring(1)
        const target = document.querySelector(`[wm-link-destino]`)

        fetch(url)
            .then(response => response.text())
            .then(html => {
                target.innerHTML = html
                setLinkAsSelected(link)
            })
    }

    function configLink() {
        document.querySelectorAll('[wm-link]')
            .forEach(link => {
                link.href = link.attributes['wm-link'].value
            })
    }

    function init() {
        if (location.hash) {
            navigate(hash)
        } else {
            const firstLink = document.querySelector('[wm-link]')
            navigate(firstLink)
        }
    }

    window.onhashchange = e => navigate(location.hash)

    configLink()
    init()
})()