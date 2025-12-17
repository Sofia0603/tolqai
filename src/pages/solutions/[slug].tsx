import ErrorBoundary from "@/components/Utils/ErrorBoundary";
import Hero from "@/components/Hero/Hero";
import React from "react";

export default function Sample(){
    return (
        <>
            <ErrorBoundary fallback={<div>Dashboard failed to load.</div>}>
                <Hero />
            </ErrorBoundary>
        </>
    )
}