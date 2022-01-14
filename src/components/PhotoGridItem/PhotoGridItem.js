import React from 'react';
import styled from 'styled-components/macro';

const PhotoGridItem = ({ id, src, alt, tags }) => {
  const imageVariations = ['', '@2x', '@3x'];
  const avifSet = imageVariations
    .map((variation) =>
      src.replace('.jpg', `${variation}.avif ${variation.replace('@', '')}`)
    )
    .join(', ');
  const jpgSet = imageVariations
    .map((variation) =>
      src.replace('.jpg', `${variation}.jpg ${variation.replace('@', '')}`)
    )
    .join(', ');

  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
          <source type="image/avif" srcSet={avifSet} />
          <Image src={src} srcSet={jpgSet} alt={alt} />
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  border-radius: 2px;
  margin-bottom: 8px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`;

const Tags = styled.ul`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  padding: 4px 0;
`;

const Tag = styled.li`
  display: inline;
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
  overflow: hidden;
  text-overflow: ellipsis;

  &:not(:last-child) {
    margin-right: 8px;
  }
`;

export default PhotoGridItem;
