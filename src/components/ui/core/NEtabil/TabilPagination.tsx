const TabilPagination = () => {
  return (
    <div className="flex items-center justify-center space-x-2  ">
      {/* Previous Button */}
      <button className="px-3 py-1  text-black hover:text-gray-500">
        &lt; Previous
      </button>
      {/* Page Numbers */}
      <button className="px-3 py-1 border rounded text-black hover:text-gray-500">
        1
      </button>
      {/* Next Button */}
      <button className="px-3 py-1  text-black hover:text-gray-500">
        Next &gt;
      </button>
    </div>
  );
};

export default TabilPagination;
