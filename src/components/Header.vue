<template>
  <nav class="nav">
    <div class="nav__wrapper container">
      <router-link class="nav__logo" to="/">To do list</router-link>
      <ul class="nav__menu">
        <li class="nav__menu-item">
          <router-link to="/list" class="nav__menu-link">List</router-link>
          <ul class="nav__menu-submenu">
            <li class="nav__menu-item">
              <router-link to="/add" class="nav__menu-link"> Calendar </router-link>
            </li>
            <li class="nav__menu-item">
              <router-link to="/add" class="nav__menu-link"> Add </router-link>
            </li>
            <li class="nav__menu-item">
              <router-link to="/add" class="nav__menu-link"> CalendarCalendar </router-link>
            </li>
          </ul>
        </li>
        <li class="nav__menu-item">
          <router-link to="/add" class="nav__menu-link"> Add </router-link>
        </li>
        <li class="nav__menu-item">
          <router-link to="/calendar" class="nav__menu-link"
            >Calendar</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss">
.nav {
  display: grid;
  grid-template-columns: 100%;
  background: $main_red;
  color: #fff;
  min-height: 65px;
  &__wrapper {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, max-content);
    column-gap: 20px;
    align-items: center;
    justify-content: space-between;
  }
  &__logo {
    font-size: 35px;
    font-weight: 600;
  }
  &__menu {
    display: grid;
    grid-auto-flow: column;
    height: 100%;
    align-items: center;
    &-item {
      position: relative;
      height: 100%;
      transition: 0.3s all;
      &:hover {
        .nav__menu-submenu {
          opacity: 1;
          visibility: visible;
          pointer-events: all;
        }
      }
    }
    &-link {
      display: block;
      width: 100%;
      height: 100%;
      padding: 0 30px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      background: $main_red;
      &:hover {
        background: #ff9195;
      }
    }
    &-submenu {
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      min-width: 100%;
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      transition: .3s all;
      .nav__menu-link {
        padding-top: 15px;
        padding-bottom: 15px;
      }
    }
  }
}
</style>