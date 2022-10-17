const today = new Date();

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-10 border-t border-slate-400/20 pt-8 pb-4 sm:flex-row">
      <p className="flex items-center text-sm leading-6 text-slate-900">
        &copy; {today.getFullYear()} DabAZ. All rights reserved
      </p>
      <a className="rounded-lg text-slate-900 font-semibold transition flex items-center gap-3 text-sm leading-6 py-1 px-1.5 hover:bg-slate-900/[0.03] -my-1 -mx-1.5" href="https://dabazofficial.com">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
        <span>
          Personal Website
        </span>
      </a>
    </footer>
  )
}