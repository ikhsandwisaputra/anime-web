export default function Modal({ isOpen, onClose, children }) {
    const modalClass = isOpen ? 'fixed top-0 left-0 w-full h-full flex items-center justify-center' : 'hidden';
  
    return (
      <div className={`${modalClass} bg-black bg-opacity-50`}>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          {children}
        </div>
      </div>
    );
  }