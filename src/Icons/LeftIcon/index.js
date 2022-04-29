import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function LeftIcon({ color }) {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M14.5 4L7 11.5l7.5 7.5"
                stroke={color}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}
