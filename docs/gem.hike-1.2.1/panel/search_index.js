var search_data = {"index":{"info":[["Hike","lib/hike/index.rb","classes/Hike.html"," < ","",1],["Extensions","Hike","classes/Hike/Extensions.html"," < NormalizedArray","`Extensions` is an internal collection for tracking extension names. ",1],["Index","Hike","classes/Hike/Index.html"," < Object","`Index` is an internal cached variant of `Trail`. It assumes the file system does not change between",1],["NormalizedArray","Hike","classes/Hike/NormalizedArray.html"," < Array","`NormalizedArray` is an internal abstract wrapper class that calls a callback `normalize_element` anytime",1],["Paths","Hike","classes/Hike/Paths.html"," < NormalizedArray","`Paths` is an internal collection for tracking path strings. ",1],["Trail","Hike","classes/Hike/Trail.html"," < Object","`Trail` is the public container class for holding paths and extensions. ",1],["<<","Hike::NormalizedArray","classes/Hike/NormalizedArray.html#M000008","(element)","",2],["[]=","Hike::NormalizedArray","classes/Hike/NormalizedArray.html#M000006","(*args)","",2],["alias_extension","Hike::Trail","classes/Hike/Trail.html#M000041","(new_extension, old_extension)","Alias `new_extension` to `old_extension` ",2],["append_extension","Hike::Trail","classes/Hike/Trail.html#M000039","(*extensions)","Alias for #append_extensions",2],["append_extensions","Hike::Trail","classes/Hike/Trail.html#M000038","(*extensions)","Append `extension` to `Extensions` collection ",2],["append_path","Hike::Trail","classes/Hike/Trail.html#M000034","(*paths)","Alias for #append_paths",2],["append_paths","Hike::Trail","classes/Hike/Trail.html#M000033","(*paths)","Append `path` to `Paths` collection ",2],["build_pattern_for","Hike::Index","classes/Hike/Index.html#M000026","(basename)","Returns a `Regexp` that matches the allowed extensions. pattern_for(\"index.html\") #=> /^index(.html|.htm)(.builder|.erb)*$/",2],["collect!","Hike::NormalizedArray","classes/Hike/NormalizedArray.html#M000009","()","",2],["entries","Hike::Index","classes/Hike/Index.html#M000007","(path)","A cached version of `Dir.entries` that filters out `.` files and `~` swap files. Returns an empty `Array`",2],["entries","Hike::Trail","classes/Hike/Trail.html#M000045","(*args)","`Trail#entries` is equivalent to `Dir#entries`. It is not recommend to use this method for general purposes.",2],["extract_options!","Hike::Index","classes/Hike/Index.html#M000015","(arguments)","",2],["find","Hike::Index","classes/Hike/Index.html#M000004","(*logical_paths, &block)","The real implementation of `find`. `Trail#find` generates a one time index and delegates here. See `Trail#find`",2],["find","Hike::Trail","classes/Hike/Trail.html#M000043","(*args, &block)","`Trail#find` returns a the expand path for a logical path in the path collection. trail = Hike::Trail.new",2],["find_aliases_for","Hike::Index","classes/Hike/Index.html#M000028","(extension)","",2],["find_in_base_path","Hike::Index","classes/Hike/Index.html#M000020","(logical_path, base_path, &block)","Finds relative logical path, `../test/test_trail`. Requires a `base_path` for reference. ",2],["find_in_paths","Hike::Index","classes/Hike/Index.html#M000019","(logical_path, &block)","Finds logical path across all `paths` ",2],["index","Hike::Index","classes/Hike/Index.html#M000003","()","`Index#index` returns `self` to be compatable with the `Trail` interface. ",2],["index","Hike::Trail","classes/Hike/Trail.html#M000044","()","`Trail#index` returns an `Index` object that has the same interface as `Trail`. An `Index` is a cached",2],["insert","Hike::NormalizedArray","classes/Hike/NormalizedArray.html#M000011","(index, *elements)","",2],["map!","Hike::NormalizedArray","classes/Hike/NormalizedArray.html#M000010","()","Alias for #collect!",2],["match","Hike::Index","classes/Hike/Index.html#M000021","(dirname, basename)","Checks if the path is actually on the file system and performs any syscalls if necessary. ",2],["new","Hike::Index","classes/Hike/Index.html#M000000","(root, paths, extensions, aliases)","`Index.new` is an internal method. Instead of constructing it directly, create a `Trail` and call `Trail#index`.",2],["new","Hike::NormalizedArray","classes/Hike/NormalizedArray.html#M000005","()","",2],["new","Hike::Paths","classes/Hike/Paths.html#M000024","(root = \".\")","",2],["new","Hike::Trail","classes/Hike/Trail.html#M000029","(root = \".\")","A Trail accepts an optional root path that defaults to your current working directory. Any relative paths",2],["normalize_element","Hike::Extensions","classes/Hike/Extensions.html#M000001","(extension)","Extensions added to this array are normalized with a leading `.`. extensions << \"js\" extensions << \".css\"",2],["normalize_element","Hike::Paths","classes/Hike/Paths.html#M000025","(path)","Relative paths added to this array are expanded relative to `@root`. paths = Paths.new(\"/usr/local\")",2],["normalize_elements","Hike::NormalizedArray","classes/Hike/NormalizedArray.html#M000017","(elements)","",2],["normalize_extension","Hike::Trail","classes/Hike/Trail.html#M000047","(extension)","",2],["paths_contain?","Hike::Index","classes/Hike/Index.html#M000022","(dirname)","Returns true if `dirname` is a subdirectory of any of the `paths` ",2],["pattern_for","Hike::Index","classes/Hike/Index.html#M000023","(basename)","Cache results of `build_pattern_for` ",2],["prepend_extension","Hike::Trail","classes/Hike/Trail.html#M000037","(*extensions)","Alias for #prepend_extensions",2],["prepend_extensions","Hike::Trail","classes/Hike/Trail.html#M000036","(*extensions)","Prepend `extension` to `Extensions` collection ",2],["prepend_path","Hike::Trail","classes/Hike/Trail.html#M000032","(*paths)","Alias for #prepend_paths",2],["prepend_paths","Hike::Trail","classes/Hike/Trail.html#M000031","(*paths)","Prepend `path` to `Paths` collection ",2],["push","Hike::NormalizedArray","classes/Hike/NormalizedArray.html#M000012","(*elements)","",2],["relative?","Hike::Index","classes/Hike/Index.html#M000018","(logical_path)","",2],["remove_extension","Hike::Trail","classes/Hike/Trail.html#M000040","(extension)","Remove `extension` from `Extensions` collection ",2],["remove_path","Hike::Trail","classes/Hike/Trail.html#M000035","(path)","Remove `path` from `Paths` collection ",2],["replace","Hike::NormalizedArray","classes/Hike/NormalizedArray.html#M000013","(elements)","",2],["root","Hike::Index","classes/Hike/Index.html#M000002","()","`Index#root` returns root path as a `String`. This attribute is immutable. ",2],["root","Hike::Trail","classes/Hike/Trail.html#M000030","()","`Trail#root` returns root path as a `String`. This attribute is immutable. ",2],["sort_matches","Hike::Index","classes/Hike/Index.html#M000027","(matches, basename)","Sorts candidate matches by their extension priority. Extensions in the front of the `extensions` carry",2],["stat","Hike::Index","classes/Hike/Index.html#M000014","(path)","A cached version of `File.stat`. Returns nil if the file does not exist. ",2],["stat","Hike::Trail","classes/Hike/Trail.html#M000046","(*args)","`Trail#stat` is equivalent to `File#stat`. It is not recommend to use this method for general purposes.",2],["unalias_extension","Hike::Trail","classes/Hike/Trail.html#M000042","(extension)","Remove the alias for `extension` ",2],["unshift","Hike::NormalizedArray","classes/Hike/NormalizedArray.html#M000016","(*elements)","",2],["LICENSE","files/LICENSE.html","files/LICENSE.html","","Copyright (c) 2011 Sam Stephenson  Permission is hereby granted, free of charge, to any person obtaining",3],["README.md","files/README_md.html","files/README_md.html","","Hike ====  Hike is a Ruby library for finding files in a set of paths. Use it to implement search paths,",3],["hike.rb","files/lib/hike_rb.html","files/lib/hike_rb.html","","",3],["extensions.rb","files/lib/hike/extensions_rb.html","files/lib/hike/extensions_rb.html","","",3],["index.rb","files/lib/hike/index_rb.html","files/lib/hike/index_rb.html","","",3],["normalized_array.rb","files/lib/hike/normalized_array_rb.html","files/lib/hike/normalized_array_rb.html","","",3],["paths.rb","files/lib/hike/paths_rb.html","files/lib/hike/paths_rb.html","","",3],["trail.rb","files/lib/hike/trail_rb.html","files/lib/hike/trail_rb.html","","",3]],"searchIndex":["hike","extensions","index","normalizedarray","paths","trail","<<()","[]=()","alias_extension()","append_extension()","append_extensions()","append_path()","append_paths()","build_pattern_for()","collect!()","entries()","entries()","extract_options!()","find()","find()","find_aliases_for()","find_in_base_path()","find_in_paths()","index()","index()","insert()","map!()","match()","new()","new()","new()","new()","normalize_element()","normalize_element()","normalize_elements()","normalize_extension()","paths_contain?()","pattern_for()","prepend_extension()","prepend_extensions()","prepend_path()","prepend_paths()","push()","relative?()","remove_extension()","remove_path()","replace()","root()","root()","sort_matches()","stat()","stat()","unalias_extension()","unshift()","license","readme.md","hike.rb","extensions.rb","index.rb","normalized_array.rb","paths.rb","trail.rb"],"longSearchIndex":["lib/hike/trail.rb","hike","hike","hike","hike","hike","hike::normalizedarray","hike::normalizedarray","hike::trail","hike::trail","hike::trail","hike::trail","hike::trail","hike::index","hike::normalizedarray","hike::index","hike::trail","hike::index","hike::index","hike::trail","hike::index","hike::index","hike::index","hike::index","hike::trail","hike::normalizedarray","hike::normalizedarray","hike::index","hike::index","hike::normalizedarray","hike::paths","hike::trail","hike::extensions","hike::paths","hike::normalizedarray","hike::trail","hike::index","hike::index","hike::trail","hike::trail","hike::trail","hike::trail","hike::normalizedarray","hike::index","hike::trail","hike::trail","hike::normalizedarray","hike::index","hike::trail","hike::index","hike::index","hike::trail","hike::trail","hike::normalizedarray","files/license.html","files/readme_md.html","files/lib/hike_rb.html","files/lib/hike/extensions_rb.html","files/lib/hike/index_rb.html","files/lib/hike/normalized_array_rb.html","files/lib/hike/paths_rb.html","files/lib/hike/trail_rb.html"]}}