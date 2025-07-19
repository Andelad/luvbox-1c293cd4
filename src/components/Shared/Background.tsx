// import AppCube from '../../imports/AppCube-2-477';

export default function Background() {
  console.log('Background component rendering');
  return (
    <div className="fixed inset-0 z-[-1] bg-white">
      {/* AppCube temporarily disabled to test if it's causing the blank screen */}
      {/* <AppCube /> */}
    </div>
  );
}