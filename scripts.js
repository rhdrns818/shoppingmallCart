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

divForeach();

function navForeach() {
  const $nav = document.querySelector(".findDiv");
  const $$navChildren = $nav.children;
  console.log("navforeach");
  [...$$navChildren].forEach((nav) => {
    function returnDiv() {
      const $root = document.querySelector("section");
      $root.append(nav);
      console.log("returnDiv");
      divForeach();
    }
    nav.addEventListener("click", returnDiv, { once: true });
  });
}

function divForeach() {
  const $section = document.querySelector("section");
  const $$sectionChild = $section.children;
  console.log("divforeach");
  [...$$sectionChild].forEach((div) => {
    function appendDiv() {
      const $nav = document.querySelector(".findDiv");
      $nav.append(div);
      console.log("appendDiv2");
      navForeach();
    }
    div.addEventListener("click", appendDiv, { once: true });
  });
}
