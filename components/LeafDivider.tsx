export default function LeafDivider({
    flip = false,
}: {
    flip?: boolean;
}) {
    return (
        <div className={`w-full overflow-hidden ${flip ? "rotate-180" : ""}`}>
            <svg
                viewBox="0 0 1440 90"
                preserveAspectRatio="none"
                className="w-full h-[90px]"
            >
                <path
                    d="M0,40 C120,70 260,10 380,30 520,55 620,80 760,60 900,40 1040,0 1180,25 1300,45 1400,65 1440,50 L1440,0 L0,0 Z"
                    fill="#e8f5e9"
                />
            </svg>
        </div>
    );
}
