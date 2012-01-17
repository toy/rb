var search_data = {"index":{"info":[["Plist","lib/plist/generator.rb","classes/Plist.html"," < ","= plist Copyright 2006-2010 Ben Bleything and Patrick May Distributed under the MIT License --- Plist",1],["Emit","Plist","classes/Plist/Emit.html"," < ","=== Create a plist You can dump an object to a plist in one of two ways: * <tt>Plist::Emit.dump(obj)</tt>",1],["Listener","Plist","classes/Plist/Listener.html"," < Object","",1],["PArray","Plist","classes/Plist/PArray.html"," < PTag","",1],["PData","Plist","classes/Plist/PData.html"," < PTag","",1],["PDate","Plist","classes/Plist/PDate.html"," < PTag","",1],["PDict","Plist","classes/Plist/PDict.html"," < PTag","",1],["PFalse","Plist","classes/Plist/PFalse.html"," < PTag","",1],["PInteger","Plist","classes/Plist/PInteger.html"," < PTag","",1],["PKey","Plist","classes/Plist/PKey.html"," < PTag","",1],["PList","Plist","classes/Plist/PList.html"," < PTag","",1],["PReal","Plist","classes/Plist/PReal.html"," < PTag","",1],["PString","Plist","classes/Plist/PString.html"," < PTag","",1],["PTag","Plist","classes/Plist/PTag.html"," < Object","",1],["PTrue","Plist","classes/Plist/PTrue.html"," < PTag","",1],["StreamParser","Plist","classes/Plist/StreamParser.html"," < Object","",1],["comment","Plist::Emit","classes/Plist/Emit.html#M000012","(content)","",2],["dump","Plist::Emit","classes/Plist/Emit.html#M000002","(obj, envelope = true)","The following Ruby classes are converted into native plist types: Array, Bignum, Date, DateTime, Fixnum,",2],["element_type","Plist::Emit","classes/Plist/Emit.html#M000017","(item)","",2],["inherited","Plist::PTag","classes/Plist/PTag.html#M000015","( sub_class )","",2],["mappings","Plist::PTag","classes/Plist/PTag.html#M000014","()","",2],["new","Plist::Listener","classes/Plist/Listener.html#M000006","()","",2],["new","Plist::PTag","classes/Plist/PTag.html#M000018","()","",2],["new","Plist::StreamParser","classes/Plist/StreamParser.html#M000010","( plist_data_or_file, listener )","",2],["parse","Plist::StreamParser","classes/Plist/StreamParser.html#M000011","()","",2],["parse_xml","Plist","classes/Plist.html#M000005","( filename_or_xml )","Note that I don't use these two elements much: + Date elements are returned as DateTime objects. + Data",2],["plist_node","Plist::Emit","classes/Plist/Emit.html#M000004","(element)","",2],["save_plist","Plist::Emit","classes/Plist/Emit.html#M000003","(obj, filename)","Writes the serialized object's plist to the specified filename. ",2],["save_plist","Plist::Emit","classes/Plist/Emit.html#M000001","(filename)","Helper method for injecting into classes.  Calls <tt>Plist::Emit.save_plist</tt> with +self+. ",2],["tag","Plist::Emit","classes/Plist/Emit.html#M000013","(type, contents = '', &block)","",2],["tag_end","Plist::Listener","classes/Plist/Listener.html#M000009","(name)","",2],["tag_start","Plist::Listener","classes/Plist/Listener.html#M000007","(name, attributes)","",2],["text","Plist::Listener","classes/Plist/Listener.html#M000008","( contents )","",2],["to_plist","Plist::Emit","classes/Plist/Emit.html#M000000","(envelope = true)","Helper method for injecting into classes.  Calls <tt>Plist::Emit.dump</tt> with +self+. ",2],["to_ruby","Plist::PArray","classes/Plist/PArray.html#M000024","()","",2],["to_ruby","Plist::PData","classes/Plist/PData.html#M000030","()","",2],["to_ruby","Plist::PDate","classes/Plist/PDate.html#M000029","()","",2],["to_ruby","Plist::PDict","classes/Plist/PDict.html#M000021","()","",2],["to_ruby","Plist::PFalse","classes/Plist/PFalse.html#M000027","()","",2],["to_ruby","Plist::PInteger","classes/Plist/PInteger.html#M000025","()","",2],["to_ruby","Plist::PKey","classes/Plist/PKey.html#M000022","()","",2],["to_ruby","Plist::PList","classes/Plist/PList.html#M000020","()","",2],["to_ruby","Plist::PReal","classes/Plist/PReal.html#M000028","()","",2],["to_ruby","Plist::PString","classes/Plist/PString.html#M000023","()","",2],["to_ruby","Plist::PTag","classes/Plist/PTag.html#M000019","()","",2],["to_ruby","Plist::PTrue","classes/Plist/PTrue.html#M000026","()","",2],["wrap","Plist::Emit","classes/Plist/Emit.html#M000016","(contents)","",2],["CHANGELOG","files/CHANGELOG.html","files/CHANGELOG.html","","= plist - All-purpose Property List manipulation library  === Release version 3.0.0!  2010-02-23:  *",3],["LICENSE","files/LICENSE.html","files/LICENSE.html","","Copyright (c) 2006-2010, Ben Bleything and Patrick May  Permission is hereby granted, free of charge,",3],["README.rdoc","files/README_rdoc.html","files/README_rdoc.html","","= All-purpose Property List manipulation library  Plist is a library to manipulate Property List files,",3],["plist.rb","files/lib/plist_rb.html","files/lib/plist_rb.html","","= plist This is the main file for plist. Everything interesting happens in Plist and Plist::Emit. Copyright",3],["generator.rb","files/lib/plist/generator_rb.html","files/lib/plist/generator_rb.html","","= plist Copyright 2006-2010 Ben Bleything and Patrick May Distributed under the MIT License --- Plist",3],["parser.rb","files/lib/plist/parser_rb.html","files/lib/plist/parser_rb.html","","= plist Copyright 2006-2010 Ben Bleything and Patrick May Distributed under the MIT License ",3]],"searchIndex":["plist","emit","listener","parray","pdata","pdate","pdict","pfalse","pinteger","pkey","plist","preal","pstring","ptag","ptrue","streamparser","comment()","dump()","element_type()","inherited()","mappings()","new()","new()","new()","parse()","parse_xml()","plist_node()","save_plist()","save_plist()","tag()","tag_end()","tag_start()","text()","to_plist()","to_ruby()","to_ruby()","to_ruby()","to_ruby()","to_ruby()","to_ruby()","to_ruby()","to_ruby()","to_ruby()","to_ruby()","to_ruby()","to_ruby()","wrap()","changelog","license","readme.rdoc","plist.rb","generator.rb","parser.rb"],"longSearchIndex":["lib/plist.rb","plist","plist","plist","plist","plist","plist","plist","plist","plist","plist","plist","plist","plist","plist","plist","plist::emit","plist::emit","plist::emit","plist::ptag","plist::ptag","plist::listener","plist::ptag","plist::streamparser","plist::streamparser","plist","plist::emit","plist::emit","plist::emit","plist::emit","plist::listener","plist::listener","plist::listener","plist::emit","plist::parray","plist::pdata","plist::pdate","plist::pdict","plist::pfalse","plist::pinteger","plist::pkey","plist::plist","plist::preal","plist::pstring","plist::ptag","plist::ptrue","plist::emit","files/changelog.html","files/license.html","files/readme_rdoc.html","files/lib/plist_rb.html","files/lib/plist/generator_rb.html","files/lib/plist/parser_rb.html"]}}