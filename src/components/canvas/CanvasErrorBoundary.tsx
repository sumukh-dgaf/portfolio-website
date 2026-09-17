"use client";

import { Component, type ReactNode } from "react";
import SceneFallback from "./SceneFallback";

export default class CanvasErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.warn("3D scene failed to load, falling back to static visual.", error);
  }

  render() {
    if (this.state.hasError) return <SceneFallback />;
    return this.props.children;
  }
}
