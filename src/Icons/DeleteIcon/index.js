import React from "react";
import Svg, { Path } from 'react-native-svg';

export default function DeleteIcon({ color }) {
    return (
        <Svg
            width={16}
            height={17}
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M13.629 6.447s-.44 5.461-.696 7.762c-.122 1.098-.8 1.742-1.912 1.762-2.115.038-4.233.041-6.348-.004-1.07-.022-1.737-.673-1.856-1.753-.257-2.32-.695-7.767-.695-7.767M14.75 3.83H1M12.1 3.829c-.636 0-1.184-.45-1.309-1.074l-.197-.986A1.038 1.038 0 009.591 1H6.16c-.47 0-.881.315-1.003.77l-.197.985a1.336 1.336 0 01-1.31 1.074"
                stroke={color}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}