import React from "react";
import PropTypes from "prop-types";
import "./Animation.scss";

// import sky from "../assets/pixel-scene/sky.png";
// import mountain from "../assets/pixel-scene/mountain.png";
// import waterfall from "../assets/pixel-scene/waterfall.gif";
// import tree from "../assets/pixel-scene/tree.png";
// import house from "../assets/pixel-scene/house.png";
// import smoke from "../assets/pixel-scene/smoke.gif";
// import person from "../assets/pixel-scene/person-walk.gif";
// import bird from "../assets/pixel-scene/bird.gif";
import lama from "../assets/pixel-scene/llama.gif";
import background from "../assets/pixel-scene/background.jpg";

const Animation = ({ onClose }) => {
    return (
        <div className="animation-container" onClick={onClose}>
            <div className="animation-content" onClick={(e) => e.stopPropagation()} style={{ backgroundImage: `url(${background})` }}>
                <div className="pixel-scene">
                    {/* Sky */}
                    <div className="sky"></div>

                    {/* Moving Clouds - Background (slower, bigger, lower opacity) */}
                    <div className="cloud cloud-bg-1"></div>
                    <div className="cloud cloud-bg-2"></div>
                    <div className="cloud cloud-bg-3"></div>

                    {/* Moving Clouds - Foreground (faster, smaller, higher opacity) */}
                    <div className="cloud cloud-1"></div>
                    <div className="cloud cloud-2"></div>
                    <div className="cloud cloud-3"></div>
                    <div className="cloud cloud-4"></div>
                    <div className="cloud cloud-5"></div>

                    {/* Grass */}
                    <div className="grass"></div>

                    {/* House with Chimney */}
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

                    {/* Llama - Still to the left of house */}
                    <img src={lama} alt="llama" className="llama" />
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
