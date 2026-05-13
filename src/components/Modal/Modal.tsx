import React, { useEffect, useRef } from "react";
import "./Modal.css";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    labelledBy?: string;
    children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, labelledBy, children }: ModalProps) {
    const overlayRef = useRef<HTMLDivElement | null>(null);
    const previousActiveRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (!isOpen) return;
        previousActiveRef.current = document.activeElement as HTMLElement | null;

        const focusFirst = () => {
            const nodes = overlayRef.current?.querySelectorAll<HTMLElement>(
                'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
            ) ?? [];
            nodes[0]?.focus();
        };

        focusFirst();

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "Tab" && overlayRef.current) {
                const nodes = Array.from(
                    overlayRef.current.querySelectorAll<HTMLElement>(
                        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
                    )
                );
                if (nodes.length === 0) return;
                const first = nodes[0];
                const last = nodes[nodes.length - 1];
                if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                } else if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                }
            }
        };

        document.addEventListener("keydown", onKey);
        // prevent background scroll
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = prevOverflow;
            previousActiveRef.current?.focus();
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onMouseDown={onClose} ref={overlayRef}>
            <div
                className="modal-content"
                role="dialog"
                aria-modal="true"
                aria-labelledby={labelledBy}
                onMouseDown={(e) => e.stopPropagation()}
            >
                <button className="modal-close" aria-label="Fechar" onClick={onClose}>×</button>
                {children}
            </div>
        </div>
    );
}
