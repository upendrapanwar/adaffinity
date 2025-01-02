import React from "react";
import { Link } from "react-router-dom";
import Professional from "../../components/professional";
import Header from "../../components/header";
import Footer from "../../components/footer";
import videoThumb01 from "../../assets/images/video-thumb/video-thumb01.jpg";
import videoThumb02 from "../../assets/images/video-thumb/video-thumb02.jpg";
import videoThumb03 from "../../assets/images/video-thumb/video-thumb03.jpg";
import videoThumb04 from "../../assets/images/video-thumb/video-thumb04.jpg";
import videoThumb05 from "../../assets/images/video-thumb/video-thumb05.jpg";
import videoThumb06 from "../../assets/images/video-thumb/video-thumb06.jpg";


const Videos: React.FC = () => {
    return (
        <>
            <Header />

            <section className="section-row banner-section d-flex align-items-center justify-content-center pb-4">
                <div className="container text-center">
                    <div className="row no-gutters">
                        <div className="col-lg-12 col-12 pt-5">
                            <div className="banner-panel text-center mx-auto">
                                <h1 className="mb-4">Discover Top Videos</h1>
                                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac molestie
                                    elit, eu mollis
                                    lorem. Nunc hendrerit dui vitae vulputate aliquet. Ut laoreet tellus non justo rhoncus, et
                                    convallis dolor tincidunt.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-row video_grids pt-0">
                <div className="container text-center">
                    <div className="row no-gutters mb-5">
                        <div className="col-lg-12 col-12">

                            <div className="video-filters py-3">
                                <div className="container">
                                    <form className="d-flex flex-wrap justify-content-center align-items-center">

                                        <div className="filter-item mx-2">
                                            <label htmlFor="category" className="form-label">Category</label>
                                            <select id="category" className="form-select">
                                                <option value="" selected>All Categories</option>
                                                <option value="animals">Animals</option>
                                                <option value="tech">Tech</option>
                                                <option value="education">Education</option>
                                                <option value="comedy">Comedy</option>
                                            </select>
                                        </div>


                                        <div className="filter-item mx-2">
                                            <label htmlFor="videoType" className="form-label">Video Type</label>
                                            <select id="videoType" className="form-select">
                                                <option value="" selected>All Types</option>
                                                <option value="tutorial">Tutorial</option>
                                                <option value="documentary">Documentary</option>
                                                <option value="entertainment">Entertainment</option>
                                            </select>
                                        </div>


                                        <div className="filter-item mx-2">
                                            <label htmlFor="duration" className="form-label">Duration</label>
                                            <select id="duration" className="form-select">
                                                <option value="" selected>Any Duration</option>
                                                <option value="short">0-5 minutes</option>
                                                <option value="medium">5-15 minutes</option>
                                                <option value="long">15+ minutes</option>
                                            </select>
                                        </div>


                                        <div className="filter-item mx-2 mt-4 mt-md-0">
                                            <button type="submit" className="btn btn-red">Apply Filters</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-lg-12 col-12">
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

                                <nav aria-label="Page navigation">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item disabled">
                                            <Link className="page-link" to={"#"} tabIndex={-1} aria-disabled="true">Previous</Link>
                                        </li>
                                        <li className="page-item active"><Link className="page-link" to={"#"}>1</Link></li>
                                        <li className="page-item"><Link className="page-link" to={"#"}>2</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                        <li className="page-item">
                                            <Link className="page-link" to={"#"}>Next</Link>
                                        </li>
                                    </ul>
                                </nav>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Professional />

            <Footer />
            
        </>

    )
}

export default Videos;