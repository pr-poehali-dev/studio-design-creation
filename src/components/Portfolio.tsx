import { Card, CardContent } from "@/components/ui/card";

const portfolioItems = [
  {
    title: "Корпоративный сайт IT-компании",
    category: "Веб-дизайн",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    color: "purple",
  },
  {
    title: 'Брендинг кафе "Утро"',
    category: "Графический дизайн",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&h=300&fit=crop",
    color: "pink",
  },
  {
    title: "Современная квартира 85м²",
    category: "Интерьер",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=300&fit=crop",
    color: "orange",
  },
  {
    title: "Умная колонка EcoSound",
    category: "Промдизайн",
    image:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&h=300&fit=crop",
    color: "blue",
  },
  {
    title: 'Рекламная кампания "Весна"',
    category: "Печатная продукция",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
    color: "green",
  },
  {
    title: "Мобильное приложение FitTracker",
    category: "UX/UI",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop",
    color: "indigo",
  },
];

const Portfolio = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Наши работы
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Портфолио успешных проектов в различных направлениях дизайна
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <div
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 bg-${item.color}-100 text-${item.color}-600`}
                >
                  {item.category}
                </div>
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                  {item.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
