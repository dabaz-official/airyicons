const icons = [
  {
    name: 'chevron-up',
    src: '/icons/chevron-up.svg',
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
                <img src={icon.src} alt={icon.name} className="h-6 w-6" />
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