const Video = () => {
    return (
        <div class="video">
            <div class="play">
                <video autoplay="autoplay" playsinline loop="loop" muted="muted" >
                    <source src="https://web-video-resource.gentlemonster.com/assets/stories/cai_xukun/main/video-src-pc.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    );
};
export default Video;
