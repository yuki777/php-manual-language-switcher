$("#save").click(function() {
  let language = $("#selectLanguage").val();
  localStorage.setItem('language', language);
  $('#language').html(language);
});

let init = function() {
  let language = localStorage.getItem('language');
  $("#selectLanguage").val(language);
  $('#language').html(language);
};
init();
