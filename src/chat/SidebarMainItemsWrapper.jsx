import React from "react";
import logo from '../assets/bharatAI.png'
import {FaRocketchat} from 'react-icons/fa'
import {MdLibraryBooks,MdArrowRight} from 'react-icons/md'
import {BsChatSquare} from 'react-icons/bs'
import {BiLogoPlayStore} from 'react-icons/bi'

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
            height:"50px"
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
                    fontWeight: "500",
                  }}
                >
                  <img src={logo} width='140px' height='140px' alt="Bharat Tech" />
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
                height: "39px",
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
                padding: "0px 10px 0px 12px",
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
                    fontSize:'15px',
                    color:'#6B728E '
                  }}
                >
                  <FaRocketchat/> {'   '} Chats
                </div>
              </div>
            </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: "39px",
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
                    fontSize:'15px',
                    paddingLeft:'8px',
                    color:'#6B728E '
                  }}
                >
                  <MdLibraryBooks/> {'   '}Library
                </div>
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: "25px",
                borderRadius: "8px",
                overflow: "hidden",
                flexShrink: "0",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "1px 10px 8px 12px",
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
                    fontSize:'15px',
                    paddingLeft:'8px',
                    color:'#6B728E '
                  }}
                >
                  <BiLogoPlayStore/> {'   '}Apps
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            alignSelf: "stretch",
            height: "170px",
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
                lineHeight: "130%",
                textTransform: "uppercase",
                fontWeight: "600",
                fontSize:'18px',
                color:'#C7C8CC'
              }}
            >
              Pinned Chats
            </div>
          </div>
          <div
            style={{
              alignSelf: "stretch",
              flex: "unset",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "2px",
              fontSize: "10px",
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
                padding: "0px 10px 0px 12px",
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
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    color:'#6B728E ',
                    fontSize:'17px',
                    fontFamily:'inter',
                    paddingTop:'8px'
                  }}
                >
                  <MdArrowRight/> Pinned chat 1
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
                padding: "0px 10px 0px 12px",
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
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    color:'#6B728E ',
                    fontSize:'17px',
                    fontFamily:'inter',
                    paddingTop:'8px'
                  }}
                >
                  <MdArrowRight/> Pinned chat 2
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
                padding: "0px 10px 0px 12px",
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
                    color:'#6B728E ',
                    fontSize:'17px',
                    fontFamily:'inter',
                    paddingTop:'8px'
                  }}
                >
                  <MdArrowRight/> Pinned chat 3
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
                padding: "0px 10px 0px 12px",
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
                    color:'#6B728E ',
                    fontSize:'17px',
                    fontFamily:'inter',
                    paddingTop:'8px'
                  }}
                >
                  <MdArrowRight/> Pinned chat 4
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            alignSelf: "stretch",
            flex: "unset",
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
                textTransform: "uppercase",
                fontWeight: "600",
                color:'#C7C8CC',
                fontSize:'18px'
              }}
            >
              Chat History
            </div>
            <div
              style={{
                height: "10px",
                borderRadius: "24px",
                backgroundColor: "#fff",
                boxShadow: "0px 1px 3px rgba(25, 33, 61, 0.1)",
                border: "0.8px solid #e3e6ea",
                boxSizing: "border-box",
                display: "none",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                padding: "0px 4px 0px",
                gap: "4px",
              }}
            >
            </div>
          </div>
          <div
            style={{
              alignSelf: "stretch",
              flex: "unset",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "2px",
              fontSize: "10px",
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
                padding: "2px 10px 0px 12px",
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
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    color:'#6B728E ',
                    fontSize:'15px',
                    paddingTop:'8px'
                  }}
                >
                  <BsChatSquare/> <span style={{paddingLeft:'8px'}}>Chat 1</span>
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
                padding: "0px 10px 0px 12px",
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
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    color:'#6B728E ',
                    fontSize:'15px',
                    paddingTop:'8px'
                  }}
                >
                  <BsChatSquare/> <span style={{paddingLeft:'8px'}}>Chat 2</span>
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
                padding: "0px 10px 0px 12px",
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
                    color:'#6B728E ',
                    fontSize:'15px',
                    paddingTop:'8px'
                  }}
                >
                  <BsChatSquare/> <span style={{paddingLeft:'8px'}}>Chat 3</span>
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
                padding: "0px 10px 0px 12px",
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
                    color:'#6B728E ',
                    fontSize:'15px',
                    paddingTop:'8px'
                  }}
                >
                    <BsChatSquare/> <span style={{paddingLeft:'8px'}}>Chat 4</span>
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
                padding: "1px 10px 8px 12px",
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
                    color:'#6B728E',
                    fontSize:'15px',
                    paddingTop:'8px'
                  }}
                >
                  <BsChatSquare/> <span style={{paddingLeft:'8px'}}>Chat 5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default SidebarMainItemsWrapper;