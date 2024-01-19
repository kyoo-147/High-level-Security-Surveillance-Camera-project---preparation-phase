const LoadingScreen = () => {
  return (
    <div className={`flex h-screen items-center justify-center`}>
      <div className="mb-4 h-16 w-16">
        <svg className="h-full w-full text-indigo-500" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12 0L4.15 6.36l1.41 1.41L12 3.44l6.44 4.33 1.41-1.41L12 0zm0 7.5L4.15 13.86l1.41 1.41L12 10.94l6.44 4.33 1.41-1.41L12 7.5zm0 7.5L4.15 21.36l1.41 1.41L12 18.44l6.44 4.33 1.41-1.41L12 15z"
          />
        </svg>
      </div>
      <div className="text-gray-600">Loading</div>
    </div>
  );
};

export default LoadingScreen;
