import React from "react";
import { useNavigate } from "react-router-dom";

import "./index.scss";
import Data from "../../data";

export default function Home(props) {
    const navigate = useNavigate();
    return (
        <div className="home">
            <div className="content">
                <h2>Welcome to Developers Notes</h2>
                <p>Are you fascinated by the latest advancements in technology, innovation, and scientific discoveries? Look no further! Developers Notes is your go-to destination for captivating topics and in-depth explanations that will ignite your curiosity and expand your knowledge.</p>
                <h2>Explore the Wonders of Technology and Innovation</h2>
                <p>Discover the cutting-edge technologies shaping our world. From artificial intelligence and blockchain to virtual reality and autonomous vehicles, we delve into the revolutionary innovations that are reshaping industries and pushing the boundaries of what's possible. Stay up-to-date with the latest trends and explore how these advancements impact our lives.</p>
                <h2>Uncover the Marvels of Science</h2>
                <p>Dive into the fascinating world of science. Our articles explore a wide range of scientific disciplines, including physics, chemistry, biology, astronomy, and more. We break down complex concepts into digestible explanations, making it easier for you to grasp the wonders of the universe. From mind-bending theories to mind-blowing experiments, we'll take you on an exciting journey through the realms of scientific exploration.</p>
                <h2>Engaging Content for the Curious Mind</h2>
                <p>At Developers Notes, we believe in delivering engaging and thought-provoking content. Our team of passionate writers and researchers are dedicated to bringing you captivating topics, well-researched articles, and compelling stories that inspire and educate. Whether you're a tech enthusiast, an innovation junkie, or a science lover, we've got something for everyone.</p>
                <h2>Join Our Community</h2>
                <p>Developers Notes is more than just a website; it's a community of like-minded individuals who share a passion for technology, innovation, and science. Connect with fellow enthusiasts, participate in lively discussions, and exchange ideas. Together, we can explore the frontiers of knowledge and inspire each other to embrace curiosity and continuous learning.</p>
                <h2>Start Your Journey Today</h2>
                <p>Ready to embark on an exciting journey into the world of technology, innovation, and science? Start exploring our captivating articles, dive into thought-provoking discussions, and let your curiosity thrive. Developers Notes is your gateway to the wonders of human ingenuity and the ever-evolving frontiers of knowledge.</p>
            </div>
            <div className="articles">
                <h2>Articles</h2>
                <hr />
                {Object.keys(Data).map((key, index) => (
                        <div key={index} className="artcl">
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
                ))}
            </div>
        </div>
    );
}