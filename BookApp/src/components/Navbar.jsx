const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'Browse Books', id: 'browse' },
  { name: 'My Cart', id: 'cart' },
  { name: 'Wishlist', id: 'wishlist' },
  { name: 'About Us', id: 'about' },
];

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-bold text-xl text-indigo-700 tracking-wide">
          <span className="inline-block align-middle mr-2">📚</span>
          BookApp
        </div>
        <div className="flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-gray-700 font-medium hover:text-indigo-600 px-2 py-1 transition-colors duration-200 rounded-md"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
