const icons = [
  {
    name: 'chevron-up',
    imgSrc: '/icons/chevron-up.svg',
    imgAlt: 'chevron-up',
    svg: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
      </svg>
    `
  },
  {
    name: 'chevron-down',
    imgSrc: '/icons/chevron-down.svg',
    imgAlt: 'chevron-down',
    svg: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    `
  },
  {
    name: 'chevron-left',
    imgSrc: '/icons/chevron-left.svg',
    imgAlt: 'chevron-left',
    svg: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    `
  },
  {
    name: 'chevron-right',
    imgSrc: '/icons/chevron-right.svg',
    imgAlt: 'chevron-right',
    svg: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    `
  },
]

export default function IconsList() {
  return (
    <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-6 sm:gap-x-6 lg:grid-cols-6 xl:gap-x-8 xl:grid-cols-8 mb-8">
      {icons.map((icon) => (
        <li key={icon.id}>
          <div className="relative h-[6rem]">
            <button type="button" id={`${icon.name}-btn`} aria-label={icon.name} className="absolute inset-0 flex h-full w-full cursor-auto items-center justify-center rounded-xl text-slate-900 ring-1 ring-inset ring-slate-900/[0.08]">
              <span className="transition-transform duration-500 ease-in-out">
                <img src={icon.imgSrc} alt={icon.imgAlt} className="h-8 w-8" />
              </span>
            </button>
          </div>
          <div className="mt-3 truncate text-center text-[0.8125rem] leading-6 text-slate-500">
            {icon.name}
          </div>
        </li>
      ))}
    </ul>
  )
}