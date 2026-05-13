// src/components/features/flashcards/styles.ts
"use client"

import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  margin: 0 auto;
  perspective: 1000px;
  position: relative;

  will-change: transform;
  backface-visibility: hidden;


`;

export const CardContainer = styled.div`
  position: relative;
  cursor: pointer;
  perspective: 1000px;
  z-index: 2;

  user-select: none;
  -webkit-user-select: none;
`;

interface CardInnerProps {
  $isFlipped?: boolean;
}

export const CardInner = styled.div<CardInnerProps>`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transform-style: preserve-3d;

  transform: ${(props) => (props.$isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)')};

  will-change: transform;
`;

export const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f0f0;
  overflow: hidden;

  &:last-child {
    transform: rotateY(180deg);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;

  will-change: opacity;
  backface-visibility: hidden;
  -webkit-font-smoothing: antialiased;
`;