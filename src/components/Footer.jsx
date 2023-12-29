export default function Footer() {
    return (
      <>
        <footer className="bg-gray-800 text-white p-8">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* <!-- Column 1 --> */}
      <div className="mb-4 md:mb-0">
        <h2 className="text-lg font-semibold mb-4">About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
  
      {/* <!-- Column 2 --> */}
      <div className="mb-4 md:mb-0">
        <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
        <p>Email: contact@example.com</p>
        <p>Phone: +123 456 789</p>
      </div>
  
      {/* <!-- Column 3 --> */}
      <div className="mb-4 md:mb-0">
        <h2 className="text-lg font-semibold mb-4">Social Media</h2>
        <a href="#" className="block mb-2">Facebook</a>
        <a href="#" className="block mb-2">Twitter</a>
        <a href="#" className="block">Instagram</a>
      </div>
  
      {/* <!-- Column 4 --> */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Subscribe</h2>
        <p>Subscribe to our newsletter for updates.</p>
        <form className="mt-4">
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </footer>
  
      </>
    );
  }