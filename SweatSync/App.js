import React from "react";
import "./style.css";

export const HomeScreen = () => {
    return (
        <div className="home-screen">
            <div className="overlap-group-wrapper">
                <div className="overlap-group">
                    <div className="streamline-interface" />
                    <img className="screenshot" alt="Screenshot" src="screenshot-2023-10-21-121613-1.png" />
                    <img className="vector" alt="Vector" src="vector.svg" />
                    <p className="any-plans-for-the">
                        <span className="text-wrapper">Any plans for the day?</span>
                        <span className="span">&nbsp;</span>
                    </p>
                    <img className="subway-up" alt="Subway up" src="subway-up-2.svg" />
                    <img className="ph-map-pin-fill" alt="Ph map pin fill" src="ph-map-pin-fill.svg" />
                    <img className="img" alt="Ph map pin fill" src="image.svg" />
                </div>
            </div>
        </div>
    );
};
