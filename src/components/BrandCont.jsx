import { motion } from "framer-motion"

const BrandCont = ({image, imageAlt, video, videoType}) => {
  return (
    <motion.div 
        className='border relative rounded-md md:rounded-md lg:rounded-lg xl:rounded-xl z-10 cursor-pointer overflow-hidden bg-[#1a1d29] shadow-2xl shadow-black'
        whileHover={{scale: 1}}
        initial={{scale: 0.9}}
        transition={{duration: 0.2, easings: ["backOut", "backIn"]}}
    >
        <img className='absolute object-cover block inset-0 w-full top-0 h-full' src={image} alt={imageAlt} />
        <motion.video 
            className=""
            autoPlay={true} loop={true} playsInline={true}
            initial={{opacity: 0}}
            whileHover={{opacity: 1}}
            transition={{easings:["circIn", "circOut"]}}
        >
            <source src={video} type={videoType} />
        </motion.video>
    </motion.div>
  )
}

export default BrandCont