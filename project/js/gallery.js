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
  ['./images/1.jpeg','./images/2.jpeg','./images/3.jpeg','./images/4.jpeg'],
  ],
  [
  ['http://source.unsplash.com/hlwLBqBmlf0/1920x1080','http://source.unsplash.com/qcJU5_0vbOY/1920x1080','http://source.unsplash.com/bVfiWl9pZrs/1920x1080','http://source.unsplash.com/ggmOqtUCxLU/1920x1080'],
  ['./images/haale.jpeg','./images/haale_university.jpeg','http://source.unsplash.com/bVfiWl9pZrs/1920x1080','http://source.unsplash.com/ggmOqtUCxLU/1920x1080'],
  ],
  [
  ['./images/stackoverflow.png','./images/6.jpg','./images/7.jpg','./images/8.jpeg'],
  ['./images/automation.jpg','./images/kabely.jpg','./images/instalace.jpg','./images/happy.jpg'],
  ],
  [
  ['https://upload.wikimedia.org/wikipedia/commons/3/36/Captura_de_KDE_Plasma_5.13.4.png']
  ]
  ];
const headerArr = [['home'],['link ','link 1'],['practice','link1'],['free time']];


function changeImage(){
document.getElementById('image').src = srcArr[tabNumber][tabNumber2][imageNumber];
console.log(tabNumber, tabNumber2, imageNumber);
document.getElementById('descriptionHeader').textContent= headerArr[tabNumber][headerNumber];
document.getElementById('descritptionText').textContent= headerArr[tabNumber][headerNumber];
}
