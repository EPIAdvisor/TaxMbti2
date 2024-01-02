const header = document.getElementById('header');
const footer = document.getElementById('footer');
const qna = document.getElementById('qna');
const u_name = document.querySelector('input[type=text]');
const wrap = document.getElementById('wrap');
const tabletMQL = window.matchMedia("all and (min-width: 768px)");
const pcMQL = window.matchMedia("all and (min-width: 1024px)");
const ENDPOINT = 16;
const select = [];
let qIdx = -1;

const goTo = (dest) => {
  let elem;
  let elemTop;
  if (dest === 'artist') {
    elem = document.getElementById('intro-box');
  } else {
    elem = document.getElementById('share-box');
  }
  elemTop = window.pageYOffset + elem.getBoundingClientRect().top;
  if (pcMQL.matches) {
    elemTop -= 150;
  } else if (tabletMQL.matches) {
    elemTop -= 115;
  } else {
    elemTop -= 60;
  }
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: elemTop
  });
}
const goArtist = () => goTo('artist');
const goShare = () => goTo('share');

const copy = () => {
  const tmp = document.createElement('textarea');
  document.body.appendChild(tmp);
  tmp.value = url;
  tmp.select();
  document.execCommand('copy');
  document.body.removeChild(tmp);
}

const calcScore = () => {
  let point = 0;
  for (let i = 0; i < ENDPOINT; i++) {
    point += qnaList[i].a[select[i]].score;
  }
  return point;
}

const calcScore2 = () => {
  let point2 = 0;
  for (let i = 0; i < ENDPOINT; i++) {
    point2 += qnaList[i].a[select[i]].score2;
  }
  return point2;
}

const calcScore3 = () => {
  let point3 = 0;
  for (let i = 0; i < ENDPOINT; i++) {
    point3 += qnaList[i].a[select[i]].score3;
  }
  return point3;
}

const calcScore4 = () => {
  let point4 = 0;
  for (let i = 0; i < ENDPOINT; i++) {
    point4 += qnaList[i].a[select[i]].score4;
  }
  return point4;
}

const calcScore5 = () => {
  let point5 = 0;
  for (let i = 0; i < ENDPOINT; i++) {
    point5 += qnaList[i].a[select[i]].score5;
  }
  return point5;
}

const sortResult = (point) => {
  let num = 0;
  if (point <= 10) {
    num = 0;
  } else if (point <= 54) {
    num = 1;
  } else if (point <= 89) {
    num = 2;
  } else {
    num = 3;
  }
  return num;
}

const sortResult2 = (point2) => {
  let num2 = 1;
  if (point2 == 0) {
    num2 = 1;
  } else if (point2 == 1) {
    num2 = 2;
  } else if (point2 == 2) {
    num2 = 3;
  } else if (point2 == 3) {
    num2 = 4;
  } else {
    num2 = 5;
  }
  return num2;
}

const sortResult3 = (point3) => {
  let num3 = 1;
  if (point3 == 0) {
    num3 = 1;
  } else if (point3 == 1) {
    num3 = 2;
  } else if (point3 == 2) {
    num3 = 3;
  } else if (point3 == 3) {
    num3 = 4;
  } else {
    num3 = 5;
  }
  return num3;
}

const sortResult4 = (point4) => {
  let num4 = 1;
  if (point4 == 0) {
    num4 = 1;
  } else if (point4 == 1) {
    num4 = 2;
  } else if (point4 == 2) {
    num4 = 3;
  } else {
    num4 = 4;
  }
  return num4;
}

const sortResult5 = (point5) => {
  let num5 = 1;
  if (point5 <= 3) {
    num5 = 1;
  } else {
    num5 = 2;
  }
  return num5;
}

const goResult = () => {
  if (pcMQL.matches) {
    console.log('PC');
    wrap.style.marginTop = '150px';
  } else if (tabletMQL.matches) {
    console.log('tablet');
    wrap.style.marginTop = '115px';
  }

  const result = document.getElementById('result');
  const point = calcScore();
  const point2 = calcScore2();
  const point3 = calcScore3();
  const point4 = calcScore4();
  const point5 = calcScore5();
  const grade = sortResult(point);
  const grade2 = sortResult2(point2);
  const grade3 = sortResult3(point3);
  const grade1 = 5 - (grade + 1);
  const grade4 = sortResult4(point4);
  const grade5 = sortResult5(point5);
  const grade2_2 = grade2 - 1;
  const grade3_2 = grade3 - 1;
  const grade4_2 = grade4 - 1;
  const grade5_2 = grade5 - 1;
  const pTitle = document.querySelector('.p');
  const res_point = document.querySelector('.point');
  const pin = document.querySelector('.pin');
  const img_url = 'img/' + grade3 + '-' + grade2 + '-' + grade4 + '-' + grade1 + '.png';
  const img2_url = 'img/MBTI.png';
  const res_img = document.createElement('img');
  const res_img_div = document.querySelector('.art');
  const animal = document.querySelector('.result');
  const desc = document.querySelector('.res');
  const hyungu = document.querySelector('.hyungu');
  const desc2 = document.querySelector('.res');
  const desc_1 = document.querySelector('.res');
  const desc_2 = document.querySelector('.res');
  const desc_3 = document.querySelector('.res');
  const res_img2 = document.createElement('img');
  const res_img2_div = document.querySelector('.art2');

  
  pTitle.innerHTML = '당신의 자산 비중 분석';
  res_point.innerHTML = '예금 비중: ' + (point / 2) + '% / 투자 비중: ' + (100 - point / 2) + '% ';
  pin.style.marginLeft = point/2 + '%'; 
  
  res_img.src = img_url;
  res_img.alt = infoList[grade].name + infoList5[grade5_2].name + infoList2[grade2_2].name + infoList4[grade4_2].name;
  res_img.title = infoList[grade].name + infoList5[grade5_2].name + infoList2[grade2_2].name + infoList4[grade4_2].name;
  res_img_div.appendChild(res_img);
  animal.innerHTML = infoList[grade].name + infoList5[grade5_2].name + infoList2[grade2_2].name + infoList4[grade4_2].name;  
  hyungu.innerHTML = infoList[grade].name2 + infoList5[grade5_2].name2 + infoList2[grade2_2].name2 + infoList4[grade4_2].name2 + "_" + infoList[grade].name3 + infoList3[grade3_2].name3 + infoList2[grade2_2].name3 + infoList4[grade4_2].name3; 
  desc.innerHTML = infoList[grade].desc + "<br>" + "<br>" + infoList5[grade5_2].desc + "<br>" + "<br>" + infoList2[grade2_2].desc + "<br>" + "<br>" + infoList4[grade4_2].desc + "<br>" + "<br>" + "<br>" + "<span style='color:red;'><strong>구성자산</strong><br><br>※ 아래 자산을 클릭하면 관련 정보를 자세히 알 수 있습니다.</span>" + "<br>" + "<br>" + "<a href='" + infoList3[grade3_2].link + "' target='_blank' ><span style='color:red'>-&gt;</span>" + infoList3[grade3_2].desc2 + "<span style='color:red'>&lt;-</span></a>" + infoList[grade].desc_1 + "<br>" + "<a href='" + infoList2[grade2_2].link + "' target='_blank' ><span style='color:red'>-&gt;</span>" + infoList2[grade2_2].desc2 + "<span style='color:red'>&lt;-</span></a>"+ infoList[grade].desc_2 + "<br>" + "<a href='" + infoList4[grade4_2].link + "' target='_blank' ><span style='color:red'>-&gt;</span>" + infoList4[grade4_2].desc2 + "<span style='color:red'>&lt;-</span></a>" + infoList[grade].desc_3 + "<br>" + "<br>" + "아직 수정 중인 베타 버전입니다.<br>이용 후기 및 개선사항을 알려주시면,<br>추첨을 통해 선물을 드릴 예정입니다." + "<br>" + "<br>" + "<a href='https://docs.google.com/forms/d/e/1FAIpQLSf0W1tIlUFk0-IngEx629bqrS6HeYbhccwSCq1fnnnl6hlV9w/viewform?usp=sf_link'" + "' target='_blank' ><span style='color:red'>-&gt;</span>" + "<이벤트 참여하기>" + "를 클릭해주세요." + "<span style='color:red'>&lt;-</span></a>";
  res_img2.src = img2_url;
  res_img2.alt = infoList[grade].name + infoList5[grade5_2].name + infoList2[grade2_2].name + infoList4[grade4_2].name;
  res_img2.title = infoList[grade].name + infoList5[grade5_2].name + infoList2[grade2_2].name + infoList4[grade4_2].name;
  res_img2_div.appendChild(res_img2);

var shopLink0 = "f"
var shopLink1 = "a";
var shopLink2 = "b";
var shopLink3 = "c";
var shopLink4 = "d";
var shopLink5 = "e";

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_1000"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_1000";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_1001"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_1001";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_1002"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_1002";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_1003"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_1003";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_1010"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_1010";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_1011"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_1011";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_1012"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_1012";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_1013"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_1013";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_1020"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_1020";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_1021"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_1021";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_1022"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_1022";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_1023"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_1023";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ_1030"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFJ_1030";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ_1031"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFJ_1031";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP_1032"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFP_1032";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP_1033"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFP_1033";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ_1040"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFJ_1040";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ_1041"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFJ_1041";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP_1042"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFP_1042";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP_1043"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFP_1043";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_1100"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_1100";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_1101"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_1101";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_1102"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_1102";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_1103"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_1103";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_1110"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_1110";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_1111"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_1111";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_1112"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_1112";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_1113"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_1113";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_1120"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_1120";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_1121"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_1121";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_1122"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_1122";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_1123"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_1123";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ_1130"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFJ_1130";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ_1131"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFJ_1131";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP_1132"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFP_1132";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP_1133"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFP_1133";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ_1140"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFJ_1140";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ_1141"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFJ_1141";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP_1142"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFP_1142";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP_1143"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFP_1143";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_1200"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_1200";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_1201"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_1201";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_1202"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_1202";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_1203"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_1203";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_1210"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_1210";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_1211"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_1211";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_1212"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_1212";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_1213"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_1213";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_1220"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_1220";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_1221"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_1221";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_1222"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_1222";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_1223"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_1223";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ_1230"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFJ_1230";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ_1231"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFJ_1231";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP_1232"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFP_1232";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP_1233"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFP_1233";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ_1240"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFJ_1240";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ_1241"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFJ_1241";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP_1242"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFP_1242";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP_1243"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFP_1243";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_1300"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_1300";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_1301"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_1301";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_1302"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_1302";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_1303"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_1303";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_1310"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_1310";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_1311"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_1311";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_1312"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_1312";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_1313"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_1313";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_1320"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_1320";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_1321"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_1321";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_1322"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_1322";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_1323"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_1323";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ_1330"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFJ_1330";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ_1331"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFJ_1331";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP_1332"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFP_1332";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP_1333"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFP_1333";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ_1340"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFJ_1340";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ_1341"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFJ_1341";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP_1342"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFP_1342";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP_1343"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFP_1343";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_1400"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_1400";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_1401"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_1401";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_1402"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_1402";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_1403"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_1403";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_1410"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_1410";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_1411"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_1411";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_1412"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_1412";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_1413"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_1413";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_1420"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_1420";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_1421"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_1421";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_1422"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_1422";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_1423"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_1423";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ_1430"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFJ_1430";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ_1431"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFJ_1431";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP_1432"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFP_1432";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP_1433"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFP_1433";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ_1440"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFJ_1440";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ_1441"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFJ_1441";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP_1442"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFP_1442";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP_1443"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFP_1443";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_2000"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_2000";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_2001"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_2001";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_2002"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_2002";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_2003"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_2003";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_2010"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_2010";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_2011"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_2011";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_2012"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_2012";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_2013"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_2013";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_2020"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_2020";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_2021"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_2021";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_2022"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_2022";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_2023"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_2023";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ_2030"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFJ_2030";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ_2031"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFJ_2031";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP_2032"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFP_2032";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP_2033"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFP_2033";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ_2040"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFJ_2040";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ_2041"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFJ_2041";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP_2042"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFP_2042";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP_2043"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFP_2043";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_2100"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_2100";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_2101"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_2101";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_2102"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_2102";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_2103"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_2103";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_2110"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_2110";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_2111"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_2111";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_2112"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_2112";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_2113"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_2113";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_2120"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_2120";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_2121"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_2121";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_2122"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_2122";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_2123"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_2123";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ_2130"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFJ_2130";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ_2131"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFJ_2131";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP_2132"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFP_2132";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP_2133"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFP_2133";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ_2140"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFJ_2140";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ_2141"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFJ_2141";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP_2142"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFP_2142";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP_2143"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFP_2143";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_2200"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_2200";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_2201"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_2201";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_2202"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_2202";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_2203"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_2203";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_2210"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_2210";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_2211"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_2211";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_2212"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_2212";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_2213"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_2213";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_2220"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_2220";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_2221"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_2221";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_2222"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_2222";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_2223"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_2223";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ_2230"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFJ_2230";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ_2231"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFJ_2231";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP_2232"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFP_2232";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP_2233"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFP_2233";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ_2240"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFJ_2240";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ_2241"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFJ_2241";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP_2242"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFP_2242";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP_2243"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFP_2243";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_2300"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_2300";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_2301"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_2301";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_2302"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_2302";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_2303"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_2303";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_2310"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_2310";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_2311"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_2311";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_2312"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_2312";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_2313"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_2313";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_2320"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_2320";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_2321"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_2321";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_2322"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_2322";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_2323"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_2323";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ_2330"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFJ_2330";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ_2331"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFJ_2331";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP_2332"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFP_2332";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP_2333"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFP_2333";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ_2340"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFJ_2340";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ_2341"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFJ_2341";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP_2342"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFP_2342";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP_2343"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFP_2343";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_2400"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_2400";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_2401"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_2401";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_2402"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_2402";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_2403"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_2403";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_2410"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_2410";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_2411"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_2411";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_2412"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_2412";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_2413"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_2413";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_2420"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_2420";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ_2421"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTJ_2421";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_2422"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_2422";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP_2423"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISTP_2423";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ_2430"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFJ_2430";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ_2431"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFJ_2431";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP_2432"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFP_2432";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP_2433"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFP_2433";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ_2440"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFJ_2440";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ_2441"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFJ_2441";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP_2442"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFP_2442";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP_2443"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ISFP_2443";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_3000"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_3000";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_3001"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_3001";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_3002"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_3002";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_3003"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_3003";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_3010"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_3010";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_3011"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_3011";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_3012"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_3012";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_3013"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_3013";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_3020"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_3020";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_3021"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_3021";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_3022"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_3022";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_3023"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_3023";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ_3030"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFJ_3030";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ_3031"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFJ_3031";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP_3032"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFP_3032";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP_3033"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFP_3033";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ_3040"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFJ_3040";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ_3041"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFJ_3041";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP_3042"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFP_3042";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP_3043"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFP_3043";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_3100"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_3100";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_3101"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_3101";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_3102"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_3102";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_3103"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_3103";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_3110"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_3110";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_3111"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_3111";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_3112"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_3112";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_3113"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_3113";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_3120"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_3120";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_3121"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_3121";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_3122"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_3122";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_3123"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_3123";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ_3130"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFJ_3130";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ_3131"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFJ_3131";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP_3132"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFP_3132";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP_3133"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFP_3133";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ_3140"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFJ_3140";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ_3141"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFJ_3141";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP_3142"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFP_3142";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP_3143"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFP_3143";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_3200"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_3200";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_3201"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_3201";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_3202"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_3202";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_3203"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_3203";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_3210"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_3210";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_3211"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_3211";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_3212"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_3212";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_3213"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_3213";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_3220"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_3220";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_3221"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_3221";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_3222"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_3222";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_3223"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_3223";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ_3230"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFJ_3230";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ_3231"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFJ_3231";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP_3232"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFP_3232";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP_3233"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFP_3233";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ_3240"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFJ_3240";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ_3241"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFJ_3241";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP_3242"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFP_3242";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP_3243"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFP_3243";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_3300"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_3300";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_3301"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_3301";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_3302"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_3302";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_3303"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_3303";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_3310"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_3310";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_3311"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_3311";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_3312"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_3312";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_3313"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_3313";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_3320"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_3320";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_3321"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_3321";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_3322"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_3322";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_3323"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_3323";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ_3330"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFJ_3330";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ_3331"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFJ_3331";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP_3332"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFP_3332";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP_3333"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFP_3333";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ_3340"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFJ_3340";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ_3341"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFJ_3341";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP_3342"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFP_3342";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP_3343"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFP_3343";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_3400"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_3400";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_3401"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_3401";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_3402"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_3402";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_3403"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_3403";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_3410"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_3410";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_3411"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_3411";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_3412"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_3412";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_3413"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_3413";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_3420"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_3420";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_3421"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_3421";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_3422"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_3422";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_3423"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_3423";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ_3430"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFJ_3430";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ_3431"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFJ_3431";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP_3432"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFP_3432";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP_3433"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFP_3433";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ_3440"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFJ_3440";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ_3441"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFJ_3441";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP_3442"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFP_3442";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP_3443"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFP_3443";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_4000"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_4000";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_4001"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_4001";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_4002"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_4002";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_4003"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_4003";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_4010"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_4010";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_4011"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_4011";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_4012"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_4012";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_4013"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_4013";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_4020"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_4020";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_4021"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_4021";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_4022"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_4022";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_4023"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_4023";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ_4030"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFJ_4030";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ_4031"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFJ_4031";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP_4032"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFP_4032";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP_4033"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFP_4033";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ_4040"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFJ_4040";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ_4041"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFJ_4041";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP_4042"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFP_4042";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP_4043"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFP_4043";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_4100"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_4100";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_4101"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_4101";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_4102"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_4102";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_4103"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_4103";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_4110"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_4110";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_4111"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_4111";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_4112"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_4112";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_4113"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_4113";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_4120"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_4120";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_4121"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_4121";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_4122"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_4122";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_4123"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_4123";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ_4130"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFJ_4130";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ_4131"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFJ_4131";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP_4132"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFP_4132";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP_4133"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFP_4133";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ_4140"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFJ_4140";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ_4141"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFJ_4141";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP_4142"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFP_4142";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP_4143"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFP_4143";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_4200"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_4200";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_4201"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_4201";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_4202"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_4202";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_4203"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_4203";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_4210"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_4210";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_4211"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_4211";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_4212"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_4212";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_4213"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_4213";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_4220"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_4220";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_4221"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_4221";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_4222"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_4222";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_4223"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_4223";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ_4230"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFJ_4230";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ_4231"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFJ_4231";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP_4232"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFP_4232";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP_4233"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFP_4233";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ_4240"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFJ_4240";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ_4241"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFJ_4241";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP_4242"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFP_4242";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP_4243"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFP_4243";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_4300"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_4300";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_4301"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_4301";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_4302"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_4302";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_4303"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_4303";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_4310"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_4310";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_4311"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_4311";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_4312"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_4312";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_4313"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_4313";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_4320"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_4320";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_4321"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_4321";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_4322"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_4322";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_4323"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_4323";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ_4330"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFJ_4330";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ_4331"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFJ_4331";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP_4332"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFP_4332";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP_4333"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFP_4333";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ_4340"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFJ_4340";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ_4341"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFJ_4341";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP_4342"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFP_4342";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP_4343"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFP_4343";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_4400"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_4400";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_4401"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_4401";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_4402"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_4402";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_4403"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_4403";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_4410"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_4410";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_4411"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_4411";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_4412"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_4412";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_4413"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_4413";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_4420"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_4420";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ_4421"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTJ_4421";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_4422"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_4422";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP_4423"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESTP_4423";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ_4430"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFJ_4430";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ_4431"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFJ_4431";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP_4432"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFP_4432";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP_4433"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFP_4433";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ_4440"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFJ_4440";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ_4441"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFJ_4441";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP_4442"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFP_4442";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP_4443"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ESFP_4443";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_1000"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_1000";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_1001"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_1001";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_1002"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_1002";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_1003"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_1003";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_1010"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_1010";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_1011"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_1011";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_1012"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_1012";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_1013"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_1013";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_1020"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_1020";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_1021"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_1021";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_1022"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_1022";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_1023"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_1023";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ_1030"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFJ_1030";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ_1031"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFJ_1031";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP_1032"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFP_1032";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP_1033"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFP_1033";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ_1040"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFJ_1040";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ_1041"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFJ_1041";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP_1042"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFP_1042";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP_1043"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFP_1043";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_1100"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_1100";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_1101"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_1101";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_1102"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_1102";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_1103"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_1103";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_1110"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_1110";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_1111"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_1111";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_1112"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_1112";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_1113"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_1113";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_1120"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_1120";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_1121"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_1121";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_1122"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_1122";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_1123"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_1123";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ_1130"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFJ_1130";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ_1131"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFJ_1131";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP_1132"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFP_1132";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP_1133"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFP_1133";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ_1140"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFJ_1140";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ_1141"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFJ_1141";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP_1142"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFP_1142";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP_1143"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFP_1143";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_1200"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_1200";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_1201"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_1201";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_1202"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_1202";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_1203"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_1203";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_1210"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_1210";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_1211"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_1211";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_1212"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_1212";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_1213"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_1213";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_1220"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_1220";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_1221"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_1221";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_1222"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_1222";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_1223"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_1223";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ_1230"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFJ_1230";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ_1231"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFJ_1231";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP_1232"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFP_1232";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP_1233"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFP_1233";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ_1240"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFJ_1240";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ_1241"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFJ_1241";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP_1242"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFP_1242";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP_1243"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFP_1243";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_1300"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_1300";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_1301"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_1301";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_1302"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_1302";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_1303"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_1303";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_1310"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_1310";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_1311"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_1311";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_1312"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_1312";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_1313"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_1313";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_1320"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_1320";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_1321"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_1321";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_1322"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_1322";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_1323"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_1323";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ_1330"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFJ_1330";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ_1331"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFJ_1331";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP_1332"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFP_1332";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP_1333"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFP_1333";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ_1340"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFJ_1340";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ_1341"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFJ_1341";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP_1342"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFP_1342";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP_1343"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFP_1343";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_1400"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_1400";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_1401"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_1401";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_1402"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_1402";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_1403"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_1403";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_1410"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_1410";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_1411"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_1411";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_1412"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_1412";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_1413"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_1413";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_1420"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_1420";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_1421"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_1421";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_1422"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_1422";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_1423"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_1423";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ_1430"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFJ_1430";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ_1431"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFJ_1431";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP_1432"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFP_1432";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP_1433"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFP_1433";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ_1440"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFJ_1440";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ_1441"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFJ_1441";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP_1442"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFP_1442";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP_1443"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFP_1443";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_2000"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_2000";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_2001"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_2001";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_2002"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_2002";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_2003"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_2003";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_2010"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_2010";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_2011"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_2011";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_2012"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_2012";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_2013"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_2013";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_2020"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_2020";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_2021"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_2021";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_2022"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_2022";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_2023"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_2023";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ_2030"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFJ_2030";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ_2031"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFJ_2031";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP_2032"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFP_2032";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP_2033"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFP_2033";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ_2040"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFJ_2040";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ_2041"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFJ_2041";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP_2042"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFP_2042";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP_2043"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFP_2043";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_2100"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_2100";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_2101"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_2101";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_2102"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_2102";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_2103"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_2103";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_2110"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_2110";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_2111"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_2111";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_2112"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_2112";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_2113"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_2113";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_2120"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_2120";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_2121"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_2121";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_2122"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_2122";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_2123"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_2123";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ_2130"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFJ_2130";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ_2131"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFJ_2131";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP_2132"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFP_2132";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP_2133"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFP_2133";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ_2140"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFJ_2140";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ_2141"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFJ_2141";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP_2142"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFP_2142";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP_2143"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFP_2143";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_2200"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_2200";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_2201"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_2201";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_2202"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_2202";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_2203"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_2203";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_2210"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_2210";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_2211"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_2211";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_2212"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_2212";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_2213"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_2213";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_2220"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_2220";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_2221"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_2221";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_2222"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_2222";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_2223"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_2223";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ_2230"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFJ_2230";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ_2231"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFJ_2231";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP_2232"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFP_2232";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP_2233"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFP_2233";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ_2240"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFJ_2240";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ_2241"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFJ_2241";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP_2242"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFP_2242";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP_2243"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFP_2243";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_2300"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_2300";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_2301"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_2301";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_2302"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_2302";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_2303"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_2303";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_2310"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_2310";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_2311"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_2311";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_2312"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_2312";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_2313"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_2313";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_2320"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_2320";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_2321"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_2321";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_2322"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_2322";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_2323"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_2323";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ_2330"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFJ_2330";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ_2331"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFJ_2331";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP_2332"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFP_2332";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP_2333"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFP_2333";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ_2340"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFJ_2340";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ_2341"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFJ_2341";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP_2342"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFP_2342";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP_2343"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFP_2343";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_2400"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_2400";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_2401"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_2401";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_2402"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_2402";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_2403"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_2403";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_2410"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_2410";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_2411"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_2411";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_2412"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_2412";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_2413"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_2413";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_2420"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_2420";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ_2421"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTJ_2421";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_2422"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_2422";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP_2423"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INTP_2423";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ_2430"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFJ_2430";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ_2431"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFJ_2431";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP_2432"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFP_2432";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP_2433"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFP_2433";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ_2440"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFJ_2440";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ_2441"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFJ_2441";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP_2442"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFP_2442";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP_2443"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=INFP_2443";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_3000"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_3000";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_3001"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_3001";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_3002"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_3002";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_3003"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_3003";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_3010"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_3010";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_3011"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_3011";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_3012"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_3012";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_3013"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_3013";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_3020"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_3020";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_3021"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_3021";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_3022"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_3022";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_3023"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_3023";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ_3030"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFJ_3030";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ_3031"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFJ_3031";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP_3032"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFP_3032";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP_3033"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFP_3033";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ_3040"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFJ_3040";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ_3041"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFJ_3041";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP_3042"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFP_3042";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP_3043"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFP_3043";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_3100"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_3100";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_3101"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_3101";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_3102"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_3102";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_3103"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_3103";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_3110"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_3110";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_3111"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_3111";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_3112"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_3112";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_3113"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_3113";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_3120"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_3120";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_3121"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_3121";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_3122"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_3122";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_3123"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_3123";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ_3130"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFJ_3130";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ_3131"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFJ_3131";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP_3132"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFP_3132";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP_3133"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFP_3133";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ_3140"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFJ_3140";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ_3141"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFJ_3141";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP_3142"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFP_3142";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP_3143"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFP_3143";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_3200"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_3200";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_3201"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_3201";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_3202"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_3202";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_3203"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_3203";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_3210"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_3210";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_3211"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_3211";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_3212"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_3212";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_3213"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_3213";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_3220"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_3220";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_3221"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_3221";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_3222"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_3222";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_3223"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_3223";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ_3230"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFJ_3230";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ_3231"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFJ_3231";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP_3232"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFP_3232";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP_3233"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFP_3233";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ_3240"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFJ_3240";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ_3241"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFJ_3241";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP_3242"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFP_3242";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP_3243"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFP_3243";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_3300"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_3300";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_3301"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_3301";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_3302"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_3302";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_3303"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_3303";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_3310"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_3310";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_3311"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_3311";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_3312"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_3312";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_3313"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_3313";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_3320"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_3320";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_3321"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_3321";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_3322"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_3322";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_3323"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_3323";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ_3330"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFJ_3330";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ_3331"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFJ_3331";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP_3332"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFP_3332";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP_3333"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFP_3333";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ_3340"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFJ_3340";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ_3341"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFJ_3341";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP_3342"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFP_3342";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP_3343"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFP_3343";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_3400"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_3400";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_3401"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_3401";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_3402"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_3402";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_3403"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_3403";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_3410"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_3410";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_3411"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_3411";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_3412"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_3412";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_3413"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_3413";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_3420"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_3420";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_3421"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_3421";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_3422"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_3422";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_3423"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_3423";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ_3430"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFJ_3430";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ_3431"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFJ_3431";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP_3432"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFP_3432";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP_3433"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFP_3433";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ_3440"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFJ_3440";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ_3441"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFJ_3441";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP_3442"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFP_3442";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP_3443"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFP_3443";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_4000"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_4000";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_4001"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_4001";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_4002"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_4002";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_4003"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_4003";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_4010"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_4010";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_4011"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_4011";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_4012"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_4012";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_4013"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_4013";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_4020"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_4020";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_4021"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_4021";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_4022"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_4022";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_4023"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_4023";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ_4030"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFJ_4030";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ_4031"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFJ_4031";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP_4032"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFP_4032";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP_4033"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFP_4033";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ_4040"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFJ_4040";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ_4041"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFJ_4041";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP_4042"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFP_4042";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP_4043"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFP_4043";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_4100"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_4100";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_4101"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_4101";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_4102"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_4102";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_4103"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_4103";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_4110"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_4110";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_4111"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_4111";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_4112"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_4112";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_4113"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_4113";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_4120"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_4120";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_4121"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_4121";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_4122"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_4122";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_4123"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_4123";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ_4130"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFJ_4130";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ_4131"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFJ_4131";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP_4132"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFP_4132";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP_4133"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFP_4133";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ_4140"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFJ_4140";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ_4141"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFJ_4141";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP_4142"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFP_4142";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP_4143"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFP_4143";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_4200"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_4200";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_4201"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_4201";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_4202"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_4202";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_4203"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_4203";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_4210"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_4210";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_4211"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_4211";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_4212"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_4212";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_4213"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_4213";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_4220"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_4220";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_4221"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_4221";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_4222"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_4222";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_4223"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_4223";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ_4230"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFJ_4230";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ_4231"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFJ_4231";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP_4232"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFP_4232";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP_4233"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFP_4233";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ_4240"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFJ_4240";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ_4241"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFJ_4241";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP_4242"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFP_4242";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP_4243"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFP_4243";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_4300"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_4300";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_4301"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_4301";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_4302"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_4302";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_4303"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_4303";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_4310"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_4310";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_4311"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_4311";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_4312"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_4312";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_4313"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_4313";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_4320"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_4320";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_4321"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_4321";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_4322"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_4322";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_4323"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_4323";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ_4330"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFJ_4330";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ_4331"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFJ_4331";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP_4332"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFP_4332";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP_4333"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFP_4333";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ_4340"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFJ_4340";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ_4341"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFJ_4341";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP_4342"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFP_4342";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP_4343"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFP_4343";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_4400"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_4400";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_4401"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_4401";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_4402"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_4402";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_4403"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_4403";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_4410"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_4410";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_4411"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_4411";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_4412"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_4412";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_4413"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_4413";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_4420"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_4420";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ_4421"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTJ_4421";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_4422"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_4422";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP_4423"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENTP_4423";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ_4430"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFJ_4430";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ_4431"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFJ_4431";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP_4432"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFP_4432";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP_4433"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFP_4433";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ_4440"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFJ_4440";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ_4441"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFJ_4441";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP_4442"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFP_4442";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP_4443"){
  shopLink0 = "https://etfdiy.imweb.me/search?type=shopping&sort=time_desc&keyword=ENFP_4443";
}


const hyungyuLink0 = document.querySelector(".hyungyuLink0");
hyungyuLink0.setAttribute("href",shopLink0);
const hyungyuLink1 = document.querySelector(".hyungyuLink1");
hyungyuLink1.setAttribute("href",shopLink1);
const hyungyuLink2 = document.querySelector(".hyungyuLink2");
hyungyuLink2.setAttribute("href",shopLink2);
const hyungyuLink3 = document.querySelector(".hyungyuLink3");
hyungyuLink3.setAttribute("href",shopLink3);
const hyungyuLink4 = document.querySelector(".hyungyuLink4");
hyungyuLink4.setAttribute("href",shopLink4);
const hyungyuLink5 = document.querySelector(".hyungyuLink5");
hyungyuLink5.setAttribute("href",shopLink5);
  
 
  setTimeout(() => {
    header.style.display = 'block';
    footer.style.display = 'block';
    result.style.display = 'block';
    header.style.animation =
      'fade-in 0.3s forwards';
    footer.style.animation =
      'fade-in 0.3s forwards';
    result.style.animation =
      'going-up 0.5s, ' +
      'fade-in 0.5s forwards';
  }, 600);

}

const end = () => {
  qna.style.animation = '';
  const interval = setInterval(() => {
    qna.style.opacity -= 0.1;
    qna.style.transform = 'translateY(-1px)';
  }, 50);
  setTimeout(() => clearTimeout(interval), 500);
  setTimeout(() => qna.style.display = 'none', 500);
  setTimeout(() => {
    const calc = document.getElementById('calc');
    calc.style.display = 'block';
    calc.style.animation =
      'going-up 0.5s forwards, ' +
      'fade-in 0.5s forwards';
  }, 700);
  setTimeout(() => {
    calc.style.animation = '';
    calc.style.animation =
      'going-left 0.4s forwards, ' +
      'fade-out 0.4s forwards';
    setTimeout(() => {
      calc.style.display = 'none';
      goResult();
    }, 400);
  }, 9000);
}

const addAnswer = (answerTxt, idx) => {
  const answer = document.createElement('button');
  const a = document.querySelector('.answer');
  answer.className += 'a box';
  answer.innerHTML = answerTxt;
  answer.addEventListener('click', () => {
    const parent = answer.parentNode;
    const children = parent.childNodes;
    for (let i in children) {
      children[i].disabled = true;
    }
    parent.classList.add('fade-out-5-4');
    setTimeout(() => {
      select[qIdx] = idx;
      a.innerHTML = '';
      parent.classList.remove('fade-out-5-4');
      goNext();
    }, 800);
  });

  setTimeout(() => answer.style.animation =
    'going-down 0.25s forwards, fade-in 0.25s forwards', 50);
  a.appendChild(answer);
}


const goNext = () => {
  if (qIdx++ === qnaList.length - 1) {
    end();
    return;
  }

  const status = document.querySelector('.status');
  const qNum = qnaList[qIdx];
  const q = document.querySelector('.q');

  status.style.width = (100/ENDPOINT * (qIdx + 1)) + '%';
  q.innerHTML = qNum.q;
  qna.style.animation =
    'fade-in 0.3s ease-in-out 0.4s forwards, ' +
    'going-down 0.3s ease-in-out 0.4s forwards';

  setTimeout(() => {
    const endIdx = qNum.a.length - 1;
    for (let i in qNum.a) {
      addAnswer(qNum.a[i].answer, i);
    }
    qna.style.opacity = 1;
  }, 700);
}

const begin = () => {
  const welcome = document.getElementById('welcome');
  header.style.animation =
    'going-up 0.4s forwards, ' +
    'fade-out 0.4s forwards';
  footer.style.animation =
    'going-down 0.4s forwards, ' +
    'fade-out 0.4s forwards';
  setTimeout(() => welcome.style.animation =
    'going-up 0.4s ease-in-out forwards, ' +
    'fade-out 0.4s ease-in-out forwards', 500);
  setTimeout(() => {
    header.style.display = 'none';
    footer.style.display = 'none';
    welcome.style.display = 'none';
    qna.style.display = 'block';
    if (pcMQL.matches) {
      console.log('PC');
      wrap.style.marginTop = '50px';
    } else if (tabletMQL.matches) {
      console.log('tablet');
      wrap.style.marginTop = '30px';
    }
    goNext();
  }, 1000);
}

const load = () => {
  const msg = document.querySelector('.check-name');
  const start_btn = document.querySelector('.start');

  u_name.addEventListener('blur', () => {
    try {
      if (u_name.value.length < 1) {
        throw '이름을 입력하고 시작해 주세요.';
      }
      msg.innerHTML = '';
    } catch (err) {
      msg.innerHTML = err;
    }
  });

  start_btn.addEventListener('click', () => {
    try {
      if (u_name.value.length < 1) {
        throw '이름을 입력하고 시작해 주세요.';
      }
      msg.innerHTML = '';
      start_btn.disabled = true;
      begin();
    } catch (err) {
      msg.innerHTML = err;
    }
  });

}

window.onload = load();
