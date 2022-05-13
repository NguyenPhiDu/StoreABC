import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function AddIcon({ color }) {
    return (
        <Svg
        width={24}
        height={24}
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M0 15C0 6.715 6.715 0 15 0s15 6.715 15 15-6.715 15-15 15S0 23.285 0 15zm15 6.563c.78 0 1.406-.627 1.406-1.407v-3.75h3.75c.78 0 1.407-.627 1.407-1.406 0-.78-.627-1.406-1.407-1.406h-3.75v-3.75c0-.78-.627-1.406-1.406-1.406-.78 0-1.406.626-1.406 1.406v3.75h-3.75c-.78 0-1.406.627-1.406 1.406 0 .78.626 1.406 1.406 1.406h3.75v3.75c0 .78.627 1.407 1.406 1.407z"
          fill={color}
        />
      </Svg>
    )
}