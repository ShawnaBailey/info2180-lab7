"use strict";
window.onload = function() {
    
  function main() {
    let req = new XMLHttpRequest();
    
    document.getElementById("lookup").addEventListener("click", function() {
      req.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          document.getElementById("result").innerHTML = this.responseText;
           alert(this.responseText);
        }
      };
      if (document.getElementById("all").checked) {
        req.open("GET", "world.php?all=true", true);
      } else {
        req.open("GET", "world.php?country=" + document.getElementById("country").value, true);
      }
      req.send();
    });
    
  }
  
  main();
};