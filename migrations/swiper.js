module.exports = function(migration) {
    const product = migration
        .createContentType("swiper")
        .name("Swiper")
        .description("")
        .displayField("title")

    product
        .createField("title")
        .name("Title")
        .type("Symbol")

    product
        .createField("image")
        .name("Image")
        .type("Link")
        .linkType("Asset")
}