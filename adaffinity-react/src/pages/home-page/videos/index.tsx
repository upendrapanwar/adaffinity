import React from "react";
import { Link } from "react-router-dom";
import videoThumb01 from "../../../assets/images/video-thumb/video-thumb01.jpg";
import videoThumb02 from "../../../assets/images/video-thumb/video-thumb02.jpg";
import videoThumb03 from "../../../assets/images/video-thumb/video-thumb03.jpg";
import videoThumb04 from "../../../assets/images/video-thumb/video-thumb04.jpg";
import videoThumb05 from "../../../assets/images/video-thumb/video-thumb05.jpg";
import videoThumb06 from "../../../assets/images/video-thumb/video-thumb06.jpg";


const Videos: React.FC = () => {
    return (
        <section className="section-row video_grids">
            <div className="container text-center">
                <div className="row no-gutters">
                    <div className="col-lg-12 col-12 pt-6">
                        <div className="video_grid_row ">
                            <div className="row video_grid  d-flex align-items-center justify-content-center">

                                <div className="col-md-4 col-sm-6 mb-4">
                                    <Link to={"#"}>
                                        <div className="video_panel d-flex">
                                            <div className="video_info">
                                                <h3>Mountain Escape</h3>
                                                <span className="video-duration">Duration: 5:32</span>
                                            </div>
                                            <div className="video_thumb">
                                                <figure><img src={videoThumb01} alt="" />
                                                </figure>
                                            </div>
                                        </div>
                                    </Link>
                                </div>


                                <div className="col-md-4 col-sm-6 mb-4">
                                    <Link to={"#"}>
                                        <div className="video_panel d-flex">
                                            <div className="video_info">
                                                <h3>Mountain Escape</h3>
                                                <span className="video-duration">Duration: 5:32</span>
                                            </div>
                                            <div className="video_thumb">
                                                <figure><img src={videoThumb02} alt="" />
                                                </figure>
                                            </div>
                                        </div>
                                    </Link>
                                </div>


                                <div className="col-md-4 col-sm-6 mb-4">
                                    <Link to={"#"}>
                                        <div className="video_panel d-flex">
                                            <div className="video_info">
                                                <h3>Mountain Escape</h3>
                                                <span className="video-duration">Duration: 5:32</span>
                                            </div>
                                            <div className="video_thumb">
                                                <figure><img src={videoThumb03} alt="" />
                                                </figure>
                                            </div>
                                        </div>
                                    </Link>
                                </div>


                                <div className="col-md-4 col-sm-6 mb-4">
                                    <Link to={"#"}>
                                        <div className="video_panel d-flex">
                                            <div className="video_info">
                                                <h3>Mountain Escape</h3>
                                                <span className="video-duration">Duration: 5:32</span>
                                            </div>
                                            <div className="video_thumb">
                                                <figure><img src={videoThumb04} alt="" />
                                                </figure>
                                            </div>
                                        </div>
                                    </Link>
                                </div>


                                <div className="col-md-4 col-sm-6 mb-4">
                                    <Link to={"#"}>
                                        <div className="video_panel d-flex">
                                            <div className="video_info">
                                                <h3>Mountain Escape</h3>
                                                <span className="video-duration">Duration: 5:32</span>
                                            </div>
                                            <div className="video_thumb">
                                                <figure><img src={videoThumb05} alt="" />
                                                </figure>
                                            </div>
                                        </div>
                                    </Link>
                                </div>


                                <div className="col-md-4 col-sm-6 mb-4">
                                    <Link to={"#"}>
                                        <div className="video_panel d-flex">
                                            <div className="video_info">
                                                <h3>Mountain Escape</h3>
                                                <span className="video-duration">Duration: 5:32</span>
                                            </div>
                                            <div className="video_thumb">
                                                <figure><img src={videoThumb06} alt="" />
                                                </figure>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Videos;