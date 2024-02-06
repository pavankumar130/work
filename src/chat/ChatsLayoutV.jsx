import React from "react";
import SidebarMainItemsWrapper from "./SidebarMainItemsWrapper";
import TopBarWrapper from "./TopBarWrapper";

import { BsSendFill } from 'react-icons/bs'

const ChatsLayoutV = () => {
    return (
        <div
            style={{
                width: "100%",
                position: "relative",
                borderRadius: "16px",
                backgroundColor: "#f7f8fa",
                overflow: "hidden",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "10px 11px 10px 0px",
                boxSizing: "border-box",
                letterSpacing: "normal",
            }}
        >
            <div
                style={{
                    height: "960px",
                    width: "296px",
                    overflow: "hidden",
                    flexShrink: "0",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    padding: "24px 16px 16px",
                    boxSizing: "border-box",
                    gap: "37px",
                    minWidth: "296px",
                }}
            >
                <SidebarMainItemsWrapper />
                <a href="/chatai">
                <button
                    style={{
                        cursor: "pointer",
                        border: "1px solid #174bd2",
                        padding: "12px 64px 12px 63px",
                        backgroundColor: "transparent",
                        borderRadius: "8px",
                        background: "linear-gradient(180deg, #2b7afb, #2174fd, #213bfd)",
                        boxShadow:
                            "0px 2px 5px rgba(20, 88, 201, 0.17), 0px -2px 0.3px rgba(14, 56, 125, 0.18) inset, 0px 2px 1px rgba(255, 255, 255, 0.22) inset",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: "7px",
                    }}
                >
                    <div
                        style={{
                            position: "relative",
                            fontSize: "14px",
                            lineHeight: "130%",
                            fontWeight: "500",
                            fontFamily: "Inter",
                            color: "#fff",
                            textAlign: "center",
                        }}
                    >
                        Start new chat
                    </div>
                </button>
                </a>
            </div>
            <main
                style={{
                    flex: "1",
                    borderRadius: "16px",
                    backgroundColor: "#fff",
                    boxShadow: "0px 1px 3px rgba(25, 33, 61, 0.1)",
                    border: "1px solid #f0f2f5",
                    boxSizing: "border-box",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    maxWidth: "calc(100% - 295px)",
                    marginLeft: "-1px",
                }}
            >
                <TopBarWrapper />
                <section
                    style={{
                        alignSelf: "stretch",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "center",
                        padding: "40px 20px",
                        boxSizing: "border-box",
                        position: "relative",
                        maxWidth: "100%",
                        textAlign: "center",
                        fontSize: "22px",
                        color: "#19213d",
                        fontFamily: "Inter",
                    }}
                >
                    <div
                        style={{
                            width: "774px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            gap: "40px",
                            maxWidth: "100%",
                            zIndex: "1",
                        }}
                    >
                        <div
                            style={{
                                alignSelf: "stretch",
                                borderRadius: "16px",
                                backgroundColor: "#fff",
                                boxShadow: "2px 2px 2px rgba(25, 33, 61, 0.08)",
                                border: "1px solid #e3e6ea",
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "48px 32px",
                                position: "relative",
                                gap: "10px",
                                background: 'linear-gradient(180deg, rgba(255,255,255,1) 85%, rgba(0,22,255,1) 100%)' 
                            }}
                        >
                            <div
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                    gap: "24px",
                                    maxWidth: "600px",
                                    zIndex: "1",
                                }}
                            >
                                <div
                                    style={{
                                        alignSelf: "stretch",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "flex-start",
                                        gap: "6px",
                                    }}
                                >
                                    <h2
                                        style={{
                                            margin: "0",
                                            position: "relative",
                                            fontSize: "inherit",
                                            lineHeight: "130%",
                                            fontWeight: "500",
                                            fontFamily: "inherit",
                                        }}
                                    >
                                        Welcome!
                                    </h2>
                                    <div
                                        style={{
                                            alignSelf: "stretch",
                                            position: "relative",
                                            fontSize: "14px",
                                            lineHeight: "150%",
                                            color: 'black'
                                        }}
                                    >
                                        Chat with BharatAI
                                    </div>
                                </div>
                                <div
                                    style={{
                                        alignSelf: "stretch",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-end",
                                        justifyContent: "flex-start",
                                        fontSize: "12px",
                                        color: "#666f8d",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "141px",
                                            display: "none",
                                            flexDirection: "column",
                                            alignItems: "flex-end",
                                            justifyContent: "flex-end",
                                            padding: "0px 24px",
                                            boxSizing: "border-box",
                                            zIndex: "1",
                                        }}
                                    >
                                        <div
                                            style={{
                                                alignSelf: "stretch",
                                                borderRadius: "4px 4px 0px 0px",
                                                backgroundColor: "#fff",
                                                border: "1px solid #f0f2f5",
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "flex-end",
                                                padding: "6px 5px 6px 7px",
                                                gap: "4px",
                                                whiteSpace: "nowrap",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    height: "16px",
                                                    flex: "1",
                                                    position: "relative",
                                                    lineHeight: "130%",
                                                    fontWeight: "500",
                                                    display: "inline-block",
                                                }}
                                            >
                                                250 tokens
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            alignSelf: "stretch",
                                            borderRadius: "16px",
                                            backgroundColor: "#fff",
                                            boxShadow: "0px 2px 4px rgba(25, 33, 61, 0.08)",
                                            border: "1px solid #f0f2f5",
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            padding: "8px 8px 8px 16px",
                                            gap: "20px",
                                            textAlign: "left",
                                            fontSize: "14px",
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "flex-start",
                                                gap: "2px",
                                            }}
                                        >
                                            <div style={{ position: "relative", lineHeight: "150%" }}>
                                        
                                                    <input type="text" style={{width:'500px',border:'none',padding:'15px 0'}} placeholder="How can I help you ..." />
                                        
                                            </div>
                                        </div>
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "flex-end",
                                                gap: "4px",
                                                textAlign: "center",
                                                color: "#fff",
                                            }}
                                        >
                                            <button type="submit">
                                                <div
                                                    style={{
                                                        height: "42px",
                                                        width: "42px",
                                                        borderRadius: "8px",
                                                        background:
                                                            "linear-gradient(180deg, #2b7afb, #2174fd, #213bfd)",
                                                        boxShadow:
                                                            "0px 2px 5px rgba(20, 88, 201, 0.17), 0px -2px 0.3px rgba(14, 56, 125, 0.18) inset, 0px 2px 1px rgba(255, 255, 255, 0.22) inset",
                                                        border: "1px solid #174bd2",
                                                        boxSizing: "border-box",
                                                        overflow: "hidden",
                                                        flexShrink: "0",
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                    }}
                                                >
                                                    <BsSendFill />
                                                </div>
                                            </button>
                                            <div
                                                style={{
                                                    alignSelf: "stretch",
                                                    borderRadius: "8px",
                                                    background:
                                                        "linear-gradient(180deg, #2b7afb, #2174fd, #213bfd)",
                                                    boxShadow:
                                                        "0px 2px 5px rgba(20, 88, 201, 0.17), 0px -2px 0.3px rgba(14, 56, 125, 0.18) inset, 0px 2px 1px rgba(255, 255, 255, 0.22) inset",
                                                    border: "1px solid #174bd2",
                                                    display: "none",
                                                    flexDirection: "row",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    padding: "12px 15px",
                                                    gap: "8px",
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        alignSelf: "stretch",
                                                        position: "relative",
                                                        lineHeight: "130%",
                                                        fontWeight: "500",
                                                    }}
                                                >
                                                    Send message
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            style={{
                                alignSelf: "stretch",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                                gap: "30px",
                                maxWidth: "100%",
                                textAlign: "left",
                                fontSize: "16px",
                                color: "#666f8d",
                            }}
                        >
                            <div
                                style={{
                                    alignSelf: "stretch",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    gap: "20px",
                                    maxWidth: "100%",
                                }}
                            >
                                <div
                                    style={{
                                        position: "relative",
                                        lineHeight: "130%",
                                        fontWeight: "500",
                                    }}
                                >
                                    Chats (56)
                                </div>
                                <div
                                    style={{
                                        width: "574px",
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "flex-start",
                                        justifyContent: "flex-start",
                                        gap: "8px",
                                        maxWidth: "100%",
                                        fontSize: "12px",
                                    }}
                                >
                                    <div
                                        style={{
                                            flex: "1",
                                            borderRadius: "8px",
                                            backgroundColor: "#fff",
                                            boxShadow: "0px 1px 3px rgba(25, 33, 61, 0.1)",
                                            border: "1px solid #f0f2f5",
                                            boxSizing: "border-box",
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "flex-start",
                                            padding: "6px 6px 6px 12px",
                                            minWidth: "124px",
                                            minHeight: "40px",
                                            color: "#fff",
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: "123.67px",
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "flex-start",
                                                gap: "4px",
                                            }}
                                        >
                                            <input
                                                style={{
                                                    width: "calc(100% - 13px)",
                                                    border: "none",
                                                    outline: "none",
                                                    fontFamily: "Inter",
                                                    fontSize: "12px",
                                                    backgroundColor: "transparent",
                                                    height: "16px",
                                                    flex: "1",
                                                    position: "relative",
                                                    lineHeight: "130%",
                                                    color: "#666f8d",
                                                    textAlign: "left",
                                                    display: "inline-block",
                                                    minWidth: "64px",
                                                }}
                                                placeholder="Search for chats..."
                                                type="text"
                                            />
                                        </div>
                                        <div
                                            style={{
                                                height: "32px",
                                                borderRadius: "8px",
                                                background:
                                                    "linear-gradient(180deg, #2b7afb, #2174fd, #213bfd)",
                                                boxShadow:
                                                    "0px 2px 5px rgba(20, 88, 201, 0.17), 0px -2px 0.3px rgba(14, 56, 125, 0.18) inset, 0px 2px 1px rgba(255, 255, 255, 0.22) inset",
                                                border: "1px solid #174bd2",
                                                boxSizing: "border-box",
                                                display: "none",
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                padding: "8px 15px",
                                                gap: "4px",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    alignSelf: "stretch",
                                                    position: "relative",
                                                    lineHeight: "130%",
                                                    fontWeight: "500",
                                                }}
                                            >
                                                Default
                                            </div>
                                        </div>
                                        <div
                                            style={{
                                                alignSelf: "stretch",
                                                borderRadius: "4px",
                                                backgroundColor: "#f7f8fa",
                                                boxShadow: "0px 1px 3px rgba(25, 33, 61, 0.1)",
                                                display: "none",
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                padding: "6px",
                                                gap: "4px",
                                                textAlign: "center",
                                                color: "#19213d",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    alignSelf: "stretch",
                                                    position: "relative",
                                                    lineHeight: "130%",
                                                    fontWeight: "500",
                                                }}
                                            >
                                                K
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            height: "40px",
                                            width: "146px",
                                            borderRadius: "8px",
                                            backgroundColor: "#fff",
                                            boxShadow: "0px 1px 3px rgba(25, 33, 61, 0.1)",
                                            border: "1px solid #f0f2f5",
                                            boxSizing: "border-box",
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            padding: "6px 12px",
                                            minHeight: "40px",
                                            gap: "20px",
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "flex-start",
                                                gap: "6px",
                                            }}
                                        >
                                            <div style={{ position: "relative", lineHeight: "130%" }}>
                                                Model
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            height: "40px",
                                            width: "146px",
                                            borderRadius: "8px",
                                            backgroundColor: "#fff",
                                            boxShadow: "0px 1px 3px rgba(25, 33, 61, 0.1)",
                                            border: "1px solid #f0f2f5",
                                            boxSizing: "border-box",
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            padding: "6px 12px",
                                            minHeight: "40px",
                                            gap: "20px",
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "flex-start",
                                                gap: "6px",
                                            }}
                                        >
                                            <div style={{ position: "relative", lineHeight: "130%" }}>
                                                Sort by
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                style={{
                                    width: "774px",
                                    overflowX: "auto",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    justifyContent: "flex-start",
                                    gap: "12px",
                                    maxWidth: "100%",
                                    fontSize: "14px",
                                    color: "#19213d",
                                }}
                            >
                                <div
                                    style={{
                                        width: "774px",
                                        borderRadius: "8px",
                                        backgroundColor: "#fff",
                                        boxShadow: "0px 2px 4px rgba(25, 33, 61, 0.08)",
                                        border: "1px solid #e3e6ea",
                                        boxSizing: "border-box",
                                        overflow: "hidden",
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        padding: "16px 23px",
                                        gap: "0px",
                                        rowGap: "20px",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "476px",
                                            position: "relative",
                                            lineHeight: "130%",
                                            fontWeight: "500",
                                            display: "inline-block",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            whiteSpace: "nowrap",
                                            flexShrink: "0",
                                            maxWidth: "100%",
                                        }}
                                    >
                                        Lorem ipsum dolor sit amet consectetur adipisc
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "flex-start",
                                            gap: "24px",
                                            fontSize: "12px",
                                            color: "#666f8d",
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: "44px",
                                                borderRadius: "4px",
                                                backgroundColor: "#f7f8fa",
                                                boxShadow: "0px 1px 3px rgba(25, 33, 61, 0.1)",
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                padding: "4px 1px",
                                                boxSizing: "border-box",
                                                gap: "4px",
                                                textAlign: "center",
                                                color: "#19213d",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    flex: "1",
                                                    position: "relative",
                                                    lineHeight: "130%",
                                                    fontWeight: "500",
                                                }}
                                            >
                                                GPT 4
                                            </div>
                                        </div>
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "flex-end",
                                                padding: "0px 0px 0px 6px",
                                                boxSizing: "border-box",
                                                gap: "4px",
                                                minWidth: "40px",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    position: "relative",
                                                    lineHeight: "130%",
                                                    fontWeight: "500",
                                                }}
                                            >
                                                24
                                            </div>
                                        </div>
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "flex-end",
                                                padding: "0px 0px 0px 8px",
                                                boxSizing: "border-box",
                                                gap: "4px",
                                                minWidth: "80px",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    position: "relative",
                                                    lineHeight: "130%",
                                                    fontWeight: "500",
                                                }}
                                            >
                                                1 min ago
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        width: "774px",
                                        borderRadius: "8px",
                                        backgroundColor: "#fff",
                                        boxShadow: "0px 2px 4px rgba(25, 33, 61, 0.08)",
                                        border: "1px solid #e3e6ea",
                                        boxSizing: "border-box",
                                        overflow: "hidden",
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        padding: "16px 23px",
                                        gap: "0px",
                                        rowGap: "20px",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "467px",
                                            position: "relative",
                                            lineHeight: "130%",
                                            fontWeight: "500",
                                            display: "inline-block",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            whiteSpace: "nowrap",
                                            flexShrink: "0",
                                            maxWidth: "100%",
                                        }}
                                    >
                                        Duis aute irure dolor in reprehenderit
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "flex-start",
                                            gap: "24px",
                                            fontSize: "12px",
                                            color: "#666f8d",
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: "53px",
                                                borderRadius: "4px",
                                                backgroundColor: "#f7f8fa",
                                                boxShadow: "0px 1px 3px rgba(25, 33, 61, 0.1)",
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                padding: "4px 1px",
                                                boxSizing: "border-box",
                                                gap: "4px",
                                                textAlign: "center",
                                                color: "#19213d",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    flex: "1",
                                                    position: "relative",
                                                    lineHeight: "130%",
                                                    fontWeight: "500",
                                                }}
                                            >
                                                Llama 2
                                            </div>
                                        </div>
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "flex-end",
                                                padding: "0px 0px 0px 8px",
                                                boxSizing: "border-box",
                                                gap: "4px",
                                                minWidth: "40px",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    position: "relative",
                                                    lineHeight: "130%",
                                                    fontWeight: "500",
                                                }}
                                            >
                                                13
                                            </div>
                                        </div>
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "flex-end",
                                                padding: "0px 0px 0px 6px",
                                                boxSizing: "border-box",
                                                gap: "4px",
                                                minWidth: "80px",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    position: "relative",
                                                    lineHeight: "130%",
                                                    fontWeight: "500",
                                                }}
                                            >
                                                5 min ago
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        width: "774px",
                                        borderRadius: "8px",
                                        backgroundColor: "#fff",
                                        boxShadow: "0px 2px 4px rgba(25, 33, 61, 0.08)",
                                        border: "1px solid #e3e6ea",
                                        boxSizing: "border-box",
                                        overflow: "hidden",
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        padding: "16px 23px",
                                        gap: "0px",
                                        rowGap: "20px",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "439px",
                                            position: "relative",
                                            lineHeight: "130%",
                                            fontWeight: "500",
                                            display: "inline-block",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            whiteSpace: "nowrap",
                                            flexShrink: "0",
                                            maxWidth: "100%",
                                        }}
                                    >{`Purus in massa tempor nec feugiat nisl pretium fus `}</div>
                                    <div
                                        style={{
                                            width: "287px",
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "flex-start",
                                            gap: "24px",
                                            fontSize: "12px",
                                            color: "#666f8d",
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: "81px",
                                                borderRadius: "4px",
                                                backgroundColor: "#f7f8fa",
                                                boxShadow: "0px 1px 3px rgba(25, 33, 61, 0.1)",
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                padding: "4px 1px",
                                                boxSizing: "border-box",
                                                gap: "4px",
                                                textAlign: "center",
                                                color: "#19213d",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    flex: "1",
                                                    position: "relative",
                                                    lineHeight: "130%",
                                                    fontWeight: "500",
                                                }}
                                            >
                                                Mistral 8x7B
                                            </div>
                                        </div>
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "flex-end",
                                                padding: "0px 0px 0px 14px",
                                                boxSizing: "border-box",
                                                gap: "4px",
                                                minWidth: "40px",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    position: "relative",
                                                    lineHeight: "130%",
                                                    fontWeight: "500",
                                                }}
                                            >
                                                4
                                            </div>
                                        </div>
                                        <div
                                            style={{
                                                flex: "1",
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "flex-end",
                                                gap: "4px",
                                                minWidth: "80px",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    position: "relative",
                                                    lineHeight: "130%",
                                                    fontWeight: "500",
                                                }}
                                            >
                                                22 min ago
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        width: "774px",
                                        borderRadius: "8px",
                                        backgroundColor: "#fff",
                                        boxShadow: "0px 2px 4px rgba(25, 33, 61, 0.08)",
                                        border: "1px solid #e3e6ea",
                                        boxSizing: "border-box",
                                        overflow: "hidden",
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        padding: "16px 23px",
                                        gap: "0px",
                                        rowGap: "20px",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "466px",
                                            position: "relative",
                                            lineHeight: "130%",
                                            fontWeight: "500",
                                            display: "inline-block",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            whiteSpace: "nowrap",
                                            flexShrink: "0",
                                            maxWidth: "100%",
                                        }}
                                    >
                                        Urna nec tincidunt praesent semper feugiat
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "flex-start",
                                            gap: "24px",
                                            fontSize: "12px",
                                            color: "#666f8d",
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: "54px",
                                                borderRadius: "4px",
                                                backgroundColor: "#f7f8fa",
                                                boxShadow: "0px 1px 3px rgba(25, 33, 61, 0.1)",
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                padding: "4px 1px",
                                                boxSizing: "border-box",
                                                gap: "4px",
                                                textAlign: "center",
                                                color: "#19213d",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    flex: "1",
                                                    position: "relative",
                                                    lineHeight: "130%",
                                                    fontWeight: "500",
                                                }}
                                            >
                                                GPT 3.5
                                            </div>
                                        </div>
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "flex-end",
                                                padding: "0px 0px 0px 6px",
                                                boxSizing: "border-box",
                                                gap: "4px",
                                                minWidth: "40px",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    position: "relative",
                                                    lineHeight: "130%",
                                                    fontWeight: "500",
                                                }}
                                            >
                                                20
                                            </div>
                                        </div>
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "flex-end",
                                                padding: "0px 0px 0px 17px",
                                                boxSizing: "border-box",
                                                gap: "4px",
                                                minWidth: "80px",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    position: "relative",
                                                    lineHeight: "130%",
                                                    fontWeight: "500",
                                                }}
                                            >
                                                1 hr ago
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        width: "774px",
                                        borderRadius: "8px",
                                        backgroundColor: "#fff",
                                        boxShadow: "0px 2px 4px rgba(25, 33, 61, 0.08)",
                                        border: "1px solid #e3e6ea",
                                        boxSizing: "border-box",
                                        overflow: "hidden",
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        padding: "16px 23px",
                                        gap: "0px",
                                        rowGap: "20px",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "476px",
                                            position: "relative",
                                            lineHeight: "130%",
                                            fontWeight: "500",
                                            display: "inline-block",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            whiteSpace: "nowrap",
                                            flexShrink: "0",
                                            maxWidth: "100%",
                                        }}
                                    >
                                        Vulputate odio ut enim blandit volutpat maecenas volu
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "flex-start",
                                            gap: "24px",
                                            fontSize: "12px",
                                            color: "#666f8d",
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: "44px",
                                                borderRadius: "4px",
                                                backgroundColor: "#f7f8fa",
                                                boxShadow: "0px 1px 3px rgba(25, 33, 61, 0.1)",
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                padding: "4px 1px",
                                                boxSizing: "border-box",
                                                gap: "4px",
                                                textAlign: "center",
                                                color: "#19213d",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    flex: "1",
                                                    position: "relative",
                                                    lineHeight: "130%",
                                                    fontWeight: "500",
                                                }}
                                            >
                                                GPT 4
                                            </div>
                                        </div>
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "flex-end",
                                                padding: "0px 0px 0px 8px",
                                                boxSizing: "border-box",
                                                gap: "4px",
                                                minWidth: "40px",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    position: "relative",
                                                    lineHeight: "130%",
                                                    fontWeight: "500",
                                                }}
                                            >
                                                18
                                            </div>
                                        </div>
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "flex-end",
                                                padding: "0px 0px 0px 9px",
                                                boxSizing: "border-box",
                                                gap: "4px",
                                                minWidth: "80px",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    position: "relative",
                                                    lineHeight: "130%",
                                                    fontWeight: "500",
                                                }}
                                            >
                                                2 hrs ago
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        width: "774px",
                                        borderRadius: "8px",
                                        backgroundColor: "#fff",
                                        boxShadow: "0px 2px 4px rgba(25, 33, 61, 0.08)",
                                        border: "1px solid #e3e6ea",
                                        boxSizing: "border-box",
                                        overflow: "hidden",
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        padding: "16px 23px",
                                        gap: "0px",
                                        rowGap: "20px",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "467px",
                                            position: "relative",
                                            lineHeight: "130%",
                                            fontWeight: "500",
                                            display: "inline-block",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            whiteSpace: "nowrap",
                                            flexShrink: "0",
                                            maxWidth: "100%",
                                        }}
                                    >
                                        Arcu ac tortor dignissim convallis
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "flex-start",
                                            gap: "24px",
                                            fontSize: "12px",
                                            color: "#666f8d",
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: "53px",
                                                borderRadius: "4px",
                                                backgroundColor: "#f7f8fa",
                                                boxShadow: "0px 1px 3px rgba(25, 33, 61, 0.1)",
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                padding: "4px 1px",
                                                boxSizing: "border-box",
                                                gap: "4px",
                                                textAlign: "center",
                                                color: "#19213d",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    flex: "1",
                                                    position: "relative",
                                                    lineHeight: "130%",
                                                    fontWeight: "500",
                                                }}
                                            >
                                                Llama 2
                                            </div>
                                        </div>
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "flex-end",
                                                padding: "0px 0px 0px 15px",
                                                boxSizing: "border-box",
                                                gap: "4px",
                                                minWidth: "40px",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    position: "relative",
                                                    lineHeight: "130%",
                                                    fontWeight: "500",
                                                }}
                                            >
                                                7
                                            </div>
                                        </div>
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "flex-end",
                                                padding: "0px 0px 0px 9px",
                                                boxSizing: "border-box",
                                                gap: "4px",
                                                minWidth: "80px",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    position: "relative",
                                                    lineHeight: "130%",
                                                    fontWeight: "500",
                                                }}
                                            >
                                                3 hrs ago
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        width: "774px",
                                        borderRadius: "8px",
                                        backgroundColor: "#fff",
                                        boxShadow: "0px 2px 4px rgba(25, 33, 61, 0.08)",
                                        border: "1px solid #e3e6ea",
                                        boxSizing: "border-box",
                                        overflow: "hidden",
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        padding: "16px 23px",
                                        gap: "0px",
                                        rowGap: "20px",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "455px",
                                            position: "relative",
                                            lineHeight: "130%",
                                            fontWeight: "500",
                                            display: "inline-block",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            whiteSpace: "nowrap",
                                            flexShrink: "0",
                                            maxWidth: "100%",
                                        }}
                                    >
                                        Convallis tellus id interdum velit vehicula ipsum aer
                                    </div>
                                    <div
                                        style={{
                                            width: "271px",
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "flex-start",
                                            gap: "24px",
                                            fontSize: "12px",
                                            color: "#666f8d",
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: "65px",
                                                borderRadius: "4px",
                                                backgroundColor: "#f7f8fa",
                                                boxShadow: "0px 1px 3px rgba(25, 33, 61, 0.1)",
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                padding: "4px 1px",
                                                boxSizing: "border-box",
                                                gap: "4px",
                                                textAlign: "center",
                                                color: "#19213d",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    flex: "1",
                                                    position: "relative",
                                                    lineHeight: "130%",
                                                    fontWeight: "500",
                                                }}
                                            >
                                                Mistral 7B
                                            </div>
                                        </div>
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "flex-end",
                                                padding: "0px 0px 0px 9px",
                                                boxSizing: "border-box",
                                                gap: "4px",
                                                minWidth: "40px",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    position: "relative",
                                                    lineHeight: "130%",
                                                    fontWeight: "500",
                                                }}
                                            >{`12 `}</div>
                                        </div>
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "flex-end",
                                                padding: "0px 0px 0px 9px",
                                                boxSizing: "border-box",
                                                gap: "4px",
                                                minWidth: "80px",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    position: "relative",
                                                    lineHeight: "130%",
                                                    fontWeight: "500",
                                                }}
                                            >
                                                4 hrs ago
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ChatsLayoutV;