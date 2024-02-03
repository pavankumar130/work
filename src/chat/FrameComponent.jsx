import React from "react";

const FrameComponent = () => {
    return (
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          textAlign: "left",
          fontSize: "14px",
          color: "#666f8d",
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
            padding: "0px 0px 32px",
            gap: "16px",
            color: "#2388ff",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              borderBottom: "1.5px solid #f0f2f5",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "8px 0px",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                overflow: "hidden",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "5px 0px",
                gap: "20px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  lineHeight: "130%",
                  fontWeight: "500",
                }}
              >
                Quick actions
              </div>
              <img
                style={{
                  height: "20px",
                  width: "20px",
                  position: "relative",
                  minHeight: "20px",
                }}
                alt=""
                src="/line-roundedchevron-down-2.svg"
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
              gap: "12px",
              fontSize: "10px",
              color: "#bac1cc",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                height: "115px",
                borderRadius: "8px",
                backgroundColor: "#fff",
                boxShadow: "0px 2px 4px rgba(25, 33, 61, 0.08)",
                border: "1px solid #f0f2f5",
                boxSizing: "border-box",
                overflow: "hidden",
                flexShrink: "0",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "16px 15px",
                gap: "8px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  fontWeight: "600",
                }}
              >
                Notes
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "12px",
                  lineHeight: "150%",
                  color: "#666f8d",
                }}
              >
                <p style={{ margin: "" }}>
                  1. Lorem ipmsum dolor sit amet consecutr
                </p>
                <p style={{ margin: "" }}>
                  2. Consectur dolor sit amet consectur dolor sit
                </p>
                <p style={{ margin: "" }}>
                  3. Dolor sit amet consectur conecturer
                </p>
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "6px",
                }}
              >
                <img
                  style={{
                    height: "104px",
                    width: "104px",
                    position: "relative",
                    borderRadius: "4px",
                    overflow: "hidden",
                    flexShrink: "0",
                    objectFit: "cover",
                    minHeight: "104px",
                  }}
                  loading="eager"
                  alt=""
                  src="/image-wrapper@2x.png"
                />
                <img
                  style={{
                    height: "104px",
                    width: "104px",
                    position: "relative",
                    borderRadius: "4px",
                    overflow: "hidden",
                    flexShrink: "0",
                    objectFit: "cover",
                    minHeight: "104px",
                  }}
                  loading="eager"
                  alt=""
                  src="/image-wrapper@2x.png"
                />
                <img
                  style={{
                    height: "104px",
                    width: "104px",
                    position: "relative",
                    borderRadius: "4px",
                    overflow: "hidden",
                    flexShrink: "0",
                    objectFit: "cover",
                    minHeight: "104px",
                  }}
                  loading="eager"
                  alt=""
                  src="/image-wrapper@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            alignSelf: "stretch",
            borderBottom: "1.5px solid #f0f2f5",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "8px 0px",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              overflow: "hidden",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "5px 0px",
              gap: "20px",
            }}
          >
            <div
              style={{
                position: "relative",
                lineHeight: "130%",
                fontWeight: "500",
              }}
            >
              Media, files and links
            </div>
            <img
              style={{
                height: "20px",
                width: "20px",
                position: "relative",
                minHeight: "20px",
              }}
              alt=""
              src="/line-roundedchevron-right.svg"
            />
          </div>
        </div>
        <div
          style={{
            alignSelf: "stretch",
            borderBottom: "1.5px solid #f0f2f5",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "8px 0px",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              overflow: "hidden",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "5px 0px",
              gap: "20px",
            }}
          >
            <div
              style={{
                position: "relative",
                lineHeight: "130%",
                fontWeight: "500",
              }}
            >
              Apps
            </div>
            <img
              style={{
                height: "20px",
                width: "20px",
                position: "relative",
                minHeight: "20px",
              }}
              alt=""
              src="/line-roundedchevron-right.svg"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default FrameComponent;
  