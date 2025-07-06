const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 text-sm px-8 py-10">
      <p className="mb-4">Questions? Call <span className="underline">000-800-919-1694</span></p>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <a href="#" className="hover:underline">FAQ</a>
        <a href="#" className="hover:underline">Help Centre</a>
        <a href="#" className="hover:underline">Terms of Use</a>
        <a href="#" className="hover:underline">Privacy</a>
        <a href="#" className="hover:underline">Cookie Preferences</a>
        <a href="#" className="hover:underline">Corporate Information</a>
      </div>

      <div className="mt-6">
        <select className="bg-black border border-gray-600 px-2 py-1">
          <option>🌐 English</option>
          <option>हिन्दी</option>
        </select>
      </div>
    </footer>
  );
};

export default Footer;
