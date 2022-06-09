export default {
  config: {
    // 支持英文、简体中文界面
    locales: ["en", "zh-Hans"],
    translations: {
      "zh-Hans": {
        "app.components.LeftMenu.navbrand.title": "Strapi 仪表盘",
        "app.components.LeftMenu.navbrand.workplace": "工作空间",
        "app.components.Onboarding.help.button": "帮助",

        "global.save": "保存",
        "global.plugins": "插件",
        "global.marketplace": "市场",
        "global.settings": "设置",
        "global.back": "返回",
        "global.profile": "个人资料",
        "global.documentation": "文档",
        "global.name": "名称",
        "global.type": "类型",

        "global.content-manager": "内容管理",

        "content-manager.components.LeftMenu.collection-types": "集合类型",

        "content-type-builder.plugin.name": "内容类型生成器",
        "content-type-builder.menu.section.models.name": "集合类型",
        "content-type-builder.menu.section.single-types.name": "单一类型",
        "content-type-builder.menu.section.components.name": "组件",

        "content-type-builder.button.model.create": "创建一个新的集合类型",
        "content-type-builder.button.single-types.create":
          "创新一个新的单一类型",
        "content-type-builder.button.component.create": "创建一个新的组件",

        "content-type-builder.listView.headerLayout.description":
          "定义内容的数据结构",

        "content-type-builder.form.button.add.field.to.collectionType":
          "为这个集合类型添加另一个字段",
        "content-type-builder.form.button.add.field.to.singleType":
          "为这个单一类型添加另一个字段",
      },
    },
  },
  bootstrap(app) {
    console.log(app);
  },
};
