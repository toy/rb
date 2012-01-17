var search_data = {"index":{"info":[["BlankSlate","lib/blankslate.rb","classes/BlankSlate.html"," < Object","BlankSlate provides an abstract base class with no predefined methods (except for <tt>\\_\\_send__</tt>",1],["Builder","lib/builder/blankslate.rb","classes/Builder.html"," < ","BlankSlate has been promoted to a top level name and is now available as a standalone gem.  We make the",1],["IllegalBlockError","Builder","classes/Builder/IllegalBlockError.html"," < RuntimeError","Generic error for builder ",1],["XmlBase","Builder","classes/Builder/XmlBase.html"," < BlankSlate","XmlBase is a base class for building XML builders.  See Builder::XmlMarkup and Builder::XmlEvents for",1],["XmlEvents","Builder","classes/Builder/XmlEvents.html"," < XmlMarkup","Create a series of SAX-like XML events (e.g. start_tag, end_tag) from the markup code.  XmlEvent objects",1],["XmlMarkup","Builder","classes/Builder/XmlMarkup.html"," < XmlBase","Create XML markup easily.  All (well, almost all) methods sent to an XmlMarkup object will be translated",1],["Fixnum","lib/builder/xchar.rb","classes/Fixnum.html"," < Object","Enhance the Fixnum class with a XML escaped character conversion. ",1],["Kernel","lib/blankslate.rb","classes/Kernel.html"," < ","Since Ruby is very dynamic, methods added to the ancestors of BlankSlate <em>after BlankSlate is defined</em>",1],["Module","lib/blankslate.rb","classes/Module.html"," < Object","Also, modules included into Object need to be scanned and have their instance methods removed from blank",1],["Object","lib/blankslate.rb","classes/Object.html"," < Object","Same as above, except in Object. ",1],["String","lib/builder/xchar.rb","classes/String.html"," < Object","Enhance the String class with a XML escaped character version of to_s. ",1],["<<","Builder::XmlBase","classes/Builder/XmlBase.html#M000017","(text)","Append text to the output target without escaping any markup. May be used within the markup brackets",2],["_attr_value","Builder::XmlMarkup","classes/Builder/XmlMarkup.html#M000039","(value)","",2],["_end_tag","Builder::XmlEvents","classes/Builder/XmlEvents.html#M000027","(sym)","",2],["_end_tag","Builder::XmlMarkup","classes/Builder/XmlMarkup.html#M000037","(sym)","Insert an ending tag. ",2],["_ensure_no_block","Builder::XmlMarkup","classes/Builder/XmlMarkup.html#M000040","(got_block)","",2],["_escape","Builder::XmlBase","classes/Builder/XmlBase.html#M000019","(text)","",2],["_escape","Builder::XmlBase","classes/Builder/XmlBase.html#M000020","(text)","",2],["_escape_quote","Builder::XmlBase","classes/Builder/XmlBase.html#M000021","(text)","",2],["_indent","Builder::XmlBase","classes/Builder/XmlBase.html#M000023","()","",2],["_insert_attributes","Builder::XmlMarkup","classes/Builder/XmlMarkup.html#M000038","(attrs, order=[])","Insert the attributes (given in the hash). ",2],["_nested_structures","Builder::XmlBase","classes/Builder/XmlBase.html#M000024","(block)","",2],["_newline","Builder::XmlBase","classes/Builder/XmlBase.html#M000022","()","",2],["_special","Builder::XmlMarkup","classes/Builder/XmlMarkup.html#M000035","(open, close, data=nil, attrs=nil, order=[])","Insert special instruction.  ",2],["_start_tag","Builder::XmlEvents","classes/Builder/XmlEvents.html#M000026","(sym, attrs, end_too=false)","",2],["_start_tag","Builder::XmlMarkup","classes/Builder/XmlMarkup.html#M000036","(sym, attrs, end_too=false)","Start an XML tag.  If <tt>end_too</tt> is true, then the start tag is also the end tag (e.g.  <br/> ",2],["_text","Builder::XmlMarkup","classes/Builder/XmlMarkup.html#M000034","(text)","Insert text directly in to the builder's target. ",2],["append_features","Module","classes/Module.html#M000008","(mod)","",2],["blank_slate_method_added","Kernel","classes/Kernel.html#M000004","(name)","Alias for #method_added",2],["blank_slate_method_added","Object","classes/Object.html#M000006","(name)","Alias for #method_added",2],["blankslate_original_append_features","Module","classes/Module.html#M000009","(mod)","Alias for #append_features",2],["cdata!","Builder::XmlMarkup","classes/Builder/XmlMarkup.html#M000033","(text)","Insert a CDATA section into the XML markup. For example: xml.cdata!(\"text to be included in cdata\") #=>",2],["check_for_name_collision","Builder","classes/Builder.html#M000010","(klass, method_name, defined_constant=nil)","",2],["comment!","Builder::XmlMarkup","classes/Builder/XmlMarkup.html#M000030","(comment_text)","",2],["declare!","Builder::XmlMarkup","classes/Builder/XmlMarkup.html#M000031","(inst, *args, &block)","Insert an XML declaration into the XML markup. For example: xml.declare! :ELEMENT, :blah, \"yada\" # =>",2],["find_hidden_method","BlankSlate","classes/BlankSlate.html#M000001","(name)","",2],["find_hidden_method","Object","classes/Object.html#M000007","(name)","",2],["hide","BlankSlate","classes/BlankSlate.html#M000000","(name)","Hide the method named +name+ in the BlankSlate class.  Don't hide +instance_eval+ or any method beginning",2],["instruct!","Builder::XmlMarkup","classes/Builder/XmlMarkup.html#M000032","(directive_tag=:xml, attrs={})","Insert a processing instruction into the XML markup.  E.g. For example: xml.instruct! #=> <?xml version=\"1.0\"",2],["method_added","Kernel","classes/Kernel.html#M000003","(name)","Detect method additions to Kernel and remove them in the BlankSlate class. ",2],["method_added","Object","classes/Object.html#M000005","(name)","Detect method additions to Object and remove them in the BlankSlate class. ",2],["method_missing","Builder::XmlBase","classes/Builder/XmlBase.html#M000015","(sym, *args, &block)","Create XML markup based on the name of the method.  This method is never invoked directly, but is called",2],["new","Builder::XmlBase","classes/Builder/XmlBase.html#M000013","(indent=0, initial=0, encoding='utf-8')","Create an XML markup builder. out::      Object receiving the markup.  +out+ must respond to <tt><<</tt>.",2],["new","Builder::XmlMarkup","classes/Builder/XmlMarkup.html#M000028","(options={})","Create an XML markup builder.  Parameters are specified by an option hash. :target=><em>target_object</em>::",2],["nil?","Builder::XmlBase","classes/Builder/XmlBase.html#M000018","()","For some reason, nil? is sent to the XmlMarkup object.  If nil? is not defined and method_missing is",2],["reveal","BlankSlate","classes/BlankSlate.html#M000002","(name)","Redefine a previously hidden method so that it may be called on a blank slate object. ",2],["tag!","Builder::XmlBase","classes/Builder/XmlBase.html#M000014","(sym, *args, &block)","Create a tag named +sym+.  Other than the first argument which is the tag name, the arguments are the",2],["target!","Builder::XmlMarkup","classes/Builder/XmlMarkup.html#M000029","()","Return the target of the builder. ",2],["text!","Builder::XmlBase","classes/Builder/XmlBase.html#M000016","(text)","Append text to the output target.  Escape any markup.  May be used within the markup brackets as: builder.p",2],["text!","Builder::XmlEvents","classes/Builder/XmlEvents.html#M000025","(text)","",2],["to_xs","String","classes/String.html#M000012","(escape=true)","XML escaped version of to_s. When <tt>escape</tt> is set to false the CP1252 fix is still applied but",2],["xchr","Fixnum","classes/Fixnum.html#M000011","(escape=true)","XML escaped version of chr. When <tt>escape</tt> is set to false the CP1252 fix is still applied but",2],["CHANGES","files/CHANGES.html","files/CHANGES.html","","= Change Log  == Version 2.2.0  * Applied patch from Thijs van der Vossen to allow UTF-8 encoded   output",3],["README","files/README.html","files/README.html","","= Project: Builder  == Goal  Provide a simple way to create XML markup and data structures.  == Classes",3],["README.rdoc","files/README_rdoc.html","files/README_rdoc.html","","= Project: Builder  == Goal  Provide a simple way to create XML markup and data structures.  == Classes",3],["Rakefile","files/Rakefile.html","files/Rakefile.html","","# Rakefile for rake        -*- ruby -*-  # Copyright 2004, 2005, 2006 by Jim Weirich (jim@weirichhouse.org).",3],["TAGS","files/TAGS.html","files/TAGS.html","","\f doc/jamis.rb,43 module RDocRDoc\u00011,0 module PagePage\u00012,12 \f html/classes/BlankSlate.html,305     ",3],["builder-1.2.4.rdoc","files/doc/releases/builder-1_2_4_rdoc.html","files/doc/releases/builder-1_2_4_rdoc.html","","= Builder 1.2.4 Released.  Added a \"CDATA\" method to the XML Markup builder (from Josh Knowles).  ==",3],["builder-2.0.0.rdoc","files/doc/releases/builder-2_0_0_rdoc.html","files/doc/releases/builder-2_0_0_rdoc.html","","= Builder 2.0.0 Released.  == Changes in 2.0.0  * UTF-8 characters in data are now correctly translated",3],["builder-2.1.1.rdoc","files/doc/releases/builder-2_1_1_rdoc.html","files/doc/releases/builder-2_1_1_rdoc.html","","= Builder 2.1.1 Released.  Release 2.1.1 of Builder is mainly a bug fix release.  == Changes in 2.1.1",3],["blankslate.rb","files/lib/blankslate_rb.html","files/lib/blankslate_rb.html","","",3],["builder.rb","files/lib/builder_rb.html","files/lib/builder_rb.html","","",3],["blankslate.rb","files/lib/builder/blankslate_rb.html","files/lib/builder/blankslate_rb.html","","",3],["xchar.rb","files/lib/builder/xchar_rb.html","files/lib/builder/xchar_rb.html","","The XChar library is provided courtesy of Sam Ruby (See http://intertwingly.net/stories/2005/09/28/xchar.rb)",3],["xmlbase.rb","files/lib/builder/xmlbase_rb.html","files/lib/builder/xmlbase_rb.html","","",3],["xmlevents.rb","files/lib/builder/xmlevents_rb.html","files/lib/builder/xmlevents_rb.html","","",3],["xmlmarkup.rb","files/lib/builder/xmlmarkup_rb.html","files/lib/builder/xmlmarkup_rb.html","","",3]],"searchIndex":["blankslate","builder","illegalblockerror","xmlbase","xmlevents","xmlmarkup","fixnum","kernel","module","object","string","<<()","_attr_value()","_end_tag()","_end_tag()","_ensure_no_block()","_escape()","_escape()","_escape_quote()","_indent()","_insert_attributes()","_nested_structures()","_newline()","_special()","_start_tag()","_start_tag()","_text()","append_features()","blank_slate_method_added()","blank_slate_method_added()","blankslate_original_append_features()","cdata!()","check_for_name_collision()","comment!()","declare!()","find_hidden_method()","find_hidden_method()","hide()","instruct!()","method_added()","method_added()","method_missing()","new()","new()","nil?()","reveal()","tag!()","target!()","text!()","text!()","to_xs()","xchr()","changes","readme","readme.rdoc","rakefile","tags","builder-1.2.4.rdoc","builder-2.0.0.rdoc","builder-2.1.1.rdoc","blankslate.rb","builder.rb","blankslate.rb","xchar.rb","xmlbase.rb","xmlevents.rb","xmlmarkup.rb"],"longSearchIndex":["lib/blankslate.rb","lib/builder/xmlmarkup.rb","builder","builder","builder","builder","lib/builder/xchar.rb","lib/blankslate.rb","lib/blankslate.rb","lib/blankslate.rb","lib/builder/xchar.rb","builder::xmlbase","builder::xmlmarkup","builder::xmlevents","builder::xmlmarkup","builder::xmlmarkup","builder::xmlbase","builder::xmlbase","builder::xmlbase","builder::xmlbase","builder::xmlmarkup","builder::xmlbase","builder::xmlbase","builder::xmlmarkup","builder::xmlevents","builder::xmlmarkup","builder::xmlmarkup","module","kernel","object","module","builder::xmlmarkup","builder","builder::xmlmarkup","builder::xmlmarkup","blankslate","object","blankslate","builder::xmlmarkup","kernel","object","builder::xmlbase","builder::xmlbase","builder::xmlmarkup","builder::xmlbase","blankslate","builder::xmlbase","builder::xmlmarkup","builder::xmlbase","builder::xmlevents","string","fixnum","files/changes.html","files/readme.html","files/readme_rdoc.html","files/rakefile.html","files/tags.html","files/doc/releases/builder-1_2_4_rdoc.html","files/doc/releases/builder-2_0_0_rdoc.html","files/doc/releases/builder-2_1_1_rdoc.html","files/lib/blankslate_rb.html","files/lib/builder_rb.html","files/lib/builder/blankslate_rb.html","files/lib/builder/xchar_rb.html","files/lib/builder/xmlbase_rb.html","files/lib/builder/xmlevents_rb.html","files/lib/builder/xmlmarkup_rb.html"]}}