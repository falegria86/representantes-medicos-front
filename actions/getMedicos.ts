'use server';

export const getMedicos = async () => {
    const mode = process.env.NODE_ENV;
    const apiUrl = mode === 'production' ? process.env.API_PRODUCTION : 'http://localhost:8080/api/medicos/';

    if (!apiUrl) {
        throw new Error('API URL is not defined');
    }

    try {
        const resp = await fetch(apiUrl);
        if (!resp.ok) {
            throw new Error(`HTTP error! status: ${resp.status}`);
        }
        const data = await resp.json();

        return data;
    } catch (error) {
        console.error('Error fetching medicos:', error);
        throw error;
    }
}
