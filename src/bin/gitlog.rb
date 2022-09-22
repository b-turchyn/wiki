#!/usr/bin/env ruby
#
def get_title(file)
  File.foreach(file) do |line|
    return line.gsub(/^# /, '').strip if line.start_with? '# '
  end
end

def get_url(file)
  file.sub! /\.md$/, '' if file.end_with? '.md'
  file.sub! /\/index$/, '' if file.end_with? 'index'
  file.sub! /^docs\//, ''

  "https://wiki.brianturchyn.net/#{file}/"
end

def format_link(link)
  "- [#{link[:title]}](#{link[:url]})"
end

GIT_FILES = `git log --name-only --since="7 days ago" --pretty=format:`

files = GIT_FILES.split
  .uniq
  .filter {|file| File.exist? file}
  .map {|file| {title: get_title(file), url: get_url(file)}}
  .sort_by {|file| file[:title]}
  .map {|file| format_link file }

puts files
