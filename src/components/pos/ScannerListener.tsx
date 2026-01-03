"use client";

import { useEffect, useRef } from "react";

interface ScannerListenerProps {
    onScan: (barcode: string) => void;
}

export function ScannerListener({ onScan }: ScannerListenerProps) {
    const buffer = useRef<string>("");
    const lastTime = useRef<number>(0);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const now = Date.now();

            // If time between keystrokes is too long, reset buffer (most scanners are fast)
            // Standard scanner speed is usually < 50ms per char
            if (now - lastTime.current > 100) {
                buffer.current = "";
            }

            lastTime.current = now;

            if (e.key === "Enter") {
                if (buffer.current.length > 0) {
                    onScan(buffer.current.trim());
                    buffer.current = "";
                }
            } else if (e.key.length === 1) {
                buffer.current += e.key;
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onScan]);

    return null;
}
