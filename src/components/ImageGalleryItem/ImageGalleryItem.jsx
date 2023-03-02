import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.scss';

export const ImageGalleryItem = (
  { image, largeImageURL, index, openModal },
  key
) => {
  return (
    <li key={key} className={s.GalleryItem} onClick={() => openModal(index)}>
      <img
        className={s.GalleryItemImage}
        src={image}
        alt=""
        data-url={largeImageURL}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
