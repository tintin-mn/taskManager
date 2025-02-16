import {SVGProps} from "react"

interface SVGRProps {
    desc?: string;
    descId?: string;
    className: string;
}

const ShareIcon = ({desc, descId, className, ...props}: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        aria-describedby={descId}
        className={className}
        stroke="#323232"
        {...props}
    >
        {desc ? <desc id={descId}>{desc}</desc> : null}
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m13.53 7.52-4.06 3.04M16.405 4.642a2.032 2.032 0 1 1-2.874 2.874 2.032 2.032 0 0 1 2.874-2.874M13.53 16.48l-4.06-3.04M16.405 16.484a2.032 2.032 0 1 1-2.874 2.874 2.032 2.032 0 0 1 2.874-2.874M9.465 10.565a2.03 2.03 0 1 1-2.87 2.87 2.03 2.03 0 0 1 2.87-2.87"
        />
    </svg>
)
export default ShareIcon
