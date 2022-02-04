function popup(msg,confirmPopup = false){
  var popup_div = document.createElement('div');
  popup_div.className = "popup_div";
  var popup_msg = document.createElement('p');
  popup_msg.className = "popup_msg";
  popup_msg.innerHTML = msg;
  popup_div.appendChild(popup_msg);
  var popup_button_exit = document.createElement('div');
  popup_button_exit.className="popup_button_exit";
  popup_div.appendChild(popup_button_exit)
  popup_button_exit.innerHTML ="<p>exit</p>"

  popup_button_exit.onclick = () => {
    popup_div.remove();
    return false;
  }

  if(confirmPopup){
  var popup_button_ok = document.createElement('div');
  popup_button_ok.className="popup_button_ok";
  popup_button_ok.innerHTML ="<p>ok</p>"
  popup_div.appendChild(popup_button_ok)
  popup_button_ok.onclick = ()=>{
    popup_div.remove();
    return true;
  }
  }

}