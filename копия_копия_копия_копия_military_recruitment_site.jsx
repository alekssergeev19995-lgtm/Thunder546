import { useState } from 'react'

export default function MilitaryRecruitmentSite() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [agreed, setAgreed] = useState(false)
  const [loading, setLoading] = useState(false)
  const vacancies = [
    {
      title: 'Оператор БПЛА',
      salary: 'до 250 000 ₽',
      description:
        'Работа с современными беспилотными системами и техническим оборудованием.',
      image:
        'https://cdn.corenexis.com/files/c/8824872720.jpg'
    },
    {
      title: 'Военный водитель',
      salary: 'до 225 000 ₽',
      description:
        'Перевозка личного состава и техники с полным сопровождением оформления.',
      image:
        'https://cdn.corenexis.com/files/c/8447758720.png'
    },
    {
      title: 'Разведчик',
      salary: 'до 360 000 ₽',
      description:
        'Служба в подразделениях разведки с повышенными выплатами и льготами.',
      image:
        'https://cdn.corenexis.com/files/c/4452464720.png'
    },
    {
      title: 'Специалист связи',
      salary: 'до 230 000 ₽',
      description:
        'Настройка и обслуживание систем связи и коммуникационного оборудования.',
      image:
        'https://cdn.corenexis.com/files/c/5621495720.png'
    },
    {
      title: 'Сапёр',
      salary: 'до 315 000 ₽',
      description:
        'Инженерные задачи, разминирование и работа со специализированной техникой.',
      image:
        'https://cdn.corenexis.com/files/c/8468187720.png'
    },
    {
      title: 'Штурмовик',
      salary: 'до 425 000 ₽',
      description:
        'Служба в штурмовых подразделениях с высокими выплатами и поддержкой.',
      image:
        'https://cdn.corenexis.com/files/c/5273189720.png'
    }
  ]

  const benefits = [
    'Максимальные выплаты',
    'Гарантированное зачисление на согласованную вакансию',
    'Полное сопровождение на всех этапах',
    'Реальные примеры нашей работы'
  ]

  const advantageCards = [
    {
      title: 'Единовременная выплата',
      value: 'от 3 100 000 ₽',
      desc:
        'Крупные федеральные и региональные выплаты сразу после подписания контракта.'
    },
    {
      title: 'Ежемесячное довольствие',
      value: 'до 450 000 ₽',
      desc:
        'Высокое денежное довольствие, боевые выплаты, премии и дополнительные надбавки.'
    },
    {
      title: 'Обеспечение экипировкой',
      value: '100%',
      desc:
        'Современная форма, экипировка, бронезащита и всё необходимое для службы.'
    },
    {
      title: 'Жилищные льготы',
      value: 'Полный пакет',
      desc:
        'Военная ипотека, служебное жильё, компенсация аренды и жилищные сертификаты.'
    },
    {
      title: 'Медицинские льготы',
      value: 'Полное обеспечение',
      desc:
        'Лечение в военных госпиталях, бесплатные лекарства и реабилитация.'
    },
    {
      title: 'Финансовые льготы',
      value: 'Полная поддержка',
      desc:
        'Кредитные каникулы, льготные займы и налоговые льготы для военнослужащих.'
    },
    {
      title: 'Страховое обеспечение',
      value: 'Социальные гарантии',
      desc:
        'Страховые выплаты и компенсации при ранении, травмах или инвалидности.'
    },
    {
      title: 'Поддержка семьи',
      value: 'Забота о близких',
      desc:
        'Выплаты и льготы семьям военнослужащих, помощь детям и сопровождение.'
    },
    {
      title: 'Сохранение работы',
      value: 'Трудовые гарантии',
      desc:
        'Сохранение рабочего места, стажа и социальных гарантий на период службы.'
    },
    {
      title: 'Бесплатное обучение',
      value: 'За счёт государства',
      desc:
        'Профессиональная подготовка и повышение квалификации военнослужащих.'
    },
    {
      title: 'Статус ветерана',
      value: 'Особый статус',
      desc:
        'Получение статуса ветерана боевых действий и дополнительных льгот.'
    },
    {
      title: 'Поддержка после контракта',
      value: 'Адаптация и помощь',
      desc:
        'Помощь с адаптацией после службы, консультации и сопровождение по социальным вопросам.'
    }
  ]

  return (
    <div className="min-h-screen bg-[#0c1310] text-white overflow-hidden font-sans">
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <div className="text-3xl font-black tracking-widest text-[#9dbb74]">
              Контрактная служба
            </div>
            <div className="text-xs uppercase tracking-[0.4em] text-zinc-400 mt-1">
              Вакансии на СВО
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-sm uppercase tracking-wider text-zinc-300">
            <a href="#about" className="hover:text-[#9dbb74] transition-colors">
              О компании
            </a>
            <a href="#vacancies" className="hover:text-[#9dbb74] transition-colors">
              Вакансии
            </a>
            <a href="#advantages" className="hover:text-[#9dbb74] transition-colors">
              Преимущества
            </a>
            <a href="#contacts" className="hover:text-[#9dbb74] transition-colors">
              Контакты
            </a>
            <a href="#faq" className="hover:text-[#9dbb74] transition-colors">
              FAQ
            </a>
          </nav>
<a href="#contacts" className="px-6 py-3 bg-[#9dbb74] text-black font-black rounded-xl hover:bg-[#b8d98a] transition-colors">
            Оставить заявку
          </a>
        </div>
      </header>

      <div className="fixed right-6 bottom-6 z-[100] flex flex-col gap-4">
        <a
          href="https://t.me"
          target="_blank"
          className="group flex items-center gap-3 px-5 py-4 rounded-2xl border border-[#9dbb74]/30 bg-black/70 backdrop-blur-xl shadow-[0_0_25px_rgba(157,187,116,0.15)] hover:border-[#9dbb74] hover:translate-x-[-4px] transition-all duration-300"
        >
          <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center overflow-hidden">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
              alt="Telegram"
              className="w-7 h-7"
            />
          </div>

          <div className="text-left leading-tight">
            <div className="text-sm font-black uppercase tracking-wide text-white">
              Telegram
            </div>
            <div className="text-xs text-zinc-400">
              Быстрая связь
            </div>
          </div>
        </a>

        <a
          href="https://max.ru"
          target="_blank"
          className="group flex items-center gap-3 px-5 py-4 rounded-2xl border border-white/10 bg-black/70 backdrop-blur-xl shadow-2xl hover:border-white/30 hover:translate-x-[-4px] transition-all duration-300"
        >
          <div className="w-11 h-11 rounded-2xl overflow-hidden shadow-lg">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="maxGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4fc3ff" />
                  <stop offset="50%" stopColor="#3b4dff" />
                  <stop offset="100%" stopColor="#b144ff" />
                </linearGradient>
              </defs>

              <rect width="100" height="100" rx="22" fill="url(#maxGradient)" />

              <path
                d="M50 18C31 18 18 32 18 52C18 71 30 86 48 86C59 86 68 80 74 71C79 64 82 56 82 47C82 30 69 18 50 18ZM50 33C61 33 68 40 68 50C68 61 60 69 50 69C39 69 32 61 32 50C32 40 39 33 50 33Z"
                fill="white"
              />
            </svg>
          </div>

          <div className="text-left leading-tight">
            <div className="text-sm font-black uppercase tracking-wide text-white">
              MAX
            </div>
            <div className="text-xs text-zinc-400">
              Онлайн консультация
            </div>
          </div>
        </a>
      </div>

      <section className="relative min-h-[90vh] flex items-center border-b border-white/10">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1800&auto=format&fit=crop"
            alt="military"
            className="w-full h-full object-cover opacity-30"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1310] via-[#0c1310]/90 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 border border-[#9dbb74]/40 bg-[#9dbb74]/10 px-5 py-2 rounded-full text-[#b8d98a] uppercase tracking-[0.2em] text-xs font-bold mb-8">
              Служба по контракту 2026
            </div>

            <h1 className="text-6xl lg:text-8xl font-black leading-[0.95] uppercase mb-8">
              Подбор кандидатов на военную службу по контракту.
            </h1>

            <p className="text-xl text-zinc-300 leading-relaxed max-w-2xl mb-10">
              Сопровождение кандидатов на всех этапах оформления.
            </p>

            <div className="flex flex-wrap gap-5 mb-14">
              <a href="#contacts" className="px-8 py-4 bg-[#9dbb74] text-black rounded-2xl font-black uppercase tracking-wide hover:bg-[#b8d98a] transition-colors">
                Подать заявку
              </a>

              <button className="px-8 py-4 border border-white/20 rounded-2xl uppercase tracking-wide hover:bg-white/10 transition-colors">
                Получить консультацию
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="max-w-7xl mx-auto px-6 py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="uppercase tracking-[0.3em] text-[#9dbb74] text-sm font-bold mb-5">
              О компании
            </div>

            <h2 className="text-5xl font-black uppercase leading-tight mb-8">
              Даём не обещания — даём гарантии.
            </h2>

            <div className="text-zinc-300 text-[22px] leading-[1.9] mb-12 max-w-3xl">
              Мы помогаем кандидатам пройти оформление на военную службу по контракту, подобрать подходящую вакансию и получить полное сопровождение на всех этапах. Даём то, чего не дают другие: <span className="text-[#9dbb74] font-black text-2xl uppercase tracking-wide">гарантии</span>.
              <br /><br />
              <span className="font-black text-white text-2xl uppercase tracking-wide">Гарантируем:</span>
              <br /><br />
              Максимальные выплаты — федеральные, региональные, муниципальные. Полный пакет без скрытых удержаний.
              <br /><br />
              Работаем напрямую с проверенными подразделениями и гарантируем зачисление на согласованную вакансию — вы заранее знаете подразделение, должность, условия службы и выплаты без неожиданностей и скрытых условий.
              <br /><br />
              Полное сопровождение на всех этапах: от первой заявки до момента зачисления в часть и получения выплат. Помогаем с оформлением документов, оплачиваем билеты, проживание и питание, встречаем по приезде и сопровождаем кандидата до полного оформления и зачисления.
              <br /><br />
              У нас есть реальные примеры успешного зачисления кандидатов в различные подразделения. Многие обращаются к нам по рекомендациям — благодаря прозрачной работе, сопровождению и выполненным гарантиям.
              <br /><br />
              <span className="inline-flex items-center gap-3 mt-6 px-8 py-5 rounded-2xl border border-[#9dbb74]/30 bg-[#9dbb74]/10 text-[#b8d98a] text-3xl font-black uppercase tracking-wide shadow-[0_0_30px_rgba(157,187,116,0.15)]">
                Оставьте заявку. Всё остальное берём на себя.
              </span>
            </div>

            <div className="space-y-5">
              {benefits.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-6 py-5"
                >
                  <div className="w-3 h-3 rounded-full bg-[#9dbb74]" />
                  <div className="font-semibold text-lg">{item}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between self-stretch h-full max-w-lg mx-auto min-h-[100%] gap-16">
            <div className="flex flex-col">
              <img
                src="https://cdn.corenexis.com/files/c/7985647720.png"
                alt="candidate"
                className="rounded-[32px] border border-white/10 shadow-2xl object-cover h-[720px] w-full"
              />

              <div className="mt-5 px-2">
                <div className="text-lg font-black uppercase text-white mb-1">
                  Александр, 32 года
                </div>
                <div className="text-zinc-400 leading-relaxed text-base">
                  — Думал будет куча проблем с оформлением, но всё сделали быстро. Постоянно были на связи и в итоге попал именно в то подразделение, которое обсуждали заранее.
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <img
                src="https://cdn.corenexis.com/files/c/6382245720.png"
                alt="candidate"
                className="rounded-[32px] border border-white/10 shadow-2xl object-cover h-[720px] w-full"
              />

              <div className="mt-5 px-2">
                <div className="text-lg font-black uppercase text-white mb-1">
                  Дмитрий, 28 лет
                </div>
                <div className="text-zinc-400 leading-relaxed text-base">
                  — Приехал из другого региона, помогли с билетами и жильём. Всё объяснили нормально. В итоге попал в рембат, как и хотел.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="vacancies" className="py-28 bg-[#111915] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="uppercase tracking-[0.3em] text-[#9dbb74] text-sm font-bold mb-5">
              Вакансии
            </div>

            <h2 className="text-6xl font-black uppercase mb-6">
              самые Актуальные направления
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {vacancies.map((vacancy, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-[36px] border border-white/10 bg-black/30 hover:border-[#9dbb74]/40 transition-all"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={vacancy.image}
                    alt={vacancy.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  <div className="absolute bottom-0 left-0 p-8">
                    <div className="text-[#9dbb74] uppercase tracking-[0.25em] text-xs font-bold mb-3">
                      Вакансия
                    </div>

                    <h3 className="text-4xl font-black uppercase mb-4">
                      {vacancy.title}
                    </h3>

                    <div className="text-5xl font-black text-[#9dbb74]">
                      {vacancy.salary}
                    </div>
                  </div>
                </div>

                <div className="p-8 flex items-center justify-between gap-6">
                  <div className="text-zinc-400 leading-relaxed">
                    {vacancy.description}
                  </div>

                  <a href="#contacts" className="shrink-0 inline-block px-6 py-3 rounded-xl bg-[#9dbb74] text-black font-black uppercase hover:bg-[#b8d98a] transition-colors">
                    Откликнуться
                  </a>
                </div>
              </div>
            ))}

            <div className="relative overflow-hidden rounded-[36px] border border-[#9dbb74]/50 bg-gradient-to-br from-[#18231b] via-black to-[#111915] p-12 flex flex-col justify-between min-h-[420px] shadow-[0_0_60px_rgba(157,187,116,0.15)] lg:col-span-2 max-w-5xl mx-auto w-full text-center items-center">
              <div className="absolute top-0 right-0 w-72 h-72 bg-[#9dbb74]/10 blur-3xl rounded-full" />

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#9dbb74]/30 bg-[#9dbb74]/10 text-[#b8d98a] uppercase tracking-[0.25em] text-xs font-black mb-8">
                  Более 50 направлений
                </div>

                <div className="text-7xl font-black text-[#9dbb74] leading-none mb-6">
                  50+
                </div>

                <h3 className="text-5xl font-black uppercase leading-tight mb-6 max-w-2xl">
                  Подберём вакансию
                  <br />
                  именно под вас
                </h3>

                <p className="text-zinc-300 text-xl leading-relaxed max-w-3xl mb-10">
                  Штурмовые подразделения, разведка, БПЛА, инженерные войска, связь, водители и десятки других направлений.
                  <br /><br />
                  Оставьте заявку — мы предложим лучшие условия, выплаты и вакансию под ваш опыт.
                </p>
              </div>

              <div className="relative z-10 flex flex-wrap justify-center gap-4">
                <a
                  href="#contacts"
                  className="px-8 py-4 rounded-2xl bg-[#9dbb74] text-black font-black uppercase tracking-wide hover:bg-[#b8d98a] transition-all shadow-xl"
                >
                  Подобрать вакансию
                </a>

                <a
                  href="#contacts"
                  className="px-8 py-4 rounded-2xl border border-white/15 bg-white/5 font-black uppercase tracking-wide hover:border-[#9dbb74]/50 hover:bg-[#9dbb74]/10 transition-all"
                >
                  Получить консультацию
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="advantages"
        className="py-28 bg-black border-y border-white/10 relative overflow-hidden"
      >
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="uppercase tracking-[0.35em] text-[#9dbb74] text-sm font-bold mb-6">
              Преимущества службы
            </div>

            <h2 className="text-5xl lg:text-7xl font-black uppercase leading-tight mb-8">
              Что получает кандидат
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantageCards.map((item, index) => (
              <div
                key={index}
                className="group rounded-[30px] border border-[#9dbb74]/20 bg-gradient-to-b from-[#111915] to-black p-8 hover:border-[#9dbb74]/60 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl border border-[#9dbb74]/30 flex items-center justify-center mb-8 text-[#9dbb74] text-2xl font-black">
                  +
                </div>

                <h3 className="text-2xl font-black uppercase leading-tight mb-5 min-h-[80px]">
                  {item.title}
                </h3>

                <div className="text-4xl font-black text-[#9dbb74] mb-5">
                  {item.value}
                </div>

                <p className="text-zinc-400 leading-relaxed text-lg">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      <section id="contacts" className="py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-[40px] border border-[#9dbb74]/20 bg-gradient-to-br from-[#111915] to-black p-14 text-center shadow-2xl">
            <div className="uppercase tracking-[0.3em] text-[#9dbb74] text-sm font-bold mb-5">
              Контакты
            </div>

            <h2 className="text-6xl font-black uppercase mb-6">
              Получите консультацию
            </h2>

            <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
              Оставьте заявку и мы свяжемся с вами, подберём наиболее выгодную вакансию и расскажем обо всех условиях службы.
            </p>

            <div className="grid md:grid-cols-2 gap-5 mb-8">
  <input
    type="text"
    placeholder="Ваше имя"
    value={name}
    onChange={(e) => setName(e.target.value)}
    className="bg-black/40 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none"
  />

  <input
    type="tel"
    placeholder="Телефон"
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
    className="bg-black/40 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none"
  />
</div>

<div className="flex flex-col gap-4 mb-8 max-w-2xl mx-auto">
  <label className="flex items-start gap-3 p-4 rounded-2xl border border-white/10 bg-black/30 cursor-pointer hover:border-[#9dbb74]/40 transition-all text-left">
    <input
      type="checkbox"
      checked={agreed}
      onChange={(e) => setAgreed(e.target.checked)}
      className="mt-1 w-5 h-5 accent-[#9dbb74]"
    />
    <span className="text-sm leading-relaxed text-zinc-300">
      Согласен на обработку персональных данных*
    </span>
  </label>

  <button
    type="button"
    onClick={async () => {
      if (!name || !phone) {
        alert('Заполните имя и телефон')
        return
      }

      if (!agreed) {
        alert('Необходимо согласие на обработку данных')
        return
      }

      try {
        setLoading(true)

        await fetch('https://script.google.com/macros/s/AKfycbw_HKkoThVTauHlV8QbgsGqEbSJVurADAbdU8MQEvk3bPIdMgThydnQz2z8ugIfk033/exec', {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8'
          },
          body: JSON.stringify({
            name,
            phone,
            date: new Date().toLocaleString()
          })
        })

        alert('Заявка отправлена')
        setName('')
        setPhone('')
        setAgreed(false)
      } catch (error) {
        alert('Ошибка отправки')
      } finally {
        setLoading(false)
      }
    }}
    className="w-full bg-[#9dbb74] text-black font-black py-5 rounded-2xl uppercase hover:bg-[#b8d98a] transition-colors cursor-pointer"
  >
    {loading ? 'Отправка...' : 'Отправить заявку'}
  </button>
</div>

            <div className="text-xs text-zinc-500 max-w-2xl mx-auto text-left leading-relaxed mb-8">
              * Отправляя заявку, вы соглашаетесь с обработкой персональных данных и принимаете условия 
              <a
                href="#privacy"
                className="text-[#9dbb74] underline underline-offset-4 hover:text-[#b8d98a] transition-colors ml-1"
              >
                политики конфиденциальности
              </a>.
            </div>

            <div className="text-sm uppercase tracking-[0.25em] text-zinc-500 font-bold mb-6 pt-6 border-t border-white/10">
              Мы в социальных сетях
            </div>

            <div className="flex flex-wrap items-center justify-center gap-5">
              <a
                href="https://t.me"
                target="_blank"
                className="px-6 py-4 rounded-2xl border border-white/10 bg-white/5 hover:border-[#9dbb74]/50 hover:bg-[#9dbb74]/10 transition-all font-bold uppercase tracking-wide"
              >
                Telegram
              </a>

              <a
                href="https://max.ru"
                target="_blank"
                className="px-6 py-4 rounded-2xl border border-white/10 bg-white/5 hover:border-[#9dbb74]/50 hover:bg-[#9dbb74]/10 transition-all font-bold uppercase tracking-wide"
              >
                MAX
              </a>

              <a
                href="https://vk.com"
                target="_blank"
                className="px-6 py-4 rounded-2xl border border-white/10 bg-white/5 hover:border-[#9dbb74]/50 hover:bg-[#9dbb74]/10 transition-all font-bold uppercase tracking-wide"
              >
                ВКонтакте
              </a>

              <a
                href="https://ok.ru"
                target="_blank"
                className="px-6 py-4 rounded-2xl border border-white/10 bg-white/5 hover:border-[#9dbb74]/50 hover:bg-[#9dbb74]/10 transition-all font-bold uppercase tracking-wide"
              >
                Одноклассники
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-28 bg-[#111915] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="uppercase tracking-[0.3em] text-[#9dbb74] text-sm font-bold mb-5">
              Как проходит процесс
            </div>

            <h2 className="text-5xl font-black uppercase mb-6">
              Всё максимально просто
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl mx-auto">
              От первой заявки до зачисления в подразделение — сопровождаем на каждом этапе.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              ['1', 'Заявка', 'Оставляете заявку на сайте или пишете нам в соцсетях.'],
              ['2', 'Консультация', 'После заявки мы связываемся с вами, подробно рассказываем про условия, выплаты, подразделения и помогаем подобрать подходящую вакансию.'],
              ['3', 'Оформление', 'Помогаем с оформлением всех необходимых документов, организовываем билеты, проживание и питание на время оформления.'],
              ['4', 'Подготовка к отправке', 'Прохождение медкомиссий, подписание документов и подготовка перед отправкой в подразделение.'],
              ['5', 'Зачисление', 'Непосредственное убытие в часть и несение воинской службы по выбранной вами вакансии в согласованном подразделении.']
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-[28px] border border-white/10 bg-black/30 p-8 text-center"
              >
                <div className="text-5xl font-black text-[#9dbb74] mb-5">
                  {item[0]}
                </div>

                <div className="text-2xl font-black uppercase mb-4 text-center break-words leading-tight min-h-[64px] flex items-center justify-center">
                  {item[1]}
                </div>

                <div className="text-zinc-400 leading-relaxed text-base">
                  {item[2]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 border-t border-white/10 bg-black">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="uppercase tracking-[0.3em] text-[#9dbb74] text-sm font-bold mb-5">
              FAQ
            </div>

            <h2 className="text-4xl font-black uppercase mb-4">
              Частые вопросы
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Какие вакансии сейчас самые востребованные?',
                a: 'Чаще всего набирают операторов БПЛА, водителей, связистов, инженерные подразделения и разведку.'
              },
              {
                q: 'Можно ли выбрать конкретную специальность?',
                a: 'Да, подбираем направление и подразделение под ваш опыт, навыки и пожелания.'
              },
              {
                q: 'Берёте без боевого опыта?',
                a: 'Да, многие кандидаты приходят без опыта службы или после срочной службы.'
              },
              {
                q: 'Какие документы нужны для оформления?',
                a: 'Паспорт, военный билет или приписное, а также базовый пакет документов — всё подробно объясняем заранее.'
              },
              {
                q: 'Сколько времени занимает оформление?',
                a: 'В среднем оформление занимает от нескольких дней до пары недель в зависимости от ситуации.'
              },
              {
                q: 'Можно ли приехать из другого региона?',
                a: 'Да, работаем с кандидатами со всей России и помогаем с организацией приезда.'
              },
              {
                q: 'Помогаете с билетами и проживанием?',
                a: 'Да, сопровождаем кандидатов и помогаем решить вопросы с дорогой, проживанием и оформлением.'
              },
              {
                q: 'Когда приходят выплаты?',
                a: 'Сроки зависят от региона и подразделения, но основные выплаты поступают после подписания контракта и зачисления.'
              },
              {
                q: 'Есть ли ограничения по возрасту?',
                a: 'Всё зависит от состояния здоровья, категории годности и конкретной вакансии.'
              },
              {
                q: 'Можно ли заранее узнать условия службы?',
                a: 'Да, до оформления подробно рассказываем про подразделение, задачи, условия и выплаты.'
              },
              {
                q: 'Как быстро вы связываетесь после заявки?',
                a: 'Обычно пишем или звоним в течение нескольких минут после отправки заявки.'
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-[22px] border border-white/10 bg-[#111915] p-5"
              >
                <div className="text-lg font-black mb-2">
                  {item.q}
                </div>

                <div className="text-zinc-400 text-sm leading-relaxed">
                  {item.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="privacy" className="py-24 border-t border-white/10 bg-[#0a0f0d]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-[36px] border border-white/10 bg-black/30 p-10">
            <div className="uppercase tracking-[0.3em] text-[#9dbb74] text-sm font-bold mb-5">
              Политика конфиденциальности
            </div>

            <h2 className="text-4xl font-black uppercase mb-8">
              Обработка персональных данных
            </h2>

            <div className="space-y-6 text-zinc-400 leading-relaxed text-lg">
              <p>
                Оставляя заявку на сайте, пользователь добровольно предоставляет свои персональные данные: имя, номер телефона.
              </p>

              <p>
                Персональные данные используются исключительно для связи с пользователем, консультации по вопросам контрактной службы и сопровождения заявки.
              </p>

              <p>
                Администрация сайта принимает необходимые меры для защиты персональных данных от неправомерного доступа, изменения, раскрытия или уничтожения.
              </p>

              <p>
                Отправляя форму, пользователь подтверждает согласие на обработку персональных данных в соответствии с действующим законодательством.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}