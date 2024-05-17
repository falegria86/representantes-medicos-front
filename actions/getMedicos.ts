'use server';

export const getMedicos = async () => {
    try {
        const resp = await fetch(`https://medicos-api-production.up.railway.app/api/medicos/`);
        const data = await resp.json();

        return data;
    } catch (error) {
        console.log('Error fetching medicos: ', error);
    }
}