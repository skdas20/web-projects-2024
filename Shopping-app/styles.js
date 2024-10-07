@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap");

:root {
  --primary-color: #00007e;
  --primary-color-dark: #47077b;
  --text-dark: #333333;
  --text-light: #767268;
  --white: #ffffff;
  --max-width: 1200px;
  --header-font: "Bebas Neue", sans-serif;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background-image: url('assets/bg.png');
  background-size: cover;
  font-family: "Poppins", sans-serif;
  overflow-x: hidden; /* Prevent horizontal scrolling */
}

a {
  text-decoration: none;
  transition: 0.3s;
}

nav {
  position: fixed;
  width: 100%;
  isolation:isolate;
  z-index: 9;
}

.nav__header {
  padding: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--primary-color);
}

.nav__logo a {
  font-size: 1.75rem;
  font-weight: 400;
  font-family: var(--header-font);
  color: var(--white);
}

.nav__menu__btn {
  font-size: 1.5rem;
  color: var(--white);
  cursor: pointer;
}

.nav__links {
  position: absolute;
  top: 64px;
  left: 0;
  width: 100%;
  padding: 2rem;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  background-color: var(--primary-color);
  transition: 0.5s;
  z-index: -1;
  transform: translateY(-100%);
}

.nav__links.open {
  transform: translateY(0);
}

.nav__links a {
  font-weight: 500;
  color: var(--white);
}
#nav-links:hover {
color:blue;
border-color:blue;
}
.nav__btns {
  display: none;
}

.header__container {
  max-width: var(--max-width);
  margin: auto;
  padding-block: 8rem 2rem;
  padding-inline: 1rem;
  display: grid;
  gap: 2rem;
}

.header__image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.header__image img {
  width: 450px; /* Adjust the size as needed */
  height: 450px; /* Adjust the size as needed */
  border-radius: 100%;
  object-fit: cover;
}

.header__content h1 {
  margin-bottom: 1rem;
  font-size: 5rem;
  font-weight: 400;
  font-family: var(--header-font);
  color: var(--text-dark);
  line-height: 5.5rem;
  text-align: center;
}

.header__content h1 span {
  color: var(--primary-color);
}

.header__content p {
  margin-bottom: 2rem;
  color: var(--text-light);
  line-height: 1.75rem;
  text-align: center;
}

.header__content button {
  width: 100%;
  padding: 1rem 2rem;
  outline: none;
  border: none;
  font-size: 1rem;
  white-space: nowrap;
  color: var(--white);
  background-color: var(--primary-color);
  border-radius: 10px;
  transition: 0.3s;
  cursor: pointer;
}

.header__content button:hover {
  background-color: var(--primary-color-dark);
}

.header__content .bar {
  font-size: 0.9rem;
  color: var(--text-light);
  text-align: center;
  padding-top: 6rem;
}
@media (min-width: 768px) {
  nav {
    position: static;
    padding-block: 2rem 0;
    padding-inline: 1rem;
    max-width: var(--max-width);
    margin-inline: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }
  .nav__header {
    flex: 1;
    padding: 0;
    background-color: transparent;
  }

  .nav__logo a {
    color: var(--text-dark);
  }

  .nav__logo a span {
    color: var(--primary-color);
  }

  .nav__menu__btn {
    display: none;
  }

  .nav__links {
    position: static;
    padding: 0;
    flex-direction: row;
    background-color: transparent;
    transform: none;
  }

  .nav__links a {
    padding-block: 5px;
    color: var(--text-dark);
    border-bottom: 4px solid transparent;

  }
  .nav__links a:hover{
   border-color:#00007e;
   color:#00007e;
  }
  .nav__btns {
    display: flex;
  }

  .nav__btns .btn {
    padding: 0.75rem 1.5rem;
    outline: none;
    border: none;
    font-size: 1rem;
    white-space: nowrap;
    border-radius: 10px;
    transition: 0.3s;
    cursor: pointer;
  }

  .sign__up {
    color: var(--text-dark);
    background-color: transparent;
  }

  .sign__up:hover {
    color: var(--primary-color);
  }

  .sign__in {
    color: var(--white);
    background-color: var(--primary-color);
  }

  .sign__in:hover {
    background-color: var(--primary-color-dark);
  }

  .header__container {
    padding-block: 2rem;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }

  .header__image {
    grid-area: 1/2/2/3;
  }

  .header__content :is(h1, p, .bar) {
    text-align: left;
  }}
@media (min-width: 768px) {
  nav {
    position: static;
    padding-block: 2rem 0;
    padding-inline: 1rem;
    max-width: var(--max-width);
    margin-inline: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }}

@media (min-width: 1024px) {
  .header__content button {
    width: fit-content;
  }
}
