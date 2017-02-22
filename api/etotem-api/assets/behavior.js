(function() {
  var MAX_FILTER_SIZE, appendSearchNode, buildNav, buildTOCNode, clearFilter, clearHighlight, currentNode$, currentQuery, fileMap, focusCurrentNode, highlightMatch, moveCurrentNode, nav$, searchNodes, searchableNodes, selectNode, selectNodeByDocumentPath, setCurrentNodeExpanded, setTableOfContentsActive, toc$, toggleTableOfContents, visitCurrentNode;

  tableOfContents = [
    {
        "title": "etotem-api",
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
                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170222-48356-26kcfa/etotem-api/README.md",
                    "projectPath": "README.md",
                    "targetPath": "index",
                    "pageTitle": "index",
                    "firstHeader": {
                        "type": "heading",
                        "data": {
                            "level": 1,
                            "title": "etotem-api",
                            "slug": "etotem-api",
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
                            }
                        ]
                    },
                    "title": "etotem-api"
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
                    }
                ]
            },
            {
                "type": "folder",
                "data": {
                    "path": "totem-authentication-session",
                    "title": "totem-authentication-session"
                },
                "depth": 1,
                "children": [
                    {
                        "type": "folder",
                        "data": {
                            "path": "totem-authentication-session/lib",
                            "title": "lib"
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
                                            ".gemspec"
                                        ],
                                        "pygmentsLexer": "ruby",
                                        "singleLineComment": [
                                            "#"
                                        ],
                                        "ignorePrefix": "}",
                                        "foldPrefix": "^",
                                        "name": "Ruby"
                                    },
                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170222-48356-26kcfa/etotem-api/totem-authentication-session/lib/totem-authentication-session.rb",
                                    "projectPath": "totem-authentication-session/lib/totem-authentication-session.rb",
                                    "targetPath": "totem-authentication-session/lib/totem-authentication-session",
                                    "pageTitle": "totem-authentication-session/lib/totem-authentication-session",
                                    "title": "totem-authentication-session"
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
                    "path": "totem-authorization-cancan",
                    "title": "totem-authorization-cancan"
                },
                "depth": 1,
                "children": [
                    {
                        "type": "folder",
                        "data": {
                            "path": "totem-authorization-cancan/lib",
                            "title": "lib"
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
                                            ".gemspec"
                                        ],
                                        "pygmentsLexer": "ruby",
                                        "singleLineComment": [
                                            "#"
                                        ],
                                        "ignorePrefix": "}",
                                        "foldPrefix": "^",
                                        "name": "Ruby"
                                    },
                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170222-48356-26kcfa/etotem-api/totem-authorization-cancan/lib/totem-authorization-cancan.rb",
                                    "projectPath": "totem-authorization-cancan/lib/totem-authorization-cancan.rb",
                                    "targetPath": "totem-authorization-cancan/lib/totem-authorization-cancan",
                                    "pageTitle": "totem-authorization-cancan/lib/totem-authorization-cancan",
                                    "title": "totem-authorization-cancan"
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
                    "path": "totem-core",
                    "title": "totem-core"
                },
                "depth": 1,
                "children": [
                    {
                        "type": "folder",
                        "data": {
                            "path": "totem-core/lib",
                            "title": "lib"
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
                                            ".gemspec"
                                        ],
                                        "pygmentsLexer": "ruby",
                                        "singleLineComment": [
                                            "#"
                                        ],
                                        "ignorePrefix": "}",
                                        "foldPrefix": "^",
                                        "name": "Ruby"
                                    },
                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170222-48356-26kcfa/etotem-api/totem-core/lib/totem-core.rb",
                                    "projectPath": "totem-core/lib/totem-core.rb",
                                    "targetPath": "totem-core/lib/totem-core",
                                    "pageTitle": "totem-core/lib/totem-core",
                                    "title": "totem-core"
                                },
                                "depth": 3,
                                "outline": []
                            }
                        ]
                    },
                    {
                        "type": "folder",
                        "data": {
                            "path": "totem-core/test",
                            "title": "test"
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
                                            ".gemspec"
                                        ],
                                        "pygmentsLexer": "ruby",
                                        "singleLineComment": [
                                            "#"
                                        ],
                                        "ignorePrefix": "}",
                                        "foldPrefix": "^",
                                        "name": "Ruby"
                                    },
                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170222-48356-26kcfa/etotem-api/totem-core/test/test_helper.rb",
                                    "projectPath": "totem-core/test/test_helper.rb",
                                    "targetPath": "totem-core/test/test_helper",
                                    "pageTitle": "totem-core/test/test_helper",
                                    "title": "test_helper"
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
                    "path": "totem-db-migrate",
                    "title": "totem-db-migrate"
                },
                "depth": 1,
                "children": [
                    {
                        "type": "folder",
                        "data": {
                            "path": "totem-db-migrate/lib",
                            "title": "lib"
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
                                            ".gemspec"
                                        ],
                                        "pygmentsLexer": "ruby",
                                        "singleLineComment": [
                                            "#"
                                        ],
                                        "ignorePrefix": "}",
                                        "foldPrefix": "^",
                                        "name": "Ruby"
                                    },
                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170222-48356-26kcfa/etotem-api/totem-db-migrate/lib/totem-db-migrate.rb",
                                    "projectPath": "totem-db-migrate/lib/totem-db-migrate.rb",
                                    "targetPath": "totem-db-migrate/lib/totem-db-migrate",
                                    "pageTitle": "totem-db-migrate/lib/totem-db-migrate",
                                    "title": "totem-db-migrate"
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
                    "path": "totem-performance",
                    "title": "totem-performance"
                },
                "depth": 1,
                "children": [
                    {
                        "type": "folder",
                        "data": {
                            "path": "totem-performance/lib",
                            "title": "lib"
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
                                            ".gemspec"
                                        ],
                                        "pygmentsLexer": "ruby",
                                        "singleLineComment": [
                                            "#"
                                        ],
                                        "ignorePrefix": "}",
                                        "foldPrefix": "^",
                                        "name": "Ruby"
                                    },
                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170222-48356-26kcfa/etotem-api/totem-performance/lib/totem-performance.rb",
                                    "projectPath": "totem-performance/lib/totem-performance.rb",
                                    "targetPath": "totem-performance/lib/totem-performance",
                                    "pageTitle": "totem-performance/lib/totem-performance",
                                    "title": "totem-performance"
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
                    "path": "totem-pub-sub",
                    "title": "totem-pub-sub"
                },
                "depth": 1,
                "children": [
                    {
                        "type": "folder",
                        "data": {
                            "path": "totem-pub-sub/lib",
                            "title": "lib"
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
                                            ".gemspec"
                                        ],
                                        "pygmentsLexer": "ruby",
                                        "singleLineComment": [
                                            "#"
                                        ],
                                        "ignorePrefix": "}",
                                        "foldPrefix": "^",
                                        "name": "Ruby"
                                    },
                                    "sourcePath": "/home/wizzy/Desktop/ember20/apps-rails/totem-docs/d20170222-48356-26kcfa/etotem-api/totem-pub-sub/lib/totem-pub-sub.rb",
                                    "projectPath": "totem-pub-sub/lib/totem-pub-sub.rb",
                                    "targetPath": "totem-pub-sub/lib/totem-pub-sub",
                                    "pageTitle": "totem-pub-sub/lib/totem-pub-sub",
                                    "title": "totem-pub-sub"
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
