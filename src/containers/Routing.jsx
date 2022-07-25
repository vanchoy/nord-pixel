import { Route, Routes } from 'react-router-dom';

import IndexPage from '../pages/index';
import NotFoundPage from '../pages/404';

const Routing = () => {
  return (
    <Routes>
      <Route exact path="/" element={<IndexPage/>} />

      <Route path="" element={<NotFoundPage/>} />
      <Route path="*" element={<NotFoundPage/>} />
      <Route exact path="/404" element={<NotFoundPage/>} />
      <Route element={<NotFoundPage/>} />
    </Routes>
  );
}

export default Routing;
