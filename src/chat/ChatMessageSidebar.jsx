import React from "react";
import SidebarMainItemsWrapper from "./SidebarMainItemsWrapper";
import TopWrapper from "./TopWrapper";
import FrameComponent from "./FrameComponent";

const ChatMessageSidebar = () => {
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
        padding: "10px 10px 10px 0px",
        boxSizing: "border-box",
        letterSpacing: "normal",
        textAlign: "center",
        fontSize: "14px",
        color: "#fff",
        fontFamily: "Inter",
      }}
    >
      <div
        style={{
          height: "923px",
          width: "296px",
          overflow: "hidden",
          flexShrink: "0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "24px 16px 16px",
          boxSizing: "border-box",
          minWidth: "296px",
        }}
      >
        <SidebarMainItemsWrapper />
        <div
          style={{
            borderRadius: "8px",
            background: "linear-gradient(180deg, #2b7afb, #2174fd, #213bfd)",
            boxShadow:
              "0px 2px 5px rgba(20, 88, 201, 0.17), 0px -2px 0.3px rgba(14, 56, 125, 0.18) inset, 0px 2px 1px rgba(255, 255, 255, 0.22) inset",
            border: "1px solid #174bd2",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "12px 64px 12px 62px",
            gap: "8px",
          }}
        >
          <img
            style={{ height: "15px", width: "15px", position: "relative" }}
            alt=""
            src="/line-roundedplus.svg"
          />
          <div
            style={{
              position: "relative",
              lineHeight: "130%",
              fontWeight: "500",
            }}
          >
            Start new chat
          </div>
          <img
            style={{
              height: "15px",
              width: "15px",
              position: "relative",
              display: "none",
            }}
            alt=""
            src="/line-roundedarrow-rigth.svg"
          />
        </div>
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
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          rowGap: "20px",
          maxWidth: "calc(100% - 296px)",
        }}
      >
        <section
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "30px",
            maxWidth: "100%",
            textAlign: "left",
            fontSize: "16px",
            color: "#19213d",
            fontFamily: "Inter",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              backgroundColor: "#fff",
              borderBottom: "1px solid #e3e6ea",
              boxSizing: "border-box",
              overflow: "hidden",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px 24px",
              gap: "20px",
              maxWidth: "100%",
            }}
          >
            <div
              style={{
                width: "339px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "24px",
                maxWidth: "100%",
              }}
            >
              <div
                style={{
                  flex: "1",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "8px",
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
                  Lorem ipsum dolor sit amet conectur
                </div>
                <div
                  style={{
                    borderRadius: "4px",
                    backgroundColor: "#f7f8fa",
                    boxShadow: "0px 1px 3px rgba(25, 33, 61, 0.1)",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "6px",
                    gap: "4px",
                    textAlign: "center",
                    fontSize: "12px",
                  }}
                >
                  <img
                    style={{
                      height: "11px",
                      width: "11px",
                      position: "relative",
                      display: "none",
                    }}
                    alt=""
                    src="/line-roundedcommand.svg"
                  />
                  <div
                    style={{
                      position: "relative",
                      lineHeight: "130%",
                      fontWeight: "500",
                    }}
                  >
                    GPT-4
                  </div>
                  <img
                    style={{
                      height: "11px",
                      width: "11px",
                      position: "relative",
                      display: "none",
                    }}
                    alt=""
                    src="/line-roundedcommand.svg"
                  />
                </div>
              </div>
              <div
                style={{
                  height: "40px",
                  width: "306px",
                  borderRadius: "8px",
                  backgroundColor: "#fff",
                  boxShadow: "0px 1px 3px rgba(25, 33, 61, 0.1)",
                  border: "1px solid #f0f2f5",
                  boxSizing: "border-box",
                  display: "none",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "6px 6px 6px 12px",
                  minHeight: "39px",
                  gap: "-35.33px",
                  fontSize: "12px",
                  color: "#666f8d",
                }}
              >
                <div
                  style={{
                    height: "16px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "4px",
                    zIndex: "1",
                  }}
                >
                  <img
                    style={{
                      height: "13px",
                      width: "13px",
                      position: "relative",
                    }}
                    alt=""
                    src="/line-roundedsearch.svg"
                  />
                  <div
                    style={{
                      alignSelf: "stretch",
                      position: "relative",
                      lineHeight: "130%",
                    }}
                  >
                    Search for chats...
                  </div>
                </div>
                <img
                  style={{
                    height: "12px",
                    width: "12px",
                    position: "relative",
                    display: "none",
                    zIndex: "2",
                  }}
                  alt=""
                  src="/line-roundedsearch.svg"
                />
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
                    zIndex: "3",
                    color: "#fff",
                  }}
                >
                  <img
                    style={{
                      height: "12px",
                      width: "12px",
                      position: "relative",
                      display: "none",
                    }}
                    alt=""
                    src="/line-roundedsearch.svg"
                  />
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
                  <img
                    style={{
                      height: "10px",
                      width: "10px",
                      position: "relative",
                    }}
                    alt=""
                    src="/line-roundedarrow-rigth.svg"
                  />
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    borderRadius: "4px",
                    backgroundColor: "#f7f8fa",
                    boxShadow: "0px 1px 3px rgba(25, 33, 61, 0.1)",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "6px",
                    gap: "4px",
                    zIndex: "4",
                    textAlign: "center",
                    color: "#19213d",
                  }}
                >
                  <img
                    style={{
                      height: "11px",
                      width: "11px",
                      position: "relative",
                    }}
                    alt=""
                    src="/line-roundedcommand.svg"
                  />
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
                  <img
                    style={{
                      height: "11px",
                      width: "11px",
                      position: "relative",
                      display: "none",
                    }}
                    alt=""
                    src="/line-roundedcommand.svg"
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                height: "32px",
                width: "235px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                textAlign: "center",
                fontSize: "12px",
              }}
            >
              <div
                style={{
                  height: "34px",
                  borderRadius: "8px",
                  backgroundColor: "#f7f8fa",
                  boxShadow: "0px 1px 3px rgba(25, 33, 61, 0.1)",
                  border: "1px solid #f0f2f5",
                  boxSizing: "border-box",
                  display: "none",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "8px 12px",
                  gap: "4px",
                }}
              >
                <img
                  style={{
                    height: "12px",
                    width: "12px",
                    position: "relative",
                  }}
                  alt=""
                  src="/line-roundedsettings-1.svg"
                />
                <div
                  style={{
                    position: "relative",
                    lineHeight: "130%",
                    fontWeight: "500",
                  }}
                >
                  Chat settings
                </div>
                <img
                  style={{
                    height: "10px",
                    width: "10px",
                    position: "relative",
                    display: "none",
                  }}
                  alt=""
                  src="/line-roundedarrow-rigth.svg"
                />
              </div>
              <div
                style={{
                  flex: "0.7087",
                  borderRadius: "8px",
                  background:
                    "linear-gradient(180deg, #2b7afb, #2174fd, #213bfd)",
                  boxShadow:
                    "0px 2px 5px rgba(20, 88, 201, 0.17), 0px -2px 0.3px rgba(14, 56, 125, 0.18) inset, 0px 2px 1px rgba(255, 255, 255, 0.22) inset",
                  border: "1px solid #174bd2",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  padding: "8px 13px 8px 15px",
                  gap: "4px",
                  color: "#fff",
                }}
              >
                <img
                  style={{
                    height: "12px",
                    width: "12px",
                    position: "relative",
                  }}
                  alt=""
                  src="/line-roundedplus-1.svg"
                />
                <div
                  style={{
                    position: "relative",
                    lineHeight: "130%",
                    fontWeight: "500",
                  }}
                >
                  New chat
                </div>
                <img
                  style={{
                    height: "10px",
                    width: "10px",
                    position: "relative",
                    display: "none",
                  }}
                  alt=""
                  src="/line-roundedarrow-rigth.svg"
                />
              </div>
              <div
                style={{
                  display: "none",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "8px",
                  textAlign: "left",
                  fontSize: "14px",
                }}
              >
                <img
                  style={{
                    height: "32px",
                    width: "32px",
                    position: "relative",
                    borderRadius: "200px",
                    overflow: "hidden",
                    flexShrink: "0",
                  }}
                  alt=""
                  src="/circle-avatar.svg"
                />
                <div
                  style={{
                    height: "18px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "2px",
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
                    Name
                  </div>
                  <img
                    style={{
                      height: "16px",
                      width: "16px",
                      position: "relative",
                    }}
                    alt=""
                    src="/line-roundedchevron-down.svg"
                  />
                </div>
              </div>
              <div
                style={{
                  height: "34px",
                  width: "1.5px",
                  position: "relative",
                  borderRight: "1.5px solid #f0f2f5",
                  boxSizing: "border-box",
                }}
              />
              <div
                style={{
                  flex: "1",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "12px",
                }}
              >
                <img
                  style={{
                    height: "16px",
                    width: "16px",
                    position: "relative",
                    minHeight: "16px",
                  }}
                  loading="eager"
                  alt=""
                  src="/line-roundedsettings.svg"
                />
                <img
                  style={{
                    height: "16px",
                    width: "16px",
                    position: "relative",
                    minHeight: "16px",
                  }}
                  loading="eager"
                  alt=""
                  src="/line-roundedtrash.svg"
                />
                <img
                  style={{
                    height: "16px",
                    width: "16px",
                    position: "relative",
                    minHeight: "16px",
                  }}
                  loading="eager"
                  alt=""
                  src="/line-roundedarchive.svg"
                />
                <img
                  style={{
                    height: "16px",
                    width: "16px",
                    position: "relative",
                    minHeight: "16px",
                  }}
                  alt=""
                  src="/line-roundedsidebar-right.svg"
                />
              </div>
            </div>
          </div>
          <div
            style={{
              alignSelf: "stretch",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "0px 0px 32px",
              boxSizing: "border-box",
              position: "relative",
              maxWidth: "100%",
              fontSize: "14px",
              color: "#19213c",
            }}
          >
            <div
              style={{
                width: "1064.9px",
                height: "1064.9px",
                position: "absolute",
                margin: "0",
                right: "-210.1px",
                bottom: "-901.3px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: "0",
              }}
            >
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  position: "absolute",
                  left: "0px",
                  top: "0px",
                  transform: "scale(1.774)",
                }}
                alt=""
                src="/background-chat.svg"
              />
            </div>
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "0px 20px",
                boxSizing: "border-box",
                gap: "259px",
                maxWidth: "100%",
                zIndex: "1",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "40px",
                  maxWidth: "100%",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "16px",
                    fontSize: "12px",
                    color: "#666f8d",
                  }}
                >
                  <div
                    style={{
                      height: "1px",
                      flex: "1",
                      position: "relative",
                      borderTop: "1px solid #f0f2f5",
                      boxSizing: "border-box",
                    }}
                  />
                  <div
                    style={{
                      position: "relative",
                      lineHeight: "130%",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Today 4:32 PM
                  </div>
                  <div
                    style={{
                      height: "1px",
                      flex: "1",
                      position: "relative",
                      borderTop: "1px solid #f0f2f5",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "12px",
                    maxWidth: "100%",
                  }}
                >
                  <div
                    style={{
                      height: "24px",
                      width: "24px",
                      borderRadius: "200px",
                      boxShadow: "0px -2px 4px rgba(35, 136, 255, 0.08) inset",
                      overflow: "hidden",
                      flexShrink: "0",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      style={{
                        width: "24px",
                        height: "24px",
                        position: "relative",
                        overflow: "hidden",
                        flexShrink: "0",
                        objectFit: "cover",
                      }}
                      loading="eager"
                      alt=""
                      src="/avatar01-1@2x.png"
                    />
                  </div>
                  <div
                    style={{
                      flex: "1",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "16px",
                      minWidth: "368px",
                      maxWidth: "100%",
                    }}
                  >
                    <div
                      style={{
                        flex: "1",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: "8px",
                        maxWidth: "100%",
                      }}
                    >
                      <div
                        style={{
                          alignSelf: "stretch",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          gap: "12px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            gap: "10px",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              lineHeight: "130%",
                              fontWeight: "500",
                            }}
                          >
                            Mauro Sicard
                          </div>
                          <div
                            style={{
                              height: "17.3px",
                              width: "1px",
                              position: "relative",
                              borderRight: "1px solid #f0f2f5",
                              boxSizing: "border-box",
                            }}
                          />
                          <div
                            style={{
                              position: "relative",
                              fontSize: "12px",
                              lineHeight: "130%",
                              fontWeight: "500",
                              color: "#666f8d",
                              whiteSpace: "nowrap",
                            }}
                          >
                            4:32 PM
                          </div>
                        </div>
                        <div
                          style={{
                            display: "none",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            gap: "16px",
                          }}
                        >
                          <img
                            style={{
                              height: "14px",
                              width: "14px",
                              position: "relative",
                              minHeight: "14px",
                            }}
                            alt=""
                            src="/line-roundedpen.svg"
                          />
                          <img
                            style={{
                              height: "14px",
                              width: "14px",
                              position: "relative",
                              minHeight: "14px",
                            }}
                            alt=""
                            src="/line-roundedbook-1.svg"
                          />
                          <img
                            style={{
                              height: "14px",
                              width: "14px",
                              position: "relative",
                              minHeight: "14px",
                            }}
                            alt=""
                            src="/line-roundeddots.svg"
                          />
                        </div>
                      </div>
                      <div
                        style={{
                          alignSelf: "stretch",
                          position: "relative",
                          lineHeight: "150%",
                          color: "#666f8d",
                        }}
                      >
                        Lorem ipsum dolor sit amet consectetur tincidunt
                        bibendum gravida phasellus sed dignissim id tempus
                        ridiculus consectur dolor sit amet
                      </div>
                    </div>
                    <div
                      style={{
                        display: "none",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        maxWidth: "100%",
                        textAlign: "center",
                        color: "#666f8d",
                      }}
                    >
                      <div
                        style={{
                          width: "504px",
                          borderRadius: "8px",
                          backgroundColor: "#fff",
                          boxShadow: "0px 2px 4px rgba(25, 33, 61, 0.08)",
                          border: "1px solid #f0f2f5",
                          boxSizing: "border-box",
                          overflow: "hidden",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "20px",
                          gap: "20px",
                          maxWidth: "100%",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            gap: "8px",
                          }}
                        >
                          <img
                            style={{
                              height: "20px",
                              width: "20px",
                              position: "relative",
                            }}
                            alt=""
                            src="/filledplay.svg"
                          />
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "flex-start",
                              gap: "1.5px",
                            }}
                          >
                            <div
                              style={{
                                height: "30.9px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#2388ff",
                              }}
                            />
                            <div
                              style={{
                                height: "12.7px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#2388ff",
                              }}
                            />
                            <div
                              style={{
                                height: "6.2px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#2388ff",
                              }}
                            />
                            <div
                              style={{
                                height: "16.3px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#2388ff",
                              }}
                            />
                            <div
                              style={{
                                height: "8.2px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#2388ff",
                              }}
                            />
                            <div
                              style={{
                                height: "21.6px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#2388ff",
                              }}
                            />
                            <div
                              style={{
                                height: "9.8px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#2388ff",
                              }}
                            />
                            <div
                              style={{
                                height: "29.8px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#2388ff",
                              }}
                            />
                            <div
                              style={{
                                height: "25.3px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#2388ff",
                              }}
                            />
                            <div
                              style={{
                                height: "14.9px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#2388ff",
                              }}
                            />
                            <div
                              style={{
                                height: "20px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#2388ff",
                              }}
                            />
                            <div
                              style={{
                                height: "7.9px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#2388ff",
                              }}
                            />
                            <div
                              style={{
                                height: "16.4px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#2388ff",
                              }}
                            />
                            <div
                              style={{
                                height: "9.7px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#2388ff",
                              }}
                            />
                            <div
                              style={{
                                height: "10.5px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#2388ff",
                              }}
                            />
                            <div
                              style={{
                                height: "16.2px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#2388ff",
                              }}
                            />
                            <div
                              style={{
                                height: "3px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#2388ff",
                              }}
                            />
                            <div
                              style={{
                                height: "3px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#2388ff",
                              }}
                            />
                            <div
                              style={{
                                height: "4.2px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#2388ff",
                              }}
                            />
                            <div
                              style={{
                                height: "3.6px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#2388ff",
                              }}
                            />
                            <div
                              style={{
                                height: "3px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#2388ff",
                              }}
                            />
                            <div
                              style={{
                                height: "4.7px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#2388ff",
                              }}
                            />
                            <div
                              style={{
                                height: "15px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#2388ff",
                              }}
                            />
                            <div
                              style={{
                                height: "22.1px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#2388ff",
                              }}
                            />
                            <div
                              style={{
                                height: "3px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#2388ff",
                              }}
                            />
                            <div
                              style={{
                                height: "14.7px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#2388ff",
                              }}
                            />
                            <div
                              style={{
                                height: "26.9px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#2388ff",
                              }}
                            />
                            <div
                              style={{
                                height: "15px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#2388ff",
                              }}
                            />
                            <div
                              style={{
                                height: "19px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#2388ff",
                              }}
                            />
                            <div
                              style={{
                                height: "12.3px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#2388ff",
                              }}
                            />
                            <div
                              style={{
                                height: "21.8px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#8dc1ff",
                                opacity: "0.3",
                              }}
                            />
                            <div
                              style={{
                                height: "8.9px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#8dc1ff",
                                opacity: "0.3",
                              }}
                            />
                            <div
                              style={{
                                height: "15px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#8dc1ff",
                                opacity: "0.3",
                              }}
                            />
                            <div
                              style={{
                                height: "20.9px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#8dc1ff",
                                opacity: "0.3",
                              }}
                            />
                            <div
                              style={{
                                height: "11px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#8dc1ff",
                                opacity: "0.3",
                              }}
                            />
                            <div
                              style={{
                                height: "13.7px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#8dc1ff",
                                opacity: "0.3",
                              }}
                            />
                            <div
                              style={{
                                height: "5.9px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#8dc1ff",
                                opacity: "0.3",
                              }}
                            />
                            <div
                              style={{
                                height: "18.1px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#8dc1ff",
                                opacity: "0.3",
                              }}
                            />
                            <div
                              style={{
                                height: "8.4px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#8dc1ff",
                                opacity: "0.3",
                              }}
                            />
                            <div
                              style={{
                                height: "11px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#8dc1ff",
                                opacity: "0.3",
                              }}
                            />
                            <div
                              style={{
                                height: "21.8px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#8dc1ff",
                                opacity: "0.3",
                              }}
                            />
                            <div
                              style={{
                                height: "30.7px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#8dc1ff",
                                opacity: "0.3",
                              }}
                            />
                            <div
                              style={{
                                height: "16.8px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#8dc1ff",
                                opacity: "0.3",
                              }}
                            />
                            <div
                              style={{
                                height: "8.4px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#8dc1ff",
                                opacity: "0.3",
                              }}
                            />
                            <div
                              style={{
                                height: "18px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#8dc1ff",
                                opacity: "0.3",
                              }}
                            />
                            <div
                              style={{
                                height: "28.6px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#8dc1ff",
                                opacity: "0.3",
                              }}
                            />
                            <div
                              style={{
                                height: "13.2px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#8dc1ff",
                                opacity: "0.3",
                              }}
                            />
                            <div
                              style={{
                                height: "18.6px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#8dc1ff",
                                opacity: "0.3",
                              }}
                            />
                            <div
                              style={{
                                height: "10.5px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#8dc1ff",
                                opacity: "0.3",
                              }}
                            />
                            <div
                              style={{
                                height: "20.3px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#8dc1ff",
                                opacity: "0.3",
                              }}
                            />
                            <div
                              style={{
                                height: "25.6px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#8dc1ff",
                                opacity: "0.3",
                              }}
                            />
                            <div
                              style={{
                                height: "13.5px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#8dc1ff",
                                opacity: "0.3",
                              }}
                            />
                            <div
                              style={{
                                height: "8.3px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#8dc1ff",
                                opacity: "0.3",
                              }}
                            />
                            <div
                              style={{
                                height: "3px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#8dc1ff",
                                opacity: "0.3",
                              }}
                            />
                            <div
                              style={{
                                height: "7.4px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#8dc1ff",
                                opacity: "0.3",
                              }}
                            />
                            <div
                              style={{
                                height: "12.5px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#8dc1ff",
                                opacity: "0.3",
                              }}
                            />
                            <div
                              style={{
                                height: "18.3px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#8dc1ff",
                                opacity: "0.3",
                              }}
                            />
                            <div
                              style={{
                                height: "6.8px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#8dc1ff",
                                opacity: "0.3",
                              }}
                            />
                            <div
                              style={{
                                height: "15.8px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#8dc1ff",
                                opacity: "0.3",
                              }}
                            />
                            <div
                              style={{
                                height: "21.7px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#8dc1ff",
                                opacity: "0.3",
                              }}
                            />
                            <div
                              style={{
                                height: "12.4px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#8dc1ff",
                                opacity: "0.3",
                              }}
                            />
                            <div
                              style={{
                                height: "19.3px",
                                width: "3px",
                                position: "relative",
                                borderRadius: "200px",
                                backgroundColor: "#8dc1ff",
                                opacity: "0.3",
                              }}
                            />
                          </div>
                        </div>
                        <div
                          style={{
                            height: "18px",
                            position: "relative",
                            lineHeight: "130%",
                            fontWeight: "500",
                            display: "inline-block",
                            whiteSpace: "nowrap",
                          }}
                        >
                          02:23
                        </div>
                      </div>
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
                    boxSizing: "border-box",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    padding: "24px 25px 24px 23px",
                    gap: "12px",
                    maxWidth: "100%",
                  }}
                >
                  <div
                    style={{
                      height: "24px",
                      width: "24px",
                      borderRadius: "200px",
                      boxShadow: "0px -2px 4px rgba(35, 136, 255, 0.08) inset",
                      overflow: "hidden",
                      flexShrink: "0",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      style={{
                        width: "24px",
                        height: "24px",
                        position: "relative",
                        overflow: "hidden",
                        flexShrink: "0",
                        objectFit: "cover",
                      }}
                      loading="eager"
                      alt=""
                      src="/avatar02@2x.png"
                    />
                  </div>
                  <div
                    style={{
                      flex: "1",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: "16px",
                      minWidth: "337px",
                      maxWidth: "100%",
                    }}
                  >
                    <div
                      style={{
                        alignSelf: "stretch",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: "8px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          gap: "12px",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            lineHeight: "130%",
                            fontWeight: "500",
                          }}
                        >
                          LanguageGUI
                        </div>
                        <div
                          style={{
                            height: "17.3px",
                            width: "1px",
                            position: "relative",
                            borderRight: "1px solid #f0f2f5",
                            boxSizing: "border-box",
                          }}
                        />
                        <div
                          style={{
                            position: "relative",
                            fontSize: "12px",
                            lineHeight: "130%",
                            fontWeight: "500",
                            color: "#666f8d",
                            whiteSpace: "nowrap",
                          }}
                        >
                          4:33 PM
                        </div>
                      </div>
                      <div
                        style={{
                          alignSelf: "stretch",
                          position: "relative",
                          lineHeight: "150%",
                          color: "#666f8d",
                        }}
                      >
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua ut enim ad minim veniam quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ea commodo
                        consequat conser dolor amer conserlormer
                      </div>
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        display: "none",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        maxWidth: "100%",
                        textAlign: "right",
                        color: "#666f8d",
                      }}
                    >
                      <div
                        style={{
                          alignSelf: "stretch",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          gap: "24px",
                          maxWidth: "100%",
                        }}
                      >
                        <div
                          style={{
                            alignSelf: "stretch",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            gap: "8px",
                            maxWidth: "100%",
                          }}
                        >
                          <div
                            style={{
                              alignSelf: "stretch",
                              borderRadius: "8px",
                              backgroundColor: "#fff",
                              border: "1px solid #e3e6ea",
                              overflow: "hidden",
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "flex-start",
                              padding: "12px 16px 12px 24px",
                              position: "relative",
                              gap: "6px",
                            }}
                          >
                            <div
                              style={{
                                height: "18px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                zIndex: "0",
                              }}
                            >
                              <div
                                style={{
                                  alignSelf: "stretch",
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "center",
                                  justifyContent: "flex-start",
                                  gap: "6px",
                                }}
                              >
                                <div
                                  style={{
                                    height: "14px",
                                    width: "14px",
                                    position: "relative",
                                    borderRadius: "4px",
                                    backgroundColor: "#fff",
                                    boxShadow:
                                      "0px 1px 3px rgba(25, 33, 61, 0.1)",
                                    border: "1px solid #e3e6ea",
                                    boxSizing: "border-box",
                                    overflow: "hidden",
                                    flexShrink: "0",
                                  }}
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      height: "100%",
                                      width: "100%",
                                      top: "0%",
                                      right: "0%",
                                      bottom: "0%",
                                      left: "0%",
                                      filter:
                                        "drop-shadow(0px 1px 3px rgba(25, 33, 61, 0.1))",
                                    }}
                                  />
                                </div>
                                <div
                                  style={{
                                    alignSelf: "stretch",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                    gap: "6px",
                                  }}
                                >
                                  <div
                                    style={{
                                      alignSelf: "stretch",
                                      width: "16px",
                                      position: "relative",
                                      lineHeight: "130%",
                                      fontWeight: "500",
                                      display: "none",
                                      flexShrink: "0",
                                    }}
                                  >
                                    1.
                                  </div>
                                  <div
                                    style={{
                                      height: "4px",
                                      width: "4px",
                                      position: "relative",
                                      borderRadius: "50%",
                                      backgroundColor: "#bac1cc",
                                      display: "none",
                                    }}
                                  />
                                  <div
                                    style={{
                                      alignSelf: "stretch",
                                      position: "relative",
                                      lineHeight: "130%",
                                      fontWeight: "500",
                                      textAlign: "left",
                                    }}
                                  >
                                    Lorem ipsum dolor sit amet consectur
                                  </div>
                                </div>
                              </div>
                            </div>
                            <img
                              style={{
                                height: "22.86%",
                                width: "5.9px",
                                position: "absolute",
                                margin: "0",
                                top: "38.57%",
                                bottom: "38.57%",
                                left: "11.5px",
                                maxHeight: "100%",
                                display: "none",
                                zIndex: "1",
                              }}
                              alt=""
                              src="/drag-icon.svg"
                            />
                          </div>
                          <div
                            style={{
                              alignSelf: "stretch",
                              borderRadius: "8px",
                              backgroundColor: "#fff",
                              boxShadow: "0px 4px 8px rgba(77, 145, 225, 0.1)",
                              border: "1px solid #2388ff",
                              boxSizing: "border-box",
                              overflow: "hidden",
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "flex-start",
                              padding: "12px 16px 12px 24px",
                              position: "relative",
                              gap: "6px",
                              maxWidth: "100%",
                            }}
                          >
                            <div
                              style={{
                                height: "18px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                maxWidth: "100%",
                                zIndex: "0",
                              }}
                            >
                              <div
                                style={{
                                  alignSelf: "stretch",
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "center",
                                  justifyContent: "flex-start",
                                  gap: "6px",
                                  maxWidth: "100%",
                                }}
                              >
                                <div
                                  style={{
                                    height: "14px",
                                    width: "14px",
                                    position: "relative",
                                    borderRadius: "4px",
                                    backgroundColor: "#fff",
                                    boxShadow:
                                      "0px 1px 3px rgba(25, 33, 61, 0.1)",
                                    border: "1px solid #e3e6ea",
                                    boxSizing: "border-box",
                                    overflow: "hidden",
                                    flexShrink: "0",
                                  }}
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      height: "100%",
                                      width: "100%",
                                      top: "0%",
                                      right: "0%",
                                      bottom: "0%",
                                      left: "0%",
                                      filter:
                                        "drop-shadow(0px 1px 3px rgba(25, 33, 61, 0.1))",
                                    }}
                                  />
                                </div>
                                <div
                                  style={{
                                    alignSelf: "stretch",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                    gap: "6px",
                                  }}
                                >
                                  <div
                                    style={{
                                      alignSelf: "stretch",
                                      width: "16px",
                                      position: "relative",
                                      lineHeight: "130%",
                                      fontWeight: "500",
                                      display: "none",
                                      flexShrink: "0",
                                    }}
                                  >
                                    1.
                                  </div>
                                  <div
                                    style={{
                                      height: "4px",
                                      width: "4px",
                                      position: "relative",
                                      borderRadius: "50%",
                                      backgroundColor: "#353e5c",
                                      display: "none",
                                    }}
                                  />
                                  <div
                                    style={{
                                      alignSelf: "stretch",
                                      position: "relative",
                                      lineHeight: "130%",
                                      fontWeight: "500",
                                      color: "#19213c",
                                      textAlign: "left",
                                    }}
                                  >
                                    Duis aute irure dolor in reprehenderit in
                                    voluptat
                                  </div>
                                </div>
                              </div>
                            </div>
                            <img
                              style={{
                                height: "22.86%",
                                width: "5.9px",
                                position: "absolute",
                                margin: "0",
                                top: "38.57%",
                                bottom: "38.57%",
                                left: "11.5px",
                                maxHeight: "100%",
                                zIndex: "1",
                              }}
                              alt=""
                              src="/drag-icon.svg"
                            />
                          </div>
                          <div
                            style={{
                              alignSelf: "stretch",
                              borderRadius: "8px",
                              backgroundColor: "#fff",
                              border: "1px solid #e3e6ea",
                              overflow: "hidden",
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "flex-start",
                              padding: "12px 16px 12px 24px",
                              position: "relative",
                              gap: "6px",
                            }}
                          >
                            <div
                              style={{
                                height: "18px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                zIndex: "0",
                              }}
                            >
                              <div
                                style={{
                                  alignSelf: "stretch",
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "center",
                                  justifyContent: "flex-start",
                                  gap: "6px",
                                }}
                              >
                                <div
                                  style={{
                                    height: "14px",
                                    width: "14px",
                                    position: "relative",
                                    borderRadius: "4px",
                                    backgroundColor: "#fff",
                                    boxShadow:
                                      "0px 1px 3px rgba(25, 33, 61, 0.1)",
                                    border: "1px solid #e3e6ea",
                                    boxSizing: "border-box",
                                    overflow: "hidden",
                                    flexShrink: "0",
                                  }}
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      height: "100%",
                                      width: "100%",
                                      top: "0%",
                                      right: "0%",
                                      bottom: "0%",
                                      left: "0%",
                                      filter:
                                        "drop-shadow(0px 1px 3px rgba(25, 33, 61, 0.1))",
                                    }}
                                  />
                                </div>
                                <div
                                  style={{
                                    alignSelf: "stretch",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                    gap: "6px",
                                  }}
                                >
                                  <div
                                    style={{
                                      alignSelf: "stretch",
                                      width: "16px",
                                      position: "relative",
                                      lineHeight: "130%",
                                      fontWeight: "500",
                                      display: "none",
                                      flexShrink: "0",
                                    }}
                                  >
                                    1.
                                  </div>
                                  <div
                                    style={{
                                      height: "4px",
                                      width: "4px",
                                      position: "relative",
                                      borderRadius: "50%",
                                      backgroundColor: "#bac1cc",
                                      display: "none",
                                    }}
                                  />
                                  <div
                                    style={{
                                      alignSelf: "stretch",
                                      position: "relative",
                                      lineHeight: "130%",
                                      fontWeight: "500",
                                      textAlign: "left",
                                    }}
                                  >
                                    Esse cillum dolore eu fugiat
                                  </div>
                                </div>
                              </div>
                            </div>
                            <img
                              style={{
                                height: "22.86%",
                                width: "5.9px",
                                position: "absolute",
                                margin: "0",
                                top: "38.57%",
                                bottom: "38.57%",
                                left: "11.5px",
                                maxHeight: "100%",
                                display: "none",
                                zIndex: "1",
                              }}
                              alt=""
                              src="/drag-icon.svg"
                            />
                          </div>
                          <div
                            style={{
                              alignSelf: "stretch",
                              borderRadius: "8px",
                              backgroundColor: "#fff",
                              border: "1px solid #e3e6ea",
                              boxSizing: "border-box",
                              overflow: "hidden",
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "flex-start",
                              padding: "12px 37px 12px 24px",
                              position: "relative",
                              gap: "6px",
                              maxWidth: "100%",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                maxWidth: "100%",
                                zIndex: "0",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "center",
                                  justifyContent: "flex-start",
                                  gap: "6px",
                                  maxWidth: "100%",
                                }}
                              >
                                <div
                                  style={{
                                    height: "14px",
                                    width: "14px",
                                    position: "relative",
                                    borderRadius: "4px",
                                    backgroundColor: "#fff",
                                    boxShadow:
                                      "0px 1px 3px rgba(25, 33, 61, 0.1)",
                                    border: "1px solid #e3e6ea",
                                    boxSizing: "border-box",
                                    overflow: "hidden",
                                    flexShrink: "0",
                                  }}
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      height: "100%",
                                      width: "100%",
                                      top: "0%",
                                      right: "0%",
                                      bottom: "0%",
                                      left: "0%",
                                      filter:
                                        "drop-shadow(0px 1px 3px rgba(25, 33, 61, 0.1))",
                                    }}
                                  />
                                </div>
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                    gap: "6px",
                                    maxWidth: "calc(100% - 20px)",
                                  }}
                                >
                                  <div
                                    style={{
                                      alignSelf: "stretch",
                                      width: "16px",
                                      position: "relative",
                                      lineHeight: "130%",
                                      fontWeight: "500",
                                      display: "none",
                                      flexShrink: "0",
                                    }}
                                  >
                                    1.
                                  </div>
                                  <div
                                    style={{
                                      height: "4px",
                                      width: "4px",
                                      position: "relative",
                                      borderRadius: "50%",
                                      backgroundColor: "#bac1cc",
                                      display: "none",
                                    }}
                                  />
                                  <div
                                    style={{
                                      height: "18px",
                                      position: "relative",
                                      lineHeight: "130%",
                                      fontWeight: "500",
                                      textAlign: "left",
                                      display: "inline-block",
                                      maxWidth: "100%",
                                    }}
                                  >
                                    Sunt in culpa qui officia deserunt mollit
                                    anim id est labor
                                  </div>
                                </div>
                              </div>
                            </div>
                            <img
                              style={{
                                height: "22.86%",
                                width: "5.9px",
                                position: "absolute",
                                margin: "0",
                                top: "38.57%",
                                bottom: "38.57%",
                                left: "11.5px",
                                maxHeight: "100%",
                                display: "none",
                                zIndex: "1",
                              }}
                              alt=""
                              src="/drag-icon.svg"
                            />
                          </div>
                          <div
                            style={{
                              alignSelf: "stretch",
                              borderRadius: "8px",
                              backgroundColor: "#fff",
                              border: "1px solid #e3e6ea",
                              boxSizing: "border-box",
                              overflow: "hidden",
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "flex-start",
                              padding: "12px 16px 12px 24px",
                              position: "relative",
                              gap: "6px",
                              maxWidth: "100%",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                maxWidth: "100%",
                                zIndex: "0",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "center",
                                  justifyContent: "flex-start",
                                  gap: "6px",
                                  maxWidth: "100%",
                                }}
                              >
                                <div
                                  style={{
                                    height: "14px",
                                    width: "14px",
                                    position: "relative",
                                    borderRadius: "4px",
                                    backgroundColor: "#fff",
                                    boxShadow:
                                      "0px 1px 3px rgba(25, 33, 61, 0.1)",
                                    border: "1px solid #e3e6ea",
                                    boxSizing: "border-box",
                                    overflow: "hidden",
                                    flexShrink: "0",
                                  }}
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      height: "100%",
                                      width: "100%",
                                      top: "0%",
                                      right: "0%",
                                      bottom: "0%",
                                      left: "0%",
                                      filter:
                                        "drop-shadow(0px 1px 3px rgba(25, 33, 61, 0.1))",
                                    }}
                                  />
                                </div>
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                    gap: "6px",
                                    maxWidth: "calc(100% - 20px)",
                                  }}
                                >
                                  <div
                                    style={{
                                      alignSelf: "stretch",
                                      width: "16px",
                                      position: "relative",
                                      lineHeight: "130%",
                                      fontWeight: "500",
                                      display: "none",
                                      flexShrink: "0",
                                    }}
                                  >
                                    1.
                                  </div>
                                  <div
                                    style={{
                                      height: "4px",
                                      width: "4px",
                                      position: "relative",
                                      borderRadius: "50%",
                                      backgroundColor: "#bac1cc",
                                      display: "none",
                                    }}
                                  />
                                  <div
                                    style={{
                                      height: "18px",
                                      position: "relative",
                                      lineHeight: "130%",
                                      fontWeight: "500",
                                      textAlign: "left",
                                      display: "inline-block",
                                      maxWidth: "100%",
                                    }}
                                  >
                                    Cursus risus at ultrices mi quis eleifend
                                    quam adi 
                                  </div>
                                </div>
                              </div>
                            </div>
                            <img
                              style={{
                                height: "22.86%",
                                width: "5.9px",
                                position: "absolute",
                                margin: "0",
                                top: "38.57%",
                                bottom: "38.57%",
                                left: "11.5px",
                                maxHeight: "100%",
                                display: "none",
                                zIndex: "1",
                              }}
                              alt=""
                              src="/drag-icon.svg"
                            />
                          </div>
                        </div>
                        <div
                          style={{
                            width: "82px",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            gap: "6px",
                            textAlign: "left",
                            color: "#19213c",
                          }}
                        >
                          <img
                            style={{
                              height: "16px",
                              width: "16px",
                              position: "relative",
                            }}
                            alt=""
                            src="/icon.svg"
                          />
                          <div
                            style={{
                              height: "18px",
                              flex: "1",
                              position: "relative",
                              lineHeight: "130%",
                              fontWeight: "500",
                              display: "inline-block",
                            }}
                          >
                            Add new
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "20px",
                        textAlign: "center",
                        fontSize: "12px",
                        color: "#19213d",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          gap: "16px",
                        }}
                      >
                        <img
                          style={{
                            height: "14px",
                            width: "14px",
                            position: "relative",
                            minHeight: "14px",
                          }}
                          loading="eager"
                          alt=""
                          src="/line-roundedreload.svg"
                        />
                        <img
                          style={{
                            height: "14px",
                            width: "14px",
                            position: "relative",
                            minHeight: "14px",
                          }}
                          loading="eager"
                          alt=""
                          src="/line-roundedcopy.svg"
                        />
                        <img
                          style={{
                            height: "14px",
                            width: "14px",
                            position: "relative",
                            minHeight: "14px",
                          }}
                          loading="eager"
                          alt=""
                          src="/line-roundedshare-3.svg"
                        />
                        <img
                          style={{
                            height: "14px",
                            width: "14px",
                            position: "relative",
                            minHeight: "14px",
                          }}
                          loading="eager"
                          alt=""
                          src="/line-roundedbookmark.svg"
                        />
                        <img
                          style={{
                            height: "14px",
                            width: "14px",
                            position: "relative",
                            minHeight: "14px",
                          }}
                          loading="eager"
                          alt=""
                          src="/line-roundeddots-1.svg"
                        />
                      </div>
                      <div
                        style={{
                          borderRadius: "4px",
                          backgroundColor: "#f7f8fa",
                          boxShadow: "0px 1px 3px rgba(25, 33, 61, 0.1)",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "6px 2px 6px 6px",
                          gap: "4px",
                        }}
                      >
                        <img
                          style={{
                            height: "11px",
                            width: "11px",
                            position: "relative",
                            display: "none",
                          }}
                          alt=""
                          src="/line-roundedsettings.svg"
                        />
                        <div
                          style={{
                            position: "relative",
                            lineHeight: "130%",
                            fontWeight: "500",
                          }}
                        >
                          50 tokens
                        </div>
                        <img
                          style={{
                            height: "11px",
                            width: "11px",
                            position: "relative",
                            display: "none",
                          }}
                          alt=""
                          src="/line-roundedsettings.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  maxWidth: "100%",
                  textAlign: "center",
                  fontSize: "12px",
                  color: "#666f8d",
                }}
              >
                <div
                  style={{
                    display: "none",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                    padding: "20px 24px 20px 0px",
                    zIndex: "1",
                  }}
                >
                  <div
                    style={{
                      width: "93px",
                      borderRadius: "4px 4px 0px 0px",
                      backgroundColor: "#fff",
                      border: "1px solid #f0f2f5",
                      boxSizing: "border-box",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      padding: "6px 5px 6px 7px",
                      gap: "4px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <img
                      style={{
                        height: "12px",
                        width: "12px",
                        position: "relative",
                      }}
                      alt=""
                      src="/line-roundedlightning.svg"
                    />
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
                    flex: "1",
                    borderRadius: "16px",
                    backgroundColor: "#fff",
                    boxShadow: "0px 2px 4px rgba(25, 33, 61, 0.08)",
                    border: "1px solid #f0f2f5",
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    padding: "24px 16px 16px",
                    gap: "16px",
                    maxWidth: "100%",
                    textAlign: "left",
                    fontSize: "14px",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      height: "68px",
                      position: "relative",
                      lineHeight: "150%",
                      display: "inline-block",
                      flexShrink: "0",
                    }}
                  >
                    How can I help you?
                  </div>
                  <div
                    style={{
                      alignSelf: "stretch",
                      height: "1px",
                      position: "relative",
                      borderTop: "1px solid #f0f2f5",
                      boxSizing: "border-box",
                    }}
                  />
                  <div
                    style={{
                      alignSelf: "stretch",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0px 7px",
                      gap: "20px",
                      textAlign: "center",
                      fontSize: "12px",
                      color: "#19213d",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: "18px",
                      }}
                    >
                      <div
                        style={{
                          width: "83px",
                          borderRadius: "8px",
                          backgroundColor: "#f7f8fa",
                          boxShadow: "0px 1px 3px rgba(25, 33, 61, 0.1)",
                          border: "1px solid #f0f2f5",
                          boxSizing: "border-box",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "8px 11px",
                          gap: "4px",
                        }}
                      >
                        <img
                          style={{
                            height: "12px",
                            width: "12px",
                            position: "relative",
                          }}
                          alt=""
                          src="/line-roundedbook-2.svg"
                        />
                        <div
                          style={{
                            position: "relative",
                            lineHeight: "130%",
                            fontWeight: "500",
                          }}
                        >
                          Library
                        </div>
                        <img
                          style={{
                            height: "10px",
                            width: "10px",
                            position: "relative",
                            display: "none",
                          }}
                          alt=""
                          src="/line-roundedarrow-rigth.svg"
                        />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-end",
                          gap: "12px",
                        }}
                      >
                        <img
                          style={{
                            height: "16px",
                            width: "16px",
                            position: "relative",
                            minHeight: "16px",
                          }}
                          loading="eager"
                          alt=""
                          src="/line-roundedpaperclip.svg"
                        />
                        <img
                          style={{
                            height: "16px",
                            width: "16px",
                            position: "relative",
                            minHeight: "16px",
                          }}
                          loading="eager"
                          alt=""
                          src="/line-roundedphoto.svg"
                        />
                        <img
                          style={{
                            height: "16px",
                            width: "16px",
                            position: "relative",
                            minHeight: "16px",
                          }}
                          loading="eager"
                          alt=""
                          src="/line-roundedmicrophone.svg"
                        />
                        <img
                          style={{
                            height: "16px",
                            width: "16px",
                            position: "relative",
                            minHeight: "16px",
                          }}
                          loading="eager"
                          alt=""
                          src="/line-roundedgrid-1.svg"
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        gap: "16px",
                        color: "#fff",
                      }}
                    >
                      <div
                        style={{
                          height: "37px",
                          width: "76px",
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
                          padding: "8px 10px",
                          gap: "8px",
                        }}
                      >
                        <img
                          style={{
                            height: "18px",
                            width: "18px",
                            position: "relative",
                          }}
                          alt=""
                          src="/filledsend.svg"
                        />
                        <div
                          style={{
                            height: "22.4px",
                            width: "1px",
                            position: "relative",
                            borderRight: "1px solid #fff",
                            boxSizing: "border-box",
                            opacity: "0.2",
                          }}
                        />
                        <img
                          style={{
                            height: "18px",
                            width: "18px",
                            position: "relative",
                          }}
                          alt=""
                          src="/line-roundedchevron-down-1.svg"
                        />
                      </div>
                      <div
                        style={{
                          borderRadius: "8px",
                          background:
                            "linear-gradient(180deg, #2b7afb, #2174fd, #213bfd)",
                          boxShadow:
                            "0px 2px 5px rgba(20, 88, 201, 0.17), 0px -2px 0.3px rgba(14, 56, 125, 0.18) inset, 0px 2px 1px rgba(255, 255, 255, 0.22) inset",
                          border: "1px solid #174bd2",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "8px 13px",
                          gap: "4px",
                        }}
                      >
                        <img
                          style={{
                            height: "12px",
                            width: "12px",
                            position: "relative",
                          }}
                          alt=""
                          src="/filledsend-1.svg"
                        />
                        <div
                          style={{
                            position: "relative",
                            lineHeight: "130%",
                            fontWeight: "500",
                          }}
                        >
                          Send message
                        </div>
                        <img
                          style={{
                            height: "10px",
                            width: "10px",
                            position: "relative",
                            display: "none",
                          }}
                          alt=""
                          src="/line-roundedarrow-rigth.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div
          style={{
            width: "372px",
            backgroundColor: "#fff",
            boxShadow: "0px 0px 12.1px rgba(53, 62, 92, 0.07)",
            borderLeft: "1px solid #e3e6ea",
            boxSizing: "border-box",
            overflow: "hidden",
            flexShrink: "0",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "32px 25px 32px 23px",
            gap: "32px",
            minWidth: "372px",
            minHeight: "923px",
            maxWidth: "100%",
          }}
        >
          <TopWrapper />
          <FrameComponent />
        </div>
      </main>
    </div>
  );
};

export default ChatMessageSidebar;
