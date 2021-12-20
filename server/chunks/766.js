exports.id = 766;
exports.ids = [766];
exports.modules = {

/***/ 8691:
/***/ ((module) => {

// Exports
module.exports = {

};


/***/ }),

/***/ 2492:
/***/ ((module) => {

// Exports
module.exports = {
	"module": "GalleryView_module__1K6F-",
	"body": "GalleryView_body__3xfzA",
	"bal": "GalleryView_bal__3MEZ4"
};


/***/ }),

/***/ 9973:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "HomeView_container__STD75"
};


/***/ }),

/***/ 766:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "IG": () => (/* reexport */ CandyMachineMintView),
  "Hr": () => (/* reexport */ GalleryView),
  "ug": () => (/* reexport */ HomeView)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-react/lib/useWallet.js
var useWallet = __webpack_require__(7257);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-react-ui/lib/index.js + 11 modules
var lib = __webpack_require__(7843);
// EXTERNAL MODULE: ./src/views/HomeView/index.module.css
var index_module = __webpack_require__(9973);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
;// CONCATENATED MODULE: ./src/views/HomeView/index.tsx




const HomeView = ({})=>{
    const { publicKey  } = (0,useWallet/* useWallet */.O)();
    const onClick = ()=>{
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            fontFamily: "Skrapbook",
            fontSize: "10px"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            style: {
                backgroundImage: "url(" + "https://cdn.discordapp.com/attachments/875370923954430013/922202748013936640/Untitled_Artwork.png" + ")"
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container mx-auto max-w-6xl p-8 2xl:px-0",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (index_module_default()).container,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box",
                            style: {
                                backgroundColor: "rgba(2,0,0,0.6)"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex-none",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "btn btn-square btn-ghost",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text-4xl",
                                            children: "🐻"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex-1 px-2 mx-2",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-lg font-bold",
                                        style: {
                                            fontFamily: "Skrapbook"
                                        },
                                        children: "Degen Bear"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex-none",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* WalletMultiButton */.aD, {
                                        className: "btn btn-ghost"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            style: {
                                display: "flex",
                                textAlign: 'center',
                                fontWeight: 'bold',
                                flexDirection: "column",
                                justifyContent: "center",
                                height: "86.3vh"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "hero min-h-16 py-20",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text-center hero-content",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "max-w-lg",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                className: "mb-5 text-5xl font-bold",
                                                style: {
                                                    color: "darkbrown"
                                                },
                                                children: "Degen Bear🐻"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
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

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@nfteyez/sol-rayz-react"
var sol_rayz_react_ = __webpack_require__(6557);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-react/lib/useConnection.js
var useConnection = __webpack_require__(9669);
;// CONCATENATED MODULE: ./src/components/Loader.tsx

const Loader = ({ text ="Loading..." , noText =false  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col justify-center items-center text-xl font-light",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                className: "animate-spin h-8 w-8 text-white",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "white",
                viewBox: "0 0 24 24",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                        className: "opacity-5",
                        cx: "12",
                        cy: "12",
                        r: "10",
                        stroke: "currentColor",
                        strokeWidth: "4"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: "opacity-75",
                        fill: "currentColor",
                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    })
                ]
            }),
            " ",
            !noText ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "opacity-50 mt-4",
                children: text
            }) : null
        ]
    }));
};

;// CONCATENATED MODULE: ./src/components/SolanaLogo.tsx

const SolanaLogo = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: "46",
        height: "35",
        xmlns: "http://www.w3.org/2000/svg",
        className: "inline",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        x1: "90.737%",
                        y1: "34.776%",
                        x2: "35.509%",
                        y2: "55.415%",
                        id: "a",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: "#00FFA3",
                                offset: "0%"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: "#DC1FFF",
                                offset: "100%"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        x1: "66.588%",
                        y1: "43.8%",
                        x2: "11.36%",
                        y2: "64.439%",
                        id: "b",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: "#00FFA3",
                                offset: "0%"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: "#DC1FFF",
                                offset: "100%"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        x1: "78.586%",
                        y1: "39.317%",
                        x2: "23.358%",
                        y2: "59.956%",
                        id: "c",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: "#00FFA3",
                                offset: "0%"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: "#DC1FFF",
                                offset: "100%"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                fillRule: "nonzero",
                fill: "none",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M7.256 26.713c.27-.27.64-.427 1.033-.427h35.64a.73.73 0 0 1 .517 1.247l-7.04 7.04c-.27.27-.64.427-1.034.427H.732a.73.73 0 0 1-.516-1.246l7.04-7.04Z",
                        fill: "url(#a)",
                        transform: "translate(.98)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M7.256.427C7.536.157 7.907 0 8.289 0h35.64a.73.73 0 0 1 .517 1.246l-7.04 7.04c-.27.27-.64.428-1.034.428H.732a.73.73 0 0 1-.516-1.247l7.04-7.04Z",
                        fill: "url(#b)",
                        transform: "translate(.98)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M37.405 13.486c-.27-.27-.64-.427-1.033-.427H.732a.73.73 0 0 0-.516 1.246l7.04 7.04c.27.27.64.428 1.033.428h35.64a.73.73 0 0 0 .517-1.247l-7.04-7.04Z",
                        fill: "url(#c)",
                        transform: "translate(.98)"
                    })
                ]
            })
        ]
    })
;

;// CONCATENATED MODULE: ./src/components/SelectAndConnectWalletButton.tsx




const SelectAndConnectWalletButton = ({ onUseWalletClick ,  })=>{
    const { setVisible  } = (0,lib/* useWalletModal */.hB)();
    const { wallet , connect , connecting , publicKey  } = (0,useWallet/* useWallet */.O)();
    (0,external_react_.useEffect)(()=>{
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
    const handleWalletClick = ()=>{
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
    return(/*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: "btn btn-primary btn-lg",
        onClick: handleWalletClick,
        disabled: connecting,
        children: publicKey ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: "Move In"
        }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: "Connect Wallet"
        })
    }));
};

;// CONCATENATED MODULE: ./src/components/index.tsx




// EXTERNAL MODULE: external "swr"
var external_swr_ = __webpack_require__(549);
var external_swr_default = /*#__PURE__*/__webpack_require__.n(external_swr_);
// EXTERNAL MODULE: external "@heroicons/react/outline"
var outline_ = __webpack_require__(8768);
;// CONCATENATED MODULE: ./src/utils/fetcher.tsx
const fetcher = async (url)=>{
    const res = await fetch(url);
    // If the status code is not in the range 200-299,
    // we still try to parse and throw it.
    if (!res.ok) {
        const error = new Error("An error occurred while fetching the data.");
        // Attach extra info to the error object.
        const info = await res.json();
        error.status = res.status;
        console.warn(url, "\nAn error occured while fetching:\n", info);
        throw error;
    }
    return res.json();
};

;// CONCATENATED MODULE: ./src/views/GalleryView/NftCard.tsx





const NftCard = ({ details , onSelect , onTokenDetailsFetched =()=>{
} ,  })=>{
    const { 0: fallbackImage , 1: setFallbackImage  } = (0,external_react_.useState)(false);
    const { name , uri  } = (details === null || details === void 0 ? void 0 : details.data) ?? {
    };
    const { data , error  } = external_swr_default()(// uri || url ? getMetaUrl(details) : null,
    uri, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });
    // console.log("data", data);
    (0,external_react_.useEffect)(()=>{
        if (!error && !!data) {
            onTokenDetailsFetched(data);
        }
    }, [
        data,
        error
    ]);
    const onImageError = ()=>setFallbackImage(true)
    ;
    const { image  } = data ?? {
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `card bordered max-w-xs compact rounded-md`,
        style: {
            borderImage: "url(" + "https://cdn.discordapp.com/attachments/875370923954430013/919688278595219547/thegif.gif" + ")",
            borderRadius: "20px",
            padding: "25px"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("figure", {
            className: "min-h-16 animation-pulse-color",
            children: !fallbackImage || !error ? /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: image,
                onError: onImageError,
                className: "bg-gray-800 object-cover"
            }) : // Fallback when preview isn't available
            // This could be broken image, video, or audio
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-auto h-48 flex items-center justify-center bg-gray-900 bg-opacity-40",
                children: /*#__PURE__*/ jsx_runtime_.jsx(outline_.EyeOffIcon, {
                    className: "h-16 w-16 text-white-500"
                })
            })
        })
    }));
};

// EXTERNAL MODULE: ./src/views/GalleryView/index.module.css
var GalleryView_index_module = __webpack_require__(2492);
var GalleryView_index_module_default = /*#__PURE__*/__webpack_require__.n(GalleryView_index_module);
;// CONCATENATED MODULE: ./src/views/GalleryView/index.tsx








const walletPublicKey = "3SgV1dMLaFtRDF2cvxqdZFtdk8h6asE8cMmwgY58XJyb";
const GalleryView = ({})=>{
    var ref;
    const { connection  } = (0,useConnection/* useConnection */.R)();
    const { 0: walletToParsePublicKey , 1: setWalletToParsePublicKey  } = (0,external_react_.useState)(walletPublicKey);
    const { publicKey  } = (0,useWallet/* useWallet */.O)();
    const { nfts , isLoading , error  } = (0,sol_rayz_react_.useWalletNfts)({
        publicAddress: walletToParsePublicKey,
        connection
    });
    console.log("nfts", nfts);
    const onChange = (e)=>{
        const { value  } = e.target;
        setWalletToParsePublicKey(value.trim());
    };
    const onUseWalletClick = ()=>{
        if (publicKey) {
            setWalletToParsePublicKey(publicKey === null || publicKey === void 0 ? void 0 : publicKey.toBase58());
        }
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (GalleryView_index_module_default()).container,
        style: {
            backgroundColor: "#0082FF",
            fontFamily: "Skrapbook",
            fontSize: "20px"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            style: {
                color: "lightblue"
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    style: {
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        style: {
                            background: "radial-gradient(circle, rgba(205,221,160,1) 0%, rgba(188,209,131,1) 22%, rgba(187,207,135,1) 23%, rgba(189,224,99,1) 77%, rgba(141,172,58,1) 100%)",
                            color: "black",
                            height: "30vh"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
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
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://degenbears.com",
                                    children: "Degen Bears"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    justifyContent: "center"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "item1",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(SelectAndConnectWalletButton, {
                                            onUseWalletClick: onUseWalletClick
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
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
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    style: {
                        display: "flex",
                        textAlign: 'center',
                        fontWeight: 'bold',
                        flexDirection: "column",
                        justifyContent: "center",
                        backgroundColor: "blue"
                    }
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    style: {
                        backgroundImage: "url(" + "https://cdn.discordapp.com/attachments/875370923954430013/922204296299315301/Untitled_Artwork.png" + ")"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
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
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "container mx-auto max-w-6xl p-8 2xl:px-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                style: {
                                    backgroundImage: "url(" + "https://cdn.discordapp.com/attachments/875370923954430013/922563686659407882/Untitled_Artwork.png" + ")"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text-center pt-2",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "hero min-h-16 p-0 pt-10",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "text-center hero-content w-full",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "w-full",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                        className: "mb-5 text-5xl"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "w-full min-w-full",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "mb-5",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "https://www.npmjs.com/package/@nfteyez/sol-rayz-react",
                                                                    target: "_blank",
                                                                    className: "link font-bold",
                                                                    rel: "noreferrer"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "form-control mt-8",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                        className: "input-group input-group-vertical input-group-lg",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "flex space-x-2"
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "my-10",
                                                        children: [
                                                            error ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                                        children: "Error Occures"
                                                                    }),
                                                                    (ref = error) === null || ref === void 0 ? void 0 : ref.message
                                                                ]
                                                            }) : null,
                                                            !error && isLoading ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Loader, {
                                                                })
                                                            }) : /*#__PURE__*/ jsx_runtime_.jsx(NftList, {
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
const NftList = ({ nfts , error  })=>{
    if (error) {
        return null;
    }
    if (!(nfts === null || nfts === void 0 ? void 0 : nfts.length)) {
        return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "text-center text-2xl pt-16",
            children: "No NFTs found in this wallet"
        }));
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "grid grid-cols-2 md:grid-cols-4 gap-4 items-start",
        children: nfts === null || nfts === void 0 ? void 0 : nfts.map((nft)=>/*#__PURE__*/ jsx_runtime_.jsx(NftCard, {
                details: nft,
                onSelect: ()=>{
                }
            }, nft.mint)
        )
    }));
};

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "@project-serum/anchor"
var anchor_ = __webpack_require__(1024);
// EXTERNAL MODULE: external "react-countdown"
var external_react_countdown_ = __webpack_require__(4449);
var external_react_countdown_default = /*#__PURE__*/__webpack_require__.n(external_react_countdown_);
// EXTERNAL MODULE: external "react-alert"
var external_react_alert_ = __webpack_require__(7246);
// EXTERNAL MODULE: external "@solana/web3.js"
var web3_js_ = __webpack_require__(7831);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-react/lib/useAnchorWallet.js
var useAnchorWallet = __webpack_require__(8877);
// EXTERNAL MODULE: external "@solana/spl-token"
var spl_token_ = __webpack_require__(9874);
;// CONCATENATED MODULE: ./src/views/CandyMachineMintView/candy-machine.ts


const CANDY_MACHINE_PROGRAM = new anchor_.web3.PublicKey("cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ");
const SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID = new anchor_.web3.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL");
const TOKEN_METADATA_PROGRAM_ID = new anchor_.web3.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s");
const awaitTransactionSignatureConfirmation = async (txid, timeout, connection, commitment = "recent", queryStatus = false)=>{
    let done = false;
    let status = {
        slot: 0,
        confirmations: 0,
        err: null
    };
    let subId = 0;
    status = await new Promise(async (resolve, reject)=>{
        setTimeout(()=>{
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
            subId = connection.onSignature(txid, (result, context)=>{
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
        } catch (e1) {
            done = true;
            console.error("WS error in setup", txid, e1);
        }
        while(!done && queryStatus){
            // eslint-disable-next-line no-loop-func
            (async ()=>{
                try {
                    const signatureStatuses = await connection.getSignatureStatuses([
                        txid, 
                    ]);
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
                } catch (e) {
                    if (!done) {
                        console.log("REST connection error: txid", txid, e);
                    }
                }
            })();
            await sleep(2000);
        }
    });
    //@ts-ignore
    if (connection._signatureSubscriptions[subId]) {
        connection.removeSignatureListener(subId);
    }
    done = true;
    console.log("Returning status", status);
    return status;
};
/* export */ const createAssociatedTokenAccountInstruction = (associatedTokenAddress, payer, walletAddress, splTokenMintAddress)=>{
    const keys = [
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
            pubkey: anchor_.web3.SystemProgram.programId,
            isSigner: false,
            isWritable: false
        },
        {
            pubkey: spl_token_.TOKEN_PROGRAM_ID,
            isSigner: false,
            isWritable: false
        },
        {
            pubkey: anchor_.web3.SYSVAR_RENT_PUBKEY,
            isSigner: false,
            isWritable: false
        }, 
    ];
    return new anchor_.web3.TransactionInstruction({
        keys,
        programId: SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
        data: Buffer.from([])
    });
};
const getCandyMachineState = async (anchorWallet, candyMachineId, connection)=>{
    const provider = new anchor_.Provider(connection, anchorWallet, {
        preflightCommitment: "recent"
    });
    const idl = await anchor_.Program.fetchIdl(CANDY_MACHINE_PROGRAM, provider);
    // Handle failed fetchIdl
    // if (!idl) {
    //   return {};
    // }
    const program = new anchor_.Program(idl, CANDY_MACHINE_PROGRAM, provider);
    const candyMachine = {
        id: candyMachineId,
        connection,
        program
    };
    const state = await program.account.candyMachine.fetch(candyMachineId);
    console.log("state", state);
    const itemsAvailable = state.data.itemsAvailable.toNumber();
    const itemsRedeemed = state.itemsRedeemed.toNumber();
    const price = state.data.price.toNumber();
    const itemsRemaining = itemsAvailable - itemsRedeemed;
    let goLiveDate = state.data.goLiveDate.toNumber();
    goLiveDate = new Date(goLiveDate * 1000);
    return {
        candyMachine,
        itemsAvailable,
        itemsRedeemed,
        itemsRemaining,
        goLiveDate,
        price
    };
};
const getMasterEdition = async (mint)=>{
    return (await anchor_.web3.PublicKey.findProgramAddress([
        Buffer.from("metadata"),
        TOKEN_METADATA_PROGRAM_ID.toBuffer(),
        mint.toBuffer(),
        Buffer.from("edition"), 
    ], TOKEN_METADATA_PROGRAM_ID))[0];
};
const getMetadata = async (mint)=>{
    return (await anchor_.web3.PublicKey.findProgramAddress([
        Buffer.from("metadata"),
        TOKEN_METADATA_PROGRAM_ID.toBuffer(),
        mint.toBuffer(), 
    ], TOKEN_METADATA_PROGRAM_ID))[0];
};
const getTokenWallet = async (wallet, mint)=>{
    return (await anchor_.web3.PublicKey.findProgramAddress([
        wallet.toBuffer(),
        spl_token_.TOKEN_PROGRAM_ID.toBuffer(),
        mint.toBuffer()
    ], SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID))[0];
};
const mintOneToken = async (candyMachine, config, payer, treasury)=>{
    const mint = anchor_.web3.Keypair.generate();
    const token = await getTokenWallet(payer, mint.publicKey);
    const { connection , program  } = candyMachine;
    const metadata = await getMetadata(mint.publicKey);
    const masterEdition = await getMasterEdition(mint.publicKey);
    const rent = await connection.getMinimumBalanceForRentExemption(spl_token_.MintLayout.span);
    return await program.rpc.mintNft({
        accounts: {
            config,
            candyMachine: candyMachine.id,
            payer: payer,
            wallet: treasury,
            mint: mint.publicKey,
            metadata,
            masterEdition,
            mintAuthority: payer,
            updateAuthority: payer,
            tokenMetadataProgram: TOKEN_METADATA_PROGRAM_ID,
            tokenProgram: spl_token_.TOKEN_PROGRAM_ID,
            systemProgram: anchor_.web3.SystemProgram.programId,
            rent: anchor_.web3.SYSVAR_RENT_PUBKEY,
            clock: anchor_.web3.SYSVAR_CLOCK_PUBKEY
        },
        signers: [
            mint
        ],
        instructions: [
            anchor_.web3.SystemProgram.createAccount({
                fromPubkey: payer,
                newAccountPubkey: mint.publicKey,
                space: spl_token_.MintLayout.span,
                lamports: rent,
                programId: spl_token_.TOKEN_PROGRAM_ID
            }),
            spl_token_.Token.createInitMintInstruction(spl_token_.TOKEN_PROGRAM_ID, mint.publicKey, 0, payer, payer),
            createAssociatedTokenAccountInstruction(token, payer, payer, mint.publicKey),
            spl_token_.Token.createMintToInstruction(spl_token_.TOKEN_PROGRAM_ID, mint.publicKey, token, payer, [], 1), 
        ]
    });
};
const shortenAddress = (address, chars = 4)=>{
    return `${address.slice(0, chars)}...${address.slice(-chars)}`;
};
const sleep = (ms)=>{
    return new Promise((resolve)=>setTimeout(resolve, ms)
    );
};

;// CONCATENATED MODULE: ./src/views/CandyMachineMintView/MintSection.tsx









const MintSection = (props)=>{
    const alert = (0,external_react_alert_.useAlert)();
    const { connection  } = (0,useConnection/* useConnection */.R)();
    const { 0: counter , 1: setCounter  } = (0,external_react_.useState)({
        itemsAvailable: 0,
        itemsRemaining: 0
    });
    const { 0: price1 , 1: setPrice  } = (0,external_react_.useState)();
    const { 0: balance1 , 1: setBalance  } = (0,external_react_.useState)();
    const { 0: isActive , 1: setIsActive  } = (0,external_react_.useState)(false); // true when countdown completes
    const { 0: isSoldOut , 1: setIsSoldOut  } = (0,external_react_.useState)(false); // true when items remaining is zero
    const { 0: isMinting , 1: setIsMinting  } = (0,external_react_.useState)(false); // true when user got to press MINT
    const { 0: startDate , 1: setStartDate  } = (0,external_react_.useState)(new Date(props.startDate));
    const wallet = (0,useAnchorWallet/* useAnchorWallet */.z)();
    const { 0: candyMachine1 , 1: setCandyMachine  } = (0,external_react_.useState)();
    const onMint = async ()=>{
        try {
            setIsMinting(true);
            alert.show("Mint has been started!");
            if (wallet && (candyMachine1 === null || candyMachine1 === void 0 ? void 0 : candyMachine1.program)) {
                const mintTxId = await mintOneToken(candyMachine1, props.config, wallet.publicKey, props.treasury);
                alert.show("Confirming transaction...");
                const status = await awaitTransactionSignatureConfirmation(mintTxId, props.txTimeout, connection, "singleGossip", false);
                if (!(status === null || status === void 0 ? void 0 : status.err)) {
                    alert.success("Congratulations! Mint succeeded!");
                } else {
                    alert.error("Mint failed! Please try again!");
                }
            }
        } catch (error) {
            // TODO: blech:
            let message = error.msg || "Minting failed! Please try again!";
            if (!error.msg) {
                if (error.message.indexOf("0x138")) {
                } else if (error.message.indexOf("0x137")) {
                    message = `SOLD OUT!`;
                } else if (error.message.indexOf("0x135")) {
                    message = `Insufficient funds to mint. Please fund your wallet.`;
                }
            } else {
                if (error.code === 311) {
                    message = `SOLD OUT!`;
                    setIsSoldOut(true);
                } else if (error.code === 312) {
                    message = `Minting period hasn't started yet.`;
                }
            }
            alert.error(message);
        } finally{
            if (wallet) {
                const balance = await connection.getBalance(wallet.publicKey);
                setBalance(balance / web3_js_.LAMPORTS_PER_SOL);
            }
            setIsMinting(false);
        }
    };
    (0,external_react_.useEffect)(()=>{
        (async ()=>{
            if (wallet) {
                const balance = await connection.getBalance(wallet.publicKey);
                setBalance(balance / web3_js_.LAMPORTS_PER_SOL);
            }
        })();
    }, [
        wallet,
        connection
    ]);
    (0,external_react_.useEffect)(()=>{
        (async ()=>{
            if (!wallet) return;
            try {
                const { candyMachine , goLiveDate , itemsRemaining , itemsAvailable , price ,  } = await getCandyMachineState(wallet, props.candyMachineId, connection);
                setIsSoldOut(itemsRemaining === 0);
                setStartDate(goLiveDate);
                setCandyMachine(candyMachine);
                setCounter({
                    itemsRemaining,
                    itemsAvailable
                });
                setPrice(price / web3_js_.LAMPORTS_PER_SOL);
            } catch (error) {
                console.error(error);
                alert.error("Error fetching CandyMachine. Check browser console for the details.");
            }
        })();
    }, [
        wallet,
        props.candyMachineId,
        connection
    ]);
    console.log("startDate", startDate);
    return(/*#__PURE__*/ jsx_runtime_.jsx("main", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `grid grid-cols-1 gap-4`,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        wallet && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                "Balance: ◎",
                                (balance1 || 0).toLocaleString()
                            ]
                        }),
                        (counter === null || counter === void 0 ? void 0 : counter.itemsAvailable) ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                counter === null || counter === void 0 ? void 0 : counter.itemsRemaining,
                                " of ",
                                counter === null || counter === void 0 ? void 0 : counter.itemsAvailable,
                                " Available"
                            ]
                        }) : null
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: !wallet ? /*#__PURE__*/ jsx_runtime_.jsx(SelectAndConnectWalletButton, {
                        onUseWalletClick: ()=>{
                        }
                    }) : /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        disabled: isSoldOut || isMinting || !isActive,
                        onClick: onMint,
                        className: "btn btn-primary btn-wide btn-lg",
                        children: isSoldOut ? "SOLD OUT" : isActive ? isMinting ? /*#__PURE__*/ jsx_runtime_.jsx(Loader, {
                            noText: true
                        }) : `MINT for ◎${price1}` : /*#__PURE__*/ jsx_runtime_.jsx((external_react_countdown_default()), {
                            date: startDate,
                            onMount: ({ completed  })=>completed && setIsActive(true)
                            ,
                            onComplete: ()=>setIsActive(true)
                            ,
                            renderer: renderCounter
                        })
                    })
                })
            ]
        })
    }));
};
const renderCounter = ({ days , hours , minutes , seconds , completed  })=>{
    if (!seconds) return(/*#__PURE__*/ jsx_runtime_.jsx("span", {
        children: "Loading..."
    }));
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
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
const config = {
    CANDY_MACHINE_CONFIG: "6vbr5zpU44G4Ni2S36S6m7bhjMwy4ZiabVG5nJnxWWeK",
    CANDY_MACHINE_ID: "4f2UZyh476EMGeMo12yRmmxYNBHnGhjyvuwQJMBAnKbd",
    CANDY_START_DATE: "1639155600",
    TREASURY_ADDRESS: "CBBUMHRmbVUck99mTCip5sHP16kzGj3QTYB8K3XxwmQx"
};

// EXTERNAL MODULE: ./src/views/CandyMachineMintView/index.module.css
var CandyMachineMintView_index_module = __webpack_require__(8691);
var CandyMachineMintView_index_module_default = /*#__PURE__*/__webpack_require__.n(CandyMachineMintView_index_module);
;// CONCATENATED MODULE: ./src/views/CandyMachineMintView/index.tsx








const treasury = new anchor_.web3.PublicKey(config.TREASURY_ADDRESS);
const candyMachineConfig = new anchor_.web3.PublicKey(config.CANDY_MACHINE_CONFIG);
const candyMachineId = new anchor_.web3.PublicKey(config.CANDY_MACHINE_ID);
const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE, 10);
const txTimeout = 30000; // milliseconds (confirm this works for your project)
const CandyMachineMintView = ({})=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "container mx-auto max-w-6xl p-8 2xl:px-0",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (CandyMachineMintView_index_module_default()).container,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex-none",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "btn btn-square btn-ghost",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-4xl",
                                    children: "🍬"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex-1 px-2 mx-2",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-sm breadcrumbs",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "text-xl",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "Templates"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "opacity-40",
                                                children: "NFT Mint UI"
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex-none",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* WalletMultiButton */.aD, {
                                className: "btn btn-ghost"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "text-center pt-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "hero min-h-16 py-20",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-center hero-content",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "max-w-lg",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                            className: "mb-5 text-5xl",
                                            children: [
                                                "Candy Machine Mint UI ",
                                                /*#__PURE__*/ jsx_runtime_.jsx(SolanaLogo, {
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: "mb-5",
                                            children: [
                                                "Here is very basic example of minting site. ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                }),
                                                "It uses",
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
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
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(MintSection, {
                                candyMachineId: candyMachineId,
                                config: candyMachineConfig,
                                startDate: startDateSeed,
                                treasury: treasury,
                                txTimeout: txTimeout
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "max-w-xl mx-auto",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "mb-5 mt-16 text-5xl",
                                    children: "Description:"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        "You can test this Candy Machine mint on Devnet.",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                        }),
                                        "Switch to Devnet in ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("code", {
                                            children: "src/pages/_app.tsx"
                                        }),
                                        " file. And run app locally."
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        "Edit ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("code", {
                                            children: "src/views/CandyMachineMintView/config.ts"
                                        }),
                                        " to use your own Candy Machine.",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                        }),
                                        " You can read details about variables on",
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://github.com/exiled-apes/candy-machine-mint#environment-variables",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className: "link hover:underline",
                                            children: "exiled-apes/candy-machine-mints Github"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        "Always set custom RPC server for the final mint site. ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                        }),
                                        "You can do it here: ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("code", {
                                            children: "src/pages/_app.tsx"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {
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





/***/ })

};
;