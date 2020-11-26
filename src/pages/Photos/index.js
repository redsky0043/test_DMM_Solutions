import React from 'react';
import { usePhotos } from "./usePhotos";
import { PhotosGrid } from "../../components/PhotosGrid";

import '../../style.scss';

export const Photos = () => {
    const photos = usePhotos();

    return (
        <div className="page container">
            <h1 className="page__title">
                Test APP
            </h1>
            <div>
                {(() => {
                    if (photos.isLoading) {
                        return <div>...loading</div>
                    }

                    if (photos.isError) {
                        return <div>...error</div>
                    }
                    return <PhotosGrid data={photos.data} />
                })()}
            </div>
        </div>
    );
};

