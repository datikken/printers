module.exports = function(migration) {
    const product = migration
        .createContentType("product")
        .name("Product")
        .description("")
        .displayField("title")

    product
        .createField("title")
        .name("Title")
        .type("Symbol")

    product
        .createField("slug")
        .name("Slug")
        .type("Symbol")

    product
        .createField("description")
        .name("Description")
        .type("Symbol")

    product
        .createField("image")
        .name("Image")
        .type("Link")
        .linkType("Asset")

    product
        .createField("keywords")
        .name("Keywords")
        .type("Symbol")

    product
        .createField("User")
        .name("User")
        .type("Link")
        .validations([
            {
                linkContentType: ["user"]
            }
        ])
        .linkType("Entry")

    product
        .createField("seo")
        .name("Seo")
        .type("Link")
        .validations([
            {
                linkContentType: ["seo"]
            }
        ])
        .linkType("Entry")

    product.changeFieldControl("slug", "slugEditor", {})

}