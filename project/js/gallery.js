let imageNumber = 0;
let tabNumber = 0;
let tabNumber2 = 0;
let headerNumber = 0;
function changeImageNumber(n){
  imageNumber += n;
  if (imageNumber>3) {
    imageNumber = 0;
  }
  if (imageNumber<0) {
    imageNumber = 3;
  }
  changeImage();
}

function changeImageTab(n, i, m){
  tabNumber = n;
  headerNumber = i;
  tabNumber2 = m;
  imageNumber = 0;
  changeImage();
}

const srcArr = [
  [
  ['./images/fire.jpg','./images/pribyslav.jpeg','./images/amylon.jpeg','./images/4.jpeg'],
  ],
  [
  ['http://source.unsplash.com/hlwLBqBmlf0/1920x1080','http://source.unsplash.com/qcJU5_0vbOY/1920x1080','http://source.unsplash.com/bVfiWl9pZrs/1920x1080','http://source.unsplash.com/ggmOqtUCxLU/1920x1080'],
  ['./images/haale.jpeg','./images/haale_university.jpeg','http://source.unsplash.com/bVfiWl9pZrs/1920x1080','http://source.unsplash.com/ggmOqtUCxLU/1920x1080'],
  ],
  [
  ['./images/stackoverflow.png','./images/javascript.png','./images/7.jpg','./images/8.jpeg'],
  ['./images/automation.jpg','./images/kabely.jpg','./images/instalace.jpg','./images/happy.jpg'],
  ],
  [
  ['https://upload.wikimedia.org/wikipedia/commons/3/36/Captura_de_KDE_Plasma_5.13.4.png','./images/steam.png']
  ]
  ];
const headerArr = [['home'],['liepzig','halle'],['week 1','week 2'],['free time']];
const textContent = [
  ["i am Zdenek Cejka. i made this website on erasmus+ program. i am from pribyslav. "],
  [
  ["Leipzig with a population of 624,689 inhabitants as of 2022,[8] is the most populous city in the German state of Saxony, the second most populous city in the area of the former East Germany after (East) Berlin, and Germany's eighth most populous. Leipzig/Halle Airport is situated in Schkeuditz, between Leipzig and Halle (Saale). The name of the city and those of many of its districts are of Slavic origin."],
  ["Halle (Saale), or simply Halle (German: [ˈhalə]; from the 15th to the 17th century: Hall in Sachsen; until the beginning of the 20th century: Halle an der Saale [ˈhalə ʔan deːɐ̯ ˈzaːlə] ⓘ; from 1965 to 1995: Halle/Saale) is the largest city of the German state of Saxony-Anhalt, the fourth most populous city in the area of former East Germany after (East) Berlin, Leipzig and Dresden, as well as the 31st largest city of Germany, and with around 244,000[3] inhabitants, it is slightly more populous than the state capital of Magdeburg."]
  ],
  [
  ["we made our website that we will udpate with what we did throughout our stay"],
  ["we did electro installation, smart home setting and updating our webside"]
  ],
  [""]
  ]


function changeImage(){
document.getElementById('image').src = srcArr[tabNumber][tabNumber2][imageNumber];
document.getElementById('descriptionHeader').textContent= headerArr[tabNumber][headerNumber];
document.getElementById('descritptionText').textContent= textContent[tabNumber][headerNumber];
}
