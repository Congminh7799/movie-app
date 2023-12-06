import React from "react";

const Container = ({children}: {children: React.ReactNode}) => {
    return(
        <main className="container mx-auto">
            {children}
        </main>
    )
}

export default Container;