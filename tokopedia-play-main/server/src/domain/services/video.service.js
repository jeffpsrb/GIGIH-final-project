import videoRepository from '../../data/repositories/video.repository.js';
import videoMapper from '../../data/mapper/video.mapper.js';
import { getObjectId } from '../../presentation/utils/index.js';
import ResponseError from '../../presentation/utils/errors/responseError.js';

class VideoService {
  #videoRepository;

  constructor() {
    this.#videoRepository = videoRepository;
  }

  async getVideos(query) {
    const { title } = query;
    const videos = await this.#videoRepository.getVideos(title);
    return videos.map((video) => videoMapper.toDomainModel(video));
  }

  async getVideoById(videoId) {
    const objectId = getObjectId({
      id: videoId,
      entity: 'video',
    });
    const video = await this.#videoRepository.getVideoById(objectId);
    if (!video) {
      throw new ResponseError('no videos found with that ID', 404);
    }
    return videoMapper.toDomainModel(video);
  }

  async createNewVideo(payload) {
    const { title, description, thumbnailUrl, videoUrl } = payload;
    if (!title || !description || !thumbnailUrl || !videoUrl) {
      throw new ResponseError(
        'please provide title, description, thumbnailUrl, and videoUrl',
        400
      );
    }
    const newVideo = await this.#videoRepository.createNewVideo(payload);
    return videoMapper.toDomainModel(newVideo);
  }

  async updateVideo(videoId, payload) {
    const { title, description, thumbnailUrl, videoUrl } = payload;
    if (!title || !description || !thumbnailUrl || !videoUrl) {
      throw new ResponseError(
        'please provide title, description, thumbnailUrl, and videoUrl',
        400
      );
    }
    const updatedVideo = await this.#videoRepository.updateVideo(
      videoId,
      payload
    );
    return videoMapper.toDomainModel(updatedVideo);
  }

  async deleteVideo(videoId) {
    await this.#videoRepository.deleteVideo(videoId);
  }
}

export default new VideoService();
