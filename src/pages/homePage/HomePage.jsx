import { Button, Space } from "antd";
import React from "react";
import reactLogo from "../../assets/react.svg";
import ButtonComponent from "../../components/ButtonComponent";
const HomePage = () => {
    const user = {
        name: "Syafi Karim",
    };

    return (
        <div>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <h2>By : {user.name}</h2>
            <div className="card">
                {/* <img src={DesignerImage} alt="" /> */}
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <ButtonComponent />
            <br />
            <br />
            {/* AntD Component */}
            <Space wrap>
                <Button type="primary"> Coba BTN</Button>
                <Button>Default Button</Button>
                <Button type="dashed">Dashed Button</Button>
                <Button type="text">Text Button</Button>
                <Button type="link">Link Button</Button>
            </Space>
        </div>
    );
};

export default HomePage;