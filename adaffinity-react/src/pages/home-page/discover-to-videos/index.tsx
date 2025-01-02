import React from "react";
import { Link } from "react-router-dom";
import mainVideo from "../../../assets/images/main-video.png";

const DiscoverTopVideos: React.FC = () => {
    return (
        <section className="section-row banner-section d-flex align-items-center justify-content-center">
        <div className="container text-center">
          <div className="row no-gutters">
            <div className="col-lg-12 col-12 pt-5">
              <div className="banner-panel text-center mx-auto">
                <h1 className="mb-4">Discover Top Videos</h1>
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac molestie
                  elit, eu mollis
                  lorem. Nunc hendrerit dui vitae vulputate aliquet. Ut laoreet tellus non justo rhoncus, et
                  convallis dolor tincidunt.</p>
                <Link className="btn btn-md btn-red px-4" to={"#"}>Join us now</Link>
              </div>

              <div className="banner-video mt-5 text-center mx-auto">
                <img src={mainVideo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default DiscoverTopVideos;