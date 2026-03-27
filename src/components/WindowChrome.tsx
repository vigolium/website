"use client";

const DOT_COLORS = ["#f75341", "#fbb829", "#50fa7b"];

export function WindowChrome({ title }: { title: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        padding: "10px 16px",
        borderBottom: "1px solid rgba(252,232,195,0.06)",
        backgroundColor: "rgba(0,0,0,0.3)",
      }}
    >
      {DOT_COLORS.map((color) => (
        <span
          key={color}
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: color,
          }}
        />
      ))}
      <span
        style={{
          marginLeft: "12px",
          fontSize: "0.65rem",
          color: "#918175",
          letterSpacing: "0.1em",
        }}
      >
        {title}
      </span>
    </div>
  );
}
