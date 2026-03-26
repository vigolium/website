import { useMemo } from "react";

const CHARS = "01234567890ABCDEFabcdef>|/\\{}[]#$%&@!?<>~^*+=_.,:;";
const COLUMN_COUNT = 25;

function generateColumn(index: number) {
  const charCount = 15 + Math.floor(Math.random() * 20);
  const chars: string[] = [];
  for (let i = 0; i < charCount; i++) {
    chars.push(CHARS[Math.floor(Math.random() * CHARS.length)]);
  }
  const duration = 8 + Math.random() * 16;
  const delay = Math.random() * -20;
  const left = (index / COLUMN_COUNT) * 100 + Math.random() * 2;
  const opacity = 0.05 + Math.random() * 0.12;
  const fontSize = 10 + Math.floor(Math.random() * 6);

  return { chars, duration, delay, left, opacity, fontSize, id: index };
}

export function MatrixRain() {
  const columns = useMemo(
    () => Array.from({ length: COLUMN_COUNT }, (_, i) => generateColumn(i)),
    []
  );

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <style jsx>{`
        @keyframes matrixFall {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100vh);
          }
        }
      `}</style>
      {columns.map((col) => (
        <div
          key={col.id}
          className="absolute top-0 whitespace-pre leading-tight"
          style={{
            left: `${col.left}%`,
            opacity: col.opacity,
            fontSize: `${col.fontSize}px`,
            fontFamily: "var(--font-fira-code), monospace",
            color: "#00FF41",
            writingMode: "vertical-lr",
            textOrientation: "upright",
            animation: `matrixFall ${col.duration}s linear ${col.delay}s infinite`,
            textShadow: "0 0 8px #00FF41",
          }}
        >
          {col.chars.map((char, i) => (
            <span
              key={i}
              style={{
                opacity: i === col.chars.length - 1 ? 1 : 0.3 + (i / col.chars.length) * 0.7,
              }}
            >
              {char}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
