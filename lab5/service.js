function validatePhone(txtPhone) {
  var a = document.getElementById(txtPhone).value;
  var filter = /^(\([-+]?[0-9]+)\)$/;
  if (filter.test(a)) {
    return true;
  } else {
    return false;
  }
}


var unavailableDates = ["06/28/2020"]
const setDateFormat = "mm/dd/yy";

function disableDates(date) {
    // Sunday is Day 0, disable all Sundays
    if (date.getDay() == 0 || date.getDay() == 6)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) == -1 ]
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

  $( "#dateInput" ).datepicker(
    {
        dateFormat: setDateFormat,
        // no calendar before June 1rst 2020
        minDate: new Date('06/01/2020'),  
        maxDate: '+4M',
        // used to disable some dates
        beforeShowDay: $.datepicker.noWeekends,
        beforeShowDay: disableDates
    }   
);



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
