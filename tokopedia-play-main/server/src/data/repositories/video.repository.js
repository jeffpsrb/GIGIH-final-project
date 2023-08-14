import videoModel from '../database/model/video.js';
import videoMapper from '../mapper/video.mapper.js';

class VideoRepository {
  async getVideos(query) {
    const filter = {};
    if (query && query.trim() !== '') {
      filter.title = {
        $regex: query,
        $options: 'i',
      };
    }
    const videos = await videoModel.find(filter);
    return videos;
  }

  async getVideoById(videoId) {
    const video = await videoModel.findById(videoId);
    return video;
  }

  async createNewVideo(videoData) {
    const video = videoMapper.toDataModel(videoData);
    const newVideo = await videoModel.create(video);
    return newVideo;
  }

  async updateVideo(videoId, videoData) {
    const video = videoMapper.toDataModel(videoData);
    const updatedVideo = await videoModel.findByIdAndUpdate(
      videoId,
      { $set: video },
      { new: true }
    );
    return updatedVideo;
  }

  async deleteVideo(videoId) {
    await videoModel.findByIdAndDelete(videoId);
  }
}

export default new VideoRepository();
