"use client";
import { useLenis } from "@/components/Scroll/useLenis";

export default function LenisProvider({ children }) {
  useLenis();
  return <>{children}</>;
}