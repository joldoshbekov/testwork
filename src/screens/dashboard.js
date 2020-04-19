import React from 'react';

function Dashboard() {
    return (
        <section>
            <div className={"wrapper"}>
                <div className={"item"}>
                    <img src={require("../images/img.jpg")} alt=""/>
                    <p>lore lorem lorem lorem </p>

                </div>
                <div className={"item"}>
                    <img src={require("../images/img.jpg")} alt=""/>
                    <p>lore lorem lorem lorem </p>
                </div>
                <div className={"item"}>
                    <img src={require("../images/img.jpg")} alt=""/>
                    <p>lore lorem lorem lorem </p>
                </div>
            </div>
        </section>
    );
}

export default Dashboard;

