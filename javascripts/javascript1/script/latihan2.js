const spans = document.querySelectorAll('span')
const button = document.querySelector('button')

button.addEventListener('click', function() {
    spans.forEach(function(span){
        span.classList.toggle('highlight')
    })
})  