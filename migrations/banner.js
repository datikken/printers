module.exports = function(migration) {
    const banners = migration

        .createContentType("banners")
        .name("main_page_slider")
        .description("")

        banners
            .createField("Banner")
            .name("Banner")
            .type("Link")
            .linkType("Asset")

        banners
            .changeEditorInterface("Banner", "urlEditor", {})
}