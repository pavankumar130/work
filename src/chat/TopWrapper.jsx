import React from "react";

const TopWrapper = () => {
    return (
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "16px",
          maxWidth: "100%",
          textAlign: "left",
          fontSize: "14px",
          color: "#666f8d",
          fontFamily: "Inter",
        }}
      >
        <img
          style={{
            width: "56px",
            height: "56px",
            position: "relative",
            borderRadius: "200px",
            overflow: "hidden",
            flexShrink: "0",
          }}
          loading="eager"
          alt=""
          src="/user.svg"
        />
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "8px",
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
            Bharat AI
          </div>
          <div
            style={{
              alignSelf: "stretch",
              position: "relative",
              fontSize: "12px",
              lineHeight: "150%",
              color: "#666f8d",
              textAlign: "center",
            }}
          >
            The latest GPT-4 model with improved instruction following, JSON mode,
            reproducible outputs, parallel function calling, and more...
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "24px",
            fontSize: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "6px",
            }}
          >
            <div
              style={{
                position: "relative",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                fontWeight: "500",
              }}
            >
              Context window
            </div>
            <div
              style={{
                position: "relative",
                fontSize: "12px",
                lineHeight: "130%",
                fontWeight: "500",
                color: "#19213d",
              }}
            >
              128,000 tokens
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "6px",
            }}
          >
            <div
              style={{
                position: "relative",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                fontWeight: "500",
              }}
            >
              Training Data
            </div>
            <div
              style={{
                position: "relative",
                fontSize: "12px",
                lineHeight: "130%",
                fontWeight: "500",
                color: "#19213d",
              }}
            >
              Up to Apr 2023
            </div>
          </div>
        </div>
        <div
          style={{
            alignSelf: "stretch",
            height: "40px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            maxWidth: "100%",
            fontSize: "12px",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
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
              minHeight: "39px",
              maxWidth: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
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
                Search for messages...
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
              <img
                style={{ height: "11px", width: "11px", position: "relative" }}
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
      </div>
    );
  };
  
  export default TopWrapper;
  