import { SelectedPage } from '@/shared/types'
import Logo from '@/assets/Logo.png'

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Footer = ({ setSelectedPage }: Props) => {
  return (
    <footer className='bg-primary-100 py-16'>
      <div className='mx-auto w-5/6 justify-between gap-16 md:flex'>
        <div className='mt-16 basis-1/2 md:mt-0'>
          <img src={Logo} alt='logo' />
          <p className='my-5'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
            quam, et repellat magni nihil neque similique maiores tenetur
            tempora temporibus ex? Deserunt quae iusto vitae.
          </p>
          <p>@ Evogym All Rights Reserved.</p>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
          <h4 className='font-bold'>Links</h4>
          <p className='my-5'>Mass orci senectus</p>
          <p className='my-5'>Et gravida id et etiam</p>
          <p>Lorem ipsum dolor sit.</p>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
          <h4 className='font-bold'>Contact Us</h4>
          <p className='my-5'>(0202) 456 45 23</p>
          <p className='my-5'>Et gravida id et etiam</p>
          <p>Lorem ipsum dolor sit.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
