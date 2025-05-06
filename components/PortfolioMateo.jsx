import React from "react";
import { motion } from "framer-motion";

const ToolItem = ({ name, logo }) => (
  <div className="flex items-center space-x-3">
    <img src={`./images/${logo}`} alt={name} className="w-6 h-6" />
    <span>{name}</span>
  </div>
);

export default function PortfolioMateo() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-950 via-indigo-900 to-black text-white p-6 overflow-hidden">
      <section className="max-w-4xl mx-auto rounded-2xl shadow-2xl p-8 space-y-10 bg-black/30 backdrop-blur-md relative z-10">
        <header className="text-center">
          <h1 className="text-5xl font-bold text-purple-300">Mateo Riesco González</h1>
          <p className="text-xl text-indigo-200 mt-2">Administrador de sistemas | Estudiante de Ciberseguridad</p>
        </header>

        {[
          {
            title: "Sobre mí",
            content: (
              <>
                <p>
                  Soy Mateo Riesco González, profesional en administración de sistemas informáticos en red y actualmente
                  especializándome en ciberseguridad. Me formé en Maristak Durango y continuo ampliando mis conocimientos
                  a través de la Cisco Networking Academy, donde curso CyberOps Associate.
                </p>
                <p className="mt-2">
                  Combino teoría y práctica gracias a mi experiencia en formación dual, trabajando en resolución de
                  incidencias, mantenimiento de sistemas y gestión de bases de datos.
                </p>
              </>
            ),
          },
          {
            title: "Habilidades",
            content: (
              <ul className="list-disc list-inside space-y-1">
                <li>Administración y mantenimiento de sistemas</li>
                <li>Gestión de redes e infraestructura</li>
                <li>Bases de datos</li>
                <li>Resolución de problemas técnicos</li>
                <li>Trabajo en equipo y comunicación efectiva</li>
                <li>Pensamiento crítico y capacidad analítica</li>
              </ul>
            ),
          },
          {
            title: "Formación",
            content: (
              <ul className="list-disc list-inside space-y-1">
                <li>Especialización en Ciberseguridad - Maristak Durango (2024 - Actualidad)</li>
                <li>CyberOps Associate - Cisco Networking Academy (En curso)</li>
                <li>Técnico en Administración de Sistemas Informáticos en Red - Maristak Durango (2022 - 2024)</li>
                <li>CCNA: Introduction to Networks - Cisco Networking Academy (2022)</li>
                <li>Bachillerato Científico-Tecnológico - Maristak Durango (2022 - 2024)</li>
              </ul>
            ),
          },
          {
            title: "Idiomas",
            content: (
              <ul className="list-disc list-inside space-y-1">
                <li>Español: Nativo</li>
                <li>Inglés: B2</li>
                <li>Euskera: B1</li>
              </ul>
            ),
          },
          {
            title: "Herramientas",
            content: (
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-purple-300">Sistemas</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <ToolItem name="Windows 11" logo="windows.png" />
                    <ToolItem name="Windows Server" logo="windows-server.png" />
                    <ToolItem name="Debian" logo="debian.png" />
                    <ToolItem name="Kali Linux" logo="kali.png" />
                    <ToolItem name="Ubuntu" logo="ubuntu.png" />
                    <ToolItem name="Linux" logo="linux.png" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-purple-300">Herramientas de BBDD</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <ToolItem name="MariaDB" logo="mariadb.png" />
                    <ToolItem name="MySQL" logo="mysql.png" />
                    <ToolItem name="Oracle" logo="oracle.png" />
                    <ToolItem name="APEX" logo="apex.png" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-purple-300">Virtualización</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <ToolItem name="Proxmox VE" logo="proxmox.png" />
                    <ToolItem name="VMware" logo="vmware.png" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-purple-300">Lenguajes</h3>
                  <div className="grid grid-cols-3 gap-2">
                    <ToolItem name="HTML" logo="html.png" />
                    <ToolItem name="CSS" logo="css.png" />
                    <ToolItem name="JavaScript" logo="javascript.png" />
                    <ToolItem name="SQL" logo="sql.png" />
                    <ToolItem name="Python" logo="python.png" />
                    <ToolItem name="LUA" logo="lua.png" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-purple-300">Ciberseguridad</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <ToolItem name="nmap" logo="nmap.png" />
                    <ToolItem name="metasploit" logo="metasploit.png" />
                    <ToolItem name="hydra" logo="hydra.png" />
                    <ToolItem name="Autopsy" logo="autopsy.png" />
                    <ToolItem name="Volatility" logo="volatility.png" />
                    <ToolItem name="Visor de eventos" logo="windows-eventviewer.png" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-purple-300">Firewalls</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <ToolItem name="PaloAlto" logo="paloalto.png" />
                    <ToolItem name="PfSense" logo="pfsense.png" />
                    <ToolItem name="WatchWard" logo="watchward.png" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-purple-300">Administración en la nube</h3>
                  <div className="grid grid-cols-1 gap-2">
                    <ToolItem name="Microsoft 365" logo="m365.png" />
                    <ToolItem name="PandaSecurity" logo="pandasecurity.png" />
                  </div>
                </div>
              </div>
            ),
          },
          {
            title: "Contacto",
            content: (
              <p>
                <strong>Correo:</strong> mateoriesco2@gmail.com<br />
                <strong>Teléfono:</strong> 694 440 933<br />
                <strong>Ubicación:</strong> Ermua, Vizcaya
              </p>
            ),
          },
        ].map((section, i) => (
          <motion.section
            key={i}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-black/40 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-purple-500/50"
          >
            <h2 className="text-2xl font-bold text-purple-200 mb-3">{section.title}</h2>
            <div className="text-indigo-100 text-md leading-relaxed">{section.content}</div>
          </motion.section>
        ))}
      </section>

      {/* Fondo animado más notorio */}
      <div className="fixed top-0 left-0 w-full h-full z-[-1] bg-gradient-to-r from-purple-800 via-fuchsia-900 to-black animate-[pulse_6s_infinite] opacity-50 blur-sm" />
    </main>
  );
}
