fixId = document.getElementById("navname");
fixTop = document.getElementById("skills").offsetTop;
  
  // allo scroll di pagina applico delle modifiche agli attributi CSS dell'elemento
  // a seconda che la posizione corrente sia superiore o meno rispetto all'altezza originale dell'elemento
  window.onscroll = function() { 
    with (fixId.style) {
      if (window.pageYOffset < fixTop) {
        position = "relative";
        top = "200%";
        
      } else {
        position = "relative";
        top = 0;
      }
    }
  }