window.addEventListener('scroll', function(){
    let progressbar = document.querySelector('#prgsBar2');

    let siteHeight = document.documentElement.scrollHeight
    let monitorY = document.documentElement.clientHeight

    let w = window.pageYOffset / (siteHeight - monitorY) * 100

    prgsBar2.style.width = w + "%"
});

wikievents.addEventListener('click', function () {
    window.location.href = 'events.html';
})

wikibanlist.addEventListener('click', function () {
    window.location.href = 'banlist.html';
})

wikistaff.addEventListener('click', function () {
    window.location.href = 'staff.html';
})

wikiqq.addEventListener('click', function () {
    window.location.href = 'faq.html';
})
wikiqqq.addEventListener('click', function () {
    window.location.href = 'faq.html';
})
