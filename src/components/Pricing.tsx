import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const pricingPlans = [
  {
    name: "Стартап",
    price: "25 000",
    period: "проект",
    description: "Идеально для малого бизнеса",
    features: [
      "Логотип + фирменный стиль",
      "Простой сайт-визитка",
      "Базовые макеты печати",
      "2 недели разработки",
      "1 месяц поддержки",
    ],
    color: "purple",
    popular: false,
  },
  {
    name: "Бизнес",
    price: "75 000",
    period: "проект",
    description: "Комплексное решение",
    features: [
      "Полный брендбук",
      "Корпоративный сайт",
      "UX/UI мобильного приложения",
      "Рекламные материалы",
      "1 месяц разработки",
      "3 месяца поддержки",
    ],
    color: "pink",
    popular: true,
  },
  {
    name: "Премиум",
    price: "150 000",
    period: "проект",
    description: "Максимальный результат",
    features: [
      "Все виды дизайна",
      "Дизайн интерьера офиса",
      "Промышленный дизайн",
      "Полное сопровождение",
      "2 месяца разработки",
      "6 месяцев поддержки",
    ],
    color: "orange",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Тарифы и цены
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Прозрачное ценообразование для проектов любой сложности
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? "border-pink-500 shadow-2xl shadow-pink-500/20"
                  : "border-gray-200 hover:border-purple-300"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-center py-2 text-sm font-semibold">
                  Популярный выбор
                </div>
              )}

              <CardHeader
                className={`text-center ${plan.popular ? "pt-12" : "pt-6"}`}
              >
                <CardTitle className="text-2xl font-bold text-gray-800 mb-2">
                  {plan.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-800">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-2">₽ / {plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Icon
                        name="Check"
                        size={16}
                        className="text-green-500 mr-3 flex-shrink-0"
                      />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full mt-6 ${
                    plan.popular
                      ? "bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
                      : "bg-gray-800 hover:bg-gray-700"
                  }`}
                  size="lg"
                >
                  Выбрать тариф
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
