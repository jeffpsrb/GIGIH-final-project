import { isValidObjectId, Types } from 'mongoose';
import ResponseError from './errors/responseError.js';

export function getObjectId({ id, entity }) {
  const isValid = isValidObjectId(id);
  if (!isValid) {
    throw new ResponseError(`invalid ${entity} ID format`, 400);
  }
  return new Types.ObjectId(id);
}
