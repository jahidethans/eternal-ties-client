import Banner from "../Banner/Banner";
import HowItWorks from "../HowItWirks/HowItWorks";
import PremiumCard from "../PremiumCard/PremiumCard";
import SuccessCounter from "../SuccessCounter/SuccessCounter";
import SuccessStory from "../SuccessStory/SuccessStory";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PremiumCard></PremiumCard>
            <HowItWorks></HowItWorks>
            <SuccessCounter></SuccessCounter>
            <SuccessStory></SuccessStory>
        </div>
    );
};

export default Home;