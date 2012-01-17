var search_data = {"index":{"info":[["Rack","lib/rack/cache/cachecontrol.rb","classes/Rack.html"," < ","",1],["Cache","Rack","classes/Rack/Cache.html"," < ","= HTTP Caching For Rack Rack::Cache is suitable as a quick, drop-in component to enable HTTP caching",1],["AppEngine","Rack::Cache","classes/Rack/Cache/AppEngine.html"," < ","",1],["MC","Rack::Cache::AppEngine","classes/Rack/Cache/AppEngine/MC.html"," < ","",1],["MemCache","Rack::Cache::AppEngine","classes/Rack/Cache/AppEngine/MemCache.html"," < Object","",1],["CacheControl","Rack::Cache","classes/Rack/Cache/CacheControl.html"," < Hash","Parses a Cache-Control header and exposes the directives as a Hash. Directives that do not have values",1],["Context","Rack::Cache","classes/Rack/Cache/Context.html"," < Object","Implements Rack's middleware interface and provides the context for all cache logic, including the core",1],["EntityStore","Rack::Cache","classes/Rack/Cache/EntityStore.html"," < Object","Entity stores are used to cache response bodies across requests. All Implementations are required to",1],["Dalli","Rack::Cache::EntityStore","classes/Rack/Cache/EntityStore/Dalli.html"," < MemCacheBase","Uses the Dalli ruby library. This is the default unless the memcached library has already been required.",1],["Disk","Rack::Cache::EntityStore","classes/Rack/Cache/EntityStore/Disk.html"," < EntityStore","Stores entity bodies on disk at the specified path. ",1],["GAEStore","Rack::Cache::EntityStore","classes/Rack/Cache/EntityStore/GAEStore.html"," < EntityStore","",1],["Heap","Rack::Cache::EntityStore","classes/Rack/Cache/EntityStore/Heap.html"," < EntityStore","Stores entity bodies on the heap using a Hash object. ",1],["MemCacheBase","Rack::Cache::EntityStore","classes/Rack/Cache/EntityStore/MemCacheBase.html"," < EntityStore","Base class for memcached entity stores. ",1],["MemCached","Rack::Cache::EntityStore","classes/Rack/Cache/EntityStore/MemCached.html"," < MemCacheBase","Uses the memcached client library. The ruby based memcache-client is used in preference to this store",1],["Key","Rack::Cache","classes/Rack/Cache/Key.html"," < Object","",1],["MetaStore","Rack::Cache","classes/Rack/Cache/MetaStore.html"," < Object","The MetaStore is responsible for storing meta information about a request/response pair keyed by the",1],["Dalli","Rack::Cache::MetaStore","classes/Rack/Cache/MetaStore/Dalli.html"," < MemCacheBase","",1],["Disk","Rack::Cache::MetaStore","classes/Rack/Cache/MetaStore/Disk.html"," < MetaStore","Concrete MetaStore implementation that stores request/response pairs on disk. ",1],["GAEStore","Rack::Cache::MetaStore","classes/Rack/Cache/MetaStore/GAEStore.html"," < MetaStore","",1],["Heap","Rack::Cache::MetaStore","classes/Rack/Cache/MetaStore/Heap.html"," < MetaStore","Concrete MetaStore implementation that uses a simple Hash to store request/response pairs on the heap.",1],["MemCacheBase","Rack::Cache::MetaStore","classes/Rack/Cache/MetaStore/MemCacheBase.html"," < MetaStore","Stores request/response pairs in memcached. Keys are not stored directly since memcached has a 250-byte",1],["MemCached","Rack::Cache::MetaStore","classes/Rack/Cache/MetaStore/MemCached.html"," < MemCacheBase","",1],["Options","Rack::Cache","classes/Rack/Cache/Options.html"," < ","Configuration options and utility methods for option access. Rack::Cache uses the Rack Environment to",1],["Request","Rack::Cache","classes/Rack/Cache/Request.html"," < Rack::Request","Provides access to the HTTP request. The +request+ and +original_request+ objects exposed by the Core",1],["Response","Rack::Cache","classes/Rack/Cache/Response.html"," < Object","Provides access to the response generated by the downstream application. The +response+, +original_response+,",1],["Storage","Rack::Cache","classes/Rack/Cache/Storage.html"," < Object","Maintains a collection of MetaStore and EntityStore instances keyed by URI. A single instance of this",1],["age","Rack::Cache::Response","classes/Rack/Cache/Response.html#M000147","()","The age of the response. ",2],["body_path","Rack::Cache::EntityStore::Disk","classes/Rack/Cache/EntityStore/Disk.html#M000055","(key)","",2],["bytesize","Rack::Cache::EntityStore","classes/Rack/Cache/EntityStore.html#M000035","(string)","",2],["bytesize","Rack::Cache::EntityStore","classes/Rack/Cache/EntityStore.html#M000034","(string)","",2],["cache_control","Rack::Cache::Request","classes/Rack/Cache/Request.html#M000114","()","A CacheControl instance based on the request's Cache-Control header. ",2],["cache_control","Rack::Cache::Response","classes/Rack/Cache/Response.html#M000137","()","A Hash of name=value pairs that correspond to the Cache-Control header. Valueless parameters (e.g., must-revalidate,",2],["cache_control=","Rack::Cache::Response","classes/Rack/Cache/Response.html#M000138","(value)","Set the Cache-Control header to the values specified by the Hash. See the #cache_control method for information",2],["cache_key","Rack::Cache::MetaStore","classes/Rack/Cache/MetaStore.html#M000082","(request)","Generate a cache key for the request. ",2],["cacheable?","Rack::Cache::Response","classes/Rack/Cache/Response.html#M000141","()","Determine if the response is worth caching under any circumstance. Responses marked \"private\" with an",2],["call","Rack::Cache::Context","classes/Rack/Cache/Context.html#M000022","(env)","The Rack call interface. The receiver acts as a prototype and runs each request in a dup object unless",2],["call","Rack::Cache::Key","classes/Rack/Cache/Key.html#M000054","(request)","Implement .call, since it seems like the \"Rack-y\" thing to do. Plus, it opens the door for cache key",2],["call!","Rack::Cache::Context","classes/Rack/Cache/Context.html#M000023","(env)","The real Rack call interface. The caching logic is performed within the context of the receiver. ",2],["clear","Rack::Cache::Storage","classes/Rack/Cache/Storage.html#M000135","()","",2],["client_ttl=","Rack::Cache::Response","classes/Rack/Cache/Response.html#M000155","(seconds)","Set the response's time-to-live for private/client caches. This adjusts the Cache-Control/max-age directive.",2],["contains?","Rack::Cache::AppEngine::MemCache","classes/Rack/Cache/AppEngine/MemCache.html#M000001","(key)","",2],["create_store","Rack::Cache::Storage","classes/Rack/Cache/Storage.html#M000136","(type, uri)","",2],["date","Rack::Cache::Response","classes/Rack/Cache/Response.html#M000146","()","The date, as specified by the Date header. When no Date header is present, set the Date header to Time.now",2],["delete","Rack::Cache::AppEngine::MemCache","classes/Rack/Cache/AppEngine/MemCache.html#M000006","(key)","",2],["entitystore","Rack::Cache::Context","classes/Rack/Cache/Context.html#M000020","()","The configured EntityStore instance. Changing the rack-cache.entitystore value effects the result of",2],["etag","Rack::Cache::Response","classes/Rack/Cache/Response.html#M000157","()","The literal value of ETag HTTP header or nil if no ETag is specified. ",2],["exist?","Rack::Cache::EntityStore::Dalli","classes/Rack/Cache/EntityStore/Dalli.html#M000063","(key)","",2],["exist?","Rack::Cache::EntityStore::Disk","classes/Rack/Cache/EntityStore/Disk.html#M000047","(key)","",2],["exist?","Rack::Cache::EntityStore::GAEStore","classes/Rack/Cache/EntityStore/GAEStore.html#M000073","(key)","",2],["exist?","Rack::Cache::EntityStore::Heap","classes/Rack/Cache/EntityStore/Heap.html#M000037","(key)","Determine whether the response body with the specified key (SHA1) exists in the store. ",2],["exist?","Rack::Cache::EntityStore::MemCached","classes/Rack/Cache/EntityStore/MemCached.html#M000068","(key)","",2],["expire!","Rack::Cache::Response","classes/Rack/Cache/Response.html#M000145","()","Mark the response stale by setting the Age header to be equal to the maximum age of the response. ",2],["expires","Rack::Cache::Response","classes/Rack/Cache/Response.html#M000150","()","The value of the Expires header as a Time object. ",2],["fetch","Rack::Cache::Context","classes/Rack/Cache/Context.html#M000039","()","The cache missed or a reload is required. Forward the request to the backend and determine whether the",2],["forward","Rack::Cache::Context","classes/Rack/Cache/Context.html#M000028","()","Delegate the request to the backend and create the response. ",2],["fresh?","Rack::Cache::Response","classes/Rack/Cache/Response.html#M000139","()","Determine if the response is \"fresh\". Fresh responses may be served from cache without any interaction",2],["fresh_enough?","Rack::Cache::Context","classes/Rack/Cache/Context.html#M000027","(entry)","Whether the cache entry is \"fresh enough\" to satisfy the request. ",2],["generate","Rack::Cache::Key","classes/Rack/Cache/Key.html#M000059","()","Generate a normalized cache key for the request. ",2],["get","Rack::Cache::AppEngine::MemCache","classes/Rack/Cache/AppEngine/MemCache.html#M000002","(key)","",2],["hexdigest","Rack::Cache::MetaStore","classes/Rack/Cache/MetaStore.html#M000096","(data)","Generate a SHA1 hex digest for the specified string. This is a simple utility method for meta store implementations.",2],["initialize_copy","Rack::Cache::Response","classes/Rack/Cache/Response.html#M000130","(other)","",2],["initialize_options","Rack::Cache::Options","classes/Rack/Cache/Options.html#M000092","(options={})","",2],["instance","Rack::Cache::Storage","classes/Rack/Cache/Storage.html#M000140","()","",2],["invalidate","Rack::Cache::Context","classes/Rack/Cache/Context.html#M000030","()","Invalidate POST, PUT, DELETE and all methods not understood by this cache See RFC2616 13.10 ",2],["invalidate","Rack::Cache::MetaStore","classes/Rack/Cache/MetaStore.html#M000084","(request, entity_store)","Invalidate all cache entries that match the request. ",2],["key_path","Rack::Cache::MetaStore::Disk","classes/Rack/Cache/MetaStore/Disk.html#M000109","(key)","",2],["last_modified","Rack::Cache::Response","classes/Rack/Cache/Response.html#M000156","()","The String value of the Last-Modified header exactly as it appears in the response (i.e., no date parsing",2],["log_error","Rack::Cache::Context","classes/Rack/Cache/Context.html#M000044","(exception)","",2],["lookup","Rack::Cache::Context","classes/Rack/Cache/Context.html#M000031","()","Try to serve the response from cache. When a matching cache entry is found and is fresh, use it as the",2],["lookup","Rack::Cache::MetaStore","classes/Rack/Cache/MetaStore.html#M000079","(request, entity_store)","Locate a cached response for the request provided. Returns a Rack::Cache::Response object if the cache",2],["max_age","Rack::Cache::CacheControl","classes/Rack/Cache/CacheControl.html#M000012","()","The expiration time of an entity MAY be specified by the origin server using the Expires header (see",2],["max_age","Rack::Cache::Response","classes/Rack/Cache/Response.html#M000148","()","The number of seconds after the time specified in the response's Date header when the the response should",2],["max_age=","Rack::Cache::Response","classes/Rack/Cache/Response.html#M000151","(value)","The number of seconds after which the response should no longer be considered fresh. Sets the Cache-Control",2],["metastore","Rack::Cache::Context","classes/Rack/Cache/Context.html#M000019","()","The configured MetaStore instance. Changing the rack-cache.metastore value effects the result of this",2],["must_revalidate?","Rack::Cache::CacheControl","classes/Rack/Cache/CacheControl.html#M000015","()","Because a cache MAY be configured to ignore a server's specified expiration time, and because a client",2],["must_revalidate?","Rack::Cache::Response","classes/Rack/Cache/Response.html#M000144","()","Indicates that the cache must not serve a stale response in any circumstance without first revalidating",2],["namespace","Rack::Cache::AppEngine::MemCache","classes/Rack/Cache/AppEngine/MemCache.html#M000004","()","",2],["namespace=","Rack::Cache::AppEngine::MemCache","classes/Rack/Cache/AppEngine/MemCache.html#M000005","(value)","",2],["new","Rack::Cache","classes/Rack/Cache.html#M000149","(backend, options={}, &b)","Create a new Rack::Cache middleware component that fetches resources from the specified backend application.",2],["new","Rack::Cache::AppEngine::MemCache","classes/Rack/Cache/AppEngine/MemCache.html#M000000","(options = {})","",2],["new","Rack::Cache::CacheControl","classes/Rack/Cache/CacheControl.html#M000007","(value=nil)","",2],["new","Rack::Cache::Context","classes/Rack/Cache/Context.html#M000018","(backend, options={})","",2],["new","Rack::Cache::EntityStore::Dalli","classes/Rack/Cache/EntityStore/Dalli.html#M000062","(server=\"localhost:11211\", options={})","",2],["new","Rack::Cache::EntityStore::Disk","classes/Rack/Cache/EntityStore/Disk.html#M000046","(root)","",2],["new","Rack::Cache::EntityStore::GAEStore","classes/Rack/Cache/EntityStore/GAEStore.html#M000072","(options = {})","",2],["new","Rack::Cache::EntityStore::Heap","classes/Rack/Cache/EntityStore/Heap.html#M000036","(hash={})","Create the store with the specified backing Hash. ",2],["new","Rack::Cache::EntityStore::MemCached","classes/Rack/Cache/EntityStore/MemCached.html#M000067","(server=\"localhost:11211\", options={})","",2],["new","Rack::Cache::Key","classes/Rack/Cache/Key.html#M000058","(request)","",2],["new","Rack::Cache::MetaStore::Dalli","classes/Rack/Cache/MetaStore/Dalli.html#M000115","(server=\"localhost:11211\", options={})","",2],["new","Rack::Cache::MetaStore::Disk","classes/Rack/Cache/MetaStore/Disk.html#M000105","(root=\"/tmp/rack-cache/meta-#{ARGV[0]}\")","",2],["new","Rack::Cache::MetaStore::GAEStore","classes/Rack/Cache/MetaStore/GAEStore.html#M000124","(options = {})","",2],["new","Rack::Cache::MetaStore::Heap","classes/Rack/Cache/MetaStore/Heap.html#M000097","(hash={})","",2],["new","Rack::Cache::MetaStore::MemCached","classes/Rack/Cache/MetaStore/MemCached.html#M000120","(server=\"localhost:11211\", options={})","",2],["new","Rack::Cache::Response","classes/Rack/Cache/Response.html#M000129","(status, headers, body)","Create a Response instance given the response status code, header hash, and body. ",2],["new","Rack::Cache::Storage","classes/Rack/Cache/Storage.html#M000132","()","",2],["no_cache?","Rack::Cache::CacheControl","classes/Rack/Cache/CacheControl.html#M000010","()","When set in a response, a cache MUST NOT use the response to satisfy a subsequent request without successful",2],["no_cache?","Rack::Cache::Request","classes/Rack/Cache/Request.html#M000118","()","True when the Cache-Control/no-cache directive is present or the Pragma header is set to no-cache. ",2],["no_store?","Rack::Cache::CacheControl","classes/Rack/Cache/CacheControl.html#M000011","()","Indicates that the response MUST NOT be stored under any circumstances. The purpose of the no-store directive",2],["not_modified!","Rack::Cache::Response","classes/Rack/Cache/Response.html#M000158","()","Modify the response so that it conforms to the rules defined for '304 Not Modified'. This sets the status,",2],["not_modified?","Rack::Cache::Context","classes/Rack/Cache/Context.html#M000026","(response)","Determine if the #response validators (ETag, Last-Modified) matches a conditional value specified in",2],["open","Rack::Cache::EntityStore::Disk","classes/Rack/Cache/EntityStore/Disk.html#M000049","(key)","Open the entity body and return an IO object. The IO object's each method is overridden to read 8K chunks",2],["open","Rack::Cache::EntityStore::GAEStore","classes/Rack/Cache/EntityStore/GAEStore.html#M000075","(key)","",2],["open","Rack::Cache::EntityStore::Heap","classes/Rack/Cache/EntityStore/Heap.html#M000038","(key)","Return an object suitable for use as a Rack response body for the specified key. ",2],["open","Rack::Cache::EntityStore::MemCacheBase","classes/Rack/Cache/EntityStore/MemCacheBase.html#M000057","(key)","",2],["option_accessor","Rack::Cache::Options","classes/Rack/Cache/Options.html#M000081","(key)","",2],["option_name","Rack::Cache::Options","classes/Rack/Cache/Options.html#M000083","(key)","",2],["option_name","Rack::Cache::Options","classes/Rack/Cache/Options.html#M000083","(key)","",2],["options","Rack::Cache::Options","classes/Rack/Cache/Options.html#M000087","()","The underlying options Hash. During initialization (or outside of a request), this is a default values",2],["options=","Rack::Cache::Options","classes/Rack/Cache/Options.html#M000090","(hash={})","Set multiple options. ",2],["parse","Rack::Cache::CacheControl","classes/Rack/Cache/CacheControl.html#M000021","(value)","",2],["pass","Rack::Cache::Context","classes/Rack/Cache/Context.html#M000029","()","The request is sent to the backend, and the backend's response is sent to the client, but is not entered",2],["persist_request","Rack::Cache::MetaStore","classes/Rack/Cache/MetaStore.html#M000085","(request)","Extract the environment Hash from +request+ while making any necessary modifications in preparation for",2],["persist_response","Rack::Cache::MetaStore","classes/Rack/Cache/MetaStore.html#M000088","(response)","",2],["private=","Rack::Cache::Response","classes/Rack/Cache/Response.html#M000143","(value)","Mark the response \"private\", making it ineligible for serving other clients. ",2],["private?","Rack::Cache::CacheControl","classes/Rack/Cache/CacheControl.html#M000009","()","Indicates that all or part of the response message is intended for a single user and MUST NOT be cached",2],["private_request?","Rack::Cache::Context","classes/Rack/Cache/Context.html#M000025","()","Does the request include authorization or other sensitive information that should cause the response",2],["proxy_revalidate?","Rack::Cache::CacheControl","classes/Rack/Cache/CacheControl.html#M000016","()","The proxy-revalidate directive has the same meaning as the must- revalidate directive, except that it",2],["public?","Rack::Cache::CacheControl","classes/Rack/Cache/CacheControl.html#M000008","()","Indicates that the response MAY be cached by any cache, even if it would normally be non-cacheable or",2],["purge","Rack::Cache::EntityStore::Dalli","classes/Rack/Cache/EntityStore/Dalli.html#M000066","(key)","",2],["purge","Rack::Cache::EntityStore::Disk","classes/Rack/Cache/EntityStore/Disk.html#M000051","(key)","",2],["purge","Rack::Cache::EntityStore::GAEStore","classes/Rack/Cache/EntityStore/GAEStore.html#M000077","(key)","",2],["purge","Rack::Cache::EntityStore::Heap","classes/Rack/Cache/EntityStore/Heap.html#M000042","(key)","Remove the body corresponding to key; return nil. ",2],["purge","Rack::Cache::EntityStore::MemCached","classes/Rack/Cache/EntityStore/MemCached.html#M000071","(key)","",2],["purge","Rack::Cache::MetaStore","classes/Rack/Cache/MetaStore.html#M000095","(key)","Remove all cached entries at the key specified. No error is raised when the key does not exist. ",2],["purge","Rack::Cache::MetaStore::Dalli","classes/Rack/Cache/MetaStore/Dalli.html#M000119","(key)","",2],["purge","Rack::Cache::MetaStore::Disk","classes/Rack/Cache/MetaStore/Disk.html#M000108","(key)","",2],["purge","Rack::Cache::MetaStore::GAEStore","classes/Rack/Cache/MetaStore/GAEStore.html#M000127","(key)","",2],["purge","Rack::Cache::MetaStore::Heap","classes/Rack/Cache/MetaStore/Heap.html#M000102","(key)","",2],["purge","Rack::Cache::MetaStore::MemCached","classes/Rack/Cache/MetaStore/MemCached.html#M000123","(key)","",2],["put","Rack::Cache::AppEngine::MemCache","classes/Rack/Cache/AppEngine/MemCache.html#M000003","(key, value, ttl = nil)","",2],["query_string","Rack::Cache::Key","classes/Rack/Cache/Key.html#M000061","()","Build a normalized query string by alphabetizing all keys/values and applying consistent escaping. ",2],["read","Rack::Cache::EntityStore::Dalli","classes/Rack/Cache/EntityStore/Dalli.html#M000064","(key)","",2],["read","Rack::Cache::EntityStore::Disk","classes/Rack/Cache/EntityStore/Disk.html#M000048","(key)","",2],["read","Rack::Cache::EntityStore::GAEStore","classes/Rack/Cache/EntityStore/GAEStore.html#M000074","(key)","",2],["read","Rack::Cache::EntityStore::Heap","classes/Rack/Cache/EntityStore/Heap.html#M000040","(key)","Read all data associated with the given key and return as a single String. ",2],["read","Rack::Cache::EntityStore::MemCached","classes/Rack/Cache/EntityStore/MemCached.html#M000069","(key)","",2],["read","Rack::Cache::MetaStore","classes/Rack/Cache/MetaStore.html#M000093","(key)","Locate all cached request/response pairs that match the specified URL key. The result must be an Array",2],["read","Rack::Cache::MetaStore::Dalli","classes/Rack/Cache/MetaStore/Dalli.html#M000116","(key)","",2],["read","Rack::Cache::MetaStore::Disk","classes/Rack/Cache/MetaStore/Disk.html#M000106","(key)","",2],["read","Rack::Cache::MetaStore::GAEStore","classes/Rack/Cache/MetaStore/GAEStore.html#M000125","(key)","",2],["read","Rack::Cache::MetaStore::Heap","classes/Rack/Cache/MetaStore/Heap.html#M000098","(key)","",2],["read","Rack::Cache::MetaStore::MemCached","classes/Rack/Cache/MetaStore/MemCached.html#M000121","(key)","",2],["read_option","Rack::Cache::Options","classes/Rack/Cache/Options.html#M000099","(key)","",2],["record","Rack::Cache::Context","classes/Rack/Cache/Context.html#M000024","(event)","Record that an event took place. ",2],["request_method","Rack::Cache::Request","classes/Rack/Cache/Request.html#M000113","()","The HTTP request method. This is the standard implementation of this method but is respecified here due",2],["requests_match?","Rack::Cache::MetaStore","classes/Rack/Cache/MetaStore.html#M000089","(vary, env1, env2)","Determine whether the two environment hashes are non-varying based on the vary response header value",2],["resolve","Rack::Cache::EntityStore::Disk","classes/Rack/Cache/EntityStore/Disk.html#M000056","(uri)","",2],["resolve","Rack::Cache::EntityStore::GAEStore","classes/Rack/Cache/EntityStore/GAEStore.html#M000078","(uri)","",2],["resolve","Rack::Cache::EntityStore::Heap","classes/Rack/Cache/EntityStore/Heap.html#M000045","(uri)","",2],["resolve","Rack::Cache::EntityStore::MemCacheBase","classes/Rack/Cache/EntityStore/MemCacheBase.html#M000060","(uri)","",2],["resolve","Rack::Cache::MetaStore::Disk","classes/Rack/Cache/MetaStore/Disk.html#M000111","(uri)","",2],["resolve","Rack::Cache::MetaStore::GAEStore","classes/Rack/Cache/MetaStore/GAEStore.html#M000128","(uri)","",2],["resolve","Rack::Cache::MetaStore::Heap","classes/Rack/Cache/MetaStore/Heap.html#M000104","(uri)","",2],["resolve","Rack::Cache::MetaStore::MemCacheBase","classes/Rack/Cache/MetaStore/MemCacheBase.html#M000112","(uri)","Create MemCache store for the given URI. The URI must specify a host and may specify a port, namespace,",2],["resolve_entitystore_uri","Rack::Cache::Storage","classes/Rack/Cache/Storage.html#M000134","(uri)","",2],["resolve_metastore_uri","Rack::Cache::Storage","classes/Rack/Cache/Storage.html#M000133","(uri)","",2],["restore_response","Rack::Cache::MetaStore","classes/Rack/Cache/MetaStore.html#M000086","(hash, body=nil)","Converts a stored response hash into a Response object. The caller is responsible for loading and passing",2],["s_maxage","Rack::Cache::CacheControl","classes/Rack/Cache/CacheControl.html#M000014","()","Alias for #shared_max_age",2],["set","Rack::Cache::Options","classes/Rack/Cache/Options.html#M000091","(option, value=self, &block)","Set an option. When +option+ is a Symbol, it is set in the Rack Environment as \"rack-cache.option\". When",2],["shared_max_age","Rack::Cache::CacheControl","classes/Rack/Cache/CacheControl.html#M000013","()","If a response includes an s-maxage directive, then for a shared cache (but not for a private cache),",2],["shared_max_age=","Rack::Cache::Response","classes/Rack/Cache/Response.html#M000152","(value)","Like #max_age= but sets the s-maxage directive, which applies only to shared caches. ",2],["slurp","Rack::Cache::EntityStore","classes/Rack/Cache/EntityStore.html#M000033","(body)","Read body calculating the SHA1 checksum and size while yielding each chunk to the block. If the body",2],["spread","Rack::Cache::EntityStore::Disk","classes/Rack/Cache/EntityStore/Disk.html#M000053","(key)","",2],["spread","Rack::Cache::MetaStore::Disk","classes/Rack/Cache/MetaStore/Disk.html#M000110","(sha, n=2)","",2],["storage_path","Rack::Cache::EntityStore::Disk","classes/Rack/Cache/EntityStore/Disk.html#M000052","(stem)","",2],["store","Rack::Cache::Context","classes/Rack/Cache/Context.html#M000043","(response)","Write the response to the cache. ",2],["store","Rack::Cache::MetaStore","classes/Rack/Cache/MetaStore.html#M000080","(request, response, entity_store)","Write a cache entry to the store under the given key. Existing entries are read and any that match the",2],["to_a","Rack::Cache::Response","classes/Rack/Cache/Response.html#M000131","()","Return the status, headers, and body in a three-tuple. ",2],["to_hash","Rack::Cache::MetaStore::Heap","classes/Rack/Cache/MetaStore/Heap.html#M000103","()","",2],["to_s","Rack::Cache::CacheControl","classes/Rack/Cache/CacheControl.html#M000017","()","",2],["ttl","Rack::Cache::Response","classes/Rack/Cache/Response.html#M000153","()","The response's time-to-live in seconds, or nil when no freshness information is present in the response.",2],["ttl=","Rack::Cache::Response","classes/Rack/Cache/Response.html#M000154","(seconds)","Set the response's time-to-live for shared caches to the specified number of seconds. This adjusts the",2],["validate","Rack::Cache::Context","classes/Rack/Cache/Context.html#M000032","(entry)","Validate that the cache entry is fresh. The original request is used as a template for a conditional",2],["validateable?","Rack::Cache::Response","classes/Rack/Cache/Response.html#M000142","()","Determine if the response includes headers that can be used to validate the response with the origin",2],["vary","Rack::Cache::Response","classes/Rack/Cache/Response.html#M000159","()","The literal value of the Vary header, or nil when no header is present. ",2],["vary?","Rack::Cache::Response","classes/Rack/Cache/Response.html#M000160","()","Does the response include a Vary header? ",2],["vary_header_names","Rack::Cache::Response","classes/Rack/Cache/Response.html#M000161","()","An array of header names given in the Vary header or an empty array when no Vary header is present. ",2],["write","Rack::Cache::EntityStore::Dalli","classes/Rack/Cache/EntityStore/Dalli.html#M000065","(body, ttl=nil)","",2],["write","Rack::Cache::EntityStore::Disk","classes/Rack/Cache/EntityStore/Disk.html#M000050","(body, ttl=nil)","",2],["write","Rack::Cache::EntityStore::GAEStore","classes/Rack/Cache/EntityStore/GAEStore.html#M000076","(body, ttl=nil)","",2],["write","Rack::Cache::EntityStore::Heap","classes/Rack/Cache/EntityStore/Heap.html#M000041","(body, ttl=nil)","Write the Rack response body immediately and return the SHA1 key. ",2],["write","Rack::Cache::EntityStore::MemCached","classes/Rack/Cache/EntityStore/MemCached.html#M000070","(body, ttl=0)","",2],["write","Rack::Cache::MetaStore","classes/Rack/Cache/MetaStore.html#M000094","(key, negotiations)","Store an Array of request/response pairs for the given key. Concrete implementations should not attempt",2],["write","Rack::Cache::MetaStore::Dalli","classes/Rack/Cache/MetaStore/Dalli.html#M000117","(key, entries)","",2],["write","Rack::Cache::MetaStore::Disk","classes/Rack/Cache/MetaStore/Disk.html#M000107","(key, entries)","",2],["write","Rack::Cache::MetaStore::GAEStore","classes/Rack/Cache/MetaStore/GAEStore.html#M000126","(key, entries)","",2],["write","Rack::Cache::MetaStore::Heap","classes/Rack/Cache/MetaStore/Heap.html#M000101","(key, entries)","",2],["write","Rack::Cache::MetaStore::MemCached","classes/Rack/Cache/MetaStore/MemCached.html#M000122","(key, entries)","",2],["write_option","Rack::Cache::Options","classes/Rack/Cache/Options.html#M000100","(key, value)","",2],["CHANGES","files/CHANGES.html","files/CHANGES.html","","## 1.1 / September 2011    * Allow (INM/IMS) validation requests through to backend on miss. Makes it",3],["COPYING","files/COPYING.html","files/COPYING.html","","Copyright (c) 2008 Ryan Tomayko <http://tomayko.com/about>  Permission is hereby granted, free of charge,",3],["README","files/README.html","files/README.html","","Rack::Cache ===========  Rack::Cache is suitable as a quick drop-in component to enable HTTP caching",3],["TODO","files/TODO.html","files/TODO.html","","## 0.5    - Document allow_revalidate and allow_reload options.   - Support multiple memcache servers.",3],["rack-cache.rb","files/lib/rack-cache_rb.html","files/lib/rack-cache_rb.html","","",3],["cache.rb","files/lib/rack/cache_rb.html","files/lib/rack/cache_rb.html","","",3],["appengine.rb","files/lib/rack/cache/appengine_rb.html","files/lib/rack/cache/appengine_rb.html","","",3],["cachecontrol.rb","files/lib/rack/cache/cachecontrol_rb.html","files/lib/rack/cache/cachecontrol_rb.html","","",3],["context.rb","files/lib/rack/cache/context_rb.html","files/lib/rack/cache/context_rb.html","","",3],["entitystore.rb","files/lib/rack/cache/entitystore_rb.html","files/lib/rack/cache/entitystore_rb.html","","",3],["key.rb","files/lib/rack/cache/key_rb.html","files/lib/rack/cache/key_rb.html","","",3],["metastore.rb","files/lib/rack/cache/metastore_rb.html","files/lib/rack/cache/metastore_rb.html","","",3],["options.rb","files/lib/rack/cache/options_rb.html","files/lib/rack/cache/options_rb.html","","",3],["request.rb","files/lib/rack/cache/request_rb.html","files/lib/rack/cache/request_rb.html","","",3],["response.rb","files/lib/rack/cache/response_rb.html","files/lib/rack/cache/response_rb.html","","",3],["storage.rb","files/lib/rack/cache/storage_rb.html","files/lib/rack/cache/storage_rb.html","","",3]],"searchIndex":["rack","cache","appengine","mc","memcache","cachecontrol","context","entitystore","dalli","disk","gaestore","heap","memcachebase","memcached","key","metastore","dalli","disk","gaestore","heap","memcachebase","memcached","options","request","response","storage","age()","body_path()","bytesize()","bytesize()","cache_control()","cache_control()","cache_control=()","cache_key()","cacheable?()","call()","call()","call!()","clear()","client_ttl=()","contains?()","create_store()","date()","delete()","entitystore()","etag()","exist?()","exist?()","exist?()","exist?()","exist?()","expire!()","expires()","fetch()","forward()","fresh?()","fresh_enough?()","generate()","get()","hexdigest()","initialize_copy()","initialize_options()","instance()","invalidate()","invalidate()","key_path()","last_modified()","log_error()","lookup()","lookup()","max_age()","max_age()","max_age=()","metastore()","must_revalidate?()","must_revalidate?()","namespace()","namespace=()","new()","new()","new()","new()","new()","new()","new()","new()","new()","new()","new()","new()","new()","new()","new()","new()","new()","no_cache?()","no_cache?()","no_store?()","not_modified!()","not_modified?()","open()","open()","open()","open()","option_accessor()","option_name()","option_name()","options()","options=()","parse()","pass()","persist_request()","persist_response()","private=()","private?()","private_request?()","proxy_revalidate?()","public?()","purge()","purge()","purge()","purge()","purge()","purge()","purge()","purge()","purge()","purge()","purge()","put()","query_string()","read()","read()","read()","read()","read()","read()","read()","read()","read()","read()","read()","read_option()","record()","request_method()","requests_match?()","resolve()","resolve()","resolve()","resolve()","resolve()","resolve()","resolve()","resolve()","resolve_entitystore_uri()","resolve_metastore_uri()","restore_response()","s_maxage()","set()","shared_max_age()","shared_max_age=()","slurp()","spread()","spread()","storage_path()","store()","store()","to_a()","to_hash()","to_s()","ttl()","ttl=()","validate()","validateable?()","vary()","vary?()","vary_header_names()","write()","write()","write()","write()","write()","write()","write()","write()","write()","write()","write()","write_option()","changes","copying","readme","todo","rack-cache.rb","cache.rb","appengine.rb","cachecontrol.rb","context.rb","entitystore.rb","key.rb","metastore.rb","options.rb","request.rb","response.rb","storage.rb"],"longSearchIndex":["lib/rack/cache/cachecontrol.rb","rack","rack::cache","rack::cache::appengine","rack::cache::appengine","rack::cache","rack::cache","rack::cache","rack::cache::entitystore","rack::cache::entitystore","rack::cache::entitystore","rack::cache::entitystore","rack::cache::entitystore","rack::cache::entitystore","rack::cache","rack::cache","rack::cache::metastore","rack::cache::metastore","rack::cache::metastore","rack::cache::metastore","rack::cache::metastore","rack::cache::metastore","rack::cache","rack::cache","rack::cache","rack::cache","rack::cache::response","rack::cache::entitystore::disk","rack::cache::entitystore","rack::cache::entitystore","rack::cache::request","rack::cache::response","rack::cache::response","rack::cache::metastore","rack::cache::response","rack::cache::context","rack::cache::key","rack::cache::context","rack::cache::storage","rack::cache::response","rack::cache::appengine::memcache","rack::cache::storage","rack::cache::response","rack::cache::appengine::memcache","rack::cache::context","rack::cache::response","rack::cache::entitystore::dalli","rack::cache::entitystore::disk","rack::cache::entitystore::gaestore","rack::cache::entitystore::heap","rack::cache::entitystore::memcached","rack::cache::response","rack::cache::response","rack::cache::context","rack::cache::context","rack::cache::response","rack::cache::context","rack::cache::key","rack::cache::appengine::memcache","rack::cache::metastore","rack::cache::response","rack::cache::options","rack::cache::storage","rack::cache::context","rack::cache::metastore","rack::cache::metastore::disk","rack::cache::response","rack::cache::context","rack::cache::context","rack::cache::metastore","rack::cache::cachecontrol","rack::cache::response","rack::cache::response","rack::cache::context","rack::cache::cachecontrol","rack::cache::response","rack::cache::appengine::memcache","rack::cache::appengine::memcache","rack::cache","rack::cache::appengine::memcache","rack::cache::cachecontrol","rack::cache::context","rack::cache::entitystore::dalli","rack::cache::entitystore::disk","rack::cache::entitystore::gaestore","rack::cache::entitystore::heap","rack::cache::entitystore::memcached","rack::cache::key","rack::cache::metastore::dalli","rack::cache::metastore::disk","rack::cache::metastore::gaestore","rack::cache::metastore::heap","rack::cache::metastore::memcached","rack::cache::response","rack::cache::storage","rack::cache::cachecontrol","rack::cache::request","rack::cache::cachecontrol","rack::cache::response","rack::cache::context","rack::cache::entitystore::disk","rack::cache::entitystore::gaestore","rack::cache::entitystore::heap","rack::cache::entitystore::memcachebase","rack::cache::options","rack::cache::options","rack::cache::options","rack::cache::options","rack::cache::options","rack::cache::cachecontrol","rack::cache::context","rack::cache::metastore","rack::cache::metastore","rack::cache::response","rack::cache::cachecontrol","rack::cache::context","rack::cache::cachecontrol","rack::cache::cachecontrol","rack::cache::entitystore::dalli","rack::cache::entitystore::disk","rack::cache::entitystore::gaestore","rack::cache::entitystore::heap","rack::cache::entitystore::memcached","rack::cache::metastore","rack::cache::metastore::dalli","rack::cache::metastore::disk","rack::cache::metastore::gaestore","rack::cache::metastore::heap","rack::cache::metastore::memcached","rack::cache::appengine::memcache","rack::cache::key","rack::cache::entitystore::dalli","rack::cache::entitystore::disk","rack::cache::entitystore::gaestore","rack::cache::entitystore::heap","rack::cache::entitystore::memcached","rack::cache::metastore","rack::cache::metastore::dalli","rack::cache::metastore::disk","rack::cache::metastore::gaestore","rack::cache::metastore::heap","rack::cache::metastore::memcached","rack::cache::options","rack::cache::context","rack::cache::request","rack::cache::metastore","rack::cache::entitystore::disk","rack::cache::entitystore::gaestore","rack::cache::entitystore::heap","rack::cache::entitystore::memcachebase","rack::cache::metastore::disk","rack::cache::metastore::gaestore","rack::cache::metastore::heap","rack::cache::metastore::memcachebase","rack::cache::storage","rack::cache::storage","rack::cache::metastore","rack::cache::cachecontrol","rack::cache::options","rack::cache::cachecontrol","rack::cache::response","rack::cache::entitystore","rack::cache::entitystore::disk","rack::cache::metastore::disk","rack::cache::entitystore::disk","rack::cache::context","rack::cache::metastore","rack::cache::response","rack::cache::metastore::heap","rack::cache::cachecontrol","rack::cache::response","rack::cache::response","rack::cache::context","rack::cache::response","rack::cache::response","rack::cache::response","rack::cache::response","rack::cache::entitystore::dalli","rack::cache::entitystore::disk","rack::cache::entitystore::gaestore","rack::cache::entitystore::heap","rack::cache::entitystore::memcached","rack::cache::metastore","rack::cache::metastore::dalli","rack::cache::metastore::disk","rack::cache::metastore::gaestore","rack::cache::metastore::heap","rack::cache::metastore::memcached","rack::cache::options","files/changes.html","files/copying.html","files/readme.html","files/todo.html","files/lib/rack-cache_rb.html","files/lib/rack/cache_rb.html","files/lib/rack/cache/appengine_rb.html","files/lib/rack/cache/cachecontrol_rb.html","files/lib/rack/cache/context_rb.html","files/lib/rack/cache/entitystore_rb.html","files/lib/rack/cache/key_rb.html","files/lib/rack/cache/metastore_rb.html","files/lib/rack/cache/options_rb.html","files/lib/rack/cache/request_rb.html","files/lib/rack/cache/response_rb.html","files/lib/rack/cache/storage_rb.html"]}}