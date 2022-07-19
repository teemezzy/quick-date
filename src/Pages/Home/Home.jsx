import React, { useEffect, useRef, useState } from 'react';
import Header from '../../components/Header/Header';
import Banner from '../../components/Home/Banner';
import HowItWorks from '../../components/Home/HowItWorks';
import Stat from '../../components/Home/Stat';
import Review from '../../components/Home/Review';
import Footer from '../../components/Home/Footer';
import { useLocation } from 'react-router-dom';

const Home = () => {
    const [goto, setGoto] = useState('');
    const howItWorks = useRef();
    const gotoHowItWorks = (value) => setGoto(value);
    
    const pathname = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname]);

    useEffect(() => {
        if (goto === 'how it works') {
          howItWorks.current.scrollIntoView();
        }
        setGoto('');
    }, [goto]);
    return (
        <div>
            <Header />
            <Banner gotoHowItWorks={gotoHowItWorks} />
            <Stat />
            <div ref={howItWorks}>
                <HowItWorks />
            </div>
            <Review />
            <Footer />
        </div>
    )
}


export default Home;
