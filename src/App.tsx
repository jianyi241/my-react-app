import React from 'react';
import './App.scss';
import Navbar from "./components/Navbar/Navbar";
import routes from "./router";

// 引入包管理工具
import { renderRoutes, RouteConfig } from "react-router-config";
function App() {
  return (
    <div className="app">
        <Navbar />
        <div className={'container'}>
            {/* 设置routes的类型为RouteConfig[]，否则报错 */}
            {renderRoutes(routes as RouteConfig[])}
        </div>
    </div>
  );
}

export default App;
