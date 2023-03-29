import { ClassType, SelectedPage } from '@/shared/types';
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from 'framer-motion';
import HText from '@/shared/HText';
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Fitness Training Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam maxime itaque praesentium voluptas voluptatem! Quas ad a placeat aliquam, vero quos ab voluptatibus quo natus dolorum sequi in quasi nobis.",
    image: image1
  },
  {
    name: "Yoga Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam maxime itaque praesentium voluptas voluptatem! Quas ad a placeat aliquam, vero quos ab voluptatibus quo natus dolorum sequi in quasi nobis.",
    image: image2
  },
  {
    name: "Ab Core Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam maxime itaque praesentium voluptas voluptatem! Quas ad a placeat aliquam, vero quos ab voluptatibus quo natus dolorum sequi in quasi nobis.",
    image: image3
  },
  {
    name: "Adventure Training Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam maxime itaque praesentium voluptas voluptatem! Quas ad a placeat aliquam, vero quos ab voluptatibus quo natus dolorum sequi in quasi nobis.",
    image: image4
  },
  {
    name: "Weight Training Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam maxime itaque praesentium voluptas voluptatem! Quas ad a placeat aliquam, vero quos ab voluptatibus quo natus dolorum sequi in quasi nobis.",
    image: image5
  },
  {
    name: "Weight Training Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam maxime itaque praesentium voluptas voluptatem! Quas ad a placeat aliquam, vero quos ab voluptatibus quo natus dolorum sequi in quasi nobis.",
    image: image6
  },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className='w-full bg-primary-100 py-40'>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}  
      >
        <motion.div
          className='mx-auto w-5/6'
          initial='hidden'
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className='md:w-3/5'>
            <HText>OUR CLASSES</HText>
            <p className='py-5'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam 
              vitae explicabo inventore hic atque, id facilis assumenda ipsa. 
              Aliquam, assumenda esse molestias doloremque corrupti dolore culpa 
              cumque reprehenderit a debitis.
            </p>
          </div> 
        </motion.div>
        <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
          <ul className='w-[2800px] whitespace-nowrap'>
            {classes.map((item: ClassType, index) => (
              <Class 
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  )
}

export default OurClasses