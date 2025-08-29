import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-blue-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-10">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent" 
                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                ПЛАНЕТА БАШКОРТОСТАН
              </h1>
              <nav className="hidden md:flex space-x-8">
                <a href="#home" className="text-slate-700 hover:text-blue-600 transition-all duration-300 font-medium">Главная</a>
                <a href="#articles" className="text-slate-700 hover:text-blue-600 transition-all duration-300 font-medium">Статьи</a>
                <a href="#contacts" className="text-slate-700 hover:text-blue-600 transition-all duration-300 font-medium">Контакты</a>
              </nav>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-green-600 text-white hover:from-blue-700 hover:to-green-700 shadow-lg">
              <Icon name="Search" size={16} className="mr-2" />
              Поиск
            </Button>
          </div>
        </div>
      </nav>

      {/* Articles Section */}
      <section id="articles" className="py-20 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent" 
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              Статьи журнала
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full"></div>
          </div>
          
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm overflow-hidden mb-12">
            <CardHeader className="pb-6 bg-gradient-to-r from-blue-600 to-green-600 text-white">
              <div className="flex items-center justify-between mb-6">
                <div className="text-sm text-blue-100 uppercase tracking-wide font-medium">Основная статья</div>
                <Button variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                  <Icon name="BookOpen" size={16} className="mr-2" />
                  Читать
                </Button>
              </div>
              <CardTitle className="text-4xl mb-4 font-bold" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                Краткая аннотация проекта
              </CardTitle>
            </CardHeader>
            <CardContent className="p-10">
              <div className="prose prose-xl max-w-none" style={{ fontFamily: 'Georgia, serif' }}>
                <p className="text-slate-800 leading-relaxed mb-8 text-lg">
                  В Республике Башкортостан в Государственном бюджетном учреждение Республиканский центр 
                  психолого-педагогической реабилитации и коррекции несовершеннолетних ежегодно проходят 
                  реабилитацию более 1000 детей, подростков и молодежи, употребляющих наркотические вещества.
                </p>
                
                <p className="text-slate-800 leading-relaxed mb-8 text-lg">
                  Во время реабилитации для них проводятся занятия по арт-терапии, создаются квесты от лучших 
                  игротехников Республики Башкортостан, проводятся конкурсы и занятия для адаптации и облегчения 
                  периода реабилитации. Излюбленным мероприятием ребят стали литературные вечера, где каждый может 
                  рассказать стих или поделиться своим рассказом, или даже статьей.
                </p>
                
                <p className="text-slate-800 leading-relaxed mb-8 text-lg">
                  Во время одного из мероприятий было выдвинуто предложение со стороны реабилитантов, о создании 
                  молодежного журнала, где они будут сами авторами, писателями и редакторами. Будут писать статьи, 
                  а по окончанию месяца журнал будет печататься и бесплатно тиражироваться в Молодежных центрах 
                  и учреждениях республики Башкортостан.
                </p>

                <p className="text-slate-800 leading-relaxed mb-8 text-lg">
                  Дети, подростки и молодежь зачастую рано взрослеют и попадают не в самые лучшие компании и сталкиваются 
                  со страшными заболеваниями и проблемами. Наркомания – заболевание, ставшее серьезной проблемой для человечества. 
                  Согласно официальным данным ООН за последние 10 лет количество наркозависимых в России возросло в 10 раз, 
                  и проблема наркомании уже много лет является актуальной, к сожалению, и для Республики Башкортостан.
                </p>

                <p className="text-slate-800 leading-relaxed mb-8 text-lg">
                  В докладе по наркоситуации по РБ Утвержденным протоколом заседания антинаркотической комиссии Республики 
                  Башкортостан от 22.03.2018 No 48 было проведено социологическое исследование, Институтом повышения квалификации 
                  профсоюзных кадров Республики Башкортостан, в соответствии с Методикой и пунктом 3.1.1 подпрограммы 
                  «Противодействие злоупотреблению наркотиками и их незаконному обороту» государственной программы 
                  «Обеспечение общественной безопасности в Республике Башкортостан на 2015-2020 годы».
                </p>

                <p className="text-slate-800 leading-relaxed mb-8 text-lg">
                  По мнению опрошенных более половины респондентов, когда-либо употреблявших наркотики, впервые попробовали 
                  их в возрасте от 16 до 18 лет (47,2%) и в возрасте 19-25 лет (25,5%). Это возраст, когда молодой организм 
                  созревает в физиологическом и социальном плане. Изучая подобные документы возникают сомнения и вопросы, 
                  разве могут быть такие ситуации?! Разве могут подростки, молодёжь и тем более дети попасть в подобную ситуацию.
                </p>

                <p className="text-slate-800 leading-relaxed mb-8 text-lg">
                  Ярким примером становится центр реабилитации, в котором мы ежемесячно проводим добровольческие акции 
                  и мероприятия, ведь в центре бывают ребята разных возрастов, молодые, красивые и интересные, но с трудной 
                  жизненной ситуации. Есть данные из практики, что реализация адаптационной программы с наличием арт-компонента 
                  повышает её эффективность более чем в половину.
                </p>

                <p className="text-slate-800 leading-relaxed mb-8 text-lg">
                  У зависимых отмечается повышение реабилитационного потенциалах, достигается высокая степень личностной, 
                  социальной и трудовой адаптации за счёт участия и заинтересованности в итоге коллективного творчества 
                  и совместных мероприятиях. Таким образом, реализацию данного проекта с учётом участия в разных мероприятиях 
                  разработчики рассматривают как комплексную многокомпонентную антинаркотическую работу с использованием 
                  методов волонтёрства.
                </p>
                
                <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-2xl mb-8 border border-blue-200">
                  <h4 className="font-bold mb-4 text-slate-800 text-xl">Основные темы журнала:</h4>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mr-4"></div>
                      <span className="text-lg">Здоровый образ жизни</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mr-4"></div>
                      <span className="text-lg">Добрые дела и волонтерство</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mr-4"></div>
                      <span className="text-lg">Жизненные истории участников</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mr-4"></div>
                      <span className="text-lg">Лучшие стихи и рассказы</span>
                    </li>
                  </ul>
                </div>
                
                <p className="text-slate-800 leading-relaxed text-lg font-medium">
                  Данный Проект решает сразу задачи первичной, вторичной и третичной профилактики наркомании. 
                  По итогу был проведен анонимный опрос, где <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent font-bold text-xl">90% опрошенных</span> ответили положительно 
                  о создании журнала и готовы помогать в создании каждого тиража.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-20 bg-gradient-to-r from-blue-300 to-green-300 h-px border-0" />

      {/* Contacts Section */}
      <section id="contacts" className="py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-12 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent" 
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            Контакты
          </h3>
          
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-12">
              <div className="grid md:grid-cols-3 gap-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Icon name="MapPin" size={32} className="text-white" />
                  </div>
                  <h4 className="font-bold mb-4 text-xl text-slate-800">Адрес</h4>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    Республиканский центр<br />
                    психолого-педагогической<br />
                    реабилитации и коррекции<br />
                    Республика Башкортостан
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Icon name="Mail" size={32} className="text-white" />
                  </div>
                  <h4 className="font-bold mb-4 text-xl text-slate-800">Электронная почта</h4>
                  <p className="text-slate-600 text-lg">
                    редакция@planet-bashkortostan.ru<br />
                    авторы@planet-bashkortostan.ru
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Icon name="Users" size={32} className="text-white" />
                  </div>
                  <h4 className="font-bold mb-4 text-xl text-slate-800">Присоединиться</h4>
                  <p className="text-slate-600 text-lg mb-6">
                    Стать автором или<br />
                    помочь с модерацией
                  </p>
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 text-white hover:from-blue-700 hover:to-green-700 shadow-lg">
                    <Icon name="MessageCircle" size={18} className="mr-2" />
                    Связаться
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-200 py-12 px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-600 text-lg">
            © 2025 Планета Башкортостан. Молодежный журнал реабилитационного центра Республики Башкортостан
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;