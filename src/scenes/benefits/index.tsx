import { BenefitType, SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import {
  AcademicCapIcon,
  HomeModernIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid'
import HText from '@/shared/HText'
import Benefit from './Benefit'

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
      </motion.div>
    </section>
  )
}

export default Benefits
