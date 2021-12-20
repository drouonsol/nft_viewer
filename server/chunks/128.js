"use strict";
exports.id = 128;
exports.ids = [128];
exports.modules = {

/***/ 9128:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientWalletProvider": () => (/* binding */ ClientWalletProvider),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7354);
/* harmony import */ var _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6023);
/* harmony import */ var _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6269);
/* harmony import */ var _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1859);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7843);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_5__]);
_solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];





__webpack_require__.e(/* import() */ 121).then(__webpack_require__.t.bind(__webpack_require__, 2121, 23));
function ClientWalletProvider(props) {
    const wallets = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>[
            (0,_solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_3__/* .getPhantomWallet */ .y)(),
            (0,_solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_4__/* .getSolflareWallet */ .I)(),
            // getTorusWallet({
            //   options: {
            //     // TODO: Get your own tor.us wallet client Id
            //     clientId:
            //       "BOM5Cl7PXgE9Ylq1Z1tqzhpydY0RVr8k90QQ85N7AKI5QGSrr9iDC-3rvmy0K_hF0JfpLMiXoDhta68JwcxS1LQ",
            //   },
            // }),
            // getLedgerWallet(),
            // getSolongWallet(),
            // getMathWallet(),
            (0,_solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_5__/* .getSolletWallet */ .D)(), 
        ]
    , []);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__/* .WalletProvider */ .n, {
        wallets: wallets,
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_2__/* .WalletModalProvider */ .sR, {
            ...props
        })
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClientWalletProvider);

});

/***/ })

};
;