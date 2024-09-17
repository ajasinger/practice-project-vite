import { useState, useEffect } from 'react';
import styles from './ImageCarousel.module.css';

export default function ImageCarousel() {

    //STATES
    const [imagesArray, setImagesArray] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [carouselPosition, setCarouselPosition] = useState(null);

    //FUNCTIONS 
    //onClick for arrow to set -- setPosition() -- maybe in UI

    //UI
    //container for carousel 
    //arrows for navigating through carousel 

    const postData = async() => {

        setLoading(true);
        
        try{
            const res = await(fetch('https://jsonplaceholder.typicode.com/photos'));
            console.log('res', res);

            if(res.ok) {
                const photosArray = await res.json();
                const slicePhotos = photosArray.slice(0,5);
                console.log('slicePhotos', slicePhotos);
                setImagesArray(slicePhotos);
                setCarouselPosition(slicePhotos[0].id);

            } else {
                console.log('error fetching photos');
                setError(true);
            }

        } catch(error) {
            console.log(error);
            setError(true);
        } finally {
            setLoading(false);
        }

    }

    
    useEffect(() => {
        postData();
    }, [])

    return(
        <div className={styles.outerContainer}>
            <h1>Carousel</h1>
                <div className={styles.arrowContainer}>
                    <button className={styles.arrow}>&#8592;</button>
                    <button className={styles.arrow}>&#8594;</button>
                </div>
            <div className={styles.container}>
                {imagesArray && imagesArray.length > 0 &&
                    imagesArray.map(image => (
                        <div key={image?.id} className={carouselPosition === image?.id ? styles.focus : styles.notFocus}>
                            <img src={image?.url} alt={image?.title} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}