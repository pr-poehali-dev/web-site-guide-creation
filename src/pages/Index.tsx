import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const codeExamples = {
    html: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Мой первый сайт</title>
</head>
<body>
  <h1>Привет, мир!</h1>
  <p>Это мой первый сайт</p>
</body>
</html>`,
    css: `.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.button {
  background: linear-gradient(135deg, #8B5CF6, #D946EF);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: transform 0.2s;
}

.button:hover {
  transform: translateY(-2px);
}`,
    js: `// Интерактивная кнопка
const button = document.querySelector('.button');

button.addEventListener('click', () => {
  alert('Привет! Вы нажали на кнопку');
});

// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});`
  };

  const steps = [
    {
      number: '01',
      title: 'Структура HTML',
      description: 'Создайте основу сайта с помощью HTML-тегов',
      icon: 'FileCode',
      color: 'from-purple-500 to-pink-500'
    },
    {
      number: '02',
      title: 'Стилизация CSS',
      description: 'Добавьте красивые стили и анимации',
      icon: 'Palette',
      color: 'from-pink-500 to-orange-500'
    },
    {
      number: '03',
      title: 'Логика JavaScript',
      description: 'Сделайте сайт интерактивным',
      icon: 'Zap',
      color: 'from-orange-500 to-blue-500'
    },
    {
      number: '04',
      title: 'Публикация',
      description: 'Разместите сайт в интернете',
      icon: 'Rocket',
      color: 'from-blue-500 to-purple-500'
    }
  ];

  const projects = [
    {
      title: 'Личный портфолио',
      description: 'Современный сайт-визитка с анимациями',
      difficulty: 'Начальный',
      tags: ['HTML', 'CSS', 'JavaScript'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Landing Page',
      description: 'Яркая посадочная страница для продукта',
      difficulty: 'Средний',
      tags: ['HTML', 'CSS', 'JS', 'Формы'],
      gradient: 'from-pink-500 to-orange-500'
    },
    {
      title: 'Интерактивная галерея',
      description: 'Галерея изображений с модальными окнами',
      difficulty: 'Продвинутый',
      tags: ['HTML', 'CSS', 'JS', 'API'],
      gradient: 'from-blue-500 to-purple-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTMwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="text-center text-white space-y-6 max-w-4xl mx-auto">
            <div className="inline-block animate-float">
              <Badge className="bg-white/20 text-white border-white/30 text-lg px-6 py-2 backdrop-blur-sm">
                🚀 Учись создавать сайты
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in">
              Создай свой первый
              <span className="block bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 bg-clip-text text-transparent">
                веб-сайт
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto animate-fade-in">
              Пошаговое руководство для начинающих разработчиков. От основ HTML до интерактивных проектов
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-6 animate-fade-in">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90 text-lg px-8 py-6 shadow-2xl hover:scale-105 transition-transform">
                <Icon name="Play" className="mr-2" size={20} />
                Начать обучение
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 text-lg px-8 py-6 backdrop-blur-sm">
                <Icon name="Code2" className="mr-2" size={20} />
                Посмотреть примеры
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </section>

      {/* Steps Section */}
      <section className="py-20 fade-on-scroll">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 text-lg px-4 py-2">Пошаговое руководство</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Как создать сайт?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Следуй простым шагам и создай свой первый проект
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <Card key={index} className="border-2 hover:shadow-2xl transition-all hover:-translate-y-2 duration-300 overflow-hidden group">
                <div className={`h-2 bg-gradient-to-r ${step.color}`}></div>
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={step.icon as any} className="text-white" size={32} />
                  </div>
                  <div className="text-5xl font-bold text-gray-200 mb-2">{step.number}</div>
                  <CardTitle className="text-2xl">{step.title}</CardTitle>
                  <CardDescription className="text-base">{step.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm fade-on-scroll">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 text-lg px-4 py-2">Примеры кода</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
              Изучай на практике
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Копируй код и экспериментируй прямо сейчас
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="html" className="w-full">
              <TabsList className="grid w-full grid-cols-3 h-14 bg-gradient-to-r from-purple-100 to-pink-100">
                <TabsTrigger value="html" className="text-lg data-[state=active]:bg-white data-[state=active]:shadow-lg">
                  <Icon name="FileCode" className="mr-2" size={20} />
                  HTML
                </TabsTrigger>
                <TabsTrigger value="css" className="text-lg data-[state=active]:bg-white data-[state=active]:shadow-lg">
                  <Icon name="Palette" className="mr-2" size={20} />
                  CSS
                </TabsTrigger>
                <TabsTrigger value="js" className="text-lg data-[state=active]:bg-white data-[state=active]:shadow-lg">
                  <Icon name="Zap" className="mr-2" size={20} />
                  JavaScript
                </TabsTrigger>
              </TabsList>

              {Object.entries(codeExamples).map(([key, code]) => (
                <TabsContent key={key} value={key}>
                  <Card className="border-2 shadow-xl">
                    <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 border-b flex flex-row items-center justify-between">
                      <CardTitle className="text-lg">Пример {key.toUpperCase()}</CardTitle>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyCode(code, key)}
                        className="gap-2"
                      >
                        <Icon name={copiedCode === key ? "Check" : "Copy"} size={16} />
                        {copiedCode === key ? 'Скопировано!' : 'Копировать'}
                      </Button>
                    </CardHeader>
                    <CardContent className="p-0">
                      <pre className="bg-gray-900 text-gray-100 p-6 overflow-x-auto rounded-b-lg">
                        <code className="text-sm">{code}</code>
                      </pre>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 fade-on-scroll">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 text-lg px-4 py-2">Живая демонстрация</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Попробуй прямо сейчас
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Интерактивные примеры работы HTML, CSS и JavaScript
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="border-2 hover:shadow-xl transition-all overflow-hidden group">
              <CardHeader className="bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MousePointerClick" size={24} />
                  Кнопка с эффектом
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <p className="text-gray-600">Наведи на кнопку и нажми:</p>
                <Button 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  onClick={() => alert('🎉 Отлично! Ты научился создавать интерактивные кнопки!')}
                >
                  Нажми меня!
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all overflow-hidden group">
              <CardHeader className="bg-gradient-to-br from-orange-500 to-red-500 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Sparkles" size={24} />
                  Анимация текста
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <p className="text-gray-600">Текст с градиентом:</p>
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-200% animate-gradient bg-clip-text text-transparent">
                  Живой градиент!
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all overflow-hidden group">
              <CardHeader className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Move" size={24} />
                  Плавающий элемент
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <p className="text-gray-600">Элемент с анимацией:</p>
                <div className="flex justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl animate-float shadow-xl"></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm fade-on-scroll">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 text-lg px-4 py-2">Готовые проекты</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
              Практические задания
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Создай реальные проекты и пополни портфолио
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="border-2 hover:shadow-2xl transition-all hover:-translate-y-2 duration-300 overflow-hidden group">
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon name="Code2" className="text-white opacity-50 group-hover:scale-125 transition-transform" size={64} />
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{project.difficulty}</Badge>
                    <Icon name="Star" className="text-yellow-500" size={20} />
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                    Начать проект
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 fade-on-scroll">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 p-12 text-white text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Основы веб-разработки
                </h2>
                <p className="text-xl opacity-90 mb-8">
                  Все, что нужно знать для создания современных сайтов
                </p>
              </div>
              
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-purple-50 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <Icon name="FileCode" className="text-purple-600" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">HTML</h3>
                        <p className="text-gray-600">Структура и разметка страницы, семантические теги</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-pink-50 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                        <Icon name="Palette" className="text-pink-600" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">CSS</h3>
                        <p className="text-gray-600">Стилизация, анимации, адаптивный дизайн</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-orange-50 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                        <Icon name="Zap" className="text-orange-600" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">JavaScript</h3>
                        <p className="text-gray-600">Интерактивность, работа с DOM, события</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-blue-50 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <Icon name="Smartphone" className="text-blue-600" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Адаптивность</h3>
                        <p className="text-gray-600">Сайты для всех устройств и экранов</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-green-50 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <Icon name="Globe" className="text-green-600" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Публикация</h3>
                        <p className="text-gray-600">Хостинг, домены, деплой проектов</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-purple-50 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <Icon name="Rocket" className="text-purple-600" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Оптимизация</h3>
                        <p className="text-gray-600">Скорость загрузки, SEO, производительность</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 fade-on-scroll">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white space-y-6">
            <Badge className="bg-white/20 text-white border-white/30 text-lg px-6 py-2 backdrop-blur-sm">
              Начни сегодня
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold">
              Готов создать свой первый сайт?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Присоединяйся к тысячам разработчиков, которые начали свой путь в веб-разработке
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-6">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90 text-lg px-8 py-6 shadow-2xl hover:scale-105 transition-transform">
                <Icon name="Rocket" className="mr-2" size={20} />
                Начать обучение
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 text-lg px-8 py-6 backdrop-blur-sm">
                <Icon name="Mail" className="mr-2" size={20} />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                WebLearn
              </h3>
              <p className="text-gray-400">
                Обучение веб-разработке для начинающих
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Обучение</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">HTML основы</li>
                <li className="hover:text-white transition-colors cursor-pointer">CSS стили</li>
                <li className="hover:text-white transition-colors cursor-pointer">JavaScript</li>
                <li className="hover:text-white transition-colors cursor-pointer">Проекты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Ресурсы</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">Документация</li>
                <li className="hover:text-white transition-colors cursor-pointer">Примеры кода</li>
                <li className="hover:text-white transition-colors cursor-pointer">Видеоуроки</li>
                <li className="hover:text-white transition-colors cursor-pointer">FAQ</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">О проекте</li>
                <li className="hover:text-white transition-colors cursor-pointer">Связаться</li>
                <li className="hover:text-white transition-colors cursor-pointer">Сообщество</li>
                <li className="hover:text-white transition-colors cursor-pointer">Поддержка</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2024 WebLearn. Создано с ❤️ для начинающих разработчиков</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
