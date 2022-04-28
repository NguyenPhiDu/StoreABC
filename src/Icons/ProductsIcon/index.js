import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function ProductsIcon({ color, height, width }) {
    return (
        <Svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6.75a.25.25 0 00-.25.25v13c0 .138.112.25.25.25h16a.25.25 0 00.25-.25V7a.25.25 0 00-.25-.25H4zM2.25 7c0-.966.784-1.75 1.75-1.75h16c.966 0 1.75.784 1.75 1.75v13A1.75 1.75 0 0120 21.75H4A1.75 1.75 0 012.25 20V7z"
                fill={color}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.225 12.004a.75.75 0 01.75-.75h6a.75.75 0 110 1.5h-6a.75.75 0 01-.75-.75zM5.936 2.006A.75.75 0 016.5 1.75h11a.75.75 0 01.564.256l3.5 4a.75.75 0 11-1.128.988L17.16 3.25H6.84L3.564 6.994a.75.75 0 11-1.128-.988l3.5-4z"
                fill={color}
            />
        </Svg>
    )
}