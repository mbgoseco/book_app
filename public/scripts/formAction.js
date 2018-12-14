'use strict';

// let options = [];
// let SQL2 = 'SELECT DISTINCT bookshelf FROM books;';
// client.query(SQL2).then(results => {
//   results.rows.map(book => {
//     options.push(book.bookshelf);
//   });
// }).catch(err => handleError(err, res));
// console.log(options);

// options.forEach(bookshelf => {
//   $('#select-bookshelf').append(`<option value="${bookshelf}">${bookshelf}</option>`);
// });

$('.selectBook').on('click', function() {
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

$('.updateBook').on('click', function() {
  if ($('.update').hasClass('hide')) {
    console.log('visible : cancel')
    $('.update').toggleClass('hide');
    $(`.updateBook`).text('Cancel');
  } else {
    console.log('hidden : update book')
    $('.update').toggleClass('hide');
    $(`.updateBook`).text('Update Details');
  }
});

