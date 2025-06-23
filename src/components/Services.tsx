import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const services = [
  {
    title: "Веб-дизайн / UX/UI",
    description:
      "Создаем современные сайты и приложения с безупречным пользовательским опытом",
    icon: "Monitor",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Графический дизайн / Брендинг",
    description:
      "Разрабатываем фирменный стиль и визуальную айдентику для вашего бренда",
    icon: "Palette",
    color: "from-pink-500 to-orange-500",
  },
  {
    title: "Дизайн интерьера",
    description:
      "Создаем уютные и функциональные пространства для жизни и работы",
    icon: "Home",
    color: "from-orange-500 to-blue-500",
  },
  {
    title: "Промышленный дизайн",
    description:
      "Проектируем инновационные продукты с акцентом на функциональность",
    icon: "Cog",
    color: "from-blue-500 to-purple-500",
  },
  {
    title: "Печатная / рекламная продукция",
    description:
      "Создаем эффективные рекламные материалы и полиграфическую продукцию",
    icon: "FileText",
    color: "from-green-500 to-teal-500",
  },
];

const Services = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Наши направления
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Полный спектр дизайнерских услуг для создания выдающихся проектов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:scale-105 transition-all duration-300 border-0 shadow-lg hover:shadow-2xl"
            >
              <CardHeader className="text-center">
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon
                    name={service.icon as any}
                    size={32}
                    className="text-white"
                  />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
