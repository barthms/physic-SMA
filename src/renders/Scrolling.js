import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Memastikan scroll kembali ke atas
    }, [pathname]);

    return null; // Tidak merender elemen apapun
};

export default ScrollToTop;
