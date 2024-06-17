import Image from "next/image"

const ProductHeaderImage = ({ image }) => {
  return <section>
    <div className=' container-xl m-auto'>
      <div className='grid grid-cols-1'>
        <Image
          src={require(`@/images/products${image}`)}
          alt=''
          className="object-cover h-[400px]"
          width={0}
          height={0}
          sizes="100vw"
          priority={true}
        />
        
      </div>
    </div>
  </section>
}

export default ProductHeaderImage