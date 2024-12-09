import Link from 'next/link';

const Navbar = () => {
  return (
    
       
      
      <nav className="bg-black text-white py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-6xl font-bold">
          <Link href="/">Shop.co</Link>
        </div>
      
        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="font-bold tehover:underline">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/new-arrivals" className=" font-bold hover:underline">
        New Arrivals
            </Link>
          </li>
          <li>
            <Link href="/on-sale" className="font-bold hover:underline">
              On Sale
            </Link>
          </li>
          <li>
            <Link href="/contact" className=" font-bold hover:underline">
              Contact
            </Link>
           </li>
        </ul>
      </div>
    </nav>
  );
}
export default  Navbar
            
