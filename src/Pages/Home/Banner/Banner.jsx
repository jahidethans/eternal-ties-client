import { useNavigate } from 'react-router-dom';
import bannerVid from '../../../assets/bannerVid.mp4'

const Banner = () => {
    const navigate = useNavigate()
    const handleNavigate = ()=>{
        navigate('/biodatas')
    }
    return (
        <div className='w-full h-[90vh] relative text-white space-y-'>
            <video className='h-full w-full object-cover' src={bannerVid} autoPlay loop muted />

            <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>

            <div className='absolute top-0 h-full w-full flex flex-col justify-center text-center p-4 space-y-8'><h1>Discover Love's Symphony: Join EternalTies <br />  <br /> - A Place Where Hearts Align, Stories Unfold, and Everlasting Bonds Begin!</h1>
                <div className='md:flex justify-center gap-6 items-center'><h2>Start searching now</h2>
                <button onClick={handleNavigate} className='w-fit'>Explore</button></div>
            </div>
        </div>
    );
};

export default Banner;