(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[382],{

/***/ 766:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "IG": function() { return /* reexport */ CandyMachineMintView; },
  "Hr": function() { return /* reexport */ GalleryView; },
  "ug": function() { return /* reexport */ HomeView; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-react/lib/useWallet.js
var useWallet = __webpack_require__(7257);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-react-ui/lib/index.js + 11 modules
var lib = __webpack_require__(7843);
// EXTERNAL MODULE: ./src/views/HomeView/index.module.css
var index_module = __webpack_require__(7233);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
;// CONCATENATED MODULE: ./src/views/HomeView/index.tsx




function _throw(e) {
    throw e;
}
var HomeView = function(param) {
    var param = param !== null ? param : _throw(new TypeError("Cannot destructure undefined"));
    var publicKey = (0,useWallet/* useWallet */.O)().publicKey;
    var onClick = function() {
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        style: {
            fontFamily: "Skrapbook",
            fontSize: "10px"
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            style: {
                backgroundImage: "url(" + "https://cdn.discordapp.com/attachments/875370923954430013/922202748013936640/Untitled_Artwork.png" + ")"
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "container mx-auto max-w-6xl p-8 2xl:px-0",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (index_module_default()).container,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box",
                            style: {
                                backgroundColor: "rgba(2,0,0,0.6)"
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "flex-none",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                        className: "btn btn-square btn-ghost",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "text-4xl",
                                            children: "🐻"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "flex-1 px-2 mx-2",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "text-lg font-bold",
                                        style: {
                                            fontFamily: "Skrapbook"
                                        },
                                        children: "Degen Bear"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "flex-none",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(lib/* WalletMultiButton */.aD, {
                                        className: "btn btn-ghost"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            style: {
                                display: "flex",
                                textAlign: 'center',
                                fontWeight: 'bold',
                                flexDirection: "column",
                                justifyContent: "center",
                                height: "86.3vh"
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "hero min-h-16 py-20",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "text-center hero-content",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "max-w-lg",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                                className: "mb-5 text-5xl font-bold",
                                                style: {
                                                    color: "darkbrown"
                                                },
                                                children: "Degen Bear🐻"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                className: "btn btn-primary btn-lg",
                                                style: {
                                                    color: "white"
                                                },
                                                href: "./gallery",
                                                children: "Start App"
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    ]
                })
            })
        })
    }));
};

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@nfteyez/sol-rayz-react/dist/index.js
var dist = __webpack_require__(7452);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-react/lib/useConnection.js
var useConnection = __webpack_require__(9669);
;// CONCATENATED MODULE: ./src/components/Loader.tsx

var Loader = function(param) {
    var _text = param.text, text = _text === void 0 ? "Loading..." : _text, _noText = param.noText, noText = _noText === void 0 ? false : _noText;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col justify-center items-center text-xl font-light",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                className: "animate-spin h-8 w-8 text-white",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "white",
                viewBox: "0 0 24 24",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
                        className: "opacity-5",
                        cx: "12",
                        cy: "12",
                        r: "10",
                        stroke: "currentColor",
                        strokeWidth: "4"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        className: "opacity-75",
                        fill: "currentColor",
                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    })
                ]
            }),
            " ",
            !noText ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "opacity-50 mt-4",
                children: text
            }) : null
        ]
    }));
};

;// CONCATENATED MODULE: ./src/components/SolanaLogo.tsx

var SolanaLogo = function() {
    /*#__PURE__*/ return (0,jsx_runtime.jsxs)("svg", {
        width: "46",
        height: "35",
        xmlns: "http://www.w3.org/2000/svg",
        className: "inline",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                        x1: "90.737%",
                        y1: "34.776%",
                        x2: "35.509%",
                        y2: "55.415%",
                        id: "a",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                stopColor: "#00FFA3",
                                offset: "0%"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                stopColor: "#DC1FFF",
                                offset: "100%"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                        x1: "66.588%",
                        y1: "43.8%",
                        x2: "11.36%",
                        y2: "64.439%",
                        id: "b",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                stopColor: "#00FFA3",
                                offset: "0%"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                stopColor: "#DC1FFF",
                                offset: "100%"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                        x1: "78.586%",
                        y1: "39.317%",
                        x2: "23.358%",
                        y2: "59.956%",
                        id: "c",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                stopColor: "#00FFA3",
                                offset: "0%"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                stopColor: "#DC1FFF",
                                offset: "100%"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                fillRule: "nonzero",
                fill: "none",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        d: "M7.256 26.713c.27-.27.64-.427 1.033-.427h35.64a.73.73 0 0 1 .517 1.247l-7.04 7.04c-.27.27-.64.427-1.034.427H.732a.73.73 0 0 1-.516-1.246l7.04-7.04Z",
                        fill: "url(#a)",
                        transform: "translate(.98)"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        d: "M7.256.427C7.536.157 7.907 0 8.289 0h35.64a.73.73 0 0 1 .517 1.246l-7.04 7.04c-.27.27-.64.428-1.034.428H.732a.73.73 0 0 1-.516-1.247l7.04-7.04Z",
                        fill: "url(#b)",
                        transform: "translate(.98)"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        d: "M37.405 13.486c-.27-.27-.64-.427-1.033-.427H.732a.73.73 0 0 0-.516 1.246l7.04 7.04c.27.27.64.428 1.033.428h35.64a.73.73 0 0 0 .517-1.247l-7.04-7.04Z",
                        fill: "url(#c)",
                        transform: "translate(.98)"
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/SelectAndConnectWalletButton.tsx




var SelectAndConnectWalletButton = function(param) {
    var onUseWalletClick = param.onUseWalletClick;
    var setVisible = (0,lib/* useWalletModal */.hB)().setVisible;
    var ref = (0,useWallet/* useWallet */.O)(), wallet = ref.wallet, connect = ref.connect, connecting = ref.connecting, publicKey = ref.publicKey;
    (0,react.useEffect)(function() {
        if (!publicKey && wallet) {
            try {
                connect();
            } catch (error) {
                console.log("Error connecting to the wallet: ", error.message);
            }
        }
    }, [
        wallet
    ]);
    var handleWalletClick = function() {
        try {
            if (!wallet) {
                setVisible(true);
            } else {
                connect();
            }
            onUseWalletClick();
        } catch (error) {
            console.log("Error connecting to the wallet: ", error.message);
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
        className: "btn btn-primary btn-lg",
        onClick: handleWalletClick,
        disabled: connecting,
        children: publicKey ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            children: "Move In"
        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            children: "Connect Wallet"
        })
    }));
};

;// CONCATENATED MODULE: ./src/components/index.tsx




// EXTERNAL MODULE: ./node_modules/swr/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(717);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/outline/esm/index.js + 230 modules
var esm = __webpack_require__(3801);
// EXTERNAL MODULE: ./node_modules/next/node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(8520);
var runtime_default = /*#__PURE__*/__webpack_require__.n(runtime);
;// CONCATENATED MODULE: ./src/utils/fetcher.tsx

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
var fetcher = _asyncToGenerator(runtime_default().mark(function _callee(url) {
    var res, error, info;
    return runtime_default().wrap(function _callee$(_ctx) {
        while(1)switch(_ctx.prev = _ctx.next){
            case 0:
                _ctx.next = 2;
                return fetch(url);
            case 2:
                res = _ctx.sent;
                if (res.ok) {
                    _ctx.next = 11;
                    break;
                }
                error = new Error("An error occurred while fetching the data.");
                _ctx.next = 7;
                return res.json();
            case 7:
                info = _ctx.sent;
                error.status = res.status;
                console.warn(url, "\nAn error occured while fetching:\n", info);
                throw error;
            case 11:
                return _ctx.abrupt("return", res.json());
            case 12:
            case "end":
                return _ctx.stop();
        }
    }, _callee);
}));

;// CONCATENATED MODULE: ./src/views/GalleryView/NftCard.tsx





var NftCard = function(param) {
    var details = param.details, onSelect = param.onSelect, _onTokenDetailsFetched = param.onTokenDetailsFetched, onTokenDetailsFetched = _onTokenDetailsFetched === void 0 ? function() {
    } : _onTokenDetailsFetched;
    var ref = (0,react.useState)(false), fallbackImage = ref[0], setFallbackImage = ref[1];
    var ref1;
    var ref2 = (ref1 = details === null || details === void 0 ? void 0 : details.data) !== null && ref1 !== void 0 ? ref1 : {
    }, name = ref2.name, uri = ref2.uri;
    var ref3 = (0,index_esm/* default */.ZP)(// uri || url ? getMetaUrl(details) : null,
    uri, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    }), data = ref3.data, error = ref3.error;
    // console.log("data", data);
    (0,react.useEffect)(function() {
        if (!error && !!data) {
            onTokenDetailsFetched(data);
        }
    }, [
        data,
        error
    ]);
    var onImageError = function() {
        return setFallbackImage(true);
    };
    var image = (data !== null && data !== void 0 ? data : {
    }).image;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "card bordered max-w-xs compact rounded-md",
        style: {
            borderImage: "url(" + "https://cdn.discordapp.com/attachments/875370923954430013/919688278595219547/thegif.gif" + ")",
            borderRadius: "20px",
            padding: "25px"
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("figure", {
            className: "min-h-16 animation-pulse-color",
            children: !fallbackImage || !error ? /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                src: image,
                onError: onImageError,
                className: "bg-gray-800 object-cover"
            }) : // Fallback when preview isn't available
            // This could be broken image, video, or audio
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "w-auto h-48 flex items-center justify-center bg-gray-900 bg-opacity-40",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(esm/* EyeOffIcon */.Xl7, {
                    className: "h-16 w-16 text-white-500"
                })
            })
        })
    }));
};

// EXTERNAL MODULE: ./src/views/GalleryView/index.module.css
var GalleryView_index_module = __webpack_require__(3236);
var GalleryView_index_module_default = /*#__PURE__*/__webpack_require__.n(GalleryView_index_module);
;// CONCATENATED MODULE: ./src/views/GalleryView/index.tsx








function GalleryView_throw(e) {
    throw e;
}
var walletPublicKey = "3SgV1dMLaFtRDF2cvxqdZFtdk8h6asE8cMmwgY58XJyb";
var GalleryView = function(param) {
    var param = param !== null ? param : GalleryView_throw(new TypeError("Cannot destructure undefined"));
    var ref;
    var connection = (0,useConnection/* useConnection */.R)().connection;
    var ref1 = (0,react.useState)(walletPublicKey), walletToParsePublicKey = ref1[0], setWalletToParsePublicKey = ref1[1];
    var publicKey = (0,useWallet/* useWallet */.O)().publicKey;
    var ref2 = (0,dist/* useWalletNfts */.R)({
        publicAddress: walletToParsePublicKey,
        connection: connection
    }), nfts = ref2.nfts, isLoading = ref2.isLoading, error = ref2.error;
    console.log("nfts", nfts);
    var onChange = function(e) {
        var value = e.target.value;
        setWalletToParsePublicKey(value.trim());
    };
    var onUseWalletClick = function() {
        if (publicKey) {
            setWalletToParsePublicKey(publicKey === null || publicKey === void 0 ? void 0 : publicKey.toBase58());
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: (GalleryView_index_module_default()).container,
        style: {
            backgroundColor: "#0082FF",
            fontFamily: "Skrapbook",
            fontSize: "20px"
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            style: {
                color: "lightblue"
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    style: {
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        style: {
                            background: "radial-gradient(circle, rgba(205,221,160,1) 0%, rgba(188,209,131,1) 22%, rgba(187,207,135,1) 23%, rgba(189,224,99,1) 77%, rgba(141,172,58,1) 100%)",
                            color: "black",
                            height: "30vh"
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                style: {
                                    display: "flex",
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    padding: "50px",
                                    fontSize: "60px",
                                    fontFamily: "Skrapbook"
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                    href: "https://degenbears.com",
                                    children: "Degen Bears"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    justifyContent: "center"
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "item1",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectAndConnectWalletButton, {
                                            onUseWalletClick: onUseWalletClick
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "item2",
                                        style: {
                                            borderRadius: "50px",
                                            borderBlock: "10px",
                                            backgroundColor: "#b1b1b160"
                                        }
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    style: {
                        display: "flex",
                        textAlign: 'center',
                        fontWeight: 'bold',
                        flexDirection: "column",
                        justifyContent: "center",
                        backgroundColor: "blue"
                    }
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    style: {
                        backgroundImage: "url(" + "https://cdn.discordapp.com/attachments/875370923954430013/922204296299315301/Untitled_Artwork.png" + ")"
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                            style: {
                                color: "black",
                                fontWeight: "bold",
                                backgroundColor: "rgba(0,0,0,0.11)",
                                padding: "15px",
                                fontSize: "50px",
                                textAlign: 'center',
                                flexDirection: "column",
                                justifyContent: "center"
                            },
                            className: "navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box",
                            children: "Your NFTs on Solana "
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "container mx-auto max-w-6xl p-8 2xl:px-0",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                style: {
                                    backgroundImage: "url(" + "https://cdn.discordapp.com/attachments/875370923954430013/922563686659407882/Untitled_Artwork.png" + ")"
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "text-center pt-2",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "hero min-h-16 p-0 pt-10",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "text-center hero-content w-full",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "w-full",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                                        className: "mb-5 text-5xl"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "w-full min-w-full",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                className: "mb-5",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                                    href: "https://www.npmjs.com/package/@nfteyez/sol-rayz-react",
                                                                    target: "_blank",
                                                                    className: "link font-bold",
                                                                    rel: "noreferrer"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                    className: "form-control mt-8",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                                        className: "input-group input-group-vertical input-group-lg",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                            className: "flex space-x-2"
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "my-10",
                                                        children: [
                                                            error ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                                                        children: "Error Occures"
                                                                    }),
                                                                    (ref = error) === null || ref === void 0 ? void 0 : ref.message
                                                                ]
                                                            }) : null,
                                                            !error && isLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Loader, {
                                                                })
                                                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(NftList, {
                                                                nfts: nfts,
                                                                error: error
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
var NftList = function(param) {
    var nfts = param.nfts, error = param.error;
    if (error) {
        return null;
    }
    if (!(nfts === null || nfts === void 0 ? void 0 : nfts.length)) {
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "text-center text-2xl pt-16",
            children: "No NFTs found in this wallet"
        }));
    }
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "grid grid-cols-2 md:grid-cols-4 gap-4 items-start",
        children: nfts === null || nfts === void 0 ? void 0 : nfts.map(function(nft) {
            /*#__PURE__*/ return (0,jsx_runtime.jsx)(NftCard, {
                details: nft,
                onSelect: function() {
                }
            }, nft.mint);
        })
    }));
};

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/@project-serum/anchor/dist/browser/index.js
var browser = __webpack_require__(4758);
// EXTERNAL MODULE: ./node_modules/react-countdown/dist/index.es.js
var index_es = __webpack_require__(8130);
// EXTERNAL MODULE: ./node_modules/react-alert/dist/esm/react-alert.js + 10 modules
var react_alert = __webpack_require__(4620);
// EXTERNAL MODULE: ./node_modules/@solana/web3.js/lib/index.browser.esm.js
var index_browser_esm = __webpack_require__(9917);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-react/lib/useAnchorWallet.js
var useAnchorWallet = __webpack_require__(8877);
// EXTERNAL MODULE: ./node_modules/@solana/spl-token/lib/index.browser.esm.js
var lib_index_browser_esm = __webpack_require__(3029);
;// CONCATENATED MODULE: ./src/views/CandyMachineMintView/candy-machine.ts
/* provided dependency */ var Buffer = __webpack_require__(8764)["Buffer"];



function candy_machine_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function candy_machine_asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                candy_machine_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                candy_machine_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
var CANDY_MACHINE_PROGRAM = new browser/* web3.PublicKey */.rV.PublicKey("cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ");
var SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID = new browser/* web3.PublicKey */.rV.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL");
var TOKEN_METADATA_PROGRAM_ID = new browser/* web3.PublicKey */.rV.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s");
var awaitTransactionSignatureConfirmation = candy_machine_asyncToGenerator(runtime_default().mark(function _callee1(txid, timeout, connection, param, param1) {
    var commitment, queryStatus, done, status, subId;
    return runtime_default().wrap(function _callee$(_ctx1) {
        while(1)switch(_ctx1.prev = _ctx1.next){
            case 0:
                commitment = param === void 0 ? "recent" : param, queryStatus = param1 === void 0 ? false : param1;
                done = false;
                status = {
                    slot: 0,
                    confirmations: 0,
                    err: null
                };
                subId = 0;
                _ctx1.next = 6;
                return new Promise(candy_machine_asyncToGenerator(runtime_default().mark(function _callee2(resolve, reject) {
                    return runtime_default().wrap(function _callee$(_ctx2) {
                        while(1)switch(_ctx2.prev = _ctx2.next){
                            case 0:
                                setTimeout(function() {
                                    if (done) {
                                        return;
                                    }
                                    done = true;
                                    console.log("Rejecting for timeout...");
                                    reject({
                                        timeout: true
                                    });
                                }, timeout);
                                try {
                                    subId = connection.onSignature(txid, function(result, context) {
                                        done = true;
                                        status = {
                                            err: result.err,
                                            slot: context.slot,
                                            confirmations: 0
                                        };
                                        if (result.err) {
                                            console.log("Rejected via websocket", result.err);
                                            reject(status);
                                        } else {
                                            console.log("Resolved via websocket", result);
                                            resolve(status);
                                        }
                                    }, commitment);
                                } catch (e) {
                                    done = true;
                                    console.error("WS error in setup", txid, e);
                                }
                            case 2:
                                if (!(!done && queryStatus)) {
                                    _ctx2.next = 8;
                                    break;
                                }
                                // eslint-disable-next-line no-loop-func
                                candy_machine_asyncToGenerator(runtime_default().mark(function _callee() {
                                    var signatureStatuses;
                                    return runtime_default().wrap(function _callee$(_ctx) {
                                        while(1)switch(_ctx.prev = _ctx.next){
                                            case 0:
                                                _ctx.prev = 0;
                                                _ctx.next = 3;
                                                return connection.getSignatureStatuses([
                                                    txid, 
                                                ]);
                                            case 3:
                                                signatureStatuses = _ctx.sent;
                                                status = signatureStatuses && signatureStatuses.value[0];
                                                if (!done) {
                                                    if (!status) {
                                                        console.log("REST null result for", txid, status);
                                                    } else if (status.err) {
                                                        console.log("REST error for", txid, status);
                                                        done = true;
                                                        reject(status.err);
                                                    } else if (!status.confirmations) {
                                                        console.log("REST no confirmations for", txid, status);
                                                    } else {
                                                        console.log("REST confirmation for", txid, status);
                                                        done = true;
                                                        resolve(status);
                                                    }
                                                }
                                                _ctx.next = 11;
                                                break;
                                            case 8:
                                                _ctx.prev = 8;
                                                _ctx.t0 = _ctx["catch"](0);
                                                if (!done) {
                                                    console.log("REST connection error: txid", txid, _ctx.t0);
                                                }
                                            case 11:
                                            case "end":
                                                return _ctx.stop();
                                        }
                                    }, _callee, null, [
                                        [
                                            0,
                                            8
                                        ]
                                    ]);
                                }))();
                                _ctx2.next = 6;
                                return sleep(2000);
                            case 6:
                                _ctx2.next = 2;
                                break;
                            case 8:
                            case "end":
                                return _ctx2.stop();
                        }
                    }, _callee2);
                })));
            case 6:
                status = _ctx1.sent;
                //@ts-ignore
                if (connection._signatureSubscriptions[subId]) {
                    connection.removeSignatureListener(subId);
                }
                done = true;
                console.log("Returning status", status);
                return _ctx1.abrupt("return", status);
            case 11:
            case "end":
                return _ctx1.stop();
        }
    }, _callee1);
}));
/* export */ var createAssociatedTokenAccountInstruction = function(associatedTokenAddress, payer, walletAddress, splTokenMintAddress) {
    var keys = [
        {
            pubkey: payer,
            isSigner: true,
            isWritable: true
        },
        {
            pubkey: associatedTokenAddress,
            isSigner: false,
            isWritable: true
        },
        {
            pubkey: walletAddress,
            isSigner: false,
            isWritable: false
        },
        {
            pubkey: splTokenMintAddress,
            isSigner: false,
            isWritable: false
        },
        {
            pubkey: browser/* web3.SystemProgram.programId */.rV.SystemProgram.programId,
            isSigner: false,
            isWritable: false
        },
        {
            pubkey: lib_index_browser_esm/* TOKEN_PROGRAM_ID */.H_,
            isSigner: false,
            isWritable: false
        },
        {
            pubkey: browser/* web3.SYSVAR_RENT_PUBKEY */.rV.SYSVAR_RENT_PUBKEY,
            isSigner: false,
            isWritable: false
        }, 
    ];
    return new browser/* web3.TransactionInstruction */.rV.TransactionInstruction({
        keys: keys,
        programId: SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
        data: Buffer.from([])
    });
};
var getCandyMachineState = candy_machine_asyncToGenerator(runtime_default().mark(function _callee(anchorWallet, candyMachineId, connection) {
    var provider, idl, program, candyMachine, state, itemsAvailable, itemsRedeemed, price, itemsRemaining, goLiveDate;
    return runtime_default().wrap(function _callee$(_ctx) {
        while(1)switch(_ctx.prev = _ctx.next){
            case 0:
                provider = new browser/* Provider */.zt(connection, anchorWallet, {
                    preflightCommitment: "recent"
                });
                _ctx.next = 3;
                return browser/* Program.fetchIdl */.$r.fetchIdl(CANDY_MACHINE_PROGRAM, provider);
            case 3:
                idl = _ctx.sent;
                program = new browser/* Program */.$r(idl, CANDY_MACHINE_PROGRAM, provider);
                candyMachine = {
                    id: candyMachineId,
                    connection: connection,
                    program: program
                };
                _ctx.next = 8;
                return program.account.candyMachine.fetch(candyMachineId);
            case 8:
                state = _ctx.sent;
                console.log("state", state);
                itemsAvailable = state.data.itemsAvailable.toNumber();
                itemsRedeemed = state.itemsRedeemed.toNumber();
                price = state.data.price.toNumber();
                itemsRemaining = itemsAvailable - itemsRedeemed;
                goLiveDate = state.data.goLiveDate.toNumber();
                goLiveDate = new Date(goLiveDate * 1000);
                return _ctx.abrupt("return", {
                    candyMachine: candyMachine,
                    itemsAvailable: itemsAvailable,
                    itemsRedeemed: itemsRedeemed,
                    itemsRemaining: itemsRemaining,
                    goLiveDate: goLiveDate,
                    price: price
                });
            case 17:
            case "end":
                return _ctx.stop();
        }
    }, _callee);
}));
var getMasterEdition = candy_machine_asyncToGenerator(runtime_default().mark(function _callee(mint) {
    return runtime_default().wrap(function _callee$(_ctx) {
        while(1)switch(_ctx.prev = _ctx.next){
            case 0:
                _ctx.next = 2;
                return browser/* web3.PublicKey.findProgramAddress */.rV.PublicKey.findProgramAddress([
                    Buffer.from("metadata"),
                    TOKEN_METADATA_PROGRAM_ID.toBuffer(),
                    mint.toBuffer(),
                    Buffer.from("edition"), 
                ], TOKEN_METADATA_PROGRAM_ID);
            case 2:
                return _ctx.abrupt("return", _ctx.sent[0]);
            case 3:
            case "end":
                return _ctx.stop();
        }
    }, _callee);
}));
var getMetadata = candy_machine_asyncToGenerator(runtime_default().mark(function _callee(mint) {
    return runtime_default().wrap(function _callee$(_ctx) {
        while(1)switch(_ctx.prev = _ctx.next){
            case 0:
                _ctx.next = 2;
                return browser/* web3.PublicKey.findProgramAddress */.rV.PublicKey.findProgramAddress([
                    Buffer.from("metadata"),
                    TOKEN_METADATA_PROGRAM_ID.toBuffer(),
                    mint.toBuffer(), 
                ], TOKEN_METADATA_PROGRAM_ID);
            case 2:
                return _ctx.abrupt("return", _ctx.sent[0]);
            case 3:
            case "end":
                return _ctx.stop();
        }
    }, _callee);
}));
var getTokenWallet = candy_machine_asyncToGenerator(runtime_default().mark(function _callee(wallet, mint) {
    return runtime_default().wrap(function _callee$(_ctx) {
        while(1)switch(_ctx.prev = _ctx.next){
            case 0:
                _ctx.next = 2;
                return browser/* web3.PublicKey.findProgramAddress */.rV.PublicKey.findProgramAddress([
                    wallet.toBuffer(),
                    lib_index_browser_esm/* TOKEN_PROGRAM_ID.toBuffer */.H_.toBuffer(),
                    mint.toBuffer()
                ], SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID);
            case 2:
                return _ctx.abrupt("return", _ctx.sent[0]);
            case 3:
            case "end":
                return _ctx.stop();
        }
    }, _callee);
}));
var mintOneToken = candy_machine_asyncToGenerator(runtime_default().mark(function _callee(candyMachine, config, payer, treasury) {
    var mint, token, connection, program, metadata, masterEdition, rent;
    return runtime_default().wrap(function _callee$(_ctx) {
        while(1)switch(_ctx.prev = _ctx.next){
            case 0:
                mint = browser/* web3.Keypair.generate */.rV.Keypair.generate();
                _ctx.next = 3;
                return getTokenWallet(payer, mint.publicKey);
            case 3:
                token = _ctx.sent;
                connection = candyMachine.connection, program = candyMachine.program;
                _ctx.next = 7;
                return getMetadata(mint.publicKey);
            case 7:
                metadata = _ctx.sent;
                _ctx.next = 10;
                return getMasterEdition(mint.publicKey);
            case 10:
                masterEdition = _ctx.sent;
                _ctx.next = 13;
                return connection.getMinimumBalanceForRentExemption(lib_index_browser_esm/* MintLayout.span */.qT.span);
            case 13:
                rent = _ctx.sent;
                _ctx.next = 16;
                return program.rpc.mintNft({
                    accounts: {
                        config: config,
                        candyMachine: candyMachine.id,
                        payer: payer,
                        wallet: treasury,
                        mint: mint.publicKey,
                        metadata: metadata,
                        masterEdition: masterEdition,
                        mintAuthority: payer,
                        updateAuthority: payer,
                        tokenMetadataProgram: TOKEN_METADATA_PROGRAM_ID,
                        tokenProgram: lib_index_browser_esm/* TOKEN_PROGRAM_ID */.H_,
                        systemProgram: browser/* web3.SystemProgram.programId */.rV.SystemProgram.programId,
                        rent: browser/* web3.SYSVAR_RENT_PUBKEY */.rV.SYSVAR_RENT_PUBKEY,
                        clock: browser/* web3.SYSVAR_CLOCK_PUBKEY */.rV.SYSVAR_CLOCK_PUBKEY
                    },
                    signers: [
                        mint
                    ],
                    instructions: [
                        browser/* web3.SystemProgram.createAccount */.rV.SystemProgram.createAccount({
                            fromPubkey: payer,
                            newAccountPubkey: mint.publicKey,
                            space: lib_index_browser_esm/* MintLayout.span */.qT.span,
                            lamports: rent,
                            programId: lib_index_browser_esm/* TOKEN_PROGRAM_ID */.H_
                        }),
                        lib_index_browser_esm/* Token.createInitMintInstruction */.WU.createInitMintInstruction(lib_index_browser_esm/* TOKEN_PROGRAM_ID */.H_, mint.publicKey, 0, payer, payer),
                        createAssociatedTokenAccountInstruction(token, payer, payer, mint.publicKey),
                        lib_index_browser_esm/* Token.createMintToInstruction */.WU.createMintToInstruction(lib_index_browser_esm/* TOKEN_PROGRAM_ID */.H_, mint.publicKey, token, payer, [], 1), 
                    ]
                });
            case 16:
                return _ctx.abrupt("return", _ctx.sent);
            case 17:
            case "end":
                return _ctx.stop();
        }
    }, _callee);
}));
var shortenAddress = function(address, param) {
    var chars = param === void 0 ? 4 : param;
    return "".concat(address.slice(0, chars), "...").concat(address.slice(-chars));
};
var sleep = function(ms) {
    return new Promise(function(resolve) {
        return setTimeout(resolve, ms);
    });
};

;// CONCATENATED MODULE: ./src/views/CandyMachineMintView/MintSection.tsx










function MintSection_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function MintSection_asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                MintSection_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                MintSection_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
var MintSection = function(props) {
    var alert = (0,react_alert/* useAlert */.VY)();
    var connection = (0,useConnection/* useConnection */.R)().connection;
    var ref8 = (0,react.useState)({
        itemsAvailable: 0,
        itemsRemaining: 0
    }), counter = ref8[0], setCounter = ref8[1];
    var ref1 = (0,react.useState)(), price1 = ref1[0], setPrice = ref1[1];
    var ref2 = (0,react.useState)(), balance1 = ref2[0], setBalance = ref2[1];
    var ref3 = (0,react.useState)(false), isActive = ref3[0], setIsActive = ref3[1]; // true when countdown completes
    var ref4 = (0,react.useState)(false), isSoldOut = ref4[0], setIsSoldOut = ref4[1]; // true when items remaining is zero
    var ref5 = (0,react.useState)(false), isMinting = ref5[0], setIsMinting = ref5[1]; // true when user got to press MINT
    var ref6 = (0,react.useState)(new Date(props.startDate)), startDate = ref6[0], setStartDate = ref6[1];
    var wallet = (0,useAnchorWallet/* useAnchorWallet */.z)();
    var ref7 = (0,react.useState)(), candyMachine1 = ref7[0], setCandyMachine = ref7[1];
    var onMint = MintSection_asyncToGenerator(runtime_default().mark(function _callee() {
        var mintTxId, status, message, balance;
        return runtime_default().wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    _ctx.prev = 0;
                    setIsMinting(true);
                    alert.show("Mint has been started!");
                    if (!(wallet && (candyMachine1 === null || candyMachine1 === void 0 ? void 0 : candyMachine1.program))) {
                        _ctx.next = 12;
                        break;
                    }
                    _ctx.next = 6;
                    return mintOneToken(candyMachine1, props.config, wallet.publicKey, props.treasury);
                case 6:
                    mintTxId = _ctx.sent;
                    alert.show("Confirming transaction...");
                    _ctx.next = 10;
                    return awaitTransactionSignatureConfirmation(mintTxId, props.txTimeout, connection, "singleGossip", false);
                case 10:
                    status = _ctx.sent;
                    if (!(status === null || status === void 0 ? void 0 : status.err)) {
                        alert.success("Congratulations! Mint succeeded!");
                    } else {
                        alert.error("Mint failed! Please try again!");
                    }
                case 12:
                    _ctx.next = 19;
                    break;
                case 14:
                    _ctx.prev = 14;
                    _ctx.t0 = _ctx["catch"](0);
                    message = _ctx.t0.msg || "Minting failed! Please try again!";
                    if (!_ctx.t0.msg) {
                        if (_ctx.t0.message.indexOf("0x138")) {
                        } else if (_ctx.t0.message.indexOf("0x137")) {
                            message = "SOLD OUT!";
                        } else if (_ctx.t0.message.indexOf("0x135")) {
                            message = "Insufficient funds to mint. Please fund your wallet.";
                        }
                    } else {
                        if (_ctx.t0.code === 311) {
                            message = "SOLD OUT!";
                            setIsSoldOut(true);
                        } else if (_ctx.t0.code === 312) {
                            message = "Minting period hasn't started yet.";
                        }
                    }
                    alert.error(message);
                case 19:
                    _ctx.prev = 19;
                    if (!wallet) {
                        _ctx.next = 25;
                        break;
                    }
                    _ctx.next = 23;
                    return connection.getBalance(wallet.publicKey);
                case 23:
                    balance = _ctx.sent;
                    setBalance(balance / index_browser_esm.LAMPORTS_PER_SOL);
                case 25:
                    setIsMinting(false);
                    return _ctx.finish(19);
                case 27:
                case "end":
                    return _ctx.stop();
            }
        }, _callee, null, [
            [
                0,
                14,
                19,
                27
            ]
        ]);
    }));
    (0,react.useEffect)(function() {
        MintSection_asyncToGenerator(runtime_default().mark(function _callee() {
            var balance;
            return runtime_default().wrap(function _callee$(_ctx) {
                while(1)switch(_ctx.prev = _ctx.next){
                    case 0:
                        if (!wallet) {
                            _ctx.next = 5;
                            break;
                        }
                        _ctx.next = 3;
                        return connection.getBalance(wallet.publicKey);
                    case 3:
                        balance = _ctx.sent;
                        setBalance(balance / index_browser_esm.LAMPORTS_PER_SOL);
                    case 5:
                    case "end":
                        return _ctx.stop();
                }
            }, _callee);
        }))();
    }, [
        wallet,
        connection
    ]);
    (0,react.useEffect)(function() {
        MintSection_asyncToGenerator(runtime_default().mark(function _callee() {
            var ref, candyMachine, goLiveDate, itemsRemaining, itemsAvailable, price;
            return runtime_default().wrap(function _callee$(_ctx) {
                while(1)switch(_ctx.prev = _ctx.next){
                    case 0:
                        if (wallet) {
                            _ctx.next = 2;
                            break;
                        }
                        return _ctx.abrupt("return");
                    case 2:
                        _ctx.prev = 2;
                        _ctx.next = 5;
                        return getCandyMachineState(wallet, props.candyMachineId, connection);
                    case 5:
                        ref = _ctx.sent;
                        candyMachine = ref.candyMachine;
                        goLiveDate = ref.goLiveDate;
                        itemsRemaining = ref.itemsRemaining;
                        itemsAvailable = ref.itemsAvailable;
                        price = ref.price;
                        setIsSoldOut(itemsRemaining === 0);
                        setStartDate(goLiveDate);
                        setCandyMachine(candyMachine);
                        setCounter({
                            itemsRemaining: itemsRemaining,
                            itemsAvailable: itemsAvailable
                        });
                        setPrice(price / index_browser_esm.LAMPORTS_PER_SOL);
                        _ctx.next = 22;
                        break;
                    case 18:
                        _ctx.prev = 18;
                        _ctx.t0 = _ctx["catch"](2);
                        console.error(_ctx.t0);
                        alert.error("Error fetching CandyMachine. Check browser console for the details.");
                    case 22:
                    case "end":
                        return _ctx.stop();
                }
            }, _callee, null, [
                [
                    2,
                    18
                ]
            ]);
        }))();
    }, [
        wallet,
        props.candyMachineId,
        connection
    ]);
    console.log("startDate", startDate);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("main", {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "grid grid-cols-1 gap-4",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    children: [
                        wallet && /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                            children: [
                                "Balance: ◎",
                                (balance1 || 0).toLocaleString()
                            ]
                        }),
                        (counter === null || counter === void 0 ? void 0 : counter.itemsAvailable) ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                            children: [
                                counter === null || counter === void 0 ? void 0 : counter.itemsRemaining,
                                " of ",
                                counter === null || counter === void 0 ? void 0 : counter.itemsAvailable,
                                " Available"
                            ]
                        }) : null
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    children: !wallet ? /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectAndConnectWalletButton, {
                        onUseWalletClick: function() {
                        }
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                        disabled: isSoldOut || isMinting || !isActive,
                        onClick: onMint,
                        className: "btn btn-primary btn-wide btn-lg",
                        children: isSoldOut ? "SOLD OUT" : isActive ? isMinting ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Loader, {
                            noText: true
                        }) : "MINT for ◎".concat(price1) : /*#__PURE__*/ (0,jsx_runtime.jsx)(index_es/* default */.ZP, {
                            date: startDate,
                            onMount: function(param) {
                                var completed = param.completed;
                                return completed && setIsActive(true);
                            },
                            onComplete: function() {
                                return setIsActive(true);
                            },
                            renderer: renderCounter
                        })
                    })
                })
            ]
        })
    }));
};
var renderCounter = function(param) {
    var days = param.days, hours = param.hours, minutes = param.minutes, seconds = param.seconds, completed = param.completed;
    if (!seconds) return(/*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        children: "Loading..."
    }));
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
        children: [
            hours,
            " hours, ",
            minutes,
            " minutes, ",
            seconds,
            " seconds"
        ]
    }));
};

;// CONCATENATED MODULE: ./src/views/CandyMachineMintView/config.ts
var config = {
    CANDY_MACHINE_CONFIG: "6vbr5zpU44G4Ni2S36S6m7bhjMwy4ZiabVG5nJnxWWeK",
    CANDY_MACHINE_ID: "4f2UZyh476EMGeMo12yRmmxYNBHnGhjyvuwQJMBAnKbd",
    CANDY_START_DATE: "1639155600",
    TREASURY_ADDRESS: "CBBUMHRmbVUck99mTCip5sHP16kzGj3QTYB8K3XxwmQx"
};

// EXTERNAL MODULE: ./src/views/CandyMachineMintView/index.module.css
var CandyMachineMintView_index_module = __webpack_require__(2585);
var CandyMachineMintView_index_module_default = /*#__PURE__*/__webpack_require__.n(CandyMachineMintView_index_module);
;// CONCATENATED MODULE: ./src/views/CandyMachineMintView/index.tsx
/* provided dependency */ var process = __webpack_require__(4155);








function CandyMachineMintView_throw(e) {
    throw e;
}
var treasury = new browser/* web3.PublicKey */.rV.PublicKey(config.TREASURY_ADDRESS);
var candyMachineConfig = new browser/* web3.PublicKey */.rV.PublicKey(config.CANDY_MACHINE_CONFIG);
var candyMachineId = new browser/* web3.PublicKey */.rV.PublicKey(config.CANDY_MACHINE_ID);
var startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE, 10);
var txTimeout = 30000; // milliseconds (confirm this works for your project)
var CandyMachineMintView = function(param) {
    var param = param !== null ? param : CandyMachineMintView_throw(new TypeError("Cannot destructure undefined"));
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "container mx-auto max-w-6xl p-8 2xl:px-0",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: (CandyMachineMintView_index_module_default()).container,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex-none",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                className: "btn btn-square btn-ghost",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "text-4xl",
                                    children: "🍬"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex-1 px-2 mx-2",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "text-sm breadcrumbs",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                    className: "text-xl",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(next_link["default"], {
                                                href: "/",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                    children: "Templates"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "opacity-40",
                                                children: "NFT Mint UI"
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex-none",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(lib/* WalletMultiButton */.aD, {
                                className: "btn btn-ghost"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "text-center pt-2",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "hero min-h-16 py-20",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "text-center hero-content",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "max-w-lg",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                                            className: "mb-5 text-5xl",
                                            children: [
                                                "Candy Machine Mint UI ",
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(SolanaLogo, {
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                            className: "mb-5",
                                            children: [
                                                "Here is very basic example of minting site. ",
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {
                                                }),
                                                "It uses",
                                                " ",
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                    href: "https://github.com/exiled-apes/candy-machine-mint",
                                                    target: "_blank",
                                                    className: "link font-bold",
                                                    rel: "noreferrer",
                                                    children: "exiled-apes/candy-machine-mint"
                                                }),
                                                " ",
                                                "code migrated to be used with Next.JS app."
                                            ]
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MintSection, {
                                candyMachineId: candyMachineId,
                                config: candyMachineConfig,
                                startDate: startDateSeed,
                                treasury: treasury,
                                txTimeout: txTimeout
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "max-w-xl mx-auto",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                    className: "mb-5 mt-16 text-5xl",
                                    children: "Description:"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                    children: [
                                        "You can test this Candy Machine mint on Devnet.",
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {
                                        }),
                                        "Switch to Devnet in ",
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("code", {
                                            children: "src/pages/_app.tsx"
                                        }),
                                        " file. And run app locally."
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                    children: [
                                        "Edit ",
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("code", {
                                            children: "src/views/CandyMachineMintView/config.ts"
                                        }),
                                        " to use your own Candy Machine.",
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {
                                        }),
                                        " You can read details about variables on",
                                        " ",
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                            href: "https://github.com/exiled-apes/candy-machine-mint#environment-variables",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className: "link hover:underline",
                                            children: "exiled-apes/candy-machine-mints Github"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                    children: [
                                        "Always set custom RPC server for the final mint site. ",
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {
                                        }),
                                        "You can do it here: ",
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("code", {
                                            children: "src/pages/_app.tsx"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {
                                        }),
                                        "Otherwise, Solana can ban your website for overusing RPC server. You dont want it in the middle of your mint 😳"
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};

;// CONCATENATED MODULE: ./src/views/index.tsx





/***/ }),

/***/ 2585:
/***/ (function() {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 3236:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"module":"GalleryView_module__1K6F-","body":"GalleryView_body__3xfzA","bal":"GalleryView_bal__3MEZ4"};

/***/ }),

/***/ 7233:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"HomeView_container__STD75"};

/***/ }),

/***/ 950:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 8623:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 7748:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 6619:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 7108:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 2361:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 4616:
/***/ (function() {

/* (ignored) */

/***/ })

}]);