import React from "react";
import logo from '../assets/google.png'

const SidebarMainItemsWrapper = () => {
    return (
      <nav
        style={{
          margin: "0",
          alignSelf: "stretch",
          flex: "1",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "0px 8px",
          gap: "40px",
          textAlign: "left",
          fontSize: "12px",
          color: "#bac1cc",
          fontFamily: "Inter",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "12px",
            fontSize: "14px",
            color: "#19213d",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0px 1px 0px 0px",
              gap: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "0px 1px 0px 0px",
                gap: "7px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "2px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    lineHeight: "130%",
                    fontWeight: "500",
                  }}
                >
                  <img src={logo} alt="Bharat Tech" />
                </div>
                <img
                  style={{
                    height: "16px",
                    width: "16px",
                    position: "relative",
                    display: "none",
                  }}
                  alt=""
                  src="/line-roundedchevron-down.svg"
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "0px 1px 0px 0px",
                gap: "11px",
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
                src="/line-roundedsidebar-left.svg"
              />
            </div>
          </div>
          <div
            style={{
              alignSelf: "stretch",
              borderRadius: "8px",
              backgroundColor: "#fff",
              boxShadow: "0px 1px 3px rgba(25, 33, 61, 0.1)",
              border: "1px solid #f0f2f5",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "7px 7px 7px 12px",
              minHeight: "39px",
              gap: "20px",
              fontSize: "12px",
              color: "#666f8d",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "0px 1px 0px 0px",
                gap: "3px",
              }}
            >
              <input
                style={{
                  cursor: "pointer",
                  margin: "0",
                  height: "13px",
                  width: "13px",
                  position: "relative",
                }}
                type="radio"
              />
              <div style={{ position: "relative", lineHeight: "130%" }}>
                Search for chats...
              </div>
            </div>
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
                height: "32px",
                borderRadius: "8px",
                background: "linear-gradient(180deg, #2b7afb, #2174fd, #213bfd)",
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
                style={{ height: "10px", width: "10px", position: "relative" }}
                alt=""
                src="/line-roundedarrow-rigth.svg"
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
                justifyContent: "flex-start",
                padding: "6px 7px 6px 6px",
                gap: "4px 3px",
                textAlign: "center",
                color: "#19213d",
              }}
            >
              <img
                style={{ height: "11px", width: "11px", position: "relative" }}
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
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            position: "relative",
            gap: "12px",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              display: "none",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0px 10px",
              gap: "20px",
              zIndex: "0",
            }}
          >
            <div
              style={{
                position: "relative",
                letterSpacing: "0.1em",
                lineHeight: "130%",
                textTransform: "uppercase",
                fontWeight: "500",
              }}
            >
              Sidebar Title
            </div>
            <div
              style={{
                height: "21px",
                borderRadius: "24px",
                backgroundColor: "#fff",
                boxShadow: "0px 1px 3px rgba(25, 33, 61, 0.1)",
                border: "0.8px solid #e3e6ea",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                padding: "3px 4px 2px",
                gap: "4px",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  position: "relative",
                  letterSpacing: "0.1em",
                  lineHeight: "130%",
                  textTransform: "uppercase",
                  fontWeight: "500",
                }}
              >
                Clear
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
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "2px",
              fontSize: "14px",
              color: "#666f8d",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                height: "43px",
                borderRadius: "8px",
                backgroundColor: "#fff",
                boxShadow: "0px 1px 3px rgba(25, 33, 61, 0.1)",
                overflow: "hidden",
                flexShrink: "0",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "8px 10px 8px 12px",
                boxSizing: "border-box",
                gap: "0px",
                rowGap: "20px",
                color: "#19213d",
              }}
            >
              <div
                style={{
                  width: "190px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "8px",
                }}
              >
                <input
                  style={{
                    borderColor: "#ffffff",
                    accentColor: "#ffffff",
                    cursor: "pointer",
                    margin: "0",
                    height: "16px",
                    width: "16px",
                    position: "relative",
                  }}
                  checked={true}
                  type="radio"
                />
                <div
                  style={{ flex: "1", position: "relative", lineHeight: "130%" }}
                >
                  Chats
                </div>
              </div>
              <div
                style={{
                  width: "36px",
                  borderRadius: "4px",
                  backgroundColor: "#f7f8fa",
                  boxShadow: "0px 1px 3px rgba(25, 33, 61, 0.1)",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "6px",
                  boxSizing: "border-box",
                  gap: "4px",
                  textAlign: "center",
                  fontSize: "12px",
                }}
              >
                <img
                  style={{ height: "11px", width: "11px", position: "relative" }}
                  alt=""
                  src="/line-roundedcommand-1.svg"
                />
                <div
                  style={{
                    position: "relative",
                    lineHeight: "130%",
                    fontWeight: "500",
                  }}
                >
                  1
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
                alignSelf: "stretch",
                height: "43px",
                borderRadius: "8px",
                overflow: "hidden",
                flexShrink: "0",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "8px 10px 8px 12px",
                boxSizing: "border-box",
                gap: "0px",
                rowGap: "20px",
              }}
            >
              <div
                style={{
                  width: "190px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "8px",
                }}
              >
                <img
                  style={{ height: "16px", width: "16px", position: "relative" }}
                  loading="eager"
                  alt=""
                  src="/line-roundedbook.svg"
                />
                <div
                  style={{
                    flex: "1",
                    position: "relative",
                    lineHeight: "130%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  Library
                </div>
              </div>
              <div
                style={{
                  height: "29px",
                  width: "37px",
                  borderRadius: "4px",
                  backgroundColor: "#fff",
                  boxShadow: "0px 1px 3px rgba(25, 33, 61, 0.1)",
                  border: "0.5px solid #f0f2f5",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "6px",
                  gap: "4px",
                  textAlign: "center",
                  fontSize: "12px",
                  color: "#19213d",
                }}
              >
                <img
                  style={{ height: "11px", width: "11px", position: "relative" }}
                  alt=""
                  src="/line-roundedcommand-2.svg"
                />
                <div
                  style={{
                    position: "relative",
                    lineHeight: "130%",
                    fontWeight: "500",
                  }}
                >
                  2
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
                alignSelf: "stretch",
                height: "43px",
                borderRadius: "8px",
                overflow: "hidden",
                flexShrink: "0",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "8px 10px 8px 12px",
                boxSizing: "border-box",
                gap: "0px",
                rowGap: "20px",
              }}
            >
              <div
                style={{
                  width: "190px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "8px",
                }}
              >
                <img
                  style={{ height: "16px", width: "16px", position: "relative" }}
                  loading="eager"
                  alt=""
                  src="/line-roundedgrid.svg"
                />
                <div
                  style={{
                    flex: "1",
                    position: "relative",
                    lineHeight: "130%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  Apps
                </div>
              </div>
              <div
                style={{
                  height: "29px",
                  width: "37px",
                  borderRadius: "4px",
                  backgroundColor: "#fff",
                  boxShadow: "0px 1px 3px rgba(25, 33, 61, 0.1)",
                  border: "0.5px solid #f0f2f5",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "6px",
                  gap: "4px",
                  textAlign: "center",
                  fontSize: "12px",
                  color: "#19213d",
                }}
              >
                <img
                  style={{ height: "11px", width: "11px", position: "relative" }}
                  alt=""
                  src="/line-roundedcommand-3.svg"
                />
                <div
                  style={{
                    position: "relative",
                    lineHeight: "130%",
                    fontWeight: "500",
                  }}
                >
                  3
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
                alignSelf: "stretch",
                height: "43px",
                borderRadius: "8px",
                overflow: "hidden",
                flexShrink: "0",
                display: "none",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "8px 10px 8px 12px",
                boxSizing: "border-box",
                gap: "0px",
                rowGap: "20px",
              }}
            >
              <div
                style={{
                  height: "18px",
                  width: "190px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "8px",
                }}
              >
                <img
                  style={{ height: "16px", width: "16px", position: "relative" }}
                  alt=""
                  src="/line-roundedmessage-1.svg"
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    flex: "1",
                    position: "relative",
                    lineHeight: "130%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  Link item
                </div>
              </div>
              <div
                style={{
                  height: "29px",
                  width: "37px",
                  borderRadius: "4px",
                  backgroundColor: "#fff",
                  boxShadow: "0px 1px 3px rgba(25, 33, 61, 0.1)",
                  border: "0.5px solid #f0f2f5",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "6px",
                  gap: "4px",
                  textAlign: "center",
                  fontSize: "12px",
                  color: "#19213d",
                }}
              >
                <img
                  style={{ height: "11px", width: "11px", position: "relative" }}
                  alt=""
                  src="/line-roundedcommand-4.svg"
                />
                <div
                  style={{
                    position: "relative",
                    lineHeight: "130%",
                    fontWeight: "500",
                  }}
                >
                  1
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
                alignSelf: "stretch",
                height: "43px",
                borderRadius: "8px",
                overflow: "hidden",
                flexShrink: "0",
                display: "none",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "8px 10px 8px 12px",
                boxSizing: "border-box",
                gap: "0px",
                rowGap: "20px",
              }}
            >
              <div
                style={{
                  height: "18px",
                  width: "190px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "8px",
                }}
              >
                <img
                  style={{ height: "16px", width: "16px", position: "relative" }}
                  alt=""
                  src="/line-roundedmessage-2.svg"
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    flex: "1",
                    position: "relative",
                    lineHeight: "130%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  Link item
                </div>
              </div>
              <div
                style={{
                  height: "29px",
                  width: "37px",
                  borderRadius: "4px",
                  backgroundColor: "#fff",
                  boxShadow: "0px 1px 3px rgba(25, 33, 61, 0.1)",
                  border: "0.5px solid #f0f2f5",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "6px",
                  gap: "4px",
                  textAlign: "center",
                  fontSize: "12px",
                  color: "#19213d",
                }}
              >
                <img
                  style={{ height: "11px", width: "11px", position: "relative" }}
                  alt=""
                  src="/line-roundedcommand-5.svg"
                />
                <div
                  style={{
                    position: "relative",
                    lineHeight: "130%",
                    fontWeight: "500",
                  }}
                >
                  1
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
                alignSelf: "stretch",
                height: "43px",
                borderRadius: "8px",
                overflow: "hidden",
                flexShrink: "0",
                display: "none",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "8px 10px 8px 12px",
                boxSizing: "border-box",
                gap: "0px",
                rowGap: "20px",
              }}
            >
              <div
                style={{
                  height: "18px",
                  width: "190px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "8px",
                }}
              >
                <img
                  style={{ height: "16px", width: "16px", position: "relative" }}
                  alt=""
                  src="/line-roundedmessage-3.svg"
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    flex: "1",
                    position: "relative",
                    lineHeight: "130%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  Link item
                </div>
              </div>
              <div
                style={{
                  height: "29px",
                  width: "37px",
                  borderRadius: "4px",
                  backgroundColor: "#fff",
                  boxShadow: "0px 1px 3px rgba(25, 33, 61, 0.1)",
                  border: "0.5px solid #f0f2f5",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "6px",
                  gap: "4px",
                  textAlign: "center",
                  fontSize: "12px",
                  color: "#19213d",
                }}
              >
                <img
                  style={{ height: "11px", width: "11px", position: "relative" }}
                  alt=""
                  src="/line-roundedcommand-6.svg"
                />
                <div
                  style={{
                    position: "relative",
                    lineHeight: "130%",
                    fontWeight: "500",
                  }}
                >
                  1
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
          <img
            style={{
              width: "100%",
              height: "calc(100% - 16.1px)",
              position: "absolute",
              margin: "0",
              top: "15.9px",
              right: "-0.2px",
              bottom: "0.2px",
              left: "0.2px",
              maxWidth: "100%",
              overflow: "hidden",
              maxHeight: "100%",
              display: "none",
              zIndex: "2",
            }}
            alt=""
            src="/gradient.svg"
          />
        </div>
        <div
          style={{
            alignSelf: "stretch",
            height: "206px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            position: "relative",
            gap: "12px",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "0px 10px",
            }}
          >
            <div
              style={{
                position: "relative",
                letterSpacing: "0.1em",
                lineHeight: "130%",
                textTransform: "uppercase",
                fontWeight: "500",
              }}
            >
              Pinned
            </div>
            <div
              style={{
                height: "21px",
                borderRadius: "24px",
                backgroundColor: "#fff",
                boxShadow: "0px 1px 3px rgba(25, 33, 61, 0.1)",
                border: "0.8px solid #e3e6ea",
                boxSizing: "border-box",
                display: "none",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                padding: "3px 4px 2px",
                gap: "4px",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  position: "relative",
                  letterSpacing: "0.1em",
                  lineHeight: "130%",
                  textTransform: "uppercase",
                  fontWeight: "500",
                }}
              >
                Clear
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
              alignSelf: "stretch",
              flex: "1",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "2px",
              fontSize: "14px",
              color: "#666f8d",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                flex: "1",
                borderRadius: "8px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "8px 10px 8px 12px",
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
                }}
              >
                <img
                  style={{
                    height: "16px",
                    width: "16px",
                    position: "relative",
                    display: "none",
                  }}
                  alt=""
                  src="/line-roundedmessage.svg"
                />
                <div
                  style={{
                    flex: "1",
                    position: "relative",
                    lineHeight: "130%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  Lorem ipsum dolor sit
                </div>
              </div>
              <div
                style={{
                  height: "29px",
                  width: "37px",
                  borderRadius: "4px",
                  backgroundColor: "#fff",
                  boxShadow: "0px 1px 3px rgba(25, 33, 61, 0.1)",
                  border: "0.5px solid #f0f2f5",
                  boxSizing: "border-box",
                  display: "none",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "6px",
                  gap: "4px",
                  textAlign: "center",
                  fontSize: "12px",
                  color: "#19213d",
                }}
              >
                <img
                  style={{ height: "11px", width: "11px", position: "relative" }}
                  alt=""
                  src="/line-roundedcommand-7.svg"
                />
                <div
                  style={{
                    position: "relative",
                    lineHeight: "130%",
                    fontWeight: "500",
                  }}
                >
                  1
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
                alignSelf: "stretch",
                flex: "1",
                borderRadius: "8px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "8px 10px 8px 12px",
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
                }}
              >
                <img
                  style={{
                    height: "16px",
                    width: "16px",
                    position: "relative",
                    display: "none",
                  }}
                  alt=""
                  src="/line-roundedmessage.svg"
                />
                <div
                  style={{
                    flex: "1",
                    position: "relative",
                    lineHeight: "130%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  Duis aute irure dolor in repre
                </div>
              </div>
              <div
                style={{
                  height: "29px",
                  width: "37px",
                  borderRadius: "4px",
                  backgroundColor: "#fff",
                  boxShadow: "0px 1px 3px rgba(25, 33, 61, 0.1)",
                  border: "0.5px solid #f0f2f5",
                  boxSizing: "border-box",
                  display: "none",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "6px",
                  gap: "4px",
                  textAlign: "center",
                  fontSize: "12px",
                  color: "#19213d",
                }}
              >
                <img
                  style={{ height: "11px", width: "11px", position: "relative" }}
                  alt=""
                  src="/line-roundedcommand-8.svg"
                />
                <div
                  style={{
                    position: "relative",
                    lineHeight: "130%",
                    fontWeight: "500",
                  }}
                >
                  1
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
                alignSelf: "stretch",
                flex: "1",
                borderRadius: "8px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "8px 10px 8px 12px",
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
                }}
              >
                <img
                  style={{
                    height: "16px",
                    width: "16px",
                    position: "relative",
                    display: "none",
                  }}
                  alt=""
                  src="/line-roundedmessage.svg"
                />
                <div
                  style={{
                    flex: "1",
                    position: "relative",
                    lineHeight: "130%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  Eserunt mollit anim id est laborumol
                </div>
              </div>
              <div
                style={{
                  height: "29px",
                  width: "37px",
                  borderRadius: "4px",
                  backgroundColor: "#fff",
                  boxShadow: "0px 1px 3px rgba(25, 33, 61, 0.1)",
                  border: "0.5px solid #f0f2f5",
                  boxSizing: "border-box",
                  display: "none",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "6px",
                  gap: "4px",
                  textAlign: "center",
                  fontSize: "12px",
                  color: "#19213d",
                }}
              >
                <img
                  style={{ height: "11px", width: "11px", position: "relative" }}
                  alt=""
                  src="/line-roundedcommand-9.svg"
                />
                <div
                  style={{
                    position: "relative",
                    lineHeight: "130%",
                    fontWeight: "500",
                  }}
                >
                  1
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
                alignSelf: "stretch",
                flex: "1",
                borderRadius: "8px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "8px 10px 8px 12px",
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
                }}
              >
                <img
                  style={{
                    height: "16px",
                    width: "16px",
                    position: "relative",
                    display: "none",
                  }}
                  alt=""
                  src="/line-roundedmessage.svg"
                />
                <div
                  style={{
                    flex: "1",
                    position: "relative",
                    lineHeight: "130%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  Volutpat diam ut venenatis tellus in
                </div>
              </div>
              <div
                style={{
                  height: "29px",
                  width: "37px",
                  borderRadius: "4px",
                  backgroundColor: "#fff",
                  boxShadow: "0px 1px 3px rgba(25, 33, 61, 0.1)",
                  border: "0.5px solid #f0f2f5",
                  boxSizing: "border-box",
                  display: "none",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "6px",
                  gap: "4px",
                  textAlign: "center",
                  fontSize: "12px",
                  color: "#19213d",
                }}
              >
                <img
                  style={{ height: "11px", width: "11px", position: "relative" }}
                  alt=""
                  src="/line-roundedcommand-10.svg"
                />
                <div
                  style={{
                    position: "relative",
                    lineHeight: "130%",
                    fontWeight: "500",
                  }}
                >
                  1
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
                alignSelf: "stretch",
                height: "43px",
                borderRadius: "8px",
                overflow: "hidden",
                flexShrink: "0",
                display: "none",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "8px 10px 8px 12px",
                boxSizing: "border-box",
                gap: "0px",
                rowGap: "20px",
              }}
            >
              <div
                style={{
                  height: "18px",
                  width: "190px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "8px",
                }}
              >
                <img
                  style={{ height: "16px", width: "16px", position: "relative" }}
                  alt=""
                  src="/line-roundedmessage-4.svg"
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    flex: "1",
                    position: "relative",
                    lineHeight: "130%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  Link item
                </div>
              </div>
              <div
                style={{
                  height: "29px",
                  width: "37px",
                  borderRadius: "4px",
                  backgroundColor: "#fff",
                  boxShadow: "0px 1px 3px rgba(25, 33, 61, 0.1)",
                  border: "0.5px solid #f0f2f5",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "6px",
                  gap: "4px",
                  textAlign: "center",
                  fontSize: "12px",
                  color: "#19213d",
                }}
              >
                <img
                  style={{ height: "11px", width: "11px", position: "relative" }}
                  alt=""
                  src="/line-roundedcommand-11.svg"
                />
                <div
                  style={{
                    position: "relative",
                    lineHeight: "130%",
                    fontWeight: "500",
                  }}
                >
                  1
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
                alignSelf: "stretch",
                height: "43px",
                borderRadius: "8px",
                overflow: "hidden",
                flexShrink: "0",
                display: "none",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "8px 10px 8px 12px",
                boxSizing: "border-box",
                gap: "0px",
                rowGap: "20px",
              }}
            >
              <div
                style={{
                  height: "18px",
                  width: "190px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "8px",
                }}
              >
                <img
                  style={{ height: "16px", width: "16px", position: "relative" }}
                  alt=""
                  src="/line-roundedmessage-5.svg"
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    flex: "1",
                    position: "relative",
                    lineHeight: "130%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  Link item
                </div>
              </div>
              <div
                style={{
                  height: "29px",
                  width: "37px",
                  borderRadius: "4px",
                  backgroundColor: "#fff",
                  boxShadow: "0px 1px 3px rgba(25, 33, 61, 0.1)",
                  border: "0.5px solid #f0f2f5",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "6px",
                  gap: "4px",
                  textAlign: "center",
                  fontSize: "12px",
                  color: "#19213d",
                }}
              >
                <img
                  style={{ height: "11px", width: "11px", position: "relative" }}
                  alt=""
                  src="/line-roundedcommand-12.svg"
                />
                <div
                  style={{
                    position: "relative",
                    lineHeight: "130%",
                    fontWeight: "500",
                  }}
                >
                  1
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
          <img
            style={{
              width: "100%",
              height: "calc(100% - 89.1px)",
              position: "absolute",
              margin: "0",
              top: "88.9px",
              right: "-0.2px",
              bottom: "0.2px",
              left: "0.2px",
              maxWidth: "100%",
              overflow: "hidden",
              maxHeight: "100%",
              display: "none",
              zIndex: "2",
            }}
            alt=""
            src="/gradient.svg"
          />
        </div>
        <div
          style={{
            alignSelf: "stretch",
            flex: "1",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            position: "relative",
            gap: "12px",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "0px 10px",
            }}
          >
            <div
              style={{
                position: "relative",
                letterSpacing: "0.1em",
                lineHeight: "130%",
                textTransform: "uppercase",
                fontWeight: "500",
              }}
            >
              Chat History
            </div>
            <div
              style={{
                height: "21px",
                borderRadius: "24px",
                backgroundColor: "#fff",
                boxShadow: "0px 1px 3px rgba(25, 33, 61, 0.1)",
                border: "0.8px solid #e3e6ea",
                boxSizing: "border-box",
                display: "none",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                padding: "3px 4px 2px",
                gap: "4px",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  position: "relative",
                  letterSpacing: "0.1em",
                  lineHeight: "130%",
                  textTransform: "uppercase",
                  fontWeight: "500",
                }}
              >
                Clear
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
              alignSelf: "stretch",
              flex: "1",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "2px",
              fontSize: "14px",
              color: "#666f8d",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                flex: "1",
                borderRadius: "8px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "8px 10px 8px 12px",
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
                }}
              >
                <img
                  style={{
                    height: "16px",
                    width: "16px",
                    position: "relative",
                    display: "none",
                  }}
                  alt=""
                  src="/line-roundedmessage.svg"
                />
                <div
                  style={{
                    flex: "1",
                    position: "relative",
                    lineHeight: "130%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  Quis ipsum suspendisse
                </div>
              </div>
              <div
                style={{
                  height: "29px",
                  width: "37px",
                  borderRadius: "4px",
                  backgroundColor: "#fff",
                  boxShadow: "0px 1px 3px rgba(25, 33, 61, 0.1)",
                  border: "0.5px solid #f0f2f5",
                  boxSizing: "border-box",
                  display: "none",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "6px",
                  gap: "4px",
                  textAlign: "center",
                  fontSize: "12px",
                  color: "#19213d",
                }}
              >
                <img
                  style={{ height: "11px", width: "11px", position: "relative" }}
                  alt=""
                  src="/line-roundedcommand-13.svg"
                />
                <div
                  style={{
                    position: "relative",
                    lineHeight: "130%",
                    fontWeight: "500",
                  }}
                >
                  1
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
                alignSelf: "stretch",
                flex: "1",
                borderRadius: "8px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "8px 10px 8px 12px",
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
                }}
              >
                <img
                  style={{
                    height: "16px",
                    width: "16px",
                    position: "relative",
                    display: "none",
                  }}
                  alt=""
                  src="/line-roundedmessage.svg"
                />
                <div
                  style={{
                    flex: "1",
                    position: "relative",
                    lineHeight: "130%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  Ut tristique et egestas quis ipsum sus
                </div>
              </div>
              <div
                style={{
                  height: "29px",
                  width: "37px",
                  borderRadius: "4px",
                  backgroundColor: "#fff",
                  boxShadow: "0px 1px 3px rgba(25, 33, 61, 0.1)",
                  border: "0.5px solid #f0f2f5",
                  boxSizing: "border-box",
                  display: "none",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "6px",
                  gap: "4px",
                  textAlign: "center",
                  fontSize: "12px",
                  color: "#19213d",
                }}
              >
                <img
                  style={{ height: "11px", width: "11px", position: "relative" }}
                  alt=""
                  src="/line-roundedcommand-14.svg"
                />
                <div
                  style={{
                    position: "relative",
                    lineHeight: "130%",
                    fontWeight: "500",
                  }}
                >
                  1
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
                alignSelf: "stretch",
                flex: "1",
                borderRadius: "8px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "8px 10px 8px 12px",
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
                }}
              >
                <img
                  style={{
                    height: "16px",
                    width: "16px",
                    position: "relative",
                    display: "none",
                  }}
                  alt=""
                  src="/line-roundedmessage.svg"
                />
                <div
                  style={{
                    flex: "1",
                    position: "relative",
                    lineHeight: "130%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  Sed viverra tellus inhac
                </div>
              </div>
              <div
                style={{
                  height: "29px",
                  width: "37px",
                  borderRadius: "4px",
                  backgroundColor: "#fff",
                  boxShadow: "0px 1px 3px rgba(25, 33, 61, 0.1)",
                  border: "0.5px solid #f0f2f5",
                  boxSizing: "border-box",
                  display: "none",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "6px",
                  gap: "4px",
                  textAlign: "center",
                  fontSize: "12px",
                  color: "#19213d",
                }}
              >
                <img
                  style={{ height: "11px", width: "11px", position: "relative" }}
                  alt=""
                  src="/line-roundedcommand-15.svg"
                />
                <div
                  style={{
                    position: "relative",
                    lineHeight: "130%",
                    fontWeight: "500",
                  }}
                >
                  1
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
                alignSelf: "stretch",
                flex: "1",
                borderRadius: "8px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "8px 10px 8px 12px",
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
                }}
              >
                <img
                  style={{
                    height: "16px",
                    width: "16px",
                    position: "relative",
                    display: "none",
                  }}
                  alt=""
                  src="/line-roundedmessage.svg"
                />
                <div
                  style={{
                    flex: "1",
                    position: "relative",
                    lineHeight: "130%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  Eros in cursus turpis massa
                </div>
              </div>
              <div
                style={{
                  height: "29px",
                  width: "37px",
                  borderRadius: "4px",
                  backgroundColor: "#fff",
                  boxShadow: "0px 1px 3px rgba(25, 33, 61, 0.1)",
                  border: "0.5px solid #f0f2f5",
                  boxSizing: "border-box",
                  display: "none",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "6px",
                  gap: "4px",
                  textAlign: "center",
                  fontSize: "12px",
                  color: "#19213d",
                }}
              >
                <img
                  style={{ height: "11px", width: "11px", position: "relative" }}
                  alt=""
                  src="/line-roundedcommand-16.svg"
                />
                <div
                  style={{
                    position: "relative",
                    lineHeight: "130%",
                    fontWeight: "500",
                  }}
                >
                  1
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
                alignSelf: "stretch",
                flex: "1",
                borderRadius: "8px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "8px 10px 8px 12px",
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
                }}
              >
                <img
                  style={{
                    height: "16px",
                    width: "16px",
                    position: "relative",
                    display: "none",
                  }}
                  alt=""
                  src="/line-roundedmessage.svg"
                />
                <div
                  style={{
                    flex: "1",
                    position: "relative",
                    lineHeight: "130%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >{`Dictum at tempor commodo ullamcorper `}</div>
              </div>
              <div
                style={{
                  height: "29px",
                  width: "37px",
                  borderRadius: "4px",
                  backgroundColor: "#fff",
                  boxShadow: "0px 1px 3px rgba(25, 33, 61, 0.1)",
                  border: "0.5px solid #f0f2f5",
                  boxSizing: "border-box",
                  display: "none",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "6px",
                  gap: "4px",
                  textAlign: "center",
                  fontSize: "12px",
                  color: "#19213d",
                }}
              >
                <img
                  style={{ height: "11px", width: "11px", position: "relative" }}
                  alt=""
                  src="/line-roundedcommand-17.svg"
                />
                <div
                  style={{
                    position: "relative",
                    lineHeight: "130%",
                    fontWeight: "500",
                  }}
                >
                  1
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
                alignSelf: "stretch",
                flex: "1",
                borderRadius: "8px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "8px 10px 8px 12px",
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
                }}
              >
                <img
                  style={{
                    height: "16px",
                    width: "16px",
                    position: "relative",
                    display: "none",
                  }}
                  alt=""
                  src="/line-roundedmessage.svg"
                />
                <div
                  style={{
                    flex: "1",
                    position: "relative",
                    lineHeight: "130%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  Morbi tristique senectus et
                </div>
              </div>
              <div
                style={{
                  height: "29px",
                  width: "37px",
                  borderRadius: "4px",
                  backgroundColor: "#fff",
                  boxShadow: "0px 1px 3px rgba(25, 33, 61, 0.1)",
                  border: "0.5px solid #f0f2f5",
                  boxSizing: "border-box",
                  display: "none",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "6px",
                  gap: "4px",
                  textAlign: "center",
                  fontSize: "12px",
                  color: "#19213d",
                }}
              >
                <img
                  style={{ height: "11px", width: "11px", position: "relative" }}
                  alt=""
                  src="/line-roundedcommand-18.svg"
                />
                <div
                  style={{
                    position: "relative",
                    lineHeight: "130%",
                    fontWeight: "500",
                  }}
                >
                  1
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
          <img
            style={{
              width: "100%",
              height: "calc(100% - 179.1px)",
              position: "absolute",
              margin: "0",
              top: "178.9px",
              right: "-0.2px",
              bottom: "0.2px",
              left: "0.2px",
              maxWidth: "100%",
              overflow: "hidden",
              maxHeight: "100%",
              zIndex: "1",
            }}
            loading="eager"
            alt=""
            src="/gradient.svg"
          />
        </div>
      </nav>
    );
  };
  
  export default SidebarMainItemsWrapper;