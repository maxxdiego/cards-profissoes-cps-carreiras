// src/components/features/flashcards/components/FlashCardItem.tsx
"use client"

import React, { useMemo } from 'react';
import { FlashCard } from '../types';
import * as S from '../../flashcards/styles';

interface FlashCardItemProps {
  card: FlashCard;
  size: number;
}

export const FlashCardItem = React.memo(({ card, size }: FlashCardItemProps) => {
  const cardStyle = useMemo(
    () => ({
      width: `${size}px`,
      height: `${size}px`,
    }),
    [size]
  );

  return (
    <S.CardContainer style={cardStyle} data-testid={`flash-card-${card.id}`}>
      <S.CardInner $isFlipped={card.isFlipped}>
        {/* Face frontal */}
        <S.CardFace>
          <S.CardImage
            src={card.frontImage}
            alt={`Flash card ${card.id} - Front`}
            loading="lazy"
          />
        </S.CardFace>

        {/* Face traseira */}
        <S.CardFace>
          <S.CardImage
            src={card.backImage}
            alt={`Flash card ${card.id} - Back`}
            loading="lazy"
          />
        </S.CardFace>
      </S.CardInner>
    </S.CardContainer>
  );
});

FlashCardItem.displayName = 'FlashCardItem';