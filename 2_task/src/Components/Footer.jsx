export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-company">
                <div className="nav-head">О компании</div>
                <div className="footer-link">Партнёрская программа</div>
                <div className="footer-link">Вакансии</div>
            </div>
            <div className="footer-menu">
                <div className="nav-head">Меню</div>
                <div className="menu-cols">
                    <div className="menu-col">
                        <div className="footer-link">Расчёт стоимости</div>
                        <div className="footer-link">Услуги</div>
                        <div className="footer-link">Виджеты</div>
                        <div className="footer-link">Интеграции</div>
                        <div className="footer-link">Наши клиенты</div>
                    </div>
                    <div className="menu-col">
                        <div id="cases-desktop" className="footer-link">Кейсы</div>
                        <div id="blago-desktop" className="footer-link">Благодарственные письма</div>
                        <div id="blago-mobile" className="footer-link">Благодарность клиентов</div>
                        <div id="cases-mobile" className="footer-link">Кейсы</div>
                        <div className="footer-link">Сертификаты</div>
                        <div className="footer-link">Блок на YouTube</div>
                        <div className="footer-link">Вопрос / Ответ</div>
                    </div>
                </div>
            </div>
            <div className="footer-contacts">
                <div className="nav-head">Контакты</div>
                <div className="footer-contact">+7 555 555-55-55</div>
                <div className="footer-contact">
                    <div><a href=""><img src="/images/telegram.svg" alt="telegram logo"/></a></div>
                    <div><a href=""><img src="/images/phone.svg" alt="phone logo"/></a></div>
                    <div><a href=""><img src="/images/wapp.svg" alt="whatsapp logo"/></a></div>
                </div>
                <div className="footer-contact">Москва, Путевой проезд 3с1, к 902</div>
            </div>
            <div className="copyright">
                <div>©WELBEX 2022. Все права защищены.</div>
                <div><a href="">Политика конфиденциальности</a></div>
            </div>
        </div>
    )
}