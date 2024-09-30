import { useState, useEffect, useRef } from 'react';
import styles from './ImageCarousel.module.css';

export default function ImageCarousel() {

    //STATES
    const [imagesArray, setImagesArray] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const ref = useRef(null);

    const postData = async() => {

        setLoading(true);
        
        try{
            const res = await(fetch('https://jsonplaceholder.typicode.com/photos'));

            if(res.ok) {
                const photosArray = await res.json();
                const slicePhotos = photosArray.slice(0,5);
                setImagesArray(slicePhotos);

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

    const handleScroll = (direction) => {
        const container = ref.current;
        const scrollAmount = 300;

        if(direction === 'left') {
            container.scrollBy({ left: -scrollAmount, behavior: 'smooth'})
        }

        if(direction === 'right') {
            container.scrollBy({ left: scrollAmount, behavior: 'smooth'})
        }
    }

    return(
        <div className={styles.outerContainer}>
            <h1>Carousel</h1>
                <div className={styles.arrowContainer}>
                    <button className={styles.arrow} onClick={() => handleScroll('left')}>&#8592;</button>
                    <button className={styles.arrow} onClick={() => handleScroll('right')}>&#8594;</button>
                </div>
            <div className={styles.container} ref={ref}>
                {imagesArray && imagesArray.length > 0 &&
                    imagesArray.map(image => (
                        <div key={image?.id}>
                            <img src={image?.url} alt={image?.title} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}