import { CgSpinner } from "react-icons/cg";

function Spinner() {
  return (
    <div className="grid justify-center pt-40 min-h-screen w-screen">
      <CgSpinner size={40} className="animate-spin" />
    </div>
  );
}

export default Spinner;
