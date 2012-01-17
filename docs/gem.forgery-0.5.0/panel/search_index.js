var search_data = {"index":{"info":[["Forgery","lib/forgery/dictionaries.rb","classes/Forgery.html"," < Object","",1],["Address","Forgery","classes/Forgery/Address.html"," < Forgery","Generates random address information. ",1],["Basic","Forgery","classes/Forgery/Basic.html"," < Forgery","",1],["CreditCard","Forgery","classes/Forgery/CreditCard.html"," < Forgery","Generates random credit card numbers. ",1],["Currency","Forgery","classes/Forgery/Currency.html"," < Forgery","",1],["Date","Forgery","classes/Forgery/Date.html"," < Forgery","",1],["Dictionaries","Forgery","classes/Forgery/Dictionaries.html"," < Object","",1],["Email","Forgery","classes/Forgery/Email.html"," < Forgery","",1],["Extensions","Forgery","classes/Forgery/Extensions.html"," < ","",1],["Array","Forgery::Extensions","classes/Forgery/Extensions/Array.html"," < ::Array","",1],["Range","Forgery::Extensions","classes/Forgery/Extensions/Range.html"," < ::Range","",1],["String","Forgery::Extensions","classes/Forgery/Extensions/String.html"," < ::String","",1],["FileReader","Forgery","classes/Forgery/FileReader.html"," < Object","",1],["Formats","Forgery","classes/Forgery/Formats.html"," < Object","",1],["Internet","Forgery","classes/Forgery/Internet.html"," < Forgery","",1],["LoremIpsum","Forgery","classes/Forgery/LoremIpsum.html"," < Forgery","",1],["Monetary","Forgery","classes/Forgery/Monetary.html"," < Forgery","",1],["Name","Forgery","classes/Forgery/Name.html"," < Forgery","",1],["Personal","Forgery","classes/Forgery/Personal.html"," < Forgery","",1],["Time","Forgery","classes/Forgery/Time.html"," < Forgery","Generates random timezone information. ",1],["ForgeryGenerator","lib/generators/forgery/forgery_generator.rb","classes/ForgeryGenerator.html"," < Rails::Generators::Base","",1],["ForgeryRailtie","lib/forgery/forgery_railtie.rb","classes/ForgeryRailtie.html"," < Rails::Railtie","",1],["Object","lib/forgery/forgery_api.rb","classes/Object.html"," < Object","",1],["Extend","Forgery","classes/Forgery.html#M000004","(object)","",2],["Forgery","Object","classes/Object.html#M000100","(forgery, method=nil, *args)","Alternate Forgery api, see spec/forgery_spec.rb for examples. ",2],["[]","Forgery::Dictionaries","classes/Forgery/Dictionaries.html#M000001","(key)","",2],["[]","Forgery::Formats","classes/Forgery/Formats.html#M000103","(key)","",2],["abbreviated_gender","Forgery::Personal","classes/Forgery/Personal.html#M000090","()","",2],["address","Forgery::Email","classes/Forgery/Email.html#M000046","()","",2],["body","Forgery::Email","classes/Forgery/Email.html#M000048","(options={})","",2],["boolean","Forgery::Basic","classes/Forgery/Basic.html#M000031","()","Gets a random boolean value Forgery(:basic).boolean # => true Forgery(:basic).boolean # => false ",2],["camelize","Forgery::Extensions::String","classes/Forgery/Extensions/String.html#M000012","(first_letter = :upper)","Ripped right out of rails ",2],["cctld","Forgery::Internet","classes/Forgery/Internet.html#M000060","()","",2],["character","Forgery::LoremIpsum","classes/Forgery/LoremIpsum.html#M000063","(options={})","",2],["characters","Forgery::LoremIpsum","classes/Forgery/LoremIpsum.html#M000064","(quantity=10, options={})","",2],["check_digit","Forgery::CreditCard","classes/Forgery/CreditCard.html#M000043","(number)","",2],["city","Forgery::Address","classes/Forgery/Address.html#M000023","()","Gets a random city out of the 'cities' dictionary. Forgery(:address).city # => \"Anaheim\" Forgery(:address).city",2],["code","Forgery::Currency","classes/Forgery/Currency.html#M000045","()","Generates a random currency code for a country Forgery(:currency).code # => \"AUD\" ",2],["color","Forgery::Basic","classes/Forgery/Basic.html#M000032","()","",2],["company_name","Forgery::Name","classes/Forgery/Name.html#M000082","()","",2],["constantize","Forgery::Extensions::String","classes/Forgery/Extensions/String.html#M000013","()","",2],["constantize","Forgery::Extensions::String","classes/Forgery/Extensions/String.html#M000014","()","",2],["continent","Forgery::Address","classes/Forgery/Address.html#M000037","()","Gets a random continent out of the 'continents' dictionary. Forgery(:address).continent # => \"Africa\"",2],["country","Forgery::Address","classes/Forgery/Address.html#M000036","()","Gets a random country out of the 'countries' dictionary. Forgery(:address).country # => \"Uruguay\" Forgery(:address).country",2],["create_directories","ForgeryGenerator","classes/ForgeryGenerator.html#M000107","()","",2],["date","Forgery::Date","classes/Forgery/Date.html#M000053","(options={})","",2],["day","Forgery::Date","classes/Forgery/Date.html#M000052","()","",2],["day_of_week","Forgery::Date","classes/Forgery/Date.html#M000049","(options={})","",2],["delta","Forgery::Date","classes/Forgery/Date.html#M000054","(options)","Calculate our delta ",2],["description","Forgery::Currency","classes/Forgery/Currency.html#M000044","()","Generates a random currency description Forgery(:currency).description # => \"Australian Dollars\" ",2],["dictionaries","Forgery","classes/Forgery.html#M000095","()","",2],["domain_name","Forgery::Internet","classes/Forgery/Internet.html#M000057","()","",2],["email_address","Forgery::Internet","classes/Forgery/Internet.html#M000058","()","",2],["email_subject","Forgery::Internet","classes/Forgery/Internet.html#M000059","(options={})","",2],["encrypt","Forgery::Basic","classes/Forgery/Basic.html#M000030","(password=\"password\", salt=::Time.now.to_s)","SHA1 hexdigests a password salted with the current time Forgery(:basic).encrypt # => \"b2fbd3955a36068e93e0b9db45bcb178f08336f5\"",2],["female_first_name","Forgery::Name","classes/Forgery/Name.html#M000081","()","",2],["find_file","Forgery::FileReader","classes/Forgery/FileReader.html#M000018","(name, folder)","Search a file in all load_paths, starting from last to first, so last takes precedence over first. ",2],["first_name","Forgery::Name","classes/Forgery/Name.html#M000078","()","",2],["formats","Forgery","classes/Forgery.html#M000096","()","",2],["formatted_money","Forgery::Monetary","classes/Forgery/Monetary.html#M000071","(options={})","",2],["frequency","Forgery::Basic","classes/Forgery/Basic.html#M000040","()","",2],["full_name","Forgery::Name","classes/Forgery/Name.html#M000079","()","",2],["gender","Forgery::Personal","classes/Forgery/Personal.html#M000089","()","",2],["hex_color","Forgery::Basic","classes/Forgery/Basic.html#M000033","()","",2],["industry","Forgery::Name","classes/Forgery/Name.html#M000088","()","",2],["ip_v4","Forgery::Internet","classes/Forgery/Internet.html#M000061","()","",2],["job_title","Forgery::Name","classes/Forgery/Name.html#M000083","()","",2],["job_title_suffix","Forgery::Name","classes/Forgery/Name.html#M000084","()","",2],["language","Forgery::Personal","classes/Forgery/Personal.html#M000093","()","",2],["last_name","Forgery::Name","classes/Forgery/Name.html#M000077","()","",2],["load_from!","Forgery","classes/Forgery.html#M000098","(path)","",2],["load_paths","Forgery","classes/Forgery.html#M000097","()","",2],["loaded?","Forgery::Dictionaries","classes/Forgery/Dictionaries.html#M000002","(key)","",2],["loaded?","Forgery::Formats","classes/Forgery/Formats.html#M000104","(key)","",2],["location","Forgery::Name","classes/Forgery/Name.html#M000087","()","",2],["lorem_ipsum_characters","Forgery::LoremIpsum","classes/Forgery/LoremIpsum.html#M000076","()","",2],["lorem_ipsum_words","Forgery::LoremIpsum","classes/Forgery/LoremIpsum.html#M000075","()","",2],["male_first_name","Forgery::Name","classes/Forgery/Name.html#M000080","()","",2],["money","Forgery::Monetary","classes/Forgery/Monetary.html#M000072","(options={})","",2],["month","Forgery::Date","classes/Forgery/Date.html#M000050","(options={})","",2],["new","Forgery::Dictionaries","classes/Forgery/Dictionaries.html#M000000","()","",2],["new","Forgery::Formats","classes/Forgery/Formats.html#M000102","()","",2],["number","Forgery::Basic","classes/Forgery/Basic.html#M000038","(options={})","",2],["number","Forgery::CreditCard","classes/Forgery/CreditCard.html#M000042","(options={})","Gets a random credit card number Forgery(:credit_card).number # => \"4539750423451972\" Forgery(:credit_card).number(:type",2],["paragraph","Forgery::LoremIpsum","classes/Forgery/LoremIpsum.html#M000069","(options={})","",2],["paragraphs","Forgery::LoremIpsum","classes/Forgery/LoremIpsum.html#M000070","(quantity=2, options={})","",2],["password","Forgery::Basic","classes/Forgery/Basic.html#M000026","(options={})","Gets a random string for use as a password Forgery(:basic).password # => \"1MbyMQhU\" Forgery(:basic).password(:at_least",2],["phone","Forgery::Address","classes/Forgery/Address.html#M000035","()","Gets one of the formats from 'phone_formats' and converts it to numbers. Forgery(:address).phone # =>",2],["province","Forgery::Address","classes/Forgery/Address.html#M000027","()","Gets a random Canadian province or territory out of the 'provinces' dictionary. Forgery(:address).province",2],["province_abbrev","Forgery::Address","classes/Forgery/Address.html#M000028","()","Gets a random Canadian province or territory abbreviation out of the 'province_abbrev' dictionary. Forgery(:address).province_abbrev",2],["race","Forgery::Personal","classes/Forgery/Personal.html#M000092","()","",2],["rails?","Forgery","classes/Forgery.html#M000101","()","",2],["rails_root","Forgery","classes/Forgery.html#M000099","()","",2],["random","Forgery::Extensions::Array","classes/Forgery/Extensions/Array.html#M000006","()","The only forgery extension that returns an extended object ",2],["random","Forgery::Extensions::Range","classes/Forgery/Extensions/Range.html#M000009","()","",2],["random_subset","Forgery::Extensions::Array","classes/Forgery/Extensions/Array.html#M000007","(len=2)","",2],["range_from_quantity","Forgery::LoremIpsum","classes/Forgery/LoremIpsum.html#M000074","(quantity, options={})","",2],["read_dictionary","Forgery::FileReader","classes/Forgery/FileReader.html#M000015","(dictionary)","Returns an array of strings containing each line in the dictionary ",2],["read_file","Forgery::FileReader","classes/Forgery/FileReader.html#M000017","(file)","Reads a file while stripping leading and trailing whitespace, including newlines ",2],["read_format","Forgery::FileReader","classes/Forgery/FileReader.html#M000016","(format)","Returns an array of strings containing each line in the format ",2],["reset!","Forgery::Dictionaries","classes/Forgery/Dictionaries.html#M000003","()","",2],["reset!","Forgery::Formats","classes/Forgery/Formats.html#M000105","()","",2],["sentence","Forgery::LoremIpsum","classes/Forgery/LoremIpsum.html#M000067","(options={})","",2],["sentences","Forgery::LoremIpsum","classes/Forgery/LoremIpsum.html#M000068","(quantity=2, options={})","",2],["shirt_size","Forgery::Personal","classes/Forgery/Personal.html#M000091","()","",2],["short_hex_color","Forgery::Basic","classes/Forgery/Basic.html#M000034","()","",2],["source_root","ForgeryGenerator","classes/ForgeryGenerator.html#M000106","()","",2],["state","Forgery::Address","classes/Forgery/Address.html#M000024","()","Gets a random state out of the 'states' dictionary. Forgery(:address).state # => \"Mississippi\" Forgery(:address).state",2],["state_abbrev","Forgery::Address","classes/Forgery/Address.html#M000025","()","Gets a random state abbreviation out of the 'state_abbrev' dictionary. Forgery(:address).state_abbrev",2],["street_address","Forgery::Address","classes/Forgery/Address.html#M000022","()","Gets a full street address, including street number, street name, and street suffix. Forgery(:address).street_address",2],["street_name","Forgery::Address","classes/Forgery/Address.html#M000019","()","Gets a random street name out of the 'streets' dictionary. Forgery(:address).street_name # => \"Atwood\"",2],["street_number","Forgery::Address","classes/Forgery/Address.html#M000020","()","Gets one of the formats from 'street_number_formats' and converts it to numbers. Forgery(:address).street_number",2],["street_suffix","Forgery::Address","classes/Forgery/Address.html#M000021","()","Gets a random street suffix out of the 'street_suffixes' dictionary. Forgery(:address).street_suffix",2],["subject","Forgery::Email","classes/Forgery/Email.html#M000047","(options={})","",2],["suffix","Forgery::Name","classes/Forgery/Name.html#M000086","()","",2],["text","Forgery::Basic","classes/Forgery/Basic.html#M000039","(options={})","",2],["text","Forgery::LoremIpsum","classes/Forgery/LoremIpsum.html#M000062","(what=:sentence, quantity=2, options={})","",2],["title","Forgery::LoremIpsum","classes/Forgery/LoremIpsum.html#M000073","(options={})","",2],["title","Forgery::Name","classes/Forgery/Name.html#M000085","()","",2],["to_numbers","Forgery::Extensions::String","classes/Forgery/Extensions/String.html#M000011","(replace='#')","",2],["top_level_domain","Forgery::Internet","classes/Forgery/Internet.html#M000056","()","",2],["type","Forgery::CreditCard","classes/Forgery/CreditCard.html#M000041","()","Gets a random credit card type Forgery(:credit_card).type # => \"Visa\" ",2],["unextend","Forgery::Extensions::Array","classes/Forgery/Extensions/Array.html#M000005","()","",2],["unextend","Forgery::Extensions::Range","classes/Forgery/Extensions/Range.html#M000008","()","",2],["unextend","Forgery::Extensions::String","classes/Forgery/Extensions/String.html#M000010","()","",2],["user_name","Forgery::Internet","classes/Forgery/Internet.html#M000055","()","",2],["word","Forgery::LoremIpsum","classes/Forgery/LoremIpsum.html#M000065","(options={})","",2],["words","Forgery::LoremIpsum","classes/Forgery/LoremIpsum.html#M000066","(quantity=10, options={})","",2],["year","Forgery::Date","classes/Forgery/Date.html#M000051","(options={})","",2],["zip","Forgery::Address","classes/Forgery/Address.html#M000029","()","Gets one of the formats from 'zip_formats' and converts it to numbers. Forgery(:address).zip # => \"52474\"",2],["zone","Forgery::Time","classes/Forgery/Time.html#M000094","()","Gets a random timezone out of the 'timezones' dictionary Forgery(:timezone).timezone # => \"Sydney\" ",2],["LICENSE","files/LICENSE.html","files/LICENSE.html","","Copyright (c) 2007 Sevenwire LLC  Permission is hereby granted, free of charge, to any person obtaining",3],["README.markdown","files/README_markdown.html","files/README_markdown.html","","Forgery =======  **A Problem**: It's harder than *absolutely easy* to make meaningful, simple, data for",3],["forgery.rb","files/lib/forgery_rb.html","files/lib/forgery_rb.html","","Require forgeries at the bottom of the file so Forgery works as a gem both within rails and outside of",3],["dictionaries.rb","files/lib/forgery/dictionaries_rb.html","files/lib/forgery/dictionaries_rb.html","","",3],["cities","files/lib/forgery/dictionaries/cities.html","files/lib/forgery/dictionaries/cities.html","","Adelanto Agoura Hills Alameda Albany Alhambra Aliso Viejo Alturas Amador City American Canyon Anaheim",3],["colors","files/lib/forgery/dictionaries/colors.html","files/lib/forgery/dictionaries/colors.html","","Red Blue Green Yellow Orange Purple Violet Indigo Teal Pink Fuscia Goldenrod Mauv Aquamarine Turquoise",3],["company_names","files/lib/forgery/dictionaries/company_names.html","files/lib/forgery/dictionaries/company_names.html","","Kwilith Eayo Voolith Eabox Gigabox Meeveo Yombu Eire Oyonder Dynazzy Demimbu Wikizz InnoZ Pixonyx Snaptags",3],["continents","files/lib/forgery/dictionaries/continents.html","files/lib/forgery/dictionaries/continents.html","","Asia North America South America Australia Africa Europe Antarctica ",3],["countries","files/lib/forgery/dictionaries/countries.html","files/lib/forgery/dictionaries/countries.html","","Afghanistan Åland Albania Algeria American Samoa Andorra Angola Anguilla Antarctica Antigua and Barbuda",3],["currency_codes","files/lib/forgery/dictionaries/currency_codes.html","files/lib/forgery/dictionaries/currency_codes.html","","EUR USD GBP CAD AUD JPY INR NZD CHF ZAR EUR AFN ALL DZD USD ARS AUD ATS BSD BHD BDT BBD BEF BMD BRL BGN",3],["currency_descriptions","files/lib/forgery/dictionaries/currency_descriptions.html","files/lib/forgery/dictionaries/currency_descriptions.html","","Afghanistan Afghanis Albania Leke Algeria Dinars America (United States) Dollars Argentina Pesos Australia",3],["female_first_names","files/lib/forgery/dictionaries/female_first_names.html","files/lib/forgery/dictionaries/female_first_names.html","","Mary Patricia Linda Barbara Elizabeth Jennifer Maria Susan Margaret Dorothy Lisa Nancy Karen Betty Helen",3],["frequencies","files/lib/forgery/dictionaries/frequencies.html","files/lib/forgery/dictionaries/frequencies.html","","Never Once Seldom Often Daily Weekly Monthly Yearly ",3],["genders","files/lib/forgery/dictionaries/genders.html","files/lib/forgery/dictionaries/genders.html","","Male Female",3],["industries","files/lib/forgery/dictionaries/industries.html","files/lib/forgery/dictionaries/industries.html","","Basic Materials Agricultural Chemicals Aluminum Chemicals - Major Diversified Copper Gold Independent",3],["job_titles","files/lib/forgery/dictionaries/job_titles.html","files/lib/forgery/dictionaries/job_titles.html","","Account Coordinator Account Executive Account Representative #{N} Accountant #{N} Accounting Assistant",3],["languages","files/lib/forgery/dictionaries/languages.html","files/lib/forgery/dictionaries/languages.html","","Afrikaans Albanian Amharic Arabic Armenian Assamese Aymara Azeri Belarusian Bengali Bislama Bosnian Bulgarian",3],["last_names","files/lib/forgery/dictionaries/last_names.html","files/lib/forgery/dictionaries/last_names.html","","Smith Johnson Williams Jones Brown Davis Miller Wilson Moore Taylor Anderson Thomas Jackson White Harris",3],["locations","files/lib/forgery/dictionaries/locations.html","files/lib/forgery/dictionaries/locations.html","","Howarts School of Witchcraft and Wizardry Beauxbatons Academy of Magic Durmstrang Institude for Magical",3],["lorem_ipsum","files/lib/forgery/dictionaries/lorem_ipsum.html","files/lib/forgery/dictionaries/lorem_ipsum.html","","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam",3],["male_first_names","files/lib/forgery/dictionaries/male_first_names.html","files/lib/forgery/dictionaries/male_first_names.html","","James John Robert Michael William David Richard Charles Joseph Thomas Christopher Daniel Paul Mark Donald",3],["name_titles","files/lib/forgery/dictionaries/name_titles.html","files/lib/forgery/dictionaries/name_titles.html","","Mr Ms Mrs Dr Rev Honorable ",3],["provinces","files/lib/forgery/dictionaries/provinces.html","files/lib/forgery/dictionaries/provinces.html","","Ontario Quebec Nova Scotia New Brunswick Manitoba British Columbia Prince Edward Island Saskatchewan",3],["races","files/lib/forgery/dictionaries/races.html","files/lib/forgery/dictionaries/races.html","","Alaskan Athabascan Alaska Native Aleut American Indian American Indian and Alaska Native (AIAN) Apache",3],["states","files/lib/forgery/dictionaries/states.html","files/lib/forgery/dictionaries/states.html","","Alabama Alaska Arizona Arkansas California Colorado Connecticut Delaware Florida Georgia Hawaii Idaho",3],["street_suffixes","files/lib/forgery/dictionaries/street_suffixes.html","files/lib/forgery/dictionaries/street_suffixes.html","","Alley Avenue Center Circle Court Crossing Drive Hill Junction Lane Park Parkway Pass Place Plaza Point",3],["streets","files/lib/forgery/dictionaries/streets.html","files/lib/forgery/dictionaries/streets.html","","1st 2nd 3rd 4th 5th 6th 7th 8th Aberg Acker Algoma Almo Alpine American American Ash Amoth Anderson Anhalt",3],["top_level_domains","files/lib/forgery/dictionaries/top_level_domains.html","files/lib/forgery/dictionaries/top_level_domains.html","","biz com info name net org gov edu mil",3],["zones","files/lib/forgery/dictionaries/zones.html","files/lib/forgery/dictionaries/zones.html","","International Date Line West Midway Island Samoa Hawaii Alaska Pacific Time (US & Canada) Tijuana Arizona",3],["extend.rb","files/lib/forgery/extend_rb.html","files/lib/forgery/extend_rb.html","","",3],["array.rb","files/lib/forgery/extensions/array_rb.html","files/lib/forgery/extensions/array_rb.html","","",3],["range.rb","files/lib/forgery/extensions/range_rb.html","files/lib/forgery/extensions/range_rb.html","","",3],["string.rb","files/lib/forgery/extensions/string_rb.html","files/lib/forgery/extensions/string_rb.html","","",3],["file_reader.rb","files/lib/forgery/file_reader_rb.html","files/lib/forgery/file_reader_rb.html","","",3],["forgery.rb","files/lib/forgery/forgery_rb.html","files/lib/forgery/forgery_rb.html","","",3],["address.rb","files/lib/forgery/forgery/address_rb.html","files/lib/forgery/forgery/address_rb.html","","Generates random address information. ",3],["basic.rb","files/lib/forgery/forgery/basic_rb.html","files/lib/forgery/forgery/basic_rb.html","","",3],["credit_card.rb","files/lib/forgery/forgery/credit_card_rb.html","files/lib/forgery/forgery/credit_card_rb.html","","Generates random credit card numbers. ",3],["currency.rb","files/lib/forgery/forgery/currency_rb.html","files/lib/forgery/forgery/currency_rb.html","","",3],["date.rb","files/lib/forgery/forgery/date_rb.html","files/lib/forgery/forgery/date_rb.html","","",3],["email.rb","files/lib/forgery/forgery/email_rb.html","files/lib/forgery/forgery/email_rb.html","","",3],["internet.rb","files/lib/forgery/forgery/internet_rb.html","files/lib/forgery/forgery/internet_rb.html","","",3],["lorem_ipsum.rb","files/lib/forgery/forgery/lorem_ipsum_rb.html","files/lib/forgery/forgery/lorem_ipsum_rb.html","","",3],["monetary.rb","files/lib/forgery/forgery/monetary_rb.html","files/lib/forgery/forgery/monetary_rb.html","","",3],["name.rb","files/lib/forgery/forgery/name_rb.html","files/lib/forgery/forgery/name_rb.html","","",3],["personal.rb","files/lib/forgery/forgery/personal_rb.html","files/lib/forgery/forgery/personal_rb.html","","",3],["time.rb","files/lib/forgery/forgery/time_rb.html","files/lib/forgery/forgery/time_rb.html","","Generates random timezone information. ",3],["forgery_api.rb","files/lib/forgery/forgery_api_rb.html","files/lib/forgery/forgery_api_rb.html","","Alternate Forgery api, see spec/forgery_spec.rb for examples. ",3],["forgery_railtie.rb","files/lib/forgery/forgery_railtie_rb.html","files/lib/forgery/forgery_railtie_rb.html","","",3],["formats.rb","files/lib/forgery/formats_rb.html","files/lib/forgery/formats_rb.html","","",3],["phone","files/lib/forgery/formats/phone.html","files/lib/forgery/formats/phone.html","","-(###)###-#### ",3],["street_number","files/lib/forgery/formats/street_number.html","files/lib/forgery/formats/street_number.html","","",3],["zip","files/lib/forgery/formats/zip.html","files/lib/forgery/formats/zip.html","","-####",3],["version.rb","files/lib/forgery/version_rb.html","files/lib/forgery/version_rb.html","","",3],["forgery_generator.rb","files/lib/generators/forgery/forgery_generator_rb.html","files/lib/generators/forgery/forgery_generator_rb.html","","",3]],"searchIndex":["forgery","address","basic","creditcard","currency","date","dictionaries","email","extensions","array","range","string","filereader","formats","internet","loremipsum","monetary","name","personal","time","forgerygenerator","forgeryrailtie","object","extend()","forgery()","[]()","[]()","abbreviated_gender()","address()","body()","boolean()","camelize()","cctld()","character()","characters()","check_digit()","city()","code()","color()","company_name()","constantize()","constantize()","continent()","country()","create_directories()","date()","day()","day_of_week()","delta()","description()","dictionaries()","domain_name()","email_address()","email_subject()","encrypt()","female_first_name()","find_file()","first_name()","formats()","formatted_money()","frequency()","full_name()","gender()","hex_color()","industry()","ip_v4()","job_title()","job_title_suffix()","language()","last_name()","load_from!()","load_paths()","loaded?()","loaded?()","location()","lorem_ipsum_characters()","lorem_ipsum_words()","male_first_name()","money()","month()","new()","new()","number()","number()","paragraph()","paragraphs()","password()","phone()","province()","province_abbrev()","race()","rails?()","rails_root()","random()","random()","random_subset()","range_from_quantity()","read_dictionary()","read_file()","read_format()","reset!()","reset!()","sentence()","sentences()","shirt_size()","short_hex_color()","source_root()","state()","state_abbrev()","street_address()","street_name()","street_number()","street_suffix()","subject()","suffix()","text()","text()","title()","title()","to_numbers()","top_level_domain()","type()","unextend()","unextend()","unextend()","user_name()","word()","words()","year()","zip()","zone()","license","readme.markdown","forgery.rb","dictionaries.rb","cities","colors","company_names","continents","countries","currency_codes","currency_descriptions","female_first_names","frequencies","genders","industries","job_titles","languages","last_names","locations","lorem_ipsum","male_first_names","name_titles","provinces","races","states","street_suffixes","streets","top_level_domains","zones","extend.rb","array.rb","range.rb","string.rb","file_reader.rb","forgery.rb","address.rb","basic.rb","credit_card.rb","currency.rb","date.rb","email.rb","internet.rb","lorem_ipsum.rb","monetary.rb","name.rb","personal.rb","time.rb","forgery_api.rb","forgery_railtie.rb","formats.rb","phone","street_number","zip","version.rb","forgery_generator.rb"],"longSearchIndex":["lib/forgery/version.rb","forgery","forgery","forgery","forgery","forgery","forgery","forgery","forgery","forgery::extensions","forgery::extensions","forgery::extensions","forgery","forgery","forgery","forgery","forgery","forgery","forgery","forgery","lib/generators/forgery/forgery_generator.rb","lib/forgery/forgery_railtie.rb","lib/forgery/forgery_api.rb","forgery","object","forgery::dictionaries","forgery::formats","forgery::personal","forgery::email","forgery::email","forgery::basic","forgery::extensions::string","forgery::internet","forgery::loremipsum","forgery::loremipsum","forgery::creditcard","forgery::address","forgery::currency","forgery::basic","forgery::name","forgery::extensions::string","forgery::extensions::string","forgery::address","forgery::address","forgerygenerator","forgery::date","forgery::date","forgery::date","forgery::date","forgery::currency","forgery","forgery::internet","forgery::internet","forgery::internet","forgery::basic","forgery::name","forgery::filereader","forgery::name","forgery","forgery::monetary","forgery::basic","forgery::name","forgery::personal","forgery::basic","forgery::name","forgery::internet","forgery::name","forgery::name","forgery::personal","forgery::name","forgery","forgery","forgery::dictionaries","forgery::formats","forgery::name","forgery::loremipsum","forgery::loremipsum","forgery::name","forgery::monetary","forgery::date","forgery::dictionaries","forgery::formats","forgery::basic","forgery::creditcard","forgery::loremipsum","forgery::loremipsum","forgery::basic","forgery::address","forgery::address","forgery::address","forgery::personal","forgery","forgery","forgery::extensions::array","forgery::extensions::range","forgery::extensions::array","forgery::loremipsum","forgery::filereader","forgery::filereader","forgery::filereader","forgery::dictionaries","forgery::formats","forgery::loremipsum","forgery::loremipsum","forgery::personal","forgery::basic","forgerygenerator","forgery::address","forgery::address","forgery::address","forgery::address","forgery::address","forgery::address","forgery::email","forgery::name","forgery::basic","forgery::loremipsum","forgery::loremipsum","forgery::name","forgery::extensions::string","forgery::internet","forgery::creditcard","forgery::extensions::array","forgery::extensions::range","forgery::extensions::string","forgery::internet","forgery::loremipsum","forgery::loremipsum","forgery::date","forgery::address","forgery::time","files/license.html","files/readme_markdown.html","files/lib/forgery_rb.html","files/lib/forgery/dictionaries_rb.html","files/lib/forgery/dictionaries/cities.html","files/lib/forgery/dictionaries/colors.html","files/lib/forgery/dictionaries/company_names.html","files/lib/forgery/dictionaries/continents.html","files/lib/forgery/dictionaries/countries.html","files/lib/forgery/dictionaries/currency_codes.html","files/lib/forgery/dictionaries/currency_descriptions.html","files/lib/forgery/dictionaries/female_first_names.html","files/lib/forgery/dictionaries/frequencies.html","files/lib/forgery/dictionaries/genders.html","files/lib/forgery/dictionaries/industries.html","files/lib/forgery/dictionaries/job_titles.html","files/lib/forgery/dictionaries/languages.html","files/lib/forgery/dictionaries/last_names.html","files/lib/forgery/dictionaries/locations.html","files/lib/forgery/dictionaries/lorem_ipsum.html","files/lib/forgery/dictionaries/male_first_names.html","files/lib/forgery/dictionaries/name_titles.html","files/lib/forgery/dictionaries/provinces.html","files/lib/forgery/dictionaries/races.html","files/lib/forgery/dictionaries/states.html","files/lib/forgery/dictionaries/street_suffixes.html","files/lib/forgery/dictionaries/streets.html","files/lib/forgery/dictionaries/top_level_domains.html","files/lib/forgery/dictionaries/zones.html","files/lib/forgery/extend_rb.html","files/lib/forgery/extensions/array_rb.html","files/lib/forgery/extensions/range_rb.html","files/lib/forgery/extensions/string_rb.html","files/lib/forgery/file_reader_rb.html","files/lib/forgery/forgery_rb.html","files/lib/forgery/forgery/address_rb.html","files/lib/forgery/forgery/basic_rb.html","files/lib/forgery/forgery/credit_card_rb.html","files/lib/forgery/forgery/currency_rb.html","files/lib/forgery/forgery/date_rb.html","files/lib/forgery/forgery/email_rb.html","files/lib/forgery/forgery/internet_rb.html","files/lib/forgery/forgery/lorem_ipsum_rb.html","files/lib/forgery/forgery/monetary_rb.html","files/lib/forgery/forgery/name_rb.html","files/lib/forgery/forgery/personal_rb.html","files/lib/forgery/forgery/time_rb.html","files/lib/forgery/forgery_api_rb.html","files/lib/forgery/forgery_railtie_rb.html","files/lib/forgery/formats_rb.html","files/lib/forgery/formats/phone.html","files/lib/forgery/formats/street_number.html","files/lib/forgery/formats/zip.html","files/lib/forgery/version_rb.html","files/lib/generators/forgery/forgery_generator_rb.html"]}}