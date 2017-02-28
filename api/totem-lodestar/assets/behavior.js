(function() {
  var MAX_FILTER_SIZE, appendSearchNode, buildNav, buildTOCNode, clearFilter, clearHighlight, currentNode$, currentQuery, fileMap, focusCurrentNode, highlightMatch, moveCurrentNode, nav$, searchNodes, searchableNodes, selectNode, selectNodeByDocumentPath, setCurrentNodeExpanded, setTableOfContentsActive, toc$, toggleTableOfContents, visitCurrentNode;

  tableOfContents = [
    {
        "title": "totem-lodestar",
        "nodes": [
            {
                "type": "file",
                "data": {
                    "language": {
                        "nameMatchers": [
                            ".md",
                            ".markdown",
                            ".mkd",
                            ".mkdn",
                            ".mdown"
                        ],
                        "commentsOnly": true,
                        "name": "Markdown"
                    },
                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/README.md",
                    "projectPath": "README.md",
                    "targetPath": "index",
                    "pageTitle": "index",
                    "title": "index"
                },
                "depth": 1,
                "outline": [
                    {
                        "type": "heading",
                        "data": {
                            "level": 1,
                            "title": "Totem::Lodestar",
                            "slug": "totemlodestar"
                        },
                        "depth": 1,
                        "children": [
                            {
                                "type": "heading",
                                "data": {
                                    "level": 2,
                                    "title": "Installation",
                                    "slug": "installation"
                                },
                                "depth": 2,
                                "children": [
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 3,
                                            "title": "Deploy",
                                            "slug": "deploy"
                                        },
                                        "depth": 3
                                    }
                                ]
                            },
                            {
                                "type": "heading",
                                "data": {
                                    "level": 2,
                                    "title": "License",
                                    "slug": "license"
                                },
                                "depth": 2
                            }
                        ]
                    }
                ]
            },
            {
                "type": "folder",
                "data": {
                    "path": "app",
                    "title": "app"
                },
                "depth": 1,
                "children": [
                    {
                        "type": "folder",
                        "data": {
                            "path": "app/assets",
                            "title": "assets"
                        },
                        "depth": 2,
                        "children": [
                            {
                                "type": "folder",
                                "data": {
                                    "path": "app/assets/config",
                                    "title": "config"
                                },
                                "depth": 3,
                                "children": [
                                    {
                                        "type": "file",
                                        "data": {
                                            "language": {
                                                "nameMatchers": [
                                                    ".js"
                                                ],
                                                "pygmentsLexer": "javascript",
                                                "multiLineComment": [
                                                    "/*",
                                                    "*",
                                                    "*/"
                                                ],
                                                "singleLineComment": [
                                                    "//"
                                                ],
                                                "ignorePrefix": "}",
                                                "foldPrefix": "^",
                                                "name": "JavaScript"
                                            },
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/app/assets/config/totem_lodestar_manifest.js",
                                            "projectPath": "app/assets/config/totem_lodestar_manifest.js",
                                            "targetPath": "app/assets/config/totem_lodestar_manifest",
                                            "pageTitle": "app/assets/config/totem_lodestar_manifest",
                                            "title": "totem_lodestar_manifest"
                                        },
                                        "depth": 4,
                                        "outline": []
                                    }
                                ]
                            },
                            {
                                "type": "folder",
                                "data": {
                                    "path": "app/assets/javascripts",
                                    "title": "javascripts"
                                },
                                "depth": 3,
                                "children": [
                                    {
                                        "type": "file",
                                        "data": {
                                            "language": {
                                                "nameMatchers": [
                                                    ".coffee",
                                                    "Cakefile"
                                                ],
                                                "pygmentsLexer": "coffee-script",
                                                "highlightJS": "coffeescript",
                                                "multiLineComment": [
                                                    "###*",
                                                    " *",
                                                    " ###",
                                                    "###",
                                                    "#",
                                                    "###",
                                                    "###*",
                                                    "#",
                                                    "###"
                                                ],
                                                "strictMultiLineEnd": false,
                                                "singleLineComment": [
                                                    "#"
                                                ],
                                                "ignorePrefix": "}",
                                                "foldPrefix": "^",
                                                "name": "CoffeeScript"
                                            },
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/app/assets/javascripts/totem-lodestar.coffee",
                                            "projectPath": "app/assets/javascripts/totem-lodestar.coffee",
                                            "targetPath": "app/assets/javascripts/totem-lodestar",
                                            "pageTitle": "app/assets/javascripts/totem-lodestar",
                                            "title": "totem-lodestar"
                                        },
                                        "depth": 4,
                                        "outline": []
                                    },
                                    {
                                        "type": "folder",
                                        "data": {
                                            "path": "app/assets/javascripts/totem",
                                            "title": "totem"
                                        },
                                        "depth": 4,
                                        "children": [
                                            {
                                                "type": "folder",
                                                "data": {
                                                    "path": "app/assets/javascripts/totem/lodestar",
                                                    "title": "lodestar"
                                                },
                                                "depth": 5,
                                                "children": [
                                                    {
                                                        "type": "file",
                                                        "data": {
                                                            "language": {
                                                                "nameMatchers": [
                                                                    ".coffee",
                                                                    "Cakefile"
                                                                ],
                                                                "pygmentsLexer": "coffee-script",
                                                                "highlightJS": "coffeescript",
                                                                "multiLineComment": [
                                                                    "###*",
                                                                    " *",
                                                                    " ###",
                                                                    "###",
                                                                    "#",
                                                                    "###",
                                                                    "###*",
                                                                    "#",
                                                                    "###"
                                                                ],
                                                                "strictMultiLineEnd": false,
                                                                "singleLineComment": [
                                                                    "#"
                                                                ],
                                                                "ignorePrefix": "}",
                                                                "foldPrefix": "^",
                                                                "name": "CoffeeScript"
                                                            },
                                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/app/assets/javascripts/totem/lodestar/loader.coffee",
                                                            "projectPath": "app/assets/javascripts/totem/lodestar/loader.coffee",
                                                            "targetPath": "app/assets/javascripts/totem/lodestar/loader",
                                                            "pageTitle": "app/assets/javascripts/totem/lodestar/loader",
                                                            "title": "loader"
                                                        },
                                                        "depth": 6,
                                                        "outline": []
                                                    },
                                                    {
                                                        "type": "folder",
                                                        "data": {
                                                            "path": "app/assets/javascripts/totem/lodestar/modules",
                                                            "title": "modules"
                                                        },
                                                        "depth": 6,
                                                        "children": [
                                                            {
                                                                "type": "file",
                                                                "data": {
                                                                    "language": {
                                                                        "nameMatchers": [
                                                                            ".coffee",
                                                                            "Cakefile"
                                                                        ],
                                                                        "pygmentsLexer": "coffee-script",
                                                                        "highlightJS": "coffeescript",
                                                                        "multiLineComment": [
                                                                            "###*",
                                                                            " *",
                                                                            " ###",
                                                                            "###",
                                                                            "#",
                                                                            "###",
                                                                            "###*",
                                                                            "#",
                                                                            "###"
                                                                        ],
                                                                        "strictMultiLineEnd": false,
                                                                        "singleLineComment": [
                                                                            "#"
                                                                        ],
                                                                        "ignorePrefix": "}",
                                                                        "foldPrefix": "^",
                                                                        "name": "CoffeeScript"
                                                                    },
                                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/app/assets/javascripts/totem/lodestar/modules/api.coffee",
                                                                    "projectPath": "app/assets/javascripts/totem/lodestar/modules/api.coffee",
                                                                    "targetPath": "app/assets/javascripts/totem/lodestar/modules/api",
                                                                    "pageTitle": "app/assets/javascripts/totem/lodestar/modules/api",
                                                                    "title": "api"
                                                                },
                                                                "depth": 7,
                                                                "outline": []
                                                            },
                                                            {
                                                                "type": "file",
                                                                "data": {
                                                                    "language": {
                                                                        "nameMatchers": [
                                                                            ".coffee",
                                                                            "Cakefile"
                                                                        ],
                                                                        "pygmentsLexer": "coffee-script",
                                                                        "highlightJS": "coffeescript",
                                                                        "multiLineComment": [
                                                                            "###*",
                                                                            " *",
                                                                            " ###",
                                                                            "###",
                                                                            "#",
                                                                            "###",
                                                                            "###*",
                                                                            "#",
                                                                            "###"
                                                                        ],
                                                                        "strictMultiLineEnd": false,
                                                                        "singleLineComment": [
                                                                            "#"
                                                                        ],
                                                                        "ignorePrefix": "}",
                                                                        "foldPrefix": "^",
                                                                        "name": "CoffeeScript"
                                                                    },
                                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/app/assets/javascripts/totem/lodestar/modules/layout.coffee",
                                                                    "projectPath": "app/assets/javascripts/totem/lodestar/modules/layout.coffee",
                                                                    "targetPath": "app/assets/javascripts/totem/lodestar/modules/layout",
                                                                    "pageTitle": "app/assets/javascripts/totem/lodestar/modules/layout",
                                                                    "title": "layout"
                                                                },
                                                                "depth": 7,
                                                                "outline": []
                                                            },
                                                            {
                                                                "type": "file",
                                                                "data": {
                                                                    "language": {
                                                                        "nameMatchers": [
                                                                            ".coffee",
                                                                            "Cakefile"
                                                                        ],
                                                                        "pygmentsLexer": "coffee-script",
                                                                        "highlightJS": "coffeescript",
                                                                        "multiLineComment": [
                                                                            "###*",
                                                                            " *",
                                                                            " ###",
                                                                            "###",
                                                                            "#",
                                                                            "###",
                                                                            "###*",
                                                                            "#",
                                                                            "###"
                                                                        ],
                                                                        "strictMultiLineEnd": false,
                                                                        "singleLineComment": [
                                                                            "#"
                                                                        ],
                                                                        "ignorePrefix": "}",
                                                                        "foldPrefix": "^",
                                                                        "name": "CoffeeScript"
                                                                    },
                                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/app/assets/javascripts/totem/lodestar/modules/side_bar.coffee",
                                                                    "projectPath": "app/assets/javascripts/totem/lodestar/modules/side_bar.coffee",
                                                                    "targetPath": "app/assets/javascripts/totem/lodestar/modules/side_bar",
                                                                    "pageTitle": "app/assets/javascripts/totem/lodestar/modules/side_bar",
                                                                    "title": "side_bar"
                                                                },
                                                                "depth": 7,
                                                                "outline": []
                                                            },
                                                            {
                                                                "type": "file",
                                                                "data": {
                                                                    "language": {
                                                                        "nameMatchers": [
                                                                            ".coffee",
                                                                            "Cakefile"
                                                                        ],
                                                                        "pygmentsLexer": "coffee-script",
                                                                        "highlightJS": "coffeescript",
                                                                        "multiLineComment": [
                                                                            "###*",
                                                                            " *",
                                                                            " ###",
                                                                            "###",
                                                                            "#",
                                                                            "###",
                                                                            "###*",
                                                                            "#",
                                                                            "###"
                                                                        ],
                                                                        "strictMultiLineEnd": false,
                                                                        "singleLineComment": [
                                                                            "#"
                                                                        ],
                                                                        "ignorePrefix": "}",
                                                                        "foldPrefix": "^",
                                                                        "name": "CoffeeScript"
                                                                    },
                                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/app/assets/javascripts/totem/lodestar/modules/table_of_content.coffee",
                                                                    "projectPath": "app/assets/javascripts/totem/lodestar/modules/table_of_content.coffee",
                                                                    "targetPath": "app/assets/javascripts/totem/lodestar/modules/table_of_content",
                                                                    "pageTitle": "app/assets/javascripts/totem/lodestar/modules/table_of_content",
                                                                    "title": "table_of_content"
                                                                },
                                                                "depth": 7,
                                                                "outline": []
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "folder",
                                        "data": {
                                            "path": "app/assets/javascripts/vendor",
                                            "title": "vendor"
                                        },
                                        "depth": 4,
                                        "children": [
                                            {
                                                "type": "file",
                                                "data": {
                                                    "language": {
                                                        "nameMatchers": [
                                                            ".js"
                                                        ],
                                                        "pygmentsLexer": "javascript",
                                                        "multiLineComment": [
                                                            "/*",
                                                            "*",
                                                            "*/"
                                                        ],
                                                        "singleLineComment": [
                                                            "//"
                                                        ],
                                                        "ignorePrefix": "}",
                                                        "foldPrefix": "^",
                                                        "name": "JavaScript"
                                                    },
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/app/assets/javascripts/vendor/js-cookie.js",
                                                    "projectPath": "app/assets/javascripts/vendor/js-cookie.js",
                                                    "targetPath": "app/assets/javascripts/vendor/js-cookie",
                                                    "pageTitle": "app/assets/javascripts/vendor/js-cookie",
                                                    "title": "js-cookie"
                                                },
                                                "depth": 5,
                                                "outline": []
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "type": "folder",
                                "data": {
                                    "path": "app/assets/stylesheets",
                                    "title": "stylesheets"
                                },
                                "depth": 3,
                                "children": [
                                    {
                                        "type": "file",
                                        "data": {
                                            "language": {
                                                "nameMatchers": [
                                                    ".scss"
                                                ],
                                                "pygmentsLexer": "scss",
                                                "multiLineComment": [
                                                    "/*",
                                                    "*",
                                                    "*/"
                                                ],
                                                "singleLineComment": [
                                                    "//"
                                                ],
                                                "ignorePrefix": "}",
                                                "foldPrefix": "^",
                                                "name": "SCSS"
                                            },
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/app/assets/stylesheets/totem-lodestar.scss",
                                            "projectPath": "app/assets/stylesheets/totem-lodestar.scss",
                                            "targetPath": "app/assets/stylesheets/totem-lodestar",
                                            "pageTitle": "app/assets/stylesheets/totem-lodestar",
                                            "title": "totem-lodestar"
                                        },
                                        "depth": 4,
                                        "outline": []
                                    },
                                    {
                                        "type": "folder",
                                        "data": {
                                            "path": "app/assets/stylesheets/totem",
                                            "title": "totem"
                                        },
                                        "depth": 4,
                                        "children": [
                                            {
                                                "type": "folder",
                                                "data": {
                                                    "path": "app/assets/stylesheets/totem/lodestar",
                                                    "title": "lodestar"
                                                },
                                                "depth": 5,
                                                "children": [
                                                    {
                                                        "type": "file",
                                                        "data": {
                                                            "language": {
                                                                "nameMatchers": [
                                                                    ".scss"
                                                                ],
                                                                "pygmentsLexer": "scss",
                                                                "multiLineComment": [
                                                                    "/*",
                                                                    "*",
                                                                    "*/"
                                                                ],
                                                                "singleLineComment": [
                                                                    "//"
                                                                ],
                                                                "ignorePrefix": "}",
                                                                "foldPrefix": "^",
                                                                "name": "SCSS"
                                                            },
                                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/app/assets/stylesheets/totem/lodestar/_foundation_and_overrides.scss",
                                                            "projectPath": "app/assets/stylesheets/totem/lodestar/_foundation_and_overrides.scss",
                                                            "targetPath": "app/assets/stylesheets/totem/lodestar/_foundation_and_overrides",
                                                            "pageTitle": "app/assets/stylesheets/totem/lodestar/_foundation_and_overrides",
                                                            "title": "_foundation_and_overrides"
                                                        },
                                                        "depth": 6,
                                                        "outline": []
                                                    },
                                                    {
                                                        "type": "file",
                                                        "data": {
                                                            "language": {
                                                                "nameMatchers": [
                                                                    ".scss"
                                                                ],
                                                                "pygmentsLexer": "scss",
                                                                "multiLineComment": [
                                                                    "/*",
                                                                    "*",
                                                                    "*/"
                                                                ],
                                                                "singleLineComment": [
                                                                    "//"
                                                                ],
                                                                "ignorePrefix": "}",
                                                                "foldPrefix": "^",
                                                                "name": "SCSS"
                                                            },
                                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/app/assets/stylesheets/totem/lodestar/_settings.scss",
                                                            "projectPath": "app/assets/stylesheets/totem/lodestar/_settings.scss",
                                                            "targetPath": "app/assets/stylesheets/totem/lodestar/_settings",
                                                            "pageTitle": "app/assets/stylesheets/totem/lodestar/_settings",
                                                            "title": "_settings"
                                                        },
                                                        "depth": 6,
                                                        "outline": [
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 2,
                                                                    "title": " Foundation for Sites Settings",
                                                                    "slug": "-foundation-for-sites-settings"
                                                                },
                                                                "depth": 2
                                                            },
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 2,
                                                                    "title": "1. Global",
                                                                    "slug": "1-global"
                                                                },
                                                                "depth": 2
                                                            },
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 2,
                                                                    "title": "2. Breakpoints",
                                                                    "slug": "2-breakpoints"
                                                                },
                                                                "depth": 2
                                                            },
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 2,
                                                                    "title": "3. The Grid",
                                                                    "slug": "3-the-grid"
                                                                },
                                                                "depth": 2
                                                            },
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 2,
                                                                    "title": "4. Base Typography",
                                                                    "slug": "4-base-typography"
                                                                },
                                                                "depth": 2
                                                            },
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 2,
                                                                    "title": "5. Typography Helpers",
                                                                    "slug": "5-typography-helpers"
                                                                },
                                                                "depth": 2
                                                            },
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 2,
                                                                    "title": "6. Abide",
                                                                    "slug": "6-abide"
                                                                },
                                                                "depth": 2
                                                            },
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 2,
                                                                    "title": "7. Accordion",
                                                                    "slug": "7-accordion"
                                                                },
                                                                "depth": 2
                                                            },
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 2,
                                                                    "title": "8. Accordion Menu",
                                                                    "slug": "8-accordion-menu"
                                                                },
                                                                "depth": 2
                                                            },
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 2,
                                                                    "title": "9. Badge",
                                                                    "slug": "9-badge"
                                                                },
                                                                "depth": 2
                                                            },
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 2,
                                                                    "title": "10. Breadcrumbs",
                                                                    "slug": "10-breadcrumbs"
                                                                },
                                                                "depth": 2
                                                            },
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 2,
                                                                    "title": "11. Button",
                                                                    "slug": "11-button"
                                                                },
                                                                "depth": 2
                                                            },
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 2,
                                                                    "title": "12. Button Group",
                                                                    "slug": "12-button-group"
                                                                },
                                                                "depth": 2
                                                            },
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 2,
                                                                    "title": "13. Callout",
                                                                    "slug": "13-callout"
                                                                },
                                                                "depth": 2
                                                            },
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 2,
                                                                    "title": "14. Card",
                                                                    "slug": "14-card"
                                                                },
                                                                "depth": 2
                                                            },
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 2,
                                                                    "title": "15. Close Button",
                                                                    "slug": "15-close-button"
                                                                },
                                                                "depth": 2
                                                            },
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 2,
                                                                    "title": "16. Drilldown",
                                                                    "slug": "16-drilldown"
                                                                },
                                                                "depth": 2
                                                            },
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 2,
                                                                    "title": "17. Dropdown",
                                                                    "slug": "17-dropdown"
                                                                },
                                                                "depth": 2
                                                            },
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 2,
                                                                    "title": "18. Dropdown Menu",
                                                                    "slug": "18-dropdown-menu"
                                                                },
                                                                "depth": 2
                                                            },
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 2,
                                                                    "title": "19. Forms",
                                                                    "slug": "19-forms"
                                                                },
                                                                "depth": 2
                                                            },
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 2,
                                                                    "title": "20. Label",
                                                                    "slug": "20-label"
                                                                },
                                                                "depth": 2
                                                            },
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 2,
                                                                    "title": "21. Media Object",
                                                                    "slug": "21-media-object"
                                                                },
                                                                "depth": 2
                                                            },
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 2,
                                                                    "title": "22. Menu",
                                                                    "slug": "22-menu"
                                                                },
                                                                "depth": 2
                                                            },
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 2,
                                                                    "title": "23. Meter",
                                                                    "slug": "23-meter"
                                                                },
                                                                "depth": 2
                                                            },
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 2,
                                                                    "title": "24. Off-canvas",
                                                                    "slug": "24-off-canvas"
                                                                },
                                                                "depth": 2
                                                            },
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 2,
                                                                    "title": "25. Orbit",
                                                                    "slug": "25-orbit"
                                                                },
                                                                "depth": 2
                                                            },
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 2,
                                                                    "title": "26. Pagination",
                                                                    "slug": "26-pagination"
                                                                },
                                                                "depth": 2
                                                            },
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 2,
                                                                    "title": "27. Progress Bar",
                                                                    "slug": "27-progress-bar"
                                                                },
                                                                "depth": 2
                                                            },
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 2,
                                                                    "title": "28. Responsive Embed",
                                                                    "slug": "28-responsive-embed"
                                                                },
                                                                "depth": 2
                                                            },
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 2,
                                                                    "title": "29. Reveal",
                                                                    "slug": "29-reveal"
                                                                },
                                                                "depth": 2
                                                            },
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 2,
                                                                    "title": "30. Slider",
                                                                    "slug": "30-slider"
                                                                },
                                                                "depth": 2
                                                            },
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 2,
                                                                    "title": "31. Switch",
                                                                    "slug": "31-switch"
                                                                },
                                                                "depth": 2
                                                            },
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 2,
                                                                    "title": "32. Table",
                                                                    "slug": "32-table"
                                                                },
                                                                "depth": 2
                                                            },
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 2,
                                                                    "title": "33. Tabs",
                                                                    "slug": "33-tabs"
                                                                },
                                                                "depth": 2
                                                            },
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 2,
                                                                    "title": "34. Thumbnail",
                                                                    "slug": "34-thumbnail"
                                                                },
                                                                "depth": 2
                                                            },
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 2,
                                                                    "title": "35. Title Bar",
                                                                    "slug": "35-title-bar"
                                                                },
                                                                "depth": 2
                                                            },
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 2,
                                                                    "title": "36. Tooltip",
                                                                    "slug": "36-tooltip"
                                                                },
                                                                "depth": 2
                                                            },
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 2,
                                                                    "title": "37. Top Bar",
                                                                    "slug": "37-top-bar"
                                                                },
                                                                "depth": 2
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "folder",
                                                        "data": {
                                                            "path": "app/assets/stylesheets/totem/lodestar/api",
                                                            "title": "api"
                                                        },
                                                        "depth": 6,
                                                        "children": [
                                                            {
                                                                "type": "file",
                                                                "data": {
                                                                    "language": {
                                                                        "nameMatchers": [
                                                                            ".scss"
                                                                        ],
                                                                        "pygmentsLexer": "scss",
                                                                        "multiLineComment": [
                                                                            "/*",
                                                                            "*",
                                                                            "*/"
                                                                        ],
                                                                        "singleLineComment": [
                                                                            "//"
                                                                        ],
                                                                        "ignorePrefix": "}",
                                                                        "foldPrefix": "^",
                                                                        "name": "SCSS"
                                                                    },
                                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/app/assets/stylesheets/totem/lodestar/api/_codestyles.scss",
                                                                    "projectPath": "app/assets/stylesheets/totem/lodestar/api/_codestyles.scss",
                                                                    "targetPath": "app/assets/stylesheets/totem/lodestar/api/_codestyles",
                                                                    "pageTitle": "app/assets/stylesheets/totem/lodestar/api/_codestyles",
                                                                    "title": "_codestyles"
                                                                },
                                                                "depth": 7,
                                                                "outline": []
                                                            },
                                                            {
                                                                "type": "file",
                                                                "data": {
                                                                    "language": {
                                                                        "nameMatchers": [
                                                                            ".scss"
                                                                        ],
                                                                        "pygmentsLexer": "scss",
                                                                        "multiLineComment": [
                                                                            "/*",
                                                                            "*",
                                                                            "*/"
                                                                        ],
                                                                        "singleLineComment": [
                                                                            "//"
                                                                        ],
                                                                        "ignorePrefix": "}",
                                                                        "foldPrefix": "^",
                                                                        "name": "SCSS"
                                                                    },
                                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/app/assets/stylesheets/totem/lodestar/api/_codestyles-highlight.scss",
                                                                    "projectPath": "app/assets/stylesheets/totem/lodestar/api/_codestyles-highlight.scss",
                                                                    "targetPath": "app/assets/stylesheets/totem/lodestar/api/_codestyles-highlight",
                                                                    "pageTitle": "app/assets/stylesheets/totem/lodestar/api/_codestyles-highlight",
                                                                    "title": "_codestyles-highlight"
                                                                },
                                                                "depth": 7,
                                                                "outline": []
                                                            },
                                                            {
                                                                "type": "file",
                                                                "data": {
                                                                    "language": {
                                                                        "nameMatchers": [
                                                                            ".scss"
                                                                        ],
                                                                        "pygmentsLexer": "scss",
                                                                        "multiLineComment": [
                                                                            "/*",
                                                                            "*",
                                                                            "*/"
                                                                        ],
                                                                        "singleLineComment": [
                                                                            "//"
                                                                        ],
                                                                        "ignorePrefix": "}",
                                                                        "foldPrefix": "^",
                                                                        "name": "SCSS"
                                                                    },
                                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/app/assets/stylesheets/totem/lodestar/api/groc.scss",
                                                                    "projectPath": "app/assets/stylesheets/totem/lodestar/api/groc.scss",
                                                                    "targetPath": "app/assets/stylesheets/totem/lodestar/api/groc",
                                                                    "pageTitle": "app/assets/stylesheets/totem/lodestar/api/groc",
                                                                    "title": "groc"
                                                                },
                                                                "depth": 7,
                                                                "outline": [
                                                                    {
                                                                        "type": "heading",
                                                                        "data": {
                                                                            "level": 2,
                                                                            "title": "Configuration",
                                                                            "slug": "configuration"
                                                                        },
                                                                        "depth": 2,
                                                                        "children": [
                                                                            {
                                                                                "type": "heading",
                                                                                "data": {
                                                                                    "level": 3,
                                                                                    "title": "Sizing",
                                                                                    "slug": "sizing"
                                                                                },
                                                                                "depth": 3
                                                                            },
                                                                            {
                                                                                "type": "heading",
                                                                                "data": {
                                                                                    "level": 3,
                                                                                    "title": "Color Scheme",
                                                                                    "slug": "color-scheme"
                                                                                },
                                                                                "depth": 3
                                                                            },
                                                                            {
                                                                                "type": "heading",
                                                                                "data": {
                                                                                    "level": 3,
                                                                                    "title": "Typography",
                                                                                    "slug": "typography"
                                                                                },
                                                                                "depth": 3
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "type": "heading",
                                                                        "data": {
                                                                            "level": 2,
                                                                            "title": "Two-Column Layout",
                                                                            "slug": "two-column-layout"
                                                                        },
                                                                        "depth": 2
                                                                    },
                                                                    {
                                                                        "type": "heading",
                                                                        "data": {
                                                                            "level": 2,
                                                                            "title": "Two-Column Scaling",
                                                                            "slug": "two-column-scaling"
                                                                        },
                                                                        "depth": 2
                                                                    },
                                                                    {
                                                                        "type": "heading",
                                                                        "data": {
                                                                            "level": 2,
                                                                            "title": "Single-Column Layout",
                                                                            "slug": "single-column-layout"
                                                                        },
                                                                        "depth": 2
                                                                    },
                                                                    {
                                                                        "type": "heading",
                                                                        "data": {
                                                                            "level": 2,
                                                                            "title": "Navigation",
                                                                            "slug": "navigation"
                                                                        },
                                                                        "depth": 2
                                                                    },
                                                                    {
                                                                        "type": "heading",
                                                                        "data": {
                                                                            "level": 2,
                                                                            "title": "Behavior",
                                                                            "slug": "behavior"
                                                                        },
                                                                        "depth": 2
                                                                    },
                                                                    {
                                                                        "type": "heading",
                                                                        "data": {
                                                                            "level": 2,
                                                                            "title": "Typography",
                                                                            "slug": "typography"
                                                                        },
                                                                        "depth": 2
                                                                    },
                                                                    {
                                                                        "type": "heading",
                                                                        "data": {
                                                                            "level": 2,
                                                                            "title": "Visual Design",
                                                                            "slug": "visual-design"
                                                                        },
                                                                        "depth": 2,
                                                                        "children": [
                                                                            {
                                                                                "type": "heading",
                                                                                "data": {
                                                                                    "level": 3,
                                                                                    "title": "Commentary Elements",
                                                                                    "slug": "commentary-elements"
                                                                                },
                                                                                "depth": 3
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "type": "heading",
                                                                        "data": {
                                                                            "level": 2,
                                                                            "title": "Browser-Specific Tweaks",
                                                                            "slug": "browser-specific-tweaks"
                                                                        },
                                                                        "depth": 2,
                                                                        "children": [
                                                                            {
                                                                                "type": "heading",
                                                                                "data": {
                                                                                    "level": 3,
                                                                                    "title": "Doc Tags",
                                                                                    "slug": "doc-tags"
                                                                                },
                                                                                "depth": 3
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "type": "heading",
                                                                        "data": {
                                                                            "level": 2,
                                                                            "title": "Code folding",
                                                                            "slug": "code-folding"
                                                                        },
                                                                        "depth": 2
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "file",
                                                        "data": {
                                                            "language": {
                                                                "nameMatchers": [
                                                                    ".scss"
                                                                ],
                                                                "pygmentsLexer": "scss",
                                                                "multiLineComment": [
                                                                    "/*",
                                                                    "*",
                                                                    "*/"
                                                                ],
                                                                "singleLineComment": [
                                                                    "//"
                                                                ],
                                                                "ignorePrefix": "}",
                                                                "foldPrefix": "^",
                                                                "name": "SCSS"
                                                            },
                                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/app/assets/stylesheets/totem/lodestar/base.scss",
                                                            "projectPath": "app/assets/stylesheets/totem/lodestar/base.scss",
                                                            "targetPath": "app/assets/stylesheets/totem/lodestar/base",
                                                            "pageTitle": "app/assets/stylesheets/totem/lodestar/base",
                                                            "title": "base"
                                                        },
                                                        "depth": 6,
                                                        "outline": []
                                                    },
                                                    {
                                                        "type": "folder",
                                                        "data": {
                                                            "path": "app/assets/stylesheets/totem/lodestar/modules",
                                                            "title": "modules"
                                                        },
                                                        "depth": 6,
                                                        "children": [
                                                            {
                                                                "type": "file",
                                                                "data": {
                                                                    "language": {
                                                                        "nameMatchers": [
                                                                            ".scss"
                                                                        ],
                                                                        "pygmentsLexer": "scss",
                                                                        "multiLineComment": [
                                                                            "/*",
                                                                            "*",
                                                                            "*/"
                                                                        ],
                                                                        "singleLineComment": [
                                                                            "//"
                                                                        ],
                                                                        "ignorePrefix": "}",
                                                                        "foldPrefix": "^",
                                                                        "name": "SCSS"
                                                                    },
                                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/app/assets/stylesheets/totem/lodestar/modules/article.scss",
                                                                    "projectPath": "app/assets/stylesheets/totem/lodestar/modules/article.scss",
                                                                    "targetPath": "app/assets/stylesheets/totem/lodestar/modules/article",
                                                                    "pageTitle": "app/assets/stylesheets/totem/lodestar/modules/article",
                                                                    "title": "article"
                                                                },
                                                                "depth": 7,
                                                                "outline": []
                                                            },
                                                            {
                                                                "type": "file",
                                                                "data": {
                                                                    "language": {
                                                                        "nameMatchers": [
                                                                            ".scss"
                                                                        ],
                                                                        "pygmentsLexer": "scss",
                                                                        "multiLineComment": [
                                                                            "/*",
                                                                            "*",
                                                                            "*/"
                                                                        ],
                                                                        "singleLineComment": [
                                                                            "//"
                                                                        ],
                                                                        "ignorePrefix": "}",
                                                                        "foldPrefix": "^",
                                                                        "name": "SCSS"
                                                                    },
                                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/app/assets/stylesheets/totem/lodestar/modules/code_ray.scss",
                                                                    "projectPath": "app/assets/stylesheets/totem/lodestar/modules/code_ray.scss",
                                                                    "targetPath": "app/assets/stylesheets/totem/lodestar/modules/code_ray",
                                                                    "pageTitle": "app/assets/stylesheets/totem/lodestar/modules/code_ray",
                                                                    "title": "code_ray"
                                                                },
                                                                "depth": 7,
                                                                "outline": []
                                                            },
                                                            {
                                                                "type": "file",
                                                                "data": {
                                                                    "language": {
                                                                        "nameMatchers": [
                                                                            ".scss"
                                                                        ],
                                                                        "pygmentsLexer": "scss",
                                                                        "multiLineComment": [
                                                                            "/*",
                                                                            "*",
                                                                            "*/"
                                                                        ],
                                                                        "singleLineComment": [
                                                                            "//"
                                                                        ],
                                                                        "ignorePrefix": "}",
                                                                        "foldPrefix": "^",
                                                                        "name": "SCSS"
                                                                    },
                                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/app/assets/stylesheets/totem/lodestar/modules/markdown.scss",
                                                                    "projectPath": "app/assets/stylesheets/totem/lodestar/modules/markdown.scss",
                                                                    "targetPath": "app/assets/stylesheets/totem/lodestar/modules/markdown",
                                                                    "pageTitle": "app/assets/stylesheets/totem/lodestar/modules/markdown",
                                                                    "title": "markdown"
                                                                },
                                                                "depth": 7,
                                                                "outline": []
                                                            },
                                                            {
                                                                "type": "file",
                                                                "data": {
                                                                    "language": {
                                                                        "nameMatchers": [
                                                                            ".scss"
                                                                        ],
                                                                        "pygmentsLexer": "scss",
                                                                        "multiLineComment": [
                                                                            "/*",
                                                                            "*",
                                                                            "*/"
                                                                        ],
                                                                        "singleLineComment": [
                                                                            "//"
                                                                        ],
                                                                        "ignorePrefix": "}",
                                                                        "foldPrefix": "^",
                                                                        "name": "SCSS"
                                                                    },
                                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/app/assets/stylesheets/totem/lodestar/modules/setting_actions.scss",
                                                                    "projectPath": "app/assets/stylesheets/totem/lodestar/modules/setting_actions.scss",
                                                                    "targetPath": "app/assets/stylesheets/totem/lodestar/modules/setting_actions",
                                                                    "pageTitle": "app/assets/stylesheets/totem/lodestar/modules/setting_actions",
                                                                    "title": "setting_actions"
                                                                },
                                                                "depth": 7,
                                                                "outline": []
                                                            },
                                                            {
                                                                "type": "file",
                                                                "data": {
                                                                    "language": {
                                                                        "nameMatchers": [
                                                                            ".scss"
                                                                        ],
                                                                        "pygmentsLexer": "scss",
                                                                        "multiLineComment": [
                                                                            "/*",
                                                                            "*",
                                                                            "*/"
                                                                        ],
                                                                        "singleLineComment": [
                                                                            "//"
                                                                        ],
                                                                        "ignorePrefix": "}",
                                                                        "foldPrefix": "^",
                                                                        "name": "SCSS"
                                                                    },
                                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/app/assets/stylesheets/totem/lodestar/modules/side_nav.scss",
                                                                    "projectPath": "app/assets/stylesheets/totem/lodestar/modules/side_nav.scss",
                                                                    "targetPath": "app/assets/stylesheets/totem/lodestar/modules/side_nav",
                                                                    "pageTitle": "app/assets/stylesheets/totem/lodestar/modules/side_nav",
                                                                    "title": "side_nav"
                                                                },
                                                                "depth": 7,
                                                                "outline": []
                                                            },
                                                            {
                                                                "type": "file",
                                                                "data": {
                                                                    "language": {
                                                                        "nameMatchers": [
                                                                            ".scss"
                                                                        ],
                                                                        "pygmentsLexer": "scss",
                                                                        "multiLineComment": [
                                                                            "/*",
                                                                            "*",
                                                                            "*/"
                                                                        ],
                                                                        "singleLineComment": [
                                                                            "//"
                                                                        ],
                                                                        "ignorePrefix": "}",
                                                                        "foldPrefix": "^",
                                                                        "name": "SCSS"
                                                                    },
                                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/app/assets/stylesheets/totem/lodestar/modules/toc.scss",
                                                                    "projectPath": "app/assets/stylesheets/totem/lodestar/modules/toc.scss",
                                                                    "targetPath": "app/assets/stylesheets/totem/lodestar/modules/toc",
                                                                    "pageTitle": "app/assets/stylesheets/totem/lodestar/modules/toc",
                                                                    "title": "toc"
                                                                },
                                                                "depth": 7,
                                                                "outline": []
                                                            },
                                                            {
                                                                "type": "file",
                                                                "data": {
                                                                    "language": {
                                                                        "nameMatchers": [
                                                                            ".scss"
                                                                        ],
                                                                        "pygmentsLexer": "scss",
                                                                        "multiLineComment": [
                                                                            "/*",
                                                                            "*",
                                                                            "*/"
                                                                        ],
                                                                        "singleLineComment": [
                                                                            "//"
                                                                        ],
                                                                        "ignorePrefix": "}",
                                                                        "foldPrefix": "^",
                                                                        "name": "SCSS"
                                                                    },
                                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/app/assets/stylesheets/totem/lodestar/modules/top_nav.scss",
                                                                    "projectPath": "app/assets/stylesheets/totem/lodestar/modules/top_nav.scss",
                                                                    "targetPath": "app/assets/stylesheets/totem/lodestar/modules/top_nav",
                                                                    "pageTitle": "app/assets/stylesheets/totem/lodestar/modules/top_nav",
                                                                    "title": "top_nav"
                                                                },
                                                                "depth": 7,
                                                                "outline": []
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "folder",
                                                        "data": {
                                                            "path": "app/assets/stylesheets/totem/lodestar/variables",
                                                            "title": "variables"
                                                        },
                                                        "depth": 6,
                                                        "children": [
                                                            {
                                                                "type": "file",
                                                                "data": {
                                                                    "language": {
                                                                        "nameMatchers": [
                                                                            ".scss"
                                                                        ],
                                                                        "pygmentsLexer": "scss",
                                                                        "multiLineComment": [
                                                                            "/*",
                                                                            "*",
                                                                            "*/"
                                                                        ],
                                                                        "singleLineComment": [
                                                                            "//"
                                                                        ],
                                                                        "ignorePrefix": "}",
                                                                        "foldPrefix": "^",
                                                                        "name": "SCSS"
                                                                    },
                                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/app/assets/stylesheets/totem/lodestar/variables/_modules.scss",
                                                                    "projectPath": "app/assets/stylesheets/totem/lodestar/variables/_modules.scss",
                                                                    "targetPath": "app/assets/stylesheets/totem/lodestar/variables/_modules",
                                                                    "pageTitle": "app/assets/stylesheets/totem/lodestar/variables/_modules",
                                                                    "title": "_modules"
                                                                },
                                                                "depth": 7,
                                                                "outline": []
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "folder",
                        "data": {
                            "path": "app/controllers",
                            "title": "controllers"
                        },
                        "depth": 2,
                        "children": [
                            {
                                "type": "folder",
                                "data": {
                                    "path": "app/controllers/totem",
                                    "title": "totem"
                                },
                                "depth": 3,
                                "children": [
                                    {
                                        "type": "folder",
                                        "data": {
                                            "path": "app/controllers/totem/lodestar",
                                            "title": "lodestar"
                                        },
                                        "depth": 4,
                                        "children": [
                                            {
                                                "type": "file",
                                                "data": {
                                                    "language": {
                                                        "nameMatchers": [
                                                            ".rb",
                                                            ".ru",
                                                            ".gemspec",
                                                            ".rake"
                                                        ],
                                                        "pygmentsLexer": "ruby",
                                                        "singleLineComment": [
                                                            "#"
                                                        ],
                                                        "ignorePrefix": "}",
                                                        "foldPrefix": "^",
                                                        "name": "Ruby"
                                                    },
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/app/controllers/totem/lodestar/api_controller.rb",
                                                    "projectPath": "app/controllers/totem/lodestar/api_controller.rb",
                                                    "targetPath": "app/controllers/totem/lodestar/api_controller",
                                                    "pageTitle": "app/controllers/totem/lodestar/api_controller",
                                                    "title": "api_controller"
                                                },
                                                "depth": 5,
                                                "outline": []
                                            },
                                            {
                                                "type": "file",
                                                "data": {
                                                    "language": {
                                                        "nameMatchers": [
                                                            ".rb",
                                                            ".ru",
                                                            ".gemspec",
                                                            ".rake"
                                                        ],
                                                        "pygmentsLexer": "ruby",
                                                        "singleLineComment": [
                                                            "#"
                                                        ],
                                                        "ignorePrefix": "}",
                                                        "foldPrefix": "^",
                                                        "name": "Ruby"
                                                    },
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/app/controllers/totem/lodestar/application_controller.rb",
                                                    "projectPath": "app/controllers/totem/lodestar/application_controller.rb",
                                                    "targetPath": "app/controllers/totem/lodestar/application_controller",
                                                    "pageTitle": "app/controllers/totem/lodestar/application_controller",
                                                    "title": "application_controller"
                                                },
                                                "depth": 5,
                                                "outline": []
                                            },
                                            {
                                                "type": "file",
                                                "data": {
                                                    "language": {
                                                        "nameMatchers": [
                                                            ".rb",
                                                            ".ru",
                                                            ".gemspec",
                                                            ".rake"
                                                        ],
                                                        "pygmentsLexer": "ruby",
                                                        "singleLineComment": [
                                                            "#"
                                                        ],
                                                        "ignorePrefix": "}",
                                                        "foldPrefix": "^",
                                                        "name": "Ruby"
                                                    },
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/app/controllers/totem/lodestar/documents_controller.rb",
                                                    "projectPath": "app/controllers/totem/lodestar/documents_controller.rb",
                                                    "targetPath": "app/controllers/totem/lodestar/documents_controller",
                                                    "pageTitle": "app/controllers/totem/lodestar/documents_controller",
                                                    "title": "documents_controller"
                                                },
                                                "depth": 5,
                                                "outline": []
                                            },
                                            {
                                                "type": "file",
                                                "data": {
                                                    "language": {
                                                        "nameMatchers": [
                                                            ".rb",
                                                            ".ru",
                                                            ".gemspec",
                                                            ".rake"
                                                        ],
                                                        "pygmentsLexer": "ruby",
                                                        "singleLineComment": [
                                                            "#"
                                                        ],
                                                        "ignorePrefix": "}",
                                                        "foldPrefix": "^",
                                                        "name": "Ruby"
                                                    },
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/app/controllers/totem/lodestar/guides_controller.rb",
                                                    "projectPath": "app/controllers/totem/lodestar/guides_controller.rb",
                                                    "targetPath": "app/controllers/totem/lodestar/guides_controller",
                                                    "pageTitle": "app/controllers/totem/lodestar/guides_controller",
                                                    "title": "guides_controller"
                                                },
                                                "depth": 5,
                                                "outline": []
                                            },
                                            {
                                                "type": "file",
                                                "data": {
                                                    "language": {
                                                        "nameMatchers": [
                                                            ".rb",
                                                            ".ru",
                                                            ".gemspec",
                                                            ".rake"
                                                        ],
                                                        "pygmentsLexer": "ruby",
                                                        "singleLineComment": [
                                                            "#"
                                                        ],
                                                        "ignorePrefix": "}",
                                                        "foldPrefix": "^",
                                                        "name": "Ruby"
                                                    },
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/app/controllers/totem/lodestar/sections_controller.rb",
                                                    "projectPath": "app/controllers/totem/lodestar/sections_controller.rb",
                                                    "targetPath": "app/controllers/totem/lodestar/sections_controller",
                                                    "pageTitle": "app/controllers/totem/lodestar/sections_controller",
                                                    "title": "sections_controller"
                                                },
                                                "depth": 5,
                                                "outline": []
                                            },
                                            {
                                                "type": "file",
                                                "data": {
                                                    "language": {
                                                        "nameMatchers": [
                                                            ".rb",
                                                            ".ru",
                                                            ".gemspec",
                                                            ".rake"
                                                        ],
                                                        "pygmentsLexer": "ruby",
                                                        "singleLineComment": [
                                                            "#"
                                                        ],
                                                        "ignorePrefix": "}",
                                                        "foldPrefix": "^",
                                                        "name": "Ruby"
                                                    },
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/app/controllers/totem/lodestar/versions_controller.rb",
                                                    "projectPath": "app/controllers/totem/lodestar/versions_controller.rb",
                                                    "targetPath": "app/controllers/totem/lodestar/versions_controller",
                                                    "pageTitle": "app/controllers/totem/lodestar/versions_controller",
                                                    "title": "versions_controller"
                                                },
                                                "depth": 5,
                                                "outline": []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "folder",
                        "data": {
                            "path": "app/helpers",
                            "title": "helpers"
                        },
                        "depth": 2,
                        "children": [
                            {
                                "type": "folder",
                                "data": {
                                    "path": "app/helpers/totem",
                                    "title": "totem"
                                },
                                "depth": 3,
                                "children": [
                                    {
                                        "type": "folder",
                                        "data": {
                                            "path": "app/helpers/totem/lodestar",
                                            "title": "lodestar"
                                        },
                                        "depth": 4,
                                        "children": [
                                            {
                                                "type": "file",
                                                "data": {
                                                    "language": {
                                                        "nameMatchers": [
                                                            ".rb",
                                                            ".ru",
                                                            ".gemspec",
                                                            ".rake"
                                                        ],
                                                        "pygmentsLexer": "ruby",
                                                        "singleLineComment": [
                                                            "#"
                                                        ],
                                                        "ignorePrefix": "}",
                                                        "foldPrefix": "^",
                                                        "name": "Ruby"
                                                    },
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/app/helpers/totem/lodestar/application_helper.rb",
                                                    "projectPath": "app/helpers/totem/lodestar/application_helper.rb",
                                                    "targetPath": "app/helpers/totem/lodestar/application_helper",
                                                    "pageTitle": "app/helpers/totem/lodestar/application_helper",
                                                    "title": "application_helper"
                                                },
                                                "depth": 5,
                                                "outline": []
                                            },
                                            {
                                                "type": "file",
                                                "data": {
                                                    "language": {
                                                        "nameMatchers": [
                                                            ".rb",
                                                            ".ru",
                                                            ".gemspec",
                                                            ".rake"
                                                        ],
                                                        "pygmentsLexer": "ruby",
                                                        "singleLineComment": [
                                                            "#"
                                                        ],
                                                        "ignorePrefix": "}",
                                                        "foldPrefix": "^",
                                                        "name": "Ruby"
                                                    },
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/app/helpers/totem/lodestar/guides_helper.rb",
                                                    "projectPath": "app/helpers/totem/lodestar/guides_helper.rb",
                                                    "targetPath": "app/helpers/totem/lodestar/guides_helper",
                                                    "pageTitle": "app/helpers/totem/lodestar/guides_helper",
                                                    "title": "guides_helper"
                                                },
                                                "depth": 5,
                                                "outline": []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "folder",
                        "data": {
                            "path": "app/jobs",
                            "title": "jobs"
                        },
                        "depth": 2,
                        "children": [
                            {
                                "type": "folder",
                                "data": {
                                    "path": "app/jobs/totem",
                                    "title": "totem"
                                },
                                "depth": 3,
                                "children": [
                                    {
                                        "type": "folder",
                                        "data": {
                                            "path": "app/jobs/totem/lodestar",
                                            "title": "lodestar"
                                        },
                                        "depth": 4,
                                        "children": [
                                            {
                                                "type": "file",
                                                "data": {
                                                    "language": {
                                                        "nameMatchers": [
                                                            ".rb",
                                                            ".ru",
                                                            ".gemspec",
                                                            ".rake"
                                                        ],
                                                        "pygmentsLexer": "ruby",
                                                        "singleLineComment": [
                                                            "#"
                                                        ],
                                                        "ignorePrefix": "}",
                                                        "foldPrefix": "^",
                                                        "name": "Ruby"
                                                    },
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/app/jobs/totem/lodestar/application_job.rb",
                                                    "projectPath": "app/jobs/totem/lodestar/application_job.rb",
                                                    "targetPath": "app/jobs/totem/lodestar/application_job",
                                                    "pageTitle": "app/jobs/totem/lodestar/application_job",
                                                    "title": "application_job"
                                                },
                                                "depth": 5,
                                                "outline": []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "folder",
                        "data": {
                            "path": "app/mailers",
                            "title": "mailers"
                        },
                        "depth": 2,
                        "children": [
                            {
                                "type": "folder",
                                "data": {
                                    "path": "app/mailers/totem",
                                    "title": "totem"
                                },
                                "depth": 3,
                                "children": [
                                    {
                                        "type": "folder",
                                        "data": {
                                            "path": "app/mailers/totem/lodestar",
                                            "title": "lodestar"
                                        },
                                        "depth": 4,
                                        "children": [
                                            {
                                                "type": "file",
                                                "data": {
                                                    "language": {
                                                        "nameMatchers": [
                                                            ".rb",
                                                            ".ru",
                                                            ".gemspec",
                                                            ".rake"
                                                        ],
                                                        "pygmentsLexer": "ruby",
                                                        "singleLineComment": [
                                                            "#"
                                                        ],
                                                        "ignorePrefix": "}",
                                                        "foldPrefix": "^",
                                                        "name": "Ruby"
                                                    },
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/app/mailers/totem/lodestar/application_mailer.rb",
                                                    "projectPath": "app/mailers/totem/lodestar/application_mailer.rb",
                                                    "targetPath": "app/mailers/totem/lodestar/application_mailer",
                                                    "pageTitle": "app/mailers/totem/lodestar/application_mailer",
                                                    "title": "application_mailer"
                                                },
                                                "depth": 5,
                                                "outline": []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "folder",
                        "data": {
                            "path": "app/models",
                            "title": "models"
                        },
                        "depth": 2,
                        "children": [
                            {
                                "type": "folder",
                                "data": {
                                    "path": "app/models/totem",
                                    "title": "totem"
                                },
                                "depth": 3,
                                "children": [
                                    {
                                        "type": "folder",
                                        "data": {
                                            "path": "app/models/totem/lodestar",
                                            "title": "lodestar"
                                        },
                                        "depth": 4,
                                        "children": [
                                            {
                                                "type": "file",
                                                "data": {
                                                    "language": {
                                                        "nameMatchers": [
                                                            ".rb",
                                                            ".ru",
                                                            ".gemspec",
                                                            ".rake"
                                                        ],
                                                        "pygmentsLexer": "ruby",
                                                        "singleLineComment": [
                                                            "#"
                                                        ],
                                                        "ignorePrefix": "}",
                                                        "foldPrefix": "^",
                                                        "name": "Ruby"
                                                    },
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/app/models/totem/lodestar/api.rb",
                                                    "projectPath": "app/models/totem/lodestar/api.rb",
                                                    "targetPath": "app/models/totem/lodestar/api",
                                                    "pageTitle": "app/models/totem/lodestar/api",
                                                    "title": "api"
                                                },
                                                "depth": 5,
                                                "outline": []
                                            },
                                            {
                                                "type": "file",
                                                "data": {
                                                    "language": {
                                                        "nameMatchers": [
                                                            ".rb",
                                                            ".ru",
                                                            ".gemspec",
                                                            ".rake"
                                                        ],
                                                        "pygmentsLexer": "ruby",
                                                        "singleLineComment": [
                                                            "#"
                                                        ],
                                                        "ignorePrefix": "}",
                                                        "foldPrefix": "^",
                                                        "name": "Ruby"
                                                    },
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/app/models/totem/lodestar/application_record.rb",
                                                    "projectPath": "app/models/totem/lodestar/application_record.rb",
                                                    "targetPath": "app/models/totem/lodestar/application_record",
                                                    "pageTitle": "app/models/totem/lodestar/application_record",
                                                    "title": "application_record"
                                                },
                                                "depth": 5,
                                                "outline": []
                                            },
                                            {
                                                "type": "file",
                                                "data": {
                                                    "language": {
                                                        "nameMatchers": [
                                                            ".rb",
                                                            ".ru",
                                                            ".gemspec",
                                                            ".rake"
                                                        ],
                                                        "pygmentsLexer": "ruby",
                                                        "singleLineComment": [
                                                            "#"
                                                        ],
                                                        "ignorePrefix": "}",
                                                        "foldPrefix": "^",
                                                        "name": "Ruby"
                                                    },
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/app/models/totem/lodestar/document.rb",
                                                    "projectPath": "app/models/totem/lodestar/document.rb",
                                                    "targetPath": "app/models/totem/lodestar/document",
                                                    "pageTitle": "app/models/totem/lodestar/document",
                                                    "title": "document"
                                                },
                                                "depth": 5,
                                                "outline": []
                                            },
                                            {
                                                "type": "file",
                                                "data": {
                                                    "language": {
                                                        "nameMatchers": [
                                                            ".rb",
                                                            ".ru",
                                                            ".gemspec",
                                                            ".rake"
                                                        ],
                                                        "pygmentsLexer": "ruby",
                                                        "singleLineComment": [
                                                            "#"
                                                        ],
                                                        "ignorePrefix": "}",
                                                        "foldPrefix": "^",
                                                        "name": "Ruby"
                                                    },
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/app/models/totem/lodestar/section.rb",
                                                    "projectPath": "app/models/totem/lodestar/section.rb",
                                                    "targetPath": "app/models/totem/lodestar/section",
                                                    "pageTitle": "app/models/totem/lodestar/section",
                                                    "title": "section"
                                                },
                                                "depth": 5,
                                                "outline": []
                                            },
                                            {
                                                "type": "file",
                                                "data": {
                                                    "language": {
                                                        "nameMatchers": [
                                                            ".rb",
                                                            ".ru",
                                                            ".gemspec",
                                                            ".rake"
                                                        ],
                                                        "pygmentsLexer": "ruby",
                                                        "singleLineComment": [
                                                            "#"
                                                        ],
                                                        "ignorePrefix": "}",
                                                        "foldPrefix": "^",
                                                        "name": "Ruby"
                                                    },
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/app/models/totem/lodestar/version.rb",
                                                    "projectPath": "app/models/totem/lodestar/version.rb",
                                                    "targetPath": "app/models/totem/lodestar/version",
                                                    "pageTitle": "app/models/totem/lodestar/version",
                                                    "title": "version"
                                                },
                                                "depth": 5,
                                                "outline": []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "folder",
                "data": {
                    "path": "config",
                    "title": "config"
                },
                "depth": 1,
                "children": [
                    {
                        "type": "file",
                        "data": {
                            "language": {
                                "nameMatchers": [
                                    ".rb",
                                    ".ru",
                                    ".gemspec",
                                    ".rake"
                                ],
                                "pygmentsLexer": "ruby",
                                "singleLineComment": [
                                    "#"
                                ],
                                "ignorePrefix": "}",
                                "foldPrefix": "^",
                                "name": "Ruby"
                            },
                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/config/routes.rb",
                            "projectPath": "config/routes.rb",
                            "targetPath": "config/routes",
                            "pageTitle": "config/routes",
                            "title": "routes"
                        },
                        "depth": 2,
                        "outline": []
                    }
                ]
            },
            {
                "type": "folder",
                "data": {
                    "path": "db",
                    "title": "db"
                },
                "depth": 1,
                "children": [
                    {
                        "type": "folder",
                        "data": {
                            "path": "db/migrate",
                            "title": "migrate"
                        },
                        "depth": 2,
                        "children": [
                            {
                                "type": "file",
                                "data": {
                                    "language": {
                                        "nameMatchers": [
                                            ".rb",
                                            ".ru",
                                            ".gemspec",
                                            ".rake"
                                        ],
                                        "pygmentsLexer": "ruby",
                                        "singleLineComment": [
                                            "#"
                                        ],
                                        "ignorePrefix": "}",
                                        "foldPrefix": "^",
                                        "name": "Ruby"
                                    },
                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/db/migrate/01_create_totem_lodestar_versions.rb",
                                    "projectPath": "db/migrate/01_create_totem_lodestar_versions.rb",
                                    "targetPath": "db/migrate/01_create_totem_lodestar_versions",
                                    "pageTitle": "db/migrate/01_create_totem_lodestar_versions",
                                    "title": "01_create_totem_lodestar_versions"
                                },
                                "depth": 3,
                                "outline": []
                            },
                            {
                                "type": "file",
                                "data": {
                                    "language": {
                                        "nameMatchers": [
                                            ".rb",
                                            ".ru",
                                            ".gemspec",
                                            ".rake"
                                        ],
                                        "pygmentsLexer": "ruby",
                                        "singleLineComment": [
                                            "#"
                                        ],
                                        "ignorePrefix": "}",
                                        "foldPrefix": "^",
                                        "name": "Ruby"
                                    },
                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/db/migrate/02_create_totem_lodestar_sections.rb",
                                    "projectPath": "db/migrate/02_create_totem_lodestar_sections.rb",
                                    "targetPath": "db/migrate/02_create_totem_lodestar_sections",
                                    "pageTitle": "db/migrate/02_create_totem_lodestar_sections",
                                    "title": "02_create_totem_lodestar_sections"
                                },
                                "depth": 3,
                                "outline": []
                            },
                            {
                                "type": "file",
                                "data": {
                                    "language": {
                                        "nameMatchers": [
                                            ".rb",
                                            ".ru",
                                            ".gemspec",
                                            ".rake"
                                        ],
                                        "pygmentsLexer": "ruby",
                                        "singleLineComment": [
                                            "#"
                                        ],
                                        "ignorePrefix": "}",
                                        "foldPrefix": "^",
                                        "name": "Ruby"
                                    },
                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/db/migrate/03_create_totem_lodestar_documents.rb",
                                    "projectPath": "db/migrate/03_create_totem_lodestar_documents.rb",
                                    "targetPath": "db/migrate/03_create_totem_lodestar_documents",
                                    "pageTitle": "db/migrate/03_create_totem_lodestar_documents",
                                    "title": "03_create_totem_lodestar_documents"
                                },
                                "depth": 3,
                                "outline": []
                            },
                            {
                                "type": "file",
                                "data": {
                                    "language": {
                                        "nameMatchers": [
                                            ".rb",
                                            ".ru",
                                            ".gemspec",
                                            ".rake"
                                        ],
                                        "pygmentsLexer": "ruby",
                                        "singleLineComment": [
                                            "#"
                                        ],
                                        "ignorePrefix": "}",
                                        "foldPrefix": "^",
                                        "name": "Ruby"
                                    },
                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/db/migrate/04_create_totem_lodestar_api.rb",
                                    "projectPath": "db/migrate/04_create_totem_lodestar_api.rb",
                                    "targetPath": "db/migrate/04_create_totem_lodestar_api",
                                    "pageTitle": "db/migrate/04_create_totem_lodestar_api",
                                    "title": "04_create_totem_lodestar_api"
                                },
                                "depth": 3,
                                "outline": []
                            }
                        ]
                    }
                ]
            },
            {
                "type": "folder",
                "data": {
                    "path": "lib",
                    "title": "lib"
                },
                "depth": 1,
                "children": [
                    {
                        "type": "folder",
                        "data": {
                            "path": "lib/generators",
                            "title": "generators"
                        },
                        "depth": 2,
                        "children": [
                            {
                                "type": "folder",
                                "data": {
                                    "path": "lib/generators/totem",
                                    "title": "totem"
                                },
                                "depth": 3,
                                "children": [
                                    {
                                        "type": "folder",
                                        "data": {
                                            "path": "lib/generators/totem/lodestar",
                                            "title": "lodestar"
                                        },
                                        "depth": 4,
                                        "children": [
                                            {
                                                "type": "folder",
                                                "data": {
                                                    "path": "lib/generators/totem/lodestar/install",
                                                    "title": "install"
                                                },
                                                "depth": 5,
                                                "children": [
                                                    {
                                                        "type": "file",
                                                        "data": {
                                                            "language": {
                                                                "nameMatchers": [
                                                                    ".rb",
                                                                    ".ru",
                                                                    ".gemspec",
                                                                    ".rake"
                                                                ],
                                                                "pygmentsLexer": "ruby",
                                                                "singleLineComment": [
                                                                    "#"
                                                                ],
                                                                "ignorePrefix": "}",
                                                                "foldPrefix": "^",
                                                                "name": "Ruby"
                                                            },
                                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/lib/generators/totem/lodestar/install/configs_generator.rb",
                                                            "projectPath": "lib/generators/totem/lodestar/install/configs_generator.rb",
                                                            "targetPath": "lib/generators/totem/lodestar/install/configs_generator",
                                                            "pageTitle": "lib/generators/totem/lodestar/install/configs_generator",
                                                            "title": "configs_generator"
                                                        },
                                                        "depth": 6,
                                                        "outline": []
                                                    },
                                                    {
                                                        "type": "file",
                                                        "data": {
                                                            "language": {
                                                                "nameMatchers": [
                                                                    ".rb",
                                                                    ".ru",
                                                                    ".gemspec",
                                                                    ".rake"
                                                                ],
                                                                "pygmentsLexer": "ruby",
                                                                "singleLineComment": [
                                                                    "#"
                                                                ],
                                                                "ignorePrefix": "}",
                                                                "foldPrefix": "^",
                                                                "name": "Ruby"
                                                            },
                                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/lib/generators/totem/lodestar/install/databases_generator.rb",
                                                            "projectPath": "lib/generators/totem/lodestar/install/databases_generator.rb",
                                                            "targetPath": "lib/generators/totem/lodestar/install/databases_generator",
                                                            "pageTitle": "lib/generators/totem/lodestar/install/databases_generator",
                                                            "title": "databases_generator"
                                                        },
                                                        "depth": 6,
                                                        "outline": []
                                                    },
                                                    {
                                                        "type": "file",
                                                        "data": {
                                                            "language": {
                                                                "nameMatchers": [
                                                                    ".rb",
                                                                    ".ru",
                                                                    ".gemspec",
                                                                    ".rake"
                                                                ],
                                                                "pygmentsLexer": "ruby",
                                                                "singleLineComment": [
                                                                    "#"
                                                                ],
                                                                "ignorePrefix": "}",
                                                                "foldPrefix": "^",
                                                                "name": "Ruby"
                                                            },
                                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/lib/generators/totem/lodestar/install/documents_generator.rb",
                                                            "projectPath": "lib/generators/totem/lodestar/install/documents_generator.rb",
                                                            "targetPath": "lib/generators/totem/lodestar/install/documents_generator",
                                                            "pageTitle": "lib/generators/totem/lodestar/install/documents_generator",
                                                            "title": "documents_generator"
                                                        },
                                                        "depth": 6,
                                                        "outline": []
                                                    },
                                                    {
                                                        "type": "file",
                                                        "data": {
                                                            "language": {
                                                                "nameMatchers": [
                                                                    ".rb",
                                                                    ".ru",
                                                                    ".gemspec",
                                                                    ".rake"
                                                                ],
                                                                "pygmentsLexer": "ruby",
                                                                "singleLineComment": [
                                                                    "#"
                                                                ],
                                                                "ignorePrefix": "}",
                                                                "foldPrefix": "^",
                                                                "name": "Ruby"
                                                            },
                                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/lib/generators/totem/lodestar/install/images_generator.rb",
                                                            "projectPath": "lib/generators/totem/lodestar/install/images_generator.rb",
                                                            "targetPath": "lib/generators/totem/lodestar/install/images_generator",
                                                            "pageTitle": "lib/generators/totem/lodestar/install/images_generator",
                                                            "title": "images_generator"
                                                        },
                                                        "depth": 6,
                                                        "outline": []
                                                    },
                                                    {
                                                        "type": "file",
                                                        "data": {
                                                            "language": {
                                                                "nameMatchers": [
                                                                    ".rb",
                                                                    ".ru",
                                                                    ".gemspec",
                                                                    ".rake"
                                                                ],
                                                                "pygmentsLexer": "ruby",
                                                                "singleLineComment": [
                                                                    "#"
                                                                ],
                                                                "ignorePrefix": "}",
                                                                "foldPrefix": "^",
                                                                "name": "Ruby"
                                                            },
                                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/lib/generators/totem/lodestar/install/install_generator.rb",
                                                            "projectPath": "lib/generators/totem/lodestar/install/install_generator.rb",
                                                            "targetPath": "lib/generators/totem/lodestar/install/install_generator",
                                                            "pageTitle": "lib/generators/totem/lodestar/install/install_generator",
                                                            "title": "install_generator"
                                                        },
                                                        "depth": 6,
                                                        "outline": []
                                                    },
                                                    {
                                                        "type": "file",
                                                        "data": {
                                                            "language": {
                                                                "nameMatchers": [
                                                                    ".rb",
                                                                    ".ru",
                                                                    ".gemspec",
                                                                    ".rake"
                                                                ],
                                                                "pygmentsLexer": "ruby",
                                                                "singleLineComment": [
                                                                    "#"
                                                                ],
                                                                "ignorePrefix": "}",
                                                                "foldPrefix": "^",
                                                                "name": "Ruby"
                                                            },
                                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/lib/generators/totem/lodestar/install/javascripts_generator.rb",
                                                            "projectPath": "lib/generators/totem/lodestar/install/javascripts_generator.rb",
                                                            "targetPath": "lib/generators/totem/lodestar/install/javascripts_generator",
                                                            "pageTitle": "lib/generators/totem/lodestar/install/javascripts_generator",
                                                            "title": "javascripts_generator"
                                                        },
                                                        "depth": 6,
                                                        "outline": []
                                                    },
                                                    {
                                                        "type": "file",
                                                        "data": {
                                                            "language": {
                                                                "nameMatchers": [
                                                                    ".rb",
                                                                    ".ru",
                                                                    ".gemspec",
                                                                    ".rake"
                                                                ],
                                                                "pygmentsLexer": "ruby",
                                                                "singleLineComment": [
                                                                    "#"
                                                                ],
                                                                "ignorePrefix": "}",
                                                                "foldPrefix": "^",
                                                                "name": "Ruby"
                                                            },
                                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/lib/generators/totem/lodestar/install/routes_generator.rb",
                                                            "projectPath": "lib/generators/totem/lodestar/install/routes_generator.rb",
                                                            "targetPath": "lib/generators/totem/lodestar/install/routes_generator",
                                                            "pageTitle": "lib/generators/totem/lodestar/install/routes_generator",
                                                            "title": "routes_generator"
                                                        },
                                                        "depth": 6,
                                                        "outline": []
                                                    },
                                                    {
                                                        "type": "file",
                                                        "data": {
                                                            "language": {
                                                                "nameMatchers": [
                                                                    ".rb",
                                                                    ".ru",
                                                                    ".gemspec",
                                                                    ".rake"
                                                                ],
                                                                "pygmentsLexer": "ruby",
                                                                "singleLineComment": [
                                                                    "#"
                                                                ],
                                                                "ignorePrefix": "}",
                                                                "foldPrefix": "^",
                                                                "name": "Ruby"
                                                            },
                                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/lib/generators/totem/lodestar/install/stylesheets_generator.rb",
                                                            "projectPath": "lib/generators/totem/lodestar/install/stylesheets_generator.rb",
                                                            "targetPath": "lib/generators/totem/lodestar/install/stylesheets_generator",
                                                            "pageTitle": "lib/generators/totem/lodestar/install/stylesheets_generator",
                                                            "title": "stylesheets_generator"
                                                        },
                                                        "depth": 6,
                                                        "outline": []
                                                    },
                                                    {
                                                        "type": "file",
                                                        "data": {
                                                            "language": {
                                                                "nameMatchers": [
                                                                    ".rb",
                                                                    ".ru",
                                                                    ".gemspec",
                                                                    ".rake"
                                                                ],
                                                                "pygmentsLexer": "ruby",
                                                                "singleLineComment": [
                                                                    "#"
                                                                ],
                                                                "ignorePrefix": "}",
                                                                "foldPrefix": "^",
                                                                "name": "Ruby"
                                                            },
                                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/lib/generators/totem/lodestar/install/travis_ci_generator.rb",
                                                            "projectPath": "lib/generators/totem/lodestar/install/travis_ci_generator.rb",
                                                            "targetPath": "lib/generators/totem/lodestar/install/travis_ci_generator",
                                                            "pageTitle": "lib/generators/totem/lodestar/install/travis_ci_generator",
                                                            "title": "travis_ci_generator"
                                                        },
                                                        "depth": 6,
                                                        "outline": []
                                                    },
                                                    {
                                                        "type": "file",
                                                        "data": {
                                                            "language": {
                                                                "nameMatchers": [
                                                                    ".rb",
                                                                    ".ru",
                                                                    ".gemspec",
                                                                    ".rake"
                                                                ],
                                                                "pygmentsLexer": "ruby",
                                                                "singleLineComment": [
                                                                    "#"
                                                                ],
                                                                "ignorePrefix": "}",
                                                                "foldPrefix": "^",
                                                                "name": "Ruby"
                                                            },
                                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/lib/generators/totem/lodestar/install/views_generator.rb",
                                                            "projectPath": "lib/generators/totem/lodestar/install/views_generator.rb",
                                                            "targetPath": "lib/generators/totem/lodestar/install/views_generator",
                                                            "pageTitle": "lib/generators/totem/lodestar/install/views_generator",
                                                            "title": "views_generator"
                                                        },
                                                        "depth": 6,
                                                        "outline": []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "folder",
                        "data": {
                            "path": "lib/tasks",
                            "title": "tasks"
                        },
                        "depth": 2,
                        "children": [
                            {
                                "type": "folder",
                                "data": {
                                    "path": "lib/tasks/totem",
                                    "title": "totem"
                                },
                                "depth": 3,
                                "children": [
                                    {
                                        "type": "folder",
                                        "data": {
                                            "path": "lib/tasks/totem/lodestar",
                                            "title": "lodestar"
                                        },
                                        "depth": 4,
                                        "children": [
                                            {
                                                "type": "file",
                                                "data": {
                                                    "language": {
                                                        "nameMatchers": [
                                                            ".rb",
                                                            ".ru",
                                                            ".gemspec",
                                                            ".rake"
                                                        ],
                                                        "pygmentsLexer": "ruby",
                                                        "singleLineComment": [
                                                            "#"
                                                        ],
                                                        "ignorePrefix": "}",
                                                        "foldPrefix": "^",
                                                        "name": "Ruby"
                                                    },
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/lib/tasks/totem/lodestar/generate.rake",
                                                    "projectPath": "lib/tasks/totem/lodestar/generate.rake",
                                                    "targetPath": "lib/tasks/totem/lodestar/generate",
                                                    "pageTitle": "lib/tasks/totem/lodestar/generate",
                                                    "title": "generate"
                                                },
                                                "depth": 5,
                                                "outline": [
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 1,
                                                            "title": "Totem Lodestar Tasks",
                                                            "slug": "totem-lodestar-tasks"
                                                        },
                                                        "depth": 1
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "folder",
                                                "data": {
                                                    "path": "lib/tasks/totem/lodestar/helpers",
                                                    "title": "helpers"
                                                },
                                                "depth": 5,
                                                "children": [
                                                    {
                                                        "type": "file",
                                                        "data": {
                                                            "language": {
                                                                "nameMatchers": [
                                                                    ".rb",
                                                                    ".ru",
                                                                    ".gemspec",
                                                                    ".rake"
                                                                ],
                                                                "pygmentsLexer": "ruby",
                                                                "singleLineComment": [
                                                                    "#"
                                                                ],
                                                                "ignorePrefix": "}",
                                                                "foldPrefix": "^",
                                                                "name": "Ruby"
                                                            },
                                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/lib/tasks/totem/lodestar/helpers/api_generator.rb",
                                                            "projectPath": "lib/tasks/totem/lodestar/helpers/api_generator.rb",
                                                            "targetPath": "lib/tasks/totem/lodestar/helpers/api_generator",
                                                            "pageTitle": "lib/tasks/totem/lodestar/helpers/api_generator",
                                                            "title": "api_generator"
                                                        },
                                                        "depth": 6,
                                                        "outline": []
                                                    },
                                                    {
                                                        "type": "file",
                                                        "data": {
                                                            "language": {
                                                                "nameMatchers": [
                                                                    ".rb",
                                                                    ".ru",
                                                                    ".gemspec",
                                                                    ".rake"
                                                                ],
                                                                "pygmentsLexer": "ruby",
                                                                "singleLineComment": [
                                                                    "#"
                                                                ],
                                                                "ignorePrefix": "}",
                                                                "foldPrefix": "^",
                                                                "name": "Ruby"
                                                            },
                                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/lib/tasks/totem/lodestar/helpers/guides_generator.rb",
                                                            "projectPath": "lib/tasks/totem/lodestar/helpers/guides_generator.rb",
                                                            "targetPath": "lib/tasks/totem/lodestar/helpers/guides_generator",
                                                            "pageTitle": "lib/tasks/totem/lodestar/helpers/guides_generator",
                                                            "title": "guides_generator"
                                                        },
                                                        "depth": 6,
                                                        "outline": [
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 1,
                                                                    "title": "{version}",
                                                                    "slug": "version"
                                                                },
                                                                "depth": 1
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "folder",
                        "data": {
                            "path": "lib/totem",
                            "title": "totem"
                        },
                        "depth": 2,
                        "children": [
                            {
                                "type": "file",
                                "data": {
                                    "language": {
                                        "nameMatchers": [
                                            ".rb",
                                            ".ru",
                                            ".gemspec",
                                            ".rake"
                                        ],
                                        "pygmentsLexer": "ruby",
                                        "singleLineComment": [
                                            "#"
                                        ],
                                        "ignorePrefix": "}",
                                        "foldPrefix": "^",
                                        "name": "Ruby"
                                    },
                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/lib/totem/lodestar.rb",
                                    "projectPath": "lib/totem/lodestar.rb",
                                    "targetPath": "lib/totem/lodestar",
                                    "pageTitle": "lib/totem/lodestar",
                                    "title": "lodestar"
                                },
                                "depth": 3,
                                "outline": [],
                                "children": [
                                    {
                                        "type": "file",
                                        "data": {
                                            "language": {
                                                "nameMatchers": [
                                                    ".rb",
                                                    ".ru",
                                                    ".gemspec",
                                                    ".rake"
                                                ],
                                                "pygmentsLexer": "ruby",
                                                "singleLineComment": [
                                                    "#"
                                                ],
                                                "ignorePrefix": "}",
                                                "foldPrefix": "^",
                                                "name": "Ruby"
                                            },
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/lib/totem/lodestar/engine.rb",
                                            "projectPath": "lib/totem/lodestar/engine.rb",
                                            "targetPath": "lib/totem/lodestar/engine",
                                            "pageTitle": "lib/totem/lodestar/engine",
                                            "title": "engine"
                                        },
                                        "depth": 4,
                                        "outline": []
                                    },
                                    {
                                        "type": "file",
                                        "data": {
                                            "language": {
                                                "nameMatchers": [
                                                    ".rb",
                                                    ".ru",
                                                    ".gemspec",
                                                    ".rake"
                                                ],
                                                "pygmentsLexer": "ruby",
                                                "singleLineComment": [
                                                    "#"
                                                ],
                                                "ignorePrefix": "}",
                                                "foldPrefix": "^",
                                                "name": "Ruby"
                                            },
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/lib/totem/lodestar/version.rb",
                                            "projectPath": "lib/totem/lodestar/version.rb",
                                            "targetPath": "lib/totem/lodestar/version",
                                            "pageTitle": "lib/totem/lodestar/version",
                                            "title": "version"
                                        },
                                        "depth": 4,
                                        "outline": []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "folder",
                "data": {
                    "path": "test",
                    "title": "test"
                },
                "depth": 1,
                "children": [
                    {
                        "type": "folder",
                        "data": {
                            "path": "test/controllers",
                            "title": "controllers"
                        },
                        "depth": 2,
                        "children": [
                            {
                                "type": "folder",
                                "data": {
                                    "path": "test/controllers/totem",
                                    "title": "totem"
                                },
                                "depth": 3,
                                "children": [
                                    {
                                        "type": "folder",
                                        "data": {
                                            "path": "test/controllers/totem/lodestar",
                                            "title": "lodestar"
                                        },
                                        "depth": 4,
                                        "children": [
                                            {
                                                "type": "file",
                                                "data": {
                                                    "language": {
                                                        "nameMatchers": [
                                                            ".rb",
                                                            ".ru",
                                                            ".gemspec",
                                                            ".rake"
                                                        ],
                                                        "pygmentsLexer": "ruby",
                                                        "singleLineComment": [
                                                            "#"
                                                        ],
                                                        "ignorePrefix": "}",
                                                        "foldPrefix": "^",
                                                        "name": "Ruby"
                                                    },
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/test/controllers/totem/lodestar/documents_controller_test.rb",
                                                    "projectPath": "test/controllers/totem/lodestar/documents_controller_test.rb",
                                                    "targetPath": "test/controllers/totem/lodestar/documents_controller_test",
                                                    "pageTitle": "test/controllers/totem/lodestar/documents_controller_test",
                                                    "title": "documents_controller_test"
                                                },
                                                "depth": 5,
                                                "outline": []
                                            },
                                            {
                                                "type": "file",
                                                "data": {
                                                    "language": {
                                                        "nameMatchers": [
                                                            ".rb",
                                                            ".ru",
                                                            ".gemspec",
                                                            ".rake"
                                                        ],
                                                        "pygmentsLexer": "ruby",
                                                        "singleLineComment": [
                                                            "#"
                                                        ],
                                                        "ignorePrefix": "}",
                                                        "foldPrefix": "^",
                                                        "name": "Ruby"
                                                    },
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/test/controllers/totem/lodestar/sections_controller_test.rb",
                                                    "projectPath": "test/controllers/totem/lodestar/sections_controller_test.rb",
                                                    "targetPath": "test/controllers/totem/lodestar/sections_controller_test",
                                                    "pageTitle": "test/controllers/totem/lodestar/sections_controller_test",
                                                    "title": "sections_controller_test"
                                                },
                                                "depth": 5,
                                                "outline": []
                                            },
                                            {
                                                "type": "file",
                                                "data": {
                                                    "language": {
                                                        "nameMatchers": [
                                                            ".rb",
                                                            ".ru",
                                                            ".gemspec",
                                                            ".rake"
                                                        ],
                                                        "pygmentsLexer": "ruby",
                                                        "singleLineComment": [
                                                            "#"
                                                        ],
                                                        "ignorePrefix": "}",
                                                        "foldPrefix": "^",
                                                        "name": "Ruby"
                                                    },
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/test/controllers/totem/lodestar/versions_controller_test.rb",
                                                    "projectPath": "test/controllers/totem/lodestar/versions_controller_test.rb",
                                                    "targetPath": "test/controllers/totem/lodestar/versions_controller_test",
                                                    "pageTitle": "test/controllers/totem/lodestar/versions_controller_test",
                                                    "title": "versions_controller_test"
                                                },
                                                "depth": 5,
                                                "outline": []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "folder",
                        "data": {
                            "path": "test/dummy",
                            "title": "dummy"
                        },
                        "depth": 2,
                        "children": [
                            {
                                "type": "folder",
                                "data": {
                                    "path": "test/dummy/app",
                                    "title": "app"
                                },
                                "depth": 3,
                                "children": [
                                    {
                                        "type": "folder",
                                        "data": {
                                            "path": "test/dummy/app/assets",
                                            "title": "assets"
                                        },
                                        "depth": 4,
                                        "children": [
                                            {
                                                "type": "folder",
                                                "data": {
                                                    "path": "test/dummy/app/assets/config",
                                                    "title": "config"
                                                },
                                                "depth": 5,
                                                "children": [
                                                    {
                                                        "type": "file",
                                                        "data": {
                                                            "language": {
                                                                "nameMatchers": [
                                                                    ".js"
                                                                ],
                                                                "pygmentsLexer": "javascript",
                                                                "multiLineComment": [
                                                                    "/*",
                                                                    "*",
                                                                    "*/"
                                                                ],
                                                                "singleLineComment": [
                                                                    "//"
                                                                ],
                                                                "ignorePrefix": "}",
                                                                "foldPrefix": "^",
                                                                "name": "JavaScript"
                                                            },
                                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/test/dummy/app/assets/config/manifest.js",
                                                            "projectPath": "test/dummy/app/assets/config/manifest.js",
                                                            "targetPath": "test/dummy/app/assets/config/manifest",
                                                            "pageTitle": "test/dummy/app/assets/config/manifest",
                                                            "title": "manifest"
                                                        },
                                                        "depth": 6,
                                                        "outline": []
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "folder",
                                                "data": {
                                                    "path": "test/dummy/app/assets/javascripts",
                                                    "title": "javascripts"
                                                },
                                                "depth": 5,
                                                "children": [
                                                    {
                                                        "type": "file",
                                                        "data": {
                                                            "language": {
                                                                "nameMatchers": [
                                                                    ".js"
                                                                ],
                                                                "pygmentsLexer": "javascript",
                                                                "multiLineComment": [
                                                                    "/*",
                                                                    "*",
                                                                    "*/"
                                                                ],
                                                                "singleLineComment": [
                                                                    "//"
                                                                ],
                                                                "ignorePrefix": "}",
                                                                "foldPrefix": "^",
                                                                "name": "JavaScript"
                                                            },
                                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/test/dummy/app/assets/javascripts/application.js",
                                                            "projectPath": "test/dummy/app/assets/javascripts/application.js",
                                                            "targetPath": "test/dummy/app/assets/javascripts/application",
                                                            "pageTitle": "test/dummy/app/assets/javascripts/application",
                                                            "title": "application"
                                                        },
                                                        "depth": 6,
                                                        "outline": []
                                                    },
                                                    {
                                                        "type": "file",
                                                        "data": {
                                                            "language": {
                                                                "nameMatchers": [
                                                                    ".js"
                                                                ],
                                                                "pygmentsLexer": "javascript",
                                                                "multiLineComment": [
                                                                    "/*",
                                                                    "*",
                                                                    "*/"
                                                                ],
                                                                "singleLineComment": [
                                                                    "//"
                                                                ],
                                                                "ignorePrefix": "}",
                                                                "foldPrefix": "^",
                                                                "name": "JavaScript"
                                                            },
                                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/test/dummy/app/assets/javascripts/cable.js",
                                                            "projectPath": "test/dummy/app/assets/javascripts/cable.js",
                                                            "targetPath": "test/dummy/app/assets/javascripts/cable",
                                                            "pageTitle": "test/dummy/app/assets/javascripts/cable",
                                                            "title": "cable"
                                                        },
                                                        "depth": 6,
                                                        "outline": []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "folder",
                                        "data": {
                                            "path": "test/dummy/app/channels",
                                            "title": "channels"
                                        },
                                        "depth": 4,
                                        "children": [
                                            {
                                                "type": "folder",
                                                "data": {
                                                    "path": "test/dummy/app/channels/application_cable",
                                                    "title": "application_cable"
                                                },
                                                "depth": 5,
                                                "children": [
                                                    {
                                                        "type": "file",
                                                        "data": {
                                                            "language": {
                                                                "nameMatchers": [
                                                                    ".rb",
                                                                    ".ru",
                                                                    ".gemspec",
                                                                    ".rake"
                                                                ],
                                                                "pygmentsLexer": "ruby",
                                                                "singleLineComment": [
                                                                    "#"
                                                                ],
                                                                "ignorePrefix": "}",
                                                                "foldPrefix": "^",
                                                                "name": "Ruby"
                                                            },
                                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/test/dummy/app/channels/application_cable/channel.rb",
                                                            "projectPath": "test/dummy/app/channels/application_cable/channel.rb",
                                                            "targetPath": "test/dummy/app/channels/application_cable/channel",
                                                            "pageTitle": "test/dummy/app/channels/application_cable/channel",
                                                            "title": "channel"
                                                        },
                                                        "depth": 6,
                                                        "outline": []
                                                    },
                                                    {
                                                        "type": "file",
                                                        "data": {
                                                            "language": {
                                                                "nameMatchers": [
                                                                    ".rb",
                                                                    ".ru",
                                                                    ".gemspec",
                                                                    ".rake"
                                                                ],
                                                                "pygmentsLexer": "ruby",
                                                                "singleLineComment": [
                                                                    "#"
                                                                ],
                                                                "ignorePrefix": "}",
                                                                "foldPrefix": "^",
                                                                "name": "Ruby"
                                                            },
                                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/test/dummy/app/channels/application_cable/connection.rb",
                                                            "projectPath": "test/dummy/app/channels/application_cable/connection.rb",
                                                            "targetPath": "test/dummy/app/channels/application_cable/connection",
                                                            "pageTitle": "test/dummy/app/channels/application_cable/connection",
                                                            "title": "connection"
                                                        },
                                                        "depth": 6,
                                                        "outline": []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "folder",
                                        "data": {
                                            "path": "test/dummy/app/controllers",
                                            "title": "controllers"
                                        },
                                        "depth": 4,
                                        "children": [
                                            {
                                                "type": "file",
                                                "data": {
                                                    "language": {
                                                        "nameMatchers": [
                                                            ".rb",
                                                            ".ru",
                                                            ".gemspec",
                                                            ".rake"
                                                        ],
                                                        "pygmentsLexer": "ruby",
                                                        "singleLineComment": [
                                                            "#"
                                                        ],
                                                        "ignorePrefix": "}",
                                                        "foldPrefix": "^",
                                                        "name": "Ruby"
                                                    },
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/test/dummy/app/controllers/application_controller.rb",
                                                    "projectPath": "test/dummy/app/controllers/application_controller.rb",
                                                    "targetPath": "test/dummy/app/controllers/application_controller",
                                                    "pageTitle": "test/dummy/app/controllers/application_controller",
                                                    "title": "application_controller"
                                                },
                                                "depth": 5,
                                                "outline": []
                                            }
                                        ]
                                    },
                                    {
                                        "type": "folder",
                                        "data": {
                                            "path": "test/dummy/app/helpers",
                                            "title": "helpers"
                                        },
                                        "depth": 4,
                                        "children": [
                                            {
                                                "type": "file",
                                                "data": {
                                                    "language": {
                                                        "nameMatchers": [
                                                            ".rb",
                                                            ".ru",
                                                            ".gemspec",
                                                            ".rake"
                                                        ],
                                                        "pygmentsLexer": "ruby",
                                                        "singleLineComment": [
                                                            "#"
                                                        ],
                                                        "ignorePrefix": "}",
                                                        "foldPrefix": "^",
                                                        "name": "Ruby"
                                                    },
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/test/dummy/app/helpers/application_helper.rb",
                                                    "projectPath": "test/dummy/app/helpers/application_helper.rb",
                                                    "targetPath": "test/dummy/app/helpers/application_helper",
                                                    "pageTitle": "test/dummy/app/helpers/application_helper",
                                                    "title": "application_helper"
                                                },
                                                "depth": 5,
                                                "outline": []
                                            }
                                        ]
                                    },
                                    {
                                        "type": "folder",
                                        "data": {
                                            "path": "test/dummy/app/jobs",
                                            "title": "jobs"
                                        },
                                        "depth": 4,
                                        "children": [
                                            {
                                                "type": "file",
                                                "data": {
                                                    "language": {
                                                        "nameMatchers": [
                                                            ".rb",
                                                            ".ru",
                                                            ".gemspec",
                                                            ".rake"
                                                        ],
                                                        "pygmentsLexer": "ruby",
                                                        "singleLineComment": [
                                                            "#"
                                                        ],
                                                        "ignorePrefix": "}",
                                                        "foldPrefix": "^",
                                                        "name": "Ruby"
                                                    },
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/test/dummy/app/jobs/application_job.rb",
                                                    "projectPath": "test/dummy/app/jobs/application_job.rb",
                                                    "targetPath": "test/dummy/app/jobs/application_job",
                                                    "pageTitle": "test/dummy/app/jobs/application_job",
                                                    "title": "application_job"
                                                },
                                                "depth": 5,
                                                "outline": []
                                            }
                                        ]
                                    },
                                    {
                                        "type": "folder",
                                        "data": {
                                            "path": "test/dummy/app/mailers",
                                            "title": "mailers"
                                        },
                                        "depth": 4,
                                        "children": [
                                            {
                                                "type": "file",
                                                "data": {
                                                    "language": {
                                                        "nameMatchers": [
                                                            ".rb",
                                                            ".ru",
                                                            ".gemspec",
                                                            ".rake"
                                                        ],
                                                        "pygmentsLexer": "ruby",
                                                        "singleLineComment": [
                                                            "#"
                                                        ],
                                                        "ignorePrefix": "}",
                                                        "foldPrefix": "^",
                                                        "name": "Ruby"
                                                    },
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/test/dummy/app/mailers/application_mailer.rb",
                                                    "projectPath": "test/dummy/app/mailers/application_mailer.rb",
                                                    "targetPath": "test/dummy/app/mailers/application_mailer",
                                                    "pageTitle": "test/dummy/app/mailers/application_mailer",
                                                    "title": "application_mailer"
                                                },
                                                "depth": 5,
                                                "outline": []
                                            }
                                        ]
                                    },
                                    {
                                        "type": "folder",
                                        "data": {
                                            "path": "test/dummy/app/models",
                                            "title": "models"
                                        },
                                        "depth": 4,
                                        "children": [
                                            {
                                                "type": "file",
                                                "data": {
                                                    "language": {
                                                        "nameMatchers": [
                                                            ".rb",
                                                            ".ru",
                                                            ".gemspec",
                                                            ".rake"
                                                        ],
                                                        "pygmentsLexer": "ruby",
                                                        "singleLineComment": [
                                                            "#"
                                                        ],
                                                        "ignorePrefix": "}",
                                                        "foldPrefix": "^",
                                                        "name": "Ruby"
                                                    },
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/test/dummy/app/models/application_record.rb",
                                                    "projectPath": "test/dummy/app/models/application_record.rb",
                                                    "targetPath": "test/dummy/app/models/application_record",
                                                    "pageTitle": "test/dummy/app/models/application_record",
                                                    "title": "application_record"
                                                },
                                                "depth": 5,
                                                "outline": []
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "type": "folder",
                                "data": {
                                    "path": "test/dummy/config",
                                    "title": "config"
                                },
                                "depth": 3,
                                "children": [
                                    {
                                        "type": "file",
                                        "data": {
                                            "language": {
                                                "nameMatchers": [
                                                    ".rb",
                                                    ".ru",
                                                    ".gemspec",
                                                    ".rake"
                                                ],
                                                "pygmentsLexer": "ruby",
                                                "singleLineComment": [
                                                    "#"
                                                ],
                                                "ignorePrefix": "}",
                                                "foldPrefix": "^",
                                                "name": "Ruby"
                                            },
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/test/dummy/config/application.rb",
                                            "projectPath": "test/dummy/config/application.rb",
                                            "targetPath": "test/dummy/config/application",
                                            "pageTitle": "test/dummy/config/application",
                                            "title": "application"
                                        },
                                        "depth": 4,
                                        "outline": []
                                    },
                                    {
                                        "type": "file",
                                        "data": {
                                            "language": {
                                                "nameMatchers": [
                                                    ".rb",
                                                    ".ru",
                                                    ".gemspec",
                                                    ".rake"
                                                ],
                                                "pygmentsLexer": "ruby",
                                                "singleLineComment": [
                                                    "#"
                                                ],
                                                "ignorePrefix": "}",
                                                "foldPrefix": "^",
                                                "name": "Ruby"
                                            },
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/test/dummy/config/boot.rb",
                                            "projectPath": "test/dummy/config/boot.rb",
                                            "targetPath": "test/dummy/config/boot",
                                            "pageTitle": "test/dummy/config/boot",
                                            "title": "boot"
                                        },
                                        "depth": 4,
                                        "outline": []
                                    },
                                    {
                                        "type": "file",
                                        "data": {
                                            "language": {
                                                "nameMatchers": [
                                                    ".rb",
                                                    ".ru",
                                                    ".gemspec",
                                                    ".rake"
                                                ],
                                                "pygmentsLexer": "ruby",
                                                "singleLineComment": [
                                                    "#"
                                                ],
                                                "ignorePrefix": "}",
                                                "foldPrefix": "^",
                                                "name": "Ruby"
                                            },
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/test/dummy/config/environment.rb",
                                            "projectPath": "test/dummy/config/environment.rb",
                                            "targetPath": "test/dummy/config/environment",
                                            "pageTitle": "test/dummy/config/environment",
                                            "title": "environment"
                                        },
                                        "depth": 4,
                                        "outline": []
                                    },
                                    {
                                        "type": "folder",
                                        "data": {
                                            "path": "test/dummy/config/environments",
                                            "title": "environments"
                                        },
                                        "depth": 4,
                                        "children": [
                                            {
                                                "type": "file",
                                                "data": {
                                                    "language": {
                                                        "nameMatchers": [
                                                            ".rb",
                                                            ".ru",
                                                            ".gemspec",
                                                            ".rake"
                                                        ],
                                                        "pygmentsLexer": "ruby",
                                                        "singleLineComment": [
                                                            "#"
                                                        ],
                                                        "ignorePrefix": "}",
                                                        "foldPrefix": "^",
                                                        "name": "Ruby"
                                                    },
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/test/dummy/config/environments/development.rb",
                                                    "projectPath": "test/dummy/config/environments/development.rb",
                                                    "targetPath": "test/dummy/config/environments/development",
                                                    "pageTitle": "test/dummy/config/environments/development",
                                                    "title": "development"
                                                },
                                                "depth": 5,
                                                "outline": []
                                            },
                                            {
                                                "type": "file",
                                                "data": {
                                                    "language": {
                                                        "nameMatchers": [
                                                            ".rb",
                                                            ".ru",
                                                            ".gemspec",
                                                            ".rake"
                                                        ],
                                                        "pygmentsLexer": "ruby",
                                                        "singleLineComment": [
                                                            "#"
                                                        ],
                                                        "ignorePrefix": "}",
                                                        "foldPrefix": "^",
                                                        "name": "Ruby"
                                                    },
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/test/dummy/config/environments/production.rb",
                                                    "projectPath": "test/dummy/config/environments/production.rb",
                                                    "targetPath": "test/dummy/config/environments/production",
                                                    "pageTitle": "test/dummy/config/environments/production",
                                                    "title": "production"
                                                },
                                                "depth": 5,
                                                "outline": []
                                            },
                                            {
                                                "type": "file",
                                                "data": {
                                                    "language": {
                                                        "nameMatchers": [
                                                            ".rb",
                                                            ".ru",
                                                            ".gemspec",
                                                            ".rake"
                                                        ],
                                                        "pygmentsLexer": "ruby",
                                                        "singleLineComment": [
                                                            "#"
                                                        ],
                                                        "ignorePrefix": "}",
                                                        "foldPrefix": "^",
                                                        "name": "Ruby"
                                                    },
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/test/dummy/config/environments/test.rb",
                                                    "projectPath": "test/dummy/config/environments/test.rb",
                                                    "targetPath": "test/dummy/config/environments/test",
                                                    "pageTitle": "test/dummy/config/environments/test",
                                                    "title": "test"
                                                },
                                                "depth": 5,
                                                "outline": []
                                            }
                                        ]
                                    },
                                    {
                                        "type": "folder",
                                        "data": {
                                            "path": "test/dummy/config/initializers",
                                            "title": "initializers"
                                        },
                                        "depth": 4,
                                        "children": [
                                            {
                                                "type": "file",
                                                "data": {
                                                    "language": {
                                                        "nameMatchers": [
                                                            ".rb",
                                                            ".ru",
                                                            ".gemspec",
                                                            ".rake"
                                                        ],
                                                        "pygmentsLexer": "ruby",
                                                        "singleLineComment": [
                                                            "#"
                                                        ],
                                                        "ignorePrefix": "}",
                                                        "foldPrefix": "^",
                                                        "name": "Ruby"
                                                    },
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/test/dummy/config/initializers/application_controller_renderer.rb",
                                                    "projectPath": "test/dummy/config/initializers/application_controller_renderer.rb",
                                                    "targetPath": "test/dummy/config/initializers/application_controller_renderer",
                                                    "pageTitle": "test/dummy/config/initializers/application_controller_renderer",
                                                    "title": "application_controller_renderer"
                                                },
                                                "depth": 5,
                                                "outline": []
                                            },
                                            {
                                                "type": "file",
                                                "data": {
                                                    "language": {
                                                        "nameMatchers": [
                                                            ".rb",
                                                            ".ru",
                                                            ".gemspec",
                                                            ".rake"
                                                        ],
                                                        "pygmentsLexer": "ruby",
                                                        "singleLineComment": [
                                                            "#"
                                                        ],
                                                        "ignorePrefix": "}",
                                                        "foldPrefix": "^",
                                                        "name": "Ruby"
                                                    },
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/test/dummy/config/initializers/assets.rb",
                                                    "projectPath": "test/dummy/config/initializers/assets.rb",
                                                    "targetPath": "test/dummy/config/initializers/assets",
                                                    "pageTitle": "test/dummy/config/initializers/assets",
                                                    "title": "assets"
                                                },
                                                "depth": 5,
                                                "outline": []
                                            },
                                            {
                                                "type": "file",
                                                "data": {
                                                    "language": {
                                                        "nameMatchers": [
                                                            ".rb",
                                                            ".ru",
                                                            ".gemspec",
                                                            ".rake"
                                                        ],
                                                        "pygmentsLexer": "ruby",
                                                        "singleLineComment": [
                                                            "#"
                                                        ],
                                                        "ignorePrefix": "}",
                                                        "foldPrefix": "^",
                                                        "name": "Ruby"
                                                    },
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/test/dummy/config/initializers/backtrace_silencers.rb",
                                                    "projectPath": "test/dummy/config/initializers/backtrace_silencers.rb",
                                                    "targetPath": "test/dummy/config/initializers/backtrace_silencers",
                                                    "pageTitle": "test/dummy/config/initializers/backtrace_silencers",
                                                    "title": "backtrace_silencers"
                                                },
                                                "depth": 5,
                                                "outline": []
                                            },
                                            {
                                                "type": "file",
                                                "data": {
                                                    "language": {
                                                        "nameMatchers": [
                                                            ".rb",
                                                            ".ru",
                                                            ".gemspec",
                                                            ".rake"
                                                        ],
                                                        "pygmentsLexer": "ruby",
                                                        "singleLineComment": [
                                                            "#"
                                                        ],
                                                        "ignorePrefix": "}",
                                                        "foldPrefix": "^",
                                                        "name": "Ruby"
                                                    },
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/test/dummy/config/initializers/cookies_serializer.rb",
                                                    "projectPath": "test/dummy/config/initializers/cookies_serializer.rb",
                                                    "targetPath": "test/dummy/config/initializers/cookies_serializer",
                                                    "pageTitle": "test/dummy/config/initializers/cookies_serializer",
                                                    "title": "cookies_serializer"
                                                },
                                                "depth": 5,
                                                "outline": []
                                            },
                                            {
                                                "type": "file",
                                                "data": {
                                                    "language": {
                                                        "nameMatchers": [
                                                            ".rb",
                                                            ".ru",
                                                            ".gemspec",
                                                            ".rake"
                                                        ],
                                                        "pygmentsLexer": "ruby",
                                                        "singleLineComment": [
                                                            "#"
                                                        ],
                                                        "ignorePrefix": "}",
                                                        "foldPrefix": "^",
                                                        "name": "Ruby"
                                                    },
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/test/dummy/config/initializers/filter_parameter_logging.rb",
                                                    "projectPath": "test/dummy/config/initializers/filter_parameter_logging.rb",
                                                    "targetPath": "test/dummy/config/initializers/filter_parameter_logging",
                                                    "pageTitle": "test/dummy/config/initializers/filter_parameter_logging",
                                                    "title": "filter_parameter_logging"
                                                },
                                                "depth": 5,
                                                "outline": []
                                            },
                                            {
                                                "type": "file",
                                                "data": {
                                                    "language": {
                                                        "nameMatchers": [
                                                            ".rb",
                                                            ".ru",
                                                            ".gemspec",
                                                            ".rake"
                                                        ],
                                                        "pygmentsLexer": "ruby",
                                                        "singleLineComment": [
                                                            "#"
                                                        ],
                                                        "ignorePrefix": "}",
                                                        "foldPrefix": "^",
                                                        "name": "Ruby"
                                                    },
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/test/dummy/config/initializers/inflections.rb",
                                                    "projectPath": "test/dummy/config/initializers/inflections.rb",
                                                    "targetPath": "test/dummy/config/initializers/inflections",
                                                    "pageTitle": "test/dummy/config/initializers/inflections",
                                                    "title": "inflections"
                                                },
                                                "depth": 5,
                                                "outline": []
                                            },
                                            {
                                                "type": "file",
                                                "data": {
                                                    "language": {
                                                        "nameMatchers": [
                                                            ".rb",
                                                            ".ru",
                                                            ".gemspec",
                                                            ".rake"
                                                        ],
                                                        "pygmentsLexer": "ruby",
                                                        "singleLineComment": [
                                                            "#"
                                                        ],
                                                        "ignorePrefix": "}",
                                                        "foldPrefix": "^",
                                                        "name": "Ruby"
                                                    },
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/test/dummy/config/initializers/mime_types.rb",
                                                    "projectPath": "test/dummy/config/initializers/mime_types.rb",
                                                    "targetPath": "test/dummy/config/initializers/mime_types",
                                                    "pageTitle": "test/dummy/config/initializers/mime_types",
                                                    "title": "mime_types"
                                                },
                                                "depth": 5,
                                                "outline": []
                                            },
                                            {
                                                "type": "file",
                                                "data": {
                                                    "language": {
                                                        "nameMatchers": [
                                                            ".rb",
                                                            ".ru",
                                                            ".gemspec",
                                                            ".rake"
                                                        ],
                                                        "pygmentsLexer": "ruby",
                                                        "singleLineComment": [
                                                            "#"
                                                        ],
                                                        "ignorePrefix": "}",
                                                        "foldPrefix": "^",
                                                        "name": "Ruby"
                                                    },
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/test/dummy/config/initializers/new_framework_defaults.rb",
                                                    "projectPath": "test/dummy/config/initializers/new_framework_defaults.rb",
                                                    "targetPath": "test/dummy/config/initializers/new_framework_defaults",
                                                    "pageTitle": "test/dummy/config/initializers/new_framework_defaults",
                                                    "title": "new_framework_defaults"
                                                },
                                                "depth": 5,
                                                "outline": []
                                            },
                                            {
                                                "type": "file",
                                                "data": {
                                                    "language": {
                                                        "nameMatchers": [
                                                            ".rb",
                                                            ".ru",
                                                            ".gemspec",
                                                            ".rake"
                                                        ],
                                                        "pygmentsLexer": "ruby",
                                                        "singleLineComment": [
                                                            "#"
                                                        ],
                                                        "ignorePrefix": "}",
                                                        "foldPrefix": "^",
                                                        "name": "Ruby"
                                                    },
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/test/dummy/config/initializers/session_store.rb",
                                                    "projectPath": "test/dummy/config/initializers/session_store.rb",
                                                    "targetPath": "test/dummy/config/initializers/session_store",
                                                    "pageTitle": "test/dummy/config/initializers/session_store",
                                                    "title": "session_store"
                                                },
                                                "depth": 5,
                                                "outline": []
                                            },
                                            {
                                                "type": "file",
                                                "data": {
                                                    "language": {
                                                        "nameMatchers": [
                                                            ".rb",
                                                            ".ru",
                                                            ".gemspec",
                                                            ".rake"
                                                        ],
                                                        "pygmentsLexer": "ruby",
                                                        "singleLineComment": [
                                                            "#"
                                                        ],
                                                        "ignorePrefix": "}",
                                                        "foldPrefix": "^",
                                                        "name": "Ruby"
                                                    },
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/test/dummy/config/initializers/wrap_parameters.rb",
                                                    "projectPath": "test/dummy/config/initializers/wrap_parameters.rb",
                                                    "targetPath": "test/dummy/config/initializers/wrap_parameters",
                                                    "pageTitle": "test/dummy/config/initializers/wrap_parameters",
                                                    "title": "wrap_parameters"
                                                },
                                                "depth": 5,
                                                "outline": []
                                            }
                                        ]
                                    },
                                    {
                                        "type": "file",
                                        "data": {
                                            "language": {
                                                "nameMatchers": [
                                                    ".rb",
                                                    ".ru",
                                                    ".gemspec",
                                                    ".rake"
                                                ],
                                                "pygmentsLexer": "ruby",
                                                "singleLineComment": [
                                                    "#"
                                                ],
                                                "ignorePrefix": "}",
                                                "foldPrefix": "^",
                                                "name": "Ruby"
                                            },
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/test/dummy/config/puma.rb",
                                            "projectPath": "test/dummy/config/puma.rb",
                                            "targetPath": "test/dummy/config/puma",
                                            "pageTitle": "test/dummy/config/puma",
                                            "title": "puma"
                                        },
                                        "depth": 4,
                                        "outline": []
                                    },
                                    {
                                        "type": "file",
                                        "data": {
                                            "language": {
                                                "nameMatchers": [
                                                    ".rb",
                                                    ".ru",
                                                    ".gemspec",
                                                    ".rake"
                                                ],
                                                "pygmentsLexer": "ruby",
                                                "singleLineComment": [
                                                    "#"
                                                ],
                                                "ignorePrefix": "}",
                                                "foldPrefix": "^",
                                                "name": "Ruby"
                                            },
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/test/dummy/config/routes.rb",
                                            "projectPath": "test/dummy/config/routes.rb",
                                            "targetPath": "test/dummy/config/routes",
                                            "pageTitle": "test/dummy/config/routes",
                                            "title": "routes"
                                        },
                                        "depth": 4,
                                        "outline": []
                                    },
                                    {
                                        "type": "file",
                                        "data": {
                                            "language": {
                                                "nameMatchers": [
                                                    ".rb",
                                                    ".ru",
                                                    ".gemspec",
                                                    ".rake"
                                                ],
                                                "pygmentsLexer": "ruby",
                                                "singleLineComment": [
                                                    "#"
                                                ],
                                                "ignorePrefix": "}",
                                                "foldPrefix": "^",
                                                "name": "Ruby"
                                            },
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/test/dummy/config/spring.rb",
                                            "projectPath": "test/dummy/config/spring.rb",
                                            "targetPath": "test/dummy/config/spring",
                                            "pageTitle": "test/dummy/config/spring",
                                            "title": "spring"
                                        },
                                        "depth": 4,
                                        "outline": []
                                    }
                                ]
                            },
                            {
                                "type": "folder",
                                "data": {
                                    "path": "test/dummy/db",
                                    "title": "db"
                                },
                                "depth": 3,
                                "children": [
                                    {
                                        "type": "file",
                                        "data": {
                                            "language": {
                                                "nameMatchers": [
                                                    ".rb",
                                                    ".ru",
                                                    ".gemspec",
                                                    ".rake"
                                                ],
                                                "pygmentsLexer": "ruby",
                                                "singleLineComment": [
                                                    "#"
                                                ],
                                                "ignorePrefix": "}",
                                                "foldPrefix": "^",
                                                "name": "Ruby"
                                            },
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/test/dummy/db/schema.rb",
                                            "projectPath": "test/dummy/db/schema.rb",
                                            "targetPath": "test/dummy/db/schema",
                                            "pageTitle": "test/dummy/db/schema",
                                            "title": "schema"
                                        },
                                        "depth": 4,
                                        "outline": []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "folder",
                        "data": {
                            "path": "test/integration",
                            "title": "integration"
                        },
                        "depth": 2,
                        "children": [
                            {
                                "type": "file",
                                "data": {
                                    "language": {
                                        "nameMatchers": [
                                            ".rb",
                                            ".ru",
                                            ".gemspec",
                                            ".rake"
                                        ],
                                        "pygmentsLexer": "ruby",
                                        "singleLineComment": [
                                            "#"
                                        ],
                                        "ignorePrefix": "}",
                                        "foldPrefix": "^",
                                        "name": "Ruby"
                                    },
                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/test/integration/navigation_test.rb",
                                    "projectPath": "test/integration/navigation_test.rb",
                                    "targetPath": "test/integration/navigation_test",
                                    "pageTitle": "test/integration/navigation_test",
                                    "title": "navigation_test"
                                },
                                "depth": 3,
                                "outline": []
                            }
                        ]
                    },
                    {
                        "type": "folder",
                        "data": {
                            "path": "test/lib",
                            "title": "lib"
                        },
                        "depth": 2,
                        "children": [
                            {
                                "type": "folder",
                                "data": {
                                    "path": "test/lib/generators",
                                    "title": "generators"
                                },
                                "depth": 3,
                                "children": [
                                    {
                                        "type": "folder",
                                        "data": {
                                            "path": "test/lib/generators/totem",
                                            "title": "totem"
                                        },
                                        "depth": 4,
                                        "children": [
                                            {
                                                "type": "folder",
                                                "data": {
                                                    "path": "test/lib/generators/totem/totem",
                                                    "title": "totem"
                                                },
                                                "depth": 5,
                                                "children": [
                                                    {
                                                        "type": "folder",
                                                        "data": {
                                                            "path": "test/lib/generators/totem/totem/lodestar",
                                                            "title": "lodestar"
                                                        },
                                                        "depth": 6,
                                                        "children": [
                                                            {
                                                                "type": "file",
                                                                "data": {
                                                                    "language": {
                                                                        "nameMatchers": [
                                                                            ".rb",
                                                                            ".ru",
                                                                            ".gemspec",
                                                                            ".rake"
                                                                        ],
                                                                        "pygmentsLexer": "ruby",
                                                                        "singleLineComment": [
                                                                            "#"
                                                                        ],
                                                                        "ignorePrefix": "}",
                                                                        "foldPrefix": "^",
                                                                        "name": "Ruby"
                                                                    },
                                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/test/lib/generators/totem/totem/lodestar/install_generator_test.rb",
                                                                    "projectPath": "test/lib/generators/totem/totem/lodestar/install_generator_test.rb",
                                                                    "targetPath": "test/lib/generators/totem/totem/lodestar/install_generator_test",
                                                                    "pageTitle": "test/lib/generators/totem/totem/lodestar/install_generator_test",
                                                                    "title": "install_generator_test"
                                                                },
                                                                "depth": 7,
                                                                "outline": []
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "folder",
                        "data": {
                            "path": "test/models",
                            "title": "models"
                        },
                        "depth": 2,
                        "children": [
                            {
                                "type": "folder",
                                "data": {
                                    "path": "test/models/totem",
                                    "title": "totem"
                                },
                                "depth": 3,
                                "children": [
                                    {
                                        "type": "folder",
                                        "data": {
                                            "path": "test/models/totem/lodestar",
                                            "title": "lodestar"
                                        },
                                        "depth": 4,
                                        "children": [
                                            {
                                                "type": "file",
                                                "data": {
                                                    "language": {
                                                        "nameMatchers": [
                                                            ".rb",
                                                            ".ru",
                                                            ".gemspec",
                                                            ".rake"
                                                        ],
                                                        "pygmentsLexer": "ruby",
                                                        "singleLineComment": [
                                                            "#"
                                                        ],
                                                        "ignorePrefix": "}",
                                                        "foldPrefix": "^",
                                                        "name": "Ruby"
                                                    },
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/test/models/totem/lodestar/document_test.rb",
                                                    "projectPath": "test/models/totem/lodestar/document_test.rb",
                                                    "targetPath": "test/models/totem/lodestar/document_test",
                                                    "pageTitle": "test/models/totem/lodestar/document_test",
                                                    "title": "document_test"
                                                },
                                                "depth": 5,
                                                "outline": []
                                            },
                                            {
                                                "type": "file",
                                                "data": {
                                                    "language": {
                                                        "nameMatchers": [
                                                            ".rb",
                                                            ".ru",
                                                            ".gemspec",
                                                            ".rake"
                                                        ],
                                                        "pygmentsLexer": "ruby",
                                                        "singleLineComment": [
                                                            "#"
                                                        ],
                                                        "ignorePrefix": "}",
                                                        "foldPrefix": "^",
                                                        "name": "Ruby"
                                                    },
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/test/models/totem/lodestar/section_test.rb",
                                                    "projectPath": "test/models/totem/lodestar/section_test.rb",
                                                    "targetPath": "test/models/totem/lodestar/section_test",
                                                    "pageTitle": "test/models/totem/lodestar/section_test",
                                                    "title": "section_test"
                                                },
                                                "depth": 5,
                                                "outline": []
                                            },
                                            {
                                                "type": "file",
                                                "data": {
                                                    "language": {
                                                        "nameMatchers": [
                                                            ".rb",
                                                            ".ru",
                                                            ".gemspec",
                                                            ".rake"
                                                        ],
                                                        "pygmentsLexer": "ruby",
                                                        "singleLineComment": [
                                                            "#"
                                                        ],
                                                        "ignorePrefix": "}",
                                                        "foldPrefix": "^",
                                                        "name": "Ruby"
                                                    },
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/test/models/totem/lodestar/version_test.rb",
                                                    "projectPath": "test/models/totem/lodestar/version_test.rb",
                                                    "targetPath": "test/models/totem/lodestar/version_test",
                                                    "pageTitle": "test/models/totem/lodestar/version_test",
                                                    "title": "version_test"
                                                },
                                                "depth": 5,
                                                "outline": []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "file",
                        "data": {
                            "language": {
                                "nameMatchers": [
                                    ".rb",
                                    ".ru",
                                    ".gemspec",
                                    ".rake"
                                ],
                                "pygmentsLexer": "ruby",
                                "singleLineComment": [
                                    "#"
                                ],
                                "ignorePrefix": "}",
                                "foldPrefix": "^",
                                "name": "Ruby"
                            },
                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/test/test_helper.rb",
                            "projectPath": "test/test_helper.rb",
                            "targetPath": "test/test_helper",
                            "pageTitle": "test/test_helper",
                            "title": "test_helper"
                        },
                        "depth": 2,
                        "outline": []
                    },
                    {
                        "type": "folder",
                        "data": {
                            "path": "test/totem",
                            "title": "totem"
                        },
                        "depth": 2,
                        "children": [
                            {
                                "type": "file",
                                "data": {
                                    "language": {
                                        "nameMatchers": [
                                            ".rb",
                                            ".ru",
                                            ".gemspec",
                                            ".rake"
                                        ],
                                        "pygmentsLexer": "ruby",
                                        "singleLineComment": [
                                            "#"
                                        ],
                                        "ignorePrefix": "}",
                                        "foldPrefix": "^",
                                        "name": "Ruby"
                                    },
                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170227-63897-1ck0q6z/totem-lodestar/test/totem/lodestar_test.rb",
                                    "projectPath": "test/totem/lodestar_test.rb",
                                    "targetPath": "test/totem/lodestar_test",
                                    "pageTitle": "test/totem/lodestar_test",
                                    "title": "lodestar_test"
                                },
                                "depth": 3,
                                "outline": []
                            }
                        ]
                    }
                ]
            }
        ]
    }
  ];

  nav$ = null;

  toc$ = null;

  setTableOfContentsActive = function(active) {
    var html$;
    html$ = $('html');
    if (active) {
      nav$.addClass('active');
      return html$.addClass('popped');
    } else {
      nav$.removeClass('active');
      return html$.removeClass('popped');
    }
  };

  toggleTableOfContents = function() {
    return setTableOfContentsActive(!nav$.hasClass('active'));
  };

  currentNode$ = null;

  focusCurrentNode = function() {
    var currentNodeBottom, currentNodeTop;
    currentNodeTop = currentNode$.offset().top - toc$.children(':visible').first().offset().top;
    currentNodeBottom = currentNodeTop + currentNode$.children('.label').height();
    if (currentNodeTop < toc$.scrollTop()) {
      toc$.scrollTop(currentNodeTop);
    }
    if (currentNodeBottom > toc$.scrollTop() + toc$.height()) {
      return toc$.scrollTop(currentNodeBottom - toc$.height());
    }
  };

  setCurrentNodeExpanded = function(expanded) {
    var parents$;
    if (expanded) {
      currentNode$.addClass('expanded');
    } else {
      if (currentNode$.hasClass('expanded')) {
        currentNode$.removeClass('expanded');
      } else {
        parents$ = currentNode$.parents('li');
        if (parents$.length > 0) {
          selectNode(parents$.first());
        }
      }
    }
    return focusCurrentNode();
  };

  selectNode = function(newNode$) {
    currentNode$.removeClass('selected');
    newNode$.addClass('selected');
    currentNode$ = newNode$;
    return focusCurrentNode();
  };

  selectNodeByDocumentPath = function(documentPath, headerSlug) {
    var j, len, link, ref, urlChunks;
    if (headerSlug == null) {
      headerSlug = null;
    }
    currentNode$ = fileMap[documentPath];
    if (headerSlug) {
      ref = currentNode$.find('.outline a');
      for (j = 0, len = ref.length; j < len; j++) {
        link = ref[j];
        urlChunks = $(link).attr('href').split('#');
        if (urlChunks[1] === headerSlug) {
          currentNode$ = $(link).parents('li').first();
          break;
        }
      }
    }
    currentNode$.addClass('selected expanded');
    currentNode$.parents('li').addClass('expanded');
    return focusCurrentNode();
  };

  moveCurrentNode = function(up) {
    var i, j, len, newIndex, node, visibleNodes$;
    visibleNodes$ = toc$.find('li:visible:not(.filtered)');
    newIndex = 0;
    for (i = j = 0, len = visibleNodes$.length; j < len; i = ++j) {
      node = visibleNodes$[i];
      if (node === currentNode$[0]) {
        newIndex = up ? i - 1 : i + 1;
        if (newIndex < 0) {
          newIndex = 0;
        }
        if (newIndex > visibleNodes$.length - 1) {
          newIndex = visibleNodes$.length - 1;
        }
        break;
      }
    }
    return selectNode($(visibleNodes$[newIndex]));
  };

  visitCurrentNode = function() {
    var labelLink$;
    labelLink$ = currentNode$.children('a.label');
    if (labelLink$.length > 0) {
      return window.location = labelLink$.attr('href');
    }
  };

  MAX_FILTER_SIZE = 10;

  searchableNodes = [];

  appendSearchNode = function(node$) {
    var text$;
    text$ = node$.find('> .label .text');
    return searchableNodes.push([text$.text().toLowerCase(), node$, text$]);
  };

  currentQuery = '';

  searchNodes = function(queryString) {
    var c, filtered, j, k, l, len, len1, len2, matched, matcher, nodeInfo, p, results;
    queryString = queryString.toLowerCase().replace(/\s+/, '');
    if (queryString === currentQuery) {
      return;
    }
    currentQuery = queryString;
    if (queryString === '') {
      return clearFilter();
    }
    matcher = new RegExp(((function() {
      var j, len, results;
      results = [];
      for (j = 0, len = queryString.length; j < len; j++) {
        c = queryString[j];
        results.push(c.replace(/[-[\]{}()*+?.,\\^$|#\s]/, "\\$&"));
      }
      return results;
    })()).join('.*'));
    matched = [];
    filtered = [];
    for (j = 0, len = searchableNodes.length; j < len; j++) {
      nodeInfo = searchableNodes[j];
      if (matcher.test(nodeInfo[0])) {
        matched.push(nodeInfo);
      } else {
        filtered.push(nodeInfo);
      }
    }
    if (matched.length > MAX_FILTER_SIZE) {
      return clearFilter();
    }
    nav$.addClass('searching');
    for (k = 0, len1 = filtered.length; k < len1; k++) {
      nodeInfo = filtered[k];
      nodeInfo[1].removeClass('matched-child');
      nodeInfo[1].addClass('filtered');
      clearHighlight(nodeInfo[2]);
    }
    results = [];
    for (l = 0, len2 = matched.length; l < len2; l++) {
      nodeInfo = matched[l];
      nodeInfo[1].removeClass('filtered matched-child');
      nodeInfo[1].addClass('matched');
      highlightMatch(nodeInfo[2], queryString);
      results.push((function() {
        var len3, m, ref, results1;
        ref = nodeInfo[1].parents('li');
        results1 = [];
        for (m = 0, len3 = ref.length; m < len3; m++) {
          p = ref[m];
          results1.push($(p).addClass('matched-child'));
        }
        return results1;
      })());
    }
    return results;
  };

  clearFilter = function() {
    var j, len, nodeInfo, results;
    nav$.removeClass('searching');
    currentQuery = '';
    results = [];
    for (j = 0, len = searchableNodes.length; j < len; j++) {
      nodeInfo = searchableNodes[j];
      nodeInfo[1].removeClass('filtered matched-child');
      results.push(clearHighlight(nodeInfo[2]));
    }
    return results;
  };

  highlightMatch = function(text$, queryString) {
    var char, foundIndex, furthestIndex, j, len, lowerText, markedText, nodeText;
    nodeText = text$.text();
    lowerText = nodeText.toLowerCase();
    markedText = '';
    furthestIndex = 0;
    for (j = 0, len = queryString.length; j < len; j++) {
      char = queryString[j];
      foundIndex = lowerText.indexOf(char, furthestIndex);
      markedText += nodeText.slice(furthestIndex, foundIndex) + ("<em>" + nodeText[foundIndex] + "</em>");
      furthestIndex = foundIndex + 1;
    }
    return text$.html(markedText + nodeText.slice(furthestIndex));
  };

  clearHighlight = function(text$) {
    return text$.text(text$.text());
  };

  fileMap = {};

  buildNav = function(metaInfo) {
    var j, k, len, len1, map, node, project, ref, sourceURL;
    nav$ = $("<nav>\n  <ul class=\"tools\">\n    <li class=\"toggle\">Table of Contents</li>\n    <li class=\"search\">\n      <input id=\"search\" type=\"search\" autocomplete=\"off\"/>\n    </li>\n  </ul>\n  <ol class=\"toc\"/>\n  </div>\n</nav>").appendTo($('body'));
    toc$ = nav$.find('.toc');
    if (metaInfo.githubURL) {
      if (metaInfo.documentPath === 'index') {
        sourceURL = metaInfo.githubURL;
      } else {
        sourceURL = metaInfo.githubURL + "/blob/" + metaInfo.branchPath + "/" + metaInfo.projectPath;
      }
      nav$.find('.tools').prepend("<li class=\"github\">\n  <a href=\"" + sourceURL + "\" title=\"View source on GitHub\">\n    View source on GitHub\n  </a>\n</li>");
    }
    map = new Map();
    for (j = 0, len = tableOfContents.length; j < len; j++) {
      project = tableOfContents[j];
      map.set(project.title, project.nodes);
    }
    if (map.get(window.TotemLodestar._modules.api.get_cur_repo())) {
      ref = map.get(window.TotemLodestar._modules.api.get_cur_repo());
      for (k = 0, len1 = ref.length; k < len1; k++) {
        node = ref[k];
        toc$.append(buildTOCNode(node, metaInfo));
      }
    }
    return nav$;
  };

  buildTOCNode = function(node, metaInfo) {
    var c, children$, clickLabel, discloser, discloser$, j, label$, len, node$, path, ref, ref1, ref2;
    node$ = $("<li class=\"" + node.type + "\"/>");
    discloser = null;
    path = '/api/' + window.TotemLodestar._modules.api.get_cur_repo() + "/";
    if (metaInfo.relativeRoot) {
      path += /(\.\.\/){1,}([a-z0-9-\/_.]*.html)/g.exec(metaInfo.relativeRoot + node.data.targetPath + ".html")[2];
    } else {
      path += node.data.targetPath + ".html";
    }
    switch (node.type) {
      case 'file':
        node$.append("<a class=\"label\" href=\"" + path + "\" title=\"" + node.data.projectPath + "\"><span class=\"text\">" + node.data.title + "</span></a>");
        clickLabel = function(evt) {
          if (evt.target === discloser) {
            node$.toggleClass('expanded');
            evt.preventDefault();
            return false;
          }
          return selectNode(node$);
        };
        break;
      case 'folder':
        node$.append("<a class=\"label\" href=\"#\"><span class=\"text\">" + node.data.title + "</span></a>");
        clickLabel = function(evt) {
          selectNode(node$);
          node$.toggleClass('expanded');
          evt.preventDefault();
          return false;
        };
    }
    if (((ref = node.children) != null ? ref.length : void 0) > 0) {
      children$ = $('<ol class="children"/>');
      ref1 = node.children;
      for (j = 0, len = ref1.length; j < len; j++) {
        c = ref1[j];
        children$.append(buildTOCNode(c, metaInfo));
      }
      node$.append(children$);
    }
    label$ = node$.find('> .label');
    label$.click(clickLabel);
    discloser$ = $('<span class="discloser"/>').prependTo(label$);
    if (!(((ref2 = node.children) != null ? ref2.length : void 0) > 0)) {
      discloser$.addClass('placeholder');
    }
    discloser = discloser$.get(0);
    if (node.type === 'file') {
      fileMap[node.data.targetPath] = node$;
    }
    appendSearchNode(node$);
    return node$;
  };

  $(function() {
    var lastMousedownTimestamp, metaInfo, search$, toggle$;
    metaInfo = {
      relativeRoot: $('meta[name="groc-relative-root"]').attr('content'),
      githubURL: $('meta[name="groc-github-url"]').attr('content'),
      documentPath: $('meta[name="groc-document-path"]').attr('content'),
      projectPath: $('meta[name="groc-project-path"]').attr('content'),
      branchPath: $('meta[name="groc-branch-path"]').attr('content')
    };
    nav$ = buildNav(metaInfo);
    toc$ = nav$.find('.toc');
    search$ = $('#search');
    selectNodeByDocumentPath(metaInfo.documentPath, window.location.hash.replace('#', ''));
    search$.focus(function() {
      return setTableOfContentsActive(true);
    });
    lastMousedownTimestamp = null;
    nav$.mousedown(function(evt) {
      if (evt.target !== toggle$[0]) {
        return lastMousedownTimestamp = evt.timeStamp;
      }
    });
    search$.blur(function(evt) {
      if (evt.timeStamp - lastMousedownTimestamp < 10) {
        return search$.focus();
      } else {
        return setTableOfContentsActive(false);
      }
    });
    toggle$ = nav$.find('.toggle');
    toggle$.click(function(evt) {
      if (search$.is(':focus')) {
        search$.blur();
      } else {
        search$.focus();
      }
      return evt.preventDefault();
    });
    toggle$.mousedown(function(evt) {
      return evt.preventDefault();
    });
    $('body').keydown(function(evt) {
      if (nav$.hasClass('active')) {
        switch (evt.keyCode) {
          case 13:
            visitCurrentNode();
            break;
          case 37:
            setCurrentNodeExpanded(false);
            break;
          case 38:
            moveCurrentNode(true);
            break;
          case 39:
            setCurrentNodeExpanded(true);
            break;
          case 40:
            moveCurrentNode(false);
            break;
          default:
            return;
        }
        return evt.preventDefault();
      }
    });
    search$.bind('keyup search', function(evt) {
      return searchNodes(search$.val());
    });
    search$.keydown(function(evt) {
      if (evt.keyCode === 27) {
        if (search$.val().trim() === '') {
          return search$.blur();
        } else {
          return search$.val('');
        }
      }
    });
    return $('.code.folded').each(function(index, code) {
      var code$;
      code$ = $(code);
      return code$.click(function(evt) {
        code$.toggleClass('folded');
        evt.preventDefault();
        return false;
      });
    });
  });

}).call(this);
