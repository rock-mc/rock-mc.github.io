---
title: Infra & Dev & Ops
date: 2023-01-29 21:43:49
---

這裡介紹磐石伺服器使用的設備與一些使用的 DevOps 技能與工具。

## 伺服器

- 處理器
    - I5 12400
- 記憶體
    - 32G RAM
- 硬碟
    - 1T SSD
    - 2T 備份用硬碟
- 網路
    - 500/500Mb
    - MikroTik RB450Gx4
    - CAT 6 網路線

## 驗證碼系統
我們開發了一套插件，可以讓我們發出驗證碼給玩家。
只有具備驗證碼的玩家才可以通過驗證系統進入伺服器。

程式碼:
https://github.com/rock-mc/InvitationSystem

## 維運機器人
我們在系統還有伺服器之間，開發了一套機器人來幫助我們維運伺服器。
可以幫助我們自動化一些操作，例如: 

- 重啟伺服器
- 備份伺服器
- 維持伺服器的運作
- 發送警告訊息到 Discord
- 遇到 Lag 或緊急情況，可以馬上下一些緊急應對的指令
- 自動更新 paper 伺服器程式，自動測試完成之後，就會自動上線運作

程式碼:
https://github.com/rock-mc/OperationBot

## Grafana
我們也採用 Grafana 作為我們即時監測伺服器狀態的工具。

<img src="https://imgur.com/Eu7Cvb5.jpg" alt="drawing" style="vertical-align:middle" width="90%"/>
