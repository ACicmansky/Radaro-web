export const fadeInUp = (delay: number = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: "easeOut" },
    viewport: { once: true, amount: 0.1 },
});

export const fadeIn = (delay: number = 0.2) => ({
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 0.6, delay, ease: "easeOut" },
    viewport: { once: true, amount: 0.2 },
});

export const fadePresence = (opacity: number = 0.9) => ({
    initial: { opacity: 0 },
    animate: { opacity },
    exit: { opacity: 0 },
    transition: { duration: 0.3 },
});

export const fadeRotateIn = (delay: number = 0) => ({
    initial: { opacity: 0, rotate: -90 },
    animate: { opacity: 1, rotate: 0 },
    transition: { duration: 0.3, delay },
});

export const scaleIn = {
    initial: { scale: 0.8, opacity: 0 },
    whileInView: { scale: 1, opacity: 1 },
    transition: { type: "spring", stiffness: 300, duration: 0.6 },
    viewport: { once: true, amount: 0.2 },
};

export const hoverGrow = (useTransition: boolean = true) => ({
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.98 },
    ...(useTransition ? {
        transition: { type: "spring", stiffness: 300, duration: 0.2 }
    } : {})
});

export const hoverLift = {
    whileHover: { y: -2 },
    transition: { duration: 0.3 },
};

export const modalSpring = {
    initial: { scale: 0.9, opacity: 0, y: 20 },
    animate: { scale: 1, opacity: 1, y: 0 },
    exit: { scale: 0.9, opacity: 0, y: 20 },
    transition: { type: "spring", damping: 25, stiffness: 300 }
  };

export const growWidth = {
    initial: { width: 0 },
    animate: { width: 64 },
    transition: { duration: 0.5, delay: 0.4, ease: "easeOut" },
};
    