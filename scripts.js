//태그 만드는 jscode
const $root = document.querySelector(".root");
cat.forEach((cat) => {
  const $container = document.createElement("div");
  $container.className = "solid";
  $root.append($container);
  $container.innerHTML = `
    <div class="num">${cat.id}</div>
    <img class="img" src="${cat.img}" alt="고양이사진">
    <div class="name">${cat.name}</div>
  `;
});

//nav에 집어넣고 빼는 jscode

// divForeach();

// function navForeach() {
//   const $nav = document.querySelector(".findDiv");
//   const $$navChildren = $nav.children;
//   console.log("navforeach");
//   [...$$navChildren].forEach((nav) => {
//     function returnDiv() {
//       const $root = document.querySelector("section");
//       $root.append(nav);
//       console.log("returnDiv");
//       divForeach();
//     }
//     nav.addEventListener("click", returnDiv, { once: true });
//   });
// }

// function divForeach() {
//   const $section = document.querySelector("section");
//   const $$sectionChild = $section.children;
//   console.log("divforeach");
//   [...$$sectionChild].forEach((div) => {
//     function appendDiv() {
//       const $nav = document.querySelector(".findDiv");
//       $nav.append(div);
//       console.log("appendDiv2");
//       navForeach();
//     }
//     div.addEventListener("click", appendDiv, { once: true });
//   });
// }

// '상속' 조언 받은 후 매우 짧아진 코드 and 작동 이상없음
const $section = document.querySelector("section");
$section.onclick = function(event){
  let target = event.target;
  if (target.className != "solid") return;
  $nav.append(target);
}

const $nav = document.querySelector(".findDiv");
$nav.onclick = function(event){
  let target = event.target;
  if (target.className != "solid") return;
  $section.append(target);
}