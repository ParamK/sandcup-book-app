import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
    const variants = {
        initial: { opacity: 0, translateY: '-100vh' },
        animate: { opacity: 1, translateY: 0 },
        exit: { opacity: 0, translateY: '-100vh' },
    };

    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;