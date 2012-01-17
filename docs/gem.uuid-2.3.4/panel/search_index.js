var search_data = {"index":{"info":[["UUID","lib/uuid.rb","classes/UUID.html"," < Object","= Generating UUIDs Call #generate to generate a new UUID. The method returns a string in one of three",1],["Client","UUID","classes/UUID/Client.html"," < Object","Every server needs a client.  Client provides you with the single ultimate method: #generate.  Typically",1],["Server","UUID","classes/UUID/Server.html"," < Object","With UUID server you don't have to worry about multiple processes synchronizing over the state file,",1],["Version","UUID","classes/UUID/Version.html"," < ","Version number. ",1],["bind","UUID::Server","classes/UUID/Server.html#M000019","(address)","Returns UNIXServer or TCPServer from address.  Returns argument if not a string, so can pass through",2],["close","UUID::Client","classes/UUID/Client.html#M000025","()","Close the socket. ",2],["connect","UUID::Client","classes/UUID/Client.html#M000022","(address)","Returns UNIXSocket or TCPSocket from address.  Returns argument if not a string, so can pass through.",2],["generate","UUID","classes/UUID.html#M000011","(format = :default)","Generates a new UUID string using +format+.  See FORMATS for a list of supported formats. ",2],["generate","UUID","classes/UUID.html#M000001","(format = :default)","Generates a new UUID string using +format+.  See FORMATS for a list of supported formats. ",2],["generate","UUID::Client","classes/UUID/Client.html#M000021","(format = :default)","Talks to server and returns new UUID in specified format. ",2],["generator","UUID","classes/UUID.html#M000002","()","Returns the UUID generator used by generate.  Useful if you need to mess with it, e.g. force next sequence",2],["iee_mac_address","UUID","classes/UUID.html#M000008","()","Uses system calls to get a mac address ",2],["inspect","UUID","classes/UUID.html#M000013","()","",2],["inspect","UUID::Client","classes/UUID/Client.html#M000024","()","",2],["listen","UUID::Server","classes/UUID/Server.html#M000018","(address)","Start the server listening on the specific address.  Blocks and never returns.  Address can be: - A Socket",2],["mac_address","UUID","classes/UUID.html#M000009","()","return iee_mac_address if available, pseudo_mac_address otherwise ",2],["mode","UUID","classes/UUID.html#M000000","()","The access mode of the state file.  Set it with state_file. ",2],["new","UUID","classes/UUID.html#M000010","()","Create a new UUID generator.  You really only need to do this once. ",2],["new","UUID::Client","classes/UUID/Client.html#M000020","(address)","",2],["new","UUID::Server","classes/UUID/Server.html#M000017","()","Create new server.  Nothing interesting happens until you call listen. ",2],["next_sequence","UUID","classes/UUID.html#M000012","()","Updates the state file with a new sequence number. ",2],["open_lock","UUID","classes/UUID.html#M000014","(mode)","Open the state file with an exclusive lock and access mode +mode+. ",2],["pseudo_mac_address","UUID","classes/UUID.html#M000007","()","Generate a pseudo MAC address because we have no pure-ruby way to know  the MAC  address of the  NIC",2],["read_state","UUID","classes/UUID.html#M000015","(io)","Read the state from +io+ ",2],["server=","UUID","classes/UUID.html#M000003","(address)","Call this to use a UUID Server.  Expects address to bind to (SOCKET_NAME is a good default) ",2],["state_file","UUID","classes/UUID.html#M000004","(mode = 0644)","Creates an empty state file in /var/tmp/ruby-uuid or the windows common application data directory using",2],["state_file=","UUID","classes/UUID.html#M000005","(path)","Specify the path of the state file.  Use this if you need a different location for your state file. Set",2],["validate","UUID","classes/UUID.html#M000006","(uuid)","Returns true if +uuid+ is in compact, default or urn formats.  Does not validate the layout (RFC 4122",2],["write_state","UUID","classes/UUID.html#M000016","(io)","Write that state to +io+ ",2],["CHANGELOG","files/CHANGELOG.html","files/CHANGELOG.html","","2.3.4 (2011-09-01)  Fixed State file mode isn't respected with standard umask (Brandon Turner).  2.3.3",3],["MIT-LICENSE","files/MIT-LICENSE.html","files/MIT-LICENSE.html","","Copyright (c) 2005-2010 Assaf Arkin, Eric Hodel  Permission is hereby granted, free of charge, to any",3],["README.rdoc","files/README_rdoc.html","files/README_rdoc.html","","= UUID Generator  Generates universally unique identifiers (UUIDs) for use in distributed applications.",3],["uuid.rb","files/lib/uuid_rb.html","files/lib/uuid_rb.html","","= uuid.rb - UUID generator Author:: Assaf Arkin  assaf@labnotes.org Eric Hodel drbrain@segment7.net Copyright::",3]],"searchIndex":["uuid","client","server","version","bind()","close()","connect()","generate()","generate()","generate()","generator()","iee_mac_address()","inspect()","inspect()","listen()","mac_address()","mode()","new()","new()","new()","next_sequence()","open_lock()","pseudo_mac_address()","read_state()","server=()","state_file()","state_file=()","validate()","write_state()","changelog","mit-license","readme.rdoc","uuid.rb"],"longSearchIndex":["lib/uuid.rb","uuid","uuid","uuid","uuid::server","uuid::client","uuid::client","uuid","uuid","uuid::client","uuid","uuid","uuid","uuid::client","uuid::server","uuid","uuid","uuid","uuid::client","uuid::server","uuid","uuid","uuid","uuid","uuid","uuid","uuid","uuid","uuid","files/changelog.html","files/mit-license.html","files/readme_rdoc.html","files/lib/uuid_rb.html"]}}