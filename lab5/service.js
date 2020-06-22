function validatePhone(txtPhone) {
  var a = document.getElementById(txtPhone).value;
  var filter = /^(\([-+]?[0-9]+)\)$/;
  if (filter.test(a)) {
    return true;
  } else {
    return false;
  }
}

function validateCVV(cvv) {
  var a = document.getElementById(cvv).value;
  if(a.length !=3 ){
    return false;
  }
  return true;
}

$(document).ready(function () {
  $("#phone").on("change", function () {
    if (!validatePhone("phone")) {
      alert("Wrong format for phone");
      $("#phone").val("(xxx)");
      $("#phone").addClass("error");
    } else {
      $("#phone").removeClass("error");
    }
  });

  $("#cvv").on("change", function () {
    if(!validateCVV("cvv")){
      alert("Wrong format for CVV");
      $("#cvv").val("xxx");
      $("#cvv").addClass("error");
    } else {
      $("#cvv").removeClass("error");
    }
  })

  $("#card").on("mouseenter", function () {
    $("#card").addClass("showInput");
  });

  $("#card").on("mouseleave", function () {
    $("#card").removeClass("showInput");
  });

  $("#card").tooltip({
    classes: {
      "ui-tooltip": "highlight",
    }
  });
});
