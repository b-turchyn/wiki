#!/usr/bin/env ruby

DAYS_AGO = ARGV.first || 7

##
# Scans over the git history of this repo and generates a Markdown list of
# files that changed recently, generating links for each of them.
##

##
# Extracts the title from a Markdown file based on the first h1 tag. Does not
# take into account custom titles in the Markdown frontmatter.
##
def get_title(file)
  File.foreach(file) do |line|
    return line.gsub(/^# /, '').strip if line.start_with? '# '
  end
end

##
# Generates a URL to the file based on the name of the Markdown file. Does
# not take into account custom slugs in the Markdown frontmatter.
##
def get_url(file)
  file.sub! /\.md$/, '' if file.end_with? '.md'
  file.sub! /\/index$/, '' if file.end_with? 'index'
  file.sub! /^docs\//, ''

  "https://wiki.brianturchyn.net/#{file}/"
end

##
# Given an object with a :title and :url, create a Markdown-compatible link
# that's part of an unordered list
##
def format_link(link)
  "- [#{link[:title]}](#{link[:url]})"
end

# Get the list of files from Git
GIT_FILES = `git log --name-only --since="#{DAYS_AGO} days ago" --pretty=format:`

files = GIT_FILES.split # Split by each line
  .uniq # De-duplicate
  .filter {|file| file.start_with? 'docs'} # Only grab wiki pages
  .filter {|file| File.exist? file} # Make sure the file is still there
  .map {|file| {title: get_title(file), url: get_url(file)}} # Create the meta object
  .sort_by {|file| file[:title]} # Sort
  .map {|file| format_link file } # Create the link

puts files # Output to stdout
