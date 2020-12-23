$("#save").click(function() {
  let language = $("[name=radios]:checked").val();
  localStorage.setItem('language', language);
  $('#language').html(language);
});

let init = function() {
  let language = localStorage.getItem('language');
  $('#radio_' + language).prop('checked',true);
  $('#language').html(language);
};
init();
