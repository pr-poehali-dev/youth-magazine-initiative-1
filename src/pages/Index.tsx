import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold tracking-tight" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                YOUTH MAGAZINE
              </h1>
              <nav className="hidden md:flex space-x-8">
                <a href="#home" className="text-black hover:text-gray-600 transition-colors">Главная</a>
                <a href="#articles" className="text-black hover:text-gray-600 transition-colors">Статьи</a>
                <a href="#contacts" className="text-black hover:text-gray-600 transition-colors">Контакты</a>
              </nav>
            </div>
            <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
              Поиск
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 tracking-tight" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
            Молодежный журнал
            <br />
            <span className="text-gray-600">реабилитационного центра</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Arial, sans-serif' }}>
            Платформа для молодых авторов из Республиканского центра психолого-педагогической 
            реабилитации и коррекции Башкортостана. Место, где каждый может поделиться своей историей.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800">
              Читать статьи
            </Button>
            <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white">
              Стать автором
            </Button>
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Articles Section */}
      <section id="articles" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
            Статьи
          </h3>
          
          <Card className="mb-8 border border-gray-200">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-gray-500 uppercase tracking-wide">Основная статья</div>
                <Button variant="outline" size="sm" className="border-black text-black hover:bg-black hover:text-white">
                  Читать
                </Button>
              </div>
              <CardTitle className="text-2xl mb-2" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                Краткая аннотация проекта
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-lg max-w-none" style={{ fontFamily: 'Arial, sans-serif' }}>
                <p className="text-gray-700 leading-relaxed mb-6">
                  В Республике Башкортостан в Государственном бюджетном учреждение Республиканский центр 
                  психолого-педагогической реабилитации и коррекции несовершеннолетних ежегодно проходят 
                  реабилитацию более 1000 детей, подростков и молодежи, употребляющих наркотические вещества.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Во время реабилитации для них проводятся занятия по арт-терапии, создаются квесты от лучших 
                  игротехников Республики Башкортостан, проводятся конкурсы и занятия для адаптации и облегчения 
                  периода реабилитации. Излюбленным мероприятием ребят стали литературные вечера, где каждый может 
                  рассказать стих или поделиться своим рассказом, или даже статьей.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Во время одного из мероприятий было выдвинуто предложение со стороны реабилитантов, о создании 
                  молодежного журнала, где они будут сами авторами, писателями и редакторами. Будут писать статьи, 
                  а по окончанию месяца журнал будет печататься и бесплатно тиражироваться в Молодежных центрах 
                  и учреждениях республики Башкортостан.
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold mb-3 text-black">Основные темы журнала:</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Здоровый образ жизни</li>
                    <li>Добрые дела и волонтерство</li>
                    <li>Жизненные истории участников</li>
                    <li>Лучшие стихи и рассказы</li>
                  </ul>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  По итогу был проведен анонимный опрос, где <strong>90% опрошенных</strong> ответили положительно 
                  о создании журнала и готовы помогать в создании каждого тиража.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Contacts Section */}
      <section id="contacts" className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
            Контакты
          </h3>
          
          <Card className="border border-gray-200 bg-white">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="MapPin" size={24} className="text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">Адрес</h4>
                  <p className="text-gray-600 text-sm">
                    Республиканский центр<br />
                    психолого-педагогической<br />
                    реабилитации и коррекции<br />
                    Республика Башкортостан
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Mail" size={24} className="text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">Электронная почта</h4>
                  <p className="text-gray-600 text-sm">
                    редакция@youth-magazine.ru<br />
                    авторы@youth-magazine.ru
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Users" size={24} className="text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">Присоединиться</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Стать автором или<br />
                    помочь с модерацией
                  </p>
                  <Button size="sm" className="bg-black text-white hover:bg-gray-800">
                    Связаться
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600 text-sm">
            © 2025 Youth Magazine. Молодежный журнал реабилитационного центра Республики Башкортостан
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;