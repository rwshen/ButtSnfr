import Link from 'next/link'

export const Nav = () => {
  return (
    <nav
      className='flex-no-wrap relative flex w-full items-center justify-between bg-blue py-2 shadow-dark-mild dark:bg-neutral-700 lg:flex-wrap lg:justify-start lg:py-4'
    >
      <div className='flex w-full flex-wrap items-center justify-between px-3'>
        <Link
          className='hover:text-white block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden'
          href='/'
        >
          ButtSnfr
        </Link>

        <div className='relative flex items-center'>
          <Link className='hover:text-white me-4 text-neutral-600 dark:text-white' href='/messages'>
            <span className='[&>svg]:w-5'>
              Bark Center
            </span>
          </Link>

          <div
            className='relative'
            data-twe-dropdown-ref
            data-twe-dropdown-alignment='end'
          >
            <Link
              className='hover:text-white me-4 flex items-center text-neutral-600 dark:text-white'
              href='/account'
              id='dropdownMenuButton1'
              role='button'
              data-twe-dropdown-toggle-ref
              aria-expanded='false'
            >
              Crate
            </Link>

          </div>
        </div>
      </div>
    </nav>
  )
}
