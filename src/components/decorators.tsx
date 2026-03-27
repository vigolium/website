"use client";

export function CornerBrackets({ size = "w-7 h-7" }: { size?: string }) {
  const borderColor = "#50fa7b";
  return (
    <>
      <span
        className={`absolute top-0 left-0 ${size}`}
        style={{
          borderTop: `2px solid ${borderColor}`,
          borderLeft: `2px solid ${borderColor}`,
        }}
      />
      <span
        className={`absolute top-0 right-0 ${size}`}
        style={{
          borderTop: `2px solid ${borderColor}`,
          borderRight: `2px solid ${borderColor}`,
        }}
      />
      <span
        className={`absolute bottom-0 left-0 ${size}`}
        style={{
          borderBottom: `2px solid ${borderColor}`,
          borderLeft: `2px solid ${borderColor}`,
        }}
      />
      <span
        className={`absolute bottom-0 right-0 ${size}`}
        style={{
          borderBottom: `2px solid ${borderColor}`,
          borderRight: `2px solid ${borderColor}`,
        }}
      />
    </>
  );
}

export function DimensionLine({
  label,
  vertical = false,
  className = "",
}: {
  label: string;
  vertical?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`absolute flex items-center justify-center ${className}`}
      style={{
        ...(vertical
          ? { flexDirection: "column", width: "20px" }
          : { flexDirection: "row", height: "20px" }),
      }}
    >
      <div
        style={{
          ...(vertical
            ? { width: "8px", height: "1px" }
            : { width: "1px", height: "8px" }),
          backgroundColor: "rgba(80, 250, 123, 0.3)",
        }}
      />
      <div
        style={{
          flex: 1,
          ...(vertical
            ? { width: "1px", minHeight: "40px" }
            : { height: "1px", minWidth: "40px" }),
          backgroundColor: "rgba(80, 250, 123, 0.3)",
        }}
      />
      <span
        className="ngb-annotation"
        style={{
          position: "absolute",
          ...(vertical
            ? { writingMode: "vertical-rl", transform: "rotate(180deg)" }
            : {}),
          padding: "0 4px",
          backgroundColor: "#1c1b19",
          fontSize: "0.6rem",
          color: "rgba(80, 250, 123, 0.5)",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
      <div
        style={{
          ...(vertical
            ? { width: "8px", height: "1px" }
            : { width: "1px", height: "8px" }),
          backgroundColor: "rgba(80, 250, 123, 0.3)",
        }}
      />
    </div>
  );
}

export function RegistrationMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`absolute text-xs select-none ${className}`}
      style={{ color: "rgba(80, 250, 123, 0.3)", fontSize: "10px", lineHeight: 1 }}
    >
      +
    </span>
  );
}
