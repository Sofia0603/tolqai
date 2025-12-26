"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Layout/Header/Header";

interface HeaderWrapperProps {
    isSimple?: boolean;
}

export default function HeaderWrapper({isSimple}:HeaderWrapperProps) {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        }
    }, [isOpen]);

    return (
        <div className="relative">
            <Header isOpen={isOpen} setIsOpen={setIsOpen} isSimple={isSimple}/>

            {isOpen && (
                <div className="fixed inset-0 bg-black/50 z-30"></div>
            )}
        </div>
    );
}
