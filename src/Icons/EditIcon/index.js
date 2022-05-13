import React from "react";
import Svg, { Path } from 'react-native-svg';

export default function EditIcon({ color, height, width }) {
    return (
        <Svg
            width={width}
            height={height}
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M4.697.924H3.075c-1.333 0-2.169.944-2.169 2.28V6.81c0 1.337.832 2.28 2.17 2.28h3.826c1.337 0 2.17-.943 2.17-2.28V5.063"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                clipRule="evenodd"
                d="M3.541 4.451l3.24-3.24a1.034 1.034 0 011.463 0l.527.527a1.034 1.034 0 010 1.462L5.515 6.456a.941.941 0 01-.665.276H3.225l.041-1.64a.941.941 0 01.275-.64z"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M6.29 1.71l1.98 1.98"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}