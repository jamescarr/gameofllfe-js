
load('/home/jamescarr/.rvm/rubies/ruby-1.8.7-p299/lib/ruby/gems/1.8/gems/jspec-4.3.2/lib/jspec.js')
load('/home/jamescarr/.rvm/rubies/ruby-1.8.7-p299/lib/ruby/gems/1.8/gems/jspec-4.3.2/lib/jspec.xhr.js')
load('lib/yourlib.js')
load('spec/unit/spec.helper.js')

JSpec
.exec('spec/unit/cell.spec.js')
.run({ reporter: JSpec.reporters.Terminal, fixturePath: 'spec/fixtures' })
.report()
