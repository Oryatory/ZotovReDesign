const Header = () => {
  return (
    <header className="header">
      <a href="" className="header__button">
        Билеты
      </a>
      <div className="header__logo-wrapper">
        <img
          src="https://centrezotov.ru/wp-content/themes/zotov/assets/img/logo-white.svg"
          alt=""
        />
      </div>
      <div className="header__text">
        <p>Москва, Ходынская улица, 2 стр. 1 </p>
        <p>
          вторник — воскресенье 11:00–22:00 <br />
          понедельник — выходной
        </p>
      </div>
    </header>
  );
};
export default Header;
