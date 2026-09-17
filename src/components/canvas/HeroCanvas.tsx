"use client";

import { Suspense, useSyncExternalStore } from "react";
import { Canvas } from "@react-three/fiber";
import GlassBlob from "./GlassBlob";
import SceneFallback from "./SceneFallback";
import CanvasErrorBoundary from "./CanvasErrorBoundary";
import { useIsLowPower } from "@/hooks/useMediaQuery";
import { useReducedMotion } from "@/hooks/useReducedMotion";

let cachedWebglSupport: boolean | null = null;

function detectWebGL() {
  if (cachedWebglSupport !== null) return cachedWebglSupport;
  try {
    const canvas = document.createElement("canvas");
    cachedWebglSupport = !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    cachedWebglSupport = false;
  }
  return cachedWebglSupport;
}

const noopSubscribe = () => () => {};

/** Resolves to `false` during SSR/hydration and the real capability on the client. */
function useHasWebGL() {
  return useSyncExternalStore(noopSubscribe, detectWebGL, () => false);
}

export default function HeroCanvas() {
  const isLowPower = useIsLowPower();
  const reducedMotion = useReducedMotion();
  const webglOk = useHasWebGL();

  const useFallback = isLowPower || reducedMotion || !webglOk;

  if (useFallback) {
    return <SceneFallback />;
  }

  return (
    <div className="absolute inset-0">
      <CanvasErrorBoundary>
        <Canvas
          dpr={[1, 1.75]}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          camera={{ position: [0, 0, 5], fov: 40 }}
        >
          <Suspense fallback={null}>
            <GlassBlob />
          </Suspense>
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
}
