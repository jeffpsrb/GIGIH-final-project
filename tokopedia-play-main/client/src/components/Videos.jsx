import SearchBox from './SearchBox';
import VideoCard from './VideoCard';
import useVideos from '../hooks/useVideos';

function Videos() {
  const {
    data: { items: videos },
    loading,
    error,
  } = useVideos();

  return (
    <>
      <header>
        <h1>Tokopedia Play</h1>
      </header>
      <main>
        <SearchBox />
        <div className="videos">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error.message}</p>
          ) : videos.length ? (
            videos.map((video) => {
              return <VideoCard {...video} key={video.id} />;
            })
          ) : (
            <p>Video not found</p>
          )}
        </div>
      </main>
    </>
  );
}

export default Videos;
