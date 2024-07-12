import React from "react";

const index = () => {
    return (
        <>
            <section>
                <div id="preloader">
                    <div id="ctn-preloader" className="ctn-preloader">
                        <div className="animation-preloader">
                            <div className="spinner"></div>
                            <div className="txt-loading">
                                <span
                                    data-text-preloader="F"
                                    className="letters-loading"
                                >
                                    F
                                </span>
                                <span
                                    data-text-preloader="L"
                                    className="letters-loading"
                                >
                                    L
                                </span>
                                <span
                                    data-text-preloader="O"
                                    className="letters-loading"
                                >
                                    O
                                </span>
                                <span
                                    data-text-preloader="Q"
                                    className="letters-loading"
                                >
                                    Q
                                </span>
                                <span
                                    data-text-preloader="O"
                                    className="letters-loading"
                                >
                                    O
                                </span>
                                <span
                                    data-text-preloader="D"
                                    className="letters-loading"
                                >
                                    D
                                </span>
                                <span
                                    data-text-preloader="E"
                                    className="letters-loading"
                                >
                                    E
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default index;
