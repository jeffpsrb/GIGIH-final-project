import Video from '../../domain/entities/video.js';

class VideoMapper {
  static toDomainModel(videoModel) {
    const { _id: id, title, description, thumbnailUrl, videoUrl } = videoModel;
    return new Video(id, title, description, thumbnailUrl, videoUrl);
  }

  static toDataModel(video) {
    return {
      title: video.title,
      description: video.description,
      thumbnailUrl: video.thumbnailUrl,
      videoUrl: video.videoUrl,
    };
  }
}

export default VideoMapper;
