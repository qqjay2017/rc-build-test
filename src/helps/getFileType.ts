import * as mime from "mime";
import fileImgData from "../constant/fileIconData";
/**
 * 根据文件名找到支持的文件类型,尽可能的匹配
 * @param fileName
 * @returns string
 */
export function getFileType(fileName: string): string {
  if (!fileName) {
    return "usually";
  }
  const fileNameSplit = fileName.split(".");
  const fileNameEx = fileNameSplit[fileNameSplit.length - 1];
  if (fileImgData[fileNameEx]) {
    return fileNameEx;
  }
  const mimeType = mime.getType(fileNameEx);
  if (!mimeType) {
    return "usually";
  }
  // 图片都走jpg
  if (mimeType.startsWith("image")) {
    return "jpg";
  }
  // 视频都走mp4
  if (mimeType.startsWith("video")) {
    return "mp4";
  }
  // 文字类都走text
  if (mimeType.startsWith("text")) {
    return "text";
  }

  if (fileImgData[mimeType]) {
    return mimeType;
  }

  const mimeExtension = mime.getExtension(mimeType);
  if (!mimeExtension) {
    return "usually";
  }
  if (fileImgData[mimeExtension]) {
    return mimeExtension;
  }
  return "usually";
}
