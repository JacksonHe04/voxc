import { Outlet } from 'react-router-dom';
export default function Rate() {
  return (
    <>
      <div>
        <p>评分页面</p>
      </div>
      <Outlet />
    </>
  );
}