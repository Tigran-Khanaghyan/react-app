import React from "react"
import { withAuth } from "HoC/withAuth"

export const PrivateContent = () => {
    
        return (
            <div>Some Private information</div>
        )
    
}

export default withAuth(PrivateContent)