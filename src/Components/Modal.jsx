import React, { useState } from "react";
import '../Stylesheets/Modal.css';
import Map from "./Map"
import MCQ from "./MCQ"
export default function Modal({ openModal }) {
    
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const slides = ["First slide content", "Second slide content"];


    const goNext = () => {
        setCurrentSlide(prevSlide => prevSlide + 1);
    }

    const goBack = () => {
        setCurrentSlide(prevSlide => prevSlide - 1);
    }
    
    return (
        <>
         <div className="modal-background">
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
                {currentSlide === slides.length - 1 && 
                <div className="done-container">
                    <button className="done-button" onClick={() => openModal(false)}>Done</button>
              </div>}
            {currentSlide ===0? 
              <div className="main_sort">
                <Map></Map>
              </div>
              : <div>
                  <MCQ></MCQ>
              </div>}
            </div>
         </div>
        </>
    )
}
