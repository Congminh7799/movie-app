import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="container mx-auto px-20 lg:mt-12 md:mt-8 sm:mt-6 xs:mt-4 mt-2">
            {children}
        </main>
    )
}

export default Container;