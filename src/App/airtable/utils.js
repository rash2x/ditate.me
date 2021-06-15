export const getInstagramName = (url) => {
  const re = /^(?:@|(?:https?:\/\/)?(?:www\.)?instagr(?:\.am|am\.com)\/)?([a-zA-Z0-9_.]+)\/?$/;
  const match = re.exec(url);

  if (match) {
    return match[1];
  }

  return url;
}
