import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoadingScreen } from './pages/loading/Loading';
import { CharacterSelection } from './pages/character/selection/CharSelection';
import { CharacterCreation } from './pages/character/creation/CharCreation';
import { SpawnSelection } from './pages/character/selection/SpawnSelection';

const routes: { path: string; element: React.ReactNode }[] = [
  {
    path: '/',
    element: <LoadingScreen />,
  },
  {
    path: '/character/creation',
    element: <CharacterCreation />,
  },
  {
    path: '/character/selection',
    element: <CharacterSelection />,
  },
  {
    path: '/character/spawn',
    element: <SpawnSelection />,
  },
];

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Router>
  );
};
