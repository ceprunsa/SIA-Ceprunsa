import {
  Users,
  Calendar,
  Headphones,
  Clock,
  GraduationCap,
  ArrowRight,
} from 'lucide-react';

const systems = [
  {
    title: 'Sistema de Recursos Humanos',
    description:
      'Gestión integral del personal y recursos humanos de la institución',
    icon: Users,
    href: 'https://swgirrhh-ceprunsa.vercel.app/',
    color: 'from-slate-800 to-slate-900',
  },
  {
    title: 'Sistema de Gestor de Citas Psicológicas',
    description:
      'Administración y seguimiento de citas de atención psicológica',
    icon: Calendar,
    href: 'https://gestor-citas-cpu-cq2026.vercel.app/',
    color: 'from-red-900 to-red-950',
  },
  {
    title: 'Sistema de Registro de Atención al Cliente',
    description: 'Control y seguimiento de solicitudes y atención al usuario',
    icon: Headphones,
    href: 'https://registro-atencion-cliente-cpu.vercel.app/',
    color: 'from-slate-700 to-slate-800',
  },
  {
    title: 'Sistema de Administración de Horarios',
    description:
      'Planificación y gestión de horarios académicos y administrativos',
    icon: Clock,
    href: 'https://cepre-frontend.vercel.app/',
    color: 'from-gray-700 to-gray-800',
  },
  {
    title: 'Sistema de Calificación Docente',
    description: 'Evaluación y seguimiento del desempeño docente institucional',
    icon: GraduationCap,
    href: 'https://sistema-calificacion-docente-cq2026.vercel.app/',
    color: 'from-red-800 to-red-900',
  },
];

function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-gray-50 to-slate-100">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO_SIA_Mesa%20de%20trabajo%201-B7x61Hjaz2kwfxxqCX9GCqdLNgQxPa.png"
              alt="SIA CEPRUNSA Logo"
              className="h-14 w-auto sm:h-16"
            />
            <div className="text-right">
              <p className="text-sm font-medium text-slate-600">
                Portal de Acceso
              </p>
              <p className="text-xs text-slate-500">Sistemas Administrativos</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Sistema Integral de Administración
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-slate-600">
            Accede a los sistemas administrativos de CEPRUNSA. Selecciona el
            módulo que necesitas para gestionar tus actividades institucionales.
          </p>
        </div>

        {/* Systems Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {systems.map((system, index) => {
            const Icon = system.icon;
            return (
              <a
                key={index}
                href={system.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Icon Background */}
                <div
                  className={`absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-linear-to-br ${system.color} opacity-10 transition-transform duration-300 group-hover:scale-110`}
                />

                {/* Icon */}
                <div
                  className={`relative mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br ${system.color} shadow-lg`}
                >
                  <Icon className="h-7 w-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-balance text-xl font-semibold text-slate-900 mb-3">
                  {system.title}
                </h3>
                <p className="text-pretty text-sm leading-relaxed text-slate-600 mb-4">
                  {system.description}
                </p>

                {/* Arrow */}
                <div className="flex items-center gap-2 text-sm font-medium text-slate-700 transition-colors group-hover:text-red-900">
                  <span>Acceder al sistema</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 border-t border-slate-200 bg-white/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-600">
              © 2025 CEPRUNSA. Todos los derechos reservados.
            </p>
            <p className="text-sm text-slate-600">
              <b>Para cualquier soporte:</b> apps.ceprunsa@cepr.unsa.pe
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
