import React from "react";
import { Link } from "react-router-dom";
import { Element } from 'react-scroll';

const FourSteps = () => {
    console.log('home_main');

    return (
        <>
            <div className="steps">
                <div className="steps_elems">
                    <Element id="whatsAboutSection" name="whatsAboutSection">
                        <div className="steps_header">Wystarczą  4 proste kroki</div>
                        <div className="steps_header_decor"></div>
                        <div className="steps_cols_container">
                            <div className="step_col_1 step">
                                <div className="row_1s rows icon_1"/>
                                <div className="row_2s rows">Wybierz rzeczy</div>
                                <div className="row_3s rows">ubrania, zabawki, sprzęt i inne</div>
                            </div>
                            <div className="step_col_2 step">
                                <div className="row_1s rows icon_2"/>
                                <div className="row_2s rows">Spakuj je</div>
                                <div className="row_3s rows">skorzystaj z worków na śmieci</div>
                            </div>
                            <div className="step_col_3 step">
                                <div className="row_1s rows icon_3"/>
                                <div className="row_2s rows">Zdecyduj komu chcesz pomóc</div>
                                <div className="row_3s rows">wybierz zaufane miejsce</div>
                            </div>
                            <div className="step_col_4 step">
                                <div className="row_1s rows icon_4"/>
                                <div className="row_2s rows">Zamów kuriera</div>
                                <div className="row_3s rows">kurier przyjedzie w dowolnym terminie</div>
                            </div>
                        </div>
                        <Link className="steps_button" to="/logowanie">ODDAJ RZECZY</Link>
                    </Element>
                </div>
            </div>
        </>
    )
}

export default FourSteps;