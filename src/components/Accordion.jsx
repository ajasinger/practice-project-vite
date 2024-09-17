import { useState } from 'react';
import styles from './AccordionComponent.module.css';

export default function Accordion() {

    //state
    const [isOpen, setIsOpen] = useState(1);

    const slides = [
        {id: 1, title: "1", body: "this is 1"},
        {id: 2, title: "2", body: "this is 2"},
        {id: 3, title: "3", body: "this is 3"},
        {id: 4, title: "4", body: "this is 4"},
    ]

    return(
        <div className={styles.accordionContainer}>
            {slides &&
                slides.map(slide => (
                    <button 
                        key={slide.id} 
                        value={slide.id} 
                        onClick={e => setIsOpen(slide.id)}
                        className={isOpen === slide.id ? styles.open : styles.closed}
                    >
                        {isOpen === slide.id ? (
                            <div>
                                {slide.title}
                                {slide.body}
                            </div>
                        ) : (
                            <div>
                                {slide.title}
                            </div>
                        )}
                    </button>
                ))
            }
        </div>
    )
}