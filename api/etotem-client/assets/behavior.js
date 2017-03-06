(function() {
  var MAX_FILTER_SIZE, appendSearchNode, buildNav, buildTOCNode, clearFilter, clearHighlight, currentNode$, currentQuery, fileMap, focusCurrentNode, highlightMatch, moveCurrentNode, nav$, searchNodes, searchableNodes, selectNode, selectNodeByDocumentPath, setCurrentNodeExpanded, setTableOfContentsActive, toc$, toggleTableOfContents, visitCurrentNode;

  tableOfContents = [
    {
        "title": "etotem-client",
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
                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/README.md",
                    "projectPath": "README.md",
                    "targetPath": "index",
                    "pageTitle": "index",
                    "firstHeader": {
                        "type": "heading",
                        "data": {
                            "level": 1,
                            "title": "eTotem-Client",
                            "slug": "etotem-client",
                            "isFileHeader": true
                        },
                        "depth": 1,
                        "children": [
                            {
                                "type": "heading",
                                "data": {
                                    "level": 2,
                                    "title": "Building",
                                    "slug": "building"
                                },
                                "depth": 2
                            },
                            {
                                "type": "heading",
                                "data": {
                                    "level": 2,
                                    "title": "Contributing",
                                    "slug": "contributing"
                                },
                                "depth": 2
                            },
                            {
                                "type": "heading",
                                "data": {
                                    "level": 2,
                                    "title": "Contact Us",
                                    "slug": "contact-us"
                                },
                                "depth": 2
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
                    },
                    "title": "eTotem-Client"
                },
                "depth": 1,
                "outline": [
                    {
                        "type": "heading",
                        "data": {
                            "level": 2,
                            "title": "Building",
                            "slug": "building"
                        },
                        "depth": 2
                    },
                    {
                        "type": "heading",
                        "data": {
                            "level": 2,
                            "title": "Contributing",
                            "slug": "contributing"
                        },
                        "depth": 2
                    },
                    {
                        "type": "heading",
                        "data": {
                            "level": 2,
                            "title": "Contact Us",
                            "slug": "contact-us"
                        },
                        "depth": 2
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
            },
            {
                "type": "folder",
                "data": {
                    "path": "totem-admin",
                    "title": "totem-admin"
                },
                "depth": 1,
                "children": [
                    {
                        "type": "folder",
                        "data": {
                            "path": "totem-admin/addon",
                            "title": "addon"
                        },
                        "depth": 2,
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
                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-admin/addon/_config.coffee",
                                    "projectPath": "totem-admin/addon/_config.coffee",
                                    "targetPath": "totem-admin/addon/_config",
                                    "pageTitle": "totem-admin/addon/_config",
                                    "title": "_config"
                                },
                                "depth": 3,
                                "outline": []
                            },
                            {
                                "type": "folder",
                                "data": {
                                    "path": "totem-admin/addon/components",
                                    "title": "components"
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-admin/addon/components/configs.coffee",
                                            "projectPath": "totem-admin/addon/components/configs.coffee",
                                            "targetPath": "totem-admin/addon/components/configs",
                                            "pageTitle": "totem-admin/addon/components/configs",
                                            "title": "configs"
                                        },
                                        "depth": 4,
                                        "outline": [],
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-admin/addon/components/configs/engines.coffee",
                                                    "projectPath": "totem-admin/addon/components/configs/engines.coffee",
                                                    "targetPath": "totem-admin/addon/components/configs/engines",
                                                    "pageTitle": "totem-admin/addon/components/configs/engines",
                                                    "title": "engines"
                                                },
                                                "depth": 5,
                                                "outline": [],
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
                                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-admin/addon/components/configs/engines/add.coffee",
                                                            "projectPath": "totem-admin/addon/components/configs/engines/add.coffee",
                                                            "targetPath": "totem-admin/addon/components/configs/engines/add",
                                                            "pageTitle": "totem-admin/addon/components/configs/engines/add",
                                                            "title": "add"
                                                        },
                                                        "depth": 6,
                                                        "outline": []
                                                    }
                                                ]
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-admin/addon/components/configs/header.coffee",
                                                    "projectPath": "totem-admin/addon/components/configs/header.coffee",
                                                    "targetPath": "totem-admin/addon/components/configs/header",
                                                    "pageTitle": "totem-admin/addon/components/configs/header",
                                                    "title": "header"
                                                },
                                                "depth": 5,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-admin/addon/components/configs/mounts.coffee",
                                                    "projectPath": "totem-admin/addon/components/configs/mounts.coffee",
                                                    "targetPath": "totem-admin/addon/components/configs/mounts",
                                                    "pageTitle": "totem-admin/addon/components/configs/mounts",
                                                    "title": "mounts"
                                                },
                                                "depth": 5,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-admin/addon/components/configs/routes.coffee",
                                                    "projectPath": "totem-admin/addon/components/configs/routes.coffee",
                                                    "targetPath": "totem-admin/addon/components/configs/routes",
                                                    "pageTitle": "totem-admin/addon/components/configs/routes",
                                                    "title": "routes"
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-admin/addon/components/header.coffee",
                                            "projectPath": "totem-admin/addon/components/header.coffee",
                                            "targetPath": "totem-admin/addon/components/header",
                                            "pageTitle": "totem-admin/addon/components/header",
                                            "title": "header"
                                        },
                                        "depth": 4,
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-admin/addon/components/index.coffee",
                                            "projectPath": "totem-admin/addon/components/index.coffee",
                                            "targetPath": "totem-admin/addon/components/index",
                                            "pageTitle": "totem-admin/addon/components/index",
                                            "title": "index"
                                        },
                                        "depth": 4,
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-admin/addon/components/locales.coffee",
                                            "projectPath": "totem-admin/addon/components/locales.coffee",
                                            "targetPath": "totem-admin/addon/components/locales",
                                            "pageTitle": "totem-admin/addon/components/locales",
                                            "title": "locales"
                                        },
                                        "depth": 4,
                                        "outline": [],
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-admin/addon/components/locales/code.coffee",
                                                    "projectPath": "totem-admin/addon/components/locales/code.coffee",
                                                    "targetPath": "totem-admin/addon/components/locales/code",
                                                    "pageTitle": "totem-admin/addon/components/locales/code",
                                                    "title": "code"
                                                },
                                                "depth": 5,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-admin/addon/components/locales/codes.coffee",
                                                    "projectPath": "totem-admin/addon/components/locales/codes.coffee",
                                                    "targetPath": "totem-admin/addon/components/locales/codes",
                                                    "pageTitle": "totem-admin/addon/components/locales/codes",
                                                    "title": "codes"
                                                },
                                                "depth": 5,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-admin/addon/components/locales/compare.coffee",
                                                    "projectPath": "totem-admin/addon/components/locales/compare.coffee",
                                                    "targetPath": "totem-admin/addon/components/locales/compare",
                                                    "pageTitle": "totem-admin/addon/components/locales/compare",
                                                    "title": "compare"
                                                },
                                                "depth": 5,
                                                "outline": [],
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
                                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-admin/addon/components/locales/compare/locale.coffee",
                                                            "projectPath": "totem-admin/addon/components/locales/compare/locale.coffee",
                                                            "targetPath": "totem-admin/addon/components/locales/compare/locale",
                                                            "pageTitle": "totem-admin/addon/components/locales/compare/locale",
                                                            "title": "locale"
                                                        },
                                                        "depth": 6,
                                                        "outline": []
                                                    }
                                                ]
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-admin/addon/components/locales/header.coffee",
                                                    "projectPath": "totem-admin/addon/components/locales/header.coffee",
                                                    "targetPath": "totem-admin/addon/components/locales/header",
                                                    "pageTitle": "totem-admin/addon/components/locales/header",
                                                    "title": "header"
                                                },
                                                "depth": 5,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-admin/addon/components/locales/show.coffee",
                                                    "projectPath": "totem-admin/addon/components/locales/show.coffee",
                                                    "targetPath": "totem-admin/addon/components/locales/show",
                                                    "pageTitle": "totem-admin/addon/components/locales/show",
                                                    "title": "show"
                                                },
                                                "depth": 5,
                                                "outline": [],
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
                                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-admin/addon/components/locales/show/locale.coffee",
                                                            "projectPath": "totem-admin/addon/components/locales/show/locale.coffee",
                                                            "targetPath": "totem-admin/addon/components/locales/show/locale",
                                                            "pageTitle": "totem-admin/addon/components/locales/show/locale",
                                                            "title": "locale"
                                                        },
                                                        "depth": 6,
                                                        "outline": []
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-admin/addon/components/rooms.coffee",
                                            "projectPath": "totem-admin/addon/components/rooms.coffee",
                                            "targetPath": "totem-admin/addon/components/rooms",
                                            "pageTitle": "totem-admin/addon/components/rooms",
                                            "title": "rooms"
                                        },
                                        "depth": 4,
                                        "outline": [],
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-admin/addon/components/rooms/count.coffee",
                                                    "projectPath": "totem-admin/addon/components/rooms/count.coffee",
                                                    "targetPath": "totem-admin/addon/components/rooms/count",
                                                    "pageTitle": "totem-admin/addon/components/rooms/count",
                                                    "title": "count"
                                                },
                                                "depth": 5,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-admin/addon/components/rooms/counts.coffee",
                                                    "projectPath": "totem-admin/addon/components/rooms/counts.coffee",
                                                    "targetPath": "totem-admin/addon/components/rooms/counts",
                                                    "pageTitle": "totem-admin/addon/components/rooms/counts",
                                                    "title": "counts"
                                                },
                                                "depth": 5,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-admin/addon/components/rooms/header.coffee",
                                                    "projectPath": "totem-admin/addon/components/rooms/header.coffee",
                                                    "targetPath": "totem-admin/addon/components/rooms/header",
                                                    "pageTitle": "totem-admin/addon/components/rooms/header",
                                                    "title": "header"
                                                },
                                                "depth": 5,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-admin/addon/components/rooms/user.coffee",
                                                    "projectPath": "totem-admin/addon/components/rooms/user.coffee",
                                                    "targetPath": "totem-admin/addon/components/rooms/user",
                                                    "pageTitle": "totem-admin/addon/components/rooms/user",
                                                    "title": "user"
                                                },
                                                "depth": 5,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-admin/addon/components/rooms/users.coffee",
                                                    "projectPath": "totem-admin/addon/components/rooms/users.coffee",
                                                    "targetPath": "totem-admin/addon/components/rooms/users",
                                                    "pageTitle": "totem-admin/addon/components/rooms/users",
                                                    "title": "users"
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-admin/addon/components/timers.coffee",
                                            "projectPath": "totem-admin/addon/components/timers.coffee",
                                            "targetPath": "totem-admin/addon/components/timers",
                                            "pageTitle": "totem-admin/addon/components/timers",
                                            "title": "timers"
                                        },
                                        "depth": 4,
                                        "outline": [],
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-admin/addon/components/timers/timer.coffee",
                                                    "projectPath": "totem-admin/addon/components/timers/timer.coffee",
                                                    "targetPath": "totem-admin/addon/components/timers/timer",
                                                    "pageTitle": "totem-admin/addon/components/timers/timer",
                                                    "title": "timer"
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-admin/addon/components/tracker.coffee",
                                            "projectPath": "totem-admin/addon/components/tracker.coffee",
                                            "targetPath": "totem-admin/addon/components/tracker",
                                            "pageTitle": "totem-admin/addon/components/tracker",
                                            "title": "tracker"
                                        },
                                        "depth": 4,
                                        "outline": [],
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-admin/addon/components/tracker/user.coffee",
                                                    "projectPath": "totem-admin/addon/components/tracker/user.coffee",
                                                    "targetPath": "totem-admin/addon/components/tracker/user",
                                                    "pageTitle": "totem-admin/addon/components/tracker/user",
                                                    "title": "user"
                                                },
                                                "depth": 5,
                                                "outline": []
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
                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-admin/addon/engine.coffee",
                                    "projectPath": "totem-admin/addon/engine.coffee",
                                    "targetPath": "totem-admin/addon/engine",
                                    "pageTitle": "totem-admin/addon/engine",
                                    "title": "engine"
                                },
                                "depth": 3,
                                "outline": []
                            },
                            {
                                "type": "folder",
                                "data": {
                                    "path": "totem-admin/addon/initializers",
                                    "title": "initializers"
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-admin/addon/initializers/totem.coffee",
                                            "projectPath": "totem-admin/addon/initializers/totem.coffee",
                                            "targetPath": "totem-admin/addon/initializers/totem",
                                            "pageTitle": "totem-admin/addon/initializers/totem",
                                            "title": "totem"
                                        },
                                        "depth": 4,
                                        "outline": []
                                    }
                                ]
                            },
                            {
                                "type": "folder",
                                "data": {
                                    "path": "totem-admin/addon/mixins",
                                    "title": "mixins"
                                },
                                "depth": 3,
                                "children": [
                                    {
                                        "type": "folder",
                                        "data": {
                                            "path": "totem-admin/addon/mixins/am",
                                            "title": "am"
                                        },
                                        "depth": 4,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-admin/addon/mixins/am/base.coffee",
                                                    "projectPath": "totem-admin/addon/mixins/am/base.coffee",
                                                    "targetPath": "totem-admin/addon/mixins/am/base",
                                                    "pageTitle": "totem-admin/addon/mixins/am/base",
                                                    "title": "base"
                                                },
                                                "depth": 5,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-admin/addon/mixins/am/configs.coffee",
                                                    "projectPath": "totem-admin/addon/mixins/am/configs.coffee",
                                                    "targetPath": "totem-admin/addon/mixins/am/configs",
                                                    "pageTitle": "totem-admin/addon/mixins/am/configs",
                                                    "title": "configs"
                                                },
                                                "depth": 5,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-admin/addon/mixins/am/helpers.coffee",
                                                    "projectPath": "totem-admin/addon/mixins/am/helpers.coffee",
                                                    "targetPath": "totem-admin/addon/mixins/am/helpers",
                                                    "pageTitle": "totem-admin/addon/mixins/am/helpers",
                                                    "title": "helpers"
                                                },
                                                "depth": 5,
                                                "outline": [
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 2,
                                                            "title": "#",
                                                            "slug": ""
                                                        },
                                                        "depth": 2,
                                                        "children": [
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 3,
                                                                    "title": "Date/Time Helpers.",
                                                                    "slug": "datetime-helpers"
                                                                },
                                                                "depth": 3
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 2,
                                                            "title": "#",
                                                            "slug": ""
                                                        },
                                                        "depth": 2
                                                    }
                                                ]
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-admin/addon/mixins/am/initialize.coffee",
                                                    "projectPath": "totem-admin/addon/mixins/am/initialize.coffee",
                                                    "targetPath": "totem-admin/addon/mixins/am/initialize",
                                                    "pageTitle": "totem-admin/addon/mixins/am/initialize",
                                                    "title": "initialize"
                                                },
                                                "depth": 5,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-admin/addon/mixins/am/locales.coffee",
                                                    "projectPath": "totem-admin/addon/mixins/am/locales.coffee",
                                                    "targetPath": "totem-admin/addon/mixins/am/locales",
                                                    "pageTitle": "totem-admin/addon/mixins/am/locales",
                                                    "title": "locales"
                                                },
                                                "depth": 5,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-admin/addon/mixins/am/rooms.coffee",
                                                    "projectPath": "totem-admin/addon/mixins/am/rooms.coffee",
                                                    "targetPath": "totem-admin/addon/mixins/am/rooms",
                                                    "pageTitle": "totem-admin/addon/mixins/am/rooms",
                                                    "title": "rooms"
                                                },
                                                "depth": 5,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-admin/addon/mixins/am/timers.coffee",
                                                    "projectPath": "totem-admin/addon/mixins/am/timers.coffee",
                                                    "targetPath": "totem-admin/addon/mixins/am/timers",
                                                    "pageTitle": "totem-admin/addon/mixins/am/timers",
                                                    "title": "timers"
                                                },
                                                "depth": 5,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-admin/addon/mixins/am/tracker.coffee",
                                                    "projectPath": "totem-admin/addon/mixins/am/tracker.coffee",
                                                    "targetPath": "totem-admin/addon/mixins/am/tracker",
                                                    "pageTitle": "totem-admin/addon/mixins/am/tracker",
                                                    "title": "tracker"
                                                },
                                                "depth": 5,
                                                "outline": []
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
                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-admin/addon/routes.coffee",
                                    "projectPath": "totem-admin/addon/routes.coffee",
                                    "targetPath": "totem-admin/addon/routes",
                                    "pageTitle": "totem-admin/addon/routes",
                                    "title": "routes"
                                },
                                "depth": 3,
                                "outline": [],
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-admin/addon/routes/application.coffee",
                                            "projectPath": "totem-admin/addon/routes/application.coffee",
                                            "targetPath": "totem-admin/addon/routes/application",
                                            "pageTitle": "totem-admin/addon/routes/application",
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-admin/addon/routes/base.coffee",
                                            "projectPath": "totem-admin/addon/routes/base.coffee",
                                            "targetPath": "totem-admin/addon/routes/base",
                                            "pageTitle": "totem-admin/addon/routes/base",
                                            "title": "base"
                                        },
                                        "depth": 4,
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-admin/addon/routes/configs.coffee",
                                            "projectPath": "totem-admin/addon/routes/configs.coffee",
                                            "targetPath": "totem-admin/addon/routes/configs",
                                            "pageTitle": "totem-admin/addon/routes/configs",
                                            "title": "configs"
                                        },
                                        "depth": 4,
                                        "outline": [],
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-admin/addon/routes/configs/engines.coffee",
                                                    "projectPath": "totem-admin/addon/routes/configs/engines.coffee",
                                                    "targetPath": "totem-admin/addon/routes/configs/engines",
                                                    "pageTitle": "totem-admin/addon/routes/configs/engines",
                                                    "title": "engines"
                                                },
                                                "depth": 5,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-admin/addon/routes/configs/mounts.coffee",
                                                    "projectPath": "totem-admin/addon/routes/configs/mounts.coffee",
                                                    "targetPath": "totem-admin/addon/routes/configs/mounts",
                                                    "pageTitle": "totem-admin/addon/routes/configs/mounts",
                                                    "title": "mounts"
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-admin/addon/routes/locales.coffee",
                                            "projectPath": "totem-admin/addon/routes/locales.coffee",
                                            "targetPath": "totem-admin/addon/routes/locales",
                                            "pageTitle": "totem-admin/addon/routes/locales",
                                            "title": "locales"
                                        },
                                        "depth": 4,
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-admin/addon/routes/rooms.coffee",
                                            "projectPath": "totem-admin/addon/routes/rooms.coffee",
                                            "targetPath": "totem-admin/addon/routes/rooms",
                                            "pageTitle": "totem-admin/addon/routes/rooms",
                                            "title": "rooms"
                                        },
                                        "depth": 4,
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-admin/addon/routes/timers.coffee",
                                            "projectPath": "totem-admin/addon/routes/timers.coffee",
                                            "targetPath": "totem-admin/addon/routes/timers",
                                            "pageTitle": "totem-admin/addon/routes/timers",
                                            "title": "timers"
                                        },
                                        "depth": 4,
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-admin/addon/routes/tracker.coffee",
                                            "projectPath": "totem-admin/addon/routes/tracker.coffee",
                                            "targetPath": "totem-admin/addon/routes/tracker",
                                            "pageTitle": "totem-admin/addon/routes/tracker",
                                            "title": "tracker"
                                        },
                                        "depth": 4,
                                        "outline": []
                                    }
                                ]
                            },
                            {
                                "type": "folder",
                                "data": {
                                    "path": "totem-admin/addon/services",
                                    "title": "services"
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-admin/addon/services/admin.coffee",
                                            "projectPath": "totem-admin/addon/services/admin.coffee",
                                            "targetPath": "totem-admin/addon/services/admin",
                                            "pageTitle": "totem-admin/addon/services/admin",
                                            "title": "admin"
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
                    "path": "totem-application",
                    "title": "totem-application"
                },
                "depth": 1,
                "children": [
                    {
                        "type": "folder",
                        "data": {
                            "path": "totem-application/addon",
                            "title": "addon"
                        },
                        "depth": 2,
                        "children": [
                            {
                                "type": "folder",
                                "data": {
                                    "path": "totem-application/addon/mixins",
                                    "title": "mixins"
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-application/addon/mixins/default_property_settings.coffee",
                                            "projectPath": "totem-application/addon/mixins/default_property_settings.coffee",
                                            "targetPath": "totem-application/addon/mixins/default_property_settings",
                                            "pageTitle": "totem-application/addon/mixins/default_property_settings",
                                            "title": "default_property_settings"
                                        },
                                        "depth": 4,
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-application/addon/mixins/included_models.coffee",
                                            "projectPath": "totem-application/addon/mixins/included_models.coffee",
                                            "targetPath": "totem-application/addon/mixins/included_models",
                                            "pageTitle": "totem-application/addon/mixins/included_models",
                                            "title": "included_models"
                                        },
                                        "depth": 4,
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-application/addon/mixins/table_sort_by.coffee",
                                            "projectPath": "totem-application/addon/mixins/table_sort_by.coffee",
                                            "targetPath": "totem-application/addon/mixins/table_sort_by",
                                            "pageTitle": "totem-application/addon/mixins/table_sort_by",
                                            "title": "table_sort_by"
                                        },
                                        "depth": 4,
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-application/addon/mixins/totem_wizard.coffee",
                                            "projectPath": "totem-application/addon/mixins/totem_wizard.coffee",
                                            "targetPath": "totem-application/addon/mixins/totem_wizard",
                                            "pageTitle": "totem-application/addon/mixins/totem_wizard",
                                            "title": "totem_wizard"
                                        },
                                        "depth": 4,
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-application/addon/mixins/validated_field.coffee",
                                            "projectPath": "totem-application/addon/mixins/validated_field.coffee",
                                            "targetPath": "totem-application/addon/mixins/validated_field",
                                            "pageTitle": "totem-application/addon/mixins/validated_field",
                                            "title": "validated_field"
                                        },
                                        "depth": 4,
                                        "outline": []
                                    }
                                ]
                            },
                            {
                                "type": "folder",
                                "data": {
                                    "path": "totem-application/addon/pagination",
                                    "title": "pagination"
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-application/addon/pagination/array.coffee",
                                            "projectPath": "totem-application/addon/pagination/array.coffee",
                                            "targetPath": "totem-application/addon/pagination/array",
                                            "pageTitle": "totem-application/addon/pagination/array",
                                            "title": "array"
                                        },
                                        "depth": 4,
                                        "outline": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 3,
                                                    "title": "Properties",
                                                    "slug": "properties"
                                                },
                                                "depth": 3
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 3,
                                                    "title": "Events",
                                                    "slug": "events"
                                                },
                                                "depth": 3
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 3,
                                                    "title": "Pagination promises",
                                                    "slug": "pagination-promises"
                                                },
                                                "depth": 3
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 3,
                                                    "title": "Getter/setter helpers",
                                                    "slug": "gettersetter-helpers"
                                                },
                                                "depth": 3
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 3,
                                                    "title": "Payload processing",
                                                    "slug": "payload-processing"
                                                },
                                                "depth": 3
                                            }
                                        ]
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-application/addon/pagination/object.coffee",
                                            "projectPath": "totem-application/addon/pagination/object.coffee",
                                            "targetPath": "totem-application/addon/pagination/object",
                                            "pageTitle": "totem-application/addon/pagination/object",
                                            "title": "object"
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
                            "path": "totem-application/app",
                            "title": "app"
                        },
                        "depth": 2,
                        "children": [
                            {
                                "type": "folder",
                                "data": {
                                    "path": "totem-application/app/adapters",
                                    "title": "adapters"
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-application/app/adapters/application.coffee",
                                            "projectPath": "totem-application/app/adapters/application.coffee",
                                            "targetPath": "totem-application/app/adapters/application",
                                            "pageTitle": "totem-application/app/adapters/application",
                                            "title": "application"
                                        },
                                        "depth": 4,
                                        "outline": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 1,
                                                    "title": "console.warn url, type, hash",
                                                    "slug": "consolewarn-url-type-hash"
                                                },
                                                "depth": 1
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 1,
                                                    "title": "Return a single record from the query.",
                                                    "slug": "return-a-single-record-from-the-query"
                                                },
                                                "depth": 1
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 1,
                                                    "title": "Delete record does not go through the rest_serializer&#39;s &#39;serializeIntoHash&#39; function",
                                                    "slug": "delete-record-does-not-go-through-the-rest-serializer39s-39serializeintohash39-function"
                                                },
                                                "depth": 1
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 1,
                                                    "title": "so the totem_scope information must be added in the rest_adapter.",
                                                    "slug": "so-the-totem-scope-information-must-be-added-in-the-rest-adapter"
                                                },
                                                "depth": 1
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 1,
                                                    "title": "Calls to &#39;totem_scope&#39; add the authable/ownerable model type and id when appropriate.",
                                                    "slug": "calls-to-39totem-scope39-add-the-authableownerable-model-type-and-id-when-appropriate"
                                                },
                                                "depth": 1
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 1,
                                                    "title": "Override this so that the 422 error do not get gobbled.",
                                                    "slug": "override-this-so-that-the-422-error-do-not-get-gobbled"
                                                },
                                                "depth": 1,
                                                "children": [
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 3,
                                                            "title": "OTHER REST ADAPTER FUNCTIONS",
                                                            "slug": "other-rest-adapter-functions"
                                                        },
                                                        "depth": 3
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 1,
                                                    "title": "export default ds.ActiveModelAdapter.extend",
                                                    "slug": "export-default-dsactivemodeladapterextend"
                                                },
                                                "depth": 1
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 1,
                                                    "title": "host:      config.api_host",
                                                    "slug": "host-configapi-host"
                                                },
                                                "depth": 1
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 1,
                                                    "title": "coalesceFindRequests: true",
                                                    "slug": "coalescefindrequests-true"
                                                },
                                                "depth": 1
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 1,
                                                    "title": "findQuery looks for the query object keys &#39;action&#39;, &#39;id&#39;, and &#39;verb&#39;.",
                                                    "slug": "findquery-looks-for-the-query-object-keys-39action39-39id39-and-39verb39"
                                                },
                                                "depth": 1
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 1,
                                                    "title": "They will be deleted from the query params base on:",
                                                    "slug": "they-will-be-deleted-from-the-query-params-base-on"
                                                },
                                                "depth": 1
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 1,
                                                    "title": "* If query contains both &#39;action&#39; and &#39;id&#39; then format the url for a :member request.",
                                                    "slug": "-if-query-contains-both-39action39-and-39id39-then-format-the-url-for-a-member-request"
                                                },
                                                "depth": 1
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 1,
                                                    "title": "e.g. base_url/id/action  #=&gt; delete action and id from query",
                                                    "slug": "eg-base-urlidaction-gt-delete-action-and-id-from-query"
                                                },
                                                "depth": 1
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 1,
                                                    "title": "* If query has an &#39;action&#39; but no &#39;id&#39; then format the url for a :collection request.",
                                                    "slug": "-if-query-has-an-39action39-but-no-39id39-then-format-the-url-for-a-collection-request"
                                                },
                                                "depth": 1
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 1,
                                                    "title": "e.g. base_url/action     #=&gt; delete action from query",
                                                    "slug": "eg-base-urlaction-gt-delete-action-from-query"
                                                },
                                                "depth": 1
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 1,
                                                    "title": "* If query does not have an action (e.g. null) then get a standard buildURL (e.g. the null is ignored).",
                                                    "slug": "-if-query-does-not-have-an-action-eg-null-then-get-a-standard-buildurl-eg-the-null-is-ignored"
                                                },
                                                "depth": 1
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 1,
                                                    "title": "* Always deletes the &#39;verb&#39; key and either uses it in the buildURL or defaults to &#39;GET&#39;.",
                                                    "slug": "-always-deletes-the-39verb39-key-and-either-uses-it-in-the-buildurl-or-defaults-to-39get39"
                                                },
                                                "depth": 1
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 1,
                                                    "title": "Note: Latest ember-data buildURL will convert &#39;/&#39; to &#39;%2F&#39; so need to add the action after the url is built.",
                                                    "slug": "note-latest-ember-data-buildurl-will-convert-3939-to-392f39-so-need-to-add-the-action-after-the-url-is-built"
                                                },
                                                "depth": 1
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 1,
                                                    "title": "Delete record does not go through the rest_serializer&#39;s &#39;serializeIntoHash&#39; function",
                                                    "slug": "delete-record-does-not-go-through-the-rest-serializer39s-39serializeintohash39-function"
                                                },
                                                "depth": 1
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 1,
                                                    "title": "so the totem_scope information must be added in the rest_adapter.",
                                                    "slug": "so-the-totem-scope-information-must-be-added-in-the-rest-adapter"
                                                },
                                                "depth": 1
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 1,
                                                    "title": "Calls to &#39;totem_scope&#39; add the authable/ownerable model type and id when appropriate.",
                                                    "slug": "calls-to-39totem-scope39-add-the-authableownerable-model-type-and-id-when-appropriate"
                                                },
                                                "depth": 1
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 1,
                                                    "title": "Override this so that the 422 error does not get gobbled.",
                                                    "slug": "override-this-so-that-the-422-error-does-not-get-gobbled"
                                                },
                                                "depth": 1
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "type": "folder",
                                "data": {
                                    "path": "totem-application/app/components",
                                    "title": "components"
                                },
                                "depth": 3,
                                "children": [
                                    {
                                        "type": "folder",
                                        "data": {
                                            "path": "totem-application/app/components/table_sort_by",
                                            "title": "table_sort_by"
                                        },
                                        "depth": 4,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-application/app/components/table_sort_by/header.coffee",
                                                    "projectPath": "totem-application/app/components/table_sort_by/header.coffee",
                                                    "targetPath": "totem-application/app/components/table_sort_by/header",
                                                    "pageTitle": "totem-application/app/components/table_sort_by/header",
                                                    "title": "header"
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
                                    "path": "totem-application/app/controllers",
                                    "title": "controllers"
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-application/app/controllers/application.coffee",
                                            "projectPath": "totem-application/app/controllers/application.coffee",
                                            "targetPath": "totem-application/app/controllers/application",
                                            "pageTitle": "totem-application/app/controllers/application",
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-application/app/controllers/session_timeout.coffee",
                                            "projectPath": "totem-application/app/controllers/session_timeout.coffee",
                                            "targetPath": "totem-application/app/controllers/session_timeout",
                                            "pageTitle": "totem-application/app/controllers/session_timeout",
                                            "title": "session_timeout"
                                        },
                                        "depth": 4,
                                        "outline": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 1,
                                                    "title": "Override timeout values for testing.",
                                                    "slug": "override-timeout-values-for-testing"
                                                },
                                                "depth": 1,
                                                "children": [
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 2,
                                                            "title": "reset timer then send stay alive request ##",
                                                            "slug": "reset-timer-then-send-stay-alive-request-"
                                                        },
                                                        "depth": 2
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
                                    "path": "totem-application/app/helpers",
                                    "title": "helpers"
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-application/app/helpers/are-equal.coffee",
                                            "projectPath": "totem-application/app/helpers/are-equal.coffee",
                                            "targetPath": "totem-application/app/helpers/are-equal",
                                            "pageTitle": "totem-application/app/helpers/are-equal",
                                            "title": "are-equal"
                                        },
                                        "depth": 4,
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-application/app/helpers/chosen-select.coffee",
                                            "projectPath": "totem-application/app/helpers/chosen-select.coffee",
                                            "targetPath": "totem-application/app/helpers/chosen-select",
                                            "pageTitle": "totem-application/app/helpers/chosen-select",
                                            "title": "chosen-select"
                                        },
                                        "depth": 4,
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-application/app/helpers/date-administered.coffee",
                                            "projectPath": "totem-application/app/helpers/date-administered.coffee",
                                            "targetPath": "totem-application/app/helpers/date-administered",
                                            "pageTitle": "totem-application/app/helpers/date-administered",
                                            "title": "date-administered"
                                        },
                                        "depth": 4,
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-application/app/helpers/date-picker.coffee",
                                            "projectPath": "totem-application/app/helpers/date-picker.coffee",
                                            "targetPath": "totem-application/app/helpers/date-picker",
                                            "pageTitle": "totem-application/app/helpers/date-picker",
                                            "title": "date-picker"
                                        },
                                        "depth": 4,
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-application/app/helpers/date-picker-split-row.coffee",
                                            "projectPath": "totem-application/app/helpers/date-picker-split-row.coffee",
                                            "targetPath": "totem-application/app/helpers/date-picker-split-row",
                                            "pageTitle": "totem-application/app/helpers/date-picker-split-row",
                                            "title": "date-picker-split-row"
                                        },
                                        "depth": 4,
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-application/app/helpers/delimit-string.coffee",
                                            "projectPath": "totem-application/app/helpers/delimit-string.coffee",
                                            "targetPath": "totem-application/app/helpers/delimit-string",
                                            "pageTitle": "totem-application/app/helpers/delimit-string",
                                            "title": "delimit-string"
                                        },
                                        "depth": 4,
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-application/app/helpers/file-icon-from-type.coffee",
                                            "projectPath": "totem-application/app/helpers/file-icon-from-type.coffee",
                                            "targetPath": "totem-application/app/helpers/file-icon-from-type",
                                            "pageTitle": "totem-application/app/helpers/file-icon-from-type",
                                            "title": "file-icon-from-type"
                                        },
                                        "depth": 4,
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-application/app/helpers/format-date.coffee",
                                            "projectPath": "totem-application/app/helpers/format-date.coffee",
                                            "targetPath": "totem-application/app/helpers/format-date",
                                            "pageTitle": "totem-application/app/helpers/format-date",
                                            "title": "format-date"
                                        },
                                        "depth": 4,
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-application/app/helpers/index-of.coffee",
                                            "projectPath": "totem-application/app/helpers/index-of.coffee",
                                            "targetPath": "totem-application/app/helpers/index-of",
                                            "pageTitle": "totem-application/app/helpers/index-of",
                                            "title": "index-of"
                                        },
                                        "depth": 4,
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-application/app/helpers/is-current.coffee",
                                            "projectPath": "totem-application/app/helpers/is-current.coffee",
                                            "targetPath": "totem-application/app/helpers/is-current",
                                            "pageTitle": "totem-application/app/helpers/is-current",
                                            "title": "is-current"
                                        },
                                        "depth": 4,
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-application/app/helpers/pluralize-if.coffee",
                                            "projectPath": "totem-application/app/helpers/pluralize-if.coffee",
                                            "targetPath": "totem-application/app/helpers/pluralize-if",
                                            "pageTitle": "totem-application/app/helpers/pluralize-if",
                                            "title": "pluralize-if"
                                        },
                                        "depth": 4,
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-application/app/helpers/pluralize-string.coffee",
                                            "projectPath": "totem-application/app/helpers/pluralize-string.coffee",
                                            "targetPath": "totem-application/app/helpers/pluralize-string",
                                            "pageTitle": "totem-application/app/helpers/pluralize-string",
                                            "title": "pluralize-string"
                                        },
                                        "depth": 4,
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-application/app/helpers/possession-string.coffee",
                                            "projectPath": "totem-application/app/helpers/possession-string.coffee",
                                            "targetPath": "totem-application/app/helpers/possession-string",
                                            "pageTitle": "totem-application/app/helpers/possession-string",
                                            "title": "possession-string"
                                        },
                                        "depth": 4,
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-application/app/helpers/radio-button.coffee",
                                            "projectPath": "totem-application/app/helpers/radio-button.coffee",
                                            "targetPath": "totem-application/app/helpers/radio-button",
                                            "pageTitle": "totem-application/app/helpers/radio-button",
                                            "title": "radio-button"
                                        },
                                        "depth": 4,
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-application/app/helpers/row-number.coffee",
                                            "projectPath": "totem-application/app/helpers/row-number.coffee",
                                            "targetPath": "totem-application/app/helpers/row-number",
                                            "pageTitle": "totem-application/app/helpers/row-number",
                                            "title": "row-number"
                                        },
                                        "depth": 4,
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-application/app/helpers/time-duration.coffee",
                                            "projectPath": "totem-application/app/helpers/time-duration.coffee",
                                            "targetPath": "totem-application/app/helpers/time-duration",
                                            "pageTitle": "totem-application/app/helpers/time-duration",
                                            "title": "time-duration"
                                        },
                                        "depth": 4,
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-application/app/helpers/time-from-now.coffee",
                                            "projectPath": "totem-application/app/helpers/time-from-now.coffee",
                                            "targetPath": "totem-application/app/helpers/time-from-now",
                                            "pageTitle": "totem-application/app/helpers/time-from-now",
                                            "title": "time-from-now"
                                        },
                                        "depth": 4,
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-application/app/helpers/time-to-now.coffee",
                                            "projectPath": "totem-application/app/helpers/time-to-now.coffee",
                                            "targetPath": "totem-application/app/helpers/time-to-now",
                                            "pageTitle": "totem-application/app/helpers/time-to-now",
                                            "title": "time-to-now"
                                        },
                                        "depth": 4,
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-application/app/helpers/tt.coffee",
                                            "projectPath": "totem-application/app/helpers/tt.coffee",
                                            "targetPath": "totem-application/app/helpers/tt",
                                            "pageTitle": "totem-application/app/helpers/tt",
                                            "title": "tt"
                                        },
                                        "depth": 4,
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-application/app/helpers/validated-chosen-select.coffee",
                                            "projectPath": "totem-application/app/helpers/validated-chosen-select.coffee",
                                            "targetPath": "totem-application/app/helpers/validated-chosen-select",
                                            "pageTitle": "totem-application/app/helpers/validated-chosen-select",
                                            "title": "validated-chosen-select"
                                        },
                                        "depth": 4,
                                        "outline": []
                                    }
                                ]
                            },
                            {
                                "type": "folder",
                                "data": {
                                    "path": "totem-application/app/instance-initializers",
                                    "title": "instance-initializers"
                                },
                                "depth": 3,
                                "children": [
                                    {
                                        "type": "folder",
                                        "data": {
                                            "path": "totem-application/app/instance-initializers/totem",
                                            "title": "totem"
                                        },
                                        "depth": 4,
                                        "children": [
                                            {
                                                "type": "folder",
                                                "data": {
                                                    "path": "totem-application/app/instance-initializers/totem/application",
                                                    "title": "application"
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
                                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-application/app/instance-initializers/totem/application/errors.coffee",
                                                            "projectPath": "totem-application/app/instance-initializers/totem/application/errors.coffee",
                                                            "targetPath": "totem-application/app/instance-initializers/totem/application/errors",
                                                            "pageTitle": "totem-application/app/instance-initializers/totem/application/errors",
                                                            "title": "errors"
                                                        },
                                                        "depth": 6,
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
                                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-application/app/instance-initializers/totem/application/inputs.coffee",
                                                            "projectPath": "totem-application/app/instance-initializers/totem/application/inputs.coffee",
                                                            "targetPath": "totem-application/app/instance-initializers/totem/application/inputs",
                                                            "pageTitle": "totem-application/app/instance-initializers/totem/application/inputs",
                                                            "title": "inputs"
                                                        },
                                                        "depth": 6,
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
                                    "path": "totem-application/app/routes",
                                    "title": "routes"
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-application/app/routes/application_route_mixin.coffee",
                                            "projectPath": "totem-application/app/routes/application_route_mixin.coffee",
                                            "targetPath": "totem-application/app/routes/application_route_mixin",
                                            "pageTitle": "totem-application/app/routes/application_route_mixin",
                                            "title": "application_route_mixin"
                                        },
                                        "depth": 4,
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-application/app/routes/loading.coffee",
                                            "projectPath": "totem-application/app/routes/loading.coffee",
                                            "targetPath": "totem-application/app/routes/loading",
                                            "pageTitle": "totem-application/app/routes/loading",
                                            "title": "loading"
                                        },
                                        "depth": 4,
                                        "outline": []
                                    }
                                ]
                            },
                            {
                                "type": "folder",
                                "data": {
                                    "path": "totem-application/app/serializers",
                                    "title": "serializers"
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-application/app/serializers/application.coffee",
                                            "projectPath": "totem-application/app/serializers/application.coffee",
                                            "targetPath": "totem-application/app/serializers/application",
                                            "pageTitle": "totem-application/app/serializers/application",
                                            "title": "application"
                                        },
                                        "depth": 4,
                                        "outline": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 1,
                                                    "title": "ukey = @dasherize_string(key)",
                                                    "slug": "ukey--dasherize-stringkey"
                                                },
                                                "depth": 1
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 1,
                                                    "title": "console.warn &#39;MODEL NAME FROM PAYLOAD KEY:&#39;, key, &#39; #=&gt; &#39;, ukey",
                                                    "slug": "consolewarn-39model-name-from-payload-key39-key-39-gt-39-ukey"
                                                },
                                                "depth": 1
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 1,
                                                    "title": "@_super(ukey)",
                                                    "slug": "-superukey"
                                                },
                                                "depth": 1
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 1,
                                                    "title": "Note: serializerIntoHash is called when serializing a record",
                                                    "slug": "note-serializerintohash-is-called-when-serializing-a-record"
                                                },
                                                "depth": 1
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 1,
                                                    "title": "(e.g. save for create and update), but not called on delete or store.find.",
                                                    "slug": "eg-save-for-create-and-update-but-not-called-on-delete-or-storefind"
                                                },
                                                "depth": 1
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "type": "folder",
                                "data": {
                                    "path": "totem-application/app/services",
                                    "title": "services"
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-application/app/services/taf.coffee",
                                            "projectPath": "totem-application/app/services/taf.coffee",
                                            "targetPath": "totem-application/app/services/taf",
                                            "pageTitle": "totem-application/app/services/taf",
                                            "title": "taf"
                                        },
                                        "depth": 4,
                                        "outline": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "API",
                                                    "slug": "api"
                                                },
                                                "depth": 2
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "HELPERS",
                                                    "slug": "helpers"
                                                },
                                                "depth": 2
                                            }
                                        ]
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-application/app/services/ttz.coffee",
                                            "projectPath": "totem-application/app/services/ttz.coffee",
                                            "targetPath": "totem-application/app/services/ttz",
                                            "pageTitle": "totem-application/app/services/ttz",
                                            "title": "ttz"
                                        },
                                        "depth": 4,
                                        "outline": [],
                                        "children": [
                                            {
                                                "type": "folder",
                                                "data": {
                                                    "path": "totem-application/app/services/ttz/zones",
                                                    "title": "zones"
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
                                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-application/app/services/ttz/zones/us.coffee",
                                                            "projectPath": "totem-application/app/services/ttz/zones/us.coffee",
                                                            "targetPath": "totem-application/app/services/ttz/zones/us",
                                                            "pageTitle": "totem-application/app/services/ttz/zones/us",
                                                            "title": "us"
                                                        },
                                                        "depth": 6,
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
                                    "path": "totem-application/app/transforms",
                                    "title": "transforms"
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-application/app/transforms/delocalized-date.coffee",
                                            "projectPath": "totem-application/app/transforms/delocalized-date.coffee",
                                            "targetPath": "totem-application/app/transforms/delocalized-date",
                                            "pageTitle": "totem-application/app/transforms/delocalized-date",
                                            "title": "delocalized-date"
                                        },
                                        "depth": 4,
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-application/app/transforms/json-api-models.coffee",
                                            "projectPath": "totem-application/app/transforms/json-api-models.coffee",
                                            "targetPath": "totem-application/app/transforms/json-api-models",
                                            "pageTitle": "totem-application/app/transforms/json-api-models",
                                            "title": "json-api-models"
                                        },
                                        "depth": 4,
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-application/app/transforms/settings.coffee",
                                            "projectPath": "totem-application/app/transforms/settings.coffee",
                                            "targetPath": "totem-application/app/transforms/settings",
                                            "pageTitle": "totem-application/app/transforms/settings",
                                            "title": "settings"
                                        },
                                        "depth": 4,
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-application/app/transforms/string_id.coffee",
                                            "projectPath": "totem-application/app/transforms/string_id.coffee",
                                            "targetPath": "totem-application/app/transforms/string_id",
                                            "pageTitle": "totem-application/app/transforms/string_id",
                                            "title": "string_id"
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
                    "path": "totem-base",
                    "title": "totem-base"
                },
                "depth": 1,
                "children": [
                    {
                        "type": "folder",
                        "data": {
                            "path": "totem-base/addon",
                            "title": "addon"
                        },
                        "depth": 2,
                        "children": [
                            {
                                "type": "folder",
                                "data": {
                                    "path": "totem-base/addon/components",
                                    "title": "components"
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-base/addon/components/base.coffee",
                                            "projectPath": "totem-base/addon/components/base.coffee",
                                            "targetPath": "totem-base/addon/components/base",
                                            "pageTitle": "totem-base/addon/components/base",
                                            "title": "base"
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
                    "path": "totem-config",
                    "title": "totem-config"
                },
                "depth": 1,
                "children": [
                    {
                        "type": "folder",
                        "data": {
                            "path": "totem-config/addon",
                            "title": "addon"
                        },
                        "depth": 2,
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
                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-config/addon/config.coffee",
                                    "projectPath": "totem-config/addon/config.coffee",
                                    "targetPath": "totem-config/addon/config",
                                    "pageTitle": "totem-config/addon/config",
                                    "title": "config"
                                },
                                "depth": 3,
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
                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-config/addon/configs.coffee",
                                    "projectPath": "totem-config/addon/configs.coffee",
                                    "targetPath": "totem-config/addon/configs",
                                    "pageTitle": "totem-config/addon/configs",
                                    "title": "configs"
                                },
                                "depth": 3,
                                "outline": [
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2,
                                        "children": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 3,
                                                    "title": "Populate.",
                                                    "slug": "populate"
                                                },
                                                "depth": 3
                                            }
                                        ]
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2,
                                        "children": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 3,
                                                    "title": "Standarize Config.",
                                                    "slug": "standarize-config"
                                                },
                                                "depth": 3
                                            }
                                        ]
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2,
                                        "children": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 3,
                                                    "title": "Engine.",
                                                    "slug": "engine"
                                                },
                                                "depth": 3
                                            }
                                        ]
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2,
                                        "children": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 3,
                                                    "title": "Build Engine Config for Mounted Engines.",
                                                    "slug": "build-engine-config-for-mounted-engines"
                                                },
                                                "depth": 3
                                            }
                                        ]
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2,
                                        "children": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 3,
                                                    "title": "Helpers.",
                                                    "slug": "helpers"
                                                },
                                                "depth": 3
                                            }
                                        ]
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2
                                    }
                                ]
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
                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-config/addon/find_modules.coffee",
                                    "projectPath": "totem-config/addon/find_modules.coffee",
                                    "targetPath": "totem-config/addon/find_modules",
                                    "pageTitle": "totem-config/addon/find_modules",
                                    "title": "find_modules"
                                },
                                "depth": 3,
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
                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-config/addon/listem.coffee",
                                    "projectPath": "totem-config/addon/listem.coffee",
                                    "targetPath": "totem-config/addon/listem",
                                    "pageTitle": "totem-config/addon/listem",
                                    "title": "listem"
                                },
                                "depth": 3,
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
                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-config/addon/locales.coffee",
                                    "projectPath": "totem-config/addon/locales.coffee",
                                    "targetPath": "totem-config/addon/locales",
                                    "pageTitle": "totem-config/addon/locales",
                                    "title": "locales"
                                },
                                "depth": 3,
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
                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-config/addon/mixins.coffee",
                                    "projectPath": "totem-config/addon/mixins.coffee",
                                    "targetPath": "totem-config/addon/mixins",
                                    "pageTitle": "totem-config/addon/mixins",
                                    "title": "mixins"
                                },
                                "depth": 3,
                                "outline": [
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2,
                                        "children": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 3,
                                                    "title": "Public Methods.",
                                                    "slug": "public-methods"
                                                },
                                                "depth": 3
                                            }
                                        ]
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2,
                                        "children": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 3,
                                                    "title": "Internal Methods.",
                                                    "slug": "internal-methods"
                                                },
                                                "depth": 3
                                            }
                                        ]
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2,
                                        "children": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 3,
                                                    "title": "Warnings/Errors.",
                                                    "slug": "warningserrors"
                                                },
                                                "depth": 3
                                            }
                                        ]
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2
                                    }
                                ]
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
                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-config/addon/ns_map.coffee",
                                    "projectPath": "totem-config/addon/ns_map.coffee",
                                    "targetPath": "totem-config/addon/ns_map",
                                    "pageTitle": "totem-config/addon/ns_map",
                                    "title": "ns_map"
                                },
                                "depth": 3,
                                "outline": [
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2,
                                        "children": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 3,
                                                    "title": "Helpers.",
                                                    "slug": "helpers"
                                                },
                                                "depth": 3
                                            }
                                        ]
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2
                                    }
                                ]
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
                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-config/addon/query_params.coffee",
                                    "projectPath": "totem-config/addon/query_params.coffee",
                                    "targetPath": "totem-config/addon/query_params",
                                    "pageTitle": "totem-config/addon/query_params",
                                    "title": "query_params"
                                },
                                "depth": 3,
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
                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-config/addon/routes.coffee",
                                    "projectPath": "totem-config/addon/routes.coffee",
                                    "targetPath": "totem-config/addon/routes",
                                    "pageTitle": "totem-config/addon/routes",
                                    "title": "routes"
                                },
                                "depth": 3,
                                "outline": [
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2,
                                        "children": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 3,
                                                    "title": "Populate from Configs.",
                                                    "slug": "populate-from-configs"
                                                },
                                                "depth": 3
                                            }
                                        ]
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2,
                                        "children": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 3,
                                                    "title": "Map.",
                                                    "slug": "map"
                                                },
                                                "depth": 3
                                            }
                                        ]
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2,
                                        "children": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 3,
                                                    "title": "Map does not return any value but generates the routes based",
                                                    "slug": "map-does-not-return-any-value-but-generates-the-routes-based"
                                                },
                                                "depth": 3
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 3,
                                                    "title": "on the Route map argument (the app-router) e.g. Router.map -&gt; totem_routes.map(@).",
                                                    "slug": "on-the-route-map-argument-the-app-router-eg-routermap-gt-totem-routesmap"
                                                },
                                                "depth": 3
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
                            "path": "totem-config/app",
                            "title": "app"
                        },
                        "depth": 2,
                        "children": [
                            {
                                "type": "folder",
                                "data": {
                                    "path": "totem-config/app/instance-initializers",
                                    "title": "instance-initializers"
                                },
                                "depth": 3,
                                "children": [
                                    {
                                        "type": "folder",
                                        "data": {
                                            "path": "totem-config/app/instance-initializers/totem-config",
                                            "title": "totem-config"
                                        },
                                        "depth": 4,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-config/app/instance-initializers/totem-config/listem.coffee",
                                                    "projectPath": "totem-config/app/instance-initializers/totem-config/listem.coffee",
                                                    "targetPath": "totem-config/app/instance-initializers/totem-config/listem",
                                                    "pageTitle": "totem-config/app/instance-initializers/totem-config/listem",
                                                    "title": "listem"
                                                },
                                                "depth": 5,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-config/app/instance-initializers/totem-config/locales.coffee",
                                                    "projectPath": "totem-config/app/instance-initializers/totem-config/locales.coffee",
                                                    "targetPath": "totem-config/app/instance-initializers/totem-config/locales",
                                                    "pageTitle": "totem-config/app/instance-initializers/totem-config/locales",
                                                    "title": "locales"
                                                },
                                                "depth": 5,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-config/app/instance-initializers/totem-config/mixins.coffee",
                                                    "projectPath": "totem-config/app/instance-initializers/totem-config/mixins.coffee",
                                                    "targetPath": "totem-config/app/instance-initializers/totem-config/mixins",
                                                    "pageTitle": "totem-config/app/instance-initializers/totem-config/mixins",
                                                    "title": "mixins"
                                                },
                                                "depth": 5,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-config/app/instance-initializers/totem-config/query_params.coffee",
                                                    "projectPath": "totem-config/app/instance-initializers/totem-config/query_params.coffee",
                                                    "targetPath": "totem-config/app/instance-initializers/totem-config/query_params",
                                                    "pageTitle": "totem-config/app/instance-initializers/totem-config/query_params",
                                                    "title": "query_params"
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
                    "path": "totem-engines",
                    "title": "totem-engines"
                },
                "depth": 1,
                "children": [
                    {
                        "type": "folder",
                        "data": {
                            "path": "totem-engines/addon",
                            "title": "addon"
                        },
                        "depth": 2,
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
                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-engines/addon/engines.coffee",
                                    "projectPath": "totem-engines/addon/engines.coffee",
                                    "targetPath": "totem-engines/addon/engines",
                                    "pageTitle": "totem-engines/addon/engines",
                                    "title": "engines"
                                },
                                "depth": 3,
                                "outline": [
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2,
                                        "children": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 3,
                                                    "title": "Class Variables and Methods.",
                                                    "slug": "class-variables-and-methods"
                                                },
                                                "depth": 3
                                            }
                                        ]
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2,
                                        "children": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 3,
                                                    "title": "Instance Methods.",
                                                    "slug": "instance-methods"
                                                },
                                                "depth": 3
                                            }
                                        ]
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2,
                                        "children": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 3,
                                                    "title": "Set the addon&#39;s engine dependencies if not added in the &#39;new totem_engines(config, options)&#39;.",
                                                    "slug": "set-the-addon39s-engine-dependencies-if-not-added-in-the-39new-totem-enginesconfig-options39"
                                                },
                                                "depth": 3
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 3,
                                                    "title": "(e.g. not an added engine - which are provided in the &quot;add_engine&quot; method options).",
                                                    "slug": "eg-not-an-added-engine-which-are-provided-in-the-quotadd-enginequot-method-options"
                                                },
                                                "depth": 3
                                            }
                                        ]
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2,
                                        "children": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 3,
                                                    "title": "Private ###",
                                                    "slug": "private-"
                                                },
                                                "depth": 3
                                            }
                                        ]
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2
                                    }
                                ]
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
                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-engines/addon/initializer.coffee",
                                    "projectPath": "totem-engines/addon/initializer.coffee",
                                    "targetPath": "totem-engines/addon/initializer",
                                    "pageTitle": "totem-engines/addon/initializer",
                                    "title": "initializer"
                                },
                                "depth": 3,
                                "outline": []
                            },
                            {
                                "type": "folder",
                                "data": {
                                    "path": "totem-engines/addon/patch",
                                    "title": "patch"
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-engines/addon/patch/component_lookup.coffee",
                                            "projectPath": "totem-engines/addon/patch/component_lookup.coffee",
                                            "targetPath": "totem-engines/addon/patch/component_lookup",
                                            "pageTitle": "totem-engines/addon/patch/component_lookup",
                                            "title": "component_lookup"
                                        },
                                        "depth": 4,
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-engines/addon/patch/component_node_manager.coffee",
                                            "projectPath": "totem-engines/addon/patch/component_node_manager.coffee",
                                            "targetPath": "totem-engines/addon/patch/component_node_manager",
                                            "pageTitle": "totem-engines/addon/patch/component_node_manager",
                                            "title": "component_node_manager"
                                        },
                                        "depth": 4,
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-engines/addon/patch/link_to_external.coffee",
                                            "projectPath": "totem-engines/addon/patch/link_to_external.coffee",
                                            "targetPath": "totem-engines/addon/patch/link_to_external",
                                            "pageTitle": "totem-engines/addon/patch/link_to_external",
                                            "title": "link_to_external"
                                        },
                                        "depth": 4,
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-engines/addon/patch/outlet.coffee",
                                            "projectPath": "totem-engines/addon/patch/outlet.coffee",
                                            "targetPath": "totem-engines/addon/patch/outlet",
                                            "pageTitle": "totem-engines/addon/patch/outlet",
                                            "title": "outlet"
                                        },
                                        "depth": 4,
                                        "outline": []
                                    }
                                ]
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
                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-engines/addon/resolver.coffee",
                                    "projectPath": "totem-engines/addon/resolver.coffee",
                                    "targetPath": "totem-engines/addon/resolver",
                                    "pageTitle": "totem-engines/addon/resolver",
                                    "title": "resolver"
                                },
                                "depth": 3,
                                "outline": [
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2,
                                        "children": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 3,
                                                    "title": "Set Owner in Parsed Name Object (pn).",
                                                    "slug": "set-owner-in-parsed-name-object-pn"
                                                },
                                                "depth": 3
                                            }
                                        ]
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2,
                                        "children": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 3,
                                                    "title": "Helpers.",
                                                    "slug": "helpers"
                                                },
                                                "depth": 3
                                            }
                                        ]
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
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
                            "path": "totem-engines/app",
                            "title": "app"
                        },
                        "depth": 2,
                        "children": [
                            {
                                "type": "folder",
                                "data": {
                                    "path": "totem-engines/app/initializers",
                                    "title": "initializers"
                                },
                                "depth": 3,
                                "children": [
                                    {
                                        "type": "folder",
                                        "data": {
                                            "path": "totem-engines/app/initializers/totem_engines",
                                            "title": "totem_engines"
                                        },
                                        "depth": 4,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-engines/app/initializers/totem_engines/deprecations.coffee",
                                                    "projectPath": "totem-engines/app/initializers/totem_engines/deprecations.coffee",
                                                    "targetPath": "totem-engines/app/initializers/totem_engines/deprecations",
                                                    "pageTitle": "totem-engines/app/initializers/totem_engines/deprecations",
                                                    "title": "deprecations"
                                                },
                                                "depth": 5,
                                                "outline": [
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 3,
                                                            "title": "show-match ### #=&gt; show messages that match the message text e.g. call &#39;next&#39; the standard ember hander). ###",
                                                            "slug": "show-match--gt-show-messages-that-match-the-message-text-eg-call-39next39-the-standard-ember-hander-"
                                                        },
                                                        "depth": 3
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "folder",
                                                "data": {
                                                    "path": "totem-engines/app/initializers/totem_engines/patch",
                                                    "title": "patch"
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
                                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-engines/app/initializers/totem_engines/patch/component_lookup.coffee",
                                                            "projectPath": "totem-engines/app/initializers/totem_engines/patch/component_lookup.coffee",
                                                            "targetPath": "totem-engines/app/initializers/totem_engines/patch/component_lookup",
                                                            "pageTitle": "totem-engines/app/initializers/totem_engines/patch/component_lookup",
                                                            "title": "component_lookup"
                                                        },
                                                        "depth": 6,
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
                                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-engines/app/initializers/totem_engines/patch/component_node_manager.coffee",
                                                            "projectPath": "totem-engines/app/initializers/totem_engines/patch/component_node_manager.coffee",
                                                            "targetPath": "totem-engines/app/initializers/totem_engines/patch/component_node_manager",
                                                            "pageTitle": "totem-engines/app/initializers/totem_engines/patch/component_node_manager",
                                                            "title": "component_node_manager"
                                                        },
                                                        "depth": 6,
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
                                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-engines/app/initializers/totem_engines/patch/link_to_external.coffee",
                                                            "projectPath": "totem-engines/app/initializers/totem_engines/patch/link_to_external.coffee",
                                                            "targetPath": "totem-engines/app/initializers/totem_engines/patch/link_to_external",
                                                            "pageTitle": "totem-engines/app/initializers/totem_engines/patch/link_to_external",
                                                            "title": "link_to_external"
                                                        },
                                                        "depth": 6,
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
                                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-engines/app/initializers/totem_engines/patch/outlet.coffee",
                                                            "projectPath": "totem-engines/app/initializers/totem_engines/patch/outlet.coffee",
                                                            "targetPath": "totem-engines/app/initializers/totem_engines/patch/outlet",
                                                            "pageTitle": "totem-engines/app/initializers/totem_engines/patch/outlet",
                                                            "title": "outlet"
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
                    }
                ]
            },
            {
                "type": "folder",
                "data": {
                    "path": "totem-messages",
                    "title": "totem-messages"
                },
                "depth": 1,
                "children": [
                    {
                        "type": "folder",
                        "data": {
                            "path": "totem-messages/addon",
                            "title": "addon"
                        },
                        "depth": 2,
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
                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-messages/addon/api.coffee",
                                    "projectPath": "totem-messages/addon/api.coffee",
                                    "targetPath": "totem-messages/addon/api",
                                    "pageTitle": "totem-messages/addon/api",
                                    "title": "api"
                                },
                                "depth": 3,
                                "outline": [
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2,
                                        "children": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 3,
                                                    "title": "Main Public Functions.",
                                                    "slug": "main-public-functions"
                                                },
                                                "depth": 3
                                            }
                                        ]
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2,
                                        "children": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 3,
                                                    "title": "Callback.",
                                                    "slug": "callback"
                                                },
                                                "depth": 3
                                            }
                                        ]
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2,
                                        "children": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 3,
                                                    "title": "Handlers.",
                                                    "slug": "handlers"
                                                },
                                                "depth": 3
                                            }
                                        ]
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2,
                                        "children": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 3,
                                                    "title": "Model Rollback.",
                                                    "slug": "model-rollback"
                                                },
                                                "depth": 3
                                            }
                                        ]
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2,
                                        "children": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 3,
                                                    "title": "Message.",
                                                    "slug": "message"
                                                },
                                                "depth": 3
                                            }
                                        ]
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2,
                                        "children": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 3,
                                                    "title": "Error Messages.",
                                                    "slug": "error-messages"
                                                },
                                                "depth": 3
                                            }
                                        ]
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2,
                                        "children": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 3,
                                                    "title": "Helpers.",
                                                    "slug": "helpers"
                                                },
                                                "depth": 3
                                            }
                                        ]
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2
                                    }
                                ]
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
                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-messages/addon/api_status_codes.coffee",
                                    "projectPath": "totem-messages/addon/api_status_codes.coffee",
                                    "targetPath": "totem-messages/addon/api_status_codes",
                                    "pageTitle": "totem-messages/addon/api_status_codes",
                                    "title": "api_status_codes"
                                },
                                "depth": 3,
                                "outline": []
                            },
                            {
                                "type": "folder",
                                "data": {
                                    "path": "totem-messages/addon/locales",
                                    "title": "locales"
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-messages/addon/locales/en.coffee",
                                            "projectPath": "totem-messages/addon/locales/en.coffee",
                                            "targetPath": "totem-messages/addon/locales/en",
                                            "pageTitle": "totem-messages/addon/locales/en",
                                            "title": "en"
                                        },
                                        "depth": 4,
                                        "outline": []
                                    }
                                ]
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
                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-messages/addon/messages.coffee",
                                    "projectPath": "totem-messages/addon/messages.coffee",
                                    "targetPath": "totem-messages/addon/messages",
                                    "pageTitle": "totem-messages/addon/messages",
                                    "title": "messages"
                                },
                                "depth": 3,
                                "outline": [
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 3,
                                            "title": "Initialize/setup ###",
                                            "slug": "initializesetup-"
                                        },
                                        "depth": 3
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2,
                                        "children": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 3,
                                                    "title": "Api Success/Failure.",
                                                    "slug": "api-successfailure"
                                                },
                                                "depth": 3
                                            }
                                        ]
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2,
                                        "children": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 3,
                                                    "title": "Message Queues.",
                                                    "slug": "message-queues"
                                                },
                                                "depth": 3
                                            }
                                        ]
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2,
                                        "children": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 3,
                                                    "title": "Message Queue Actions.",
                                                    "slug": "message-queue-actions"
                                                },
                                                "depth": 3
                                            }
                                        ]
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2,
                                        "children": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 3,
                                                    "title": "Sign Out =&gt; convience method to call sign_out action on application route.",
                                                    "slug": "sign-out-gt-convience-method-to-call-sign-out-action-on-application-route"
                                                },
                                                "depth": 3
                                            }
                                        ]
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2,
                                        "children": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 3,
                                                    "title": "Totem Message Outlet.",
                                                    "slug": "totem-message-outlet"
                                                },
                                                "depth": 3
                                            }
                                        ]
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2,
                                        "children": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 3,
                                                    "title": "TOTEM MESSAGE OUTLET LOADING Public functions ###",
                                                    "slug": "totem-message-outlet-loading-public-functions-"
                                                },
                                                "depth": 3
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "type": "folder",
                                "data": {
                                    "path": "totem-messages/addon/mixins",
                                    "title": "mixins"
                                },
                                "depth": 3,
                                "children": [
                                    {
                                        "type": "folder",
                                        "data": {
                                            "path": "totem-messages/addon/mixins/messages",
                                            "title": "messages"
                                        },
                                        "depth": 4,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-messages/addon/mixins/messages/add.coffee",
                                                    "projectPath": "totem-messages/addon/mixins/messages/add.coffee",
                                                    "targetPath": "totem-messages/addon/mixins/messages/add",
                                                    "pageTitle": "totem-messages/addon/mixins/messages/add",
                                                    "title": "add"
                                                },
                                                "depth": 5,
                                                "outline": [
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 2,
                                                            "title": "#",
                                                            "slug": ""
                                                        },
                                                        "depth": 2,
                                                        "children": [
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 3,
                                                                    "title": "Add - Message Properties.",
                                                                    "slug": "add-message-properties"
                                                                },
                                                                "depth": 3
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 2,
                                                            "title": "#",
                                                            "slug": ""
                                                        },
                                                        "depth": 2
                                                    }
                                                ]
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-messages/addon/mixins/messages/base.coffee",
                                                    "projectPath": "totem-messages/addon/mixins/messages/base.coffee",
                                                    "targetPath": "totem-messages/addon/mixins/messages/base",
                                                    "pageTitle": "totem-messages/addon/mixins/messages/base",
                                                    "title": "base"
                                                },
                                                "depth": 5,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-messages/addon/mixins/messages/filter.coffee",
                                                    "projectPath": "totem-messages/addon/mixins/messages/filter.coffee",
                                                    "targetPath": "totem-messages/addon/mixins/messages/filter",
                                                    "pageTitle": "totem-messages/addon/mixins/messages/filter",
                                                    "title": "filter"
                                                },
                                                "depth": 5,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-messages/addon/mixins/messages/format.coffee",
                                                    "projectPath": "totem-messages/addon/mixins/messages/format.coffee",
                                                    "targetPath": "totem-messages/addon/mixins/messages/format",
                                                    "pageTitle": "totem-messages/addon/mixins/messages/format",
                                                    "title": "format"
                                                },
                                                "depth": 5,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-messages/addon/mixins/messages/helpers.coffee",
                                                    "projectPath": "totem-messages/addon/mixins/messages/helpers.coffee",
                                                    "targetPath": "totem-messages/addon/mixins/messages/helpers",
                                                    "pageTitle": "totem-messages/addon/mixins/messages/helpers",
                                                    "title": "helpers"
                                                },
                                                "depth": 5,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-messages/addon/mixins/messages/initialize.coffee",
                                                    "projectPath": "totem-messages/addon/mixins/messages/initialize.coffee",
                                                    "targetPath": "totem-messages/addon/mixins/messages/initialize",
                                                    "pageTitle": "totem-messages/addon/mixins/messages/initialize",
                                                    "title": "initialize"
                                                },
                                                "depth": 5,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-messages/addon/mixins/messages/item.coffee",
                                                    "projectPath": "totem-messages/addon/mixins/messages/item.coffee",
                                                    "targetPath": "totem-messages/addon/mixins/messages/item",
                                                    "pageTitle": "totem-messages/addon/mixins/messages/item",
                                                    "title": "item"
                                                },
                                                "depth": 5,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-messages/addon/mixins/messages/load.coffee",
                                                    "projectPath": "totem-messages/addon/mixins/messages/load.coffee",
                                                    "targetPath": "totem-messages/addon/mixins/messages/load",
                                                    "pageTitle": "totem-messages/addon/mixins/messages/load",
                                                    "title": "load"
                                                },
                                                "depth": 5,
                                                "outline": []
                                            }
                                        ]
                                    },
                                    {
                                        "type": "folder",
                                        "data": {
                                            "path": "totem-messages/addon/mixins/models",
                                            "title": "models"
                                        },
                                        "depth": 4,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-messages/addon/mixins/models/message.coffee",
                                                    "projectPath": "totem-messages/addon/mixins/models/message.coffee",
                                                    "targetPath": "totem-messages/addon/mixins/models/message",
                                                    "pageTitle": "totem-messages/addon/mixins/models/message",
                                                    "title": "message"
                                                },
                                                "depth": 5,
                                                "outline": []
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
                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-messages/addon/model_validation.coffee",
                                    "projectPath": "totem-messages/addon/model_validation.coffee",
                                    "targetPath": "totem-messages/addon/model_validation",
                                    "pageTitle": "totem-messages/addon/model_validation",
                                    "title": "model_validation"
                                },
                                "depth": 3,
                                "outline": []
                            }
                        ]
                    },
                    {
                        "type": "folder",
                        "data": {
                            "path": "totem-messages/app",
                            "title": "app"
                        },
                        "depth": 2,
                        "children": [
                            {
                                "type": "folder",
                                "data": {
                                    "path": "totem-messages/app/initializers",
                                    "title": "initializers"
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-messages/app/initializers/totem_messages.coffee",
                                            "projectPath": "totem-messages/app/initializers/totem_messages.coffee",
                                            "targetPath": "totem-messages/app/initializers/totem_messages",
                                            "pageTitle": "totem-messages/app/initializers/totem_messages",
                                            "title": "totem_messages"
                                        },
                                        "depth": 4,
                                        "outline": []
                                    }
                                ]
                            },
                            {
                                "type": "folder",
                                "data": {
                                    "path": "totem-messages/app/instance-initializers",
                                    "title": "instance-initializers"
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-messages/app/instance-initializers/totem_messages.coffee",
                                            "projectPath": "totem-messages/app/instance-initializers/totem_messages.coffee",
                                            "targetPath": "totem-messages/app/instance-initializers/totem_messages",
                                            "pageTitle": "totem-messages/app/instance-initializers/totem_messages",
                                            "title": "totem_messages"
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
                    "path": "totem-pub-sub",
                    "title": "totem-pub-sub"
                },
                "depth": 1,
                "children": [
                    {
                        "type": "folder",
                        "data": {
                            "path": "totem-pub-sub/addon",
                            "title": "addon"
                        },
                        "depth": 2,
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
                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-pub-sub/addon/callback.coffee",
                                    "projectPath": "totem-pub-sub/addon/callback.coffee",
                                    "targetPath": "totem-pub-sub/addon/callback",
                                    "pageTitle": "totem-pub-sub/addon/callback",
                                    "title": "callback"
                                },
                                "depth": 3,
                                "outline": []
                            },
                            {
                                "type": "folder",
                                "data": {
                                    "path": "totem-pub-sub/addon/mixins",
                                    "title": "mixins"
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-pub-sub/addon/mixins/auth.coffee",
                                            "projectPath": "totem-pub-sub/addon/mixins/auth.coffee",
                                            "targetPath": "totem-pub-sub/addon/mixins/auth",
                                            "pageTitle": "totem-pub-sub/addon/mixins/auth",
                                            "title": "auth"
                                        },
                                        "depth": 4,
                                        "outline": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2,
                                                "children": [
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 3,
                                                            "title": "Public API.",
                                                            "slug": "public-api"
                                                        },
                                                        "depth": 3
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2,
                                                "children": [
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 3,
                                                            "title": "Private.",
                                                            "slug": "private"
                                                        },
                                                        "depth": 3
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2,
                                                "children": [
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 3,
                                                            "title": "Authenticate.",
                                                            "slug": "authenticate"
                                                        },
                                                        "depth": 3
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2,
                                                "children": [
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 3,
                                                            "title": "Authorize.",
                                                            "slug": "authorize"
                                                        },
                                                        "depth": 3
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2,
                                                "children": [
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 3,
                                                            "title": "Helpers.",
                                                            "slug": "helpers"
                                                        },
                                                        "depth": 3
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2
                                            }
                                        ]
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-pub-sub/addon/mixins/base.coffee",
                                            "projectPath": "totem-pub-sub/addon/mixins/base.coffee",
                                            "targetPath": "totem-pub-sub/addon/mixins/base",
                                            "pageTitle": "totem-pub-sub/addon/mixins/base",
                                            "title": "base"
                                        },
                                        "depth": 4,
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-pub-sub/addon/mixins/current_user.coffee",
                                            "projectPath": "totem-pub-sub/addon/mixins/current_user.coffee",
                                            "targetPath": "totem-pub-sub/addon/mixins/current_user",
                                            "pageTitle": "totem-pub-sub/addon/mixins/current_user",
                                            "title": "current_user"
                                        },
                                        "depth": 4,
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-pub-sub/addon/mixins/events.coffee",
                                            "projectPath": "totem-pub-sub/addon/mixins/events.coffee",
                                            "targetPath": "totem-pub-sub/addon/mixins/events",
                                            "pageTitle": "totem-pub-sub/addon/mixins/events",
                                            "title": "events"
                                        },
                                        "depth": 4,
                                        "outline": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2,
                                                "children": [
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 3,
                                                            "title": "Public API.",
                                                            "slug": "public-api"
                                                        },
                                                        "depth": 3
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2,
                                                "children": [
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 3,
                                                            "title": "Private.",
                                                            "slug": "private"
                                                        },
                                                        "depth": 3
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2
                                            }
                                        ]
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-pub-sub/addon/mixins/helpers.coffee",
                                            "projectPath": "totem-pub-sub/addon/mixins/helpers.coffee",
                                            "targetPath": "totem-pub-sub/addon/mixins/helpers",
                                            "pageTitle": "totem-pub-sub/addon/mixins/helpers",
                                            "title": "helpers"
                                        },
                                        "depth": 4,
                                        "outline": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2,
                                                "children": [
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 3,
                                                            "title": "Map Helpers.",
                                                            "slug": "map-helpers"
                                                        },
                                                        "depth": 3
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2,
                                                "children": [
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 3,
                                                            "title": "Options Helpers.",
                                                            "slug": "options-helpers"
                                                        },
                                                        "depth": 3
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2,
                                                "children": [
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 3,
                                                            "title": "Data Helpers.",
                                                            "slug": "data-helpers"
                                                        },
                                                        "depth": 3
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2
                                            }
                                        ]
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-pub-sub/addon/mixins/initialize.coffee",
                                            "projectPath": "totem-pub-sub/addon/mixins/initialize.coffee",
                                            "targetPath": "totem-pub-sub/addon/mixins/initialize",
                                            "pageTitle": "totem-pub-sub/addon/mixins/initialize",
                                            "title": "initialize"
                                        },
                                        "depth": 4,
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-pub-sub/addon/mixins/non_auth.coffee",
                                            "projectPath": "totem-pub-sub/addon/mixins/non_auth.coffee",
                                            "targetPath": "totem-pub-sub/addon/mixins/non_auth",
                                            "pageTitle": "totem-pub-sub/addon/mixins/non_auth",
                                            "title": "non_auth"
                                        },
                                        "depth": 4,
                                        "outline": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2,
                                                "children": [
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 3,
                                                            "title": "Public API.",
                                                            "slug": "public-api"
                                                        },
                                                        "depth": 3
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2,
                                                "children": [
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 3,
                                                            "title": "Private.",
                                                            "slug": "private"
                                                        },
                                                        "depth": 3
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2
                                            }
                                        ]
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-pub-sub/addon/mixins/rooms.coffee",
                                            "projectPath": "totem-pub-sub/addon/mixins/rooms.coffee",
                                            "targetPath": "totem-pub-sub/addon/mixins/rooms",
                                            "pageTitle": "totem-pub-sub/addon/mixins/rooms",
                                            "title": "rooms"
                                        },
                                        "depth": 4,
                                        "outline": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2,
                                                "children": [
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 3,
                                                            "title": "Public API.",
                                                            "slug": "public-api"
                                                        },
                                                        "depth": 3
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2,
                                                "children": [
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 3,
                                                            "title": "Public API: Room Event Helpers. ###",
                                                            "slug": "public-api-room-event-helpers-"
                                                        },
                                                        "depth": 3
                                                    },
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 3,
                                                            "title": "Public API: Room Name Helpers. ###",
                                                            "slug": "public-api-room-name-helpers-"
                                                        },
                                                        "depth": 3
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2,
                                                "children": [
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 3,
                                                            "title": "Private.",
                                                            "slug": "private"
                                                        },
                                                        "depth": 3
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2,
                                                "children": [
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 3,
                                                            "title": "Callbacks.",
                                                            "slug": "callbacks"
                                                        },
                                                        "depth": 3
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2,
                                                "children": [
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 3,
                                                            "title": "Queue Events and Rooms Data.",
                                                            "slug": "queue-events-and-rooms-data"
                                                        },
                                                        "depth": 3
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2,
                                                "children": [
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 3,
                                                            "title": "Helpers.",
                                                            "slug": "helpers"
                                                        },
                                                        "depth": 3
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2
                                            }
                                        ]
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-pub-sub/addon/mixins/timer.coffee",
                                            "projectPath": "totem-pub-sub/addon/mixins/timer.coffee",
                                            "targetPath": "totem-pub-sub/addon/mixins/timer",
                                            "pageTitle": "totem-pub-sub/addon/mixins/timer",
                                            "title": "timer"
                                        },
                                        "depth": 4,
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-pub-sub/addon/mixins/tracker.coffee",
                                            "projectPath": "totem-pub-sub/addon/mixins/tracker.coffee",
                                            "targetPath": "totem-pub-sub/addon/mixins/tracker",
                                            "pageTitle": "totem-pub-sub/addon/mixins/tracker",
                                            "title": "tracker"
                                        },
                                        "depth": 4,
                                        "outline": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2,
                                                "children": [
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 3,
                                                            "title": "Authorized Room Tracker.",
                                                            "slug": "authorized-room-tracker"
                                                        },
                                                        "depth": 3
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2,
                                                "children": [
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 3,
                                                            "title": "Show Tracked Users.",
                                                            "slug": "show-tracked-users"
                                                        },
                                                        "depth": 3
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2
                                            }
                                        ]
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-pub-sub/addon/mixins/tracker_sio.coffee",
                                            "projectPath": "totem-pub-sub/addon/mixins/tracker_sio.coffee",
                                            "targetPath": "totem-pub-sub/addon/mixins/tracker_sio",
                                            "pageTitle": "totem-pub-sub/addon/mixins/tracker_sio",
                                            "title": "tracker_sio"
                                        },
                                        "depth": 4,
                                        "outline": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2,
                                                "children": [
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 3,
                                                            "title": "Socketio-only Tracker.",
                                                            "slug": "socketio-only-tracker"
                                                        },
                                                        "depth": 3
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2,
                                                "children": [
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 3,
                                                            "title": "Show Tracked SIO Users to Trackers e.g. instructors.",
                                                            "slug": "show-tracked-sio-users-to-trackers-eg-instructors"
                                                        },
                                                        "depth": 3
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2
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
                            "path": "totem-pub-sub/app",
                            "title": "app"
                        },
                        "depth": 2,
                        "children": [
                            {
                                "type": "folder",
                                "data": {
                                    "path": "totem-pub-sub/app/_config",
                                    "title": "_config"
                                },
                                "depth": 3,
                                "children": [
                                    {
                                        "type": "folder",
                                        "data": {
                                            "path": "totem-pub-sub/app/_config/totem",
                                            "title": "totem"
                                        },
                                        "depth": 4,
                                        "children": [
                                            {
                                                "type": "folder",
                                                "data": {
                                                    "path": "totem-pub-sub/app/_config/totem/pub_sub",
                                                    "title": "pub_sub"
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
                                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-pub-sub/app/_config/totem/pub_sub/ns.coffee",
                                                            "projectPath": "totem-pub-sub/app/_config/totem/pub_sub/ns.coffee",
                                                            "targetPath": "totem-pub-sub/app/_config/totem/pub_sub/ns",
                                                            "pageTitle": "totem-pub-sub/app/_config/totem/pub_sub/ns",
                                                            "title": "ns"
                                                        },
                                                        "depth": 6,
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
                                    "path": "totem-pub-sub/app/services",
                                    "title": "services"
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-pub-sub/app/services/pubsub.coffee",
                                            "projectPath": "totem-pub-sub/app/services/pubsub.coffee",
                                            "targetPath": "totem-pub-sub/app/services/pubsub",
                                            "pageTitle": "totem-pub-sub/app/services/pubsub",
                                            "title": "pubsub"
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
                    "path": "totem-simple-auth",
                    "title": "totem-simple-auth"
                },
                "depth": 1,
                "children": [
                    {
                        "type": "folder",
                        "data": {
                            "path": "totem-simple-auth/addon",
                            "title": "addon"
                        },
                        "depth": 2,
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
                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-simple-auth/addon/authenticator.coffee",
                                    "projectPath": "totem-simple-auth/addon/authenticator.coffee",
                                    "targetPath": "totem-simple-auth/addon/authenticator",
                                    "pageTitle": "totem-simple-auth/addon/authenticator",
                                    "title": "authenticator"
                                },
                                "depth": 3,
                                "outline": [
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 3,
                                            "title": "TODO: Fix for using the cookie store",
                                            "slug": "todo-fix-for-using-the-cookie-store"
                                        },
                                        "depth": 3
                                    }
                                ]
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
                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-simple-auth/addon/authenticator_switch_user.coffee",
                                    "projectPath": "totem-simple-auth/addon/authenticator_switch_user.coffee",
                                    "targetPath": "totem-simple-auth/addon/authenticator_switch_user",
                                    "pageTitle": "totem-simple-auth/addon/authenticator_switch_user",
                                    "title": "authenticator_switch_user"
                                },
                                "depth": 3,
                                "outline": [
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2,
                                        "children": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 3,
                                                    "title": "Restore Switch User e.g. page reload.",
                                                    "slug": "restore-switch-user-eg-page-reload"
                                                },
                                                "depth": 3
                                            }
                                        ]
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2,
                                        "children": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 3,
                                                    "title": "Valid Url.",
                                                    "slug": "valid-url"
                                                },
                                                "depth": 3
                                            }
                                        ]
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2,
                                        "children": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 3,
                                                    "title": "Authticate Switch User.",
                                                    "slug": "authticate-switch-user"
                                                },
                                                "depth": 3
                                            }
                                        ]
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 2,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 2
                                    }
                                ]
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
                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-simple-auth/addon/authorizer.coffee",
                                    "projectPath": "totem-simple-auth/addon/authorizer.coffee",
                                    "targetPath": "totem-simple-auth/addon/authorizer",
                                    "pageTitle": "totem-simple-auth/addon/authorizer",
                                    "title": "authorizer"
                                },
                                "depth": 3,
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
                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-simple-auth/addon/cookie_store.coffee",
                                    "projectPath": "totem-simple-auth/addon/cookie_store.coffee",
                                    "targetPath": "totem-simple-auth/addon/cookie_store",
                                    "pageTitle": "totem-simple-auth/addon/cookie_store",
                                    "title": "cookie_store"
                                },
                                "depth": 3,
                                "outline": []
                            },
                            {
                                "type": "folder",
                                "data": {
                                    "path": "totem-simple-auth/addon/mixins",
                                    "title": "mixins"
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-simple-auth/addon/mixins/authenticated-route-mixin.coffee",
                                            "projectPath": "totem-simple-auth/addon/mixins/authenticated-route-mixin.coffee",
                                            "targetPath": "totem-simple-auth/addon/mixins/authenticated-route-mixin",
                                            "pageTitle": "totem-simple-auth/addon/mixins/authenticated-route-mixin",
                                            "title": "authenticated-route-mixin"
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
                            "path": "totem-simple-auth/app",
                            "title": "app"
                        },
                        "depth": 2,
                        "children": [
                            {
                                "type": "folder",
                                "data": {
                                    "path": "totem-simple-auth/app/initializers",
                                    "title": "initializers"
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-simple-auth/app/initializers/totem_simple_auth.coffee",
                                            "projectPath": "totem-simple-auth/app/initializers/totem_simple_auth.coffee",
                                            "targetPath": "totem-simple-auth/app/initializers/totem_simple_auth",
                                            "pageTitle": "totem-simple-auth/app/initializers/totem_simple_auth",
                                            "title": "totem_simple_auth"
                                        },
                                        "depth": 4,
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-simple-auth/app/initializers/totem_simple_auth_current_user.coffee",
                                            "projectPath": "totem-simple-auth/app/initializers/totem_simple_auth_current_user.coffee",
                                            "targetPath": "totem-simple-auth/app/initializers/totem_simple_auth_current_user",
                                            "pageTitle": "totem-simple-auth/app/initializers/totem_simple_auth_current_user",
                                            "title": "totem_simple_auth_current_user"
                                        },
                                        "depth": 4,
                                        "outline": []
                                    }
                                ]
                            },
                            {
                                "type": "folder",
                                "data": {
                                    "path": "totem-simple-auth/app/routes",
                                    "title": "routes"
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-simple-auth/app/routes/index.coffee",
                                            "projectPath": "totem-simple-auth/app/routes/index.coffee",
                                            "targetPath": "totem-simple-auth/app/routes/index",
                                            "pageTitle": "totem-simple-auth/app/routes/index",
                                            "title": "index"
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
                    "path": "totem-template-manager",
                    "title": "totem-template-manager"
                },
                "depth": 1,
                "children": [
                    {
                        "type": "folder",
                        "data": {
                            "path": "totem-template-manager/addon",
                            "title": "addon"
                        },
                        "depth": 2,
                        "children": [
                            {
                                "type": "folder",
                                "data": {
                                    "path": "totem-template-manager/addon/mixins",
                                    "title": "mixins"
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-template-manager/addon/mixins/tvo.coffee",
                                            "projectPath": "totem-template-manager/addon/mixins/tvo.coffee",
                                            "targetPath": "totem-template-manager/addon/mixins/tvo",
                                            "pageTitle": "totem-template-manager/addon/mixins/tvo",
                                            "title": "tvo"
                                        },
                                        "depth": 4,
                                        "outline": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2,
                                                "children": [
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 3,
                                                            "title": "Common Helpers.",
                                                            "slug": "common-helpers"
                                                        },
                                                        "depth": 3
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2,
                                                "children": [
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 3,
                                                            "title": "Internal.  Use with caution if call outside of above functions.",
                                                            "slug": "internal-use-with-caution-if-call-outside-of-above-functions"
                                                        },
                                                        "depth": 3
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
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
                                    "path": "totem-template-manager/addon/tvo",
                                    "title": "tvo"
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-template-manager/addon/tvo/hash.coffee",
                                            "projectPath": "totem-template-manager/addon/tvo/hash.coffee",
                                            "targetPath": "totem-template-manager/addon/tvo/hash",
                                            "pageTitle": "totem-template-manager/addon/tvo/hash",
                                            "title": "hash"
                                        },
                                        "depth": 4,
                                        "outline": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2,
                                                "children": [
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 3,
                                                            "title": "Internal.",
                                                            "slug": "internal"
                                                        },
                                                        "depth": 3
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2
                                            }
                                        ]
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-template-manager/addon/tvo/section.coffee",
                                            "projectPath": "totem-template-manager/addon/tvo/section.coffee",
                                            "targetPath": "totem-template-manager/addon/tvo/section",
                                            "pageTitle": "totem-template-manager/addon/tvo/section",
                                            "title": "section"
                                        },
                                        "depth": 4,
                                        "outline": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2,
                                                "children": [
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 3,
                                                            "title": "Internal.",
                                                            "slug": "internal"
                                                        },
                                                        "depth": 3
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2
                                            }
                                        ]
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-template-manager/addon/tvo/status.coffee",
                                            "projectPath": "totem-template-manager/addon/tvo/status.coffee",
                                            "targetPath": "totem-template-manager/addon/tvo/status",
                                            "pageTitle": "totem-template-manager/addon/tvo/status",
                                            "title": "status"
                                        },
                                        "depth": 4,
                                        "outline": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2,
                                                "children": [
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 3,
                                                            "title": "Utility Helpers.",
                                                            "slug": "utility-helpers"
                                                        },
                                                        "depth": 3
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2,
                                                "children": [
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 3,
                                                            "title": "Internal Helpers.",
                                                            "slug": "internal-helpers"
                                                        },
                                                        "depth": 3
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2,
                                                "children": [
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 3,
                                                            "title": "Callback Wrapper Object.",
                                                            "slug": "callback-wrapper-object"
                                                        },
                                                        "depth": 3
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2,
                                                "children": [
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 3,
                                                            "title": "Changeset Collection Object.",
                                                            "slug": "changeset-collection-object"
                                                        },
                                                        "depth": 3
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2
                                            }
                                        ]
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-template-manager/addon/tvo/template.coffee",
                                            "projectPath": "totem-template-manager/addon/tvo/template.coffee",
                                            "targetPath": "totem-template-manager/addon/tvo/template",
                                            "pageTitle": "totem-template-manager/addon/tvo/template",
                                            "title": "template"
                                        },
                                        "depth": 4,
                                        "outline": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 6,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 6
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 3,
                                                    "title": "Internal ###",
                                                    "slug": "internal-"
                                                },
                                                "depth": 3,
                                                "children": [
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 6,
                                                            "title": "#",
                                                            "slug": ""
                                                        },
                                                        "depth": 6
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2,
                                                "children": [
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 3,
                                                            "title": "Engine Values (until can pass hash values on {{mount}} e.g. mount &#39;myengine&#39; component_name=&#39;mycomponent&#39;).",
                                                            "slug": "engine-values-until-can-pass-hash-values-on-mount-eg-mount-39myengine39-component-name39mycomponent39"
                                                        },
                                                        "depth": 3
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2,
                                                "children": [
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 3,
                                                            "title": "Parse Template.",
                                                            "slug": "parse-template"
                                                        },
                                                        "depth": 3
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2,
                                                "children": [
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 3,
                                                            "title": "Add Components.",
                                                            "slug": "add-components"
                                                        },
                                                        "depth": 3
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2
                                            }
                                        ]
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-template-manager/addon/tvo/value.coffee",
                                            "projectPath": "totem-template-manager/addon/tvo/value.coffee",
                                            "targetPath": "totem-template-manager/addon/tvo/value",
                                            "pageTitle": "totem-template-manager/addon/tvo/value",
                                            "title": "value"
                                        },
                                        "depth": 4,
                                        "outline": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2,
                                                "children": [
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 3,
                                                            "title": "Internal.",
                                                            "slug": "internal"
                                                        },
                                                        "depth": 3
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 2,
                                                    "title": "#",
                                                    "slug": ""
                                                },
                                                "depth": 2
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
                            "path": "totem-template-manager/app",
                            "title": "app"
                        },
                        "depth": 2,
                        "children": [
                            {
                                "type": "folder",
                                "data": {
                                    "path": "totem-template-manager/app/services",
                                    "title": "services"
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem-template-manager/app/services/tvo.coffee",
                                            "projectPath": "totem-template-manager/app/services/tvo.coffee",
                                            "targetPath": "totem-template-manager/app/services/tvo",
                                            "pageTitle": "totem-template-manager/app/services/tvo",
                                            "title": "tvo"
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
                    "path": "totem",
                    "title": "totem"
                },
                "depth": 1,
                "children": [
                    {
                        "type": "folder",
                        "data": {
                            "path": "totem/addon",
                            "title": "addon"
                        },
                        "depth": 2,
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
                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/ajax.coffee",
                                    "projectPath": "totem/addon/ajax.coffee",
                                    "targetPath": "totem/addon/ajax",
                                    "pageTitle": "totem/addon/ajax",
                                    "title": "ajax"
                                },
                                "depth": 3,
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
                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/cache.coffee",
                                    "projectPath": "totem/addon/cache.coffee",
                                    "targetPath": "totem/addon/cache",
                                    "pageTitle": "totem/addon/cache",
                                    "title": "cache"
                                },
                                "depth": 3,
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
                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/changeset.coffee",
                                    "projectPath": "totem/addon/changeset.coffee",
                                    "targetPath": "totem/addon/changeset",
                                    "pageTitle": "totem/addon/changeset",
                                    "title": "changeset"
                                },
                                "depth": 3,
                                "outline": []
                            },
                            {
                                "type": "folder",
                                "data": {
                                    "path": "totem/addon/ds",
                                    "title": "ds"
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/ds/associations.coffee",
                                            "projectPath": "totem/addon/ds/associations.coffee",
                                            "targetPath": "totem/addon/ds/associations",
                                            "pageTitle": "totem/addon/ds/associations",
                                            "title": "associations"
                                        },
                                        "depth": 4,
                                        "outline": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 3,
                                                    "title": "Add filter and sort to result object ###",
                                                    "slug": "add-filter-and-sort-to-result-object-"
                                                },
                                                "depth": 3
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
                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/error.coffee",
                                    "projectPath": "totem/addon/error.coffee",
                                    "targetPath": "totem/addon/error",
                                    "pageTitle": "totem/addon/error",
                                    "title": "error"
                                },
                                "depth": 3,
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
                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/i18n.coffee",
                                    "projectPath": "totem/addon/i18n.coffee",
                                    "targetPath": "totem/addon/i18n",
                                    "pageTitle": "totem/addon/i18n",
                                    "title": "i18n"
                                },
                                "depth": 3,
                                "outline": []
                            },
                            {
                                "type": "folder",
                                "data": {
                                    "path": "totem/addon/mixins",
                                    "title": "mixins"
                                },
                                "depth": 3,
                                "children": [
                                    {
                                        "type": "folder",
                                        "data": {
                                            "path": "totem/addon/mixins/cache",
                                            "title": "cache"
                                        },
                                        "depth": 4,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/mixins/cache/base.coffee",
                                                    "projectPath": "totem/addon/mixins/cache/base.coffee",
                                                    "targetPath": "totem/addon/mixins/cache/base",
                                                    "pageTitle": "totem/addon/mixins/cache/base",
                                                    "title": "base"
                                                },
                                                "depth": 5,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/mixins/cache/finders.coffee",
                                                    "projectPath": "totem/addon/mixins/cache/finders.coffee",
                                                    "targetPath": "totem/addon/mixins/cache/finders",
                                                    "pageTitle": "totem/addon/mixins/cache/finders",
                                                    "title": "finders"
                                                },
                                                "depth": 5,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/mixins/cache/helpers.coffee",
                                                    "projectPath": "totem/addon/mixins/cache/helpers.coffee",
                                                    "targetPath": "totem/addon/mixins/cache/helpers",
                                                    "pageTitle": "totem/addon/mixins/cache/helpers",
                                                    "title": "helpers"
                                                },
                                                "depth": 5,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/mixins/cache/initialize.coffee",
                                                    "projectPath": "totem/addon/mixins/cache/initialize.coffee",
                                                    "targetPath": "totem/addon/mixins/cache/initialize",
                                                    "pageTitle": "totem/addon/mixins/cache/initialize",
                                                    "title": "initialize"
                                                },
                                                "depth": 5,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/mixins/cache/paginate.coffee",
                                                    "projectPath": "totem/addon/mixins/cache/paginate.coffee",
                                                    "targetPath": "totem/addon/mixins/cache/paginate",
                                                    "pageTitle": "totem/addon/mixins/cache/paginate",
                                                    "title": "paginate"
                                                },
                                                "depth": 5,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/mixins/cache/query.coffee",
                                                    "projectPath": "totem/addon/mixins/cache/query.coffee",
                                                    "targetPath": "totem/addon/mixins/cache/query",
                                                    "pageTitle": "totem/addon/mixins/cache/query",
                                                    "title": "query"
                                                },
                                                "depth": 5,
                                                "outline": [
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 2,
                                                            "title": "#",
                                                            "slug": ""
                                                        },
                                                        "depth": 2,
                                                        "children": [
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 3,
                                                                    "title": "Helpers",
                                                                    "slug": "helpers"
                                                                },
                                                                "depth": 3
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 2,
                                                            "title": "#",
                                                            "slug": ""
                                                        },
                                                        "depth": 2
                                                    }
                                                ]
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/mixins/cache/store.coffee",
                                                    "projectPath": "totem/addon/mixins/cache/store.coffee",
                                                    "targetPath": "totem/addon/mixins/cache/store",
                                                    "pageTitle": "totem/addon/mixins/cache/store",
                                                    "title": "store"
                                                },
                                                "depth": 5,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/mixins/cache/store_filter.coffee",
                                                    "projectPath": "totem/addon/mixins/cache/store_filter.coffee",
                                                    "targetPath": "totem/addon/mixins/cache/store_filter",
                                                    "pageTitle": "totem/addon/mixins/cache/store_filter",
                                                    "title": "store_filter"
                                                },
                                                "depth": 5,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/mixins/cache/view.coffee",
                                                    "projectPath": "totem/addon/mixins/cache/view.coffee",
                                                    "targetPath": "totem/addon/mixins/cache/view",
                                                    "pageTitle": "totem/addon/mixins/cache/view",
                                                    "title": "view"
                                                },
                                                "depth": 5,
                                                "outline": []
                                            }
                                        ]
                                    },
                                    {
                                        "type": "folder",
                                        "data": {
                                            "path": "totem/addon/mixins/changeset",
                                            "title": "changeset"
                                        },
                                        "depth": 4,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/mixins/changeset/extend_changeset.coffee",
                                                    "projectPath": "totem/addon/mixins/changeset/extend_changeset.coffee",
                                                    "targetPath": "totem/addon/mixins/changeset/extend_changeset",
                                                    "pageTitle": "totem/addon/mixins/changeset/extend_changeset",
                                                    "title": "extend_changeset"
                                                },
                                                "depth": 5,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/mixins/changeset/numbers.coffee",
                                                    "projectPath": "totem/addon/mixins/changeset/numbers.coffee",
                                                    "targetPath": "totem/addon/mixins/changeset/numbers",
                                                    "pageTitle": "totem/addon/mixins/changeset/numbers",
                                                    "title": "numbers"
                                                },
                                                "depth": 5,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/mixins/changeset/text_support.coffee",
                                                    "projectPath": "totem/addon/mixins/changeset/text_support.coffee",
                                                    "targetPath": "totem/addon/mixins/changeset/text_support",
                                                    "pageTitle": "totem/addon/mixins/changeset/text_support",
                                                    "title": "text_support"
                                                },
                                                "depth": 5,
                                                "outline": [
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 3,
                                                            "title": "Template Parameters",
                                                            "slug": "template-parameters"
                                                        },
                                                        "depth": 3
                                                    },
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 1,
                                                            "title": "Some browsers do not trigger a &#39;change&#39; event on the input if the field is autofilled",
                                                            "slug": "some-browsers-do-not-trigger-a-39change39-event-on-the-input-if-the-field-is-autofilled"
                                                        },
                                                        "depth": 1
                                                    },
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 1,
                                                            "title": "To fully account for this issue, poll to ensure that ember can catch input changes made by autofill",
                                                            "slug": "to-fully-account-for-this-issue-poll-to-ensure-that-ember-can-catch-input-changes-made-by-autofill"
                                                        },
                                                        "depth": 1
                                                    }
                                                ]
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/mixins/changeset/validators.coffee",
                                                    "projectPath": "totem/addon/mixins/changeset/validators.coffee",
                                                    "targetPath": "totem/addon/mixins/changeset/validators",
                                                    "pageTitle": "totem/addon/mixins/changeset/validators",
                                                    "title": "validators"
                                                },
                                                "depth": 5,
                                                "outline": [],
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
                                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/mixins/changeset/validators/decimals.coffee",
                                                            "projectPath": "totem/addon/mixins/changeset/validators/decimals.coffee",
                                                            "targetPath": "totem/addon/mixins/changeset/validators/decimals",
                                                            "pageTitle": "totem/addon/mixins/changeset/validators/decimals",
                                                            "title": "decimals"
                                                        },
                                                        "depth": 6,
                                                        "outline": []
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/mixins/ckeditor.coffee",
                                            "projectPath": "totem/addon/mixins/ckeditor.coffee",
                                            "targetPath": "totem/addon/mixins/ckeditor",
                                            "pageTitle": "totem/addon/mixins/ckeditor",
                                            "title": "ckeditor"
                                        },
                                        "depth": 4,
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/mixins/data.coffee",
                                            "projectPath": "totem/addon/mixins/data.coffee",
                                            "targetPath": "totem/addon/mixins/data",
                                            "pageTitle": "totem/addon/mixins/data",
                                            "title": "data"
                                        },
                                        "depth": 4,
                                        "outline": [],
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/mixins/data/ability.coffee",
                                                    "projectPath": "totem/addon/mixins/data/ability.coffee",
                                                    "targetPath": "totem/addon/mixins/data/ability",
                                                    "pageTitle": "totem/addon/mixins/data/ability",
                                                    "title": "ability"
                                                },
                                                "depth": 5,
                                                "outline": [
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 2,
                                                            "title": "#",
                                                            "slug": ""
                                                        },
                                                        "depth": 2,
                                                        "children": [
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 3,
                                                                    "title": "Private.",
                                                                    "slug": "private"
                                                                },
                                                                "depth": 3
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 2,
                                                            "title": "#",
                                                            "slug": ""
                                                        },
                                                        "depth": 2
                                                    },
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 2,
                                                            "title": "#",
                                                            "slug": ""
                                                        },
                                                        "depth": 2,
                                                        "children": [
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 3,
                                                                    "title": "Abilities.",
                                                                    "slug": "abilities"
                                                                },
                                                                "depth": 3
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 2,
                                                            "title": "#",
                                                            "slug": ""
                                                        },
                                                        "depth": 2
                                                    },
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 2,
                                                            "title": "#",
                                                            "slug": ""
                                                        },
                                                        "depth": 2,
                                                        "children": [
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 3,
                                                                    "title": "Print.",
                                                                    "slug": "print"
                                                                },
                                                                "depth": 3
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 2,
                                                            "title": "#",
                                                            "slug": ""
                                                        },
                                                        "depth": 2
                                                    }
                                                ]
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/mixins/data/base_data.coffee",
                                                    "projectPath": "totem/addon/mixins/data/base_data.coffee",
                                                    "targetPath": "totem/addon/mixins/data/base_data",
                                                    "pageTitle": "totem/addon/mixins/data/base_data",
                                                    "title": "base_data"
                                                },
                                                "depth": 5,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/mixins/data/base_module.coffee",
                                                    "projectPath": "totem/addon/mixins/data/base_module.coffee",
                                                    "targetPath": "totem/addon/mixins/data/base_module",
                                                    "pageTitle": "totem/addon/mixins/data/base_module",
                                                    "title": "base_module"
                                                },
                                                "depth": 5,
                                                "outline": [
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 2,
                                                            "title": "#",
                                                            "slug": ""
                                                        },
                                                        "depth": 2,
                                                        "children": [
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 3,
                                                                    "title": "Private.",
                                                                    "slug": "private"
                                                                },
                                                                "depth": 3
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 2,
                                                            "title": "#",
                                                            "slug": ""
                                                        },
                                                        "depth": 2
                                                    },
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 2,
                                                            "title": "#",
                                                            "slug": ""
                                                        },
                                                        "depth": 2,
                                                        "children": [
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 3,
                                                                    "title": "Current User Observer.",
                                                                    "slug": "current-user-observer"
                                                                },
                                                                "depth": 3
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 2,
                                                            "title": "#",
                                                            "slug": ""
                                                        },
                                                        "depth": 2
                                                    },
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 2,
                                                            "title": "#",
                                                            "slug": ""
                                                        },
                                                        "depth": 2,
                                                        "children": [
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 3,
                                                                    "title": "Get Data.",
                                                                    "slug": "get-data"
                                                                },
                                                                "depth": 3
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 2,
                                                            "title": "#",
                                                            "slug": ""
                                                        },
                                                        "depth": 2
                                                    },
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 2,
                                                            "title": "#",
                                                            "slug": ""
                                                        },
                                                        "depth": 2,
                                                        "children": [
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 3,
                                                                    "title": "Send Ajax Request",
                                                                    "slug": "send-ajax-request"
                                                                },
                                                                "depth": 3
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 2,
                                                            "title": "#",
                                                            "slug": ""
                                                        },
                                                        "depth": 2
                                                    },
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 2,
                                                            "title": "#",
                                                            "slug": ""
                                                        },
                                                        "depth": 2,
                                                        "children": [
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 3,
                                                                    "title": "Call Object Function.",
                                                                    "slug": "call-object-function"
                                                                },
                                                                "depth": 3
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 2,
                                                            "title": "#",
                                                            "slug": ""
                                                        },
                                                        "depth": 2
                                                    },
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 2,
                                                            "title": "#",
                                                            "slug": ""
                                                        },
                                                        "depth": 2,
                                                        "children": [
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 3,
                                                                    "title": "Process Data Name.",
                                                                    "slug": "process-data-name"
                                                                },
                                                                "depth": 3
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 2,
                                                            "title": "#",
                                                            "slug": ""
                                                        },
                                                        "depth": 2
                                                    },
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 2,
                                                            "title": "#",
                                                            "slug": ""
                                                        },
                                                        "depth": 2,
                                                        "children": [
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 3,
                                                                    "title": "Helpers.",
                                                                    "slug": "helpers"
                                                                },
                                                                "depth": 3
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 2,
                                                            "title": "#",
                                                            "slug": ""
                                                        },
                                                        "depth": 2
                                                    }
                                                ]
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/mixins/data/did_load.coffee",
                                                    "projectPath": "totem/addon/mixins/data/did_load.coffee",
                                                    "targetPath": "totem/addon/mixins/data/did_load",
                                                    "pageTitle": "totem/addon/mixins/data/did_load",
                                                    "title": "did_load"
                                                },
                                                "depth": 5,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/mixins/data/metadata.coffee",
                                                    "projectPath": "totem/addon/mixins/data/metadata.coffee",
                                                    "targetPath": "totem/addon/mixins/data/metadata",
                                                    "pageTitle": "totem/addon/mixins/data/metadata",
                                                    "title": "metadata"
                                                },
                                                "depth": 5,
                                                "outline": [
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 2,
                                                            "title": "#",
                                                            "slug": ""
                                                        },
                                                        "depth": 2,
                                                        "children": [
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 3,
                                                                    "title": "Private.",
                                                                    "slug": "private"
                                                                },
                                                                "depth": 3
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 2,
                                                            "title": "#",
                                                            "slug": ""
                                                        },
                                                        "depth": 2
                                                    },
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 2,
                                                            "title": "#",
                                                            "slug": ""
                                                        },
                                                        "depth": 2,
                                                        "children": [
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 3,
                                                                    "title": "Print.",
                                                                    "slug": "print"
                                                                },
                                                                "depth": 3
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 2,
                                                            "title": "#",
                                                            "slug": ""
                                                        },
                                                        "depth": 2
                                                    }
                                                ]
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/mixins/data/queue.coffee",
                                                    "projectPath": "totem/addon/mixins/data/queue.coffee",
                                                    "targetPath": "totem/addon/mixins/data/queue",
                                                    "pageTitle": "totem/addon/mixins/data/queue",
                                                    "title": "queue"
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/mixins/filter.coffee",
                                            "projectPath": "totem/addon/mixins/filter.coffee",
                                            "targetPath": "totem/addon/mixins/filter",
                                            "pageTitle": "totem/addon/mixins/filter",
                                            "title": "filter"
                                        },
                                        "depth": 4,
                                        "outline": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 3,
                                                    "title": "Properties",
                                                    "slug": "properties"
                                                },
                                                "depth": 3
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 3,
                                                    "title": "Helpers",
                                                    "slug": "helpers"
                                                },
                                                "depth": 3
                                            }
                                        ]
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/mixins/group_by.coffee",
                                            "projectPath": "totem/addon/mixins/group_by.coffee",
                                            "targetPath": "totem/addon/mixins/group_by",
                                            "pageTitle": "totem/addon/mixins/group_by",
                                            "title": "group_by"
                                        },
                                        "depth": 4,
                                        "outline": [
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 3,
                                                    "title": "Main function to group a values array.",
                                                    "slug": "main-function-to-group-a-values-array"
                                                },
                                                "depth": 3
                                            },
                                            {
                                                "type": "heading",
                                                "data": {
                                                    "level": 3,
                                                    "title": "Helpers",
                                                    "slug": "helpers"
                                                },
                                                "depth": 3
                                            }
                                        ]
                                    },
                                    {
                                        "type": "folder",
                                        "data": {
                                            "path": "totem/addon/mixins/scope",
                                            "title": "scope"
                                        },
                                        "depth": 4,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/mixins/scope/ajax.coffee",
                                                    "projectPath": "totem/addon/mixins/scope/ajax.coffee",
                                                    "targetPath": "totem/addon/mixins/scope/ajax",
                                                    "pageTitle": "totem/addon/mixins/scope/ajax",
                                                    "title": "ajax"
                                                },
                                                "depth": 5,
                                                "outline": [
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 3,
                                                            "title": "Adapter",
                                                            "slug": "adapter"
                                                        },
                                                        "depth": 3
                                                    },
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 3,
                                                            "title": "Serializer",
                                                            "slug": "serializer"
                                                        },
                                                        "depth": 3
                                                    },
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 3,
                                                            "title": "Rest Helpers",
                                                            "slug": "rest-helpers"
                                                        },
                                                        "depth": 3
                                                    }
                                                ]
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/mixins/scope/association_filters.coffee",
                                                    "projectPath": "totem/addon/mixins/scope/association_filters.coffee",
                                                    "targetPath": "totem/addon/mixins/scope/association_filters",
                                                    "pageTitle": "totem/addon/mixins/scope/association_filters",
                                                    "title": "association_filters"
                                                },
                                                "depth": 5,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/mixins/scope/authable.coffee",
                                                    "projectPath": "totem/addon/mixins/scope/authable.coffee",
                                                    "targetPath": "totem/addon/mixins/scope/authable",
                                                    "pageTitle": "totem/addon/mixins/scope/authable",
                                                    "title": "authable"
                                                },
                                                "depth": 5,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/mixins/scope/base.coffee",
                                                    "projectPath": "totem/addon/mixins/scope/base.coffee",
                                                    "targetPath": "totem/addon/mixins/scope/base",
                                                    "pageTitle": "totem/addon/mixins/scope/base",
                                                    "title": "base"
                                                },
                                                "depth": 5,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/mixins/scope/current_user.coffee",
                                                    "projectPath": "totem/addon/mixins/scope/current_user.coffee",
                                                    "targetPath": "totem/addon/mixins/scope/current_user",
                                                    "pageTitle": "totem/addon/mixins/scope/current_user",
                                                    "title": "current_user"
                                                },
                                                "depth": 5,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/mixins/scope/initialize.coffee",
                                                    "projectPath": "totem/addon/mixins/scope/initialize.coffee",
                                                    "targetPath": "totem/addon/mixins/scope/initialize",
                                                    "pageTitle": "totem/addon/mixins/scope/initialize",
                                                    "title": "initialize"
                                                },
                                                "depth": 5,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/mixins/scope/ownerable.coffee",
                                                    "projectPath": "totem/addon/mixins/scope/ownerable.coffee",
                                                    "targetPath": "totem/addon/mixins/scope/ownerable",
                                                    "pageTitle": "totem/addon/mixins/scope/ownerable",
                                                    "title": "ownerable"
                                                },
                                                "depth": 5,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/mixins/scope/paths.coffee",
                                                    "projectPath": "totem/addon/mixins/scope/paths.coffee",
                                                    "targetPath": "totem/addon/mixins/scope/paths",
                                                    "pageTitle": "totem/addon/mixins/scope/paths",
                                                    "title": "paths"
                                                },
                                                "depth": 5,
                                                "outline": [
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 2,
                                                            "title": "#",
                                                            "slug": ""
                                                        },
                                                        "depth": 2,
                                                        "children": [
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 3,
                                                                    "title": "Current path and ids.",
                                                                    "slug": "current-path-and-ids"
                                                                },
                                                                "depth": 3
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 2,
                                                            "title": "#",
                                                            "slug": ""
                                                        },
                                                        "depth": 2
                                                    },
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 2,
                                                            "title": "#",
                                                            "slug": ""
                                                        },
                                                        "depth": 2,
                                                        "children": [
                                                            {
                                                                "type": "heading",
                                                                "data": {
                                                                    "level": 3,
                                                                    "title": "User convience functions.",
                                                                    "slug": "user-convience-functions"
                                                                },
                                                                "depth": 3
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "heading",
                                                        "data": {
                                                            "level": 2,
                                                            "title": "#",
                                                            "slug": ""
                                                        },
                                                        "depth": 2
                                                    }
                                                ]
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/mixins/scope/record_helpers.coffee",
                                                    "projectPath": "totem/addon/mixins/scope/record_helpers.coffee",
                                                    "targetPath": "totem/addon/mixins/scope/record_helpers",
                                                    "pageTitle": "totem/addon/mixins/scope/record_helpers",
                                                    "title": "record_helpers"
                                                },
                                                "depth": 5,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/mixins/scope/view_query.coffee",
                                                    "projectPath": "totem/addon/mixins/scope/view_query.coffee",
                                                    "targetPath": "totem/addon/mixins/scope/view_query",
                                                    "pageTitle": "totem/addon/mixins/scope/view_query",
                                                    "title": "view_query"
                                                },
                                                "depth": 5,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/mixins/scope/view_query_ids.coffee",
                                                    "projectPath": "totem/addon/mixins/scope/view_query_ids.coffee",
                                                    "targetPath": "totem/addon/mixins/scope/view_query_ids",
                                                    "pageTitle": "totem/addon/mixins/scope/view_query_ids",
                                                    "title": "view_query_ids"
                                                },
                                                "depth": 5,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/mixins/scope/viewonly.coffee",
                                                    "projectPath": "totem/addon/mixins/scope/viewonly.coffee",
                                                    "targetPath": "totem/addon/mixins/scope/viewonly",
                                                    "pageTitle": "totem/addon/mixins/scope/viewonly",
                                                    "title": "viewonly"
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
                                            "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/mixins/select_text.coffee",
                                            "projectPath": "totem/addon/mixins/select_text.coffee",
                                            "targetPath": "totem/addon/mixins/select_text",
                                            "pageTitle": "totem/addon/mixins/select_text",
                                            "title": "select_text"
                                        },
                                        "depth": 4,
                                        "outline": []
                                    },
                                    {
                                        "type": "folder",
                                        "data": {
                                            "path": "totem/addon/mixins/util",
                                            "title": "util"
                                        },
                                        "depth": 4,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/mixins/util/array.coffee",
                                                    "projectPath": "totem/addon/mixins/util/array.coffee",
                                                    "targetPath": "totem/addon/mixins/util/array",
                                                    "pageTitle": "totem/addon/mixins/util/array",
                                                    "title": "array"
                                                },
                                                "depth": 5,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/mixins/util/base.coffee",
                                                    "projectPath": "totem/addon/mixins/util/base.coffee",
                                                    "targetPath": "totem/addon/mixins/util/base",
                                                    "pageTitle": "totem/addon/mixins/util/base",
                                                    "title": "base"
                                                },
                                                "depth": 5,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/mixins/util/console.coffee",
                                                    "projectPath": "totem/addon/mixins/util/console.coffee",
                                                    "targetPath": "totem/addon/mixins/util/console",
                                                    "pageTitle": "totem/addon/mixins/util/console",
                                                    "title": "console"
                                                },
                                                "depth": 5,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/mixins/util/date_time.coffee",
                                                    "projectPath": "totem/addon/mixins/util/date_time.coffee",
                                                    "targetPath": "totem/addon/mixins/util/date_time",
                                                    "pageTitle": "totem/addon/mixins/util/date_time",
                                                    "title": "date_time"
                                                },
                                                "depth": 5,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/mixins/util/hash.coffee",
                                                    "projectPath": "totem/addon/mixins/util/hash.coffee",
                                                    "targetPath": "totem/addon/mixins/util/hash",
                                                    "pageTitle": "totem/addon/mixins/util/hash",
                                                    "title": "hash"
                                                },
                                                "depth": 5,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/mixins/util/is.coffee",
                                                    "projectPath": "totem/addon/mixins/util/is.coffee",
                                                    "targetPath": "totem/addon/mixins/util/is",
                                                    "pageTitle": "totem/addon/mixins/util/is",
                                                    "title": "is"
                                                },
                                                "depth": 5,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/mixins/util/module.coffee",
                                                    "projectPath": "totem/addon/mixins/util/module.coffee",
                                                    "targetPath": "totem/addon/mixins/util/module",
                                                    "pageTitle": "totem/addon/mixins/util/module",
                                                    "title": "module"
                                                },
                                                "depth": 5,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/mixins/util/number.coffee",
                                                    "projectPath": "totem/addon/mixins/util/number.coffee",
                                                    "targetPath": "totem/addon/mixins/util/number",
                                                    "pageTitle": "totem/addon/mixins/util/number",
                                                    "title": "number"
                                                },
                                                "depth": 5,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/mixins/util/object.coffee",
                                                    "projectPath": "totem/addon/mixins/util/object.coffee",
                                                    "targetPath": "totem/addon/mixins/util/object",
                                                    "pageTitle": "totem/addon/mixins/util/object",
                                                    "title": "object"
                                                },
                                                "depth": 5,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/mixins/util/string.coffee",
                                                    "projectPath": "totem/addon/mixins/util/string.coffee",
                                                    "targetPath": "totem/addon/mixins/util/string",
                                                    "pageTitle": "totem/addon/mixins/util/string",
                                                    "title": "string"
                                                },
                                                "depth": 5,
                                                "outline": []
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
                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/ns.coffee",
                                    "projectPath": "totem/addon/ns.coffee",
                                    "targetPath": "totem/addon/ns",
                                    "pageTitle": "totem/addon/ns",
                                    "title": "ns"
                                },
                                "depth": 3,
                                "outline": [
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 1,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 1
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 1,
                                            "title": "### Helpers.",
                                            "slug": "-helpers"
                                        },
                                        "depth": 1
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 1,
                                            "title": "#",
                                            "slug": ""
                                        },
                                        "depth": 1
                                    }
                                ]
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
                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/scope.coffee",
                                    "projectPath": "totem/addon/scope.coffee",
                                    "targetPath": "totem/addon/scope",
                                    "pageTitle": "totem/addon/scope",
                                    "title": "scope"
                                },
                                "depth": 3,
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
                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/timer.coffee",
                                    "projectPath": "totem/addon/timer.coffee",
                                    "targetPath": "totem/addon/timer",
                                    "pageTitle": "totem/addon/timer",
                                    "title": "timer"
                                },
                                "depth": 3,
                                "outline": [
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 1,
                                            "title": "do something here",
                                            "slug": "do-something-here"
                                        },
                                        "depth": 1
                                    },
                                    {
                                        "type": "heading",
                                        "data": {
                                            "level": 1,
                                            "title": "=&gt; depending on functionality then could cancel or restart e.g. @mytimer.cancel() -or- @mytimer.restart()",
                                            "slug": "gt-depending-on-functionality-then-could-cancel-or-restart-eg-mytimercancel-or-mytimerrestart"
                                        },
                                        "depth": 1
                                    }
                                ]
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
                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/addon/util.coffee",
                                    "projectPath": "totem/addon/util.coffee",
                                    "targetPath": "totem/addon/util",
                                    "pageTitle": "totem/addon/util",
                                    "title": "util"
                                },
                                "depth": 3,
                                "outline": []
                            }
                        ]
                    },
                    {
                        "type": "folder",
                        "data": {
                            "path": "totem/app",
                            "title": "app"
                        },
                        "depth": 2,
                        "children": [
                            {
                                "type": "folder",
                                "data": {
                                    "path": "totem/app/initializers",
                                    "title": "initializers"
                                },
                                "depth": 3,
                                "children": [
                                    {
                                        "type": "folder",
                                        "data": {
                                            "path": "totem/app/initializers/totem",
                                            "title": "totem"
                                        },
                                        "depth": 4,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/app/initializers/totem/totem.coffee",
                                                    "projectPath": "totem/app/initializers/totem/totem.coffee",
                                                    "targetPath": "totem/app/initializers/totem/totem",
                                                    "pageTitle": "totem/app/initializers/totem/totem",
                                                    "title": "totem"
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
                                    "path": "totem/app/instance-initializers",
                                    "title": "instance-initializers"
                                },
                                "depth": 3,
                                "children": [
                                    {
                                        "type": "folder",
                                        "data": {
                                            "path": "totem/app/instance-initializers/totem",
                                            "title": "totem"
                                        },
                                        "depth": 4,
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
                                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170306-58051-10a6wgr/etotem-client/totem/app/instance-initializers/totem/totem.coffee",
                                                    "projectPath": "totem/app/instance-initializers/totem/totem.coffee",
                                                    "targetPath": "totem/app/instance-initializers/totem/totem",
                                                    "pageTitle": "totem/app/instance-initializers/totem/totem",
                                                    "title": "totem"
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
