var search_data = {"index":{"info":[["Autotest","lib/autotest/preload.rb","classes/Autotest.html"," < Object","Autotest continuously scans the files in your project for changes and runs the appropriate tests.  Test",1],["AutoUpdate","Autotest","classes/Autotest/AutoUpdate.html"," < ","",1],["Bundler","Autotest","classes/Autotest/Bundler.html"," < ","Prefix all test runs with `bundle exec` so the runs use the bundled environment. ",1],["Isolate","Autotest","classes/Autotest/Isolate.html"," < ","Run autotest with isolate support. ",1],["Once","Autotest","classes/Autotest/Once.html"," < ","this is for autotest plugin developers only... ",1],["Preload","Autotest","classes/Autotest/Preload.html"," < ","",1],["RCov","Autotest","classes/Autotest/RCov.html"," < ","",1],["Restart","Autotest","classes/Autotest/Restart.html"," < ","",1],["Timestamp","Autotest","classes/Autotest/Timestamp.html"," < ","",1],["FunctionalTestMatrix","lib/functional_test_matrix.rb","classes/FunctionalTestMatrix.html"," < ","The Idea: This is supposed to get us thinking about the various dimensions our testing should address.",1],["Module","lib/focus.rb","classes/Module.html"," < Object","",1],["Multiruby","lib/multiruby.rb","classes/Multiruby.html"," < ","multiruby_setup is a script to help you manage multiruby. usage: multiruby_setup [-h|cmd|spec...] cmds:",1],["UnitDiff","lib/unit_diff.rb","classes/UnitDiff.html"," < Object","UnitDiff makes reading Test::Unit output easy and fun.  Instead of a confusing jumble of text with nearly",1],["ZenTest","lib/zentest.rb","classes/ZenTest.html"," < Object","ZenTest scans your target and unit-test code and writes your missing code based on simple naming rules,",1],["ZenTestMapping","lib/zentest_mapping.rb","classes/ZenTestMapping.html"," < ","ZenTestMapping - mapping method names from impl to test. Method names are mapped bidirectionally in the",1],["action","FunctionalTestMatrix","classes/FunctionalTestMatrix.html#M000017","(action, *results)","",2],["action","FunctionalTestMatrix","classes/FunctionalTestMatrix.html#M000017","(action, *results)","",2],["add_discovery","Autotest","classes/Autotest.html#M000019","(&proc)","Add a proc to the collection of discovery procs. See +autodiscover+. ",2],["add_exception","Autotest","classes/Autotest.html#M000076","(regexp)","Adds +regexp+ to the list of exceptions for find_file. This must be called _before_ the exceptions are",2],["add_hook","Autotest","classes/Autotest.html#M000082","(name, &block)","Add the supplied block to the available hooks, with the given name. ",2],["add_mapping","Autotest","classes/Autotest.html#M000071","(regexp, prepend = false, &proc)","Adds a file mapping, optionally prepending the mapping to the front of the list if +prepend+ is true.",2],["add_missing_method","ZenTest","classes/ZenTest.html#M000101","(klassname, methodname)","Adds a missing method to the collected results. ",2],["add_sigint_handler","Autotest","classes/Autotest.html#M000032","()","Installs a sigint handler. ",2],["add_sigquit_handler","Autotest","classes/Autotest.html#M000037","()","Installs a sigquit handler ",2],["all_good","Autotest","classes/Autotest.html#M000044","()","If there are no files left to test (because they've all passed), then all is good. ",2],["analyze","ZenTest","classes/ZenTest.html#M000106","()","Walk each known class and test that each method has a test method Then do it in the other direction...",2],["analyze_impl","ZenTest","classes/ZenTest.html#M000103","(klassname)","Checks, for the given class klassname, that each method has a corrsponding test method. If it doesn't",2],["analyze_test","ZenTest","classes/ZenTest.html#M000104","(testklassname)","For the given test class testklassname, ensure that all the test methods have corresponding (normal)",2],["autodiscover","Autotest","classes/Autotest.html#M000020","()","Automatically find all potential autotest runner styles by searching your loadpath, vendor/plugins, and",2],["autotest","ZenTest","classes/ZenTest.html#M000112","(*klasses)","Process all the supplied classes for methods etc, and analyse the results. Generate the skeletal code",2],["blur","Module","classes/Module.html#M000012","()","",2],["build_and_install","Multiruby","classes/Multiruby.html#M000024","()","",2],["clean","Multiruby","classes/Multiruby.html#M000026","()","",2],["clear_exceptions","Autotest","classes/Autotest.html#M000078","()","Clears the list of exceptions for find_file. This must be called _before_ the exceptions are compiled.",2],["clear_mappings","Autotest","classes/Autotest.html#M000075","()","Clears all file mappings. This is DANGEROUS as it entirely disables autotest. You must add at least one",2],["command=","Autotest::RCov","classes/Autotest/RCov.html#M000003","(o)","",2],["consolidate_failures","Autotest","classes/Autotest.html#M000047","(failed)","Returns a hash mapping a file name to the known failures for that file. ",2],["convert_class_name","ZenTest","classes/ZenTest.html#M000097","(name)","Generate the name of a testclass from non-test class so that  Foo::Blah => TestFoo::TestBlah, etc. It",2],["create_method","ZenTest","classes/ZenTest.html#M000105","(indentunit, indent, name)","create a given method at a given indentation. Returns an array containing the lines of the method. ",2],["diff","UnitDiff","classes/UnitDiff.html#M000084","(expect, butwas)","",2],["dir=","Autotest::Isolate","classes/Autotest/Isolate.html#M000002","(o)","",2],["each_scm_build_dir","Multiruby","classes/Multiruby.html#M000027","()","",2],["env","Multiruby","classes/Multiruby.html#M000023","(name, fallback;)","",2],["exceptions","Autotest","classes/Autotest.html#M000079","()","Return a compiled regexp of exceptions for find_files or nil if no filtering should take place. This",2],["fetch_tar","Multiruby","classes/Multiruby.html#M000031","(v)","",2],["files_matching","Autotest","classes/Autotest.html#M000070","(regexp)","Returns all known files in the codebase matching +regexp+. ",2],["find_files","Autotest","classes/Autotest.html#M000051","()","Find the files to process, ignoring temporary files, source configuration management files, etc., and",2],["find_files_to_test","Autotest","classes/Autotest.html#M000054","(files = find_files)","Find the files which have been modified, update the recorded timestamps, and use this to update the files",2],["fix","ZenTest","classes/ZenTest.html#M000111","(*files)","Runs ZenTest over all the supplied files so that they are analysed and the missing methods have skeleton",2],["focus","Module","classes/Module.html#M000010","(*wanteds)","",2],["focus_re","Module","classes/Module.html#M000011","(regexp)","",2],["generate_code","ZenTest","classes/ZenTest.html#M000107","()","Using the results gathered during analysis generate skeletal code with methods raising NotImplementedError,",2],["get_class","ZenTest","classes/ZenTest.html#M000090","(klassname)","obtain the class klassname, either from Module or using ObjectSpace to search for it. ",2],["get_inherited_methods_for","ZenTest","classes/ZenTest.html#M000095","(klass, full)","Return the methods for class klass, as a hash with the method nemas as keys, and true as the value for",2],["get_methods_for","ZenTest","classes/ZenTest.html#M000091","(klass, full=false)","Get the public instance, class and singleton methods for class klass. If full is true, include the methods",2],["get_to_green","Autotest","classes/Autotest.html#M000029","()","Keep running the tests after a change, until all pass. ",2],["glob","Autotest::Preload","classes/Autotest/Preload.html#M000006","()","",2],["glob=","Autotest::Preload","classes/Autotest/Preload.html#M000007","(o)","",2],["gnu_utils_build","Multiruby","classes/Multiruby.html#M000033","(inst_dir)","",2],["handle_results","Autotest","classes/Autotest.html#M000057","(results)","Check results for failures, set the \"bar\" to red or green, and if there are failures record this. ",2],["help","Multiruby","classes/Multiruby.html#M000034","()","",2],["hook","Autotest","classes/Autotest.html#M000080","(name, *args)","Call the event hook named +name+, passing in optional args depending on the hook itself. Returns false",2],["in_build_dir","Multiruby","classes/Multiruby.html#M000035","()","",2],["in_install_dir","Multiruby","classes/Multiruby.html#M000036","()","",2],["in_root_dir","Multiruby","classes/Multiruby.html#M000038","(subdir = \"\")","",2],["in_tmp_dir","Multiruby","classes/Multiruby.html#M000039","()","",2],["in_versions_dir","Multiruby","classes/Multiruby.html#M000040","()","",2],["is_test_class","ZenTest","classes/ZenTest.html#M000096","(klass)","Check the class klass is a testing class (by inspecting its name). ",2],["known_files","Autotest","classes/Autotest.html#M000058","()","Lazy accessor for the known_files hash. ",2],["list","Multiruby","classes/Multiruby.html#M000041","()","",2],["load_file","ZenTest","classes/ZenTest.html#M000089","(file)","load_file wraps require, skipping the loading of $0. ",2],["make_test_cmd","Autotest","classes/Autotest.html#M000061","(files_to_test)","Generate the commands to test the supplied files ",2],["massage","UnitDiff","classes/UnitDiff.html#M000086","(data)","",2],["matching_versions","Multiruby","classes/Multiruby.html#M000028","(url, matching=nil)","",2],["matrix","FunctionalTestMatrix","classes/FunctionalTestMatrix.html#M000016","(name, *setups)","",2],["matrix","FunctionalTestMatrix","classes/FunctionalTestMatrix.html#M000016","(name, *setups)","",2],["merge_rubygems","Multiruby","classes/Multiruby.html#M000043","()","",2],["methods_and_tests","ZenTest","classes/ZenTest.html#M000102","(klassname, testklassname)","looks up the methods and the corresponding test methods in the collection already built.  To reduce duplication",2],["missing_methods","ZenTest","classes/ZenTest.html#M000087","()","",2],["mri_latest_tag","Multiruby","classes/Multiruby.html#M000046","(v)","",2],["munge","ZenTestMapping","classes/ZenTestMapping.html#M000092","(name)","",2],["new","Autotest","classes/Autotest.html#M000022","()","Initialize the instance and then load the user's .autotest file, if any. ",2],["new","ZenTest","classes/ZenTest.html#M000088","()","",2],["new_hash_of_arrays","Autotest","classes/Autotest.html#M000063","()","",2],["normal_to_test","ZenTestMapping","classes/ZenTestMapping.html#M000093","(name)","Generates a test method name from a normal method, taking into account names composed of metacharacters",2],["old_run_tests","Autotest","classes/Autotest.html#M000009","()","Alias for #run_tests",2],["options","Autotest","classes/Autotest.html#M000014","()","",2],["options","Autotest","classes/Autotest.html#M000013","()","",2],["options=","Autotest::RCov","classes/Autotest/RCov.html#M000005","(o)","",2],["parse_diff","UnitDiff","classes/UnitDiff.html#M000081","(result)","Parses a single diff recording the header and what was expected, and what was actually obtained. ",2],["parse_input","UnitDiff","classes/UnitDiff.html#M000074","(input, output)","",2],["parse_options","Autotest","classes/Autotest.html#M000015","(args = ARGV)","",2],["path_to_classname","Autotest","classes/Autotest.html#M000045","(s)","Convert a path in a string, s, into a class name, changing underscores to CamelCase, etc. ",2],["pattern=","Autotest::RCov","classes/Autotest/RCov.html#M000004","(o)","",2],["process_class","ZenTest","classes/ZenTest.html#M000099","(klassname, full=false)","Does all the work of finding a class by name, obtaining its methods and those of its superclass. The",2],["rake_build","Multiruby","classes/Multiruby.html#M000048","(inst_dir)","",2],["remove_exception","Autotest","classes/Autotest.html#M000077","(regexp)","Removes +regexp+ to the list of exceptions for find_file. This must be called _before_ the exceptions",2],["remove_mapping","Autotest","classes/Autotest.html#M000072","(regexp)","Removed a file mapping matching +regexp+. ",2],["reorder","Autotest","classes/Autotest.html#M000064","(files_to_test)","",2],["rerun_all_tests","Autotest","classes/Autotest.html#M000065","()","Rerun the tests from cold (reset state) ",2],["reset","Autotest","classes/Autotest.html#M000066","()","Clear all state information about test failures and whether interrupts will kill autotest. ",2],["restart","Autotest","classes/Autotest.html#M000042","()","",2],["result","ZenTest","classes/ZenTest.html#M000108","()","presents results in a readable manner. ",2],["rm","Multiruby","classes/Multiruby.html#M000049","(name)","",2],["root_dir","Multiruby","classes/Multiruby.html#M000050","()","",2],["ruby","Autotest","classes/Autotest.html#M000067","()","Determine and return the path of the ruby executable. ",2],["ruby_cmd","Autotest","classes/Autotest.html#M000060","()","Returns the base of the ruby command. ",2],["run","Autotest","classes/Autotest.html#M000021","()","Initialize and run the system. ",2],["run","Autotest","classes/Autotest.html#M000025","()","Repeatedly run failed tests, then all tests, then wait for changes and carry on until killed. ",2],["run","Multiruby","classes/Multiruby.html#M000052","(base_cmd, log = nil)","",2],["run_tests","Autotest","classes/Autotest.html#M000008","()","",2],["run_tests","Autotest","classes/Autotest.html#M000030","()","Look for files to test then run the tests and handle the results. ",2],["runner","Autotest","classes/Autotest.html#M000018","()","Calculates the autotest runner to use to run the tests. Can be overridden with --style, otherwise uses",2],["scan_files","ZenTest","classes/ZenTest.html#M000100","(*files)","Work through files, collecting class names, method names and assertions. Detects ZenTest (SKIP|FULL)",2],["setup_dirs","Multiruby","classes/Multiruby.html#M000053","(download = true)","",2],["sleep_time=","Autotest::AutoUpdate","classes/Autotest/AutoUpdate.html#M000000","(o)","",2],["svn_co","Multiruby","classes/Multiruby.html#M000055","(url, dir)","",2],["tags","Multiruby","classes/Multiruby.html#M000056","()","",2],["test_files_for","Autotest","classes/Autotest.html#M000068","(filename)","Return the name of the file with the tests for filename by finding a +test_mapping+ that matches the",2],["test_to_normal","ZenTestMapping","classes/ZenTestMapping.html#M000098","(name, klassname=nil)","Converts a method name beginning with test to its corresponding normal method name, taking into account",2],["unit_diff","UnitDiff","classes/UnitDiff.html#M000073","()","Handy wrapper for UnitDiff#unit_diff. ",2],["unit_diff","UnitDiff","classes/UnitDiff.html#M000083","(input=ARGF, output=$stdout)","Scans Test::Unit output +input+ looking for comparison failures and makes them easily readable by passing",2],["unmunge","ZenTestMapping","classes/ZenTestMapping.html#M000094","(name)","",2],["update","Multiruby","classes/Multiruby.html#M000059","()","",2],["update_cmd=","Autotest::AutoUpdate","classes/Autotest/AutoUpdate.html#M000001","(o)","",2],["update_rubygems","Multiruby","classes/Multiruby.html#M000062","()","",2],["usage","ZenTest","classes/ZenTest.html#M000109","()","Provide a certain amount of help. ",2],["usage_with_exit","ZenTest","classes/ZenTest.html#M000110","()","Give help, then quit. ",2],["wait_for_changes","Autotest","classes/Autotest.html#M000069","()","Sleep then look for files to test, until there are some. ",2],["zentest","Module","classes/Module.html#M000085","()","",2],["History.txt","files/History_txt.html","files/History_txt.html","","=== 4.6.2 / 2011-08-24  * 1 minor enhancement:    * Added Autotest Tips section to Readme  * 1 bug fix:",3],["Manifest.txt","files/Manifest_txt.html","files/Manifest_txt.html","",".autotest History.txt Manifest.txt README.txt Rakefile articles/Article.css articles/getting_started_with_autotest.html",3],["README.txt","files/README_txt.html","files/README_txt.html","","= ZenTest  home :: https://github.com/seattlerb/zentest rdoc :: http://zentest.rubyforge.org/ZenTest",3],["how_to_use_zentest.txt","files/articles/how_to_use_zentest_txt.html","files/articles/how_to_use_zentest_txt.html","","How to Use ZenTest with Ruby by Pat Eyler <pate@kohalabs.com> http://linuxjournal.com/article.php?sid=7776",3],["example.txt","files/example_txt.html","files/example_txt.html","","   What do we do to get people writing tests? What do we do to get people writing tests first?  I didn't",3],["autotest.rb","files/lib/autotest_rb.html","files/lib/autotest_rb.html","","",3],["autoupdate.rb","files/lib/autotest/autoupdate_rb.html","files/lib/autotest/autoupdate_rb.html","","",3],["bundler.rb","files/lib/autotest/bundler_rb.html","files/lib/autotest/bundler_rb.html","","Prefix all test runs with `bundle exec` so the runs use the bundled environment. ",3],["isolate.rb","files/lib/autotest/isolate_rb.html","files/lib/autotest/isolate_rb.html","","Run autotest with isolate support. ",3],["once.rb","files/lib/autotest/once_rb.html","files/lib/autotest/once_rb.html","","this is for autotest plugin developers only... ",3],["preload.rb","files/lib/autotest/preload_rb.html","files/lib/autotest/preload_rb.html","","",3],["rcov.rb","files/lib/autotest/rcov_rb.html","files/lib/autotest/rcov_rb.html","","",3],["restart.rb","files/lib/autotest/restart_rb.html","files/lib/autotest/restart_rb.html","","",3],["timestamp.rb","files/lib/autotest/timestamp_rb.html","files/lib/autotest/timestamp_rb.html","","",3],["focus.rb","files/lib/focus_rb.html","files/lib/focus_rb.html","","",3],["functional_test_matrix.rb","files/lib/functional_test_matrix_rb.html","files/lib/functional_test_matrix_rb.html","","The Idea: This is supposed to get us thinking about the various dimensions our testing should address.",3],["multiruby.rb","files/lib/multiruby_rb.html","files/lib/multiruby_rb.html","","",3],["unit_diff.rb","files/lib/unit_diff_rb.html","files/lib/unit_diff_rb.html","","",3],["zentest.rb","files/lib/zentest_rb.html","files/lib/zentest_rb.html","","",3],["zentest_mapping.rb","files/lib/zentest_mapping_rb.html","files/lib/zentest_mapping_rb.html","","ZenTestMapping - mapping method names from impl to test. Method names are mapped bidirectionally in the",3]],"searchIndex":["autotest","autoupdate","bundler","isolate","once","preload","rcov","restart","timestamp","functionaltestmatrix","module","multiruby","unitdiff","zentest","zentestmapping","action()","action()","add_discovery()","add_exception()","add_hook()","add_mapping()","add_missing_method()","add_sigint_handler()","add_sigquit_handler()","all_good()","analyze()","analyze_impl()","analyze_test()","autodiscover()","autotest()","blur()","build_and_install()","clean()","clear_exceptions()","clear_mappings()","command=()","consolidate_failures()","convert_class_name()","create_method()","diff()","dir=()","each_scm_build_dir()","env()","exceptions()","fetch_tar()","files_matching()","find_files()","find_files_to_test()","fix()","focus()","focus_re()","generate_code()","get_class()","get_inherited_methods_for()","get_methods_for()","get_to_green()","glob()","glob=()","gnu_utils_build()","handle_results()","help()","hook()","in_build_dir()","in_install_dir()","in_root_dir()","in_tmp_dir()","in_versions_dir()","is_test_class()","known_files()","list()","load_file()","make_test_cmd()","massage()","matching_versions()","matrix()","matrix()","merge_rubygems()","methods_and_tests()","missing_methods()","mri_latest_tag()","munge()","new()","new()","new_hash_of_arrays()","normal_to_test()","old_run_tests()","options()","options()","options=()","parse_diff()","parse_input()","parse_options()","path_to_classname()","pattern=()","process_class()","rake_build()","remove_exception()","remove_mapping()","reorder()","rerun_all_tests()","reset()","restart()","result()","rm()","root_dir()","ruby()","ruby_cmd()","run()","run()","run()","run_tests()","run_tests()","runner()","scan_files()","setup_dirs()","sleep_time=()","svn_co()","tags()","test_files_for()","test_to_normal()","unit_diff()","unit_diff()","unmunge()","update()","update_cmd=()","update_rubygems()","usage()","usage_with_exit()","wait_for_changes()","zentest()","history.txt","manifest.txt","readme.txt","how_to_use_zentest.txt","example.txt","autotest.rb","autoupdate.rb","bundler.rb","isolate.rb","once.rb","preload.rb","rcov.rb","restart.rb","timestamp.rb","focus.rb","functional_test_matrix.rb","multiruby.rb","unit_diff.rb","zentest.rb","zentest_mapping.rb"],"longSearchIndex":["lib/autotest.rb","autotest","autotest","autotest","autotest","autotest","autotest","autotest","autotest","lib/functional_test_matrix.rb","lib/zentest.rb","lib/multiruby.rb","lib/unit_diff.rb","lib/zentest.rb","lib/zentest_mapping.rb","functionaltestmatrix","functionaltestmatrix","autotest","autotest","autotest","autotest","zentest","autotest","autotest","autotest","zentest","zentest","zentest","autotest","zentest","module","multiruby","multiruby","autotest","autotest","autotest::rcov","autotest","zentest","zentest","unitdiff","autotest::isolate","multiruby","multiruby","autotest","multiruby","autotest","autotest","autotest","zentest","module","module","zentest","zentest","zentest","zentest","autotest","autotest::preload","autotest::preload","multiruby","autotest","multiruby","autotest","multiruby","multiruby","multiruby","multiruby","multiruby","zentest","autotest","multiruby","zentest","autotest","unitdiff","multiruby","functionaltestmatrix","functionaltestmatrix","multiruby","zentest","zentest","multiruby","zentestmapping","autotest","zentest","autotest","zentestmapping","autotest","autotest","autotest","autotest::rcov","unitdiff","unitdiff","autotest","autotest","autotest::rcov","zentest","multiruby","autotest","autotest","autotest","autotest","autotest","autotest","zentest","multiruby","multiruby","autotest","autotest","autotest","autotest","multiruby","autotest","autotest","autotest","zentest","multiruby","autotest::autoupdate","multiruby","multiruby","autotest","zentestmapping","unitdiff","unitdiff","zentestmapping","multiruby","autotest::autoupdate","multiruby","zentest","zentest","autotest","module","files/history_txt.html","files/manifest_txt.html","files/readme_txt.html","files/articles/how_to_use_zentest_txt.html","files/example_txt.html","files/lib/autotest_rb.html","files/lib/autotest/autoupdate_rb.html","files/lib/autotest/bundler_rb.html","files/lib/autotest/isolate_rb.html","files/lib/autotest/once_rb.html","files/lib/autotest/preload_rb.html","files/lib/autotest/rcov_rb.html","files/lib/autotest/restart_rb.html","files/lib/autotest/timestamp_rb.html","files/lib/focus_rb.html","files/lib/functional_test_matrix_rb.html","files/lib/multiruby_rb.html","files/lib/unit_diff_rb.html","files/lib/zentest_rb.html","files/lib/zentest_mapping_rb.html"]}}