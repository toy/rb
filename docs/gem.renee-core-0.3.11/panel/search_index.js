var search_data = {"index":{"info":[["Renee","lib/renee_core/chaining.rb","classes/Renee.html"," < ","Top-level Renee constant ",1],["Core","Renee","classes/Renee/Core.html"," < Object","The top-level class for creating core application. For convience you can also used a method named #Renee",1],["Chaining","Renee::Core","classes/Renee/Core/Chaining.html"," < ","Module for creating chainable methods. To use this within your own modules, first `include Chaining`,",1],["ChainingProxy","Renee::Core::Chaining","classes/Renee/Core/Chaining/ChainingProxy.html"," < Object","@private ",1],["ClassMethods","Renee::Core::Chaining","classes/Renee/Core/Chaining/ClassMethods.html"," < ","@private ",1],["ClassMethods","Renee::Core","classes/Renee/Core/ClassMethods.html"," < ","Class methods that are included in new instances of {Core}  ",1],["ClientError","Renee::Core","classes/Renee/Core/ClientError.html"," < StandardError","Used to indicate a client-error has occurred (e.g. 4xx) ",1],["EnvAccessors","Renee::Core","classes/Renee/Core/EnvAccessors.html"," < ","Defines class-level methods for creating accessors for variables in your environment. ",1],["ClassMethods","Renee::Core::EnvAccessors","classes/Renee/Core/EnvAccessors/ClassMethods.html"," < ","Class-methods included by this module. ",1],["Matcher","Renee::Core","classes/Renee/Core/Matcher.html"," < Object","Class used for variable matching. ",1],["RackInteraction","Renee::Core","classes/Renee/Core/RackInteraction.html"," < ","A module that defines useful Rack interaction methods. ",1],["RequestContext","Renee::Core","classes/Renee/Core/RequestContext.html"," < ","This module deals with the Rack#call compilance. It defines #call and also defines several critical methods",1],["Responding","Renee::Core","classes/Renee/Core/Responding.html"," < ","Collection of useful methods for responding within a {Renee::Core} app. ",1],["Response","Renee::Core","classes/Renee/Core/Response.html"," < Rack::Response","The response object for a Renee request. Inherits from the `Rack#Response` object. ",1],["Routing","Renee::Core","classes/Renee/Core/Routing.html"," < ","Collection of useful methods for routing within a {Renee::Core} app. ",1],["Transform","Renee::Core","classes/Renee/Core/Transform.html"," < ","Module used for transforming arbitrary values using the registerd variable types. @see #register_variable_name.",1],["URLGeneration","Renee::Core","classes/Renee/Core/URLGeneration.html"," < ","URL generator for creating paths and URLs within your application. ",1],["Generator","Renee::Core::URLGeneration","classes/Renee/Core/URLGeneration/Generator.html"," < Object","@private ",1],["[]","Renee::Core::Matcher","classes/Renee/Core/Matcher.html#M000014","(val)","Matcher for string @param [String] val The value to attempt to match on. @raise [ClientError] If the",2],["app","Renee::Core::ClassMethods","classes/Renee/Core/ClassMethods.html#M000076","(&app)","Allows you to set the #application_block on your class. @yield The application block ",2],["body","Renee::Core::Response","classes/Renee/Core/Response.html#M000028","(val=nil)","Get or set the body of the response. @param [String] val The contents to return. @example res.body \"hello\"",2],["body=","Renee::Core::Response","classes/Renee/Core/Response.html#M000022","(value)","Augment body to allow strings. @param [String] The contents for the response. @example res.body = \"Hello\"",2],["body_attr","Renee::Core::Response","classes/Renee/Core/Response.html#M000029","(val=nil)","Alias for #body",2],["body_attr=","Renee::Core::Response","classes/Renee/Core/Response.html#M000025","(value)","Alias for #body=",2],["build","Renee::Core::RackInteraction","classes/Renee/Core/RackInteraction.html#M000015","(&blk)","Creates an ad-hoc Rack application within the context of a Rack::Builder. @yield The block to be used",2],["build!","Renee::Core::RackInteraction","classes/Renee/Core/RackInteraction.html#M000016","(&blk)","Creates an ad-hoc Rack application within the context of a Rack::Builder that immediately halts when",2],["call","Renee::Core::ClassMethods","classes/Renee/Core/ClassMethods.html#M000075","(env)","Provides a rack interface compliant call method. This method creates a new instance of your class and",2],["call","Renee::Core::RequestContext","classes/Renee/Core/RequestContext.html#M000019","(env)","Provides a rack interface compliant call method. @param[Hash] env The rack environment. ",2],["catchall","Renee::Core::Routing","classes/Renee/Core/Routing.html#M000058","(&blk)","Alias for #remainder",2],["chain_method","Renee::Core::Chaining::ClassMethods","classes/Renee/Core/Chaining/ClassMethods.html#M000002","(*methods)","",2],["complete","Renee::Core::Routing","classes/Renee/Core/Routing.html#M000064","(&blk)","Match only when the path is either '' or '/'. @example complete { halt [200, {}, \"hello world\"] } @api",2],["complex_variable","Renee::Core::Routing","classes/Renee/Core/Routing.html#M000069","(type, prefix, count)","",2],["core","Renee","classes/Renee.html#M000073","(&blk)","@example Renee.core { path('/hello') { halt :ok } } ",2],["defaults_for_generation","Renee::Core::URLGeneration","classes/Renee/Core/URLGeneration.html#M000056","(defaults)","",2],["delete","Renee::Core::Routing","classes/Renee/Core/Routing.html#M000063","(path = nil, &blk)","Respond to a DELETE request and yield the block. @example delete { halt [200, {}, \"hello world\"] } @api",2],["empty","Renee::Core::Routing","classes/Renee/Core/Routing.html#M000065","(&blk)","Match only when the path is ''. @example empty { halt [200, {}, \"hello world\"] } @api public ",2],["env_accessor","Renee::Core::EnvAccessors::ClassMethods","classes/Renee/Core/EnvAccessors/ClassMethods.html#M000005","(*attrs)","Defines getters and setters for a list of attributes. If the attributes cannot easily be expressed, use",2],["env_attr_iter","Renee::Core::EnvAccessors::ClassMethods","classes/Renee/Core/EnvAccessors/ClassMethods.html#M000008","(*attrs)","",2],["env_reader","Renee::Core::EnvAccessors::ClassMethods","classes/Renee/Core/EnvAccessors/ClassMethods.html#M000006","(*attrs)","Defines getters for a list of attributes. @see env_accessor ",2],["env_writer","Renee::Core::EnvAccessors::ClassMethods","classes/Renee/Core/EnvAccessors/ClassMethods.html#M000007","(*attrs)","Defines setters for a list of attributes. @see env_accessor ",2],["ext","Renee::Core::Routing","classes/Renee/Core/Routing.html#M000052","(ext, &blk)","Alias for #extension",2],["extension","Renee::Core::Routing","classes/Renee/Core/Routing.html#M000049","(ext, &blk)","Match an extension. @example extension('html') { |path| halt [200, {}, path] } @api public ",2],["finish","Renee::Core::Response","classes/Renee/Core/Response.html#M000031","()","Finishs the response based on the accumulated options. Calculates the size of the body content length",2],["get","Renee::Core::Routing","classes/Renee/Core/Routing.html#M000059","(path = nil, &blk)","Respond to a GET request and yield the block. @example get { halt [200, {}, \"hello world\"] } @api public",2],["glob","Renee::Core::Routing","classes/Renee/Core/Routing.html#M000046","(type = nil, &blk)","Alias for #repeating_variable",2],["halt","Renee::Core::Responding","classes/Renee/Core/Responding.html#M000020","(*response)","Halts current processing to the top-level calling Renee application and uses that as a response. @param",2],["headers","Renee::Core::Response","classes/Renee/Core/Response.html#M000030","(attrs={})","Get or set the headers of the response. @param [Hash] attrs The contents to return. @example res.headers",2],["included","Renee::Core::Chaining","classes/Renee/Core/Chaining.html#M000003","(o)","",2],["included","Renee::Core::EnvAccessors","classes/Renee/Core/EnvAccessors.html#M000009","(o)","@private ",2],["interpret_response","Renee::Core::Responding","classes/Renee/Core/Responding.html#M000024","(response)","Interprets responses returns by #halt. * If it is a Symbol, it will be looked up in {HTTP_CODES}. * If",2],["method_missing","Renee::Core::Chaining::ChainingProxy","classes/Renee/Core/Chaining/ChainingProxy.html#M000001","(m, *args, &blk)","",2],["multi_var","Renee::Core::Routing","classes/Renee/Core/Routing.html#M000042","(count, type = nil, &blk)","Alias for #multi_variable",2],["multi_variable","Renee::Core::Routing","classes/Renee/Core/Routing.html#M000041","(count, type = nil, &blk)","Same as variable except you can match multiple variables with the same type. @param [Range, Integer]",2],["mvar","Renee::Core::Routing","classes/Renee/Core/Routing.html#M000043","(count, type = nil, &blk)","Alias for #multi_variable",2],["new","Renee::Core::Chaining::ChainingProxy","classes/Renee/Core/Chaining/ChainingProxy.html#M000000","(target, m, args)","",2],["new","Renee::Core::ClientError","classes/Renee/Core/ClientError.html#M000004","(message, &response)","@param [String] message The message for this exception. @yield The optional block to instance-eval in",2],["new","Renee::Core::Matcher","classes/Renee/Core/Matcher.html#M000010","(matcher)","@param [Regexp] matcher The regexp matcher to determine what is part of the variable. ",2],["new","Renee::Core::URLGeneration::Generator","classes/Renee/Core/URLGeneration/Generator.html#M000057","(template, defaults = nil)","",2],["no_extension","Renee::Core::Routing","classes/Renee/Core/Routing.html#M000053","(&blk)","Match no extension. @example no_extension { |path| halt [200, {}, path] } @api public ",2],["on_error","Renee::Core::Matcher","classes/Renee/Core/Matcher.html#M000011","(&blk)","Used to specific the error handler if the matcher doesn't match anything. By default, there is no error",2],["on_transform","Renee::Core::Matcher","classes/Renee/Core/Matcher.html#M000012","(&blk)","Used to transform the value matched. @yield TODO ",2],["part","Renee::Core::Routing","classes/Renee/Core/Routing.html#M000037","(p, &blk)","Like #path, but doesn't look for leading slashes. ",2],["part_var","Renee::Core::Routing","classes/Renee/Core/Routing.html#M000048","(type = nil, &blk)","Alias for #partial_variable",2],["partial_variable","Renee::Core::Routing","classes/Renee/Core/Routing.html#M000047","(type = nil, &blk)","Match parts off the path as variables without a leading slash. @see #variable @api public ",2],["path","Renee::Core::Routing","classes/Renee/Core/Routing.html#M000035","(p, &blk)","Match a path to respond to. @param [String] p path to match. @param [Proc] blk block to yield @example",2],["path","Renee::Core::URLGeneration","classes/Renee/Core/URLGeneration.html#M000050","(name, *args)","Generates a path for a given name. @param [Symbol] name The name of the path @param [Object] args The",2],["path","Renee::Core::URLGeneration::Generator","classes/Renee/Core/URLGeneration/Generator.html#M000061","(*args)","",2],["post","Renee::Core::Routing","classes/Renee/Core/Routing.html#M000060","(path = nil, &blk)","Respond to a POST request and yield the block. @example post { halt [200, {}, \"hello world\"] } @api public",2],["prefix","Renee::Core::URLGeneration","classes/Renee/Core/URLGeneration.html#M000045","(prefix, defaults = nil, &blk)","Allows the creation of generation contexts. @param [String] prefix The prefix to add to subsequent calls",2],["put","Renee::Core::Routing","classes/Renee/Core/Routing.html#M000062","(path = nil, &blk)","Respond to a PUT request and yield the block. @example put { halt [200, {}, \"hello world\"] } @api public",2],["query","Renee::Core::Routing","classes/Renee/Core/Routing.html#M000067","(q, &blk)","Match variables within the query string. @param [Array, Hash] q Either an array or hash of things to",2],["query_string","Renee::Core::Routing","classes/Renee/Core/Routing.html#M000068","(qs, &blk)","Yield block if the query string matches. @param [String] qs The query string to match. @example path",2],["raise_on_error!","Renee::Core::Matcher","classes/Renee/Core/Matcher.html#M000013","(error_code = :bad_request)","Convienence method to creating halting error handler. @param [Symbol, Integer] error_code The HTTP code",2],["redirect","Renee::Core::Responding","classes/Renee/Core/Responding.html#M000032","(path, code = 302)","Returns a rack-based response for redirection. @param [String] path The URL to redirect to. @param [Integer]",2],["redirect!","Renee::Core::Responding","classes/Renee/Core/Responding.html#M000033","(path, code = 302)","Halts with a rack-based response for redirection. @see #redirect @param [String] path The URL to redirect",2],["register","Renee::Core::URLGeneration","classes/Renee/Core/URLGeneration.html#M000039","(name, pattern, defaults = nil)","Registers new paths for generation. @param [Symbol] name The name of the path @param [String] pattern",2],["register_variable_type","Renee::Core::ClassMethods","classes/Renee/Core/ClassMethods.html#M000079","(name, matcher)","Registers a new variable type for use within {Renee::Core::Routing#variable} and others. @param [Symbol]",2],["remainder","Renee::Core::Routing","classes/Renee/Core/Routing.html#M000054","(&blk)","Match any remaining path. @example remainder { |path| halt [200, {}, path] } @api public ",2],["repeating_variable","Renee::Core::Routing","classes/Renee/Core/Routing.html#M000044","(type = nil, &blk)","Same as variable except it matches indefinitely. @param [Symbol] type The type to use for match. ",2],["request_method","Renee::Core::Routing","classes/Renee/Core/Routing.html#M000074","(method, path = nil, &blk)","",2],["respond","Renee::Core::Responding","classes/Renee/Core/Responding.html#M000021","(body=[], status=200, header={}, &blk)","Creates a response by allowing the response header, body and status to be passed into the block. @param",2],["respond!","Renee::Core::Responding","classes/Renee/Core/Responding.html#M000023","(*args, &blk)","Creates a response by allowing the response header, body and status to be passed into the block. @example",2],["run","Renee::Core::RackInteraction","classes/Renee/Core/RackInteraction.html#M000017","(app = nil, &blk)","Runs a rack application. You must either use `app` or `blk`. @param [#call] app The application to call.",2],["run!","Renee::Core::RackInteraction","classes/Renee/Core/RackInteraction.html#M000018","(app = nil, &blk)","Runs a rack application and halts immediately. @param (see #run) @see #run! @example get { run proc {",2],["setup","Renee::Core::ClassMethods","classes/Renee/Core/ClassMethods.html#M000077","(&blk)","Runs class methods on your application. ",2],["status","Renee::Core::Response","classes/Renee/Core/Response.html#M000026","(val=nil)","Get or set the status of the response. @param [String] val The status code to return. @example res.status",2],["status_attr","Renee::Core::Response","classes/Renee/Core/Response.html#M000027","(val=nil)","Alias for #status",2],["transform","Renee::Core::Transform","classes/Renee/Core/Transform.html#M000034","(type, value)","Transforms a value according to the rules specified by #register_variable_name. @param [Symbol] name",2],["url","Renee::Core::URLGeneration","classes/Renee/Core/URLGeneration.html#M000051","(name, *args)","Generates a url for a given name. @param (see #path) @see #path ",2],["url","Renee::Core::URLGeneration::Generator","classes/Renee/Core/URLGeneration/Generator.html#M000066","(*args)","",2],["url_generators","Renee::Core::URLGeneration","classes/Renee/Core/URLGeneration.html#M000055","()","",2],["var","Renee::Core::Routing","classes/Renee/Core/Routing.html#M000040","(type = nil, &blk)","Alias for #variable",2],["variable","Renee::Core::Routing","classes/Renee/Core/Routing.html#M000038","(type = nil, &blk)","Match parts off the path as variables. The parts matcher can conform to either a regular expression,",2],["variable_matcher_for_type","Renee::Core::Routing","classes/Renee/Core/Routing.html#M000071","(type)","",2],["variable_matching_loop","Renee::Core::Routing","classes/Renee/Core/Routing.html#M000070","(count)","",2],["variable_types","Renee::Core::ClassMethods","classes/Renee/Core/ClassMethods.html#M000078","()","The currently available variable types you've defined. ",2],["whole_path","Renee::Core::Routing","classes/Renee/Core/Routing.html#M000036","(p, &blk)","Like #path, but requires the entire path to be consumed. @see #path ",2],["with_path_part","Renee::Core::Routing","classes/Renee/Core/Routing.html#M000072","(part)","",2],["README.md","files/README_md.html","files/README_md.html","","# Renee Core  ## Routing  Routing in `Renee` is different from any web framework you are likely to have",3],["renee_core.rb","files/lib/renee_core_rb.html","files/lib/renee_core_rb.html","","",3],["chaining.rb","files/lib/renee_core/chaining_rb.html","files/lib/renee_core/chaining_rb.html","","",3],["env_accessors.rb","files/lib/renee_core/env_accessors_rb.html","files/lib/renee_core/env_accessors_rb.html","","",3],["exceptions.rb","files/lib/renee_core/exceptions_rb.html","files/lib/renee_core/exceptions_rb.html","","",3],["matcher.rb","files/lib/renee_core/matcher_rb.html","files/lib/renee_core/matcher_rb.html","","",3],["rack_interaction.rb","files/lib/renee_core/rack_interaction_rb.html","files/lib/renee_core/rack_interaction_rb.html","","",3],["request_context.rb","files/lib/renee_core/request_context_rb.html","files/lib/renee_core/request_context_rb.html","","",3],["responding.rb","files/lib/renee_core/responding_rb.html","files/lib/renee_core/responding_rb.html","","",3],["response.rb","files/lib/renee_core/response_rb.html","files/lib/renee_core/response_rb.html","","",3],["routing.rb","files/lib/renee_core/routing_rb.html","files/lib/renee_core/routing_rb.html","","",3],["transform.rb","files/lib/renee_core/transform_rb.html","files/lib/renee_core/transform_rb.html","","",3],["url_generation.rb","files/lib/renee_core/url_generation_rb.html","files/lib/renee_core/url_generation_rb.html","","",3],["version.rb","files/lib/renee_core/version_rb.html","files/lib/renee_core/version_rb.html","","",3]],"searchIndex":["renee","core","chaining","chainingproxy","classmethods","classmethods","clienterror","envaccessors","classmethods","matcher","rackinteraction","requestcontext","responding","response","routing","transform","urlgeneration","generator","[]()","app()","body()","body=()","body_attr()","body_attr=()","build()","build!()","call()","call()","catchall()","chain_method()","complete()","complex_variable()","core()","defaults_for_generation()","delete()","empty()","env_accessor()","env_attr_iter()","env_reader()","env_writer()","ext()","extension()","finish()","get()","glob()","halt()","headers()","included()","included()","interpret_response()","method_missing()","multi_var()","multi_variable()","mvar()","new()","new()","new()","new()","no_extension()","on_error()","on_transform()","part()","part_var()","partial_variable()","path()","path()","path()","post()","prefix()","put()","query()","query_string()","raise_on_error!()","redirect()","redirect!()","register()","register_variable_type()","remainder()","repeating_variable()","request_method()","respond()","respond!()","run()","run!()","setup()","status()","status_attr()","transform()","url()","url()","url_generators()","var()","variable()","variable_matcher_for_type()","variable_matching_loop()","variable_types()","whole_path()","with_path_part()","readme.md","renee_core.rb","chaining.rb","env_accessors.rb","exceptions.rb","matcher.rb","rack_interaction.rb","request_context.rb","responding.rb","response.rb","routing.rb","transform.rb","url_generation.rb","version.rb"],"longSearchIndex":["lib/renee_core.rb","renee","renee::core","renee::core::chaining","renee::core::chaining","renee::core","renee::core","renee::core","renee::core::envaccessors","renee::core","renee::core","renee::core","renee::core","renee::core","renee::core","renee::core","renee::core","renee::core::urlgeneration","renee::core::matcher","renee::core::classmethods","renee::core::response","renee::core::response","renee::core::response","renee::core::response","renee::core::rackinteraction","renee::core::rackinteraction","renee::core::classmethods","renee::core::requestcontext","renee::core::routing","renee::core::chaining::classmethods","renee::core::routing","renee::core::routing","renee","renee::core::urlgeneration","renee::core::routing","renee::core::routing","renee::core::envaccessors::classmethods","renee::core::envaccessors::classmethods","renee::core::envaccessors::classmethods","renee::core::envaccessors::classmethods","renee::core::routing","renee::core::routing","renee::core::response","renee::core::routing","renee::core::routing","renee::core::responding","renee::core::response","renee::core::chaining","renee::core::envaccessors","renee::core::responding","renee::core::chaining::chainingproxy","renee::core::routing","renee::core::routing","renee::core::routing","renee::core::chaining::chainingproxy","renee::core::clienterror","renee::core::matcher","renee::core::urlgeneration::generator","renee::core::routing","renee::core::matcher","renee::core::matcher","renee::core::routing","renee::core::routing","renee::core::routing","renee::core::routing","renee::core::urlgeneration","renee::core::urlgeneration::generator","renee::core::routing","renee::core::urlgeneration","renee::core::routing","renee::core::routing","renee::core::routing","renee::core::matcher","renee::core::responding","renee::core::responding","renee::core::urlgeneration","renee::core::classmethods","renee::core::routing","renee::core::routing","renee::core::routing","renee::core::responding","renee::core::responding","renee::core::rackinteraction","renee::core::rackinteraction","renee::core::classmethods","renee::core::response","renee::core::response","renee::core::transform","renee::core::urlgeneration","renee::core::urlgeneration::generator","renee::core::urlgeneration","renee::core::routing","renee::core::routing","renee::core::routing","renee::core::routing","renee::core::classmethods","renee::core::routing","renee::core::routing","files/readme_md.html","files/lib/renee_core_rb.html","files/lib/renee_core/chaining_rb.html","files/lib/renee_core/env_accessors_rb.html","files/lib/renee_core/exceptions_rb.html","files/lib/renee_core/matcher_rb.html","files/lib/renee_core/rack_interaction_rb.html","files/lib/renee_core/request_context_rb.html","files/lib/renee_core/responding_rb.html","files/lib/renee_core/response_rb.html","files/lib/renee_core/routing_rb.html","files/lib/renee_core/transform_rb.html","files/lib/renee_core/url_generation_rb.html","files/lib/renee_core/version_rb.html"]}}