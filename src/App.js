import React from "react";

export function App() {
    return (<div>
        <h1>Моё простое React приложение</h1>
        <h3>Время : {new Date().toLocaleTimeString('ru-Ru')}</h3>
        </div>);
}