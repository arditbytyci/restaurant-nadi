import Image from "next/image"


export  const FavoriteDishes = () => {
  return (
<div className="w-full h-full grid grid-cols-2">
  <div className="flex flex-col items-center justify-evenly"><Image src="/hero.png" width={250} height={250} alt="Plate" /> <p className="text-2xl text-[#65171D] font-bold">Tave Kosi</p></div>
  <div className="bg-[#65171D] flex flex-col  items-center justify-evenly"><Image src="/hero.png" width={250} height={250} alt="Plate" /> <p className="text-2xl text-[#FFEEDF] font-bold">Tave Kosi</p></div>
  <div className="flex flex-col  items-center justify-evenly"><Image src="/hero.png" width={250} height={250} alt="Plate" /> <p className="text-2xl text-[#65171D] font-bold">Tave Kosi</p></div>
  <div className="bg-[#65171D] flex flex-col  items-center justify-evenly"><Image src="/hero.png" width={250} height={250} alt="Plate" /> <p className="text-2xl text-[#FFEEDF] font-bold">Tave Kosi</p></div>
   
</div>
  )
}


