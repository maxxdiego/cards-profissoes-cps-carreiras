// src/app/flashcards/page.tsx
import React from 'react';
import { FlashCardGrid } from "@/src/components/features/flashcards";
import styled from 'styled-components';

const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
`;

export default function FlashcardsPage() {
  return (
    <Container>
      <FlashCardGrid />
    </Container>
  );
}