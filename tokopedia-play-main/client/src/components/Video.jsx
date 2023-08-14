import YouTube from 'react-youtube';
import { Link, useParams } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { getYoutubeVideoId } from '../utils';
import useVideo from '../hooks/useVideo';
import VideoProducts from './VideoProducts';
import VideoComments from './VideoComments';

function Video() {
  const { videoId } = useParams();
  const {
    data: { item: video },
    loading,
    error,
  } = useVideo(videoId);

  const opts = {
    playerVars: {
      autoplay: 1,
      controls: 0,
    },
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <main className="video">
      <div className="video__content">
        <header>
          <Link to="/videos" className="back">
            <ChevronLeftIcon className="back__icon" />
            <span className="back_message">Back</span>
          </Link>
        </header>
        <section>
          <YouTube
            videoId={getYoutubeVideoId(video.videoUrl)}
            opts={opts}
            className="video__wrapper"
            iframeClassName="video__iframe"
          />
          <div className="video__data">
            <h2 className="video__title">{video.title}</h2>
            <p className="video__description">{video.description}</p>
          </div>
        </section>
      </div>
      <VideoProducts videoId={videoId} />
      <VideoComments videoId={videoId} />
    </main>
  );
}

export default Video;
