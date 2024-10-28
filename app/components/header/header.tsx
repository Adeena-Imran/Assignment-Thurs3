import Link from 'next/link';

const Header=()=>{
    return(
        <div>
           <header className="bg-[#AB886D] py-2 px-3 flex justify-between items-right">
         
         <div>
            <h1 className="text-left text-2xl italic font-semibold text-yellow-900">
            Woven Wonders

            </h1>
         </div>
         <div>
            <ul className="flex space-x-5 " >
                <li><a href="/Home">Home</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/Shop">Shop</a></li>
                <li><a href="/Cart">Cart</a></li>
            </ul>
         </div>
         </header>
        </div>
    )
}
export default Header