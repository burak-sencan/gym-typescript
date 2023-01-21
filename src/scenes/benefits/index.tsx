import { BenefitType, SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import {
  AcademicCapIcon,
  HomeModernIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid'
import HText from '@/shared/HText'
import Benefit from './Benefit'
import ActionButton from '@/shared/ActionButton'
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}
const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className='h-6 w-6' />,
    title: 'State of the amet eni Dolor sit amet',
    description:
      ' We provide world class fitness quipmenase. We provide true care into Each and every member.',
  },
  {
    icon: <AcademicCapIcon className='h-6 w-6' />,
    title: "100's of Diverse Classes",
    description:
      ' We provide world class fitness quipment, trainers and classes to get into Each and every member.',
  },
  {
    icon: <UserGroupIcon className='h-6 w-6' />,
    title: 'Export and Pro Trainers',
    description:
      ' We provide world class fitness quipment, trainers and classes to get you to each your ultimate fitness goals with wase. We provide true care into Each and every member.',
  },
]

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
}

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id='benefits' className='mx-auto min-h-full w-5/6 py-20'>
      <motion.div
        onViewportEnter={() => {
          setSelectedPage(SelectedPage.Benefits)
        }}>
        {/* HEADER */}
        <div className='md:my-5 md:w-3/5'>
          <HText>MORE THAN JUST GYM</HText>
          <p className='my-5 text-sm'>
            We provide world class fitness quipment, trainers and classes to get
            you to each your ultimate fitness goals with wase. We provide true
            care into Each and every member.
          </p>
        </div>

        {/* BENEFITS */}
        <motion.div
          className='my5 items-center justify-between gap-8 md:flex'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          variants={container}>
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/* GRAPHIC AND DESCRRIPTION */}
        <div className=' mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
          {/* GRAPHIC */}
          <img
            className='mx-auto'
            src={BenefitsPageGraphic}
            alt='benefits-page-graphic'
          />

          {/* DESCRTIPTION */}
          <div>
            {/* TITLE */}
            <div className='relative'>
              <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwawes'>
                <motion.div
                  className='md:my-5 md:w-3/5'
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}>
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING
                    <span className='text-primary-500'> FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRTIPTION */}
            <motion.div
              className='md:my-5 md:w-3/5'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}>
              <p className='my-5'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laborum, nostrum assumenda. Error sunt esse, temporibus nam
                quidem voluptates doloremque molestiae.
              </p>
              <p className='mb-5'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repellat facilis architecto doloribus? Animi, consequuntur aut,
                ipsum maxime et voluptatum corrupti atque voluptatem labore fuga
                id!
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className='relative mt-16'>
              <div className='before:absolute before:-bottom-20 before:right-40 before:content-sparkles'>
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Benefits
