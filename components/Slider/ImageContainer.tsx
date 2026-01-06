import Image from "next/image";
import React from "react";

type ImageProps = {
  imageSource: any;
};

const ImageContainer = ({ imageSource }: ImageProps) => {
  return (
    <div className="relative w-[35vw] h-auto">
      <Image
        src={imageSource}
        className="h-auto w-[clamp(10rem,50vw,60rem)] rounded-xl"
        alt="alt text goes here"
        priority
      />
    </div>
  );
};

export default ImageContainer;
