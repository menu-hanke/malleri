import React from 'react'
import LibraryIndex from "../containers/LibraryIndex"
import { useRouteData } from "react-static"

export default () => {
    const routeData = useRouteData()
    console.log(routeData)
    return (
        <div>
            <LibraryIndex packages={routeData.packages}></LibraryIndex>
        </div>
    )
}