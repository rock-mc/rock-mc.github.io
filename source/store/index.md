---
title: 磐石商城
date: 2023-11-12 17:38:35
---

<p align="center">
<img src="https://raw.githubusercontent.com/rock-mc/rock-mc.github.io/publish/images/store.jpeg" alt="drawing" style="vertical-align:middle" width="600"/>
</p>

<div id="adultModal" style="display: block; position: fixed; z-index: 1; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.4);">
  <div style="background-color: white; margin: 15% auto; padding: 20px; border: 1px solid #888; width: 90%; text-align: left;">
    <h2>磐石商城使用者宣告</h2>
    注意!您即將進行的是使用<b>現金</b>購買虛擬道具的交易。在交易前，請您務必仔細閱讀並同意以下條款:<br>
<br>
1.伺服器規則：<br>
必須仔細閱讀並遵守伺服器規則(詳見磐石律法)。如果您在伺服器時違反了規則，將按照伺服器的規定進行處罰，並不會進行補償或退款。<br>
<br>
2.年齡限制：<br>
如果您未滿 18 歲，請確保在合法監護人的同意下進行消費。完成交易即視為您有權使用交易金額，並已獲得監護人的同意。<br>
<br>
3.商品特殊性：<br>
由於虛擬道具的特殊性質，本伺服器所有商品一經售出，不提供退款、退貨或換貨服務。<br>
購買前，請您務必確認商品是否符合您的需求和期望。如有任何疑問，請先與管理員聯繫，再決定是否購買。<br>
<br>
4.安全提醒：<br>
請勿將您的帳號密碼、交易資訊或虛擬道具轉讓給他人，以避免您的帳號被盜或出現其他安全問題。<br>
伺服器管理團隊不會要求您提供此類訊息。<br>
<br>
5.交易風險：<br>
購買虛擬道具屬於自願行為，並存在一定風險，<br>
例如遊戲更新導致物品失效、伺服器關閉或其他不可預見的情況可能影響您購買的虛擬道具的使用。<br>
在這些情況下，我們將不承擔責任，也不提供補償。<br>
<br>
若您已經完全理解並同意以上條款，請點擊「我接受」按鈕，即可完成交易。祝您在磐石伺服器玩得開心!</p>
    <div style="margin-top: 20px;">
      <button id="confirmBtn" style="margin: 0 10px;">我接受</button>
      <button id="leaveBtn" style="margin: 0 10px;">離開商城</button>
    </div>
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function () {
  var adultModal = document.getElementById('adultModal');
  var confirmBtn = document.getElementById('confirmBtn');
  var leaveBtn = document.getElementById('leaveBtn');

  confirmBtn.addEventListener('click', function () {
    adultModal.style.display = 'none';
    // localStorage.setItem('adultConfirmed', 'true');
  });

  leaveBtn.addEventListener('click', function () {
    window.location.href = 'https://rock-mc.com/'; // 將此網址替換為您想重定向的頁面
  });

  var adultConfirmed = localStorage.getItem('adultConfirmed');
  if (adultConfirmed === 'true') {
    // adultModal.style.display = 'none';
  }
});
</script>

歡迎來到磐石商城!

我們知道，不是每個人都有時間或能力去撰寫程式、管理伺服器或幫忙處理各種事務。但是，我們相信每個人都可以用自己的方式為伺服器貢獻一份力量。

其中一種方式，就是通過贊助來支持伺服器的運營和發展。為了感謝大家的支持，我們特別設立了磐石商城，提供一些獨特的虛擬道具和服務作為回饋。

在這裡，你可以使用磐石幣購買各種有趣的東西，從裝飾道具、建築材料，到戰鬥裝備、寵物，甚至是個人化服務。每一筆交易，都是對伺服器的支持和鼓勵。

當然，購買虛擬道具純屬自願，我們也提供許多免費的遊戲內容供大家享用。但如果你想給伺服器一些額外的支持，歡迎來磐石商城看看，也許會有一些驚喜發現!

無論如何，感謝你成為磐石伺服器的一員。希望你在這裡玩得開心，也希望我們能一起見證伺服器的成長和進步。

## 磐石商城

**磐石幣**是磐石伺服器的虛擬貨幣，可以用來購買商城道具。

| 金額           | 磐石幣      | 加成   |
|--------------|----------|------|
| 20 ~ 100 NTD | 20 ~ 100 |      |
| 300  NTD     | 315      | +5%  |
| 500  NTD     | 550      | +10% |
| 1000  NTD    | 1150     | +15% |
| 3000  NTD    | 3600     | +20% |
| 5000  NTD    | 6250     | +25% |
| 10000  NTD   | 13000    | +30% |

註：NTD 可直接與磐石幣轉換，1 NTD = 1 磐石幣
例如：命名牌可直接用 50 NTD 購買

### 道具

| 商品名稱  | 價格        | 備註                 |
|-------|-----------|--------------------|  
| 透明展示框 | 50 磐石幣/8個 | 展示你的珍貴物品,裝飾你的家!    |
| 個人頭顱  | 200 磐石幣/個 | 獨一無二的個人化頭顱,展現你的風格! |

### 建築材料

| 商品名稱 | 價格         | 備註                                 |
|------|------------|------------------------------------|
| 鐵錠   | 200 磐石幣/組  | 出現比例 566 / 100000                  |
| 黃金錠  | 200 磐石幣/組  | 出現比例 176 / 100000                  |
| 紅石粉  | 150 磐石幣/組  | 出現比例 511 / 100000                  |
| 鑽石   | 300 磐石幣/組  | 出現比例 227 / 100000                  |
| 獄髓錠  | 5000 磐石幣/組 | 遠古遺骸 50 / 100000 / 4 = 12 / 100000 |

註：此比例部分參考 Minecraft 遊戲的比例設定
https://minecraft.fandom.com/zh/wiki/%E7%9F%BF%E7%9F%B3?variant=zh-tw

### 戰鬥道具

| 商品名稱 | 價格        | 備註                 |
|------|-----------|--------------------|
| 終界水晶 | 20 磐石幣/顆  | PVP、打龍必備           |
| 鞘翅   | 150 磐石幣/個 | 在空中自由滑翔,探索世界的每個角落! |

### 經驗

| 商品名稱 | 價格        | 備註                |
|------|-----------|-------------------|
| 經驗瓶  | 120 磐石幣/組 | 每瓶可以獲得 3 ~ 11 點經驗 |

### 寵物

| 商品名稱   | 價格        | 備註                          |
|--------|-----------|-----------------------------|
| 藍色蠑螈   | 200 磐石幣/個 | 稀有的藍色蠑螈                     |
| 雙色哞菇牛  | 200 磐石幣/個 | 獨特的雙色哞菇牛,展現你的品味!            |
| 貓      | 150 磐石幣/個 | 可愛的貓咪,為你的家增添生氣!             |
| 山貓     | 200 磐石幣/個 | 敏捷的山貓,跟隨你探索世界!              |
| 狼      | 150 磐石幣/個 | 忠誠的狼,保護你免受怪物傷害!             |
| 遠古深海守衛 | 300 磐石幣/個 | 稀有的海洋生物,在你的基地周圍巡邏!          |
| 地獄幽靈   | 300 磐石幣/個 | 來自地獄的神秘生物,在你的地獄要塞中遊蕩,嚇跑入侵者! |

### 個人化

| 商品名稱 | 價格        | 備註             |
|------|-----------|----------------|
| 命名牌  | 50 磐石幣/8個 | 為你的物品添加自定義名稱!  |
| 自訂暱稱 | 100 磐石幣/次 | 為你的角色取一個獨特的名字! |

### 服務

| 商品名稱 | 價格          | 備註   |
|------|-------------|------|
| 飛行時間 | 200 磐石幣/10天 | 尚未實裝 |
| 飛行時間 | 500 磐石幣/30天 | 尚未實裝 |

註：NTD 可直接與磐石幣轉換，1 NTD = 1 磐石幣
例如：命名牌可直接用 50 NTD 購買

## 付款方式

### Line Pay

<img src="https://raw.githubusercontent.com/rock-mc/rock-mc.github.io/publish/images/linepay.jpg" alt="drawing" width="25%"/>

### 匯款

國泰世華銀行代碼 013
075-50-634901-0

匯款完成，請在 Discord 私訊 CodingMan 帳號後五碼

### Paypal

[![paypal](https://www.paypalobjects.com/webstatic/mktg/logo/AM_mc_vs_dc_ae.jpg)](https://www.paypal.com/paypalme/CodingMan)