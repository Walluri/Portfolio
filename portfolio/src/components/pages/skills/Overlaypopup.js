import React from 'react';

export const Overlaypopup = (props)=>{
    const classListP = props.show ? "section__skills-popup popup_active" : "section__skills-popup";
    const classListO = props.show ? "section__skills-overlay overlay_active" : "section__skills-overlay";

    const overlayclick = ()=>  toggleView();    
    const closeClicked = ()=>  toggleView();

    const toggleView = ()=>{
        const overlay = document.getElementById('svgskill_overlay'); 
        overlay.classList.toggle('overlay_active');
        const popup = document.getElementById('svgskill_popup');
        popup.classList.toggle('popup_active');
        props.updateChildClickHandler();
    }

    return (
        <div>            
            <div  className={classListP} id="svgskill_popup">
                <div className="popup_header">
                    <div className="popup_title">{props.title}</div>
                    <div className="popup_close" id="pop_close" onClick={closeClicked}>&times;</div>
                </div>
                <div className="popup_content">
                    {
                        props.content.map((item,id)=>{
                            return (<div id={id} key={id}>{item}</div>)
                        })
                    }
                </div>
            </div>
            <div className={classListO} id="svgskill_overlay" 
                onClick={overlayclick}>
                overlay
            </div>
        </div>
    )
}

