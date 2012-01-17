var search_data = {"index":{"longSearchIndex":["lib/routing_filter/adapters/rails_2.rb","lib/routing_filter.rb","routingfilter","routingfilter","routingfilter","routingfilter","routingfilter","routingfilter","routingfilter::chain","routingfilter","routingfilter","routingfilter::chain","object","object","routingfilter","routingfilter","object","routingfilter::filter","routingfilter","routingfilter","routingfilter","routingfilter::extension","routingfilter::extension","routingfilter::locale","routingfilter::pagination","routingfilter::uuid","routingfilter","routingfilter","object","object","object","routingfilter","routingfilter","object","routingfilter::filter","object","object","object","object","object","object","object","object","object","object","routingfilter::locale","routingfilter::locale","routingfilter::locale","routingfilter::locale","routingfilter","routingfilter::extension","routingfilter::filter","object","object","routingfilter::filter","routingfilter::chain","object","object","routingfilter::chain","routingfilter::filter","routingfilter::filter","routingfilter::chain","object","files/changelog_md.html","files/mit-license.html","files/readme_markdown.html","files/lib/routing-filter_rb.html","files/lib/routing/filter_rb.html","files/lib/routing_filter_rb.html","files/lib/routing_filter/adapters/rails_2_rb.html","files/lib/routing_filter/adapters/rails_3_rb.html","files/lib/routing_filter/adapters/routers/journey_rb.html","files/lib/routing_filter/adapters/routers/rack_mount_rb.html","files/lib/routing_filter/chain_rb.html","files/lib/routing_filter/filter_rb.html","files/lib/routing_filter/filters/extension_rb.html","files/lib/routing_filter/filters/locale_rb.html","files/lib/routing_filter/filters/pagination_rb.html","files/lib/routing_filter/filters/uuid_rb.html","files/lib/routing_filter/version_rb.html"],"info":[["Object","lib/routing_filter/adapters/rails_2.rb","classes/Object.html"," < Object","",1],["RoutingFilter","lib/routing_filter/chain.rb","classes/RoutingFilter.html"," < ","The Extension filter chops a file extension off from the end of the recognized path. When a path is generated",1],["Chain","RoutingFilter","classes/RoutingFilter/Chain.html"," < Array","",1],["Extension","RoutingFilter","classes/RoutingFilter/Extension.html"," < Filter","",1],["Filter","RoutingFilter","classes/RoutingFilter/Filter.html"," < Object","",1],["Locale","RoutingFilter","classes/RoutingFilter/Locale.html"," < Filter","",1],["Pagination","RoutingFilter","classes/RoutingFilter/Pagination.html"," < Filter","",1],["Uuid","RoutingFilter","classes/RoutingFilter/Uuid.html"," < Filter","",1],["<<","RoutingFilter::Chain","classes/RoutingFilter/Chain.html#M000018","(filter)","",2],["active=","RoutingFilter","classes/RoutingFilter.html#M000053","(active)","",2],["active?","RoutingFilter","classes/RoutingFilter.html#M000054","()","",2],["active?","RoutingFilter::Chain","classes/RoutingFilter/Chain.html#M000022","()","",2],["add_filters","Object","classes/Object.html#M000003","(*names)","",2],["add_filters","Object","classes/Object.html#M000010","(*names)","",2],["append_extension!","RoutingFilter","classes/RoutingFilter.html#M000034","(url)","",2],["append_extension?","RoutingFilter","classes/RoutingFilter.html#M000032","(url)","",2],["append_page?","Object","classes/Object.html#M000047","(page)","",2],["append_segment!","RoutingFilter::Filter","classes/RoutingFilter/Filter.html#M000033","(result, segment)","",2],["around_generate","RoutingFilter","classes/RoutingFilter.html#M000045","(*args, &block)","",2],["around_generate","RoutingFilter","classes/RoutingFilter.html#M000051","(params, &block)","",2],["around_generate","RoutingFilter","classes/RoutingFilter.html#M000044","(params, &block)","",2],["around_generate","RoutingFilter::Extension","classes/RoutingFilter/Extension.html#M000030","(params, &block)","",2],["around_recognize","RoutingFilter::Extension","classes/RoutingFilter/Extension.html#M000026","(path, env, &block)","",2],["around_recognize","RoutingFilter::Locale","classes/RoutingFilter/Locale.html#M000043","(path, env, &block)","",2],["around_recognize","RoutingFilter::Pagination","classes/RoutingFilter/Pagination.html#M000038","(path, env, &block)","",2],["around_recognize","RoutingFilter::Uuid","classes/RoutingFilter/Uuid.html#M000050","(path, env, &block)","",2],["blank?","RoutingFilter","classes/RoutingFilter.html#M000035","(url)","",2],["build","RoutingFilter","classes/RoutingFilter.html#M000052","(name, options)","",2],["clear_with_filtering!","Object","classes/Object.html#M000006","()","",2],["clear_with_filtering!","Object","classes/Object.html#M000012","()","",2],["default_locale?","Object","classes/Object.html#M000048","(locale)","",2],["excluded?","RoutingFilter","classes/RoutingFilter.html#M000036","(url)","",2],["extract_extension!","RoutingFilter","classes/RoutingFilter.html#M000031","(path)","",2],["extract_request_environment","Object","classes/Object.html#M000007","(request)","",2],["extract_segment!","RoutingFilter::Filter","classes/RoutingFilter/Filter.html#M000028","(pattern, path)","",2],["filter","Object","classes/Object.html#M000008","(*args)","",2],["filter","Object","classes/Object.html#M000000","(*args)","",2],["filters","Object","classes/Object.html#M000015","()","",2],["filters","Object","classes/Object.html#M000013","()","",2],["filters","Object","classes/Object.html#M000002","()","",2],["filters","Object","classes/Object.html#M000009","()","",2],["find_routes_with_filtering","Object","classes/Object.html#M000014","(env)","",2],["generate_optimisation_block_with_filtering","Object","classes/Object.html#M000001","(*args)","gosh. monkey engineering optimization code ",2],["generate_with_filtering","Object","classes/Object.html#M000005","(*args)","",2],["generate_with_filtering","Object","classes/Object.html#M000011","(options, recall = {}, extras = false)","def recognize_path_with_filtering(path, env = {}) @set.filters.run(:around_recognize, path.dup, env,",2],["include_default_locale?","RoutingFilter::Locale","classes/RoutingFilter/Locale.html#M000039","()","",2],["locales","RoutingFilter::Locale","classes/RoutingFilter/Locale.html#M000040","()","",2],["locales=","RoutingFilter::Locale","classes/RoutingFilter/Locale.html#M000041","(locales)","",2],["locales_pattern","RoutingFilter::Locale","classes/RoutingFilter/Locale.html#M000042","()","",2],["mime_extension?","RoutingFilter","classes/RoutingFilter.html#M000037","(url)","",2],["new","RoutingFilter::Extension","classes/RoutingFilter/Extension.html#M000025","(*args)","",2],["new","RoutingFilter::Filter","classes/RoutingFilter/Filter.html#M000023","(options = {})","",2],["optimize_recognize_with_filtering!","Object","classes/Object.html#M000016","()","",2],["prepend_locale?","Object","classes/Object.html#M000049","(locale)","",2],["prepend_segment!","RoutingFilter::Filter","classes/RoutingFilter/Filter.html#M000029","(result, segment)","",2],["push","RoutingFilter::Chain","classes/RoutingFilter/Chain.html#M000019","(filter)","Alias for #<<",2],["recognize_path_with_filtering","Object","classes/Object.html#M000004","(path, env = {})","",2],["recognize_with_filtering","Object","classes/Object.html#M000017","(request, &block)","note: if you overly and unnecessarily use blocks in your lowlevel libraries you make it fricking hard",2],["run","RoutingFilter::Chain","classes/RoutingFilter/Chain.html#M000021","(method, *args, &final)","",2],["run","RoutingFilter::Filter","classes/RoutingFilter/Filter.html#M000024","(method, *args, &block)","",2],["run_reverse","RoutingFilter::Filter","classes/RoutingFilter/Filter.html#M000027","(method, *args, &block)","",2],["unshift","RoutingFilter::Chain","classes/RoutingFilter/Chain.html#M000020","(filter)","",2],["valid_locale?","Object","classes/Object.html#M000046","(locale)","",2],["CHANGELOG.md","files/CHANGELOG_md.html","files/CHANGELOG_md.html","","## 0.3.0 (Not yet released)  * Make `routing-filter` compatible with the new journey router in rails",3],["MIT-LICENSE","files/MIT-LICENSE.html","files/MIT-LICENSE.html","","Copyright (c) 2008 Sven Fuchs  Permission is hereby granted, free of charge, to any person obtaining",3],["README.markdown","files/README_markdown.html","files/README_markdown.html","","# Routing Filter  Routing filters wrap around the complex beast that the Rails routing system is to allow",3],["routing-filter.rb","files/lib/routing-filter_rb.html","files/lib/routing-filter_rb.html","","",3],["filter.rb","files/lib/routing/filter_rb.html","files/lib/routing/filter_rb.html","","",3],["routing_filter.rb","files/lib/routing_filter_rb.html","files/lib/routing_filter_rb.html","","",3],["rails_2.rb","files/lib/routing_filter/adapters/rails_2_rb.html","files/lib/routing_filter/adapters/rails_2_rb.html","","",3],["rails_3.rb","files/lib/routing_filter/adapters/rails_3_rb.html","files/lib/routing_filter/adapters/rails_3_rb.html","","",3],["journey.rb","files/lib/routing_filter/adapters/routers/journey_rb.html","files/lib/routing_filter/adapters/routers/journey_rb.html","","",3],["rack_mount.rb","files/lib/routing_filter/adapters/routers/rack_mount_rb.html","files/lib/routing_filter/adapters/routers/rack_mount_rb.html","","",3],["chain.rb","files/lib/routing_filter/chain_rb.html","files/lib/routing_filter/chain_rb.html","","",3],["filter.rb","files/lib/routing_filter/filter_rb.html","files/lib/routing_filter/filter_rb.html","","",3],["extension.rb","files/lib/routing_filter/filters/extension_rb.html","files/lib/routing_filter/filters/extension_rb.html","","The Extension filter chops a file extension off from the end of the recognized path. When a path is generated",3],["locale.rb","files/lib/routing_filter/filters/locale_rb.html","files/lib/routing_filter/filters/locale_rb.html","","The Locale filter extracts segments matching /:locale from the beginning of the recognized path and exposes",3],["pagination.rb","files/lib/routing_filter/filters/pagination_rb.html","files/lib/routing_filter/filters/pagination_rb.html","","The Pagination filter extracts segments matching /page/:page from the end of the recognized url and exposes",3],["uuid.rb","files/lib/routing_filter/filters/uuid_rb.html","files/lib/routing_filter/filters/uuid_rb.html","","The Uuid filter extracts an UUID segment from the beginning of the recognized path and exposes the page",3],["version.rb","files/lib/routing_filter/version_rb.html","files/lib/routing_filter/version_rb.html","","",3]],"searchIndex":["object","routingfilter","chain","extension","filter","locale","pagination","uuid","<<()","active=()","active?()","active?()","add_filters()","add_filters()","append_extension!()","append_extension?()","append_page?()","append_segment!()","around_generate()","around_generate()","around_generate()","around_generate()","around_recognize()","around_recognize()","around_recognize()","around_recognize()","blank?()","build()","clear_with_filtering!()","clear_with_filtering!()","default_locale?()","excluded?()","extract_extension!()","extract_request_environment()","extract_segment!()","filter()","filter()","filters()","filters()","filters()","filters()","find_routes_with_filtering()","generate_optimisation_block_with_filtering()","generate_with_filtering()","generate_with_filtering()","include_default_locale?()","locales()","locales=()","locales_pattern()","mime_extension?()","new()","new()","optimize_recognize_with_filtering!()","prepend_locale?()","prepend_segment!()","push()","recognize_path_with_filtering()","recognize_with_filtering()","run()","run()","run_reverse()","unshift()","valid_locale?()","changelog.md","mit-license","readme.markdown","routing-filter.rb","filter.rb","routing_filter.rb","rails_2.rb","rails_3.rb","journey.rb","rack_mount.rb","chain.rb","filter.rb","extension.rb","locale.rb","pagination.rb","uuid.rb","version.rb"]}}