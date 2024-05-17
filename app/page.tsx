import { Suspense } from "react";
import { MedicosTabla } from "@/components/medicos";

export default async function Home() {
  return (
    <>
      <h1>Bievenida Amorshis!</h1>
      <Suspense fallback={<div>Cargando...</div>}>
        <MedicosTabla />
      </Suspense>
    </>
  );
}
