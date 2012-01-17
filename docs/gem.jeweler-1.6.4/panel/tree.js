var tree = [["","","files",[["ChangeLog.markdown","files/ChangeLog_markdown.html","",[]],["LICENSE.txt","files/LICENSE_txt.html","",[]],["README.markdown","files/README_markdown.html","",[]],["","","lib",[["","","jeweler",[["","","commands",[["build_gem.rb","files/lib/jeweler/commands/build_gem_rb.html","",[]],["check_dependencies.rb","files/lib/jeweler/commands/check_dependencies_rb.html","",[]],["install_gem.rb","files/lib/jeweler/commands/install_gem_rb.html","",[]],["release_gemspec.rb","files/lib/jeweler/commands/release_gemspec_rb.html","",[]],["release_to_git.rb","files/lib/jeweler/commands/release_to_git_rb.html","",[]],["release_to_rubygems.rb","files/lib/jeweler/commands/release_to_rubygems_rb.html","",[]],["validate_gemspec.rb","files/lib/jeweler/commands/validate_gemspec_rb.html","",[]],["","","version",[["base.rb","files/lib/jeweler/commands/version/base_rb.html","",[]],["bump_major.rb","files/lib/jeweler/commands/version/bump_major_rb.html","",[]],["bump_minor.rb","files/lib/jeweler/commands/version/bump_minor_rb.html","",[]],["bump_patch.rb","files/lib/jeweler/commands/version/bump_patch_rb.html","",[]],["write.rb","files/lib/jeweler/commands/version/write_rb.html","",[]]]],["write_gemspec.rb","files/lib/jeweler/commands/write_gemspec_rb.html","",[]]]],["commands.rb","files/lib/jeweler/commands_rb.html","",[]],["errors.rb","files/lib/jeweler/errors_rb.html","",[]],["gemcutter_tasks.rb","files/lib/jeweler/gemcutter_tasks_rb.html","",[]],["gemspec_helper.rb","files/lib/jeweler/gemspec_helper_rb.html","",[]],["","","generator",[["application.rb","files/lib/jeweler/generator/application_rb.html","",[]],["bacon_mixin.rb","files/lib/jeweler/generator/bacon_mixin_rb.html","",[]],["github_mixin.rb","files/lib/jeweler/generator/github_mixin_rb.html","",[]],["micronaut_mixin.rb","files/lib/jeweler/generator/micronaut_mixin_rb.html","",[]],["minitest_mixin.rb","files/lib/jeweler/generator/minitest_mixin_rb.html","",[]],["options.rb","files/lib/jeweler/generator/options_rb.html","",[]],["rdoc_mixin.rb","files/lib/jeweler/generator/rdoc_mixin_rb.html","",[]],["riot_mixin.rb","files/lib/jeweler/generator/riot_mixin_rb.html","",[]],["rspec_mixin.rb","files/lib/jeweler/generator/rspec_mixin_rb.html","",[]],["shindo_mixin.rb","files/lib/jeweler/generator/shindo_mixin_rb.html","",[]],["shoulda_mixin.rb","files/lib/jeweler/generator/shoulda_mixin_rb.html","",[]],["testspec_mixin.rb","files/lib/jeweler/generator/testspec_mixin_rb.html","",[]],["testunit_mixin.rb","files/lib/jeweler/generator/testunit_mixin_rb.html","",[]],["yard_mixin.rb","files/lib/jeweler/generator/yard_mixin_rb.html","",[]]]],["generator.rb","files/lib/jeweler/generator_rb.html","",[]],["rubyforge_tasks.rb","files/lib/jeweler/rubyforge_tasks_rb.html","",[]],["rubygems_dot_org_tasks.rb","files/lib/jeweler/rubygems_dot_org_tasks_rb.html","",[]],["rubygems_tasks.rb","files/lib/jeweler/rubygems_tasks_rb.html","",[]],["specification.rb","files/lib/jeweler/specification_rb.html","",[]],["tasks.rb","files/lib/jeweler/tasks_rb.html","",[]],["","","templates",[["LICENSE.txt","files/lib/jeweler/templates/LICENSE_txt.html","",[]],["","","features",[["default.feature","files/lib/jeweler/templates/features/default_feature.html","",[]]]]]],["version.rb","files/lib/jeweler/version_rb.html","",[]],["version_helper.rb","files/lib/jeweler/version_helper_rb.html","",[]]]],["jeweler.rb","files/lib/jeweler_rb.html","",[]]]]]],["Jeweler","classes/Jeweler.html"," < Object",[["Commands","classes/Jeweler/Commands.html","",[["BuildGem","classes/Jeweler/Commands/BuildGem.html"," < Object",[]],["CheckDependencies","classes/Jeweler/Commands/CheckDependencies.html"," < Object",[["MissingDependenciesError","classes/Jeweler/Commands/CheckDependencies/MissingDependenciesError.html"," < RuntimeError",[]]]],["InstallGem","classes/Jeweler/Commands/InstallGem.html"," < Object",[]],["ReleaseGemspec","classes/Jeweler/Commands/ReleaseGemspec.html"," < Object",[]],["ReleaseToGit","classes/Jeweler/Commands/ReleaseToGit.html"," < Object",[]],["ReleaseToRubygems","classes/Jeweler/Commands/ReleaseToRubygems.html"," < Object",[]],["ValidateGemspec","classes/Jeweler/Commands/ValidateGemspec.html"," < Object",[]],["Version","classes/Jeweler/Commands/Version.html","",[["Base","classes/Jeweler/Commands/Version/Base.html"," < Object",[]],["BumpMajor","classes/Jeweler/Commands/Version/BumpMajor.html"," < Base",[]],["BumpMinor","classes/Jeweler/Commands/Version/BumpMinor.html"," < Base",[]],["BumpPatch","classes/Jeweler/Commands/Version/BumpPatch.html"," < Base",[]],["Write","classes/Jeweler/Commands/Version/Write.html"," < Base",[]]]],["WriteGemspec","classes/Jeweler/Commands/WriteGemspec.html"," < Object",[]]]],["FileInTheWay","classes/Jeweler/FileInTheWay.html"," < StandardError",[]],["GemSpecHelper","classes/Jeweler/GemSpecHelper.html"," < Object",[]],["GemcutterTasks","classes/Jeweler/GemcutterTasks.html"," < RubygemsDotOrgTasks",[]],["GemspecError","classes/Jeweler/GemspecError.html"," < StandardError",[]],["Generator","classes/Jeweler/Generator.html"," < Object",[["Application","classes/Jeweler/Generator/Application.html"," < Object",[]],["BaconMixin","classes/Jeweler/Generator/BaconMixin.html","",[]],["GithubMixin","classes/Jeweler/Generator/GithubMixin.html","",[]],["MicronautMixin","classes/Jeweler/Generator/MicronautMixin.html","",[]],["MinitestMixin","classes/Jeweler/Generator/MinitestMixin.html","",[]],["Options","classes/Jeweler/Generator/Options.html"," < Hash",[]],["RdocMixin","classes/Jeweler/Generator/RdocMixin.html","",[]],["RiotMixin","classes/Jeweler/Generator/RiotMixin.html","",[]],["RspecMixin","classes/Jeweler/Generator/RspecMixin.html","",[]],["ShindoMixin","classes/Jeweler/Generator/ShindoMixin.html","",[]],["ShouldaMixin","classes/Jeweler/Generator/ShouldaMixin.html","",[]],["TestspecMixin","classes/Jeweler/Generator/TestspecMixin.html","",[]],["TestunitMixin","classes/Jeweler/Generator/TestunitMixin.html","",[]],["YardMixin","classes/Jeweler/Generator/YardMixin.html","",[]]]],["GitInitFailed","classes/Jeweler/GitInitFailed.html"," < StandardError",[]],["NoGitHubRepoNameGiven","classes/Jeweler/NoGitHubRepoNameGiven.html"," < StandardError",[]],["NoGitHubToken","classes/Jeweler/NoGitHubToken.html"," < StandardError",[]],["NoGitHubUser","classes/Jeweler/NoGitHubUser.html"," < StandardError",[]],["NoGitUserEmail","classes/Jeweler/NoGitUserEmail.html"," < StandardError",[]],["NoGitUserName","classes/Jeweler/NoGitUserName.html"," < StandardError",[]],["RubyforgeTasks","classes/Jeweler/RubyforgeTasks.html"," < ::Rake::TaskLib",[]],["RubygemsDotOrgTasks","classes/Jeweler/RubygemsDotOrgTasks.html"," < ::Rake::TaskLib",[]],["Specification","classes/Jeweler/Specification.html","",[]],["Tasks","classes/Jeweler/Tasks.html"," < ::Rake::TaskLib",[]],["Version","classes/Jeweler/Version.html","",[]],["VersionHelper","classes/Jeweler/VersionHelper.html"," < Object",[["PlaintextExtension","classes/Jeweler/VersionHelper/PlaintextExtension.html","",[]],["YamlExtension","classes/Jeweler/VersionHelper/YamlExtension.html","",[]]]],["VersionYmlError","classes/Jeweler/VersionYmlError.html"," < StandardError",[]]]],["Object","classes/Object.html"," < Object",[]],["Rake","classes/Rake.html","",[["Application","classes/Rake/Application.html"," < Object",[]]]]]