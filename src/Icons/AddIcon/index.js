import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function AddIcon({ color }) {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M12 20c-4.544 0-8-3.456-8-8 0-4.544 3.456-8 8-8 4.544 0 8 3.456 8 8 0 4.544-3.456 8-8 8zm0 2c5.526 0 10-4.474 10-10S17.526 2 12 2 2 6.474 2 12s4.474 10 10 10zm5-11h-4V7h-2v6h6v-2zM7 13h4v4h2v-6H7v2z"
                fill={color}
            />
        </Svg>
    )
}