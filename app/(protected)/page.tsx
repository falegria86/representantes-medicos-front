import { Suspense } from "react";
import { MedicosTabla } from "@/components/medicos";

export default async function HomePage() {
  return (
    <>
      <div className="bg-gradient-to-tr from-sky-950 to-blue-800 h-full flex justify-center items-center px-8">
        <Suspense fallback={<div>Cargando...</div>}>
          <MedicosTabla />
        </Suspense>
      </div>
    </>
  );
}
