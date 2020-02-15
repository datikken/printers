module.exports = function(migration) {

    const user = migration
        .createContentType("user")
        .name("User")
        .description("")
        .displayField("Firstname")

    user
        .createField("Firstname")
        .name("First name")
        .type("Symbol")

    user
        .createField("Lastname")
        .name("Last name")
        .type("Symbol")

    user
        .createField("Slug")
        .name("Slug")
        .type("Symbol")

    user
        .createField("Avatar")
        .name("Avatar")
        .type("Link")
        .linkType("Asset")

    user.changeEditorInterface("slug", "slugEditor", {})
}