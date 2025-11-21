import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import "./Animation.scss";

import lama from "../assets/pixel-scene/llama.gif";
import background from "../assets/pixel-scene/background.jpg";

const Animation = ({ onClose }) => {
    // ------------------------------
    // Overlay animation state
    // ------------------------------
    const [visible, setVisible] = useState(false);
    const [closing, setClosing] = useState(false);

    // ------------------------------
    // Character movement state
    // ------------------------------
    const [pos, setPos] = useState({ x: 150, y: 350 });
    const [velocityY, setVelocityY] = useState(0);
    const [isJumping, setIsJumping] = useState(false);
    const pressed = useRef({});

    const speed = 6;
    const gravity = 0.6;
    const jumpStrength = -12;
    const groundLevel = 350;

    // ------------------------------
    // Handle keyboard events
    // ------------------------------
    useEffect(() => {
        const down = e => {
            const key = e.key.toLowerCase();
            pressed.current[key === " " ? " " : key] = true;

            if (e.code === "Space" && !isJumping) {
                setVelocityY(jumpStrength);
                setIsJumping(true);
            }
        };

        const up = e => {
            const key = e.key.toLowerCase();
            pressed.current[key === " " ? " " : key] = false;
        };

        window.addEventListener("keydown", down);
        window.addEventListener("keyup", up);

        return () => {
            window.removeEventListener("keydown", down);
            window.removeEventListener("keyup", up);
        };
    }, [isJumping]);

    // ------------------------------
    // Smooth movement loop
    // ------------------------------
    useEffect(() => {
        let lastTime = performance.now();

        const loop = (t) => {
            const dt = (t - lastTime) / 16.67; // normalize to ~60fps
            lastTime = t;

            setPos(prev => {
                let { x, y } = prev;

                if (pressed.current["a"]) x -= speed * dt;
                if (pressed.current["d"]) x += speed * dt;
                if (pressed.current["w"]) y -= speed * dt;
                if (pressed.current["s"]) y += speed * dt;

                return { x, y };
            });

            requestAnimationFrame(loop);
        };

        requestAnimationFrame(loop);
    }, []);

    // ------------------------------
    // Gravity + jump physics
    // ------------------------------
    useEffect(() => {
        const interval = setInterval(() => {
            setPos(prev => {
                let newY = prev.y + velocityY;

                if (newY >= groundLevel) {
                    newY = groundLevel;
                    setVelocityY(0);
                    setIsJumping(false);
                } else {
                    setVelocityY(v => v + gravity);
                }

                return { ...prev, y: newY };
            });
        }, 16);

        return () => clearInterval(interval);
    }, [velocityY]);

    // ------------------------------
    // Overlay open animation
    // ------------------------------
    useEffect(() => {
        // Start zoom-in + fade after mount
        requestAnimationFrame(() => setVisible(true));
    }, []);

    const handleClose = () => {
        setClosing(true);
        setVisible(false);
        // Wait for CSS transition to finish before unmounting
        setTimeout(() => onClose(), 400); // match CSS transition duration
    };

    return (
        <div
            className={`animation-container ${visible ? "visible" : ""} ${closing ? "closing" : ""}`}
            onClick={handleClose}
        >
            <div
                className="animation-content"
                onClick={e => e.stopPropagation()}
                style={{ backgroundImage: `url(${background})` }}
            >
                <div className="pixel-scene">
                    <div className="sky"></div>
                    <div className="cloud cloud-bg-1"></div>
                    <div className="cloud cloud-bg-2"></div>
                    <div className="cloud cloud-bg-3"></div>
                    <div className="cloud cloud-1"></div>
                    <div className="cloud cloud-2"></div>
                    <div className="cloud cloud-3"></div>
                    <div className="cloud cloud-4"></div>
                    <div className="cloud cloud-5"></div>
                    <div className="grass"></div>
                    <div className="house">
                        <div className="roof"></div>
                        <div className="chimney">
                            <div className="smoke smoke-1"></div>
                            <div className="smoke smoke-2"></div>
                            <div className="smoke smoke-3"></div>
                        </div>
                        <div className="door"></div>
                        <div className="window window-left"></div>
                        <div className="window window-right"></div>
                    </div>

                    {/* Controls overlay */}
                    <div className="controls-overlay">
                        <div className="key-row center-row">
                            <div className={`key ${pressed.current["w"] ? "pressed" : ""}`}>W</div>
                        </div>
                        <div className="key-row full-width-row">
                            <div className={`key ${pressed.current["a"] ? "pressed" : ""}`}>A</div>
                            <div className={`key ${pressed.current["s"] ? "pressed" : ""}`}>S</div>
                            <div className={`key ${pressed.current["d"] ? "pressed" : ""}`}>D</div>
                        </div>
                        <div className="key-row">
                            <div className={`key space ${pressed.current[" "] ? "pressed" : ""}`}>SPACE</div>
                        </div>
                    </div>

                    {/* Llama */}
                    <img
                        src={lama}
                        alt="llama"
                        className="llama"
                        style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
                    />
                </div>

                <h1 className="title">Pixel Animation Scene</h1>
            </div>
        </div>
    );
};

Animation.propTypes = {
    onClose: PropTypes.func,
};

export default Animation;
