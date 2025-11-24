const changeSize = document.querySelectorAll('.font-size');
const book = document.getElementById('book')

for (let i = 0; i < changeSize.length; i++) {
    changeSize[i].addEventListener('click', function(e) {
        e.preventDefault();

        for (let j = 0; j < changeSize.length; j++) {
            changeSize[j].classList.remove('font-size_active');
        }

        this.classList.add('font-size_active');

        book.classList = 'book';
        if (this.classList.contains('font-size_small')) {
            book.classList.add('book_fs-small');           
        } else if (this.classList.contains('font-size_big')) {
            book.classList.add('book_fs-big');
        }
    })
}
