# file reading found here http://alvinalexander.com/blog/post/ruby/how-process-line-text-file-ruby
# ruby sample code.
# process every line in a text file with ruby (version 1).
# get the textfile
file='../_private/students.txt'
# create a new array
students = Array.new
# read the file line by line
File.readlines(file).each do |line|
# push every line into the array 
  students.push(line)
end
# get 15 elements from the array
res = students.sample(15)
# write them to a file
File.open("../_private/result.txt", "w+") do |f|
  f.puts(res)
end
# Done