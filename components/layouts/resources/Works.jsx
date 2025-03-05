import { Gradient } from '@/components/UI/Gradient'
import { WorksModal } from '@/components/UI/Modal'
import { B2BContent, B2CContent, WCP } from '@/utils/Data'

const Works = () => {
  return (
    <section className='padding w-full space-y-14'>
      <h2 className="text-3xl text-center uppercase sm:text-5xl lg:text-6xl font-bold">
        MEDIA
      </h2>
      <Gradient rotate />
      <div className='space-y-16 md:space-y-32'>
        <WorksModal data={WCP} title={"Website Content Portfolio"} />
        <WorksModal data={B2BContent} title={"B2B Work Samples"} />
        <WorksModal data={B2CContent} title={"B2C Work Samples"} />
      </div>
    </section>
  )
}

export default Works

