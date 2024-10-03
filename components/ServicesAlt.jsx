import { FaBullhorn, FaBalanceScale, FaRobot, FaDollarSign, FaPencilRuler, FaCog } from 'react-icons/fa';

const ServicesAlt = () => (
  <section className="bg-white dark:bg-gray-900 max-w-6xl mx-auto">
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div className="max-w-screen-md mb-8 lg:mb-16">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Serviços planejados para seu negócio
        </h2>
        <p className="text-gray-500 sm:text-xl dark:text-gray-400">
        Com o seguro garantia, seus projetos ganham mais segurança e credibilidade, garantindo cumprimento de contratos, proteção financeira e tranquilidade em negociações.        </p>
      </div>
      <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
        <div>
          <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
            <FaBullhorn className="w-6 h-6 text-primary-600 dark:text-primary-300" />
          </div>
          <h3 className="mb-2 text-xl font-bold dark:text-white">Seguro Garantia</h3>
          <p className="text-gray-500 dark:text-gray-400">
          Oferece uma garantia financeira sólida para assegurar o cumprimento de contratos públicos e privados, proporcionando segurança em projetos de construção, fornecimento e prestação de serviços.          </p>
        </div>
        <div>
          <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
            <FaBalanceScale className="w-6 h-6 text-primary-600 dark:text-primary-300" />
          </div>
          <h3 className="mb-2 text-xl font-bold dark:text-white">Risco Engenharia</h3>
          <p className="text-gray-500 dark:text-gray-400">
          Cobertura abrangente para projetos de engenharia civil, obras e construções, protegendo contra imprevistos que possam comprometer o cronograma ou causar prejuízos financeiros significativos.          </p>
        </div>
        <div>
          <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
            <FaRobot className="w-6 h-6 text-primary-600 dark:text-primary-300" />
          </div>
          <h3 className="mb-2 text-xl font-bold dark:text-white">Responsabilidade Civil
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
          Protege sua empresa contra danos involuntários causados a terceiros, garantindo cobertura em casos de lesões corporais, danos materiais ou financeiros, gerando confiança e segurança jurídica.          </p>
        </div>
        <div>
          <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
            <FaDollarSign className="w-6 h-6 text-primary-600 dark:text-primary-300" />
          </div>
          <h3 className="mb-2 text-xl font-bold dark:text-white">Riscos Nomeados e Operacionais</h3>
          <p className="text-gray-500 dark:text-gray-400">
          Seguros personalizados para cobrir riscos operacionais e nomeados específicos do seu negócio, garantindo proteção em situações adversas e imprevistas, minimizando impactos financeiros.


          </p>
        </div>
        <div>
          <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
            <FaPencilRuler className="w-6 h-6 text-primary-600 dark:text-primary-300" />
          </div>
          <h3 className="mb-2 text-xl font-bold dark:text-white">Frota</h3>
          <p className="text-gray-500 dark:text-gray-400">
          Seguro especializado para cobrir toda a sua frota de veículos, garantindo tranquilidade com a proteção contra acidentes, roubos e outros incidentes que podem ocorrer no transporte de cargas ou passageiros.

</p>
        </div>
        <div>
          <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
            <FaCog className="w-6 h-6 text-primary-600 dark:text-primary-300" />
          </div>
          <h3 className="mb-2 text-xl font-bold dark:text-white">Saúde</h3>
          <p className="text-gray-500 dark:text-gray-400">
          Planos de saúde corporativos desenhados para atender as necessidades de empresas de todos os tamanhos, com cobertura completa para garantir o bem-estar dos colaboradores e suas famílias.          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ServicesAlt;
