var w = window.innerWidth,
  h = window.innerHeight,
  canvas = document.getElementById("sand"),
  ctx = canvas.getContext("2d"),
  rate = 50,
  arc = 350,
  time,
  count,
  size = 2,
  speed = 10,
  lights = new Array(),
  colors = ["lightblue"];

canvas.setAttribute("width", w);
canvas.setAttribute("height", h);

function init() {
  time = 0;
  count = 0;

  for (var i = 0; i < arc; i++) {
    lights[i] = {
      x: Math.ceil(Math.random() * w),
      y: Math.ceil(Math.random() * h),
      toX: Math.random() * 5 + 1,
      toY: Math.random() * 5 + 1,
      c: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * size,
    };
  }
}

function bubble() {
  ctx.clearRect(0, 0, w, h);

  for (var i = 0; i < arc; i++) {
    var li = lights[i];

    ctx.beginPath();
    ctx.arc(li.x, li.y, li.size, 0, Math.PI * 2, false);
    ctx.fillStyle = li.c;
    ctx.fill();

    li.x = li.x + li.toX * (time * 0.05);
    li.y = li.y + li.toY * (time * 0.05);

    if (li.x > w) {
      li.x = 0;
    }
    if (li.y > h) {
      li.y = 0;
    }
    if (li.x < 0) {
      li.x = w;
    }
    if (li.y < 0) {
      li.y = h;
    }
  }
  if (time < speed) {
    time++;
  }
  timerID = setTimeout(bubble, 1000 / rate);
}
init();
bubble();
//scroll
let nav = document.querySelector("nav"),
  btn_down = document.querySelector(".btn_down"),
  li_about = document.querySelector(".li_about"),
  li_seasons = document.querySelector(".li_seasons"),
  li_quote = document.querySelector(".li_quote"),
  li_warriors = document.querySelector(".li_warriors"),
  li_subscribe = document.querySelector(".li_subscribe");
btn_down.onclick = function () {
  scroll(670);
};
li_about.onclick = function () {
  scroll(670);
};
li_seasons.onclick = function () {
  scroll(1165);
};
li_quote.onclick = function () {
  scroll(1665);
};
li_warriors.onclick = function () {
  scroll(2159);
};
li_subscribe.onclick = function () {
  scroll(2830);
};

function scroll(topTo) {
  window.scrollTo({ behavior: "smooth", top: topTo });
}
if (window.scrollY>670) {
  nav.style.padding = "15px 140px";
}
else{
  nav.style.padding = "0px 140px";
}
document.addEventListener("scroll",function() {
  if (window.scrollY>670) {
    nav.style.padding = "15px 140px";
  }
  else{
    nav.style.padding = "0px 140px";
  }
});

//slider
let warriors = document.querySelector(".warriors"),
  btn_previous = document.querySelector(".btn_previous"),
  visible_warriors = document.querySelector(".visible_warriors"),
  ul_warriors_list = document.querySelector(".ul_warriors_list"),
  warrior = document.querySelector(".warrior"),
  btn_next = document.querySelector(".btn_next"),
  color_swicher = document.querySelector(".color_swicher"),
  warriors_info = [
    {
      id: 0,
      name: " ERTUGRUL BEY",
      img: "images/warriors/ERTUGRUL BEY.jpg",
      info: "The son of Suleyman Shah, Ertugrul is a brave warrior who fights for his dreams and ideals. He is the protector of the oppressed, willing to sacrifice his life for the cause of justice.",
    },
    {
      id: 1,
      name: "TURGUT",
      img: "images/warriors/TURGUT.jpg",
      info: "A fearsome axe-wielding warrior, Turgut is one of the most skilled alps of the Kayi tribe. Although his loyalty is put to the test, he remains a close friend and confidant of Ertugrul.",
    },
    {
      id: 2,
      name: "BAMSI",
      img: "images/warriors/BAMSI.jpg",
      info: "An indispensable alp of the Kayi tribe, Bamsi is a skilled soldier who can fight with double swords. Despite his fierce looks, he has a kind heart inside.",
    },
    {
      id: 3,
      name: "GUNDOGDU",
      img: "images/warriors/GUNDOGDU.jpg",
      info: "The eldest son of Suleyman Shah, Gundogdu, aspires to be the leader of the Kayi tribe after his father. Patience is his most significant virtue, and his biggest weakness is to get influenced by the people he values.",
    },
    {
      id: 4,
      name: "DOGAN",
      img: "images/warriors/DOGAN.jpg",
      info: "One of Ertugrul's most trusted alps, Dogan is capable of coming up with a solution when faced with a challenging situation. He is expert tracker and also possesses a witty sense of humour.",
    },

    {
      id: 5,
      name: "SULEYMAN SHAH",
      img: "images/warriors/SULEYMAN SHAH.jpg",
      info: "The leader of the Kayi tribe, Suleyman Shah, is a wise leader who represents the traditions of his people. He is a merciful father but is willing to take harsh measures for the good of his people and the sake of justice.",
    },
    {
      id: 6,
      name: "DELI DEMIR",
      img: "images/warriors/DELI DEMIR.jpg",
      info: "A skilled bladesmith, an expert storyteller, a caring father and a loyal friend, Deli Demir always stands by Ertugrul and his companions in their most difficult moments.",
    },
  ],
  warrior_active = document.querySelector(".warrior_active");
  warriors_map = warriors_info
  .map((e) => {
    return `
    <li class="warrior">
    <img src="${e.img}" alt="">
    <span>${e.name}</span>
    <span>${e.info}</span>

     </li>
    `;
  }).join("");
  warrior_active.innerHTML = `
          <div class="warrior_img">
          <img src="${warriors_info[0].img}" alt="">
        </div>
        <div class="warrior_info">
          <span>${warriors_info[0].name}</span>
          <p>${warriors_info[0].info}</p>
        </div>

  `;
ul_warriors_list.innerHTML = warriors_map;

warrior_last_child = ul_warriors_list.children.length - 1;
ul_warriors_list.prepend(ul_warriors_list.children[warrior_last_child]);
let margin_value = 237,
  translateX_value = 0;
btn_next.addEventListener("click", function () {
  margin_value += 237;
  ul_warriors_list.animate([{ marginLeft: `${-margin_value}px` }], {
    duration: 350,
    fill: "forwards",
  });
  translateX_value += 237;
  setTimeout(function () {
    ul_warriors_list.appendChild(ul_warriors_list.children[0]);
    ul_warriors_list.style.transform = ` translateX(${translateX_value}px)`;
  }, 350);
  warrior_active.innerHTML = `
  <div class="warrior_img">
  <img src="${ul_warriors_list.children[2].children[0].src}" alt="">
</div>
<div class="warrior_info">
  <span>${ul_warriors_list.children[2].children[1].textContent}</span>
  <p>${ul_warriors_list.children[2].children[2].textContent}</p>
</div>

`;

});
btn_previous.addEventListener("click", function () {
  margin_value -= 237;

  ul_warriors_list.animate([{ marginLeft: `${-margin_value}px` }], {
    duration: 350,
    fill: "forwards",
  });
  translateX_value -= 237;

  setTimeout(function () {
    ul_warriors_list.prepend(ul_warriors_list.children[warrior_last_child]);
    ul_warriors_list.style.transform = ` translateX(${translateX_value}px)`;
  }, 350);
  warrior_active.innerHTML = `
  <div class="warrior_img">
  <img src="${ul_warriors_list.children[0].children[0].src}" alt="">
</div>
<div class="warrior_info">
  <span>${ul_warriors_list.children[0].children[1].textContent}</span>
  <p>${ul_warriors_list.children[0].children[2].textContent}</p>
</div>

`;
});
ul_warriors_list.addEventListener("click",function(e) {
  for (let i = 0; i < warriors_info.length; i++) {
   
    if (warriors_info[i].img === e.target.getAttribute("src")) {
          warrior_active.innerHTML = `
          <div class="warrior_img">
          <img src="${warriors_info[i].img}" alt="">
        </div>
        <div class="warrior_info">
          <span>${warriors_info[i].name}</span>
          <p>${warriors_info[i].info}</p>
        </div>
        
        `;
        
    }
    
  }
});
color_swicher.addEventListener("click",function(e) {

  if (e.target.classList.contains("blue_theme")) {
  //  e.target.nextSibling.classList.remove("active_theme");
  console.log(e.target.parentElement.children.length);
  for (let i = 0; i < e.target.parentElement.children.length; i++) {
    e.target.parentElement.children[i].classList.remove("active_theme");
  }

    document.body.classList.remove("red");
    e.target.classList.add("active_theme");
  }
  else  if (e.target.classList.contains("red_theme")) {
    for (let i = 0; i < e.target.parentElement.children.length; i++) {
      e.target.parentElement.children[i].classList.remove("active_theme");
    }
   // e.target.previousSibling.classList.remove("active_theme");
    document.body.classList.add("red");
    e.target.classList.add("active_theme");
  }
});