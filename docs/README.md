---
home: false
footer: MIT Licensed | Copyright © 2018-present Evan You
---
#### 使用案例 标题

## 创建一个主题

### Badge <Badge text="beta" type="warning"/> <Badge text="默认主题"/>

 [设置链接 API](../reference/theme-api.md) 。
 *改变字体* 或一个 **加粗字体** 。

## 配置项

### apiKey

- 类型： `string`

- 是否必需： `true`

- 详情：

  从 DocSearch 团队收到的 `apiKey` ，或者由你自己生成。

- 参考：
  - [DocSearch > Options > apiKey](https://autocomplete-experimental.netlify.app/docs/docsearch-js#apikey)

### indexName

<span v-for="i in 3"> span: {{ i }} </span>
::: details 隐藏>>点击查看详细
```json{19-23,25-27}
{
  "index_name": "your_index_name",
  "start_urls": [
    "https://your.domain.name/"
  ],
  "stop_urls": [],
  "selectors": {
    "lvl0": {
      "selector": ".sidebar-heading.active",
      "global": true,
      "default_value": "Documentation"
    },
    "lvl1": ".theme-default-content h1",
    "lvl2": ".theme-default-content h2",
    "lvl3": ".theme-default-content h3",
    "lvl4": ".theme-default-content h4",
    "lvl5": ".theme-default-content h5",
    "text": ".theme-default-content p, .theme-default-content li",
    "lang": {
      "selector": "/html/@lang",
      "type": "xpath",
      "global": true
    }
  },
  "custom_settings": {
    "attributesForFaceting": ["lang"]
  }
}
```
:::

```bash
Usage:
  $ vuepress build [sourceDir]

Options:
  -c, --config <config>  Set path to config file 
  -d, --dest <dest>      Set the directory build output (default: .vuepress/dist) 
  -t, --temp <temp>      Set the directory of the temporary files 
  --cache <cache>        Set the directory of the cache files 
  --clean-temp           Clean the temporary files before build 
  --clean-cache          Clean the cache files before build 
  --debug                Enable debug mode 
  -v, --version          Display version number 
  -h, --help             Display this message
```

<CodeGroup>
  <CodeGroupItem title="插件对象" active>

```js
const fooPlugin = {
  name: 'vuepress-plugin-foo',
  // ...
}
```

  </CodeGroupItem>

  <CodeGroupItem title="插件函数">

```js
const fooPlugin = (options, app) => {
  return {
    name: 'vuepress-plugin-foo',
    // ...
  }
}
```

  </CodeGroupItem>
</CodeGroup>






::: warning
注意，插件入口会在 Node 中被加载，因此它应为 CommonJS 格式。

如果你使用 ESM 格式，你需要使用 [babel](https://babeljs.io/) 或 [typescript](https://www.typescriptlang.org/) 来将它编译成 CommonJS 。
:::

::: danger
注意，插件入口会在 Node 中被加载，因此它应为 CommonJS 格式。

如果你使用 ESM 格式，你需要使用 [babel](https://babeljs.io/) 或 [typescript](https://www.typescriptlang.org/) 来将它编译成 CommonJS 。
:::

::: tip
注意，插件入口会在 Node 中被加载，因此它应为 CommonJS 格式。

如果你使用 ESM 格式，你需要使用 [babel](https://babeljs.io/) 或 [typescript](https://www.typescriptlang.org/) 来将它编译成 CommonJS 。
:::

- 将 `name` 按照约定命名： `vuepress-plugin-xxx` 或 `@org/vuepress-plugin-xxx` 。
- 在 `keywords` 中包含 `vuepress-plugin` ，这样用户可以在 NPM 上搜索到你的插件。
- 将 `main` 设为插件入口文件。
- 设置 `files` ，仅发布 `lib` 目录下的文件。

1.  将 `name` 按照约定命名： `vuepress-plugin-xxx` 或 `@org/vuepress-plugin-xxx` 。
2.  在 `keywords` 中包含 `vuepress-plugin` ，这样用户可以在 NPM 上搜索到你的插件。
3.  将 `main` 设为插件入口文件。
4.  设置 `files` ，仅发布 `lib` 目录下的文件。

*  将 `name` 按照约定命名： `vuepress-plugin-xxx` 或 `@org/vuepress-plugin-xxx` 。\
*  在 `keywords` 中包含 `vuepress-plugin` ，这样用户可以在 NPM 上搜索到你的插件。\
\*  将 `main` 设为插件入口文件。\
\*  设置 `files` ，仅发布 `lib` 目录下的文件。

```json
{
  "name": "vuepress-plugin-foo",
  "version": "1.0.0",
  "keywords": [
    "vuepress-plugin",
  ],
  "main": "lib/index.js",
  "files": [
    "lib"
  ]
}
```

