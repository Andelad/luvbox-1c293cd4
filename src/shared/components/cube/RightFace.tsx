

const RightFace: React.FC = () => {
  return (
    <div className="face-content bg-red-500 w-full h-full flex flex-col items-center justify-center text-white">
      <span className="text-lg font-bold">Right Face</span>
      <button className="mt-2 px-3 py-1 rounded bg-white text-red-500 font-semibold shadow">Action</button>
    </div>
  );
};

export default RightFace;