

const LeftFace: React.FC = () => {
  return (
    <div className="face-content bg-green-500 w-full h-full flex flex-col items-center justify-center text-white">
      <span className="text-lg font-bold">Left Face</span>
      <button className="mt-2 px-3 py-1 rounded bg-white text-green-500 font-semibold shadow">Action</button>
    </div>
  );
};

export default LeftFace;