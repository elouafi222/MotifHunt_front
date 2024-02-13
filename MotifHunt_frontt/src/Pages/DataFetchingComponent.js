import { motion as m } from "framer-motion";
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
            const response = await fetch('http://127.0.0.1:5000/text2');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const responseData = await response.json();
            setData(responseData);
        } catch (error) {
            setError(error.message);
        }

        setIsLoading(false);
    };

    return (
        <div>
            <button onClick={fetchData} disabled={isLoading}>
                {isLoading ? 'Loading...' : 'Fetch Data'}
            </button>
            <p className="resume-text  ">
                {data.history}
            </p>

        </div>
    );
}
