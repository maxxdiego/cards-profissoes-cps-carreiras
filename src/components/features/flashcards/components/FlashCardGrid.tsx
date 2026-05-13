// src/components/features/flashcards/components/FlashCardGrid.tsx
"use client"

import React from 'react';
import { FlashCardItem } from './FlashCardItem';
import { useFlashCardAnimation } from '../hooks/useFlashCardAnimation';
import { FlashCardGridProps } from '../types';
import * as S from '../../flashcards/styles';

const TOTAL_CARDS = 16;
const CARD_SIZE = 150;
const GRID_SIZE = 600;
const FLIP_INTERVAL = 2000;
const ANIMATION_DURATION = 600;

export const FlashCardGrid = ({
  cardSize = CARD_SIZE,
  gridSize = GRID_SIZE,
  flipInterval = FLIP_INTERVAL,
}: FlashCardGridProps) => {
  const { cards } = useFlashCardAnimation({
    totalCards: TOTAL_CARDS,
    flipInterval,
    animationDuration: ANIMATION_DURATION,
  });

  const gridStyle = React.useMemo(
    () => ({
      width: `${gridSize}px`,
      height: `${gridSize}px`,
    }),
    [gridSize]
  );

  return (
    <S.GridContainer style={gridStyle} data-testid="flash-card-grid">
      {cards.map((card) => (
        <FlashCardItem key={card.id} card={card} size={cardSize} />
      ))}
    </S.GridContainer>
  );
};