$(document).on("click", ".flip", function () {
  $(this).closest(".box").children(".panel").slideToggle("Fast");
});

console.log(
  "%cBrowser-Toolkit\n༼ つ ◕_◕ ༽つ",
  "color:purple; font-size:3rem; text-decoration:underline; font-weight:bold;"
);

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

function load1() {
  var myName = JSON.parse(localStorage.getItem("name"));
  var myLink = JSON.parse(localStorage.getItem("link"));
  var myColor = JSON.parse(localStorage.getItem("color"));
  if (myName === null || myLink === null) {
    return;
  }
  var i;
  for (i = 0; i < myName.length; i++) {
    var name = myName[i];
    var color = myColor[i];
    var address = myLink[i];
    var bookmark = document.createElement("div");
    var bookmarks = document.getElementById("bookmarks");
    var a = document.createElement("a");
    var trash = document.getElementsByClassName("closeBtn");
    a.className = "overlay";
    a.setAttribute("href", address);
    a.setAttribute("target", "blank");
    bookmark.className = "bookmark";
    var span = document.createElement("span");
    span.className = "span";
    span.innerHTML = name;
    var button = document.createElement("button");
    button.className = "closeBtn";
    button.innerHTML = "<i class='fas fa-trash-alt'></i>";
    bookmark.appendChild(a);
    bookmark.appendChild(button);
    bookmark.appendChild(span);
    bookmark.setAttribute("style", color);
    try {
      bookmarks.appendChild(bookmark);
    } catch (error) {}
    var d;
    for (d = 0; d < trash.length; d++) {
      trash[i].onclick = function (e) {
        e.stopPropagation();

        this.parentElement.remove();
        localStorage.removeItem("name");
        localstorage.removeItem("link");
        localStorage.removeItem("color");
      };
    }
  }
}

function load2() {
  var val = JSON.parse(localStorage.getItem("title"));
  var txt = localStorage.getItem("text");
  txt = JSON.parse(txt);
  if (val === null || txt === null) return;
  var i;
  for (i = 0; i < val.length; i++) {
    myVal = val[i];
    myTxt = txt[i];
    var li = document.createElement("li");
    li.className = "box";
    if (
      window.location.pathname == "/tools/notes.html" ||
      window.location.pathname == "/tools/notes"
    ) {
      document.getElementById("myUL").appendChild(li);
    }
    var span = document.createElement("SPAN");
    var clTxt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(clTxt);
    li.appendChild(span);
    var div = document.createElement("DIV");
    div.className = "flip";
    div.innerHTML = myVal;
    li.appendChild(div);
    var textarea = document.createElement("TEXTAREA");
    textarea.className = "panel";
    textarea.value = myTxt;
    li.appendChild(textarea);

    var x;
    for (x = 0; x < close.length; x++) {
      close[i].onclick = function () {
        var div = this.parentElement;
        div.remove();
        localStorage.removeItem("title");
        localStorage.removeItem("text");
      };
    }
  }
}

window.addEventListener("load", function () {
  load2();
});

window.addEventListener("load", function () {
  load1();
});

function beforeLoad() {
  var titles = [];
  var texts = [];
  var boxes = document.getElementsByClassName("box");
  var i;
  for (i = 0; i < boxes.length; i++) {
    var flip = boxes[i].querySelector(".flip").innerHTML;
    var panel = boxes[i].querySelector(".panel").value;
    titles.push(flip);
    texts.push(panel);
    localStorage.setItem("title", JSON.stringify(titles));
    localStorage.setItem("text", JSON.stringify(texts));
  }
}

function beforeLoad2() {
  var names = [];
  var links = [];
  var colors = [];
  var bookmarks = document.getElementsByClassName("bookmark");

  var q;
  for (q = 0; q < bookmarks.length; q++) {
    var name = bookmarks[q].querySelector(".span").innerHTML;
    var Alink = bookmarks[q].querySelector("a").getAttribute("href");
    var color = bookmarks[q].getAttribute("style");
    names.push(name);
    links.push(Alink);
    colors.push(color);
    localStorage.setItem("name", JSON.stringify(names));
    localStorage.setItem("link", JSON.stringify(links));
    localStorage.setItem("color", JSON.stringify(colors));
  }
}

window.addEventListener("beforeunload", function () {
  beforeLoad2();
});

window.addEventListener("beforeunload", function () {
  beforeLoad();
});

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.remove();
    localStorage.removeItem("title");
    localStorage.removeItem("text");
  };
}
function newElement() {
  var li = document.createElement("li");
  li.className = "box";
  var inputValue = document.getElementById("myInput").value;
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  var div = document.createElement("DIV");
  div.className = "flip";
  div.innerHTML = inputValue;
  li.appendChild(div);
  var textarea = document.createElement("TEXTAREA");
  textarea.className = "panel";
  textarea.placeholder = "write here";
  li.appendChild(textarea);

  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.remove();
    };
  }
}

var slideIndex = 1;

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
function searchNet() {
  var links = [
    "http://www.google.com/search?q=",
    "https://www.youtube.com/results?searchquery=",
    "https://stackoverflow.com/search?q=",
    "https://www.reddit.com/search/?q=",
  ];
  var link = links[slideIndex - 1];
  var searchInput = document.getElementById("searchTerm").value;
  if (searchInput === "") {
    alert("Atleast enter a word for god's sake!!");
    return;
  }
  searchInput = searchInput.replace(" ", "+");
  var a = link + searchInput;
  window.open(a, "blank");
  var clearInput = document.getElementById("searchTerm");
  clearInput.value = "";
}

function enterIsPressed(input, button) {
  var searchInputEle = document.getElementById(input);
  searchInputEle.addEventListener("keyup", function (event) {
    var searchButton = document.getElementById(button);
    if (event.key === "Enter") {
      searchButton.click();
    }
  });
}

const dictSearch = () => {
  var link = "https://www.dictionary.com/browse/";
  var word = document.getElementById("dictInput");
  if (word.value === "") {
    alert("Atleast enter a word for god's sake!!");
    return;
  }
  var open = link + word.value;
  window.open(open, "blank");
};

const newBookmark = () => {
  var name = document.getElementById("bookmarkName");
  var color = document.getElementById("bookmarkColor");
  var address = document.getElementById("bookmarkAddr");
  var bookmark = document.createElement("div");
  var bookmarks = document.getElementById("bookmarks");
  if (name.value === "" || !address.value === "") {
    alert("Empty field");
    return;
  }
  var a = document.createElement("a");
  var trash = document.getElementsByClassName("closeBtn");
  a.className = "overlay";
  a.setAttribute("href", address.value);
  a.setAttribute("target", "blank");
  bookmark.className = "bookmark";
  var span = document.createElement("span");
  span.className = "span";
  span.innerHTML = name.value;
  var button = document.createElement("button");
  button.className = "closeBtn";
  button.innerHTML = "<i class='fas fa-trash-alt'></i>";
  bookmark.appendChild(a);
  bookmark.appendChild(button);
  bookmark.appendChild(span);
  bookmark.style.backgroundColor = color.value;
  bookmarks.appendChild(bookmark);
  var i;
  for (i = 0; i < trash.length; i++) {
    trash[i].onclick = function (e) {
      e.stopPropagation();

      this.parentElement.remove();
      localStorage.removeItem("name");
      localStorage.removeItem("color");
      localStorage.removeItem("link");
    };
  }
  name.value = "";
  address.value = "";
};
if (
  window.location.pathname == "/tools/bookmarks.html" ||
  window.location.pathname == "/tools/bookmarks"
) {
  var addBookmark = document.getElementById("bookmarkBtn");
  addBookmark.onclick = newBookmark;
}

if (
  window.location.pathname == "/tools/clock.html" ||
  window.location.pathname == "/tools/clock"
) {
  setInterval(function () {
    const clock = document.querySelector(".display");
    //console.log(clock)
    let time = new Date();
    let sec = time.getSeconds();
    let min = time.getMinutes();
    let hr = time.getHours();
    let day = "AM";
    if (hr > 12) {
      day = "PM";
      hr = hr - 12;
    }
    if (hr == 0) {
      hr = 12;
    }
    if (sec < 10) {
      sec = "0" + sec;
    }
    if (min < 10) {
      min = "0" + min;
    }
    if (hr < 10) {
      hr = "0" + hr;
    }
    try {
      clock.textContent = hr + ":" + min + ":" + sec + " " + day;
    } catch (err) {}
  });
}

var timer = document.getElementById("nums");

var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;

function startTimer() {
  if (stoptime == true) {
    stoptime = false;
    timerCycle();
  }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timerCycle() {
  if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = "0" + sec;
    }
    if (min < 10 || min == 0) {
      min = "0" + min;
    }
    if (hr < 10 || hr == 0) {
      hr = "0" + hr;
    }

    timer.innerHTML = hr + ":" + min + ":" + sec;

    setTimeout("timerCycle()", 1000);
  }
}

function resetTimer() {
  timer.innerHTML = "00:00:00";
  stoptime = true;
  hr = 0;
  sec = 0;
  min = 0;
}

var ctmnts = 0;
var ctsecs = 0;
var startchr = 0;

function countdownTimer() {
  var mns = document.getElementById("mns");
  var scs = document.getElementById("scs");
  if (
    startchr == 0 &&
    document.getElementById("mns") &&
    document.getElementById("scs")
  ) {
    ctmnts = parseInt(document.getElementById("mns").value) + 0;
    ctsecs = parseInt(document.getElementById("scs").value) * 1;

    if (isNaN(ctmnts)) ctmnts = 0;
    if (isNaN(ctsecs)) ctsecs = 0;

    document.getElementById("mns").value = ctmnts;
    document.getElementById("scs").value = ctsecs;
    startchr = 1;
    document.getElementById("btnct").setAttribute("disabled", "disabled");
  }

  if (ctmnts == 0 && ctsecs == 0) {
    startchr = 0;
    document.getElementById("btnct").removeAttribute("disabled");

    alert("Time Up");
    return false;
  } else {
    ctsecs--;
    if (ctsecs < 0) {
      if (ctmnts > 0) {
        ctsecs = 59;
        ctmnts--;
      } else {
        ctsecs = 0;
        ctmnts = 0;
      }
    }
  }

  var fsecs = ctsecs;
  var fmins = ctmnts;
  if (fmins <= 9 && fsecs >= 10) {
    fmins = "0" + ctmnts;
    fsecs = ctsecs;
  } else if (fsecs <= 9 && fmins >= 10) {
    fmins = ctmnts;
    fsecs = "0" + ctsecs;
  } else if (fsecs <= 9 && fmins <= 9) {
    fmins = "0" + ctmnts;
    fsecs = "0" + ctsecs;
  }

  document.getElementById("showmns").innerHTML = fmins;
  document.getElementById("showscs").innerHTML = fsecs;
  setTimeout("countdownTimer()", 1000);
}

var calcInput = document.getElementById("calc-view");

function insert(num) {
  calcInput.value += num;
}
function equal() {
  let exp = calcInput.value;
  var array = exp.split(/[+-/*]/);
  if (exp && !array.some(isNaN) && array.length > 1) {
    calcInput.value = eval(exp);
  } else {
    alert("Invalid value");
  }
}
function clean() {
  calcInput.value = "";
}
function back() {
  let exp = calcInput.value;
  calcInput.value = exp.substring(0, exp.length - 1);
}

let count = document.getElementById("count");
function countAdd() {
  count.innerHTML++;
}

function countMinus() {
  count.innerHTML--;
}

function countReset() {
  count.innerHTML = 0;
}


if (
  window.location.pathname == "/index.html" ||
  window.location.pathname == "/"
){
  var content = [
    "Search the web",
    "Make notes",
    "Create bookmarks",
    "Clock the time",
    "calculate",
    "or just count",
    "Browser-Toolkit at it",
  ];
var part = 0;
var index = 0;
var intervalVal;
var element = document.querySelector("#text");
var cursor = document.querySelector("#cursor");
function Type() {
  var text = content[part].substring(0, index + 1);
  element.innerHTML = text;
  index++;

  if (text === content[part]) {
    cursor.style.display = "none";

    clearInterval(intervalVal);
    setTimeout(function () {
      intervalVal = setInterval(Delete, 25);
      cursor.style.display = "inline-block";
    }, 1000);
  }
}
function Delete() {
  var text = content[part].substring(0, index - 1);
  element.innerHTML = text;
  index--;

  if (text === "") {
    clearInterval(intervalVal);

    if (part == content.length - 1) part = 0;
    else part++;

    index = 0;

    setTimeout(function () {
      intervalVal = setInterval(Type, 70);
    }, 200);
  }
}
intervalVal = setInterval(Type, 70);
}