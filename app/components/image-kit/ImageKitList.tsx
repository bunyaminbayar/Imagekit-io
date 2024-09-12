
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages } from '@/app/redux/imagesSlice';
import ImageKit from '@/app/components/image-kit/ImageKit'

const ImageKitList = () => {
    const dispatch = useDispatch();
    const { images, status, error } = useSelector((state) => state.images);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchImages());
        }
    }, [dispatch, status]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="grid">
            {images
                .slice()
                .sort((a, b) => a.id - b.id)
                .map((image) => (
                    <div key={image.id} className='my-6'>
                        <ImageKit
                            path={image.url}
                            alt={`Image ${image.id}`}
                            width="600"
                            height="800"
                            loading="lazy"
                            lqip={{ active: true, quality: 20 }}
                        />
                    </div>
                ))}
        </div>
    );
};

export default ImageKitList;
