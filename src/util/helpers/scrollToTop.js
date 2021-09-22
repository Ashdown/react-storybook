const scrollToTop = (scrollDuration = 400) => {
    if(scrollDuration === 0) {
        window.scrollTo(0, 0)
    } else {
        const timeout = 15
        const scrollStep = -window.scrollY / (scrollDuration / timeout),
            scrollInterval = setInterval(function () {
                if (window.scrollY != 0) {
                    window.scrollBy(0, scrollStep)
                } else clearInterval(scrollInterval)
            }, timeout)
    }
}

export default scrollToTop