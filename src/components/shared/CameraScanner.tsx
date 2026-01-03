"use client";

import { useEffect, useRef, useState } from "react";
import { Html5QrcodeScanner, Html5QrcodeSupportedFormats } from "html5-qrcode";
import { X, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CameraScannerProps {
    onScan: (barcode: string) => void;
    onClose: () => void;
}

export function CameraScanner({ onScan, onClose }: CameraScannerProps) {
    const scannerRef = useRef<Html5QrcodeScanner | null>(null);

    useEffect(() => {
        // Initialize scanner
        scannerRef.current = new Html5QrcodeScanner(
            "reader",
            {
                fps: 10,
                qrbox: { width: 250, height: 150 },
                aspectRatio: 1.777778, // 16:9
                formatsToSupport: [
                    Html5QrcodeSupportedFormats.EAN_13,
                    Html5QrcodeSupportedFormats.EAN_8,
                    Html5QrcodeSupportedFormats.CODE_128,
                    Html5QrcodeSupportedFormats.CODE_39,
                    Html5QrcodeSupportedFormats.UPC_A,
                    Html5QrcodeSupportedFormats.UPC_E,
                    Html5QrcodeSupportedFormats.QR_CODE
                ]
            },
            /* verbose= */ false
        );

        scannerRef.current.render(
            (decodedText) => {
                onScan(decodedText);
                if (scannerRef.current) {
                    scannerRef.current.clear();
                }
                onClose();
            },
            (error) => {
                // Ignore errors
            }
        );

        return () => {
            if (scannerRef.current) {
                scannerRef.current.clear().catch(err => console.error("Error clearing scanner", err));
            }
        };
    }, [onScan, onClose]);

    return (
        <div className="fixed inset-0 z-[100] bg-black/90 flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-lg bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <div className="p-4 border-b border-white/5 flex justify-between items-center bg-zinc-950">
                    <div className="flex items-center gap-2">
                        <Camera className="w-4 h-4 text-primary" />
                        <span className="text-xs font-black uppercase tracking-widest text-white">Camera Scanner</span>
                    </div>
                    <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:bg-white/10 rounded-full">
                        <X className="w-5 h-5" />
                    </Button>
                </div>

                <div className="aspect-video relative bg-black">
                    <div id="reader" className="w-full h-full"></div>
                </div>

                <div className="p-6 text-center bg-zinc-950">
                    <p className="text-xs text-zinc-400 font-medium leading-relaxed">
                        Point your camera at the barcode.<br /> Make sure it is well-lit and centered.
                    </p>
                </div>
            </div>
        </div>
    );
}
