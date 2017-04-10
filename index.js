// from SO: http://stackoverflow.com/a/987376/1592915
function selectText(element) {
  if (document.body.createTextRange) {
    range = document.body.createTextRange();
    range.moveToElementText(element);
    range.select();
  } else if (window.getSelection) {
    selection = window.getSelection();
    range = document.createRange();
    range.selectNodeContents(element);
    selection.removeAllRanges();
    selection.addRange(range);
  }
}

$('.reset').click( function() {
  console.log('123');
  location.reload();
});

$('.controls > .select').click( function() {
  var signature_id = $($(this).parents('.controls')[0]).data('sig');
  selectText($('#' + signature_id)[0]);
});

$('.controls > .save').click(function() {
  var link = $(this).siblings('a')[0];
  var sig_div = $('#' + $(this).parents('.controls').data('sig') + '_container');
  var sig_html = $(sig_div).html();
  $(link).attr('href', 'data:text/html,' + sig_html);
  $(this).hide();
  $(link).show();
});

// update per inputs
$('#inputs input').keyup(function() {
  var input = $(this).attr('id');
  var val = $(this).val();
  $('.'+input).html(val);

  // updates with href
  if (input == 'email') {
    $('.email').attr('href', 'mailto:'+val);
  }
  if (input == 'phone') {
    $('.phone').attr('href', 'tel:'+val);
  }
  if (input == 'cell') {
    $('.cell').attr('href', 'tel:'+val);
  }

  $('.controls > a').hide();
  $('.controls > .save').show();
});
