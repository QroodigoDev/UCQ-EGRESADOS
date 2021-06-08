<template>
  <!-- @App Content -->
  <!-- Ver https://github.com/puikinsh/Adminator-admin-dashboard -->
  <!-- =================================================== -->
  <div class="app" :class="sideBarClass">
    <!-- #Left Sidebar ==================== -->
    <div class="sidebar">
      <div class="sidebar-inner">
        <!-- ### $Sidebar Header ### -->
        <div class="sidebar-logo">
          <div class="peers ai-c fxw-nw">
            <div class="peer peer-greed">
              <a class="sidebar-link td-n">
                <div class="peers ai-c fxw-nw">
                  <div class="peer">
                    <div class="logo">
                    </div>
                  </div>
                  <div class="peer">
                    <div class="logo">
                      <h5 class="mt-3">UCQ-ADMIN</h5>
                      <!-- <img
                        class="lazyload img-text"
                        src="@/assets/img/logo-adelantazo-texto.png"
                        alt
                      /> -->
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="peer">
              <div class="mobile-toggle sidebar-toggle">
                <a class="td-n" @click="sideBarTogle = !sideBarTogle">
                  <font-awesome-icon :icon="['fa', 'chevron-circle-left']" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <b-nav vertical class="sidebar-menu scrollable pos-r">
          <b-nav-item
            :to="'/principal/dashboard'"
            class="nav-item"
            exact
            exact-active-class="sidebar-active-link"
          >
            <span class="icon-holder">
              <font-awesome-icon :icon="['fa', 'home']" />
            </span>
            <span class="title">Egresados</span>
          </b-nav-item>
          <b-nav-item
            :to="'/principal/listaEgresados'"
            class="nav-item"
            exact
            exact-active-class="sidebar-active-link"
          >
            <span class="icon-holder">
              <font-awesome-icon :icon="['fa', 'cloud-upload-alt']" />
            </span>
            <span class="title">Importar Egresados</span>
          </b-nav-item>
        </b-nav>
      </div>
    </div>

    <!-- #Main ============================ -->
    <div class="page-container">
      <!-- ### $Topbar ### -->
      <div class="header navbar">
        <div class="header-container">
          <ul class="nav-left">
            <li>
              <a id="sidebar-toggle" class="sidebar-toggle" @click="sideBarTogle = !sideBarTogle">
                <font-awesome-icon :icon="['fa', 'bars']" />
              </a>
            </li>
          </ul>
          <ul class="nav-right">
            <li :class="'nav-item dropdown ' + class_show_menu">
              <a
                class="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                @click.prevent="showMenu"
              >
                <font-awesome-icon :icon="['fa', 'user']" />
                {{ userName }}
              </a>
              <div :class="'dropdown-menu ' + class_show_menu" aria-labelledby="navbarDropdown">
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" @click.prevent="logout">
                  Salir
                  <font-awesome-icon :icon="['fa', 'sign-out-alt']" />
                </a>
              </div>
            </li>
            <li></li>
          </ul>
        </div>
      </div>

      <!-- ### $App Screen Content ### -->
      <main class="main-content bgc-grey-7070">
        <div id="mainContent">
          <router-view></router-view>
        </div>
      </main>

      <!-- ### $App Screen Footer ### -->
      <footer class="bdT ta-c p-30 lh-0 fsz-sm c-grey-600">
        <span>
          <Version />
        </span>
      </footer>
    </div>
  </div>
</template>

<script>
import { BNav, BNavItem } from 'bootstrap-vue'
import { mapGetters, mapActions } from 'vuex'
const Version = () => import('@/components/general/Version.vue')

export default {
  components: {
    BNav,
    BNavItem,
    Version
  },
  data () {
    return {
      sideBarTogle: false,
      class_show_menu: ''
    }
  },
  computed: {
    ...mapGetters({
      user: 'getUser',
      rules: 'getRules'
    }),
    userName () {
      return `${this.user.nombre} ${this.user.apellidoPaterno}`
    },
    sideBarClass () {
      return {
        'is-collapsed': this.sideBarTogle
      }
    }
  },
  methods: {
    ...mapActions({
      signOut: 'signOut',
      updateAbility: 'updateAbility'
    }),
    logout () {
      this.signOut()
      this.$router.push({ name: 'start' })
    },
    showMenu () {
      if (this.class_show_menu === '') {
        this.class_show_menu = 'show'
      } else {
        this.class_show_menu = ''
      }
    }
  },
  mounted () {
  },
  created () {
    if (this.$ability.rules.length === 0) {
      this.updateAbility(this.rules)
    }
  }
}
</script>

<style lang="scss">
.c-grey-600 {
  background:  #7dac3e;
  height: 100px;
}
</style>
