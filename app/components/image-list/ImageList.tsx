
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/app/redux/store';
import { fetchImages } from '@/app/redux/imagesSlice';
import Image from 'next/image';
import { ImageStatus } from '@/app/types/enums';

const ImageList = () => {

    const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT + '/image-io-test/';

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
                .sort((a, b) => a.id - b.id)
                .map((image) => (
                    <div key={image.id} className='py-6'>
                        <Image
                            src={urlEndpoint + image.url}
                            alt={image.url}
                            width={600}
                            height={320}
                            loading="lazy"
                        />
                    </div>
                ))}
        </div>
    );
};

export default ImageList;
