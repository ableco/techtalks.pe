function formatYoutubeEmbed(id) {
  return `https://www.youtube.com/embed/${id}`;
}

function Video({ youtube, src = formatYoutubeEmbed(youtube), ...props }) {
  return (
    <div {...props}>
      <iframe src={src} />
      <style jsx>{`
        div {
          position: relative;
          padding-bottom: 56.25%; /* 16:9 */
          height: 0;
        }
        div iframe {
          border: none;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
}

export default Video;
