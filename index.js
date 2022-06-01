
$(document).ready(function () {
  var getBox;
  var trIndex;
  var tdIndex;
  function setBox(i) {
    $(`td:eq( ${i} )`).html(getBox);
  }
  $(".icon").click(function () {
    getBox = $(this).parent();
    trIndex = $(this).parent().parent().parent().index();
    tdIndex = $(this).parent().parent().index();
    var index = $(this).index();
    if (trIndex == 0) {
      if (tdIndex == 0) {
        if (index == 1) {
          setBox(1);
        }
        if (index == 2) {
          setBox(3);
        }
      }
      else if (tdIndex == 1) {
        if (index == 1) {
          setBox(2);
        }
        if (index == 2) {
          setBox(4);
        }
        if (index == 3) {
          setBox(0);
        }
      }
      else if (tdIndex == 2) {
        if (index == 2) {
          setBox(5);
        }
        if (index == 3) {
          setBox(1);
        }
      }
    }
    else if (trIndex == 1) {
      if (tdIndex == 0) {
        if (index == 0) {
          setBox(0);
        }
        if (index == 1) {
          setBox(4);
        }
        if (index == 2) {
          setBox(6);
        }
      }
      else if (tdIndex == 1) {
        if (index == 0) {
          setBox(1);
        }
        if (index == 1) {
          setBox(5);
        }
        if (index == 2) {
          setBox(7);
        }
        if (index == 3) {
          setBox(3);
        }
      }
      else if (tdIndex == 2) {
        if (index == 0) {
          setBox(2);
        }
        if (index == 2) {
          setBox(8);
        }
        if (index == 3) {
          setBox(4);
        }
      }
    }
    else if (trIndex == 2) {
      if (tdIndex == 0) {
        if (index == 0) {
          setBox(3);
        }
        if (index == 1) {
          setBox(7);
        }
      }
      else if (tdIndex == 1) {
        if (index == 0) {
          setBox(4);
        }
        if (index == 1) {
          setBox(8);
        }
        if (index == 3) {
          setBox(6);
        }
      }
      else if (tdIndex == 2) {
        if (index == 0) {
          setBox(5);
        }
        if (index == 3) {
          setBox(7);
        }
      }
    }
  });
});