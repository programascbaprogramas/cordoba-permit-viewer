import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-[#0782be] text-white py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image
              src="https://ext.same-assets.com/2121703779/1215279704.png"
              alt="Municipalidad de Córdoba"
              width={120}
              height={48}
              className="h-12 w-auto"
            />
          </div>
          <div>
            <Image
              src="https://ext.same-assets.com/2121703779/4108264495.png"
              alt="HOL - Habilitación Online"
              width={190}
              height={80}
              className="h-20 w-auto"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <div className="bg-white rounded shadow-sm">
          {/* Card Header */}
          <div className="border-b px-6 py-4">
            <h1 className="text-xl font-medium text-gray-800">
              Detalles del trámite Nº 183777
            </h1>
          </div>

          {/* Card Body */}
          <div className="p-6 space-y-6">
            {/* Datos del trámite */}
            <div className="rounded border">
              <div className="bg-[#bde4eb] text-center py-3 rounded-t border-b">
                <h2 className="font-medium text-gray-700">Datos del trámite</h2>
              </div>
              <ul className="divide-y">
                <li className="px-4 py-3">
                  <strong>Razón Social:</strong> SANCHEZ RIERA SOCIEDAD DE RESPONSABILIDAD LIMITADA
                </li>
                <li className="px-4 py-3">
                  <strong>Cuit:</strong> 33711362849
                </li>
                <li className="px-4 py-3">
                  <strong>Tipo:</strong> 2 Intermedio
                </li>
                <li className="px-4 py-3">
                  <strong>Estado de Habilitación:</strong> Habilitado
                </li>
                <li className="px-4 py-3">
                  <strong>Instancia del Proceso:</strong> Habilitacion Finalizada
                </li>
              </ul>
            </div>

            {/* Datos de habilitación */}
            <div className="rounded border">
              <div className="bg-[#bde4eb] text-center py-3 rounded-t border-b">
                <h2 className="font-medium text-gray-700">Datos de habilitación</h2>
              </div>
              <ul className="divide-y">
                <li className="px-4 py-3">
                  <strong>Nro. Habilitación:</strong> 040000531/22
                </li>
                <li className="px-4 py-3">
                  <strong>Fecha Habilitación:</strong> 23/06/2022
                </li>
                <li className="px-4 py-3">
                  <strong>Fecha Vencimiento:</strong> 23/06/2027
                </li>
              </ul>
            </div>

            {/* Datos del Inmueble */}
            <div className="rounded border">
              <div className="bg-[#bde4eb] text-center py-3 rounded-t border-b">
                <h2 className="font-medium text-gray-700">Datos del Inmueble</h2>
              </div>
              <ul className="divide-y">
                <li className="px-4 py-3">
                  <strong>Zona de Influencia:</strong> CPC Colon
                </li>
                <li className="px-4 py-3">
                  <strong>Nro. Catastral:</strong> 062403304200000
                </li>
                <li className="px-4 py-3">
                  <strong>Calle:</strong> MTRO VIDAL
                </li>
                <li className="px-4 py-3">
                  <strong>Número:</strong> 554
                </li>
                <li className="px-4 py-3">
                  <strong>Piso:</strong> -
                </li>
                <li className="px-4 py-3">
                  <strong>Depto/Local:</strong> -
                </li>
                <li className="px-4 py-3">
                  <strong>Barrio:</strong> ALTO ALBERDI
                </li>
                <li className="px-4 py-3">
                  <strong>Código Postal:</strong> 5000
                </li>
                <li className="px-4 py-3">
                  <strong>Superficie Total:</strong> 661.3
                </li>
                <li className="px-4 py-3">
                  <strong>Superficie Cubierta:</strong> 661.3
                </li>
              </ul>
            </div>

            {/* Datos de la Sociedad */}
            <div className="rounded border">
              <div className="bg-[#bde4eb] text-center py-3 rounded-t border-b">
                <h2 className="font-medium text-gray-700">Datos de la Sociedad</h2>
              </div>
              <ul className="divide-y">
                <li className="px-4 py-3 bg-gray-100">
                  <strong>Socio Nº:</strong> 1
                </li>
                <li className="px-4 py-3">
                  <strong>Nombre:</strong> JULIETA VALENTINA
                </li>
                <li className="px-4 py-3">
                  <strong>Apellido:</strong> SANCHEZ
                </li>
                <li className="px-4 py-3">
                  <strong>Cuit:</strong> 27284283096
                </li>
                <li className="px-4 py-3">
                  <strong>Email:</strong> cr.quiroga.marcelo@gmail.com
                </li>
                <li className="px-4 py-3 mb-4">
                  <strong>Teléfono:</strong> 351111111
                </li>
              </ul>
            </div>

            {/* Datos de las actividades */}
            <div className="rounded border">
              <div className="bg-[#bde4eb] text-center py-3 rounded-t border-b">
                <h2 className="font-medium text-gray-700">Datos de las actividades</h2>
              </div>
              <ul className="divide-y">
                <li className="px-4 py-3 bg-gray-100">
                  <strong>Actividad Nº:</strong> 2297
                </li>
                <li className="px-4 py-3">
                  <strong>Nombre:</strong> ENSAYOS Y ANÁLISIS TÉCNICOS
                </li>
                <li className="px-4 py-3">
                  <strong>Rubro:</strong> 712000
                </li>
                <li className="px-4 py-3">
                  <strong>SubRubro:</strong> -
                </li>
                <li className="px-4 py-3">
                  <strong>Incluye:</strong> Las actividades de prueba y análisis del comportamiento de todo tipo de materiales y productos, mediante pruebas:
                  - acústicas
                  - físicas
                  - pruebas de composición
                  - pureza de minerales
                  - químicas
                  - vibratorias
                  - otras pruebas analíticas La actividad de:
                  - empresas de certificación de calidad de máquinas, instrumentos, procesos, productos, etcétera
                  - entidades de control y verificación periódica de los vehículos automotores
                  - entidades de control bromatológico
                  - laboratorios policiales
                  - fiscalización de semillas, verduras, etc.
                  - servicios de peritos calígrafos
                  Los servicios de medición de la pureza del agua o del aire, de la radioactividad, de aguas residuales,
                  etcétera.
                </li>
                <li className="px-4 py-3">
                  <strong>Excluye:</strong> Las actividades de ensayo y análisis veterinarios (750000).
                  Las actividades de ensayo y análisis médicos (desde código 863110 a 863190).
                </li>
                <li className="px-4 py-3 mb-4">
                  <strong>¿Permite Desafectar Otras Actividades?:</strong> No
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
