import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-purple-900 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Готовы обсудить ваш проект? Мы всегда на связи!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Icon name="MapPin" className="mr-3 text-purple-400" />
                Наш офис
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-purple-100">
              <p className="text-lg">Новосибирск, Россия</p>
              <p>
                Работаем удаленно и встречаемся лично для обсуждения крупных
                проектов
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Icon name="Phone" className="mr-3 text-purple-400" />
                Контакты
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-purple-100">
              <div className="flex items-center">
                <Icon name="User" className="mr-3 text-purple-400" size={18} />
                <span>Мария</span>
              </div>
              <div className="flex items-center">
                <Icon name="Phone" className="mr-3 text-purple-400" size={18} />
                <a
                  href="tel:+79130082055"
                  className="hover:text-white transition-colors duration-300"
                >
                  +7 913 008-20-55
                </a>
              </div>
              <div className="flex items-center">
                <Icon name="Mail" className="mr-3 text-purple-400" size={18} />
                <span>studio@design.ru</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3"
            >
              <Icon name="Phone" className="mr-2" />
              Позвонить сейчас
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 px-8 py-3"
            >
              <Icon name="MessageCircle" className="mr-2" />
              Написать в Telegram
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
