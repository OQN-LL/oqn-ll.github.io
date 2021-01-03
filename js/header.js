/* Vue.jsの準備 */
var MENU = [
  {
    url: "index.html",
    text: "トップ",
    subCategorys: []
  },
  {
    url: "resourcepack.html",
    text: "リソースパック",
    subCategorys: []
  },
  {
    url: "product.html",
    text: "ツール",
    subCategorys: []
  }
];

Vue.component("menubar", {
  data: function() {
    return {
      menuList: MENU
    };
  },
  template: `
    <ul class="menu">
    <template v-for="value in menuList">
    <li class menu_first>
    <a v-bind:href="value.url">{{ value.text }}</a>
    <ul class="menu_second">
    <li v-for="sub in value.subCategorys">
    <a v-bind:href="sub.url">{{ sub.text }}</a>
    </li>
    </ul>
    </li>
    </template>
    </ul>
`
});

document.addEventListener(
  "DOMContentLoaded",
  function() {
    var header_menu = new Vue({
      el: "#header_menu"
    });
  },
  false
);
