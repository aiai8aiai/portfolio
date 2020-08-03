function formcheck(){

  var check_error;
  var doc = window.document;
  var check;
  var erMsg;
  var num_check;

  //投稿日のチェック
  check = doc.getElementsByName('date')[0];
  erMsg = doc.getElementById('er_date');
  if(check.value == ''){
    erSplit = erMsg.dataset.error.split(',');
    erMsg.innerText = erSplit[0];
    erMsg.style.color = erSplit[2];
    if(erSplit[1] == '1'){
      check_error = true;
    }
  }
  else{
    erMsg.innerText = "";
  }

  //時間のチェック
  check = doc.getElementsByName('time')[0];
  erMsg = doc.getElementById('er_time');
  if(check.value == ''){
    erSplit = erMsg.dataset.error.split(',');
    erMsg.innerText = erSplit[0];
    erMsg.style.color = erSplit[2];
    if(erSplit[1] == '1'){
      check_error = true;
    }
  }
  else{
    erMsg.innerText = "";
  }

  //名前チェック
  check = doc.getElementsByName('name')[0];
  erMsg = doc.getElementById('er_name');
  if(check.value == ''){
    erSplit = erMsg.dataset.error.split(',');
    erMsg.innerText = erSplit[0];
    erMsg.style.color = erSplit[2];
    if(erSplit[1] == '1'){
      check_error = true;
    }
  }
  else{
    erMsg.innerText = "";
  }

  //メールチェック
  check = doc.getElementsByName('eMail')[0];
  erMsg = doc.getElementById('er_eMail');
  if(check.value == ''){
    erSplit = erMsg.dataset.error.split(',');
    erMsg.innerText = erSplit[0];
    erMsg.style.color = erSplit[2];
    if(erSplit[1] == '1'){
      check_error = true;
    }
  }
  else{
    erMsg.innerText = "";
  }

  //性別チェック
  check = doc.getElementsByName('seibetsu');
  erMsg = doc.getElementById('er_seibetsu');
  num_check = 0;
  for(var i = 0; i < check.length; i++){
    if(check[i].checked == true){
      num_check++;
      break;
    }
  }
  if(num_check == 0){
    erSplit = erMsg.dataset.error.split(',');
    erMsg.innerText = erSplit[0];
    erMsg.style.color = erSplit[2];
    if(erSplit[1] == '1'){
      check_error = true;
    }
  }
  else{
    erMsg.innerText = "";
  }

  //趣味チェック
  check = doc.getElementsByName('hobby[]');
  erMsg = doc.getElementById('er_hobby');
  num_check = 0;
  for(var i = 0; i < check.length; i++){
    if(check[i].checked == true){
      num_check++;
    }
  }
  if(num_check < 2){
    erSplit = erMsg.dataset.error.split(',');
    erMsg.innerText = erSplit[0];
    erMsg.style.color = erSplit[2];
    if(erSplit[1] == '1'){
      check_error = true;
    }
  }
  else{
    erMsg.innerText = "";
  }

  //出身地チェック
  check = doc.getElementsByName('birthplace')[0];
  erMsg = doc.getElementById('er_birthplace');
  if(check.value == ''){
    erSplit = erMsg.dataset.error.split(',');
    erMsg.innerText = erSplit[0];
    erMsg.style.color = erSplit[2];
    if(erSplit[1] == '1'){
      check_error = true;
    }
  }
  else{
    erMsg.innerText = "";
  }

  //好きな地域チェック
  check = doc.getElementsByName('favoriteArea[]')[0];
  erMsg = doc.getElementById('er_favoriteArea');
  options = check.options;
  num_check = 0;
  for(var i = 0; i < options.length; i++){
    if(options[i].selected == true){
      num_check++;
    }
  }
  if(num_check == 0){
    erSplit = erMsg.dataset.error.split(',');
    erMsg.innerText = erSplit[0];
    erMsg.style.color = erSplit[2];
    if(erSplit[1] == '1'){
      check_error = true;
    }
  }
  else{
    erMsg.innerText = "";
  }

  //意見チェック
  check = doc.getElementsByName('inquiry')[0];
  erMsg = doc.getElementById('er_inquiry');
  if(check.value == ''){
    erSplit = erMsg.dataset.error.split(',');
    erMsg.innerText = erSplit[0];
    erMsg.style.color = erSplit[2];
    if(erSplit[1] == '1'){
      check_error = true;
    }
  }
  else{
    erMsg.innerText = "";
  }

  //意見チェック
  check = doc.getElementsByName('opinion')[0];
  erMsg = doc.getElementById('er_opinion');
  if(check.value == ''){
    erSplit = erMsg.dataset.error.split(',');
    erMsg.innerText = erSplit[0];
    erMsg.style.color = erSplit[2];
    if(erSplit[1] == '1'){
      check_error = true;
    }
  }
  else{
    erMsg.innerText = "";
  }

  //電話番号チェック
  check = doc.getElementsByName('tel')[0];
  erMsg = doc.getElementById('er_tel');
  if(check.value == ''){
    erSplit = erMsg.dataset.error.split(',');
    erMsg.innerText = erSplit[0];
    erMsg.style.color = erSplit[2];
    if(erSplit[1] == '1'){
      check_error = true;
    }
  }
  else{
    erMsg.innerText = "";
  }

  //携帯電話チェック
  check = doc.getElementsByName('mobile')[0];
  erMsg = doc.getElementById('er_mobile');
  if(check.value == ''){
    erSplit = erMsg.dataset.error.split(',');
    erMsg.innerText = erSplit[0];
    erMsg.style.color = erSplit[2];
    if(erSplit[1] == '1'){
      check_error = true;
    }
  }
  else{
    erMsg.innerText = "";
  }

  //好きな場所チェック
  check = doc.getElementsByName('like')[0];
  erMsg = doc.getElementById('er_like');
  if(check.value == ''){
    erSplit = erMsg.dataset.error.split(',');
    erMsg.innerText = erSplit[0];
    erMsg.style.color = erSplit[2];
    if(erSplit[1] == '1'){
      check_error = true;
    }
  }
  else{
    erMsg.innerText = "";
  }

  //ペットチェック
  check = doc.getElementsByName('pet')[0];
  erMsg = doc.getElementById('er_pet');
  if(check.value == ''){
    erSplit = erMsg.dataset.error.split(',');
    erMsg.innerText = erSplit[0];
    erMsg.style.color = erSplit[2];
    if(erSplit[1] == '1'){
      check_error = true;
    }
  }
  else{
    erMsg.innerText = "";
  }

  return !check_error;
}
