import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function HomeIcon({ color, height, width }) {
    return (
        <Svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M9.75 16.25h4.5"
                stroke={color}
                strokeWidth={1.5}
                strokeLinecap="round"
            />
            <Path
                clipRule="evenodd"
                d="M2 13.713c0-5.631.64-5.238 4.088-8.303C7.597 4.246 9.944 2 11.971 2c2.026 0 4.42 2.235 5.942 3.41C21.36 8.475 22 8.082 22 13.713 22 22 19.956 22 12 22c-7.956 0-10 0-10-8.287z"
                stroke={color}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>)
}
