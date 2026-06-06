"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      {/* dış halka */}
      <div
        style={{
          position: "fixed",
          left: position.x,
          top: position.y,
          width: "42px",
          height: "42px",
          border: "1px solid rgba(198,161,91,0.35)",
          borderRadius: "999px",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 999999,
          transition: "all 0.14s ease-out",
          boxShadow: "0 0 30px rgba(198,161,91,0.15)",
          backdropFilter: "blur(1px)",
        }}
      />

      {/* iç çekirdek */}
      <div
        style={{
          position: "fixed",
          left: position.x,
          top: position.y,
          width: "8px",
          height: "8px",
          background: "#c6a15b",
          borderRadius: "999px",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 999999,
          boxShadow: "0 0 20px rgba(198,161,91,0.9)",
          transition: "all 0.1s ease-out",
        }}
      />
    </>
  );
}