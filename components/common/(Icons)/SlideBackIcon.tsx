import { THEME } from "@/styles/theme";
import { IconProps } from "./IconProps";

export default function SlideBackIcon({
    size,
    color,
    className
}: IconProps) {
    return (
        <svg
            viewBox="0 0 24 24"
            width={size ?? 30}
            height={size ?? 30}
            fill={color ?? THEME.ROYAL_GRAY_COLOR}
            className={className}
        >
            <path d="M12,24a1.493,1.493,0,0,1-1.06-.439L3.264,15.889a5.5,5.5,0,0,1,0-7.778L10.936.439a1.5,1.5,0,1,1,2.121,2.122L5.385,10.232a2.5,2.5,0,0,0,0,3.536l7.672,7.671A1.5,1.5,0,0,1,12,24Z" /><path d="M21.542,24a1.5,1.5,0,0,1-1.061-.439L11.4,14.475a3.505,3.505,0,0,1,0-4.95L20.481.439A1.5,1.5,0,0,1,22.6,2.561l-9.086,9.085a.5.5,0,0,0,0,.708L22.6,21.439A1.5,1.5,0,0,1,21.542,24Z" />
        </svg>
    )
}
