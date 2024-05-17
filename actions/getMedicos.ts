'use server';

export const getMedicos = async () => {
    try {
        const resp = await fetch(`http://localhost:8080/api/medicos/`);
        const data = await resp.json();

        return data;
    } catch (error) {
        console.log('Error fetching medicos: ', error);
    }
}