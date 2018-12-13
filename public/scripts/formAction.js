'use strict';

let options = [];
let SQL = 'SELECT DISTINCT bookshelf FROM books;';
client.query(SQL).then(results => {
  results.rows.map(book => {
    options.push(book.bookshelf);
  });
}).catch(err => handleError(err, res));
console.log(options);

options.forEach(bookshelf => {
  $('#select-bookshelf').append(`<option value="${bookshelf}">${bookshelf}</option>`);
});

$('.selectBook').on('click', function(event) {
  let id = $(this).attr('value');
  console.log('value: ', id);
  if ($(`#${id}`).attr('class') === 'hide') {
    // $(`#${id}`).slideDown(750);
    $(`.selectBook[value='${id}']`).text('Cancel')
    $(`#${id}`).toggleClass('hide');
  } else {
    // $(`#${id}`).slideUp(750);
    $(`.selectBook[value='${id}']`).text('Select Book');
    $(`#${id}`).toggleClass('hide');
  }
});

$('.updateBook').on('click', function(event) {
  if ($('.update').attr('class') === 'hide') {
    $('.update').toggleClass('hide');
  } else {
    $('.update').toggleClass('hide');
  }
});

