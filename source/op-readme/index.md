---
title: 管理員指南
date: 2022-01-14 23:20:59
---

## 統一用語
- 驗證碼
    - 現在的政策讓邀請制的角色變得薄弱，所以統一使用驗證碼


## 面試流程
請各位小幫手盡可能參與一下話題

[面試流程圖](https://hackmd.io/K9j_JbtwQxWdYFlnsiUviA?view)


## 面試不通過的隱藏規則
有以下症頭者，不予通過面試
- 無禮貌、不耐煩、催促
- 明顯寫問券不用心，請對方再填一次就消失者
- 無法溝通者
- 明顯猥褻惡意頭像或名稱
話術：好，如果沒有問題的話，面試先到這邊。幹部群會根據你剛剛的面試結果做出決定後再通知您

## 指令教學
- CoreProtect
  - https://docs.coreprotect.net/commands/
  - 恢復指令
  ```shell
  /co rollback t:1d r:100
  /co rollback t:1d u:fool
  ```
  - 刪除過舊資料
  ```shell
  /co purge t:30d r:#world_nether
  ```