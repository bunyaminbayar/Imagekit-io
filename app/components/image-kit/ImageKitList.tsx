import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages } from '@/app/redux/imagesSlice';
import { ImageStatus } from '@/app/types/enums';
import ImageKit from '@/app/components/image-kit/ImageKit';
import { RootState, AppDispatch } from '@/app/redux/store';

const ImageKitList = () => {
    const dispatch = useDispatch<AppDispatch>();
  const { images, status, error } = useSelector((state: RootState) => state.images);

  useEffect(() => {
    if (status === ImageStatus.IDLE) {
      dispatch(fetchImages());
    }
  }, [dispatch, status]);

  if (status === ImageStatus.LOADING) {
    return <div>Loading...</div>;
  }

  if (status === ImageStatus.FAILED) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="grid">
      {images
        .slice()
        .sort((a: any, b: any) => a.id - b.id)
        .map((image) => (
          <div key={image.id} className="my-6">
            <ImageKit
              path={image.url}
              alt={`Image ${image.id}`}
              width={600}
              height={320}
              loading="lazy"
              lqip={{ active: true, quality: 20 }}
            />
          </div>
        ))}
    </div>
  );
};

export default ImageKitList;
