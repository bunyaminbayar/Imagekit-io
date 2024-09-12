import React from 'react';
import { IKImage } from 'imagekitio-next';

interface ImageKitProps {
  path: string;
  alt: string;
  width: number;
  height: number;
  loading?: 'lazy';
  lqip?: { active: boolean; quality: number };
}

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT!;
const imageKitList = '/image-io-test/';

const ImageKit: React.FC<ImageKitProps> = (props) => {
  return (
    <IKImage
      urlEndpoint={urlEndpoint + imageKitList}
      {...props}
      loading={props.loading ?? 'lazy'}
    />
  );
};

export default ImageKit;
