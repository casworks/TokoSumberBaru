const isImageLike = (value) => typeof value === 'string' && /\.(png|jpe?g|gif|svg|webp)(\?.*)?$/i.test(value);

const Icon = ({ icon, alt = '', className = 'icon', size = 44 }) => {
  if (isImageLike(icon)) {
    return (
      <div className={className}>
        <img src={icon} alt={alt} width={size} height={size} loading="lazy" />
      </div>
    );
  }

  if (icon == null || icon === '') return null;

  return <div className={className}>{icon}</div>;
};

export default Icon;
