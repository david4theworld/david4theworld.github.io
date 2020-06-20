const cv = "https://drive.google.com/uc?export=download&id=1gsegZFas_Hh_-9jXyvGN0GrexANuvMg-";
const li = "https://www.linkedin.com/in/balabandavid/";
const github = "https://github.com/david4theworld";
const mail = "mailto:david4theworld@gmail.com";

var Typer = {
  text: '',
  index: 0,
  speed: 0,
  file: '',
  init: function () {
    $.get(Typer.file, function (data) {
      Typer.text = data.slice(0, data.length - 1);
    });
  },

  content: function () {
    return $('#console').html();
  },

  addText: function (key) {
      var cont = Typer.content();
      if (cont[cont.length - 1] == '|')
        $('#console').html(cont.slice(0, -1));

      Typer.index += Typer.speed;

      var text = Typer.text.substring(0, Typer.index);
      var rtn = new RegExp('\n', 'g');

      $('#console').html(text.replace(rtn, '<br/>'));
      window.scrollBy(0, 50);
  },

  updLstChr: function () {
    var cont = this.content();

    if (cont[cont.length - 1] == '|')
      $('#console').html(cont.slice(0, -1));
    else  $('#console').append('|'); 
  },
};

Typer.speed = 2;
Typer.file = 'david4theworld.html';
Typer.init();

var timer = setInterval('t();', 30);
var tim = setInterval(function () {
  Typer.updLstChr();
}, 500);

function t() {
  Typer.addText();

  if (Typer.index > Typer.text.length) {
    clearInterval(timer);
    document.getElementById('cv').href = cv;
    document.getElementById('li').href = li;
    document.getElementById('github').href = github;
    document.getElementById('mail').href = mail;
  }
}