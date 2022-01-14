---
title: 404
date: 2022-01-14 15:23:07
permalink: /404.html
---
<!-- markdownlint-disable MD039 MD033 -->

## 很抱歉，你目前存取的頁面並不存在。

預計將在約 <span id="timeout">6</span> 秒後返回首頁。

<script>
let countTime = 6;

function count() {
  
  document.getElementById('timeout').textContent = countTime;
  countTime -= 1;
  if(countTime === 0){
    location.href = '/';
  }
  setTimeout(() => {
    count();
  }, 1000);
}

count();
</script>