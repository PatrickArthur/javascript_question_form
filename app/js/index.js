function toggle(id) {
  var div = document.getElementById(id);
  if (div.style.display !== 'none') {
    div.style.display = 'none';
  }
  else {
    div.style.display = 'block';
    showAnswer();
  }
}

function clearForm(id,div){
  var w = document.getElementsByTagName(id);
  for(var i = 0; i < w.length; i++){
    if(w[i].type='checkbox'){
      w[i].checked = false;
    };
  };
  clearMessage(div);
};

function clearMessage(div) {
  var hide = document.getElementById(div);
  if (hide.style.display !== 'none') {
    hide.style.display = 'none';
  }
}

function showAnswer() {
  var show = $("#hidden");
  var question1 = [];
  $.each($("input[name='quest1']:checked"), function(){
    question1.push($(this).val());
  });
  switchAnswer(show,question1);
}

function switchAnswer(show,question1) {
  if (question1 == "17") {
    show.html("<h4>Yay, The Celtics have won " + question1 + " championships</h4>");
  }
  else
  {
    show.html("<h4>Wrong Answer</h4>").fadeOut(3000);;
  }
}

function checkBoxStatic() {
  $('input[type="checkbox"]').bind('click',function() {
    $('input[type="checkbox"]').not(this).prop("checked", false);
  });
}

