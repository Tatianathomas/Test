const block = document.querySelectorAll('.block');
console.log(block)
for (let i = 0; i < block.length; i++) {
block[i].onclick = function() {
    block[i].classList.add('black');
}
}
