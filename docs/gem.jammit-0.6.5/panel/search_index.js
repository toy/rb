var search_data = {"index":{"info":[["Jammit","lib/jammit/command_line.rb","classes/Jammit.html"," < ","@Jammit@ is the central namespace for all Jammit classes, and provides access to all of the configuration",1],["CommandLine","Jammit","classes/Jammit/CommandLine.html"," < Object","The @CommandLine@ is able to compress, pre-package, and pre-gzip all the assets specified in the configuration",1],["Compressor","Jammit","classes/Jammit/Compressor.html"," < Object","Uses the YUI Compressor or Closure Compiler to compress JavaScript. Always uses YUI to compress CSS (Which",1],["Controller","Jammit","classes/Jammit/Controller.html"," < ActionController::Base","The JammitController is added to your Rails application when the Gem is loaded. It takes responsibility",1],["DeprecationError","Jammit","classes/Jammit/DeprecationError.html"," < StandardError","Jammit raises a DeprecationError if you try to use an outdated feature. ",1],["Helper","Jammit","classes/Jammit/Helper.html"," < ","The Jammit::Helper module, which is made available to every view, provides helpers for writing out HTML",1],["MissingConfiguration","Jammit","classes/Jammit/MissingConfiguration.html"," < NameError","Jammit raises a MissingConfiguration exception when you try to load the configuration of an assets.yml",1],["OutputNotWritable","Jammit","classes/Jammit/OutputNotWritable.html"," < StandardError","Jammit raises an OutputNotWritable exception if the output directory for cached packages is locked. ",1],["PackageNotFound","Jammit","classes/Jammit/PackageNotFound.html"," < NameError","Jammit raises a @PackageNotFound@ exception when a non-existent package is requested by a browser --",1],["Packager","Jammit","classes/Jammit/Packager.html"," < Object","The Jammit::Packager resolves the configuration file into lists of real assets that get merged into individual",1],["Railtie","Jammit","classes/Jammit/Railtie.html"," < Rails::Railtie","",1],["Routes","Jammit","classes/Jammit/Routes.html"," < ","Rails 2.x routing module. Rails 3.x routes are in rails/routes.rb. ",1],["Uglifier","Jammit","classes/Jammit/Uglifier.html"," < ::Uglifier","",1],["absolute_path","Jammit::Compressor","classes/Jammit/Compressor.html#M000018","(asset_pathname, css_pathname)","Get the site-absolute public path for an asset file path that may or may not be relative, given the path",2],["asset_url","Jammit","classes/Jammit.html#M000056","(package, extension, suffix=nil, mtime=nil)","Generates the server-absolute URL to an asset package. ",2],["cache","Jammit::Packager","classes/Jammit/Packager.html#M000040","(package, extension, contents, output_dir, suffix=nil, mtime=nil)","Caches a single prebuilt asset package and gzips it at the highest compression level. Ensures that the",2],["cache_package","Jammit::Controller","classes/Jammit/Controller.html#M000011","()","Tells the Jammit::Packager to cache and gzip an asset package. We can't just use the built-in \"cache_page\"",2],["cacheable","Jammit::Packager","classes/Jammit/Packager.html#M000049","(extension, output_dir)","Return a list of all of the packages that should be cached. If \"force\" is true, this is all of them --",2],["check_for_deprecations","Jammit","classes/Jammit.html#M000066","()","Jammit 0.5+ no longer supports separate template packages. ",2],["check_java_version","Jammit","classes/Jammit.html#M000064","()","The YUI Compressor requires Java > 1.4, and Closure requires Java > 1.6. ",2],["compile_jst","Jammit::Compressor","classes/Jammit/Compressor.html#M000006","(paths)","Compiles a single JST file by writing out a javascript that adds template properties to a top-level template",2],["compress_css","Jammit::Compressor","classes/Jammit/Compressor.html#M000005","(paths, variant=nil, asset_url=nil)","Concatenate and compress a list of CSS stylesheets. When compressing a :datauri or :mhtml variant, post-processes",2],["compress_js","Jammit::Compressor","classes/Jammit/Compressor.html#M000004","(paths)","Concatenate together a list of JavaScript paths, and pass them through the YUI Compressor (with munging",2],["concatenate","Jammit::Compressor","classes/Jammit/Compressor.html#M000026","(paths)","Concatenate together a list of asset files. ",2],["concatenate_and_tag_assets","Jammit::Compressor","classes/Jammit/Compressor.html#M000010","(paths, variant=nil)","In order to support embedded assets from relative paths, we need to expand the paths before contatenating",2],["construct_asset_path","Jammit::Compressor","classes/Jammit/Compressor.html#M000016","(asset_path, css_path, variant)","Return a rewritten asset URL for a new stylesheet -- the asset should be tagged for embedding if embeddable,",2],["create_packages","Jammit::Packager","classes/Jammit/Packager.html#M000050","(config)","Compiles the list of assets that goes into each package. Runs an ordered list of Dir.globs, taking the",2],["disable_compression","Jammit","classes/Jammit.html#M000065","()","If we don't have a working Java VM, then disable asset compression and complain loudly. ",2],["draw","Jammit::Routes","classes/Jammit/Routes.html#M000039","(map)","Jammit uses a single route in order to slow down Rails' routing speed by the absolute minimum. In your",2],["embeddable?","Jammit::Compressor","classes/Jammit/Compressor.html#M000023","(asset_path, variant)","An asset is valid for embedding if it exists, is less than 32K, and is stored somewhere inside of a folder",2],["embedded_image_stylesheets","Jammit::Helper","classes/Jammit/Helper.html#M000035","(packages, options)","HTML tags for the 'datauri', and 'mhtml' versions of the packaged stylesheets, using conditional comments",2],["encoded_contents","Jammit::Compressor","classes/Jammit/Compressor.html#M000024","(asset_path)","Return the Base64-encoded contents of an asset on a single line. ",2],["ensure_configuration_file","Jammit::CommandLine","classes/Jammit/CommandLine.html#M000001","()","Make sure that we have a readable configuration file. The @jammit@ command can't run without one. ",2],["filename","Jammit","classes/Jammit.html#M000055","(package, extension, suffix=nil)","Generate the base filename for a version of a given package. ",2],["find_base_path","Jammit::Compressor","classes/Jammit/Compressor.html#M000007","(paths)","Given a set of paths, find a common prefix path. ",2],["generate_stylesheets","Jammit::Controller","classes/Jammit/Controller.html#M000015","()","If we're generating MHTML/CSS, return a stylesheet with the absolute request URL to the client, and cache",2],["glob_files","Jammit::Packager","classes/Jammit/Packager.html#M000046","(glob)","Absolute globs are absolute -- relative globs are relative to ASSET_ROOT. Print a warning if no files",2],["html_safe","Jammit::Helper","classes/Jammit/Helper.html#M000032","(string)","",2],["include_javascripts","Jammit::Helper","classes/Jammit/Helper.html#M000029","(*packages)","Writes out the URL to the bundled and compressed javascript package, except in development, where it",2],["include_stylesheets","Jammit::Helper","classes/Jammit/Helper.html#M000028","(*packages)","If embed_assets is turned on, writes out links to the Data-URI and MHTML versions of the stylesheet package,",2],["include_templates","Jammit::Helper","classes/Jammit/Helper.html#M000030","(*packages)","Writes out the URL to the concatenated and compiled JST file -- we always have to pre-process it, even",2],["individual_stylesheets","Jammit::Helper","classes/Jammit/Helper.html#M000033","(packages, options)","HTML tags, in order, for all of the individual stylesheets. ",2],["individual_urls","Jammit::Packager","classes/Jammit/Packager.html#M000041","(package, extension)","Get the list of individual assets for a package. ",2],["latest_mtime","Jammit::Packager","classes/Jammit/Packager.html#M000048","(paths)","Get the latest mtime of a list of files (plus the config path). ",2],["load_configuration","Jammit","classes/Jammit.html#M000052","(config_path, soft=false)","Load the complete asset configuration from the specified @config_path@. If we're loading softly, don't",2],["mime_type","Jammit::Compressor","classes/Jammit/Compressor.html#M000025","(asset_path)","Grab the mime-type of an asset, by filename. ",2],["new","Jammit::CommandLine","classes/Jammit/CommandLine.html#M000000","()","The @Jammit::CommandLine@ runs from the contents of @ARGV@. ",2],["new","Jammit::Compressor","classes/Jammit/Compressor.html#M000003","()","The css compressor is always the YUI Compressor. JS compression can be provided with YUI Compressor,",2],["new","Jammit::Packager","classes/Jammit/Packager.html#M000037","()","Creating a new Packager will rebuild the list of assets from the Jammit.configuration. When assets.yml",2],["not_found","Jammit::Packager","classes/Jammit/Packager.html#M000051","(package, extension)","Raise a PackageNotFound exception for missing packages... ",2],["pack_javascripts","Jammit::Packager","classes/Jammit/Packager.html#M000043","(package)","Return the compressed contents of a javascript package. ",2],["pack_stylesheets","Jammit::Packager","classes/Jammit/Packager.html#M000042","(package, variant=nil, asset_url=nil)","Return the compressed contents of a stylesheet package. ",2],["pack_templates","Jammit::Packager","classes/Jammit/Packager.html#M000044","(package)","Return the compiled contents of a JST package. ",2],["package","Jammit::Controller","classes/Jammit/Controller.html#M000008","()","The \"package\" action receives all requests for asset packages that haven't yet been cached. The package",2],["package!","Jammit","classes/Jammit.html#M000057","(options={})","Convenience method for packaging up Jammit, using the default options. ",2],["package_for","Jammit::Packager","classes/Jammit/Packager.html#M000045","(package, extension)","Look up a package asset list by name, raising an exception if the package has gone missing. ",2],["package_not_found","Jammit::Controller","classes/Jammit/Controller.html#M000019","()","Render the 404 page, if one exists, for any packages that don't. ",2],["packaged_stylesheets","Jammit::Helper","classes/Jammit/Helper.html#M000034","(packages, options)","HTML tags for the stylesheet packages. ",2],["packager","Jammit","classes/Jammit.html#M000054","()","Keep a global (thread-local) reference to a @Jammit::Packager@, to avoid recomputing asset lists unnecessarily.",2],["parse_options","Jammit::CommandLine","classes/Jammit/CommandLine.html#M000002","()","Uses @OptionParser@ to grab the options: *--output*, *--config*, and *--base-url*... ",2],["parse_request","Jammit::Controller","classes/Jammit/Controller.html#M000017","()","Extracts the package name, extension (:css, :js), and variant (:datauri, :mhtml) from the incoming URL.",2],["path_to_url","Jammit::Packager","classes/Jammit/Packager.html#M000047","()","In Rails, the difference between a path and an asset URL is \"public\".     ",2],["precache_all","Jammit::Packager","classes/Jammit/Packager.html#M000038","(output_dir=nil, base_url=nil)","Ask the packager to precache all defined assets, along with their gzip'd versions. In order to prebuild",2],["prefix_url","Jammit::Controller","classes/Jammit/Controller.html#M000014","(path)","Generate the complete, timestamped, MHTML url -- if we're rendering a dynamic MHTML package, we'll need",2],["rails_asset_id","Jammit::Compressor","classes/Jammit/Compressor.html#M000022","(path)","Similar to the AssetTagHelper's method of the same name, this will determine the correct asset id for",2],["read_binary_file","Jammit::Compressor","classes/Jammit/Compressor.html#M000027","(path)","`File.read`, but in \"binary\" mode. ",2],["relative_path","Jammit::Compressor","classes/Jammit/Compressor.html#M000020","(absolute_path)","CSS assets that are referenced by relative paths, and are *not* being embedded, must be rewritten relative",2],["reload!","Jammit","classes/Jammit.html#M000053","()","Force a reload by resetting the Packager and reloading the configuration. In development, this will be",2],["rewrite_asset_path","Jammit::Compressor","classes/Jammit/Compressor.html#M000021","(path, file_path)","Similar to the AssetTagHelper's method of the same name, this will append the RAILS_ASSET_ID cache-buster",2],["set_javascript_compressor","Jammit","classes/Jammit.html#M000059","(value)","Ensure that the JavaScript compressor is a valid choice. ",2],["set_package_assets","Jammit","classes/Jammit.html#M000060","(value)","Turn asset packaging on or off, depending on configuration and environment. ",2],["set_public_root","Jammit","classes/Jammit.html#M000058","(public_root=nil)","Allows command-line definition of `PUBLIC_ROOT`, for those using Jammit outside of Rails. ",2],["set_template_extension","Jammit","classes/Jammit.html#M000063","(value)","Set the extension for JS templates. ",2],["set_template_function","Jammit","classes/Jammit.html#M000061","(value)","Assign the JST template function, unless explicitly turned off. ",2],["set_template_namespace","Jammit","classes/Jammit.html#M000062","(value)","Set the root JS object in which to stash all compiled JST. ",2],["should_package?","Jammit::Helper","classes/Jammit/Helper.html#M000031","()","",2],["symbolize_keys","Jammit","classes/Jammit.html#M000068","(hash)","Clone of active_support's symbolize_keys, so that we don't have to depend on active_support in any fashion.",2],["tags_with_options","Jammit::Helper","classes/Jammit/Helper.html#M000036","(packages, options)","Generate the stylesheet tags for a batch of packages, with options, by yielding each package to a block.",2],["template_name","Jammit::Compressor","classes/Jammit/Compressor.html#M000009","(path, base_path)","Determine the name of a JS template. If there's a common base path, use the namespaced prefix. Otherwise,",2],["warn","Jammit","classes/Jammit.html#M000067","(message)","",2],["with_data_uris","Jammit::Compressor","classes/Jammit/Compressor.html#M000012","(css)","Re-write all enabled asset URLs in a stylesheet with their corresponding Data-URI Base-64 encoded asset",2],["with_mhtml","Jammit::Compressor","classes/Jammit/Compressor.html#M000013","(css, asset_url)","Re-write all enabled asset URLs in a stylesheet with the MHTML equivalent. The newlines (\"\\r\\n\") in the",2],["LICENSE","files/LICENSE.html","files/LICENSE.html","","Copyright (c) 2009-2011 Jeremy Ashkenas, DocumentCloud  Permission is hereby granted, free of charge,",3],["README","files/README.html","files/README.html","","==        _  _   __  __ __  __ ___ _____      _ | |/_\\ |  \\/  |  \\/  |_ _|_   _|    | || / _ \\| |\\/|",3],["jammit.rb","files/lib/jammit_rb.html","files/lib/jammit_rb.html","","",3],["command_line.rb","files/lib/jammit/command_line_rb.html","files/lib/jammit/command_line_rb.html","","",3],["compressor.rb","files/lib/jammit/compressor_rb.html","files/lib/jammit/compressor_rb.html","","",3],["controller.rb","files/lib/jammit/controller_rb.html","files/lib/jammit/controller_rb.html","","",3],["dependencies.rb","files/lib/jammit/dependencies_rb.html","files/lib/jammit/dependencies_rb.html","","Standard Library Dependencies: ",3],["helper.rb","files/lib/jammit/helper_rb.html","files/lib/jammit/helper_rb.html","","",3],["jst.js","files/lib/jammit/jst_js.html","files/lib/jammit/jst_js.html","","var template = function(str){var fn = new Function('obj', 'var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push(\\''+str.replace(/\\\\/g,",3],["packager.rb","files/lib/jammit/packager_rb.html","files/lib/jammit/packager_rb.html","","",3],["railtie.rb","files/lib/jammit/railtie_rb.html","files/lib/jammit/railtie_rb.html","","Rails 3 configuration via Railtie ",3],["routes.rb","files/lib/jammit/routes_rb.html","files/lib/jammit/routes_rb.html","","",3],["uglifier.rb","files/lib/jammit/uglifier_rb.html","files/lib/jammit/uglifier_rb.html","","",3]],"searchIndex":["jammit","commandline","compressor","controller","deprecationerror","helper","missingconfiguration","outputnotwritable","packagenotfound","packager","railtie","routes","uglifier","absolute_path()","asset_url()","cache()","cache_package()","cacheable()","check_for_deprecations()","check_java_version()","compile_jst()","compress_css()","compress_js()","concatenate()","concatenate_and_tag_assets()","construct_asset_path()","create_packages()","disable_compression()","draw()","embeddable?()","embedded_image_stylesheets()","encoded_contents()","ensure_configuration_file()","filename()","find_base_path()","generate_stylesheets()","glob_files()","html_safe()","include_javascripts()","include_stylesheets()","include_templates()","individual_stylesheets()","individual_urls()","latest_mtime()","load_configuration()","mime_type()","new()","new()","new()","not_found()","pack_javascripts()","pack_stylesheets()","pack_templates()","package()","package!()","package_for()","package_not_found()","packaged_stylesheets()","packager()","parse_options()","parse_request()","path_to_url()","precache_all()","prefix_url()","rails_asset_id()","read_binary_file()","relative_path()","reload!()","rewrite_asset_path()","set_javascript_compressor()","set_package_assets()","set_public_root()","set_template_extension()","set_template_function()","set_template_namespace()","should_package?()","symbolize_keys()","tags_with_options()","template_name()","warn()","with_data_uris()","with_mhtml()","license","readme","jammit.rb","command_line.rb","compressor.rb","controller.rb","dependencies.rb","helper.rb","jst.js","packager.rb","railtie.rb","routes.rb","uglifier.rb"],"longSearchIndex":["lib/jammit.rb","jammit","jammit","jammit","jammit","jammit","jammit","jammit","jammit","jammit","jammit","jammit","jammit","jammit::compressor","jammit","jammit::packager","jammit::controller","jammit::packager","jammit","jammit","jammit::compressor","jammit::compressor","jammit::compressor","jammit::compressor","jammit::compressor","jammit::compressor","jammit::packager","jammit","jammit::routes","jammit::compressor","jammit::helper","jammit::compressor","jammit::commandline","jammit","jammit::compressor","jammit::controller","jammit::packager","jammit::helper","jammit::helper","jammit::helper","jammit::helper","jammit::helper","jammit::packager","jammit::packager","jammit","jammit::compressor","jammit::commandline","jammit::compressor","jammit::packager","jammit::packager","jammit::packager","jammit::packager","jammit::packager","jammit::controller","jammit","jammit::packager","jammit::controller","jammit::helper","jammit","jammit::commandline","jammit::controller","jammit::packager","jammit::packager","jammit::controller","jammit::compressor","jammit::compressor","jammit::compressor","jammit","jammit::compressor","jammit","jammit","jammit","jammit","jammit","jammit","jammit::helper","jammit","jammit::helper","jammit::compressor","jammit","jammit::compressor","jammit::compressor","files/license.html","files/readme.html","files/lib/jammit_rb.html","files/lib/jammit/command_line_rb.html","files/lib/jammit/compressor_rb.html","files/lib/jammit/controller_rb.html","files/lib/jammit/dependencies_rb.html","files/lib/jammit/helper_rb.html","files/lib/jammit/jst_js.html","files/lib/jammit/packager_rb.html","files/lib/jammit/railtie_rb.html","files/lib/jammit/routes_rb.html","files/lib/jammit/uglifier_rb.html"]}}