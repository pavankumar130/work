import React from "react";
import { useMemo } from "react";

const getStyleValue = (key, value) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};

const SidebarLinksListWrapper = ({
  listTitle,
  placeholder,
  placeholder1,
  placeholder2,
  placeholder3,
  placeholder4,
  placeholder5,
  sidebarLinkItem,
  showLineRoundedMessageIcon,
  showBadge,
  sidebarLinkItem1,
  lineRoundedMessageIconVisible,
  badgeVisible,
  gradientIcon,
  propHeight,
  propFlex,
  propHeight1,
  propGap,
  propRowGap,
  propFlex1,
  propHeight2,
  propWidth,
  propFlex2,
  propAlignSelf,
  propHeight3,
  propGap1,
  propRowGap1,
  propFlex3,
  propHeight4,
  propWidth1,
  propFlex4,
  propAlignSelf1,
  propHeight5,
  propTop,
}) => {
  const sidebarLinksListWrapperStyle = useMemo(() => {
    return {
      ...getStyleValue("height", propHeight),
      ...getStyleValue("flex", propFlex),
    };
  }, [propHeight, propFlex]);

  const sidebarLinkItemStyle = useMemo(() => {
    return {
      ...getStyleValue("height", propHeight1),
      ...getStyleValue("gap", propGap),
      ...getStyleValue("rowGap", propRowGap),
      ...getStyleValue("flex", propFlex1),
    };
  }, [propHeight1, propGap, propRowGap, propFlex1]);

  const textWrapperStyle = useMemo(() => {
    return {
      ...getStyleValue("height", propHeight2),
      ...getStyleValue("width", propWidth),
      ...getStyleValue("flex", propFlex2),
    };
  }, [propHeight2, propWidth, propFlex2]);

  const placeholderStyle = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", propAlignSelf),
    };
  }, [propAlignSelf]);

  const sidebarLinkItem1Style = useMemo(() => {
    return {
      ...getStyleValue("height", propHeight3),
      ...getStyleValue("gap", propGap1),
      ...getStyleValue("rowGap", propRowGap1),
      ...getStyleValue("flex", propFlex3),
    };
  }, [propHeight3, propGap1, propRowGap1, propFlex3]);

  const textWrapper1Style = useMemo(() => {
    return {
      ...getStyleValue("height", propHeight4),
      ...getStyleValue("width", propWidth1),
      ...getStyleValue("flex", propFlex4),
    };
  }, [propHeight4, propWidth1, propFlex4]);

  const placeholder1Style = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", propAlignSelf1),
    };
  }, [propAlignSelf1]);

  const gradientIconStyle = useMemo(() => {
    return {
      ...getStyleValue("height", propHeight5),
      ...getStyleValue("top", propTop),
    };
  }, [propHeight5, propTop]);

  return (
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
        textAlign: "left",
        fontSize: "12px",
        color: "#bac1cc",
        fontFamily: "Inter",
        ...sidebarLinksListWrapperStyle,
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
          {listTitle}
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
              src="/line-roundedmessage-1.svg"
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
              {placeholder}
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
              src="/line-roundedmessage-1.svg"
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
              {placeholder1}
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
              src="/line-roundedmessage-1.svg"
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
              {placeholder2}
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
              src="/line-roundedmessage-1.svg"
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
              {placeholder3}
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
        {!sidebarLinkItem && (
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
              ...sidebarLinkItemStyle,
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
                ...textWrapperStyle,
              }}
            >
              {showLineRoundedMessageIcon && (
                <img
                  style={{
                    height: "16px",
                    width: "16px",
                    position: "relative",
                  }}
                  alt=""
                  src="/line-roundedmessage-1.svg"
                />
              )}
              <div
                style={{
                  alignSelf: "stretch",
                  flex: "1",
                  position: "relative",
                  lineHeight: "130%",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  ...placeholderStyle,
                }}
              >
                {placeholder4}
              </div>
            </div>
            {showBadge && (
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
                  style={{
                    height: "11px",
                    width: "11px",
                    position: "relative",
                  }}
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
            )}
          </div>
        )}
        {!sidebarLinkItem1 && (
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
              ...sidebarLinkItem1Style,
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
                ...textWrapper1Style,
              }}
            >
              {lineRoundedMessageIconVisible && (
                <img
                  style={{
                    height: "16px",
                    width: "16px",
                    position: "relative",
                  }}
                  alt=""
                  src="/line-roundedmessage-1.svg"
                />
              )}
              <div
                style={{
                  alignSelf: "stretch",
                  flex: "1",
                  position: "relative",
                  lineHeight: "130%",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  ...placeholder1Style,
                }}
              >
                {placeholder5}
              </div>
            </div>
            {badgeVisible && (
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
                  style={{
                    height: "11px",
                    width: "11px",
                    position: "relative",
                  }}
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
            )}
          </div>
        )}
      </div>
      {!gradientIcon && (
        <img
          alt=""
          src="/gradient.svg"
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
            ...gradientIconStyle,
          }}
        />
      )}
    </div>
  );
};

export default SidebarLinksListWrapper;
