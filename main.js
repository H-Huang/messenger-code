window.onload = function(){
  document.getElementById("text-box").addEventListener('keydown',function(e) {
      if(e.keyCode === 9) { // tab was pressed
          // get caret position/selection
          var start = this.selectionStart;
          var end = this.selectionEnd;

          var target = e.target;
          var value = target.value;

          // set textarea value to: text before caret + tab + text after caret
          // tab will just be FOUR spaces
          target.value = value.substring(0, start)
                      + "\t"
                      + value.substring(end);

          // put caret at right position again (add one for the tab)
          this.selectionStart = this.selectionEnd = start + 1;

          // prevent the focus lose
          e.preventDefault();
      }
  },false);

  document.getElementById("copy-to-clipboard").addEventListener("click", function(){
    var input_code = document.getElementById("text-box").value;
    var language = document.getElementById("language-choice").value;
    var modified_code = "``` " + language + "\n" + input_code + "\n```";
    window.prompt("Copy to clipboard: Ctrl+C, Enter", modified_code);
  });

}
