window.onload = function () {
  const year = new Date().getFullYear();
  $(".footer .copyright span").html("&copy; " + year + ' מונא עזאם אקדמיה ע\"י הדס קריתי');
}

privacyClicked = function() {
  $("#privacy-policy").css("display", "block");
}

privacyClosed = function() {
  $("#privacy-policy").css("display", "none");
}

dropdownHover = function() {
  $('#navbarSupportedContent').dropdown('show');
}

dropdownOut = function() {
  $('#navbarSupportedContent').dropdown('hide');
}
