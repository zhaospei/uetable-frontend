import React from 'react'
import { IconProps } from './IconProps'
import { THEME } from '@/styles/theme'
import IconWrapper from './IconWrapper'

function InnerIcon({
    size, color, className, solid = false
}: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size ?? 15}
            height={size ?? 15}
            fill={color ?? THEME.ROYAL_GRAY_COLOR}
            className={className}
        >
            {solid ?
                // <path xmlns="http://www.w3.org/2000/svg" d="M20.057,16.8l.1.1a1.912,1.912,0,0,0,1.769.521,1.888,1.888,0,0,0,1.377-1.177A11.924,11.924,0,0,0,24.08,11.7,12.155,12.155,0,0,0,12.5.007,12,12,0,0,0,.083,12a12.014,12.014,0,0,0,12,12c.338,0,.67-.022,1-.05a1,1,0,0,0,.916-1l-.032-3.588A3.567,3.567,0,0,1,20.057,16.8ZM17.115,8.05A1.5,1.5,0,1,1,16.05,9.885,1.5,1.5,0,0,1,17.115,8.05Zm-9.23,8.9A1.5,1.5,0,1,1,8.95,15.115,1.5,1.5,0,0,1,7.885,16.95Zm0-6A1.5,1.5,0,1,1,8.95,9.115,1.5,1.5,0,0,1,7.885,10.95Zm5-3A1.5,1.5,0,1,1,13.95,6.115,1.5,1.5,0,0,1,12.885,7.95Z" />
                <path xmlns="http://www.w3.org/2000/svg" d="m20.678 7.393c-.916.916-.707 2.838.025 4.167a2.489 2.489 0 0 1 -3.961 2.924l-7.226-7.226a2.489 2.489 0 0 1 2.924-3.958c1.329.731 3.251.941 4.167.025l2.479-2.482a2.947 2.947 0 0 1 4.071 0 2.88 2.88 0 0 1 0 4.075zm-18.709 9.954a3.307 3.307 0 0 0 -.585 3.853l-1.091 1.093a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0l1.093-1.091a3.264 3.264 0 0 0 3.855-.586l7.4-7.4-4.682-4.686z"/>
                :
                <>
                    {/* <path d="M17.115,8.05A1.5,1.5,0,1,0,18.95,9.115,1.5,1.5,0,0,0,17.115,8.05Z" />
                    <path d="M12.115,5.05A1.5,1.5,0,1,0,13.95,6.115,1.5,1.5,0,0,0,12.115,5.05Z" />
                    <path d="M7.115,8.05A1.5,1.5,0,1,0,8.95,9.115,1.5,1.5,0,0,0,7.115,8.05Z" />
                    <path d="M7.115,14.05A1.5,1.5,0,1,0,8.95,15.115,1.5,1.5,0,0,0,7.115,14.05Z" />
                    <path d="M12.5.007A12,12,0,0,0,.083,12a12.014,12.014,0,0,0,12,12c.338,0,.67-.022,1-.05a1,1,0,0,0,.916-1l-.032-3.588A3.567,3.567,0,0,1,20.057,16.8l.1.1a1.912,1.912,0,0,0,1.769.521,1.888,1.888,0,0,0,1.377-1.177A11.924,11.924,0,0,0,24.08,11.7,12.155,12.155,0,0,0,12.5.007Zm8.982,15.4-.014-.014a5.567,5.567,0,0,0-9.5,3.985L11.992,22a10,10,0,0,1,.09-20c.117,0,.235,0,.353.006a10.127,10.127,0,0,1,9.645,9.743A9.892,9.892,0,0,1,21.485,15.4Z" /> */}
                    <path xmlns="http://www.w3.org/2000/svg" d="m23.112 5.165a3.025 3.025 0 0 0 0-4.279 3.094 3.094 0 0 0 -4.276 0l-2.436 2.438c-1.012 1.013-3.123.789-4.579-.013a2.6 2.6 0 0 0 -3.057 4.144l1.416 1.416-8.155 8.154a3.455 3.455 0 0 0 -.593 4.129l-1.139 1.139a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0l1.139-1.139a3.455 3.455 0 0 0 4.129-.593l8.154-8.155 1.416 1.416a2.6 2.6 0 0 0 4.144-3.057c-.8-1.456-1.025-3.568-.013-4.58zm-17.552 15.396a1.536 1.536 0 0 1 -2.121 0 1.5 1.5 0 0 1 0-2.121l8.155-8.154 2.121 2.121zm13.7-14.376c-1.759 1.759-1.5 4.832-.325 6.958a.578.578 0 0 1 -.119.679.621.621 0 0 1 -.859 0l-7.779-7.781a.612.612 0 0 1 .428-1.041.522.522 0 0 1 .251.063c2.126 1.17 5.2 1.434 6.958-.325l2.439-2.438a1.045 1.045 0 0 1 1.446 0 1.024 1.024 0 0 1 0 1.449z"/>
                </>
            }
        </svg>
    )
}

export default function ColorPickerIcon(props: IconProps) {
    return <IconWrapper Icon={InnerIcon} iconProps={props} />
}