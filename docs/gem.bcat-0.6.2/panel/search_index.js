var search_data = {"index":{"info":[["Bcat","lib/bcat/browser.rb","classes/Bcat.html"," < Object","",1],["ANSI","Bcat","classes/Bcat/ANSI.html"," < Object","Converts ANSI color sequences to HTML. The ANSI module is based on code from the following libraries:",1],["Browser","Bcat","classes/Bcat/Browser.html"," < Object","",1],["HeadParser","Bcat","classes/Bcat/HeadParser.html"," < Object","Parses HTML until the first displayable body character and provides methods for accessing head and body",1],["Reader","Bcat","classes/Bcat/Reader.html"," < Object","ARGF style multi-file streaming interface. Input is read with IO#readpartial to avoid buffering. ",1],["Server","Bcat","classes/Bcat/Server.html"," < Object","Simple Rack handler based largely on Scott Chacon's kidgloves library: http://github.com/schacon/kidgloves",1],["TeeFilter","Bcat","classes/Bcat/TeeFilter.html"," < Object","Like Reader but writes all input to an output IO object in addition to yielding to the block. ",1],["TextFilter","Bcat","classes/Bcat/TextFilter.html"," < Object","",1],["[]","Bcat","classes/Bcat.html#M000037","(key)","",2],["assemble","Bcat","classes/Bcat.html#M000041","()","",2],["bind","Bcat::Server","classes/Bcat/Server.html#M000028","(host, port)","",2],["body","Bcat::HeadParser","classes/Bcat/HeadParser.html#M000013","(inject=nil)","The current body contents. The <body> tag is guaranteed to be present. If a <body> was included in the",2],["browser_command","Bcat","classes/Bcat.html#M000003","(browser=@browser)","",2],["call","Bcat","classes/Bcat.html#M000040","(env)","",2],["close","Bcat","classes/Bcat.html#M000046","()","",2],["command","Bcat","classes/Bcat.html#M000002","()","",2],["complete?","Bcat::HeadParser","classes/Bcat/HeadParser.html#M000010","()","Truthy once the first displayed character of the body has arrived. ",2],["content_for_head","Bcat","classes/Bcat.html#M000043","(inject='')","",2],["each","Bcat","classes/Bcat.html#M000042","()","",2],["each","Bcat::ANSI","classes/Bcat/ANSI.html#M000007","()","",2],["each","Bcat::Reader","classes/Bcat/Reader.html#M000023","()","",2],["each","Bcat::TeeFilter","classes/Bcat/TeeFilter.html#M000030","()","",2],["each","Bcat::TextFilter","classes/Bcat/TextFilter.html#M000032","()","",2],["escape_js","Bcat","classes/Bcat.html#M000045","(string)","",2],["feed","Bcat::HeadParser","classes/Bcat/HeadParser.html#M000009","(data)","Called to parse new data as it arrives. ",2],["foot","Bcat","classes/Bcat.html#M000044","()","",2],["head","Bcat::HeadParser","classes/Bcat/HeadParser.html#M000012","()","The head contents without any DOCTYPE, <html>, or <head> tags. This should consist of only <style>, <script>,",2],["html?","Bcat::HeadParser","classes/Bcat/HeadParser.html#M000011","()","Determine if the input is HTML. This is nil before the first non-whitespace character is received, true",2],["listen","Bcat::Server","classes/Bcat/Server.html#M000029","()","",2],["log","Bcat::Server","classes/Bcat/Server.html#M000033","(message)","",2],["new","Bcat","classes/Bcat.html#M000036","(args=[], config={})","",2],["new","Bcat","classes/Bcat.html#M000000","(browser, command=ENV['BCAT_COMMAND'])","",2],["new","Bcat::ANSI","classes/Bcat/ANSI.html#M000005","(input)","",2],["new","Bcat::HeadParser","classes/Bcat/HeadParser.html#M000008","()","",2],["new","Bcat::Reader","classes/Bcat/Reader.html#M000019","(is_command, args=[])","",2],["new","Bcat::Server","classes/Bcat/Server.html#M000025","(app, options={})","",2],["new","Bcat::TeeFilter","classes/Bcat/TeeFilter.html#M000027","(source, out=$stdout)","",2],["new","Bcat::TextFilter","classes/Bcat/TextFilter.html#M000031","(source, force=false)","",2],["notice","Bcat","classes/Bcat.html#M000047","(message)","",2],["open","Bcat","classes/Bcat.html#M000001","(url)","",2],["open","Bcat::Reader","classes/Bcat/Reader.html#M000020","()","",2],["open_command","Bcat::Reader","classes/Bcat/Reader.html#M000021","()","",2],["open_files","Bcat::Reader","classes/Bcat/Reader.html#M000022","()","",2],["parse","Bcat::HeadParser","classes/Bcat/HeadParser.html#M000015","(buf=@buf)","Parses buf into head and body parts. Basic approach is to eat anything possibly body related until we",2],["process_request","Bcat::Server","classes/Bcat/Server.html#M000035","(request, input_body, socket)","",2],["push_style","Bcat::ANSI","classes/Bcat/ANSI.html#M000016","(style)","",2],["push_tag","Bcat::ANSI","classes/Bcat/ANSI.html#M000014","(tag, style=nil)","",2],["reset_styles","Bcat::ANSI","classes/Bcat/ANSI.html#M000017","()","",2],["run","Bcat::Server","classes/Bcat/Server.html#M000024","(app, options={}, &block)","",2],["serve!","Bcat","classes/Bcat.html#M000039","(&bk)","",2],["shell_quote","Bcat","classes/Bcat.html#M000004","(argument)","",2],["sniff","Bcat::Reader","classes/Bcat/Reader.html#M000026","()","",2],["status_message","Bcat::Server","classes/Bcat/Server.html#M000034","(code)","",2],["to_app","Bcat","classes/Bcat.html#M000038","()","",2],["to_html","Bcat::ANSI","classes/Bcat/ANSI.html#M000006","()","",2],["tokenize","Bcat::ANSI","classes/Bcat/ANSI.html#M000018","(text)","",2],["COPYING","files/COPYING.html","files/COPYING.html","","bcat Copyright (c) 2010 Ryan Tomayko <http://tomayko.com/about>  Permission is hereby granted, free of",3],["README","files/README.html","files/README.html","","bcat     http://github.com/rtomayko/bcat     git clone git://github.com/rtomayko/bcat.git     gem install",3],["bcat.rb","files/lib/bcat_rb.html","files/lib/bcat_rb.html","","",3],["ansi.rb","files/lib/bcat/ansi_rb.html","files/lib/bcat/ansi_rb.html","","",3],["browser.rb","files/lib/bcat/browser_rb.html","files/lib/bcat/browser_rb.html","","",3],["html.rb","files/lib/bcat/html_rb.html","files/lib/bcat/html_rb.html","","",3],["reader.rb","files/lib/bcat/reader_rb.html","files/lib/bcat/reader_rb.html","","",3],["server.rb","files/lib/bcat/server_rb.html","files/lib/bcat/server_rb.html","","",3]],"searchIndex":["bcat","ansi","browser","headparser","reader","server","teefilter","textfilter","[]()","assemble()","bind()","body()","browser_command()","call()","close()","command()","complete?()","content_for_head()","each()","each()","each()","each()","each()","escape_js()","feed()","foot()","head()","html?()","listen()","log()","new()","new()","new()","new()","new()","new()","new()","new()","notice()","open()","open()","open_command()","open_files()","parse()","process_request()","push_style()","push_tag()","reset_styles()","run()","serve!()","shell_quote()","sniff()","status_message()","to_app()","to_html()","tokenize()","copying","readme","bcat.rb","ansi.rb","browser.rb","html.rb","reader.rb","server.rb"],"longSearchIndex":["lib/bcat.rb","bcat","bcat","bcat","bcat","bcat","bcat","bcat","bcat","bcat","bcat::server","bcat::headparser","bcat","bcat","bcat","bcat","bcat::headparser","bcat","bcat","bcat::ansi","bcat::reader","bcat::teefilter","bcat::textfilter","bcat","bcat::headparser","bcat","bcat::headparser","bcat::headparser","bcat::server","bcat::server","bcat","bcat","bcat::ansi","bcat::headparser","bcat::reader","bcat::server","bcat::teefilter","bcat::textfilter","bcat","bcat","bcat::reader","bcat::reader","bcat::reader","bcat::headparser","bcat::server","bcat::ansi","bcat::ansi","bcat::ansi","bcat::server","bcat","bcat","bcat::reader","bcat::server","bcat","bcat::ansi","bcat::ansi","files/copying.html","files/readme.html","files/lib/bcat_rb.html","files/lib/bcat/ansi_rb.html","files/lib/bcat/browser_rb.html","files/lib/bcat/html_rb.html","files/lib/bcat/reader_rb.html","files/lib/bcat/server_rb.html"]}}