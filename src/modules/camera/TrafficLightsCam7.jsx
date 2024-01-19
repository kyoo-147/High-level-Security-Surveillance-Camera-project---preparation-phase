import { useState, useEffect } from "react";
import { GiTrafficLightsGreen, GiTrafficLightsOrange, GiTrafficLightsRed } from "react-icons/gi";

const TrafficLightsCam7 = () => {
    const [count, setCount] = useState(() => Number(localStorage.getItem("count7")) || 0)

    const handleTrafficLights = async (id) => {
        setCount(id)
        try {
            const response = await fetch(`http://localhost:5000/traffic_light/cam7/${id}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('There was a problem with the fetch operation: ' + error.message);
        }
    }

    useEffect(() => {
        localStorage.setItem("count7", count);
    }, [count]);

    return (
        <div>
            <div className="flex items-center">
                <button
                    onClick={() => handleTrafficLights(3)}
                >
                    {count == 3 ?
                        <GiTrafficLightsGreen size={100} color="#008450" />
                        :
                        <GiTrafficLightsGreen size={100} />
                    }
                </button>
                <button
                    onClick={() => handleTrafficLights(2)}
                >
                    {count == 2 ?
                        <GiTrafficLightsOrange size={100} color="#EFB700" />
                        :
                        <GiTrafficLightsOrange size={100} />
                    }
                </button>
                <button
                    onClick={() => handleTrafficLights(1)}
                >
                    {count == 1 ?
                        <GiTrafficLightsRed size={100} color="#B81D13" />
                        :
                        <GiTrafficLightsRed size={100} />
                    }
                </button>
            </div>
        </div>
    )
}

export default TrafficLightsCam7