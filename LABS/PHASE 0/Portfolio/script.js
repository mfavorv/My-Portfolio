const header = document.getElementById('header');

header.addEventListener('mouseenter', function(){
    this.style.backgroundColor = '#008080';
});

header.addEventListener('mouseleave', function(){
    this.style.backgroundColor = '#000000'
})