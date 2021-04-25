function Message({ message, socketId, senderId }) {
  return socketId !== senderId ? (
    <div className="flex flex-row p-4 gap-5">
      <div className="flex px-5 py-3 max-w-5xl mx-auto bg-darkGray rounded-lg items-center text-white mr-0">
        <p class="break-words text-right">{message}</p>
      </div>
      <img
        alt="sample"
        className="h-16 w-16 rounded-full"
        src="https://via.placeholder.com/150"
      />
    </div>
  ) : (
    <div className="flex flex-row p-4 gap-5">
      <img
        alt="sample"
        className="h-16 w-16 rounded-full"
        src="https://via.placeholder.com/150"
      />
      <div className="flex px-5 py-3 max-w-5xl mx-auto bg-white rounded-lg items-center ml-0">
        <p class="break-words text-left">{message}</p>
      </div>
    </div>
  );
}

export default Message;
