import React from 'react';

function Main({
                onEditProfile,
                onAddPlace,
                onEditAvatar,
                handleCardClick,
                onCardLike,
                onCardDelete,
                cards,
                onDeleteConfirmation
              }) {

  return (
    <main>
        <nav className="menu">
            <a className="menu__link" href="" target="_blank">Главная</a>
            <p>|</p>
            <a className="menu__link" href="" target="_blank">Портфолио</a>
            <p>|</p>
            <a className="menu__link" href="" target="_blank">Команда</a>
            <p>|</p>
            <a className="menu__link" href="" target="_blank">Цены</a>
            <p>|</p>
            <a className="menu__link" href="" target="_blank">Отзывы</a>
            <p>|</p>
            <a className="menu__link" href="" target="_blank">Вопрос-ответ</a>
            <p>|</p>
            <a className="menu__link" href="" target="_blank">Контакты</a>
        </nav>

        <section className="banner" >
            <p className="banner__text">Женственность. Лаконичность. Элегантность.</p>
            <div className="banner__photo"></div>
        </section>

        <section className="intro" >
            <p className="intro__text">НЕВЕСТА, ПОМНИ:</p>
            <p className="intro__text">мы не просто сделаем причёску и макияж...</p>
            <p className="intro__text">Ты получишь ОБРАЗ, который ПРЕВЗОЙДЁТ ОЖИДАНИЯ,</p>
            <p className="intro__text">и ТЫ БУДЕШЬ чувствовать себя НА ВЫСОТЕ в этот особенный день.</p>
        </section>

        <section className="service" >
            <p className="service__text">Наши услуги</p>
        </section>
    </main>
  );
}

export default Main; 