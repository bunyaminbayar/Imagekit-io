
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages } from '@/app/redux/imagesSlice';
import Image from 'next/image';

const ImageKitList = () => {

    const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT + '/image-io-test/';

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
                    <Image
                        key={image.id}
                        src={urlEndpoint + image.url}
                        alt={image.url}
                        width={600}
                        height={800}
                        loading="lazy"
                        className='my-6'
                    />
                ))}
        </div>
    );
};

export default ImageKitList;
