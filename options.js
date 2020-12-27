document.getElementById("save").addEventListener("click",function(e){
  let language = document.getElementById("selectLanguage").value;
  localStorage.setItem('language', language);
  document.getElementById("language").innerHTML = language;
},false);

(function() {
  let language = localStorage.getItem('language');
  document.getElementById("selectLanguage").value = language;
  document.getElementById("language").innerHTML = language;
})();
