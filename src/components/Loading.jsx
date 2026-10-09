const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 ">
      <div className="flex space-x-2">
        <div className="size-4 rounded-full bg-blue-400 animate-bounce" />
        <div
          className="size-4 rounded-full bg-blue-400 animate-bounce"
          style={{ animationDelay: '0.15s' }}
        />
        <div
          className="size-4 rounded-full bg-blue-400 animate-bounce"
          style={{ animationDelay: '0.3s' }}
        />
      </div>
    </div>
  );
};

export default Loading;
