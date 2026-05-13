// src/components/features/flashcards/hooks/useFlashCardAnimation.ts
"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { FlashCard } from "../types";

interface UseFlashCardAnimationProps {
  totalCards: number;
  flipInterval: number;
  animationDuration: number;
}

export const useFlashCardAnimation = ({
  totalCards,
  flipInterval,
  animationDuration,
}: UseFlashCardAnimationProps) => {
  const [cards, setCards] = useState<FlashCard[]>([]);
  const isFlippingRef = useRef(false);

  // Inicializa os cards com imagens locais
  useEffect(() => {
    const initialCards: FlashCard[] = Array.from(
      { length: totalCards },
      (_, i) => ({
        id: i,
        frontImage: `/flashcards/card-${i + 1}-front.jpg`,
        backImage: `/flashcards/card-${i + 1}-back.jpg`,
        isFlipped: false,
      }),
    );
    setCards(initialCards);
  }, [totalCards]);

  const flipCard = useCallback((index: number) => {
    setCards((prevCards) =>
      prevCards.map((card, i) =>
        i === index ? { ...card, isFlipped: !card.isFlipped } : card,
      ),
    );
  }, []);

  useEffect(() => {
    if (cards.length === 0) return;

    const flipRandomCard = () => {
      if (isFlippingRef.current) return;

      isFlippingRef.current = true;

      const randomIndex = Math.floor(Math.random() * cards.length);
      flipCard(randomIndex);

      setTimeout(() => {
        isFlippingRef.current = false;
      }, animationDuration);
    };

    flipRandomCard();

    const interval = setInterval(flipRandomCard, flipInterval);

    return () => clearInterval(interval);
  }, [cards.length, flipCard, flipInterval, animationDuration]);

  return { cards };
};
