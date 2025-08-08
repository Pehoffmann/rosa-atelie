"use client";

import React from "react";

type StitchLineProps = {
  className?: string;
  color?: string;
  strokeWidth?: number;
  dash?: string;
  opacity?: number;
  variant?: "running" | "zigzag" | "curve" | "arc" | "wave" | "corner";
};

/**
 * Elemento decorativo que simula uma linha de costura com traçado pontilhado.
 * Use `className` para posicionamento (absolute, transforms, etc.).
 */
export function StitchLine({
  className,
  color = "#382C1A",
  strokeWidth = 1.5,
  dash = "6 6",
  opacity = 0.2,
  variant = "running",
}: StitchLineProps) {
  const getPathD = () => {
    switch (variant) {
      case "running":
        // linha reta (alinhavo) com leve offset vertical
        return "M10,40 L190,40";
      case "zigzag":
        // zigue-zague (ponto de maquina)
        return "M0,40 L20,20 L40,60 L60,20 L80,60 L100,20 L120,60 L140,20 L160,60 L180,20 L200,40";
      case "corner":
        // L sutil para cantos
        return "M12,12 L12,60 C12,68 20,68 28,68 L188,68";
      case "arc":
        // arco sutil
        return "M10,60 C60,10 140,10 190,60";
      case "wave":
        // leve ondulação
        return "M0,50 C30,30 50,70 80,50 S130,30 160,50 190,70 220,50";
      case "curve":
      default:
        // curva padrão
        return "M10,70 C60,20 140,20 190,70";
    }
  };

  return (
    <svg
      className={className}
      viewBox="0 0 200 80"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d={getPathD()}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={
          variant === "zigzag"
            ? undefined
            : variant === "running"
            ? "2 6"
            : dash
        }
        strokeLinejoin={variant === "zigzag" ? "round" : undefined}
        strokeLinecap="round"
        opacity={opacity}
      />
    </svg>
  );
}

export default StitchLine;
