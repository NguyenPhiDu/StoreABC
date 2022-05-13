import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function NotificationIcon({ color, width, height }) {
    return (
        <Svg
            width={width}
            height={height}
            viewBox="0 0 17 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M13.002 6.3a4.801 4.801 0 00-9.602 0c0 5.602-2.4 7.202-2.4 7.202h14.403s-2.4-1.6-2.4-7.201zM9.585 16.703a1.601 1.601 0 01-2.768 0"
                stroke={color}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}
