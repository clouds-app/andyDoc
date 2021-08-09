<template>
  <nav v-if="prevNavLink || nextNavLink" class="page-nav">
    <p v-show="showNavLink" class="inner">
      <span v-if="prevNavLink" class="prev">
        ←
        <NavLink :item="prevNavLink" />
      </span>

      <span v-if="nextNavLink" class="next">
        <NavLink :item="nextNavLink" />
        →
      </span>
    </p>
  </nav>
</template>

<script lang="ts">
// @ts-nocheck
import { UrlParser } from 'url-params-parser'
import {ref, computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { usePageFrontmatter } from '@vuepress/client'
import { isPlainObject, isString } from '@vuepress/shared'
import type {
  DefaultThemeNormalPageFrontmatter,
  NavLink as NavLinkType,
  ResolvedSidebarItem,
} from '@vuepress/theme-default/lib/shared'
import { useNavLink, useSidebarItems } from '@vuepress/theme-default/lib/client/composables'
import NavLink from '@vuepress/theme-default/lib/client/components/NavLink.vue'

/**
 * Resolve `prev` or `next` config from frontmatter
 */
const resolveFromFrontmatterConfig = (
  conf: unknown
): null | false | NavLinkType => {
  if (conf === false) {
    return null
  }

  if (isString(conf)) {
    return useNavLink(conf)
  }

  if (isPlainObject<NavLinkType>(conf)) {
    return conf
  }

  return false
}

/**
 * Resolve `prev` or `next` config from sidebar items
 */
const resolveFromSidebarItems = (
  sidebarItems: ResolvedSidebarItem[],
  currentPath: string,
  offset: number
): null | NavLinkType => {
  const index = sidebarItems.findIndex((item) => item.link === currentPath)
  if (index !== -1) {
    const targetItem = sidebarItems[index + offset]
    if (!targetItem?.link) {
      return null
    }
    return targetItem as NavLinkType
  }

  for (const item of sidebarItems) {
    if (item.children) {
      const childResult = resolveFromSidebarItems(
        item.children,
        currentPath,
        offset
      )
      if (childResult) {
        return childResult
      }
    }
  }

  return null
}

export default defineComponent({
  name: 'PageNav',

  components: {
    NavLink,
  },

  setup() {
  
    const frontmatter = usePageFrontmatter<DefaultThemeNormalPageFrontmatter>()
    const sidebarItems = useSidebarItems()
    const route = useRoute()

    const prevNavLink = computed(() => {
      const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev)
      if (prevConfig !== false) {
        return prevConfig
      }

      return resolveFromSidebarItems(sidebarItems.value, route.path, -1)
    })

    const nextNavLink = computed(() => {
      const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next)
      if (nextConfig !== false) {
        return nextConfig
      }

      return resolveFromSidebarItems(sidebarItems.value, route.path, 1)
    })
   const showNavLink = ref(true)
     // 上一个链接，下一个链接 是否隱藏
    function showOrHideNavLink(){
        // debugger
         let currentUrl = window.location.href
          const urlParser = UrlParser(currentUrl)
          const queryParamsKeys =urlParser.queryParamsKeys
          if(queryParamsKeys && queryParamsKeys.length>0 && queryParamsKeys.includes('sidebar')){
             showNavLink.value =false
          }
    }
    showOrHideNavLink()
    return {
      prevNavLink,
      nextNavLink,
      showNavLink,
    }
  },
})
</script>
