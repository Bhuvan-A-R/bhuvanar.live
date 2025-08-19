import React, { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

const UnstopAmbassadorPopover = ({ show, onClose }) => {
  const closeBtnRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (show && closeBtnRef.current) {
      closeBtnRef.current.focus();
    }
    // Fire confetti from both sides when popover appears, using our canvas
    if (show && canvasRef.current) {
      const myConfetti = confetti.create(canvasRef.current, {
        resize: true,
        useWorker: true,
      });
      myConfetti({
        particleCount: 60,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.6 },
        colors: ["#6a11cb", "#2575fc", "#ffb347", "#fff"],
      });
      myConfetti({
        particleCount: 60,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.6 },
        colors: ["#6a11cb", "#2575fc", "#ffb347", "#fff"],
      });
    }
  }, [show]);

  if (!show) return null;
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(30, 0, 60, 0.35)",
        backdropFilter: "blur(6px)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-label="Unstop Student Ambassador Announcement"
    >
      {/* Confetti canvas with very high z-index */}
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          zIndex: 10000, // higher than popover
        }}
      />
      <div
        style={{
          background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
          color: "#fff",
          borderRadius: "1.5rem",
          boxShadow: "0 4px 32px rgba(0,0,0,0.18)",
          padding: "2.5rem 2rem 1.5rem 2rem",
          minWidth: "320px",
          maxWidth: "90vw",
          textAlign: "center",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.2rem",
        }}
      >
        <button
          ref={closeBtnRef}
          onClick={onClose}
          aria-label="Close"
          style={{
            position: "absolute",
            top: 16,
            right: 20,
            background: "rgba(255,255,255,0.18)",
            border: "none",
            borderRadius: "50%",
            width: 32,
            height: 32,
            color: "#fff",
            fontSize: 20,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.2s",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.background = "rgba(255,255,255,0.32)")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.background = "rgba(255,255,255,0.18)")
          }
        >
          ✖
        </button>
        <img
          src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/svg/unstop-logo.svg"
          alt="Unstop Logo"
          style={{
            width: 64,
            height: 64,
            marginBottom: "0.5rem",
            borderRadius: "50%",
            background: "#fff",
            padding: "0.5rem",
            boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
          }}
        />
        <div style={{ fontSize: "1.3rem", fontWeight: 700 }}>
          🎉 Happy to share! <br />I am now an{" "}
          <span style={{ color: "#ffb347" }}>Unstop Student Ambassador</span>!
        </div>
        <div style={{ fontSize: "1.05rem", opacity: 0.92 }}>
          Excited to start this journey with Unstop.
          <br />
          Let’s make an impact together!
        </div>
        <div
          style={{
            marginTop: "0.5rem",
            fontSize: "0.98rem",
            fontWeight: 500,
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              background: "rgba(255,255,255,0.13)",
              borderRadius: 8,
              padding: "0.2rem 0.7rem",
            }}
          >
            #Unstop
          </span>
          <span
            style={{
              background: "rgba(255,255,255,0.13)",
              borderRadius: 8,
              padding: "0.2rem 0.7rem",
            }}
          >
            #StudentAmbassador
          </span>
          <span
            style={{
              background: "rgba(255,255,255,0.13)",
              borderRadius: 8,
              padding: "0.2rem 0.7rem",
            }}
          >
            #CampusLeader
          </span>
        </div>
      </div>
    </div>
  );
};

export default UnstopAmbassadorPopover;
