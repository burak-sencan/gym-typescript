import { useState } from 'react'

import useMediaQuery from '@/hooks/useMediaQuery'
import Link from './Link'
import Logo from '@/assets/Logo.png'
import ActionButton from '@/shared/ActionButton'
import { SelectedPage } from '@/shared/types'

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

type Props = {
  isTopOfPage: boolean
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const [isMenuToggle, setIsMenuToggled] = useState<boolean>(false)

  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')
  const navbarBackgrond = isTopOfPage ? '' : 'bg-primary-100 drop-shadow'

  return (
    <nav>
      <div
        className={`${navbarBackgrond} flex-between fixed top-0 z-20 w-full  py-6`}>
        <div className='flex-between  mx-auto w-5/6'>
          <div className='flex-between w-full gap-16'>
            {/* left */}
            <img src={Logo} alt='logo' />
            {/* right */}
            {isAboveMediumScreens ? (
              <div className='flex-between w-full'>
                <div className='flex-between gap-8 text-sm'>
                  <Link
                    page='Home'
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page='Benefits'
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page='Our Classes'
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page='Contact Us'
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className='flex-between gap-8'>
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Became a member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className='rounded-full bg-secondary-500 p-2'
                onClick={() => setIsMenuToggled(!isMenuToggle)}>
                <Bars3Icon className='h-5 w-5 text-white' />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggle && (
        <div className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl'>
          {/* CLOSE ICON */}
          <div className='flex justify-end p-12'>
            <button onClick={() => setIsMenuToggled(!isMenuToggle)}>
              <XMarkIcon className='h-6 w-6 text-gray-400' />
            </button>
          </div>
          {/* MENU ITEMS */}
          <div className='ml-[33%] flex flex-col gap-10 text-2xl'>
            <Link
              page='Home'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page='Benefits'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page='Our Classes'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page='Contact Us'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
