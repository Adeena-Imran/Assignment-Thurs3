import Link from 'next/link';

const Footer=()=>{
    return(
        <footer className="bg-[#AB886D]  text-yellow-900 py-10">
        <div >
          <div className="flex justify-between">
            <div>
              <h2 className="text-lg font-semibold">About Us</h2>
              <p>Discover the art of handcrafted creations. Each piece tells a story and is made with love and passion.</p>
            </div>
            <div className="mt-4 mt-0">
              
              <ul>
                <li><a href="/" >Home</a></li>
                <li><a href="/shop" >Shop</a></li>
                <li><a href="/about" >About</a></li>
                <li><a href="/blog" >Blog</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            <div className="mt-4 md:mt-0">
             
              <div className="flex space-x-4">
                <a href="#" className="hover:underline">Facebook</a>
                <a href="#" className="hover:underline">Instagram</a>
               
              </div>
            </div>
          </div>
          <div className="mt-6 border-t border-gray-700 pt-4 text-center">
            <p>© 2024 Handcrafted. All Rights Reserved.</p>
            <p>Handcrafted with care </p>
          </div>
        </div>
      </footer>
    )

}

export default Footer