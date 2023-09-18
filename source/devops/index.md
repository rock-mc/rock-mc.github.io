---
title: Infra & Dev & Ops
date: 2023-01-29 21:43:49
---

這裡介紹磐石伺服器使用的設備與一些工具。

## 伺服器

- 處理器
    - I5 12400
- 記憶體
    - 32G RAM
- 硬碟
    - 1T SSD
    - 2T HDD 備份用
- 網路
    - 500/500Mb
    - MikroTik RB450Gx4
- 資料庫
  - MySQL in MSI Cubi N 8GL
- UPS
  - APC Easy UPS BV1000-TW

## 驗證碼系統
我們開發了一套插件，可以讓我們發出驗證碼給玩家。
只有具備驗證碼的玩家才可以通過驗證系統進入伺服器。

程式碼:
https://github.com/rock-mc/InvitationSystem

## 維運機器人
我們在系統還有伺服器之間，開發了一套機器人來幫助我們維運伺服器。
可以幫助我們自動化一些操作，例如: 

- Lag 時自動重啟伺服器
- 自動備份伺服器
- 伺服器意外關閉時，重新啟動伺服器
- 發送警告訊息到 Discord
- 自動更新 paper 伺服器程式，自動測試完成之後，就會自動上線運作
- 斷電過後五分鐘，未恢復供電可自動關閉伺服器儲存地圖並關機

程式碼:
https://github.com/rock-mc/OperationBot

## Grafana
我們也採用 Grafana 作為我們即時監測伺服器狀態的工具。

<img src="https://imgur.com/Eu7Cvb5.jpg" alt="drawing" style="vertical-align:middle" width="90%"/>
