import React from "react";
import SidebarLinksListWrapper from "./SidebarLinksListWrapper";

const SidebarMainItemsWrapper2 = () => {
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
            gap: "20px",
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
            <div
              style={{
                height: "32px",
                width: "32px",
                position: "relative",
                borderRadius: "200px",
                boxShadow: "0px -2px 4px rgba(35, 136, 255, 0.08) inset",
                overflow: "hidden",
                flexShrink: "0",
              }}
            >
              <img
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                  objectFit: "cover",
                }}
                loading="eager"
                alt=""
                src="/avatar01@2x.png"
              />
            </div>
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
                Mauro Sicard
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
            padding: "7px 6px 7px 12px",
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
              gap: "4px",
            }}
          >
            <img
              style={{ height: "13px", width: "13px", position: "relative" }}
              alt=""
              src="/line-roundedsearch.svg"
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
              padding: "6px",
              gap: "4px",
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
              <img
                style={{ height: "16px", width: "16px", position: "relative" }}
                alt=""
                src="/line-roundedmessage.svg"
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
                src="/line-roundedcommand-1.svg"
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
                loading="eager"
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
      <SidebarLinksListWrapper
        listTitle="Pinned"
        placeholder="Lorem ipsum dolor sit"
        placeholder1="Duis aute irure dolor in repre"
        placeholder2="Eserunt mollit anim id est laborumol"
        placeholder3="Volutpat diam ut venenatis tellus in"
        placeholder4="Link item"
        placeholder5="Link item"
        sidebarLinkItem={false}
        showLineRoundedMessageIcon
        showBadge
        sidebarLinkItem1={false}
        lineRoundedMessageIconVisible
        badgeVisible
        gradientIcon={false}
      />
      <SidebarLinksListWrapper
        listTitle="Chat History"
        placeholder="Quis ipsum suspendisse"
        placeholder1="Ut tristique et egestas quis ipsum sus"
        placeholder2="Sed viverra tellus inhac"
        placeholder3="Eros in cursus turpis massa"
        placeholder4="Dictum at tempor commodo ullamcorper "
        placeholder5="Morbi tristique senectus et"
        sidebarLinkItem
        showLineRoundedMessageIcon={false}
        showBadge={false}
        sidebarLinkItem1
        lineRoundedMessageIconVisible={false}
        badgeVisible={false}
        gradientIcon
        propHeight="unset"
        propFlex="1"
        propHeight1="unset"
        propGap="unset"
        propRowGap="unset"
        propFlex1="1"
        propHeight2="unset"
        propWidth="unset"
        propFlex2="1"
        propAlignSelf="unset"
        propHeight3="unset"
        propGap1="unset"
        propRowGap1="unset"
        propFlex3="1"
        propHeight4="unset"
        propWidth1="unset"
        propFlex4="1"
        propAlignSelf1="unset"
        propHeight5="calc(100% - 179.1px)"
        propTop="178.9px"
      />
    </nav>
  );
};

export default SidebarMainItemsWrapper2;
