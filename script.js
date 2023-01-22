window.addEventListener('scroll', function(){
    let progressbar = document.querySelector('#prgsBar2');

    let siteHeight = document.documentElement.scrollHeight
    let monitorY = document.documentElement.clientHeight

    let w = window.pageYOffset / (siteHeight - monitorY) * 100

    prgsBar2.style.width = w + "%"
});