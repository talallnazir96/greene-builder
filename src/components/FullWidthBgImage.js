export const FullWidthBgImage = ({
    image,
    label,
    text,
    subText,
    height,
    borderRadius
  }) => {
    return (
      <div
        className="bg-image-container"
        style={{ backgroundImage: `url(${image})`, borderRadius, height }}
      >
        <div className="gradient">
          <div className="text-container">
            <div className="body text-center">{subText}</div>
          </div>
        </div>
      </div>
    );
  };
  