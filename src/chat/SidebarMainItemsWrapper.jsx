import React from "react";
import logo from '../assets/google.png'
import {FaRocketchat} from 'react-icons/fa'
import {MdLibraryBooks} from 'react-icons/md'
import {GrAppsRounded} from 'react-icons/gr'

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
                  <FaRocketchat/> Chats
                </div>
              </div>
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
                  <MdLibraryBooks/> Library
                </div>
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
                  <GrAppsRounded/> Apps
                </div>
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
              Pinned Chats
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
                  Pinned chat 1
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
                  Pinned chat 2
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
                  Pinned chat 3
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
                  Pinned chat 4
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
                  Chat 1
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
                  Chat 2
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
                  Chat 3
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
                <div
                  style={{
                    position: "relative",
                    lineHeight: "130%",
                    fontWeight: "500",
                  }}
                >
                  1
                </div>
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
                    Chat 5
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
                <div
                  style={{
                    position: "relative",
                    lineHeight: "130%",
                    fontWeight: "500",
                  }}
                >
                  1
                </div>
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
                  Chat 6
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
                <div
                  style={{
                    position: "relative",
                    lineHeight: "130%",
                    fontWeight: "500",
                  }}
                >
                  1
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default SidebarMainItemsWrapper;