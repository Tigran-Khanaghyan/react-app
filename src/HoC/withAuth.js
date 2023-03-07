import React from "react";

export function withAuth(WrappedComponent) {
    return function wrappedRender(originalProps) {

        function isAuthenticated() {
            console.log(originalProps)
            return originalProps.isAuth
        }

        const errorMessage = (
            <div>
                Please <a href="/">login</a> for this data
            </div>
        )

        return (
            <div>
                {
                    isAuthenticated() === true ? <WrappedComponent {...originalProps}/> : errorMessage
                }
            </div>
        )
    }
}