export default function Masthead() {
  return (
    <div className="flex justify-center text-center lg:pt-5 lg:pb-7 lg:text-left">
      <div className="flex max-w-[37rem] flex-col py-16 lg:pt-12 lg:pb-11">
        <div className="mt-6 text-[1.75rem] font-extrabold leading-9 tracking-tight text-slate-900 md:text-4xl">
          Beautiful handmade icons
        </div>
        <div className="mt-6 text-lg font-medium text-center flex items-center justify-center gap-4 text-violet-700">
          10 icons / 100% Handmade
        </div>
      </div>
    </div>
  )
}