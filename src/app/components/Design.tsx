import dynamic from "next/dynamic";

const FloatingMathSymbols = dynamic(() => import("./FloatingMathSymbols"), {
  loading: () => null,
});

export default function Design() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FEBFD2] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#DB0073] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-40 left-40 w-80 h-80 bg-[#FAD4E4] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>
      <FloatingMathSymbols />
    </div>
  );
}
