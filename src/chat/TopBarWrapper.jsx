import React from "react";

const TopBarWrapper = () => {
    return (
      <div
        style={{
          alignSelf: "stretch",
          backgroundColor: "#fff",
          boxSizing: "border-box",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 24px",
          gap: "20px",
          maxWidth: "100%",
          textAlign: "left",
          fontSize: "16px",
          color: "#19213d",
          fontFamily: "Inter",
        }}
      >
        <div
          style={{
            width: "375px",
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
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "8px",
            }}
          >
            <div
              style={{
                position: "relative",
                lineHeight: "130%",
                fontWeight: "500",
              }}
            >
              Chats
            </div>
            <div
              style={{
                height: "28px",
                borderRadius: "4px",
                backgroundColor: "#f7f8fa",
                boxShadow: "0px 1px 3px rgba(25, 33, 61, 0.1)",
                display: "none",
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
                  alignSelf: "stretch",
                  position: "relative",
                  lineHeight: "130%",
                  fontWeight: "500",
                }}
              >
                GPT-4
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "103px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
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
              style={{ height: "12px", width: "12px", position: "relative" }}
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
              flex: "1",
              borderRadius: "8px",
              background: "linear-gradient(180deg, #2b7afb, #2174fd, #213bfd)",
              boxShadow:
                "0px 2px 5px rgba(20, 88, 201, 0.17), 0px -2px 0.3px rgba(14, 56, 125, 0.18) inset, 0px 2px 1px rgba(255, 255, 255, 0.22) inset",
              border: "1px solid #174bd2",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: "8px 12px",
              gap: "4px",
              color: "#fff",
            }}
          >
            <img
              style={{ height: "12px", width: "12px", position: "relative" }}
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
                style={{ height: "16px", width: "16px", position: "relative" }}
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
              display: "none",
            }}
          />
          <div
            style={{
              display: "none",
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
              alt=""
              src="/line-roundedsettings-2.svg"
            />
            <img
              style={{
                height: "16px",
                width: "16px",
                position: "relative",
                minHeight: "16px",
              }}
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
    );
  };
  
  export default TopBarWrapper;