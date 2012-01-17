var search_data = {"index":{"info":[["Array","lib/diff/lcs/array.rb","classes/Array.html"," < Object","",1],["Diff","lib/diff/lcs.rb","classes/Diff.html"," < ","",1],["LCS","Diff","classes/Diff/LCS.html"," < ","= Diff::LCS 1.1.3 Computes \"intelligent\" differences between two sequenced Enumerables. This is an implementation",1],["Block","Diff::LCS","classes/Diff/LCS/Block.html"," < Object","A block is an operation removing, adding, or changing a group of items. Basically, this is just a list",1],["Change","Diff::LCS","classes/Diff/LCS/Change.html"," < Object","Represents a simplistic (non-contextual) change. Represents the removal or addition of an element from",1],["ChangeTypeTests","Diff::LCS","classes/Diff/LCS/ChangeTypeTests.html"," < ","Centralises the change test code in Diff::LCS::Change and Diff::LCS::ContextChange, since it's the same",1],["ContextChange","Diff::LCS","classes/Diff/LCS/ContextChange.html"," < Object","Represents a contextual change. Contains the position and values of the elements in the old and the new",1],["ContextDiffCallbacks","Diff::LCS","classes/Diff/LCS/ContextDiffCallbacks.html"," < Diff::LCS::DiffCallbacks","This will produce a compound array of contextual diff change objects. Each element in the #diffs array",1],["DefaultCallbacks","Diff::LCS","classes/Diff/LCS/DefaultCallbacks.html"," < Object","This callback object implements the default set of callback events, which only returns the event itself.",1],["DiffCallbacks","Diff::LCS","classes/Diff/LCS/DiffCallbacks.html"," < Object","This will produce a compound array of simple diff change objects. Each element in the #diffs array is",1],["HTMLDiff","Diff::LCS","classes/Diff/LCS/HTMLDiff.html"," < Object","",1],["Callbacks","Diff::LCS::HTMLDiff","classes/Diff/LCS/HTMLDiff/Callbacks.html"," < Object","",1],["Hunk","Diff::LCS","classes/Diff/LCS/Hunk.html"," < Object","A Hunk is a group of Blocks which overlap because of the context surrounding each block. (So if we're",1],["Ldiff","Diff::LCS","classes/Diff/LCS/Ldiff.html"," < ","== ldiff Usage ldiff [options] oldfile newfile -c::                            Displays a context diff",1],["SDiffCallbacks","Diff::LCS","classes/Diff/LCS/SDiffCallbacks.html"," < Object","This will produce a simple array of diff change objects. Each element in the #diffs array is a single",1],["String","lib/diff/lcs/string.rb","classes/String.html"," < Object","Includes Diff::LCS into String. ",1],["<=>","Diff::LCS::Change","classes/Diff/LCS/Change.html#M000023","(other)","",2],["<=>","Diff::LCS::ContextChange","classes/Diff/LCS/ContextChange.html#M000034","(other)","",2],["==","Diff::LCS::Change","classes/Diff/LCS/Change.html#M000021","(other)","",2],["==","Diff::LCS::ContextChange","classes/Diff/LCS/ContextChange.html#M000032","(other)","",2],["LCS","Diff::LCS","classes/Diff/LCS.html#M000069","(seq1, seq2, &block)","Given two sequenced Enumerables, LCS returns an Array containing their longest common subsequences. lcs",2],["__diff_direction","Diff::LCS","classes/Diff/LCS.html#M000081","(src, patchset, limit = nil)","Examine the patchset and the source to see in which direction the patch should be applied. WARNING: By",2],["__inverse_vector","Diff::LCS","classes/Diff/LCS.html#M000079","(a, vector)","If +vector+ maps the matching elements of another collection onto this Enumerable, compute the inverse",2],["__lcs","Diff::LCS","classes/Diff/LCS.html#M000077","(a, b)","private Compute the longest common subsequence between the sequenced Enumerables +a+ and +b+. The result",2],["__normalize_patchset","Diff::LCS","classes/Diff/LCS.html#M000082","(patchset)","Normalize the patchset. A patchset is always a sequence of changes, but how those changes are represented",2],["__position_hash","Diff::LCS","classes/Diff/LCS.html#M000080","(enum, interval = 0 .. -1)","Returns a hash mapping each element of an Enumerable to the set of positions it occupies in the Enumerable,",2],["__replace_next_larger","Diff::LCS","classes/Diff/LCS.html#M000078","(enum, value, last_index = nil)","Find the place at which +value+ would normally be inserted into the Enumerable. If that place is already",2],["add_nonempty_hunk","Diff::LCS::DiffCallbacks","classes/Diff/LCS/DiffCallbacks.html#M000012","()","",2],["adding?","Diff::LCS::ChangeTypeTests","classes/Diff/LCS/ChangeTypeTests.html#M000014","()","",2],["change","Diff::LCS::ContextDiffCallbacks","classes/Diff/LCS/ContextDiffCallbacks.html#M000022","(event)","",2],["change","Diff::LCS::DefaultCallbacks","classes/Diff/LCS/DefaultCallbacks.html#M000006","(event)","Called when both the old and new values have changed. ",2],["change","Diff::LCS::SDiffCallbacks","classes/Diff/LCS/SDiffCallbacks.html#M000031","(event)","",2],["changed?","Diff::LCS::ChangeTypeTests","classes/Diff/LCS/ChangeTypeTests.html#M000016","()","",2],["context_diff","Diff::LCS::Hunk","classes/Diff/LCS/Hunk.html#M000056","()","",2],["context_range","Diff::LCS::Hunk","classes/Diff/LCS/Hunk.html#M000058","(mode)","Generate a range of item numbers to print. Only print 1 number if the range has only one item in it.",2],["deleting?","Diff::LCS::ChangeTypeTests","classes/Diff/LCS/ChangeTypeTests.html#M000013","()","",2],["diff","Diff::LCS","classes/Diff/LCS.html#M000070","(seq1, seq2, callbacks = nil, &block)","Diff::LCS.diff computes the smallest set of additions and deletions necessary to turn the first sequence",2],["diff","Diff::LCS","classes/Diff/LCS.html#M000061","(other, callbacks = nil, &block)","Returns the difference set between +self+ and +other+. See Diff::LCS#diff. ",2],["diff","Diff::LCS::Hunk","classes/Diff/LCS/Hunk.html#M000052","(format)","",2],["diff_size","Diff::LCS::Block","classes/Diff/LCS/Block.html#M000001","()","",2],["discard_a","Diff::LCS::ContextDiffCallbacks","classes/Diff/LCS/ContextDiffCallbacks.html#M000017","(event)","",2],["discard_a","Diff::LCS::DefaultCallbacks","classes/Diff/LCS/DefaultCallbacks.html#M000004","(event)","Called when the old value is discarded in favour of the new value. ",2],["discard_a","Diff::LCS::DiffCallbacks","classes/Diff/LCS/DiffCallbacks.html#M000010","(event)","",2],["discard_a","Diff::LCS::HTMLDiff::Callbacks","classes/Diff/LCS/HTMLDiff/Callbacks.html#M000042","(event)","This will be called when there is a line in A that isn't in B ",2],["discard_a","Diff::LCS::SDiffCallbacks","classes/Diff/LCS/SDiffCallbacks.html#M000029","(event)","",2],["discard_b","Diff::LCS::ContextDiffCallbacks","classes/Diff/LCS/ContextDiffCallbacks.html#M000018","(event)","",2],["discard_b","Diff::LCS::DefaultCallbacks","classes/Diff/LCS/DefaultCallbacks.html#M000005","(event)","Called when the new value is discarded in favour of the old value. ",2],["discard_b","Diff::LCS::DiffCallbacks","classes/Diff/LCS/DiffCallbacks.html#M000011","(event)","",2],["discard_b","Diff::LCS::HTMLDiff::Callbacks","classes/Diff/LCS/HTMLDiff/Callbacks.html#M000043","(event)","This will be called when there is a line in B that isn't in A ",2],["discard_b","Diff::LCS::SDiffCallbacks","classes/Diff/LCS/SDiffCallbacks.html#M000030","(event)","",2],["each_old","Diff::LCS::Hunk","classes/Diff/LCS/Hunk.html#M000053","(block)","",2],["ed_diff","Diff::LCS::Hunk","classes/Diff/LCS/Hunk.html#M000057","(format)","",2],["finish","Diff::LCS::DiffCallbacks","classes/Diff/LCS/DiffCallbacks.html#M000008","()","Finalizes the diff process. If an unprocessed hunk still exists, then it is appended to the diff list.",2],["finished_a?","Diff::LCS::ChangeTypeTests","classes/Diff/LCS/ChangeTypeTests.html#M000019","()","",2],["finished_b?","Diff::LCS::ChangeTypeTests","classes/Diff/LCS/ChangeTypeTests.html#M000020","()","",2],["from_a","Diff::LCS::Change","classes/Diff/LCS/Change.html#M000027","(arr)","",2],["from_a","Diff::LCS::ContextChange","classes/Diff/LCS/ContextChange.html#M000037","(arr)","Creates a ContextChange from an array produced by ContextChange#to_a. ",2],["htmlize","Diff::LCS::HTMLDiff::Callbacks","classes/Diff/LCS/HTMLDiff/Callbacks.html#M000040","(element, css_class)","",2],["inspect","Diff::LCS::ContextChange","classes/Diff/LCS/ContextChange.html#M000033","(*args)","",2],["lcs","Diff::LCS","classes/Diff/LCS.html#M000060","(other, &block)","Returns an Array containing the longest common subsequence(s) between +self+ and +other+. See Diff::LCS#LCS.",2],["match","Diff::LCS::DefaultCallbacks","classes/Diff/LCS/DefaultCallbacks.html#M000003","(event)","Called when two items match. ",2],["match","Diff::LCS::DiffCallbacks","classes/Diff/LCS/DiffCallbacks.html#M000009","(event)","",2],["match","Diff::LCS::HTMLDiff::Callbacks","classes/Diff/LCS/HTMLDiff/Callbacks.html#M000041","(event)","This will be called with both lines are the same ",2],["match","Diff::LCS::SDiffCallbacks","classes/Diff/LCS/SDiffCallbacks.html#M000028","(event)","",2],["new","Diff::LCS::Block","classes/Diff/LCS/Block.html#M000000","(chunk)","",2],["new","Diff::LCS::Change","classes/Diff/LCS/Change.html#M000024","(action, position, element)","",2],["new","Diff::LCS::ContextChange","classes/Diff/LCS/ContextChange.html#M000035","(action, old_position, old_element, new_position, new_element)","",2],["new","Diff::LCS::DiffCallbacks","classes/Diff/LCS/DiffCallbacks.html#M000007","()","",2],["new","Diff::LCS::HTMLDiff","classes/Diff/LCS/HTMLDiff.html#M000044","(left, right, options = nil)","",2],["new","Diff::LCS::HTMLDiff::Callbacks","classes/Diff/LCS/HTMLDiff/Callbacks.html#M000039","(output, options = {})","",2],["new","Diff::LCS::Hunk","classes/Diff/LCS/Hunk.html#M000047","(data_old, data_new, piece, context, file_length_difference)","Create a hunk using references to both the old and new data, as well as the piece of data ",2],["new","Diff::LCS::SDiffCallbacks","classes/Diff/LCS/SDiffCallbacks.html#M000026","()","",2],["old_diff","Diff::LCS::Hunk","classes/Diff/LCS/Hunk.html#M000054","()","Note that an old diff can't have any context. Therefore, we know that there's only one block in the hunk.",2],["op","Diff::LCS::Block","classes/Diff/LCS/Block.html#M000002","()","",2],["overlaps?","Diff::LCS::Hunk","classes/Diff/LCS/Hunk.html#M000051","(hunk = nil)","Is there an overlap between hunk arg0 and old hunk arg1? Note: if end of old hunk is one less than beginning",2],["patch","Diff::LCS","classes/Diff/LCS.html#M000065","(patchset)","Attempts to patch a copy of +self+ with the provided +patchset+. See Diff::LCS#patch. ",2],["patch","Diff::LCS","classes/Diff/LCS.html#M000074","(src, patchset, direction = nil)","Given a patchset, convert the current version to the new version. If +direction+ is not specified (must",2],["patch!","Diff::LCS","classes/Diff/LCS.html#M000076","(src, patchset)","Given a set of patchset, convert the current version to the next version. Does no auto-discovery. ",2],["patch!","Diff::LCS","classes/Diff/LCS.html#M000067","(patchset)","Attempts to patch +self+ with the provided +patchset+. See Diff::LCS#patch!. Does no autodiscovery. ",2],["run","Diff::LCS::HTMLDiff","classes/Diff/LCS/HTMLDiff.html#M000046","()","",2],["sdiff","Diff::LCS","classes/Diff/LCS.html#M000071","(seq1, seq2, callbacks = nil, &block)","Diff::LCS.sdiff computes all necessary components to show two sequences and their minimized differences",2],["sdiff","Diff::LCS","classes/Diff/LCS.html#M000062","(other, callbacks = nil, &block)","Returns the balanced (\"side-by-side\") difference set between +self+ and +other+. See Diff::LCS#sdiff.",2],["simplify","Diff::LCS::ContextChange","classes/Diff/LCS/ContextChange.html#M000038","(event)","Simplifies a context change for use in some diff callbacks. '<' actions are converted to '-' and '>'",2],["to_a","Diff::LCS::Change","classes/Diff/LCS/Change.html#M000025","()","Creates a Change from an array produced by Change#to_a. ",2],["to_a","Diff::LCS::ContextChange","classes/Diff/LCS/ContextChange.html#M000036","()","",2],["traverse_balanced","Diff::LCS","classes/Diff/LCS.html#M000064","(other, callbacks = nil, &block)","Traverses the discovered longest common subsequences between +self+ and +other+ using the alternate,",2],["traverse_balanced","Diff::LCS","classes/Diff/LCS.html#M000073","(seq1, seq2, callbacks = Diff::LCS::BalancedCallbacks)","#traverse_balanced is an alternative to #traverse_sequences. It uses a different algorithm to iterate",2],["traverse_sequences","Diff::LCS","classes/Diff/LCS.html#M000072","(seq1, seq2, callbacks = Diff::LCS::SequenceCallbacks, &block)","Diff::LCS.traverse_sequences is the most general facility provided by this module; +diff+ and +LCS+ are",2],["traverse_sequences","Diff::LCS","classes/Diff/LCS.html#M000063","(other, callbacks = nil, &block)","Traverses the discovered longest common subsequences between +self+ and +other+. See Diff::LCS#traverse_sequences.",2],["unchanged?","Diff::LCS::ChangeTypeTests","classes/Diff/LCS/ChangeTypeTests.html#M000015","()","",2],["unified_diff","Diff::LCS::Hunk","classes/Diff/LCS/Hunk.html#M000055","()","",2],["unified_range","Diff::LCS::Hunk","classes/Diff/LCS/Hunk.html#M000059","(mode)","Generate a range of item numbers to print for unified diff. Print number where block starts, followed",2],["unpatch","Diff::LCS","classes/Diff/LCS.html#M000066","(patchset)","Attempts to unpatch a copy of +self+ with the provided +patchset+. See Diff::LCS#patch. ",2],["unpatch!","Diff::LCS","classes/Diff/LCS.html#M000068","(patchset)","Attempts to unpatch +self+ with the provided +patchset+. See Diff::LCS#unpatch. Does no autodiscovery.",2],["unpatch!","Diff::LCS","classes/Diff/LCS.html#M000075","(src, patchset)","Given a set of patchset, convert the current version to the prior version. Does no auto-discovery. ",2],["unshift","Diff::LCS::Hunk","classes/Diff/LCS/Hunk.html#M000049","(hunk)","",2],["verify_options","Diff::LCS::HTMLDiff","classes/Diff/LCS/HTMLDiff.html#M000045","()","",2],["History.rdoc","files/History_rdoc.html","files/History_rdoc.html","","== 1.1.3 / 2011-08-27 * Converted to 'hoe' for release. * Converted tests to RSpec 2. * Extracted the",3],["License.rdoc","files/License_rdoc.html","files/License_rdoc.html","","== License  This software is available under three licenses: the GNU GPL version 2 (or at your option,",3],["Manifest.txt","files/Manifest_txt.html","files/Manifest_txt.html","","History.rdoc License.rdoc Manifest.txt README.rdoc Rakefile bin/htmldiff bin/ldiff diff-lcs.gemspec docs/COPYING.txt",3],["README.rdoc","files/README_rdoc.html","files/README_rdoc.html","","= diff-lcs  == Description Diff::LCS is a port of Perl's Algorithm::Diff that uses the McIlroy-Hunt longest",3],["COPYING.txt","files/docs/COPYING_txt.html","files/docs/COPYING_txt.html","","\t\t    GNU GENERAL PUBLIC LICENSE \t\t       Version 2, June 1991   Copyright (C) 1989, 1991 Free Software",3],["diff-lcs.rb","files/lib/diff-lcs_rb.html","files/lib/diff-lcs_rb.html","","",3],["lcs.rb","files/lib/diff/lcs_rb.html","files/lib/diff/lcs_rb.html","","",3],["array.rb","files/lib/diff/lcs/array_rb.html","files/lib/diff/lcs/array_rb.html","","Includes Diff::LCS into the Array built-in class. ",3],["block.rb","files/lib/diff/lcs/block_rb.html","files/lib/diff/lcs/block_rb.html","","Contains Diff::LCS::Block for bin/ldiff. ",3],["callbacks.rb","files/lib/diff/lcs/callbacks_rb.html","files/lib/diff/lcs/callbacks_rb.html","","Contains definitions for all default callback objects. ",3],["change.rb","files/lib/diff/lcs/change_rb.html","files/lib/diff/lcs/change_rb.html","","Provides Diff::LCS::Change and Diff::LCS::ContextChange. ",3],["htmldiff.rb","files/lib/diff/lcs/htmldiff_rb.html","files/lib/diff/lcs/htmldiff_rb.html","","",3],["hunk.rb","files/lib/diff/lcs/hunk_rb.html","files/lib/diff/lcs/hunk_rb.html","","",3],["ldiff.rb","files/lib/diff/lcs/ldiff_rb.html","files/lib/diff/lcs/ldiff_rb.html","","",3],["string.rb","files/lib/diff/lcs/string_rb.html","files/lib/diff/lcs/string_rb.html","","Includes Diff::LCS into String. ",3]],"searchIndex":["array","diff","lcs","block","change","changetypetests","contextchange","contextdiffcallbacks","defaultcallbacks","diffcallbacks","htmldiff","callbacks","hunk","ldiff","sdiffcallbacks","string","<=>()","<=>()","==()","==()","lcs()","__diff_direction()","__inverse_vector()","__lcs()","__normalize_patchset()","__position_hash()","__replace_next_larger()","add_nonempty_hunk()","adding?()","change()","change()","change()","changed?()","context_diff()","context_range()","deleting?()","diff()","diff()","diff()","diff_size()","discard_a()","discard_a()","discard_a()","discard_a()","discard_a()","discard_b()","discard_b()","discard_b()","discard_b()","discard_b()","each_old()","ed_diff()","finish()","finished_a?()","finished_b?()","from_a()","from_a()","htmlize()","inspect()","lcs()","match()","match()","match()","match()","new()","new()","new()","new()","new()","new()","new()","new()","old_diff()","op()","overlaps?()","patch()","patch()","patch!()","patch!()","run()","sdiff()","sdiff()","simplify()","to_a()","to_a()","traverse_balanced()","traverse_balanced()","traverse_sequences()","traverse_sequences()","unchanged?()","unified_diff()","unified_range()","unpatch()","unpatch!()","unpatch!()","unshift()","verify_options()","history.rdoc","license.rdoc","manifest.txt","readme.rdoc","copying.txt","diff-lcs.rb","lcs.rb","array.rb","block.rb","callbacks.rb","change.rb","htmldiff.rb","hunk.rb","ldiff.rb","string.rb"],"longSearchIndex":["lib/diff/lcs/array.rb","lib/diff/lcs.rb","diff","diff::lcs","diff::lcs","diff::lcs","diff::lcs","diff::lcs","diff::lcs","diff::lcs","diff::lcs","diff::lcs::htmldiff","diff::lcs","diff::lcs","diff::lcs","lib/diff/lcs/string.rb","diff::lcs::change","diff::lcs::contextchange","diff::lcs::change","diff::lcs::contextchange","diff::lcs","diff::lcs","diff::lcs","diff::lcs","diff::lcs","diff::lcs","diff::lcs","diff::lcs::diffcallbacks","diff::lcs::changetypetests","diff::lcs::contextdiffcallbacks","diff::lcs::defaultcallbacks","diff::lcs::sdiffcallbacks","diff::lcs::changetypetests","diff::lcs::hunk","diff::lcs::hunk","diff::lcs::changetypetests","diff::lcs","diff::lcs","diff::lcs::hunk","diff::lcs::block","diff::lcs::contextdiffcallbacks","diff::lcs::defaultcallbacks","diff::lcs::diffcallbacks","diff::lcs::htmldiff::callbacks","diff::lcs::sdiffcallbacks","diff::lcs::contextdiffcallbacks","diff::lcs::defaultcallbacks","diff::lcs::diffcallbacks","diff::lcs::htmldiff::callbacks","diff::lcs::sdiffcallbacks","diff::lcs::hunk","diff::lcs::hunk","diff::lcs::diffcallbacks","diff::lcs::changetypetests","diff::lcs::changetypetests","diff::lcs::change","diff::lcs::contextchange","diff::lcs::htmldiff::callbacks","diff::lcs::contextchange","diff::lcs","diff::lcs::defaultcallbacks","diff::lcs::diffcallbacks","diff::lcs::htmldiff::callbacks","diff::lcs::sdiffcallbacks","diff::lcs::block","diff::lcs::change","diff::lcs::contextchange","diff::lcs::diffcallbacks","diff::lcs::htmldiff","diff::lcs::htmldiff::callbacks","diff::lcs::hunk","diff::lcs::sdiffcallbacks","diff::lcs::hunk","diff::lcs::block","diff::lcs::hunk","diff::lcs","diff::lcs","diff::lcs","diff::lcs","diff::lcs::htmldiff","diff::lcs","diff::lcs","diff::lcs::contextchange","diff::lcs::change","diff::lcs::contextchange","diff::lcs","diff::lcs","diff::lcs","diff::lcs","diff::lcs::changetypetests","diff::lcs::hunk","diff::lcs::hunk","diff::lcs","diff::lcs","diff::lcs","diff::lcs::hunk","diff::lcs::htmldiff","files/history_rdoc.html","files/license_rdoc.html","files/manifest_txt.html","files/readme_rdoc.html","files/docs/copying_txt.html","files/lib/diff-lcs_rb.html","files/lib/diff/lcs_rb.html","files/lib/diff/lcs/array_rb.html","files/lib/diff/lcs/block_rb.html","files/lib/diff/lcs/callbacks_rb.html","files/lib/diff/lcs/change_rb.html","files/lib/diff/lcs/htmldiff_rb.html","files/lib/diff/lcs/hunk_rb.html","files/lib/diff/lcs/ldiff_rb.html","files/lib/diff/lcs/string_rb.html"]}}