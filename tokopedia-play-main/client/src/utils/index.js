export function getYoutubeVideoId(youtubeUrl) {
  const regexList = [
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/,
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,
    /(?:https?:\/\/)?(?:www\.)?youtu\.be\/([a-zA-Z0-9_-]{11})/,
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/v\/([a-zA-Z0-9_-]{11})/,
  ];
  for (const regex of regexList) {
    const match = youtubeUrl.match(regex);
    if (match && match[1]) return match[1];
  }
  return null;
}

export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function formatToCurrency(number) {
  const string = number.toString();
  let dotPosition = string.length - 3;
  let array = string.split('');
  while (dotPosition > 0) {
    array.splice(dotPosition, 0, '.');
    dotPosition -= 3;
  }
  const formattedNumber = array.join('');
  return `Rp. ${formattedNumber}`;
}
