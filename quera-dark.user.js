// ==UserScript==
// @name         Quera Dark Mode
// @version      0.1
// @description  Dark theme for codeforces!
// @author       aerfanr@getgoogleoff.me
// @match        http://quera.ir/*
// @match        https://quera.ir/*
// @grant    GM_addStyle
// @run-at   document-start
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(`
        body {
            color: #c7c7c7;
        }

        #body_container {
            background-color: #101010;
        }

        .ui.menu, .ui.segment, .ui.table {
            background-color: #000 !important;
        }

        .ui.table thead th, .ui.table tfoot th, .ui.dropdown .menu {
            background-color: #111;
            color: #ededed;
        }

        .ui.menu .item, .ui.divider, .ui.table, .ui.form .field>label, .ui.dropdown .menu>.item, .ui.list>a.item, .ui.items>.item .meta {
            color: #ebebeb !important;
        }

        .active.item {
            color: #e0e0e0 !important;
        }

        .ui.secondary.menu {
            background-color: transparent !important;
        }

        .ui.header {
            color: #ebebeb;
        }

        .ui.basic.button {
            border: solid 1px #ebebeb;
            color: #ebebeb !important;
        }
    `)

    // Your code here...
})();
