function back() { 
  if (document.referrer.indexOf(window.location.host) !== -1){ 
        history.back();
    }
}

if (document.referrer.indexOf(window.location.host) == -1){ 
    document.getElementById("back").style.display = "none"
}s