import React from 'react';
import close from '../../images/сlose.svg';
import { usePhotos } from "../../pages/Photos/usePhotos";

export const ModalWindow = ( props ) => {
    const { closeModal } = props;
    const photos = usePhotos();
    // console.log(photos.data[0].image_id);

    return (
        <div className="modal ">
            <div className="modal__window ">
                <div className="modal__left">
                    <img className="modal__img" src='' alt="" />
                    <form className="modal__form">
                        <input className="modal__input" type="text" placeholder='Ваше имя' />
                        <input className="modal__input" type="text" placeholder='Ваш комментарий'/>
                        <button className="modal__btn">
                            Оставить комментарий
                        </button>
                    </form>
                </div>
                <div className="modal__right">
                    <div className="modal__date">
                        18.12.2019
                    </div>
                    <div className="modal__comment">
                        Отличное фото
                    </div>
                    <div className="modal__date">
                        18.12.2019
                    </div>
                    <div className="modal__comment">
                        Я тут был, очень понравилось
                    </div>
                </div>
                <img 
                    className="modal__close"
                    onClick={() => {
                        closeModal();
                    }} 
                    src={close} 
                    alt="close" 
                />      
            </div>
        </div>
    )
}