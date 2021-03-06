/* Efeito hacker text */
var Messenger = function(el) {
  "use strict";
  var m = this;

  m.init = function() {
    m.codeletters = "&#*+%?£@§$";
    m.message = 0;
    m.current_length = 0;
    m.fadeBuffer = false;
    m.messages = ["Sobre mim"];

    setTimeout(m.animateIn, 100);
  };

  m.generateRandomString = function(length) {
    var random_text = "";
    while (random_text.length < length) {
      random_text += m.codeletters.charAt(
        Math.floor(Math.random() * m.codeletters.length)
      );
    }

    return random_text;
  };

  m.animateIn = function() {
    if (m.current_length < m.messages[m.message].length) {
      m.current_length = m.current_length + 2;
      if (m.current_length > m.messages[m.message].length) {
        m.current_length = m.messages[m.message].length;
      }

      var message = m.generateRandomString(m.current_length);
      $(el).html(message);

      setTimeout(m.animateIn, 20);
    } else {
      setTimeout(m.animateFadeBuffer, 20);
    }
  };

  m.animateFadeBuffer = function() {
    if (m.fadeBuffer === false) {
      m.fadeBuffer = [];
      for (var i = 0; i < m.messages[m.message].length; i++) {
        m.fadeBuffer.push({
          c: Math.floor(Math.random() * 12) + 1,
          l: m.messages[m.message].charAt(i)
        });
      }
    }

    var do_cycles = false;
    var message = "";

    for (var i = 0; i < m.fadeBuffer.length; i++) {
      var fader = m.fadeBuffer[i];
      if (fader.c > 0) {
        do_cycles = true;
        fader.c--;
        message += m.codeletters.charAt(
          Math.floor(Math.random() * m.codeletters.length)
        );
      } else {
        message += fader.l;
      }
    }

    $(el).html(message);

    if (do_cycles === true) {
      setTimeout(m.animateFadeBuffer, 50);
    } else {
      setTimeout(m.cycleText, 2000);
    }
  };

  m.cycleText = function() {
    m.message = m.message + 1;
    if (m.message >= m.messages.length) {
      m.message = 0;
    }

    m.current_length = 0;
    m.fadeBuffer = false;
    $(el).html("");

    setTimeout(m.animateIn, 200);
  };

  m.init();
};

console.clear();
var messenger = new Messenger($("#sobre"));

var Messenger2 = function(el) {
  "use strict";
  var m = this;

  m.init = function() {
    m.codeletters = "&#*+%?£@§$";
    m.message = 0;
    m.current_length = 0;
    m.fadeBuffer = false;
    m.messages = ["CURRÍCULUM"];

    setTimeout(m.animateIn, 100);
  };

  m.generateRandomString = function(length) {
    var random_text = "";
    while (random_text.length < length) {
      random_text += m.codeletters.charAt(
        Math.floor(Math.random() * m.codeletters.length)
      );
    }

    return random_text;
  };

  m.animateIn = function() {
    if (m.current_length < m.messages[m.message].length) {
      m.current_length = m.current_length + 2;
      if (m.current_length > m.messages[m.message].length) {
        m.current_length = m.messages[m.message].length;
      }

      var message = m.generateRandomString(m.current_length);
      $(el).html(message);

      setTimeout(m.animateIn, 20);
    } else {
      setTimeout(m.animateFadeBuffer, 20);
    }
  };

  m.animateFadeBuffer = function() {
    if (m.fadeBuffer === false) {
      m.fadeBuffer = [];
      for (var i = 0; i < m.messages[m.message].length; i++) {
        m.fadeBuffer.push({
          c: Math.floor(Math.random() * 12) + 1,
          l: m.messages[m.message].charAt(i)
        });
      }
    }

    var do_cycles = false;
    var message = "";

    for (var i = 0; i < m.fadeBuffer.length; i++) {
      var fader = m.fadeBuffer[i];
      if (fader.c > 0) {
        do_cycles = true;
        fader.c--;
        message += m.codeletters.charAt(
          Math.floor(Math.random() * m.codeletters.length)
        );
      } else {
        message += fader.l;
      }
    }

    $(el).html(message);

    if (do_cycles === true) {
      setTimeout(m.animateFadeBuffer, 50);
    } else {
      setTimeout(m.cycleText, 2000);
    }
  };

  m.cycleText = function() {
    m.message = m.message + 1;
    if (m.message >= m.messages.length) {
      m.message = 0;
    }

    m.current_length = 0;
    m.fadeBuffer = false;
    $(el).html("");

    setTimeout(m.animateIn, 200);
  };

  m.init();
};

console.clear();
var messenger = new Messenger2($("#cv"));

/* Váriaveis de alteração do background */

const background1 = document.querySelector(".background1");
const background2 = document.querySelector(".background2");
const background3 = document.querySelector(".background3");
const background4 = document.querySelector(".background4");
const background5 = document.querySelector(".background5");
const background6 = document.querySelector(".background6");
const background7 = document.querySelector(".background7");
const toggleBody = document.querySelector(".toggle-body");
const toggleBody2 = document.querySelector(".toggle-body2");
const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtn2 = document.querySelector(".toggle-btn2");

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

$(document).ready(function() {
  /* Atualiza ano no footer */
  $("#ano").text(new Date().getFullYear());

  /* Botão toggle background */
  toggleBtn.addEventListener("click", () => {
    background1.classList.toggle("background--on1");
    background2.classList.toggle("background--on2");
    background3.classList.toggle("background--on3");
    background4.classList.toggle("background--on4");
    background5.classList.toggle("background--on5");
    background6.classList.toggle("background--on6");
    background7.classList.toggle("background--on7");
    toggleBody.classList.toggle("toggle-body--on");
    toggleBtn.classList.toggle("toggle-btn--on");
    toggleBtn.classList.toggle("toggle-btn--scale");
  });

  /* Botão mobile toggle background */
  toggleBtn2.addEventListener("click", () => {
    background1.classList.toggle("background--on1");
    background2.classList.toggle("background--on2");
    background3.classList.toggle("background--on3");
    background4.classList.toggle("background--on4");
    background5.classList.toggle("background--on5");
    background6.classList.toggle("background--on6");
    background7.classList.toggle("background--on7");
    toggleBody2.classList.toggle("toggle-body2--on");
    toggleBtn2.classList.toggle("toggle-btn2--on");
    toggleBtn2.classList.toggle("toggle-btn2--scale");
  });

  /* Botão para voltar ao top sutil */
  $("#back-to-top").on("click", function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 1200);
  });

  /* Cria anéis proporcional ao height do caderno */
  function makeRing(num, top) {
    if (num > 0) {
      top += 20;
      var ring = '<div class="ring" id="ring' + num + '"> </div>';
      $(".notepad").append(ring);
      $("#ring" + num).css("top", top);
      num--;
      makeRing(num, top);
    }
  }

  makeRing(18, 15);
});
