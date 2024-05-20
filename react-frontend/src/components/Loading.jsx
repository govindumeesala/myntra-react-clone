const Loading = () => {
  return (
    <div className="text-center">
      <div
        className="spinner-border loading"
        style={{ width: "5rem", height: "5rem", margin: "100px 0" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
