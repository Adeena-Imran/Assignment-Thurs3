
import Link from 'next/link';
import Header from "../components/header/header"
import HeroSec from "../herosec/page"
import MainSec from "../mainsec/page"
import Footer from '../components/header/footer';






function home(){
    return(
        <div>
            <Header></Header>
            <HeroSec></HeroSec>
            <MainSec></MainSec>
            <Footer></Footer>
            
            
        </div>
    )
}

export default home




