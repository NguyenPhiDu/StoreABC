import React from "react";
import Svg, { Path } from 'react-native-svg';

export default function RightIcon({ color }) {
    return (
        <Svg
            width={8}
            height={14}
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M1 13l6-6-6-6"
                stroke={color}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}
