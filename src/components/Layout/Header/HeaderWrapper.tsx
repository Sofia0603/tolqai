"use client";

import { useState } from "react";
import Header from "@/components/Layout/Header/Header";

export default function HeaderWrapper() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={isOpen ? "overflow-hidden" : ""}>
            <Header isOpen={isOpen} setIsOpen={setIsOpen} />

            {isOpen && (
                <div className="absolute inset-0 bg-black/50 z-40 pointer-events-none"></div>
            )}
        </div>
    );
}
