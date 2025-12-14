const Notification = ({ message, clear }) => {
  if (!message) return null;

  return (
    <div className="fixed top-5 right-5 bg-green-600 text-white px-5 py-3 rounded-lg shadow-lg">
      {message}
      <button onClick={clear} className="ml-4 font-bold">
        ✖
      </button>
    </div>
  );
};

export default Notification;
