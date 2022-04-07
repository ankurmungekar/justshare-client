import React from 'react';
import { Routes, Route } from 'react-router';
import Login from './containers/Login';
import Homepage from './containers/Homepage';

const app = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Homepage />} />
    </Routes>
  )
}

export default app