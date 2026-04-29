import Image, { StaticImageData } from "next/image";
import React from "react";

type ImageProps = {
  imageSource: string;
};

const ImageContainer = ({ imageSource }: ImageProps) => {
  return (
    <div className="w-[80vw] h-[140vw] xl:w-[30vw] xl:h-[50vw]   flex items-center ">
      <Image
        src={imageSource}
        width={800}
        height={1200}
        className="h-auto w-auto rounded-xl"
        alt="alt text goes here"
        priority
      />
    </div>
  );
};

export default ImageContainer;
