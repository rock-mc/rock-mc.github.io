/* global hexo */
// 從 rock-mc.github.io 轉址到 rock-mc.com，保留原本的路徑、查詢字串與錨點。
// 只在 github.io 網域上觸發，避免 rock-mc.com 使用同一份檔案時無限轉址。
hexo.extend.injector.register('head_begin', `<script>
if (location.hostname === 'rock-mc.github.io') {
  location.replace('https://rock-mc.com' + location.pathname + location.search + location.hash);
}
</script>`);
