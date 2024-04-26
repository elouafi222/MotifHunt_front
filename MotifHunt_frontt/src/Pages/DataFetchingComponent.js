import React, { useState, useEffect } from "react";
import axios from "axios";

export default function DataFetchingComponent() {
    const [data, setData] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.post('http://127.0.0.1:5000/text2');
            setData(response.data);
        } catch (error) {
            setError(error.message);
        }

        setIsLoading(false);
    };

    return (
        <div>
            <button className="btn-custom rounded-5 mt-3 mx-1 px-4" onClick={fetchData} disabled={isLoading}>
                {isLoading ? 'Loading...' : 'Fetch Data'}
            </button>
            <p className="resume-text  ">
                {data.history}
            </p>
        </div>
    );
}
