import React, { useEffect, useRef, useState } from "react";
import './LiveMusic.scss';

type LiveMusicProps = {
    className?: string;
};

const LiveMusic: React.FC<LiveMusicProps> = ({ className = '' }) => {
    const barsRef = useRef<Array<HTMLDivElement | null>>([]);
    const [barCount, setBarCount] = useState(100);

    useEffect(() => {
        const updateBarCount = () => {
            const width = window.innerWidth;
            if (width < 480) {
                setBarCount(40);
            } else if (width < 768) {
                setBarCount(60);
            } else {
                setBarCount(100);
            }
        };

        updateBarCount();
        window.addEventListener('resize', updateBarCount);

        return () => window.removeEventListener('resize', updateBarCount);
    }, []);
    console.log(barCount)
    useEffect(() => {
        const interval = setInterval(() => {
            barsRef.current.forEach((bar) => {
                if (bar) {
                    const height = Math.random() * 100 + 10;
                    bar.style.height = `${height}%`;
                }
            });
        }, 150);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`live-music-container ${className}`}>
            {Array.from({ length: 43 }).map((_, i) => (
                <div
                    key={i}
                    ref={(el) => (barsRef.current[i] = el)}
                    className="live-music-bar primary"
                />
            ))}
        </div>
    );
};

export default LiveMusic;
