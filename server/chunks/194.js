"use strict";
exports.id = 194;
exports.ids = [194];
exports.modules = {

/***/ 4004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lj": () => (/* binding */ WalletError),
/* harmony export */   "l5": () => (/* binding */ WalletNotFoundError),
/* harmony export */   "Yf": () => (/* binding */ WalletNotInstalledError),
/* harmony export */   "OZ": () => (/* binding */ WalletNotReadyError),
/* harmony export */   "$w": () => (/* binding */ WalletConnectionError),
/* harmony export */   "at": () => (/* binding */ WalletDisconnectedError),
/* harmony export */   "UG": () => (/* binding */ WalletDisconnectionError),
/* harmony export */   "Nx": () => (/* binding */ WalletPublicKeyError),
/* harmony export */   "oS": () => (/* binding */ WalletNotConnectedError),
/* harmony export */   "IW": () => (/* binding */ WalletSendTransactionError),
/* harmony export */   "PY": () => (/* binding */ WalletSignTransactionError),
/* harmony export */   "hd": () => (/* binding */ WalletWindowClosedError)
/* harmony export */ });
/* unused harmony exports WalletAccountError, WalletKeypairError, WalletSignMessageError, WalletTimeoutError, WalletWindowBlockedError */
class WalletError extends Error {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    constructor(message, error){
        super(message);
        this.error = error;
    }
}
class WalletNotFoundError extends WalletError {
    constructor(){
        super(...arguments);
        this.name = 'WalletNotFoundError';
    }
}
class WalletNotInstalledError extends WalletError {
    constructor(){
        super(...arguments);
        this.name = 'WalletNotInstalledError';
    }
}
class WalletNotReadyError extends WalletError {
    constructor(){
        super(...arguments);
        this.name = 'WalletNotReadyError';
    }
}
class WalletConnectionError extends WalletError {
    constructor(){
        super(...arguments);
        this.name = 'WalletConnectionError';
    }
}
class WalletDisconnectedError extends WalletError {
    constructor(){
        super(...arguments);
        this.name = 'WalletDisconnectedError';
    }
}
class WalletDisconnectionError extends WalletError {
    constructor(){
        super(...arguments);
        this.name = 'WalletDisconnectionError';
    }
}
class WalletAccountError extends (/* unused pure expression or super */ null && (WalletError)) {
    constructor(){
        super(...arguments);
        this.name = 'WalletAccountError';
    }
}
class WalletPublicKeyError extends WalletError {
    constructor(){
        super(...arguments);
        this.name = 'WalletPublicKeyError';
    }
}
class WalletKeypairError extends (/* unused pure expression or super */ null && (WalletError)) {
    constructor(){
        super(...arguments);
        this.name = 'WalletKeypairError';
    }
}
class WalletNotConnectedError extends WalletError {
    constructor(){
        super(...arguments);
        this.name = 'WalletNotConnectedError';
    }
}
class WalletSendTransactionError extends WalletError {
    constructor(){
        super(...arguments);
        this.name = 'WalletSendTransactionError';
    }
}
class WalletSignMessageError extends (/* unused pure expression or super */ null && (WalletError)) {
    constructor(){
        super(...arguments);
        this.name = 'WalletSignMessageError';
    }
}
class WalletSignTransactionError extends WalletError {
    constructor(){
        super(...arguments);
        this.name = 'WalletSignTransactionError';
    }
}
class WalletTimeoutError extends (/* unused pure expression or super */ null && (WalletError)) {
    constructor(){
        super(...arguments);
        this.name = 'WalletTimeoutError';
    }
}
class WalletWindowBlockedError extends (/* unused pure expression or super */ null && (WalletError)) {
    constructor(){
        super(...arguments);
        this.name = 'WalletWindowBlockedError';
    }
}
class WalletWindowClosedError extends WalletError {
    constructor(){
        super(...arguments);
        this.name = 'WalletWindowClosedError';
    }
} //# sourceMappingURL=errors.js.map


/***/ }),

/***/ 2983:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ pollUntilReady)
/* harmony export */ });
/* unused harmony export poll */
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function poll(callback, interval, count) {
    if (count > 0) {
        setTimeout(()=>__awaiter(this, void 0, void 0, function*() {
                const done = yield callback();
                if (!done) poll(callback, interval, count - 1);
            })
        , interval);
    }
}
function pollUntilReady(adapter, pollInterval, pollCount) {
    poll(()=>{
        const { ready  } = adapter;
        if (ready) {
            if (!adapter.emit('ready')) {
                console.warn(`${adapter.constructor.name} is ready but no listener was registered`);
            }
        }
        return ready;
    }, pollInterval, pollCount);
} //# sourceMappingURL=poll.js.map


/***/ }),

/***/ 394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ BaseSignerWalletAdapter),
/* harmony export */   "e": () => (/* binding */ BaseMessageSignerWalletAdapter)
/* harmony export */ });
/* harmony import */ var _adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6296);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4004);


var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {
    };
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
class BaseSignerWalletAdapter extends _adapter__WEBPACK_IMPORTED_MODULE_0__/* .BaseWalletAdapter */ .mI {
    sendTransaction(transaction, connection, options = {
    }) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                try {
                    transaction.feePayer || (transaction.feePayer = this.publicKey || undefined);
                    transaction.recentBlockhash || (transaction.recentBlockhash = (yield connection.getRecentBlockhash('finalized')).blockhash);
                    const { signers  } = options, sendOptions = __rest(options, [
                        "signers"
                    ]);
                    (signers === null || signers === void 0 ? void 0 : signers.length) && transaction.partialSign(...signers);
                    transaction = yield this.signTransaction(transaction);
                    const rawTransaction = transaction.serialize();
                    return yield connection.sendRawTransaction(rawTransaction, sendOptions);
                } catch (error) {
                    if (error instanceof _errors__WEBPACK_IMPORTED_MODULE_1__/* .WalletError */ .lj) throw error;
                    throw new _errors__WEBPACK_IMPORTED_MODULE_1__/* .WalletSendTransactionError */ .IW(error === null || error === void 0 ? void 0 : error.message, error);
                }
            } catch (error) {
                this.emit('error', error);
                throw error;
            }
        });
    }
}
class BaseMessageSignerWalletAdapter extends BaseSignerWalletAdapter {
} //# sourceMappingURL=signer.js.map


/***/ }),

/***/ 7354:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "n": () => (/* binding */ WalletProvider)
});

// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-base/lib/errors.js
var errors = __webpack_require__(4004);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-react/lib/errors.js

class WalletNotSelectedError extends errors/* WalletError */.lj {
    constructor(){
        super(...arguments);
        this.name = 'WalletNotSelectedError';
    }
} //# sourceMappingURL=errors.js.map

;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-react/lib/useLocalStorage.js

function useLocalStorage(key, defaultState) {
    const { 0: value1 , 1: setValue  } = (0,external_react_.useState)(()=>{
        if (typeof localStorage === 'undefined') return defaultState;
        const value = localStorage.getItem(key);
        try {
            return value ? JSON.parse(value) : defaultState;
        } catch (error) {
            console.warn(error);
            return defaultState;
        }
    });
    const setLocalStorage = (0,external_react_.useCallback)((newValue)=>{
        if (newValue === value1) return;
        setValue(newValue);
        if (newValue === null) {
            localStorage.removeItem(key);
        } else {
            try {
                localStorage.setItem(key, JSON.stringify(newValue));
            } catch (error) {
                console.error(error);
            }
        }
    }, [
        value1,
        setValue,
        key
    ]);
    return [
        value1,
        setLocalStorage
    ];
} //# sourceMappingURL=useLocalStorage.js.map

// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-react/lib/useWallet.js
var useWallet = __webpack_require__(7257);
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-react/lib/WalletProvider.js





var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const initialState = {
    wallet: null,
    adapter: null,
    ready: false,
    publicKey: null,
    connected: false
};
const WalletProvider = ({ children , wallets , autoConnect =false , onError: _onError = (error)=>console.error(error)
 , localStorageKey ='walletName' ,  })=>{
    const [name, setName] = useLocalStorage(localStorageKey, null);
    const { 0: { wallet: wallet1 , adapter: adapter1 , ready: ready1 , publicKey: publicKey1 , connected: connected1  } , 1: setState  } = (0,external_react_.useState)(initialState);
    const { 0: connecting , 1: setConnecting  } = (0,external_react_.useState)(false);
    const { 0: disconnecting , 1: setDisconnecting  } = (0,external_react_.useState)(false);
    const isConnecting = (0,external_react_.useRef)(false);
    const isDisconnecting = (0,external_react_.useRef)(false);
    const isUnloading = (0,external_react_.useRef)(false);
    // Map of wallet names to wallets
    const walletsByName1 = (0,external_react_.useMemo)(()=>wallets.reduce((walletsByName, wallet)=>{
            walletsByName[wallet.name] = wallet;
            return walletsByName;
        }, {
        })
    , [
        wallets
    ]);
    // When the selected wallet changes, initialize the state
    (0,external_react_.useEffect)(()=>{
        const wallet = name && walletsByName1[name] || null;
        const adapter = wallet && wallet.adapter();
        if (adapter) {
            const { ready , publicKey , connected  } = adapter;
            setState({
                wallet,
                adapter,
                connected,
                publicKey,
                ready
            });
        } else {
            setState(initialState);
        }
    }, [
        name,
        walletsByName1,
        setState
    ]);
    // If autoConnect is enabled, try to connect when the adapter changes and is ready
    (0,external_react_.useEffect)(()=>{
        if (isConnecting.current || connecting || connected1 || !autoConnect || !adapter1 || !ready1) return;
        (function() {
            return __awaiter(this, void 0, void 0, function*() {
                isConnecting.current = true;
                setConnecting(true);
                try {
                    yield adapter1.connect();
                } catch (error) {
                    // Clear the selected wallet
                    setName(null);
                // Don't throw error, but onError will still be called
                } finally{
                    setConnecting(false);
                    isConnecting.current = false;
                }
            });
        })();
    }, [
        isConnecting,
        connecting,
        connected1,
        autoConnect,
        adapter1,
        ready1,
        setConnecting,
        setName
    ]);
    // If the window is closing or reloading, ignore disconnect and error events from the adapter
    (0,external_react_.useEffect)(()=>{
        function listener() {
            isUnloading.current = true;
        }
        window.addEventListener('beforeunload', listener);
        return ()=>window.removeEventListener('beforeunload', listener)
        ;
    }, [
        isUnloading
    ]);
    // Select a wallet by name
    const select = (0,external_react_.useCallback)((newName)=>__awaiter(void 0, void 0, void 0, function*() {
            if (name === newName) return;
            if (adapter1) yield adapter1.disconnect();
            setName(newName);
        })
    , [
        name,
        adapter1,
        setName
    ]);
    // Handle the adapter's ready event
    const onReady = (0,external_react_.useCallback)(()=>setState((state)=>Object.assign(Object.assign({
            }, state), {
                ready: true
            })
        )
    , [
        setState
    ]);
    // Handle the adapter's connect event
    const onConnect = (0,external_react_.useCallback)(()=>{
        if (!adapter1) return;
        const { connected , publicKey , ready  } = adapter1;
        setState((state)=>Object.assign(Object.assign({
            }, state), {
                connected,
                publicKey,
                ready
            })
        );
    }, [
        adapter1,
        setState
    ]);
    // Handle the adapter's disconnect event
    const onDisconnect = (0,external_react_.useCallback)(()=>{
        // Clear the selected wallet unless the window is unloading
        if (!isUnloading.current) setName(null);
    }, [
        isUnloading,
        setName
    ]);
    // Handle the adapter's error event, and local errors
    const onError = (0,external_react_.useCallback)((error)=>{
        // Call the provided error handler unless the window is unloading
        if (!isUnloading.current) _onError(error);
        return error;
    }, [
        isUnloading,
        _onError
    ]);
    // Connect the adapter to the wallet
    const connect = (0,external_react_.useCallback)(()=>__awaiter(void 0, void 0, void 0, function*() {
            if (isConnecting.current || connecting || disconnecting || connected1) return;
            if (!wallet1 || !adapter1) throw onError(new WalletNotSelectedError());
            if (!ready1) {
                // Clear the selected wallet
                setName(null);
                if (false) {}
                throw onError(new errors/* WalletNotReadyError */.OZ());
            }
            isConnecting.current = true;
            setConnecting(true);
            try {
                yield adapter1.connect();
            } catch (error) {
                // Clear the selected wallet
                setName(null);
                // Rethrow the error, and onError will also be called
                throw error;
            } finally{
                setConnecting(false);
                isConnecting.current = false;
            }
        })
    , [
        isConnecting,
        connecting,
        disconnecting,
        connected1,
        wallet1,
        adapter1,
        onError,
        ready1,
        setConnecting,
        setName
    ]);
    // Disconnect the adapter from the wallet
    const disconnect = (0,external_react_.useCallback)(()=>__awaiter(void 0, void 0, void 0, function*() {
            if (isDisconnecting.current || disconnecting) return;
            if (!adapter1) return setName(null);
            isDisconnecting.current = true;
            setDisconnecting(true);
            try {
                yield adapter1.disconnect();
            } catch (error) {
                // Clear the selected wallet
                setName(null);
                // Rethrow the error, and onError will also be called
                throw error;
            } finally{
                setDisconnecting(false);
                isDisconnecting.current = false;
            }
        })
    , [
        isDisconnecting,
        disconnecting,
        adapter1,
        setDisconnecting,
        setName
    ]);
    // Send a transaction using the provided connection
    const sendTransaction = (0,external_react_.useCallback)((transaction, connection, options)=>__awaiter(void 0, void 0, void 0, function*() {
            if (!adapter1) throw onError(new WalletNotSelectedError());
            if (!connected1) throw onError(new errors/* WalletNotConnectedError */.oS());
            return yield adapter1.sendTransaction(transaction, connection, options);
        })
    , [
        adapter1,
        onError,
        connected1
    ]);
    // Sign a transaction if the wallet supports it
    const signTransaction = (0,external_react_.useMemo)(()=>adapter1 && 'signTransaction' in adapter1 ? (transaction)=>__awaiter(void 0, void 0, void 0, function*() {
                if (!connected1) throw onError(new errors/* WalletNotConnectedError */.oS());
                return yield adapter1.signTransaction(transaction);
            })
         : undefined
    , [
        adapter1,
        onError,
        connected1
    ]);
    // Sign multiple transactions if the wallet supports it
    const signAllTransactions = (0,external_react_.useMemo)(()=>adapter1 && 'signAllTransactions' in adapter1 ? (transactions)=>__awaiter(void 0, void 0, void 0, function*() {
                if (!connected1) throw onError(new errors/* WalletNotConnectedError */.oS());
                return yield adapter1.signAllTransactions(transactions);
            })
         : undefined
    , [
        adapter1,
        onError,
        connected1
    ]);
    // Sign an arbitrary message if the wallet supports it
    const signMessage = (0,external_react_.useMemo)(()=>adapter1 && 'signMessage' in adapter1 ? (message)=>__awaiter(void 0, void 0, void 0, function*() {
                if (!connected1) throw onError(new errors/* WalletNotConnectedError */.oS());
                return yield adapter1.signMessage(message);
            })
         : undefined
    , [
        adapter1,
        onError,
        connected1
    ]);
    // Setup and teardown event listeners when the adapter changes
    (0,external_react_.useEffect)(()=>{
        if (adapter1) {
            adapter1.on('ready', onReady);
            adapter1.on('connect', onConnect);
            adapter1.on('disconnect', onDisconnect);
            adapter1.on('error', onError);
            return ()=>{
                adapter1.off('ready', onReady);
                adapter1.off('connect', onConnect);
                adapter1.off('disconnect', onDisconnect);
                adapter1.off('error', onError);
            };
        }
    }, [
        adapter1,
        onReady,
        onConnect,
        onDisconnect,
        onError
    ]);
    return(/*#__PURE__*/ external_react_default().createElement(useWallet/* WalletContext.Provider */.z.Provider, {
        value: {
            wallets,
            autoConnect,
            wallet: wallet1,
            adapter: adapter1,
            publicKey: publicKey1,
            ready: ready1,
            connected: connected1,
            connecting,
            disconnecting,
            select,
            connect,
            disconnect,
            sendTransaction,
            signTransaction,
            signAllTransactions,
            signMessage
        }
    }, children));
}; //# sourceMappingURL=WalletProvider.js.map


/***/ }),

/***/ 6023:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "y": () => (/* binding */ getPhantomWallet)
});

// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-base/lib/signer.js
var signer = __webpack_require__(394);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-base/lib/errors.js
var errors = __webpack_require__(4004);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-base/lib/poll.js
var poll = __webpack_require__(2983);
// EXTERNAL MODULE: external "@solana/web3.js"
var web3_js_ = __webpack_require__(7831);
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-phantom/lib/adapter.js


var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class PhantomWalletAdapter extends signer/* BaseMessageSignerWalletAdapter */.e {
    constructor(config = {
    }){
        super();
        this._disconnected = ()=>{
            const wallet = this._wallet;
            if (wallet) {
                wallet.off('disconnect', this._disconnected);
                this._wallet = null;
                this._publicKey = null;
                this.emit('error', new errors/* WalletDisconnectedError */.at());
                this.emit('disconnect');
            }
        };
        this._connecting = false;
        this._wallet = null;
        this._publicKey = null;
        if (!this.ready) (0,poll/* pollUntilReady */._)(this, config.pollInterval || 1000, config.pollCount || 3);
    }
    get publicKey() {
        return this._publicKey;
    }
    get ready() {
        var _a;
        return  false && 0;
    }
    get connecting() {
        return this._connecting;
    }
    get connected() {
        var _a;
        return !!((_a = this._wallet) === null || _a === void 0 ? void 0 : _a.isConnected);
    }
    connect() {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                if (this.connected || this.connecting) return;
                this._connecting = true;
                const wallet =  false && 0;
                if (!wallet) throw new errors/* WalletNotFoundError */.l5();
                if (!wallet.isPhantom) throw new errors/* WalletNotInstalledError */.Yf();
                if (!wallet.isConnected) {
                    // HACK: Phantom doesn't reject or emit an event if the popup is closed
                    const handleDisconnect = wallet._handleDisconnect;
                    try {
                        yield new Promise((resolve, reject)=>{
                            const connect = ()=>{
                                wallet.off('connect', connect);
                                resolve();
                            };
                            wallet._handleDisconnect = (...args)=>{
                                wallet.off('connect', connect);
                                reject(new errors/* WalletWindowClosedError */.hd());
                                return handleDisconnect.apply(wallet, args);
                            };
                            wallet.on('connect', connect);
                            wallet.connect().catch((reason)=>{
                                wallet.off('connect', connect);
                                reject(reason);
                            });
                        });
                    } catch (error) {
                        if (error instanceof errors/* WalletError */.lj) throw error;
                        throw new errors/* WalletConnectionError */.$w(error === null || error === void 0 ? void 0 : error.message, error);
                    } finally{
                        wallet._handleDisconnect = handleDisconnect;
                    }
                }
                if (!wallet.publicKey) throw new errors/* WalletConnectionError */.$w();
                let publicKey;
                try {
                    publicKey = new web3_js_.PublicKey(wallet.publicKey.toBytes());
                } catch (error) {
                    throw new errors/* WalletPublicKeyError */.Nx(error === null || error === void 0 ? void 0 : error.message, error);
                }
                wallet.on('disconnect', this._disconnected);
                this._wallet = wallet;
                this._publicKey = publicKey;
                this.emit('connect');
            } catch (error) {
                this.emit('error', error);
                throw error;
            } finally{
                this._connecting = false;
            }
        });
    }
    disconnect() {
        return __awaiter(this, void 0, void 0, function*() {
            const wallet = this._wallet;
            if (wallet) {
                wallet.off('disconnect', this._disconnected);
                this._wallet = null;
                this._publicKey = null;
                try {
                    yield wallet.disconnect();
                } catch (error) {
                    this.emit('error', new errors/* WalletDisconnectionError */.UG(error === null || error === void 0 ? void 0 : error.message, error));
                }
            }
            this.emit('disconnect');
        });
    }
    signTransaction(transaction) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const wallet = this._wallet;
                if (!wallet) throw new errors/* WalletNotConnectedError */.oS();
                try {
                    return (yield wallet.signTransaction(transaction)) || transaction;
                } catch (error) {
                    throw new errors/* WalletSignTransactionError */.PY(error === null || error === void 0 ? void 0 : error.message, error);
                }
            } catch (error) {
                this.emit('error', error);
                throw error;
            }
        });
    }
    signAllTransactions(transactions) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const wallet = this._wallet;
                if (!wallet) throw new errors/* WalletNotConnectedError */.oS();
                try {
                    return (yield wallet.signAllTransactions(transactions)) || transactions;
                } catch (error) {
                    throw new errors/* WalletSignTransactionError */.PY(error === null || error === void 0 ? void 0 : error.message, error);
                }
            } catch (error) {
                this.emit('error', error);
                throw error;
            }
        });
    }
    signMessage(message) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const wallet = this._wallet;
                if (!wallet) throw new errors/* WalletNotConnectedError */.oS();
                try {
                    const { signature  } = yield wallet.signMessage(message);
                    return Uint8Array.from(signature);
                } catch (error) {
                    throw new errors/* WalletSignTransactionError */.PY(error === null || error === void 0 ? void 0 : error.message, error);
                }
            } catch (error) {
                this.emit('error', error);
                throw error;
            }
        });
    }
} //# sourceMappingURL=adapter.js.map

// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-wallets/lib/types.js
var types = __webpack_require__(9501);
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-wallets/lib/phantom.js


const getPhantomWallet = (config = {
})=>({
        name: types/* WalletName.Phantom */.w.Phantom,
        url: 'https://phantom.app',
        icon: 'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjM0IiB3aWR0aD0iMzQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iLjUiIHgyPSIuNSIgeTE9IjAiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM1MzRiYjEiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM1NTFiZjkiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDE9Ii41IiB4Mj0iLjUiIHkxPSIwIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9Ii44MiIvPjwvbGluZWFyR3JhZGllbnQ+PGNpcmNsZSBjeD0iMTciIGN5PSIxNyIgZmlsbD0idXJsKCNhKSIgcj0iMTciLz48cGF0aCBkPSJtMjkuMTcwMiAxNy4yMDcxaC0yLjk5NjljMC02LjEwNzQtNC45NjgzLTExLjA1ODE3LTExLjA5NzUtMTEuMDU4MTctNi4wNTMyNSAwLTEwLjk3NDYzIDQuODI5NTctMTEuMDk1MDggMTAuODMyMzctLjEyNDYxIDYuMjA1IDUuNzE3NTIgMTEuNTkzMiAxMS45NDUzOCAxMS41OTMyaC43ODM0YzUuNDkwNiAwIDEyLjg0OTctNC4yODI5IDEzLjk5OTUtOS41MDEzLjIxMjMtLjk2MTktLjU1MDItMS44NjYxLTEuNTM4OC0xLjg2NjF6bS0xOC41NDc5LjI3MjFjMCAuODE2Ny0uNjcwMzggMS40ODQ3LTEuNDkwMDEgMS40ODQ3LS44MTk2NCAwLTEuNDg5OTgtLjY2ODMtMS40ODk5OC0xLjQ4NDd2LTIuNDAxOWMwLS44MTY3LjY3MDM0LTEuNDg0NyAxLjQ4OTk4LTEuNDg0Ny44MTk2MyAwIDEuNDkwMDEuNjY4IDEuNDkwMDEgMS40ODQ3em01LjE3MzggMGMwIC44MTY3LS42NzAzIDEuNDg0Ny0xLjQ4OTkgMS40ODQ3LS44MTk3IDAtMS40OS0uNjY4My0xLjQ5LTEuNDg0N3YtMi40MDE5YzAtLjgxNjcuNjcwNi0xLjQ4NDcgMS40OS0xLjQ4NDcuODE5NiAwIDEuNDg5OS42NjggMS40ODk5IDEuNDg0N3oiIGZpbGw9InVybCgjYikiLz48L3N2Zz4K',
        adapter: ()=>new PhantomWalletAdapter(config)
    })
; //# sourceMappingURL=phantom.js.map


/***/ }),

/***/ 6269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "I": () => (/* binding */ getSolflareWallet)
});

// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-base/lib/signer.js
var signer = __webpack_require__(394);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-base/lib/errors.js
var errors = __webpack_require__(4004);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-base/lib/poll.js
var poll = __webpack_require__(2983);
// EXTERNAL MODULE: external "@solana/web3.js"
var web3_js_ = __webpack_require__(7831);
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-solflare/lib/adapter.js


var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class SolflareWalletAdapter extends signer/* BaseSignerWalletAdapter */.s {
    constructor(config = {
    }){
        super();
        this._disconnected = ()=>{
            const wallet = this._wallet;
            if (wallet) {
                wallet.off('disconnect', this._disconnected);
                this._wallet = null;
                this._publicKey = null;
                this.emit('error', new errors/* WalletDisconnectedError */.at());
                this.emit('disconnect');
            }
        };
        this._connecting = false;
        this._wallet = null;
        this._publicKey = null;
        if (!this.ready) (0,poll/* pollUntilReady */._)(this, config.pollInterval || 1000, config.pollCount || 3);
    }
    get publicKey() {
        return this._publicKey;
    }
    get ready() {
        var _a;
        return  false && 0;
    }
    get connecting() {
        return this._connecting;
    }
    get connected() {
        var _a;
        return !!((_a = this._wallet) === null || _a === void 0 ? void 0 : _a.isConnected);
    }
    connect() {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                if (this.connected || this.connecting) return;
                this._connecting = true;
                const wallet =  false && 0;
                if (!wallet) throw new errors/* WalletNotFoundError */.l5();
                if (!wallet.isSolflare) throw new errors/* WalletNotInstalledError */.Yf();
                if (!wallet.isConnected) {
                    try {
                        yield wallet.connect();
                    } catch (error) {
                        throw new errors/* WalletConnectionError */.$w(error === null || error === void 0 ? void 0 : error.message, error);
                    }
                }
                // HACK: Solflare doesn't reject its promise if the popup is closed
                if (!wallet.publicKey) throw new errors/* WalletConnectionError */.$w();
                let publicKey;
                try {
                    publicKey = new web3_js_.PublicKey(wallet.publicKey.toBytes());
                } catch (error) {
                    throw new errors/* WalletPublicKeyError */.Nx(error === null || error === void 0 ? void 0 : error.message, error);
                }
                wallet.on('disconnect', this._disconnected);
                this._wallet = wallet;
                this._publicKey = publicKey;
                this.emit('connect');
            } catch (error) {
                this.emit('error', error);
                throw error;
            } finally{
                this._connecting = false;
            }
        });
    }
    disconnect() {
        return __awaiter(this, void 0, void 0, function*() {
            const wallet = this._wallet;
            if (wallet) {
                wallet.off('disconnect', this._disconnected);
                this._wallet = null;
                this._publicKey = null;
                try {
                    yield wallet.disconnect();
                } catch (error) {
                    this.emit('error', new errors/* WalletDisconnectionError */.UG(error === null || error === void 0 ? void 0 : error.message, error));
                }
            }
            this.emit('disconnect');
        });
    }
    signTransaction(transaction) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const wallet = this._wallet;
                if (!wallet) throw new errors/* WalletNotConnectedError */.oS();
                try {
                    return (yield wallet.signTransaction(transaction)) || transaction;
                } catch (error) {
                    throw new errors/* WalletSignTransactionError */.PY(error === null || error === void 0 ? void 0 : error.message, error);
                }
            } catch (error) {
                this.emit('error', error);
                throw error;
            }
        });
    }
    signAllTransactions(transactions) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const wallet = this._wallet;
                if (!wallet) throw new errors/* WalletNotConnectedError */.oS();
                try {
                    return (yield wallet.signAllTransactions(transactions)) || transactions;
                } catch (error) {
                    throw new errors/* WalletSignTransactionError */.PY(error === null || error === void 0 ? void 0 : error.message, error);
                }
            } catch (error) {
                this.emit('error', error);
                throw error;
            }
        });
    }
} //# sourceMappingURL=adapter.js.map

// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-wallets/lib/types.js
var types = __webpack_require__(9501);
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-wallets/lib/solflare.js


const getSolflareWallet = (config = {
})=>({
        name: types/* WalletName.Solflare */.w.Solflare,
        url: 'https://solflare.com',
        icon: 'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmVhckdyYWRpZW50IGlkPSJhIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmMxMGIiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmYjNmMmUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI2LjQ3ODM1IiB4Mj0iMzQuOTEwNyIgeGxpbms6aHJlZj0iI2EiIHkxPSI3LjkyIiB5Mj0iMzMuNjU5MyIvPjxyYWRpYWxHcmFkaWVudCBpZD0iYyIgY3g9IjAiIGN5PSIwIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDQuOTkyMTg4MzIgMTIuMDYzODc5NjMgLTEyLjE4MTEzNjU1IDUuMDQwNzEwNzQgMjIuNTIwMiAyMC42MTgzKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHI9IjEiIHhsaW5rOmhyZWY9IiNhIi8+PHBhdGggZD0ibTI1LjE3MDggNDcuOTEwNGMuNTI1IDAgLjk1MDcuNDIxLjk1MDcuOTQwM3MtLjQyNTcuOTQwMi0uOTUwNy45NDAyLS45NTA3LS40MjA5LS45NTA3LS45NDAyLjQyNTctLjk0MDMuOTUwNy0uOTQwM3ptLTEuMDMyOC00NC45MTU2NWMuNDY0Ni4wMzgzNi44Mzk4LjM5MDQuOTAyNy44NDY4MWwxLjEzMDcgOC4yMTU3NGMuMzc5OCAyLjcxNDMgMy42NTM1IDMuODkwNCA1LjY3NDMgMi4wNDU5bDExLjMyOTEtMTAuMzExNThjLjI3MzMtLjI0ODczLjY5ODktLjIzMTQ5Ljk1MDcuMDM4NTEuMjMwOS4yNDc3Mi4yMzc5LjYyNjk3LjAxNjEuODgyNzdsLTkuODc5MSAxMS4zOTU4Yy0xLjgxODcgMi4wOTQyLS40NzY4IDUuMzY0MyAyLjI5NTYgNS41OTc4bDguNzE2OC44NDAzYy40MzQxLjA0MTguNzUxNy40MjM0LjcwOTMuODUyNC0uMDM0OS4zNTM3LS4zMDc0LjYzOTUtLjY2MjguNjk0OWwtOS4xNTk0IDEuNDMwMmMtMi42NTkzLjM2MjUtMy44NjM2IDMuNTExNy0yLjEzMzkgNS41NTc2bDMuMjIgMy43OTYxYy4yNTk0LjMwNTguMjE4OC43NjE1LS4wOTA4IDEuMDE3OC0uMjYyMi4yMTcyLS42NDE5LjIyNTYtLjkxMzguMDIwM2wtMy45Njk0LTIuOTk3OGMtMi4xNDIxLTEuNjEwOS01LjIyOTctLjI0MTctNS40NTYxIDIuNDI0M2wtLjg3NDcgMTAuMzk3NmMtLjAzNjIuNDI5NS0uNDE3OC43NDg3LS44NTI1LjcxMy0uMzY5LS4wMzAzLS42NjcxLS4zMDk3LS43MTcxLS42NzIxbC0xLjM4NzEtMTAuMDQzN2MtLjM3MTctMi43MTQ0LTMuNjQ1NC0zLjg5MDQtNS42NzQzLTIuMDQ1OWwtMTIuMDUxOTUgMTAuOTc0Yy0uMjQ5NDcuMjI3MS0uNjM4MDkuMjExNC0uODY4LS4wMzUtLjIxMDk0LS4yMjYyLS4yMTczNS0uNTcyNC0uMDE0OTMtLjgwNmwxMC41MTgxOC0xMi4xMzg1YzEuODE4Ny0yLjA5NDIuNDg0OS01LjM2NDQtMi4yODc2LTUuNTk3OGwtOC43MTg3Mi0uODQwNWMtLjQzNDEzLS4wNDE4LS43NTE3Mi0uNDIzNS0uNzA5MzYtLjg1MjQuMDM0OTMtLjM1MzcuMzA3MzktLjYzOTQuNjYyNy0uNjk1bDkuMTUzMzgtMS40Mjk5YzIuNjU5NC0uMzYyNSAzLjg3MTgtMy41MTE3IDIuMTQyMS01LjU1NzZsLTIuMTkyLTIuNTg0MWMtLjMyMTctLjM3OTItLjI3MTMtLjk0NDMuMTEyNi0xLjI2MjEuMzI1My0uMjY5NC43OTYzLS4yNzk3IDEuMTMzNC0uMDI0OWwyLjY5MTggMi4wMzQ3YzIuMTQyMSAxLjYxMDkgNS4yMjk3LjI0MTcgNS40NTYxLTIuNDI0M2wuNzI0MS04LjU1OTk4Yy4wNDU3LS41NDA4LjUyNjUtLjk0MjU3IDEuMDczOS0uODk3Mzd6bS0yMy4xODczMyAyMC40Mzk2NWMuNTI1MDQgMCAuOTUwNjcuNDIxLjk1MDY3Ljk0MDNzLS40MjU2My45NDAzLS45NTA2Ny45NDAzYy0uNTI1MDQxIDAtLjk1MDY3LS40MjEtLjk1MDY3LS45NDAzcy40MjU2MjktLjk0MDMuOTUwNjctLjk0MDN6bTQ3LjY3OTczLS45NTQ3Yy41MjUgMCAuOTUwNy40MjEuOTUwNy45NDAzcy0uNDI1Ny45NDAyLS45NTA3Ljk0MDItLjk1MDctLjQyMDktLjk1MDctLjk0MDIuNDI1Ny0uOTQwMy45NTA3LS45NDAzem0tMjQuNjI5Ni0yMi40Nzk3Yy41MjUgMCAuOTUwNi40MjA5NzMuOTUwNi45NDAyNyAwIC41MTkzLS40MjU2Ljk0MDI3LS45NTA2Ljk0MDI3LS41MjUxIDAtLjk1MDctLjQyMDk3LS45NTA3LS45NDAyNyAwLS41MTkyOTcuNDI1Ni0uOTQwMjcuOTUwNy0uOTQwMjd6IiBmaWxsPSJ1cmwoI2IpIi8+PHBhdGggZD0ibTI0LjU3MSAzMi43NzkyYzQuOTU5NiAwIDguOTgwMi0zLjk3NjUgOC45ODAyLTguODgxOSAwLTQuOTA1My00LjAyMDYtOC44ODE5LTguOTgwMi04Ljg4MTlzLTguOTgwMiAzLjk3NjYtOC45ODAyIDguODgxOWMwIDQuOTA1NCA0LjAyMDYgOC44ODE5IDguOTgwMiA4Ljg4MTl6IiBmaWxsPSJ1cmwoI2MpIi8+PC9zdmc+',
        adapter: ()=>new SolflareWalletAdapter(config)
    })
; //# sourceMappingURL=solflare.js.map


/***/ }),

/***/ 1859:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ getSolletWallet)
/* harmony export */ });
/* harmony import */ var _solana_wallet_adapter_sollet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2214);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9501);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_sollet__WEBPACK_IMPORTED_MODULE_0__]);
_solana_wallet_adapter_sollet__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {
    };
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
const getSolletWallet = (_a = {
})=>{
    var { provider  } = _a, config = __rest(_a, [
        "provider"
    ]);
    return {
        name: _types__WEBPACK_IMPORTED_MODULE_1__/* .WalletName.Sollet */ .w.Sollet,
        url: 'https://www.sollet.io',
        icon: 'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUzMCIgd2lkdGg9IjUzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtLTEtMWg1MzJ2NTMyaC01MzJ6IiBmaWxsPSJub25lIi8+PGcgZmlsbD0iIzAwZmZhMyI+PHBhdGggZD0ibTg4Ljg4OTM1IDM3Mi45ODIwMWMzLjE5My0zLjE5IDcuNTIyLTQuOTgyIDEyLjAzNS00Ljk4Mmg0MTYuNDYxYzcuNTg2IDAgMTEuMzg0IDkuMTc0IDYuMDE3IDE0LjUzNmwtODIuMjkxIDgyLjIyNmMtMy4xOTMgMy4xOTEtNy41MjIgNC45ODMtMTIuMDM2IDQuOTgzaC00MTYuNDYwMWMtNy41ODY2IDAtMTEuMzg0NS05LjE3NC02LjAxNzgtMTQuNTM3bDgyLjI5MTktODIuMjI2eiIvPjxwYXRoIGQ9Im04OC44ODkzNSA2NS45ODI1YzMuMTkzLTMuMTkwNCA3LjUyMi00Ljk4MjUgMTIuMDM1LTQuOTgyNWg0MTYuNDYxYzcuNTg2IDAgMTEuMzg0IDkuMTczOSA2LjAxNyAxNC41MzYzbC04Mi4yOTEgODIuMjI2N2MtMy4xOTMgMy4xOS03LjUyMiA0Ljk4Mi0xMi4wMzYgNC45ODJoLTQxNi40NjAxYy03LjU4NjYgMC0xMS4zODQ1LTkuMTc0LTYuMDE3OC0xNC41MzZsODIuMjkxOS04Mi4yMjY1eiIvPjxwYXRoIGQ9Im00NDEuMTExMzUgMjE5LjEwOTVjLTMuMTkzLTMuMTktNy41MjItNC45ODItMTIuMDM2LTQuOTgyaC00MTYuNDYwMWMtNy41ODY2IDAtMTEuMzg0NSA5LjE3My02LjAxNzggMTQuNTM2bDgyLjI5MTkgODIuMjI2YzMuMTkzIDMuMTkgNy41MjIgNC45ODMgMTIuMDM1IDQuOTgzaDQxNi40NjFjNy41ODYgMCAxMS4zODQtOS4xNzQgNi4wMTctMTQuNTM3eiIvPjwvZz48L3N2Zz4=',
        adapter: ()=>new _solana_wallet_adapter_sollet__WEBPACK_IMPORTED_MODULE_0__.SolletWalletAdapter(Object.assign({
                provider: 'https://www.sollet.io'
            }, config))
    };
}; //# sourceMappingURL=sollet.js.map

});

/***/ }),

/***/ 9501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ WalletName1)
/* harmony export */ });
var WalletName1;

(function(WalletName) {
    WalletName["BitKeep"] = "BitKeep";
    WalletName["Bitpie"] = "Bitpie";
    WalletName["Blocto"] = "Blocto";
    WalletName["Clover"] = "Clover";
    WalletName["Coin98"] = "Coin98";
    WalletName["Coinhub"] = "Coinhub";
    WalletName["Ledger"] = "Ledger";
    WalletName["MathWallet"] = "MathWallet";
    WalletName["Phantom"] = "Phantom";
    WalletName["SafePal"] = "SafePal";
    WalletName["Slope"] = "Slope";
    WalletName["Solflare"] = "Solflare";
    WalletName["SolflareWeb"] = "Solflare (Web)";
    WalletName["Sollet"] = "Sollet";
    WalletName["SolletExtension"] = "Sollet (Extension)";
    WalletName["Solong"] = "Solong";
    WalletName["TokenPocket"] = "TokenPocket";
    WalletName["Torus"] = "Torus";
// WalletConnect = 'WalletConnect', // not published yet
})(WalletName1 || (WalletName1 = {
})); //# sourceMappingURL=types.js.map


/***/ })

};
;