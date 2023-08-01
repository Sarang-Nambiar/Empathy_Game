import React, { useState } from "react";
import '../Stylesheets/Modal.css';

export default function Modal({ openModal }) {
    
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const slides = ["First slide content", "Second slide content"];
    
    const handleClose = (e) => {
        if(e.target.className === 'modal-background'){
            openModal(false);
        }
    }

    const goNext = () => {
        setCurrentSlide(prevSlide => prevSlide + 1);
    }

    const goBack = () => {
        setCurrentSlide(prevSlide => prevSlide - 1);
    }
    
    return (
        <>
         <div className="modal-background" onClick={handleClose}>
            <div className="modal-container">
                <div className="slide-content">
                  {slides[currentSlide]}
                </div>
                <div className="slide-navigation">
                  <button 
                    onClick={goBack} 
                    disabled={currentSlide === 0}
                    className={currentSlide === 0 ? "button-disabled" : ""}>
                      Previous
                  </button>
                  <button 
                    onClick={goNext} 
                    disabled={currentSlide === slides.length - 1}
                    className={currentSlide === slides.length - 1 ? "button-disabled" : ""}>
                      Next
                  </button>
                </div>
            </div>
         </div>
        </>
    )
}
