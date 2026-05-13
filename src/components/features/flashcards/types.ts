// src/components/features/flashcards/types.ts
export interface FlashCard {
  id: number;
  frontImage: string;
  backImage: string;
  isFlipped: boolean;
}

export interface FlashCardGridProps {
  cardSize?: number;
  gridSize?: number;
  flipInterval?: number;
}