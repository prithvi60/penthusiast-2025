export const particleVariants1 = {
    initial: { x: 0, y: 0 },
    hover: {
        x: [0, 1, -2, 0, 2, -1, 0],
        y: [0, -1, 2, -2, 1, -1, 0],
        transition: {
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatDelay: 1,
            times: [0, 0.3, 0.5, 0.7, 0.8, 0.9, 1]
        }
    }
};

export const particleVariants2 = {
    initial: { x: 0, y: 0 },
    hover: {
        x: [0, 4, -5, 3, -3, 2, -4, 0], // Wider, erratic x movements
        y: [0, 3, -4, 2, -5, 4, -2, 0], // More dynamic y shifts
        transition: {
            duration: 2.5, // Faster for a lively effect
            ease: 'easeInOut',
            repeat: Infinity,
            repeatDelay: 0.2, // Shorter pause for continuous motion
            times: [0, 0.1, 0.3, 0.5, 0.7, 0.8, 0.9, 1] // Quick initial changes
        }
    }
};


export const particleVariants3 = {
    initial: { x: 0, y: 0 },
    hover: {
        x: [0, 1, -1, 2, -2, 1, -1, 0], // Very small, rapid x movements
        y: [0, -1, 1, -2, 2, -1, 1, 0], // Tiny y oscillations
        transition: {
            duration: 3, // Quick for a buzzing effect
            ease: 'linear', // Linear for constant vibration
            repeat: Infinity,
            repeatDelay: 0, // No pause for continuous buzz
            times: [0, 0.2, 0.4, 0.6, 0.7, 0.8, 0.9, 1] // Evenly spaced for pulse
        }
    }
};