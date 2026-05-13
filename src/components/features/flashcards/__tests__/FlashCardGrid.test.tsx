// src/components/features/flashcards/__tests__/FlashCardGrid.test.tsx
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FlashCardGrid } from '../components/FlashCardGrid';

describe('FlashCardGrid', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('deve renderizar a grade com 16 cards', () => {
    render(<FlashCardGrid />);
    const grid = screen.getByTestId('flash-card-grid');
    expect(grid).toBeInTheDocument();
    expect(grid.children).toHaveLength(16);
  });

  it('deve ter dimensões corretas', () => {
    render(<FlashCardGrid gridSize={1100} cardSize={275} />);
    const grid = screen.getByTestId('flash-card-grid');
    expect(grid).toHaveStyle('width: 1100px');
    expect(grid).toHaveStyle('height: 1100px');
  });

  it('deve renderizar todos os cards com IDs únicos', () => {
    render(<FlashCardGrid />);
    for (let i = 0; i < 16; i++) {
      const card = screen.getByTestId(`flash-card-${i}`);
      expect(card).toBeInTheDocument();
    }
  });

  it('deve iniciar com cards não flipped', () => {
    render(<FlashCardGrid />);
    const cards = screen.getAllByTestId(/flash-card-/);
    cards.forEach((card) => {
      expect(card).toBeInTheDocument();
    });
  });

  it('deve aceitar props customizadas', () => {
    render(
      <FlashCardGrid
        gridSize={800}
        cardSize={200}
        flipInterval={3000}
        staggerDelay={1000}
      />
    );
    const grid = screen.getByTestId('flash-card-grid');
    expect(grid).toHaveStyle('width: 800px');
  });
});