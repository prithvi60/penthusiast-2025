export const particleVariants1 = {
    initial: { x: 0, y: 0 },
    hover: {
        x: [0, 1, -2, 0, 2, -1, 0],
        y: [0, -1, 2, -2, 1, -1, 0],
        transition: {
            duration: 4.5,
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
        x: [0, 1, -2, 0, 2, -1, 0],
        y: [0, -1, 2, -2, 1, -1, 0],
        transition: {
            duration: 5.5,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatDelay: 1,
            times: [0, 0.3, 0.5, 0.7, 0.8, 0.9, 1]
        }
    }
    // hover: {
    //     x: [0, 4, -5, 3, -3, 2, -4, 0],
    //     y: [0, 3, -4, 2, -5, 4, -2, 0],
    //     transition: {
    //         duration: 4.5,
    //         ease: 'easeInOut',
    //         repeat: Infinity,
    //         repeatDelay: 0.2,
    //         times: [0, 0.1, 0.3, 0.5, 0.7, 0.8, 0.9, 1]
    //     }
    // }
};


export const particleVariants3 = {
    initial: { x: 0, y: 0 },
    hover: {
        x: [0, 1, -1, 2, -2, 1, -1, 0],
        y: [0, -1, 1, -2, 2, -1, 1, 0],
        transition: {
            duration: 7.5,
            ease: 'linear',
            repeat: Infinity,
            repeatDelay: 0,
            times: [0, 0.2, 0.4, 0.6, 0.7, 0.8, 0.9, 1]
        }
    }
};