

const Video = () => {

    return (
        <div className="container py-4">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <div className="card shadow-lg p-4 border-0 rounded-3">
                        <h2 className="text-center text-dark mb-4">
                            Video Fisika
                        </h2>
                        <div className="ratio ratio-16x9">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/28iJoC24Wlo?si=oqTy0CT7ykv5ugMu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Video;