import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import "./index.scss";
import Data from "../../data";

export default function Articlrs(props) {
    const param = useParams();
    const navigate = useNavigate();
    const data = Data[param.name];
    useEffect(() => {
        if (!data) navigate("/page-not-found", { replace: true });
    });
    return (
        <div className="article">
            <div className="container">
                <h2>
                    {data?.title}
                </h2>
                <p>
                    {data?.content}
                </p>
            </div>
            <div className="articles">
                <h2>Articles</h2>
                <hr />
                {Object.keys(Data).map((key, index) => {
                    if (key === param.name) return <div key={index}></div>;
                    return (
                        <div className="artcl" key={index}>
                            <div className="image"></div>
                            <div className="else">
                                <div className="text">
                                    {Data[key].title}
                                </div>
                                <div className="button">
                                    <button onClick={() => navigate(`/articles/${key}`)}>Read more</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}