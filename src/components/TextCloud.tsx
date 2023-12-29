import {FC, useEffect} from "react";
import TagCloud from "TagCloud";
const TextCloud:FC = () => {
    useEffect(()=> {
        return () => {
            const container = ".tagcloud"
            const texts = [
                "TEST",
                "TEST",
                "TEST",
                "TEST",
                "TEST",
                "TEST",
                "TEST",
                "TEST",
                "TEST",
                "TEST",
                "TEST",
                "TEST",
                "TEST",
                "TEST",
                "TEST",
                "TEST",
                "TEST",
                "TEST",
                "TEST",
                "TEST",
                "TEST",
                "TEST",
                "TEST",
                "TEST",
                "TEST",
                "TEST",
                "TEST",
                "TEST",
                "TEST",
                "TEST",
                "TEST",
                "TEST",
                "TEST",
                "TEST",
                "TEST",
                "TEST",
                "TEST",
                "TEST",
                "TEST",
                "TEST",
                "TEST",
                "TEST",
                "TEST",
                "TEST",
                "TEST",
                "TEST",
                "TEST",
                "TEST",
                "TEST",
                "TEST",
                "TEST",
                "TEST",
                "TEST",
                "TEST",
                "TEST",
                "TEST",
            ]
            const options = {
                radius: 300,
                maxSpeed: 'normal',
                initSpeed: 'normal',
                keep: true,
            }
            TagCloud(
                container,
                texts,
                options)
        }
    }, [])

    return (
        <div className="text-shpere">
            <span className="tagcloud"></span>
        </div>
    );
};

export default TextCloud;