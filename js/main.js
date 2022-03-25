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
btn_down.onclick = ()=>{
  scroll(670);
};
li_about.onclick =  ()=> {
  scroll(670);
};
li_seasons.onclick = ()=> {
  scroll(1165);
};
li_quote.onclick = ()=> {
  scroll(1665);
};
li_warriors.onclick = ()=>{
  scroll(2159);
};
li_subscribe.onclick = ()=>{
  scroll(2830);
};

function scroll(topTo) {
  window.scrollTo({ behavior: "smooth", top: topTo });
}
if (window.scrollY > 670) {
  nav.style.padding = "15px 140px";
} else {
  nav.style.padding = "0px 140px";
}
document.addEventListener("scroll", function () {
  if (window.scrollY > 670) {
    nav.style.padding = "15px 140px";
  } else {
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
  lang = "en",
  warriors_info = [
    {
      id: 0,
      name:{en:" ERTUGRUL BEY",ar:"أرطغرل"} ,
      img: "images/warriors/ERTUGRUL BEY.jpg",
      info:{
        en:"The son of Suleyman Shah, Ertugrul is a brave warrior who fights for his dreams and ideals. He is the protector of the oppressed, willing to sacrifice his life for the cause of justice.",
        ar:"أرطغرل بن سليمان شاه، محارب شجاع يقاتل في سبيل تحقيق أحلامه ومعتقداته. يكرِّس حياته لنصرة المظلوم، ويأبى أن يحني رأسه للظالم، ويسعى دائماً وفي كل شيء إلى تحقيق العدالة مهما كان ثمنها.",
      } 
    },
    {
      id: 1,
      name:{en:"TURGUT",ar:"تورغوت ألب"} ,
      img: "images/warriors/TURGUT.jpg",
      info:{
        en: "A fearsome axe-wielding warrior, Turgut is one of the most skilled alps of the Kayi tribe. Although his loyalty is put to the test, he remains a close friend and confidant of Ertugrul.",
        ar:"تورغوت ألب، من أفضل المحاربين الثلاثة المقربين من أرطغرل. مقاتل تثق القبيلة في إخلاصه ومهاراته. بارع في القتال باستخدام فأسه الذي يرهب أعدائه",
      } 
    },
    {
      id: 2,
      name:{en:"BAMSI",ar:"تورغوت ألب"} ,
      img: "images/warriors/BAMSI.jpg",
      info:{
        en:  "An indispensable alp of the Kayi tribe, Bamsi is a skilled soldier who can fight with double swords. Despite his fierce looks, he has a kind heart inside.",
        ar:"بامسي، محارب مقرَّب من أرطغرل وممن لا يمكن الاستغناء عنهم في القبيلة. مقاتل ماهر وبارع في القتال باستخدام سيفين معاً. وبالرغم من شراسة نظراته، إلا أنه يتمتع بقلب رحيم وروح تتحلى بحس الفكاهة",
      } 
    },
    {
      id: 3,
      name:{en:"GUNDOGDU",ar:"غندوغدو"} ,
      img: "images/warriors/GUNDOGDU.jpg",
      info:{
        en:  "The eldest son of Suleyman Shah, Gundogdu, aspires to be the leader of the Kayi tribe after his father. Patience is his most significant virtue, and his biggest weakness is to get influenced by the people he values.",
        ar:"غوندوغدو، الابن الأكبر لسليمان شاه، يطمح أن يصبح زعيماً لقبيلة القايي بعد والده. وبالرغم من تحليه بالصبر، إلا أن نقطة ضعفه تكمن في سرعة تأثره بالناس حوله، وخصوصاً المقربين منهم",
      } 
    },
    {
      id: 4,      
      name:{en:"DOGAN",ar:"دوغان"} ,
      img: "images/warriors/DOGAN.jpg",
      info: {
        en:"One of Ertugrul's most trusted alps, Dogan is capable of coming up with a solution when faced with a challenging situation. He is expert tracker and also possesses a witty sense of humour.",
        ar:"دوغان، أحد أكثر المحاربين قرباً من أرطغرل. يتمتع بالقدرة على إيجاد الحلول السريعة عند مواجهة التحديات. خبير في التعقب ويتحلى بروح الدعابة والفكاهة",
      }
    },
    {
      id: 5,
      name:{en:"SULEYMAN SHAH",ar:"سليمان شاه"} ,
      img: "images/warriors/SULEYMAN SHAH.jpg",
      info: {
        en:"The leader of the Kayi tribe, Suleyman Shah, is a wise leader who represents the traditions of his people. He is a merciful father but is willing to take harsh measures for the good of his people and the sake of justice.",
        ar:"سليمان شاه، سيد قبيلة القايي، وزعيم حكيم يمثل تقاليد قبيلته. أبٌ رحيم، ولكنه لا يتردد في اتخاذ القرارات أو العقوبات الصارمة التي تصب في مصلحة شعبه وفي سبيل تحقيق العدالة",
      }
    },
    {
      id: 6,
      name:{en:"DELI DEMIR",ar:"سليمان شاه"} ,
      img: "images/warriors/DELI DEMIR.jpg",
      info: {
        en:"A skilled bladesmith, an expert storyteller, a caring father and a loyal friend, Deli Demir always stands by Ertugrul and his companions in their most difficult moments.",
        ar:"ديلي دمير، أحد أسياد قبيلة القايي، وماهر في صناعة السيوف والدروع. مبارز بارع، يقف دائماً مع أرطغرل في قراراته، وخصوصاً في الأوقات الحرجة",
      }
    },
  ],
  warrior_active = document.querySelector(".warrior_active");
  warriors_map = warriors_info
  .map((e) => {
    return `
    <li class="warrior">
    <img src="${e.img}" alt="">
    <span>${e.name[`${lang}`]}</span>
    <span>${e.info[`${lang}`]}</span>
    </li>
    `;
  })
  .join("");

  warrior_active.innerHTML = `
  <div class="warrior_img">
  <img src="${warriors_info[0].img}" alt="">
</div>
<div class="warrior_info">
  <span>${warriors_info[0].name[`${lang}`]}</span>
  <p>${warriors_info[0].info[`${lang}`]}</p>
</div>

`;
ul_warriors_list.innerHTML = warriors_map;
let warrior_width = 300;
ul_warriors_list_width = warrior_width * ul_warriors_list.children.length;
ul_warriors_list.style.width = `${ul_warriors_list_width}px`;
ul_warriors_list.style.marginLeft =` -${warrior_width}px`;
for (let i = 0; i < ul_warriors_list.children.length; i++) {
  ul_warriors_list.children[i].style.width = warrior_width;
}

warrior_last_child = ul_warriors_list.children.length - 1;
ul_warriors_list.prepend(ul_warriors_list.children[warrior_last_child]);
btn_next.addEventListener("click", function () {

  ul_warriors_list.animate([{ marginLeft: `-${warrior_width*2}px` }], {duration: 350,fill:"forwards"});
  
  setTimeout(function () {
    ul_warriors_list.appendChild(ul_warriors_list.children[0]);
    
    ul_warriors_list.animate([{ marginLeft: `-${warrior_width}px` }], {duration: .00001,fill:"both"});
  },350);

  for (let i = 0; i < warriors_info.length; i++) {
      if (ul_warriors_list.children[2].children[1].textContent === warriors_info[i].name[`en`]) {
        
          warrior_active.innerHTML = `
          <div class="warrior_img">
          <img src="${warriors_info[i].img}" alt="">
        </div>
        <div class="warrior_info">
          <span>${warriors_info[i].name[`${lang}`]}</span>
          <p>${warriors_info[i].info[`${lang}`]}</p>
        </div>
        
        `;
      
    }    
  }
});
btn_previous.addEventListener("click", function () {

  ul_warriors_list.animate([{ marginLeft: `0px` }], {duration: 350,fill:"forwards"});
  
  setTimeout(function () {
    ul_warriors_list.prepend(ul_warriors_list.children[warrior_last_child]);
    
    ul_warriors_list.animate([{ marginLeft: `-${warrior_width}px` }], {duration: .00001,fill:"both"});
  },350);
  for (let i = 0; i < warriors_info.length; i++) {
    if (ul_warriors_list.children[0].children[1].textContent === warriors_info[i].name[`en`]) {

        warrior_active.innerHTML = `
        <div class="warrior_img">
        <img src="${warriors_info[i].img}" alt="">
      </div>
      <div class="warrior_info">
        <span>${warriors_info[i].name[`${lang}`]}</span>
        <p>${warriors_info[i].info[`${lang}`]}</p>
      </div>
      
      `;
    
  }    
}
});
ul_warriors_list.addEventListener("click", function (e) {
  for (let i = 0; i < warriors_info.length; i++) {
    if (warriors_info[i].img === e.target.getAttribute("src")) {
      warrior_active.innerHTML = `
          <div class="warrior_img">
          <img src="${warriors_info[i].img}" alt="">
        </div>
        <div class="warrior_info">
          <span>${warriors_info[i].name[`${lang}`]}</span>
          <p>${warriors_info[i].info[`${lang}`]}</p>
        </div>
        
        `;
    }
  }
});
//change themes
let select = document.querySelector("select"),
color_swicher = document.querySelector(".color_swicher"),
    words = {
    intro: [
      {
        span: {
          en: "THE STORY ABOUT",
          ar: "القصة حول",
        },
      },
      {
        h1: {
          en: "THE RESURRECTION OF A NATION",
          ar: "قيامة أُمة",
        },
      },
      {
        p: {
          en: " Welcome to the Kayi tribe! 'Resurrection: Ertugrul' is a Turkish period drama that tells the story of the famous 13th-century warrior Ertugrul Bey, the father of Osman Gazi who would go on to establish the Ottoman Empire.",
          ar: "مرحباً بكم في قبيلة القايي! مسلسل 'قيامة أرطغرل' هو عرض درامي تركي لفترة تاريخية، يروي قصة المحارب الشهير أرطغرل بك الذي عاش في القرن الثالث عشر، والد عثمان بك مؤسس الإمبراطورية العثمانية.",
        },
      },
    ],
    nav: [
      {
        img:{
          en :"images/intro/logo-en.png",
          ar : "images/intro/logo-ar.png",
        },
      },
      {
        li:[
          {
            en:"About",
            ar:"من نحن",
          },
          {
            en:"Seasons",
            ar:"المواسم",
          },
          {
            en:"Quote",
            ar:"اقتباس",
          },
          {
            en:"Warriors",
            ar:"المحاربين",
          },
          {
            en:"Subscribe",
            ar:"اشتراك",
          },
        ],
      }
    ],
    about_info:[
      {
        span:{
          en:`THE STORY OF THE<h2>KAYI TRIBE</h2>`,
          ar:`قصة  <h2>قبيلة القايي </h2> `
        },
        p:{
          en:`  Set in Anatolia (modern-day Turkey), the nomadic Kayi tribe of the
          Oghuz Turks are on a quest to find a place they can finally call home.
          Ertugrul, the leader of the tribe, leads his people through
          perseverance against hardship while striving for justice and
          maintaining the traditions of the land. By battling his enemies with
          strength and bravery, Ertugrul consequently plants the seed that would
          lead to the founding of the Ottoman Empire, which spread across three
          continents and ruled for six centuries.`,
          ar:`على أراضي الأناضول (تركيا حديثاً)، تسعى قبيلة القايي من أتراك الأغوز إلى إيجاد موطن لها ينهي آلامها وتنقلاتها المستمرة. يقود أرطغرل القبيلة في سبيل ذلك متحدياً الصعاب وساعياً لتحقيق العدالة والحفاظ على على تقاليد قبيلته. بعد الانتصار على أعدائه بقوة وشجاعة، يزرع أرطغرل البذور التي ستؤدي إلى نشأة الإمبراطورية العثمانية التي امتدت عبر ثلاث قارات وحكمت لستة قرون.
          `,
        }
      }
    ],
    season_info:[
      {
        h2:{
          en:"Season 1",
          ar:"الموسم الأول",
        },
        p:{
          en:` Ertugrul and his friends encounter the Knights Templar on a hunt.
          After rescuing three Seljuk prisoners, they return to the Kayi
          tribe. But the new arrivals cause problems for the tribe's leader
          Suleyman Shah. He dispatches Ertugrul on a mission to find new land
          and seek an agreement with the Sultan in Aleppo.`,
          ar:`بينما كان أرطغرل في إحدى جولات الصيد مع جنوده، قام بإنقاذ حليمة سلطان، ووالدها، وأخاها من فرسان المعبد، وأحضرهم إلى مقر قبيلة القايي، ما تسبب في استشاطة فرسان المعبد غضباً على زعيم القبيلة سليمان شاه والذي قرر بعدها إرسال ابنه أرطغرل إلى حلب في مهمة للبحث عن موطن جديد للقبيلة`,
        }
      },
      {
        h2:{
          en:"Season 2",
          ar:"الموسم الثاني",
        },
        p:{
          en:`Ertugrul is captured by the Mongols. After escaping, his return to
          the tribe creates internal strife with his cousin Tugtekin.
          Meanwhile, Ertugrul's long-lost brother appears. The Kayi tribe
          splits as Ertugrul and a group journey to West Anatolia, leaving the
          rest of the tribe.`,
          ar:`بعد عناء طويل، يستطيع أرطغرل أن يفلت من أيدي المغول، لكن عودته إلى القبيلة سببت صراعاً مع ابن خاله توتكين. في هذه الأثناء، يظهر الأخ الأكبر لأرطغرل بعد غياب طويل. ويقرر أرطغرل أن ينتقل إلى غرب الأناضول مع من يتفق مع قراره من القبيلة`,
        }
      },
      {
        h2:{
          en:"Season 3",
          ar:"الموسم الثالث",
        },
        p:{
          en:` The Cavdar tribe, the most powerful in western Anatolia, deal with
          Ertugrul's arrival. Deceit and manipulation manifest and a
          leadership struggle ensues. To strengthen ties, Turgut Alp marries
          Aslihan from the Cavdar. But danger lurks as Emir Sadettin Kopek
          plots a trap for Ertugrul.`,
          ar:`قبيلة تشافدار، أقوى قبيلة في غرب الأناضول والتي توجب على أرطغرل أن يتعامل معها بعد وصوله تلك الأراضي، حيث كانت الأجواء مليئة بالخداع والتلاعب والصراع على القيادة. في هذه الأثناء، يتزوج تورغوت من ألب أصلان من قبيلة تشافدار لتقوية العلاقة بين القبيلتين، إلا أن سعد الدين كوبيك ينصب فخاً خطيراً لأرطغرل`,
        }
      },
      {
        h2:{
          en:"Season 4",
          ar:"الموسم الرابع",
        },
        p:{
          en:`  As the Kayi tribe mourn Ertugrul's suspected death, Dundar becomes
          the bey. But Ertugrul returns, banishes Dundar and declares war on
          the Byzantines. The Sultan is poisoned by Kopek and dies in
          Ertugrul's hands. In a final showdown, Ertugrul fights Kopek and
          Osman's birth is a bittersweet occasion.`,
          ar:`بعد وفاة أرطغرل، يتولى أخوه دوندار سيادة القبيلة، ولكن أرطغرل يفاجئ الجميع بعودته ويعلن الحرب ضد الصليبيين. ينصب سعد الدين كوبيك فخاً خطيراً لأرطغرل ويقوم بتسميم السلطان ليموت بين يدي أرطغرل ليلقي اللوم عليه. عندها يحتدم الصراع مع سعد الدين وتأتي ولادة عثمان حدثاً جميلاً ترافقه مرارة الأحداث الأخرى`,
        }
      },
      {
        h2:{
          en:"Season 5",
          ar:"الموسم الخامس",
        },
        p:{
          en:`  Ten years after the Battle of Kosedag, the Mongols control the
          Seljuk state. A spy is sent to gain information on Ertugrul's
          rebellious plans but falls in love with him. Meanwhile, an assassin
          works with the Mongols to wipe out the Oguz tribes.`,
          ar:`بعد فتوحات كبيرة رافقها سنوات من الصراع، يستقر أرطغرل وقبيلته في سغوت، ويؤسس فيها نظاماً مبنياً على الأمان والثقة. إلا أن والد إلبيلغي خاتون يقوم بإرسال ابنته خاتون لتقوم بالتجسس على أرطغرل، لكنها تقع في غرامه.`,
        }
      },
    ],
    quote_content:[
      {
        p:{
          en:`To those who say our power is not enough, we will say our faith is enough. To those who say our lifespan is not enough, we will say our history is enough. To those who say that the universe is not enough, we say God is enough for us.
          `,
          ar:`سنقول للمشككين في قوتنا، أن إيماننا كافٍ. وسنقول للمشككين في بقائنا على قيد الحياة لحين تنفيذ أهدافنا، أن تاريخنا كاف. سنقول للمشككين في الكون، أن وجود الله يكفينا.`,
        },
        span:{
          en:"Ertugrul Gazi",
          ar:"الغازي أرطغرل",
        },
      }
    ],
    subscribe_content:[
      {
        span:{
          en:"SUBSCRIBE TO THE TRIBE!",
          ar:"اشترك في القبيلة!",
        },
        p:{
          en:`You’ll receive the latest updates from TRT.
          <br>
          THE EMAIL FIELD IS REQUIRED.
          `,
          ar:`TRT ستحصل على آخر الأخبار من 
          <br>
          أدخل بريدك الإلكتروني واشترك بالنشرة البريدية`,
        },
        placeholder:{
          en:`Your Email`,
          ar:`بريدك الإلكتروني`,
        }
      }
    ],
    footer:[
      {
        span:{
          en:`FOLLOW Us`,
          ar:`تابعنا`,
        },
        rights:{
          en:`<strong>coded by : </strong>  <a href="https://a-mohammed2001.github.io/My-Cv/" target="blank">Ahmed Abou Khatwa</a>`,
          ar:`<strong>بواسطه : </strong>  <a href="https://a-mohammed2001.github.io/My-Cv/" target="blank">أحمد أبو خطوه</a>`,
        }
      }
    ],
  };
select.addEventListener("change", function () {
  document.body.classList.toggle("ar");
  if (document.body.classList.contains("ar")) {
    lang = "ar";
  } else {
    lang = "en";
  }
 let intro_content = document.querySelector(".intro .content"),
 nav_img = document.querySelector("nav img"),
 nav_ul = document.querySelector("nav ul"),
 about_info = document.querySelector(".about_info"),
 season_info = document.querySelectorAll(".season_info"),
 quote = document.querySelector(".quote"),
 subscribe_text = document.querySelector(".subscribe_text"),
 subscribe_input = document.querySelector(".subscribe_input"),
 footer = document.querySelector("footer");


  intro_content.innerHTML = `
    <span>${words.intro[0].span[`${lang}`]}</span>
    <h1>${words.intro[1].h1[`${lang}`]}</h1> 
    <p>${words.intro[2].p[`${lang}`]}</p>
    `;
  nav_img.src = words.nav[0].img[lang];
  for (let i = 0; i < nav_ul.children.length; i++) {
      nav_ul.children[i].textContent = words.nav[1].li[i][lang];
  };
  about_info.innerHTML=`
  <span><bdi>${words.about_info[0].span[lang]}</bdi></span>
  <p><bdi>${words.about_info[0].p[lang]}</bdi></p>
  `;
  for (let i = 0; i <season_info.length; i++) {
    season_info[i].children[0].textContent = words.season_info[i].h2[lang];
    season_info[i].children[1].textContent = words.season_info[i].p[lang];

  }
  quote.children[0].children[1].textContent = words.quote_content[0].p[lang];//the quote
  quote.children[1].textContent = words.quote_content[0].span[lang];//guote from
  warrior_active.innerHTML = `
  <div class="warrior_img">
  <img src="${warriors_info[0].img}" alt="">
</div>
<div class="warrior_info">
  <span>${warriors_info[0].name[`${lang}`]}</span>
  <p>${warriors_info[0].info[`${lang}`]}</p>
</div>

`;
subscribe_text.innerHTML = `
        <span><bdi>${words.subscribe_content[0].span[lang]}</bdi></span>
        <p>${words.subscribe_content[0].p[lang]}</p>
`;
subscribe_input.children[0].setAttribute("placeholder",`${words.subscribe_content[0].placeholder[lang]}`);
footer.children[0].children[0].src = words.nav[0].img[lang];
for (let i = 0; i < footer.children[0].children[1].children.length; i++) {
  footer.children[0].children[1].children[i].textContent = words.nav[1].li[i][lang];
};
footer.children[1].children[0].textContent = words.footer[0].span[lang];
footer.children[2].children[0].innerHTML =words.footer[0].rights[lang];

});
color_swicher.addEventListener("click", function (e) {
  if (e.target.classList.contains("blue_theme")) {
    //  e.target.nextSibling.classList.remove("active_theme");
    for (let i = 0; i < e.target.parentElement.children.length; i++) {
      e.target.parentElement.children[i].classList.remove("active_theme");
    }

    document.body.classList.remove("red");
    e.target.classList.add("active_theme");
  } else if (e.target.classList.contains("red_theme")) {
    for (let i = 0; i < e.target.parentElement.children.length; i++) {
      e.target.parentElement.children[i].classList.remove("active_theme");
    }
    // e.target.previousSibling.classList.remove("active_theme");
    document.body.classList.add("red");
    e.target.classList.add("active_theme");
  }
});
