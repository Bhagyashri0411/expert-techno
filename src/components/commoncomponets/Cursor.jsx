import "./cursor.css";
import { useEffect, useState } from "react"

export const Cursor = () => {
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const handleWindowMouseMove = ev => {
            setCoords({
                x: ev.clientX,
                y: ev.clientY
            });
        };
        window.addEventListener('mousemove', handleWindowMouseMove);

        return () => {
            window.removeEventListener(
                'mousemove',
                handleWindowMouseMove
            )
        }
    }, []);
    return (<>
        <div className="circle-cursor circle-cursor-outer" style={{ visibility: 'visible', transform: `translate(${coords.x}px, ${coords.y}px)` }} />
        <div className="circle-cursor circle-cursor-inner" style={{ visibility: 'visible', transform: `translate(${coords.x}px, ${coords.y}px)` }}></div>
    </>)

}