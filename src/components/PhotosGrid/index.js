import React from 'react';
import { useState } from 'react';
import { ModalWindow } from "../../components/ModalWindow";

export const PhotosGrid = ({ data }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    let modalWindow;
    if (modalVisible) {
        modalWindow = <ModalWindow closeModal={closeModal} />
    } else {
        modalWindow = null;
    };

    return (
        <div className="page__grid">
            {data.map((item) => (
                <div
                    className="page__item"
                    key={item.image_id}
                    onClick={openModal}
                >
                    <img
                        className="page__img"
                        src={item.src}
                        alt="picture"
                    />
                </div>
            ))}
            {modalWindow}
        </div>
    )
}