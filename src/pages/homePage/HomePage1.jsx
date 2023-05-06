import React from "react";
import reactLogo from '../../assets/react.svg'
import githubLogo from '../../assets/github.svg'
import linkedinLogo from '../../assets/linkedin.svg'


const HomePage1 = () => {

    const user = {
        name: "Syafi Karim",
        gambar: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Person_icon_BLACK-01.svg/1924px-Person_icon_BLACK-01.svg.png",
        Kota: "Jombang",
    };

    return (
        <div className="App">
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
                <div>{user.name}</div>
            </div>
            <div>
                <img src={user.gambar} className="logosm" alt="Github logo" />
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <div>
                <a href="https://github.com/SyafiKarim23" target="_blank">
                    <img src={githubLogo} className="logosm" alt="Github logo" />
                </a>
                <a href="https://www.linkedin.com/in/syafi-karim-191144269/" target="_blank">
                    <img src={linkedinLogo} className="logosm" alt="linkedin logo" />
                </a>
            </div>
            <div>
            </div>
        </div>
    );
};
export default HomePage1;