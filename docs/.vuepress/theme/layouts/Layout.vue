<template>
  <div
    class="theme-container"
    :class="containerClass"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <Navbar v-show="custom_navbarShow" v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar">
      <template #before>
        <slot name="navbar-before" />
      </template>
      <template #after>
        <slot name="navbar-after" />
      </template>
    </Navbar>
    <div class="sidebar-mask" @click="toggleSidebar(false)" />

    <Sidebar v-show="custom_sidebarShow">
      <template #top>
        <slot name="sidebar-top" />
      </template>
      <template #bottom>
        <slot name="sidebar-bottom" />
      </template>
    </Sidebar>

    <slot name="page">
      <Home v-if="frontmatter.home" />

      <Transition
        v-else
        name="fade-slide-y"
        mode="out-in"
        @before-enter="onBeforeEnter"
        @before-leave="onBeforeLeave"
      >
        <Page :key="page.path">
          <template #top>
            <slot name="page-top" />
          </template>
          <template #bottom>
            <slot name="page-bottom" />
          </template>
        </Page>
      </Transition>
    </slot>
  </div>
</template>

<script lang="ts">
/**
 * @desc Layout 描述 重写布局页面控制 
 *
 * @params 参数 ?navbar=0&sidebar=0 控制是否顯示側邊欄和菜單欄
 *
 * @return 返回
 *
 * @author Andy Huang
 *
 * @created 2021/08/05 14:38:05
 */
// @ts-nocheck
import {
  computed,
  defineComponent,
  onMounted,
  onUnmounted,
  ref,
  Transition,
} from 'vue'
import { useRouter } from 'vue-router'
import { UrlParser } from 'url-params-parser'
import { usePageData, usePageFrontmatter } from '@vuepress/client'
import type { DefaultThemePageFrontmatter } from '@vuepress/theme-default/lib/shared'
import Home from '@vuepress/theme-default/lib/client/components/Home.vue'
import Page from '../components/Page.vue'
import Navbar from '@vuepress/theme-default/lib/client/components/Navbar.vue'
import Sidebar from '@vuepress/theme-default/lib/client/components/Sidebar.vue'
import {
  useScrollPromise,
  useSidebarItems,
  useThemeLocaleData,
} from '@vuepress/theme-default/lib/client/composables'

export default defineComponent({
  name: 'Layout',

  components: {
    Home,
    Page,
    Navbar,
    Sidebar,
    Transition,
  },

  setup() {
    const custom_navbarShow =ref(true) // add by andy 是否顯示 菜單欄
    const custom_sidebarShow =ref(true) // add by andy 是否顯示 側邊欄
    const page = usePageData()
    const frontmatter = usePageFrontmatter<DefaultThemePageFrontmatter>()
    const themeLocale = useThemeLocaleData()
    
    // navbar
    const shouldShowNavbar = computed(
      () =>   frontmatter.value.navbar !== false && themeLocale.value.navbar !== false
    )

    // sidebar
    const sidebarItems = useSidebarItems()
    const isSidebarOpen = ref(false)
    const toggleSidebar = (to?: boolean): void => {
      isSidebarOpen.value = typeof to === 'boolean' ? to : !isSidebarOpen.value
    }
    const touchStart = { x: 0, y: 0 }
    const onTouchStart = (e): void => {
      touchStart.x = e.changedTouches[0].clientX
      touchStart.y = e.changedTouches[0].clientY
    }
    const onTouchEnd = (e): void => {
      const dx = e.changedTouches[0].clientX - touchStart.x
      const dy = e.changedTouches[0].clientY - touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && touchStart.x <= 80) {
          toggleSidebar(true)
        } else {
          toggleSidebar(false)
        }
      }
    }

    // classes
    const containerClass = computed(() => [
      {
        'no-navbar': !shouldShowNavbar.value,
        'no-sidebar': !sidebarItems.value.length,
        'sidebar-open': isSidebarOpen.value,
      },
      frontmatter.value.pageClass,
    ])
    // 設置菜單欄和側邊欄 是否隱藏
    function showOrHideSideBarAndNavBar(){
         let currentUrl = window.location.href
          const urlParser = UrlParser(currentUrl)
          //const queryParams =urlParser.queryParams
           const queryParamsKeys =urlParser.queryParamsKeys
          if(queryParamsKeys && queryParamsKeys.length>0 && queryParamsKeys.includes('sidebar')){
            custom_sidebarShow.value =false
          }
           if(queryParamsKeys && queryParamsKeys.length>0 && queryParamsKeys.includes('navbar')){
            custom_navbarShow.value = false
          }
    
    }
     // 自定義>> 設置菜單欄和側邊欄 是否隱藏
     showOrHideSideBarAndNavBar()
    // close sidebar after navigation
    let unregisterRouterHook
    onMounted(() => {
      const router = useRouter()
      unregisterRouterHook = router.afterEach(() => {
        toggleSidebar(false)
      })
    })
    onUnmounted(() => {
      unregisterRouterHook()
    })

    // handle scrollBehavior with transition
    const scrollPromise = useScrollPromise()
    const onBeforeEnter = scrollPromise.resolve
    const onBeforeLeave = scrollPromise.pending

    return {
      frontmatter,
      page,
      containerClass,
      shouldShowNavbar,
      toggleSidebar,
      onTouchStart,
      onTouchEnd,
      onBeforeEnter,
      onBeforeLeave,
      custom_navbarShow,
      custom_sidebarShow,
      showOrHideSideBarAndNavBar
    }
  },
})
</script>
